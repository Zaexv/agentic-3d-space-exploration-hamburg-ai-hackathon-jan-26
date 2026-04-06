# Bugfix Report — Action Plan

## Root Cause: Coordinate Frame Scale Mismatch

The entire scene is broken because the solar system and exoplanets use **incompatible scales**:

```
AU_TO_SCENE = 15,000     → 1 AU = 15,000 scene units
LY_TO_SCENE =  3,000     → 1 LY =  3,000 scene units

But 1 AU = 1.581e-5 LY, so 1 AU should be:
1.581e-5 × 3,000 = 0.0474 scene units

Actual ratio: 15,000 / 0.0474 = 316,278x mismatch
```

**Result:** Neptune (30 AU) appears at 451,000 scene units — **35x further than Proxima Centauri** (4.24 LY = 12,720 units). The solar system is inflated to galactic proportions while exoplanets are compressed into the same space. Everything is geometrically nonsensical.

---

## Bug 1: Camera Blinking

**Cause:** Camera near=1, far=50M with objects spanning wildly different scales. Logarithmic depth buffer can't compensate when the solar system (0–451K units) and exoplanets (0–9.78M units) overlap in the same scene space.

**Fix:** Once scales are unified, the depth range becomes manageable. Set near=10, far based on actual scene extent.

## Bug 2: Planets Not in Right Location

**Cause:** Solar system bodies use `position_AU * 15,000` while exoplanets use `position_LY * 3,000`. These place objects in completely different scale regimes. The spacecraft starts at (-14400, -3700, -1500) which is "1 AU" in AU-scale but only "4.8 LY" in LY-scale.

**Fix:** All positions must derive from a single scale. Use LY as the base unit and derive AU_TO_SCENE mathematically.

## Bug 3: Space Dimensions Wrong

**Cause:** Direct consequence of dual scales. The solar system spans 451K units while the nearest star is only 12.7K units away. Proportions are inverted.

**Fix:** With unified scale, the solar system becomes a tiny cluster (< 0.05 scene units at LY scale) at the origin, and exoplanets are thousands of units away — astronomically correct.

## Bug 4: Exoplanets Look Horrible

**Cause:** LOD tiers, lighting, and rendering were tuned for various scale iterations but never reconciled. Emissive glow was cranked up as a band-aid for invisible planets. Colors are flat. Materials are basic.

**Fix:** With correct positioning and scales, LOD works properly. Remove compensatory glow hacks. Use proper PBR materials.

---

## Action Plan

### Step 1: Unify Coordinate System

In `src/config/SceneConstants.js`, derive AU_TO_SCENE from LY_TO_SCENE:

```javascript
export const LY_TO_SCENE = 3_000;
export const AU_TO_LY = 1.581e-5;
export const AU_TO_SCENE = AU_TO_LY * LY_TO_SCENE; // ~0.0474

// Problem: 0.0474 scene units per AU makes the solar system invisibly small.
// Neptune at 30 AU = 1.42 scene units. Earth radius at 1Re * any scale = much bigger.
//
// SOLUTION: Accept that the solar system IS a point at interstellar scales.
// Use a SEPARATE rendering approach for solar system:
// - When camera is within the solar system (< 0.001 LY from Sun), render in AU mode
// - When camera is at interstellar distances, collapse solar system to a single marker
// - OR: keep AU_TO_SCENE inflated but acknowledge it's a "zoom" — NOT the same coordinate space
```

### Step 2: Choose a Rendering Strategy

**Option A — Logarithmic/Adaptive Scale (Best UX)**
Keep two scale regimes but handle the transition properly:
- Solar system renders at AU_TO_SCENE=15,000 in its own coordinate space
- Exoplanets render at LY_TO_SCENE=3,000 in interstellar space
- The SolarSystemField group has a position offset of (0,0,0) — it's at the Sun
- When the camera is inside the solar system, exoplanets are too far to see (correct)
- When the camera is far from origin, solar system collapses to a point (correct)
- The camera near/far dynamically adjusts based on where the user is

