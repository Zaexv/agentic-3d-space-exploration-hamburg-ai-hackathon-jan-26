# NASA Exoplanet Data Dictionary

This document describes all attributes in the `nasa_exoplanets_filtered.json` file, optimized for 3D visualization and front-end display.

## 📊 Data Overview

- **Total Planets**: 39,251
- **Planets with 3D Positions**: 18,578
- **Planets with Gravity Data**: 3,282
- **Potentially Habitable**: 614
- **File Size**: ~600 MB (uncompressed JSON)

---

## 🔍 Data Structure

Each planet object contains the following sections:

### 1. **Basic Identifiers**

| Attribute | Type | Description | Example |
|-----------|------|-------------|---------|
| `name` | string | Official planet name | "Kepler-452 b" |
| `host_star` | string | Name of the host star | "Kepler-452" |
| `discovery_year` | integer | Year of discovery | 2015 |
| `discovery_method` | string | Detection method used | "Transit", "Radial Velocity", "Imaging" |
| `discovery_facility` | string | Observatory/facility | "Kepler Space Telescope" |
| `discovery_telescope` | string | Specific telescope | "0.95 m Kepler Telescope" |
| `discovery_instrument` | string | Instrument name | "Kepler CCD Array" |
| `default_flag` | integer | Default parameters flag (1 = yes) | 1 |
| `controversial` | boolean | Is this planet controversial? | false |

---

### 2. **Mass Properties**

| Attribute | Type | Description | Units | Front-End Use |
|-----------|------|-------------|-------|---------------|
| `mass.value` | float | Mass value (default Earth masses) | M⊕ | Display primary mass |
| `mass.earth_masses` | float | Mass in Earth masses | M⊕ | Comparison to Earth |
| `mass.jupiter_masses` | float | Mass in Jupiter masses | Mⱼ | Gas giant comparison |
| `mass.kg` | float | Mass in kilograms | kg | Scientific calculations |
| `mass.error_min` | float | Lower uncertainty | M⊕ | Error bars |
| `mass.error_max` | float | Upper uncertainty | M⊕ | Error bars |
| `mass.provenance` | string | How mass was determined | - | "Msini", "Mass", "Msin(i)/sin(i)" |

**3D Visualization Tips:**
- Use `mass.earth_masses` to scale planet sizes relative to Earth
- Gas giants (>100 M⊕) should use different visual treatment

---

### 3. **Radius Properties**

| Attribute | Type | Description | Units | Front-End Use |
|-----------|------|-------------|-------|---------------|
| `radius.value` | float | Radius (default Earth radii) | R⊕ | Primary radius value |
| `radius.earth_radii` | float | Radius in Earth radii | R⊕ | Size comparison |
| `radius.jupiter_radii` | float | Radius in Jupiter radii | Rⱼ | Gas giant sizing |
| `radius.km` | float | Radius in kilometers | km | Absolute size |
| `radius.error_min` | float | Lower uncertainty | R⊕ | Error visualization |
| `radius.error_max` | float | Upper uncertainty | R⊕ | Error visualization |

**3D Visualization Tips:**
- Use `radius.earth_radii` for sphere scaling in Three.js
- `radius.km` for label displays
- Earth = 1.0, Jupiter ≈ 11.2, Neptune ≈ 3.9

---

### 4. **Density**

| Attribute | Type | Description | Units | Front-End Use |
|-----------|------|-------------|-------|---------------|
| `density.gcc` | float | Bulk density | g/cm³ | Composition hints |
| `density.earth_relative` | float | Density relative to Earth | - | "2.3x Earth's density" |
| `density.error_min` | float | Lower uncertainty | g/cm³ | Error bars |
| `density.error_max` | float | Upper uncertainty | g/cm³ | Error bars |

**Interpretation Guide:**
- **> 7 g/cm³**: Iron-rich (metallic core)
- **5-7 g/cm³**: Rocky (Earth-like)
- **2-5 g/cm³**: Water world or ice-rich
- **< 2 g/cm³**: Gas giant

---

### 5. **Gravity & Dynamics**

| Attribute | Type | Description | Units | Front-End Use |
|-----------|------|-------------|-------|---------------|
| `gravity.surface_ms2` | float | Surface gravity | m/s² | "15.2 m/s²" |
| `gravity.earth_relative` | float | Gravity relative to Earth | - | "1.55g" (Earth = 1.0) |
| `gravity.escape_velocity_kms` | float | Escape velocity | km/s | Atmospheric retention indicator |

