# Planet Positions — New Data Pipeline Architecture

## Overview

Complete replacement of the data ingestion and 3D positioning system with three astronomical data sources:

| Layer | Source | Tool | Native Frame | Native Units | Update Frequency |
|-------|--------|------|-------------|--------------|-----------------|
| **Solar System** | Real-time ephemeris | `astronomy-engine` (npm) | J2000 Equatorial, heliocentric | AU (cartesian) | Every frame (live) |
| **Exoplanets** | NASA Exoplanet Archive | `astroquery` (Python) | J2000 Equatorial (ICRS) | parsecs (spherical: RA/Dec/dist) | Pipeline (monthly) |
| **Stars** | HYG Database v3 | CSV processing (Python) | J2000 Equatorial, heliocentric | parsecs (cartesian: x,y,z pre-computed) | Pipeline (static) |

### Coordinate Frame Compatibility

All three sources use **J2000 Equatorial** orientation. No rotation or axis remapping is needed.

```
Scene axes (same as J2000 EQ):
+X  →  Vernal Equinox (RA=0h, Dec=0°)
+Y  →  RA=6h, Dec=0°
+Z  →  North Celestial Pole (Dec=+90°)
Origin = Sun
```

The Sun–Earth offset (~5e-6 pc) is negligible at interstellar distances, so NASA Exoplanet Archive's Earth-centered RA/Dec is compatible with the Sun-centered HYG and astronomy-engine frames.

---

## 1. Solar System — `astronomy-engine`

**Why real-time?** Solar system objects move fast relative to us. Static JSON positions are snapshots frozen in time. `astronomy-engine` computes exact ephemeris for any date.

### API Details

```javascript
import * as Astronomy from 'astronomy-engine';

// Returns AstroVector { x, y, z, t } in AU, heliocentric J2000 EQ
const marsPos = Astronomy.HelioVector(Astronomy.Body.Mars, new Date('2026-04-06'));
// marsPos.x, marsPos.y, marsPos.z → AU

// Supported bodies:
// Body.Mercury, Body.Venus, Body.Earth, Body.Mars,
// Body.Jupiter, Body.Saturn, Body.Uranus, Body.Neptune,
// Body.Pluto, Body.Moon (geocentric!), Body.Sun
```

### Moon — Special Case

`Astronomy.GeoVector(Body.Moon, date)` returns **geocentric** coordinates (relative to Earth). To place it in the heliocentric scene:

```javascript
const earthPos = Astronomy.HelioVector(Astronomy.Body.Earth, date); // AU from Sun
const moonGeo  = Astronomy.GeoVector(Astronomy.Body.Moon, date);    // AU from Earth

const moonHelio = {
  x: earthPos.x + moonGeo.x,
  y: earthPos.y + moonGeo.y,
  z: earthPos.z + moonGeo.z,
};
```

### Scale

Solar system needs its own `THREE.Group` with AU-based scaling. Why? At the exoplanet light-year scale, the entire solar system collapses to a point:
- Neptune orbit = ~30 AU = 0.000475 LY → at `LY_TO_SCENE=100` that's 0.0475 scene units
- Neptune radius = 3.88 × 0.5 = 1.94 scene units → **planets overlap completely**

Solution: Dedicated `THREE.Group` where **1 AU = 5,000 scene units**:
- Neptune at ~30 AU = 150,000 units
- Neptune radius = 1.94 scene units × group scale (if needed)
- Well separated visually

### Bodies
Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune, Pluto, Moon, Sun (emissive sphere at origin)

### Visual Properties
Textures, rings, atmosphere, oblateness remain hard-coded per planet, ported from current `PlanetVisualGenerator.applySolarSystemOverrides()`.

### New Files
- `src/services/SimulationClock.js` — manages simulation date, speed multiplier, pause/resume
- `src/services/SolarSystemService.js` — wraps astronomy-engine, returns body positions for current date
- `src/objects/SolarSystemField.js` — renders solar system meshes, updates positions each frame