**Option B — Pure LY Scale (Astronomically Correct)**
Everything uses LY. Solar system is a dot. Only visible when "zoomed in" via a separate view mode.

**Option C — Exaggerated Solar System (Current Intent, Fixed)**
Keep AU_TO_SCENE inflated for visual appeal, but:
- Clearly separate the solar system THREE.Group from the exoplanet THREE.Group
- Don't raycast or compute distances between them as if they're in the same space
- Disable exoplanet rendering when inside solar system and vice versa
- The spacecraft "warps" between the two regimes rather than flying smoothly

### Step 3: Fix Camera

**File:** `src/objects/Spacecraft.js`

- The `updateCamera()` is currently snapping (no lerp) which should prevent blinking
- If blinking persists, the issue is z-fighting from scale mismatch
- Once scales are fixed, camera should be stable
- Keep the snap approach (no lerp) — it's the most reliable

### Step 4: Fix Exoplanet Rendering

**File:** `src/objects/ExoplanetField.js`

Once coordinates are correct:
- Remove `MIN_VISIBLE_RADIUS = 500` hack — planets should be sized by actual radius
- Remove `emissiveIntensity: 1.5` hack — planets shouldn't glow like stars
- Use proper PBR with ambient + directional lighting
- LOD tiers will work correctly when distance calculations are meaningful

### Step 5: Fix Constants Inconsistency

**Files:** `src/core/Camera.js` vs `src/config/SceneConstants.js`

Camera.js hardcodes `far = 50_000_000` but SceneConstants defines `CAMERA_FAR = 1_000_000_000`. These need to be reconciled — Camera.js should import from SceneConstants.

### Step 6: Fix Lighting

**File:** `src/core/Scene.js`

- Ambient at 0.8 is too flat — everything looks the same
- Need directional light from Sun position for solar system
- Need ambient-only for deep space exoplanets
- Camera light range must match the scale being used

### Step 7: Reconcile Spacecraft Position and Speed

**File:** `src/objects/Spacecraft.js`

Once the scale is decided:
- Starting position must be in the correct units
- Speed must be meaningful (e.g., "1000 units/sec" should correspond to a real velocity)
- Strafe and steering forces must feel proportional

---

## Files to Modify

| File | Change |
|------|--------|
| `src/config/SceneConstants.js` | Unify AU_TO_SCENE with LY_TO_SCENE, fix all constants |
| `src/objects/SolarSystemField.js` | Adapt to chosen rendering strategy |
| `src/objects/ExoplanetField.js` | Remove rendering hacks, fix MIN_VISIBLE, fix materials |
| `src/objects/Spacecraft.js` | Fix start position, speeds, camera |
| `src/core/Camera.js` | Import CAMERA_FAR from SceneConstants, fix light range |
| `src/core/Scene.js` | Fix lighting for chosen scale |
| `src/core/Renderer.js` | Verify logarithmic depth buffer works with chosen scale |
| `src/objects/RealStarField.js` | Verify star positions match exoplanet coordinate frame |
| `main.js` | May need to toggle rendering groups based on camera position |

---

## Recommended Approach: Option A (Adaptive Scale)

This gives the best user experience — the solar system feels real and explorable, and exoplanets are correctly placed at interstellar distances.

Implementation:
1. Keep `AU_TO_SCENE = 15,000` for the solar system group
2. Keep `LY_TO_SCENE = 3,000` for exoplanets and stars
3. Add a "context switch" — when spacecraft is within 50,000 units of Sun, show solar system, hide exoplanets. When beyond, show exoplanets, hide solar system.
4. Teleporting between regimes: spacecraft position is translated between AU and LY coordinate spaces
5. Camera near/far adjusts: solar system mode (near=0.1, far=1M), interstellar mode (near=100, far=50M)