**Gameplay/Simulation Use:**
- Earth gravity = 9.8 m/s² = 1.0g
- High gravity (>2g): Difficult landing
- Low gravity (<0.5g): Easy landing, atmosphere loss

---

### 6. **Distance from Earth**

| Attribute | Type | Description | Units | Front-End Use |
|-----------|------|-------------|-------|---------------|
| `distance_from_earth.parsecs` | float | Distance | parsecs (pc) | Scientific |
| `distance_from_earth.light_years` | float | Distance | light years (ly) | **Primary display** |
| `distance_from_earth.km` | float | Distance | kilometers | Scale reference |
| `distance_from_earth.au` | float | Distance | astronomical units | Solar system scale |
| `distance_from_earth.error_min` | float | Lower uncertainty | pc | - |
| `distance_from_earth.error_max` | float | Upper uncertainty | pc | - |

**UI Display:**
- Use `light_years` for labels: "1,402 light years away"
- Closest exoplanets: ~4 ly (Proxima Centauri b)
- Farthest: ~30,000 ly

---

### 7. **Temperature**

| Attribute | Type | Description | Units | Front-End Use |
|-----------|------|-------------|-------|---------------|
| `temperature.equilibrium_k` | float | Equilibrium temp (no greenhouse) | Kelvin | Scientific |
| `temperature.equilibrium_c` | float | Equilibrium temp | Celsius | **Primary display** |
| `temperature.equilibrium_f` | float | Equilibrium temp | Fahrenheit | US audience |
| `temperature.measurement_type` | string | Type of measurement | - | Context info |

**Visual Color Coding:**
- **< 150K**: Ice world (pale blue)
- **150-270K**: Cold (blue)
- **270-350K**: Habitable zone (green/blue)
- **350-1000K**: Hot (orange/yellow)
- **> 1000K**: Very hot (red/glowing)

---

### 8. **Orbital Parameters** (🔴 Critical for 3D Orbits)

| Attribute | Type | Description | Units | 3D Visualization |
|-----------|------|-------------|-------|------------------|
| `orbit.period_days` | float | Orbital period | days | Animation speed |
| `orbit.period_years` | float | Orbital period | Earth years | Label display |
| `orbit.period_hours` | float | Orbital period | hours | Ultra-short periods |
| `orbit.semi_major_axis_au` | float | **Orbit size** | AU | **Ellipse semi-major axis** |
| `orbit.semi_major_axis_km` | float | Orbit size | km | Scale reference |
| `orbit.eccentricity` | float | **Orbit shape** (0=circle, 0.9=ellipse) | - | **Ellipse eccentricity** |
| `orbit.inclination_deg` | float | **Orbital tilt** | degrees | **Z-axis rotation** |
| `orbit.argument_of_periastron_deg` | float | **Periastron angle** | degrees | **Ellipse rotation** |
| `orbit.time_of_periastron_jd` | float | Reference time | Julian Date | Phase calculation |
| `orbit.time_of_transit_jd` | float | Transit midpoint | Julian Date | Alternative reference |
| `orbit.tidal_locking_estimate` | string | Rotation state | - | "Likely locked", "Likely rotating" |
| `orbit.hill_sphere_au` | float | Gravitational influence zone | AU | Moon stability radius |

**3D Orbit Rendering:**
```javascript
// Example Three.js parameters
const orbit = new EllipseCurve(
  0, 0,  // Center (star)
  planet.orbit.semi_major_axis_au * SCALE,  // x radius
  planet.orbit.semi_major_axis_au * (1 - planet.orbit.eccentricity) * SCALE,  // y radius
  0, 2 * Math.PI,  // Start/end angle
  false,  // Not clockwise
  planet.orbit.argument_of_periastron_deg * Math.PI / 180  // Rotation
);
```

---

### 9. **Stellar Radiation**

| Attribute | Type | Description | Units | Front-End Use |
|-----------|------|-------------|-------|---------------|
| `radiation.insolation_flux_earth_relative` | float | Stellar energy received | S⊕ | Earth = 1.0 |
| `radiation.insolation_error_min` | float | Lower uncertainty | S⊕ | - |
| `radiation.insolation_error_max` | float | Upper uncertainty | S⊕ | - |

**Interpretation:**
- **0.5-1.5**: Habitable zone
- **> 2**: Too hot (inner system)
- **< 0.3**: Too cold (outer system)

---