---

## 2. Exoplanets — `astroquery` + NASA Exoplanet Archive

**Why a Python pipeline?** The NASA Exoplanet Archive has 6,000+ confirmed exoplanets. We query once via TAP API, compute 3D positions in Python, and export lightweight JSON for the frontend.

### Pipeline: `pipelines/fetch_exoplanets.py`

```python
from astroquery.ipac.nexsci.nasa_exoplanet_archive import NasaExoplanetArchive

columns = [
    'pl_name', 'hostname', 'sy_dist', 'ra', 'dec',
    'pl_rade', 'pl_bmasse', 'pl_eqt', 'pl_orbper', 'pl_orbsmax',
    'discoverymethod', 'disc_year',
    'st_teff', 'st_rad', 'st_mass', 'st_spectype'
]

result = NasaExoplanetArchive.query_criteria(
    table='pscomppars',
    select=','.join(columns),
    where="sy_dist is not null and ra is not null and dec is not null"
)
```

### Coordinate Transform (done in Python)

```python
dist_ly = sy_dist * 3.26156           # parsecs → light-years
ra_rad  = ra  * (math.pi / 180)       # degrees → radians
dec_rad = dec * (math.pi / 180)

x_ly = dist_ly * cos(dec_rad) * cos(ra_rad)
y_ly = dist_ly * cos(dec_rad) * sin(ra_rad)
z_ly = dist_ly * sin(dec_rad)
```

This is the same algorithm as `CoordinateComputer.js:55-68` — just moved to Python so the frontend receives pre-computed positions.

### Output Format Per Planet

```json
{
  "pl_name": "Proxima Cen b",
  "hostname": "Proxima Cen",
  "x_ly": 1.31, "y_ly": -3.21, "z_ly": -2.22, "dist_ly": 4.24,
  "ra": 217.39, "dec": -62.68, "sy_dist": 1.30,
  "pl_rade": 1.02, "pl_bmasse": 1.05, "pl_eqt": 218,
  "pl_orbper": 11.18, "pl_orbsmax": 0.049,
  "discoverymethod": "Radial Velocity", "disc_year": 2016,
  "st_teff": 3042, "st_rad": 0.15, "st_mass": 0.12, "st_spectype": "M5.5V"
}
```

### Null Handling

