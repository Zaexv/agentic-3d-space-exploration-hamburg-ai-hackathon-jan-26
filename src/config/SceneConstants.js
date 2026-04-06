/**
 * SceneConstants — Adaptive dual-scale system for SpAIce
 *
 * The solar system (~60 AU = 0.001 LY) and interstellar space (~4-3260 LY)
 * cannot share a single linear scale. We use two rendering contexts:
 *
 * SOLAR MODE: Camera is near the Sun. Solar system bodies rendered at AU scale.
 *             Exoplanets and stars hidden (too far to see anyway).
 *
 * INTERSTELLAR MODE: Camera is at galactic distances. Exoplanets and stars
 *                    rendered at LY scale. Solar system collapsed to a marker.
 */

// ─── Unit Conversions ────────────────────────────────────────────────
export const PARSEC_TO_LY = 3.26156;
export const AU_TO_LY = 1.581e-5;
export const LY_TO_PARSEC = 1 / PARSEC_TO_LY;

// ─── Solar Mode (inside the solar system) ────────────────────────────
/** 1 AU = 10,000 scene units in solar mode */
export const AU_TO_SCENE = 10_000;

/** Planet radii in solar mode: 1 Earth radius = 200 scene units */
export const SOLAR_RADIUS_SCALE = 200;

/** Sun radius (capped to fit inside Mercury orbit) */
export const SUN_RADIUS = 3000; // Mercury orbit at ~3,870 units

/** Max planet radius in solar mode */
export const SOLAR_MAX_RADIUS = 3000;

// ─── Interstellar Mode (galactic distances) ──────────────────────────
/** 1 light-year = 1,000 scene units in interstellar mode */
export const LY_TO_SCENE = 1_000;

/** Planet radii in interstellar mode: 1 Earth radius = 50 scene units */
export const EARTH_RADIUS_SCALE = 50;

/** Max planet radius in interstellar mode */
export const MAX_PLANET_RADIUS = 500;

/** Min visible radius for exoplanets */
export const MIN_PLANET_RADIUS = 20;

// ─── Context Switching ───────────────────────────────────────────────
/** Distance from Sun (in solar scene units) beyond which we switch to interstellar mode */
export const SOLAR_MODE_RADIUS = 600_000; // ~60 AU — edge of solar system

// ─── Camera ──────────────────────────────────────────────────────────
/** Solar mode camera */
export const SOLAR_CAMERA_NEAR = 1;
export const SOLAR_CAMERA_FAR = 2_000_000;

/** Interstellar mode camera */
export const INTERSTELLAR_CAMERA_NEAR = 1;
export const INTERSTELLAR_CAMERA_FAR = 20_000_000; // 3260 LY * 1000 + margin

// ─── LOD (interstellar mode) ─────────────────────────────────────────
export const LOD = {
    HIGH_DETAIL: 25_000,       // < 25 LY
    MEDIUM_DETAIL: 100_000,    // < 100 LY
    UPDATE_INTERVAL_MS: 1000,
    MAX_UPDATES_PER_FRAME: 2,
};

// ─── Derived ─────────────────────────────────────────────────────────
export const PARSEC_TO_SCENE = PARSEC_TO_LY * LY_TO_SCENE;