### 10. **Host Star Properties**

| Attribute | Type | Description | Units | Front-End Use |
|-----------|------|-------------|-------|---------------|
| `star.name` | string | Star name | - | Label |
| `star.temperature_k` | float | Surface temperature | Kelvin | Star color |
| `star.mass_solar` | float | Mass | M☉ | Size comparison |
| `star.radius_solar` | float | Radius | R☉ | 3D star sphere |
| `star.spectral_type` | string | Spectral class | - | "G2V" (Sun-like), "M3V" (red dwarf) |
| `star.metallicity_dex` | float | Metal content [Fe/H] | dex | 0 = Sun-like |
| `star.age_gyr` | float | Age | billion years | Timeline context |
| `star.num_planets` | integer | Planets in system | - | System complexity |

**Star Color by Temperature:**
- **> 30,000K**: Blue (O-type)
- **10,000-30,000K**: Blue-white (B-type)
- **7,500-10,000K**: White (A-type)
- **6,000-7,500K**: Yellow-white (F-type)
- **5,200-6,000K**: Yellow (G-type) ☀️ Sun-like
- **3,700-5,200K**: Orange (K-type)
- **< 3,700K**: Red (M-type)

---

### 11. **Composition** (Estimated)

| Attribute | Type | Description | Front-End Use |
|-----------|------|-------------|---------------|
| `composition.primary` | string | Main composition | "Rocky (Earth-like)", "Gas giant", "Ice giant" |
| `composition.secondary` | string | Detailed description | "Silicate mantle with iron core" |
| `composition.surface_type` | string | Surface description | "Rocky crust", "No solid surface" |
| `composition.atmosphere` | string | Atmospheric type | "Thin (N2/O2/CO2)", "Thick H2/He" |

**Examples:**
- **Rocky (Earth-like)**: Terrestrial planet
- **Gas giant (Jupiter-like)**: No solid surface
- **Water world**: Deep oceans
- **Iron-rich core**: Super-Mercury

---

### 12. **Atmosphere** (Estimated)

| Attribute | Type | Description | Front-End Use |
|-----------|------|-------------|---------------|
| `atmosphere.has_atmosphere` | boolean | Does it have an atmosphere? | Atmospheric glow effect |
| `atmosphere.pressure_earth_relative` | string | Pressure comparison | "0.5-2x" (Earth-like), "> 1000x" (crushing) |
| `atmosphere.scale_height_km` | float | Atmosphere thickness | km | Glow radius in 3D |
| `atmosphere.main_components` | array | Gas composition | ["N2", "O2", "H2O"] |
| `atmosphere.greenhouse_effect` | string | Greenhouse strength | "Moderate", "Extreme", "Minimal" |
| `atmosphere.magnetic_field` | string | Magnetic field estimate | "Strong", "Weak", "Unknown" |

**3D Rendering:**
- `has_atmosphere = true`: Add atmospheric glow
- Use `scale_height_km` for atmosphere sphere radius
- Color atmosphere based on `main_components`

---

### 13. **Visual Properties** (🎨 For 3D Rendering)

| Attribute | Type | Description | Front-End Use |
|-----------|------|-------------|---------------|
| `visual_properties.base_color_hex` | string | Planet base color | Hex color code: "#8B7355" |
| `visual_properties.cloud_color_hex` | string | Cloud/atmosphere color | Hex or null |
| `visual_properties.atmosphere_opacity` | float | Atmosphere transparency | 0.0-1.0 |
| `visual_properties.ring_system` | boolean | Has rings? | Render Saturn-like rings |
| `visual_properties.texture_hint` | string | Texture type | "rocky", "gas_giant", "ocean", "metallic" |
| `visual_properties.emissive` | boolean | Self-illuminated? | Lava worlds, hot Jupiters |
| `visual_properties.albedo` | float | Reflectivity | 0.0-1.0 (0=black, 1=mirror) |

**Three.js Material Example:**
```javascript
const material = new THREE.MeshStandardMaterial({
  color: planet.visual_properties.base_color_hex,
  metalness: planet.visual_properties.texture_hint === 'metallic' ? 0.9 : 0.2,
  roughness: 0.7,
  emissive: planet.visual_properties.emissive ? planet.visual_properties.base_color_hex : 0x000000,
  emissiveIntensity: planet.visual_properties.emissive ? 0.5 : 0
});
```

---

### 14. **Habitability Metrics**