Many exoplanets have `null` for `sy_dist`, `pl_rade`, or `pl_eqt`. The Python pipeline:
- Filters out planets with `null` distance/RA/Dec (can't place them in 3D)
- Frontend defaults: missing radius → 1.0 Re, missing temp → 288K (in `PlanetClassifier.js`)

### Frontend

`PlanetDataService` loads cluster JSONs. `PlanetClassifier` and `PlanetVisualGenerator` still run client-side to assign colors, atmospheres, rings, and planet types. `CoordinateComputer.js` is no longer needed since `x_ly, y_ly, z_ly` are pre-computed.

### Scale

`ExoplanetField` group where **1 light-year = 100 scene units**. Proxima Cen b at ~4.24 LY = 424 scene units.

### New Files
- `pipelines/fetch_exoplanets.py`

### Removed
- `src/services/CoordinateComputer.js` (coordinates pre-computed in Python)
- `src/config/planets.js` (solar system handled by astronomy-engine)
- Old `pipelines/data_processing/00-05_*.py` (replaced by single script)

---

## 3. Stars — HYG Database

**Why HYG?** A downloadable CSV of ~120,000 real stars with **pre-computed x, y, z** positions (parsecs) and color indices. No spherical-to-cartesian math needed — just unit conversion and color mapping.

### HYG CSV Fields Used

| Column | Type | Unit | Note |
|--------|------|------|------|
| `x` | float | parsecs | Pre-computed cartesian. J2000 EQ frame. |
| `y` | float | parsecs | |
| `z` | float | parsecs | |
| `ci` | float | B-V index | Color index → star temperature → RGB |
| `mag` | float | magnitude | Apparent visual magnitude → point size |
| `absmag` | float | magnitude | Absolute magnitude → intrinsic brightness |
| `proper` | string | — | Common name ("Sirius", "Betelgeuse") — most are null |
| `lum` | float | Solar L | Optional: glow intensity |
| `dist` | float | parsecs | **100000 = unknown distance** (filter these out) |
| `ra` | float | **HOURS** | **Not degrees!** Only needed if recomputing positions |
| `spect` | string | — | Spectral type (e.g. "G2V", "M3III") |

### B-V Color Index → RGB

Ballesteros' formula (via color temperature):

```javascript
function bvToRGB(bv) {
  // B-V → temperature (Kelvin)
  const t = 4600 * (1 / (0.92 * bv + 1.7) + 1 / (0.92 * bv + 0.62));
  // Temperature → sRGB via Planckian locus approximation
  // ... (Tanner Helland's blackbody → sRGB algorithm)
  return { r, g, b };
}
```

| B-V | Color | Temp (K) | RGB |
|-----|-------|----------|-----|
| -0.3 | Blue-white | 30,000+ | `#9bb0ff` |
| 0.0 | White | ~10,000 | `#aabfff` |
| 0.6 | Yellow (Sun) | ~6,000 | `#fff4ea` |
| 1.0 | Orange | ~4,500 | `#ffd2a1` |
| 1.4+ | Red | ~3,000 | `#ffcc6f` |

### Magnitude → Point Size

```javascript
const size = Math.max(0.1, 2.0 - star.mag * 0.2);
const opacity = Math.max(0.1, 1.0 - star.mag / 12.0);
```

### Data Optimization

| Strategy | Size | Stars |
|----------|------|-------|
| Full CSV | ~30 MB | ~120,000 |
| Binary Float32Array (x,y,z,r,g,b,size) | **~3.3 MB** | ~120,000 |
| Filter mag < 10 only | ~1.5 MB | ~40,000 |

**Chosen:** Binary Float32Array. 7 floats × 4 bytes × 120,000 = 3.3 MB. Efficient for `THREE.BufferGeometry`.

### Pipeline: `pipelines/process_hyg_stars.py`

```
hygdata_v41.csv (30MB, from github.com/astronexus/HYG-Database)
    → Filter: dist != 100000 (remove unknown distances)
    → Convert: x,y,z parsecs → light-years (* 3.26156)
    → Convert: B-V color index → RGB
    → Convert: magnitude → point size
    → Export: public/star_data/hyg_stars.bin (Float32Array)
    → Export: public/star_data/hyg_meta.json (count, bounds)
```

### Frontend: `RealStarField.js`

- Loads binary via `fetch()` + `ArrayBuffer` → `Float32Array`
- Creates `THREE.Points` with `BufferGeometry` (position, color, size attributes)
- Positions: `ly * SCENE.LY_TO_SCENE`
- Reuses `generateStarTexture(64)` for point sprites
- `renderOrder = -999`, `depthWrite: false`

### Far-field Backdrop

HYG covers ~3,260 LY. A simplified `BackgroundStarField` (5,000 random dim points in a distant shell at radius ~2,000,000) provides the galaxy backdrop beyond HYG range. This replaces and simplifies the current `StarField.js`.

### New Files
- `pipelines/process_hyg_stars.py`
- `src/objects/RealStarField.js`
- `public/star_data/hyg_stars.bin` (generated)

### Removed
- `src/objects/DynamicStarField.js` (replaced by real star data)

---

## Unified Coordinate Architecture

```
Scene Origin (0, 0, 0) = Sun
All layers share J2000 Equatorial axes (+X=Vernal Equinox, +Z=NCP)
│
├── SolarSystemField.group (AU-based, own scale)
│   ├── Sun (emissive sphere at origin)
│   ├── Mercury (AU * AU_TO_SCENE from Sun)
│   ├── Venus, Earth + Moon, Mars, ...
│   └── Neptune (~150,000 scene units from Sun)
│
├── ExoplanetField.group (light-year-based)
│   ├── Proxima Cen b (~424 scene units from origin)
│   ├── TRAPPIST-1 system (~4,000 scene units)
│   └── Distant exoplanets (up to millions of scene units)
│
├── RealStarField (light-year-based, 120K points)
│   └── All HYG stars at ly * LY_TO_SCENE
│
└── BackgroundStarField (far-field shell, 5K random points)
    └── Radius ~2,000,000 scene units
```

### Scale Constants (`src/config/SceneConstants.js`)

| Constant | Value | Purpose |
|----------|-------|---------|
| `AU_TO_SCENE` | 5,000 | Solar system planet positions (1 AU = 5000 scene units) |
| `LY_TO_SCENE` | 100 | Exoplanets + HYG stars (1 LY = 100 scene units) |
| `EARTH_RADIUS_SCALE` | 0.5 | All planet mesh radii (1 Re = 0.5 scene units) |
| `PARSEC_TO_LY` | 3.26156 | Unit conversion |
| `AU_TO_LY` | 1.581e-5 | Unit conversion |

### Why Two Separate Groups?

The solar system spans ~60 AU = 0.00095 LY. At `LY_TO_SCENE=100`, Neptune would be 0.095 scene units — invisible, and dwarfed by planet radii (~1.94 scene units). A dedicated AU-based group gives proper visual separation while keeping the same coordinate frame orientation.

---

## Implementation Phases

```
Phase 1: SceneConstants.js + SimulationClock.js (foundation)
    │
    ├── Phase 2: astronomy-engine + SolarSystemField (parallel)
    ├── Phase 3: astroquery pipeline + PlanetDataService refactor (parallel)
    └── Phase 4: HYG pipeline + RealStarField (parallel)
         │
         Phase 5: Update consumers (TeleportController, ProximityDetector, InputManager)
             │
             Phase 6: Build config (vite, package.json)
                 │
                 Phase 7: Time controls UI (SimulationClock → HUD)
```

---

## Files Changed Summary

| Action | File |
|--------|------|
| CREATE | `src/config/SceneConstants.js` |
| CREATE | `src/services/SimulationClock.js` |
| CREATE | `src/services/SolarSystemService.js` |
| CREATE | `src/objects/SolarSystemField.js` |
| CREATE | `src/objects/RealStarField.js` |
| CREATE | `pipelines/fetch_exoplanets.py` |
| CREATE | `pipelines/process_hyg_stars.py` |
| MODIFY | `src/services/PlanetDataService.js` — exoplanet-only, no coord computation |
| MODIFY | `src/objects/ExoplanetField.js` — exoplanet-only, new scale constants, remove x10000 hack |
| MODIFY | `src/utils/TeleportController.js` — dual-group positioning via getWorldPosition() |
| MODIFY | `src/utils/ProximityDetector.js` — use mesh.getWorldPosition() for both groups |
| MODIFY | `src/controls/InputManager.js` — raycaster checks both groups |
| MODIFY | `main.js` — wire 3 data sources + SimulationClock |
| MODIFY | `vite.config.js` — add star data, remove solar JSON |
| MODIFY | `package.json` — add astronomy-engine, add pipeline scripts |
| MODIFY | `src/ui/HUDManager.js` — simulation date/speed display |
| RENAME | `StarField.js` → `BackgroundStarField.js` (simplified far-field) |
| REMOVE | `src/config/planets.js` |
| REMOVE | `src/services/CoordinateComputer.js` |
| REMOVE | `src/objects/DynamicStarField.js` |
| REMOVE | `nasa_data/clusters/solar_system.json` (runtime, kept for reference) |
