# Planet Position Report - Data Ingestion Pipeline Bug

## Summary

Solar system planets are displayed **~63,251x too far apart** from each other because their positions (stored in Astronomical Units) are being incorrectly interpreted as light-years by the coordinate pipeline.

---

## Root Cause

The bug is a **unit mismatch** in the data ingestion pipeline between `solar_system.json` and `CoordinateComputer.js`.

### The Data (`nasa_data/clusters/solar_system.json`)

Solar system planets have two position-related fields:

| Field | Unit | Example (Earth) | Status |
|-------|------|-----------------|--------|
| `position` | **AU** (Astronomical Units) | `{x: 1.0, y: 0.0, z: 0.0}` | Has values |
| `characteristics.coordinates_3d` | **Light-years** | `{x_light_years: null, ...}` | **All null** |
| `ra` / `dec` | Degrees | `null` | **All null** |

All solar system planets have:
- `coordinates_3d` fields set to `null`
- `ra` and `dec` set to `null`
- `position` values in AU (Sun-centered)

### The Code (`src/services/CoordinateComputer.js`)

```javascript
// Step 1: Check if coordinates_3d already exists → x_light_years is null, so NOT skipped
// Step 2: Check if position exists → YES (AU values)
// Step 3: Check if maxPos < 50 && distLightYears > 1 → FALSE (dist is ~1e-5 ly)
// Step 4: Falls through to ELSE branch:

x = planet.position.x;  // 1.0 AU, treated as 1.0 light-years
y = planet.position.y;
z = planet.position.z;

planet.characteristics.coordinates_3d = {
    x_light_years: x,  // WRONG: 1.0 AU stored as 1.0 light-years
    ...
};
```

The `computeCoordinates()` function (line 40-43) copies the `position` values directly into `coordinates_3d` as if they were in light-years, but they are actually in AU.

### The Scale Chain

```
position.x (AU) → treated as light-years → x sceneScale(10) → x globalScale(10000)
```

| Planet  | Current World X | Correct World X | Error |
|---------|---------------:|----------------:|------:|
| Mercury | 38,700 | 0.61 | 63,251x |
| Earth   | 100,000 | 1.58 | 63,251x |
| Jupiter | 520,300 | 8.23 | 63,251x |
| Neptune | 3,006,900 | 47.54 | 63,251x |
| Pluto   | 3,948,200 | 62.42 | 63,251x |

**1 AU = 1.581 x 10^-5 light-years**, so the error factor is exactly **1 / 1.581e-5 = 63,251x**.

---

## Why Exoplanets Are Not Affected

Exoplanet data files (e.g., `nearby_quad1.json`) have proper `ra`, `dec`, and `sy_dist` (parsecs) fields. The `computeCoordinates()` function correctly converts these to 3D cartesian coordinates in light-years using:

```
distLightYears = sy_dist * 3.26156
x = distLightYears * cos(dec) * cos(ra)
y = distLightYears * cos(dec) * sin(ra)
z = distLightYears * sin(dec)
```

---

## Visual Symptoms

1. **Solar system planets are spread enormously far apart** - Neptune is at world position ~3 million units instead of ~47.5 units
2. **Solar system planets may overlap with nearby exoplanets** - Earth at 100,000 world units is in the range of real exoplanets at ~10-50 light-years
3. **Relative spacing within the solar system is correct** (all inflated by the same 63,251x factor), but absolute positioning relative to exoplanets is broken

---

## Fix Options

### Option A: Fix the data (`solar_system.json`)
Populate `coordinates_3d` with correct light-year values (AU * 1.581e-5). Since solar planets orbit the Sun and the Sun is at ~0 ly from Earth, all values should be near zero:

```json
"coordinates_3d": {
    "x_light_years": 1.581e-05,
    "y_light_years": 0.0,
    "z_light_years": 0.0
}
```

### Option B: Fix the code (`CoordinateComputer.js`)
Add a solar system detection branch that converts AU to light-years before storing:

```javascript
if (planet.hostname === 'Sun') {
    const AU_TO_LY = 1.581e-5;
    x = planet.position.x * AU_TO_LY;
    y = planet.position.y * AU_TO_LY;
    z = planet.position.z * AU_TO_LY;
}
```

### Option C: Fix both
Populate correct `coordinates_3d` in the JSON (so `computeCoordinates` skips them entirely) AND add a safety check in the code for AU-based positions.

---

## Files Involved

| File | Role |
|------|------|
| `nasa_data/clusters/solar_system.json` | Source data - AU positions, null coordinates_3d |
| `src/services/CoordinateComputer.js` | Bug location - lines 39-43 treat AU as light-years |
| `src/services/PlanetDataService.js` | Orchestrator - calls `computeCoordinates()` |
| `src/objects/ExoplanetField.js` | Consumer - multiplies by sceneScale(10) + globalScale(10000) |