| Attribute | Type | Description | Range | Front-End Use |
|-----------|------|-------------|-------|---------------|
| `habitability_score` | float | Overall habitability | 0-100 | Progress bar, color coding |
| `toxicity_percentage` | integer | Environmental toxicity | 0-100 | Danger indicator |
| `water_presence_estimate` | string | Water likelihood | - | "Likely", "Possible", "Unlikely" |

**Score Interpretation:**
- **80-100**: Highly habitable (very rare!)
- **50-79**: Potentially habitable
- **30-49**: Marginal habitability
- **0-29**: Inhospitable

**Toxicity Factors:**
- Temperature extremes
- Radiation levels
- Atmospheric pressure
- Orbital instability

---

### 15. **Classification**

| Attribute | Type | Description | Examples |
|-----------|------|-------------|----------|
| `classification.planet_type` | string | Detailed type | "Earth-like", "Hot Jupiter", "Super-Earth" |
| `classification.planet_class` | string | Broad category | "Terrestrial", "Jovian", "Neptunian" |
| `classification.size_category` | string | Size group | "Giant", "Terrestrial" |

**Common Types:**
- **Gas Giant (Jupiter-class)**: > 100 M⊕
- **Ice Giant (Neptune-class)**: 10-100 M⊕  
- **Super-Earth**: 2-10 M⊕
- **Earth-like**: 0.5-2 M⊕ + rocky
- **Mars-like**: 0.1-0.5 M⊕

---

### 16. **3D Position Data** (🔴 Critical for Visualization)

| Attribute | Type | Description | Units | 3D Use |
|-----------|------|-------------|-------|--------|
| `position_3d.current_position_au` | object | **Current XYZ coordinates** | AU | **Direct 3D position** |
| `position_3d.current_position_au.x` | float | X coordinate | AU | `mesh.position.x` |
| `position_3d.current_position_au.y` | float | Y coordinate | AU | `mesh.position.y` |
| `position_3d.current_position_au.z` | float | Z coordinate | AU | `mesh.position.z` |
| `position_3d.has_calculated_orbit` | boolean | Is position calculated? | - | Use if true |
| `position_3d.orbital_elements_complete` | boolean | Full orbital data available? | - | Can animate orbit |

**Usage in Three.js:**
```javascript
if (planet.position_3d.has_calculated_orbit) {
  const pos = planet.position_3d.current_position_au;
  mesh.position.set(
    pos.x * AU_SCALE,
    pos.y * AU_SCALE,
    pos.z * AU_SCALE
  );
}
```

**Position Calculated For:** 18,578 planets (47% of dataset)

---

### 17. **Detection Methods**

| Attribute | Type | Description |
|-----------|------|-------------|
| `detection_methods.radial_velocity` | boolean | RV wobble detection |
| `detection_methods.transit` | boolean | Star dimming detection |
| `detection_methods.imaging` | boolean | Direct imaging |
| `detection_methods.microlensing` | boolean | Gravitational lensing |
| `detection_methods.astrometry` | boolean | Stellar motion |
| `detection_methods.timing_variations` | boolean | Transit/eclipse timing |

**UI Use:** Display as badges/icons for each planet

---

### 18. **Transit Data** (if available)

| Attribute | Type | Description | Units |
|-----------|------|-------------|-------|
| `transit.depth_ppm` | float | Brightness drop | parts per million |
| `transit.depth_percent` | float | Brightness drop | % |
| `transit.duration_hours` | float | Transit length | hours |
| `transit.impact_parameter` | float | Path across star | 0-1 |

**Only present if** `detection_methods.transit === true`

---

### 19. **Radial Velocity Data**

| Attribute | Type | Description | Units |
|-----------|------|-------------|-------|
| `radial_velocity.amplitude_ms` | float | Star velocity change | m/s |
| `radial_velocity.semi_amplitude_ms` | float | Half amplitude | m/s |

**Only present if** `detection_methods.radial_velocity === true`

---

### 20. **Coordinates** (Sky Position)

| Attribute | Type | Description | Units | Use Case |
|-----------|------|-------------|-------|----------|
| `coordinates.ra_degrees` | float | Right Ascension | degrees | Sky map |
| `coordinates.dec_degrees` | float | Declination | degrees | Sky map |
| `coordinates.galactic_lon` | float | Galactic longitude | degrees | Galaxy view |
| `coordinates.galactic_lat` | float | Galactic latitude | degrees | Galaxy view |

**3D Galaxy Visualization:**
- Use `galactic_lon` and `galactic_lat` for positioning
- Combine with `distance_from_earth` for 3D coordinates

---

### 21. **Identifiers & References**

| Attribute | Type | Description |
|-----------|------|-------------|
| `identifiers.planet_name` | string | Official name |
| `identifiers.hd_name` | string | Henry Draper catalog |
| `identifiers.hip_name` | string | Hipparcos catalog |
| `identifiers.gaia_dr3_id` | string | Gaia Data Release 3 ID |
| `identifiers.tic_id` | string | TESS Input Catalog |
| `references.discovery_reference` | string | Scientific paper (HTML) |
| `references.discovery_publication_date` | string | Publication date |

---

## 🎮 Front-End Usage Examples

### Example 1: Display Planet Card

```javascript
function createPlanetCard(planet) {
  return `
    <div class="planet-card">
      <h2>${planet.name}</h2>
      <p>Distance: ${planet.distance_from_earth.light_years.toFixed(1)} light years</p>
      <p>Type: ${planet.classification.planet_type}</p>
      <p>Temperature: ${planet.temperature.equilibrium_c}°C</p>
      <p>Gravity: ${planet.gravity.earth_relative}g</p>
      <p>Habitability: ${planet.habitability_score}/100</p>
      <div class="toxicity-bar" style="width: ${planet.toxicity_percentage}%"></div>
    </div>
  `;
}
```

### Example 2: 3D Planet Rendering

```javascript
function createPlanet3D(planet) {
  const geometry = new THREE.SphereGeometry(
    planet.radius.earth_radii * SCALE, 32, 32
  );
  
  const material = new THREE.MeshStandardMaterial({
    color: planet.visual_properties.base_color_hex,
    emissive: planet.visual_properties.emissive ? planet.visual_properties.base_color_hex : 0x000000
  });
  
  const mesh = new THREE.Mesh(geometry, material);
  
  // Position
  if (planet.position_3d.has_calculated_orbit) {
    const pos = planet.position_3d.current_position_au;
    mesh.position.set(pos.x * AU_SCALE, pos.y * AU_SCALE, pos.z * AU_SCALE);
  }
  
  // Add atmosphere
  if (planet.atmosphere.has_atmosphere) {
    const atmoGeometry = new THREE.SphereGeometry(
      planet.radius.earth_radii * SCALE * 1.1, 32, 32
    );
    const atmoMaterial = new THREE.MeshBasicMaterial({
      color: planet.visual_properties.cloud_color_hex || 0x87CEEB,
      transparent: true,
      opacity: planet.visual_properties.atmosphere_opacity * 0.3
    });
    const atmosphere = new THREE.Mesh(atmoGeometry, atmoMaterial);
    mesh.add(atmosphere);
  }
  
  return mesh;
}
```

### Example 3: Filter Habitable Planets

```javascript
const habitablePlanets = planets.filter(p => {
  return p.habitability_score > 50 &&
         p.toxicity_percentage < 40 &&
         p.water_presence_estimate.includes('Likely') &&
         p.distance_from_earth.light_years < 100;
});
```

---

## 📈 Data Quality Indicators

| Parameter | Coverage | Notes |
|-----------|----------|-------|
| **Mass** | ~60% | Essential for gravity |
| **Radius** | ~45% | Essential for visualization |
| **Density** | ~20% | Calculated when mass+radius available |
| **Temperature** | ~75% | Calculated from stellar properties |
| **3D Position** | 47% | Requires complete orbital elements |
| **Orbital Period** | ~95% | Most reliable parameter |

---

## 🔗 External Resources

- **NASA Exoplanet Archive**: https://exoplanetarchive.ipac.caltech.edu/
- **Exoplanet.eu**: http://exoplanet.eu/
- **PHL Habitable Exoplanets Catalog**: http://phl.upr.edu/projects/habitable-exoplanets-catalog

---

## ⚠️ Important Notes

1. **Null Values**: Many fields can be `null` - always check before using
2. **Estimated Data**: Fields with "estimate" are algorithmically derived
3. **Units**: Always check units - mixing AU and km will break visualizations!
4. **Coordinates**: 3D position is relative to Sun at (0, 0, 0)
5. **Performance**: With 39K planets, implement LOD (Level of Detail) and culling

---

**Generated**: January 31, 2026  
**Source**: NASA Exoplanet Archive (PS_2026.01.30)  
**Processing**: Astronomical algorithms + machine learning estimates
