import json
import math
import numpy as np

# Physical constants
EARTH_MASS = 5.972e24  # kg
EARTH_RADIUS = 6371  # km
EARTH_DENSITY = 5.514  # g/cm³
G = 6.674e-11  # Gravitational constant
JUPITER_MASS_KG = 1.898e27  # kg
JUPITER_RADIUS_KM = 69911  # km
STEFAN_BOLTZMANN = 5.670374419e-8  # W⋅m⁻²⋅K⁻⁴
AU_TO_KM = 1.496e8  # km per AU
PARSEC_TO_LY = 3.26156  # light years per parsec

def calculate_gravity(mass_earth, radius_earth):
    """Calculate surface gravity in m/s^2 (Earth = 9.8 m/s^2)"""
    if not mass_earth or not radius_earth or mass_earth <= 0 or radius_earth <= 0:
        return None
    
    mass_kg = mass_earth * EARTH_MASS
    radius_m = radius_earth * EARTH_RADIUS * 1000  # Convert to meters
    
    gravity = (G * mass_kg) / (radius_m ** 2)
    return round(gravity, 2)

def calculate_gravity_from_density(density_gcc, radius_earth):
    """Calculate gravity using density (g/cm³) and radius"""
    if not density_gcc or not radius_earth or density_gcc <= 0 or radius_earth <= 0:
        return None
    
    # Convert density to kg/m³
    density_kgm3 = density_gcc * 1000
    radius_m = radius_earth * EARTH_RADIUS * 1000
    
    # g = (4/3) * π * G * ρ * r
    gravity = (4/3) * math.pi * G * density_kgm3 * radius_m
    return round(gravity, 2)

def estimate_composition(mass_earth, radius_earth, density_gcc, temp=None):
    """
    Estimate planet composition based on astrophysical models
    Uses density-mass-radius relationships from exoplanet science
    """
    composition = {
        "primary": "Unknown",
        "secondary": None,
        "atmosphere": "Unknown",
        "surface_type": "Unknown"
    }
    
    if density_gcc and density_gcc > 0:
        # Density-based classification (most accurate)
        if density_gcc > 8:
            composition["primary"] = "Iron core dominant"
            composition["secondary"] = "Stripped core / Super-Mercury"
            composition["surface_type"] = "Molten metal / solid iron"
            composition["atmosphere"] = "None or trace"
        elif density_gcc > 5.5:
            composition["primary"] = "Rocky (Earth-like)"
            composition["secondary"] = "Silicate mantle with iron core"
            composition["surface_type"] = "Rocky crust"
            composition["atmosphere"] = "Thin to moderate (N2/O2/CO2)"
        elif density_gcc > 4:
            composition["primary"] = "Rocky (Mars-like)"
            composition["secondary"] = "Silicate with smaller iron core"
            composition["surface_type"] = "Rocky/oxidized"
            composition["atmosphere"] = "Thin (CO2 dominant)"
        elif density_gcc > 2.5:
            composition["primary"] = "Water world or volatile-rich"
            composition["secondary"] = "Deep oceans or ice layers"
            composition["surface_type"] = "Ocean or thick ice shell"
            composition["atmosphere"] = "Steam/water vapor dominated"
        elif density_gcc > 1.3:
            composition["primary"] = "Ice giant (Neptune-like)"
            composition["secondary"] = "H2O, CH4, NH3 ices"
            composition["surface_type"] = "No solid surface"
            composition["atmosphere"] = "H2/He with CH4, H2O clouds"
        elif density_gcc > 0.7:
            composition["primary"] = "Gas giant (Jupiter-like)"
            composition["secondary"] = "H2/He with small rocky core"
            composition["surface_type"] = "No solid surface"
            composition["atmosphere"] = "Thick H2/He atmosphere"
        else:
            composition["primary"] = "Puffy gas giant"
            composition["secondary"] = "H2/He (inflated by stellar heat)"
            composition["surface_type"] = "No solid surface"
            composition["atmosphere"] = "Extended H2/He envelope"
    
    elif mass_earth and radius_earth:
        # Mass-radius relationship fallback
        calculated_density = (mass_earth * EARTH_MASS) / ((4/3) * math.pi * (radius_earth * EARTH_RADIUS * 1000)**3)
        calculated_density_gcc = calculated_density / 1000
        
        return estimate_composition(mass_earth, radius_earth, calculated_density_gcc, temp)
    
    # Temperature-based atmospheric refinement
    if temp:
        if temp > 1500:
            composition["atmosphere"] = "Vaporized rock (SiO, Fe, Ca)"
        elif temp > 1000 and composition["primary"] in ["Gas giant", "Puffy gas giant"]:
            composition["atmosphere"] = "Hot Jupiter (H2/He + TiO/VO)"
        elif temp < 150:
            composition["atmosphere"] = composition["atmosphere"].replace("dominated", "frozen")
    
    return composition

def estimate_visual_appearance(planet_data, composition):
    """
    Estimate visual properties for 3D rendering
    Returns colors, texture hints, atmospheric properties
    """
    appearance = {
        "base_color_hex": "#808080",  # Default gray
        "cloud_color_hex": None,
        "atmosphere_opacity": 0.0,
        "ring_system": False,
        "texture_hint": "rocky",
        "emissive": False,
        "albedo": 0.3
    }
    
    temp = planet_data.get('pl_eqt')
    mass_earth = planet_data.get('pl_masse') or planet_data.get('pl_bmasse')
    comp_primary = composition.get("primary", "Unknown")
    
    # Color and texture based on composition and temperature
    if "Iron" in comp_primary:
        appearance["base_color_hex"] = "#4A4A4A"
        appearance["texture_hint"] = "metallic"
        appearance["albedo"] = 0.15
        if temp and temp > 1000:
            appearance["base_color_hex"] = "#8B0000"
            appearance["emissive"] = True
    
    elif "Rocky" in comp_primary:
        if temp and temp > 700:
            appearance["base_color_hex"] = "#CC6600"  # Hot rocky (Venus-like)
            appearance["cloud_color_hex"] = "#FFFF99"
            appearance["atmosphere_opacity"] = 0.9
            appearance["albedo"] = 0.75
        elif temp and temp < 200:
            appearance["base_color_hex"] = "#B0B0B0"  # Cold rocky (Mars-like)
            appearance["texture_hint"] = "icy_rocky"
            appearance["albedo"] = 0.25
        else:
            appearance["base_color_hex"] = "#8B7355"  # Earth-like rocky
            appearance["texture_hint"] = "terrestrial"
            appearance["albedo"] = 0.3
    
    elif "Water world" in comp_primary:
        appearance["base_color_hex"] = "#4169E1"  # Deep blue
        appearance["cloud_color_hex"] = "#FFFFFF"
        appearance["atmosphere_opacity"] = 0.6
        appearance["texture_hint"] = "ocean"
        appearance["albedo"] = 0.5
    
    elif "Ice giant" in comp_primary:
        appearance["base_color_hex"] = "#4682B4"  # Neptune blue
        appearance["cloud_color_hex"] = "#87CEEB"
        appearance["atmosphere_opacity"] = 1.0
        appearance["texture_hint"] = "gas_ice"
        appearance["albedo"] = 0.6
        if mass_earth and mass_earth > 15:
            appearance["ring_system"] = True
    
    elif "Gas giant" in comp_primary:
        if temp and temp > 1500:
            appearance["base_color_hex"] = "#FFD700"  # Hot Jupiter
            appearance["cloud_color_hex"] = "#FF4500"
            appearance["emissive"] = True
            appearance["albedo"] = 0.1
        elif temp and temp > 1000:
            appearance["base_color_hex"] = "#FF8C00"
            appearance["cloud_color_hex"] = "#FFA500"
            appearance["albedo"] = 0.2
        else:
            appearance["base_color_hex"] = "#DAA520"  # Jupiter-like
            appearance["cloud_color_hex"] = "#F0E68C"
            appearance["albedo"] = 0.5
        
        appearance["atmosphere_opacity"] = 1.0
        appearance["texture_hint"] = "gas_giant"
        
        if mass_earth and mass_earth > 100:
            appearance["ring_system"] = True
    
    # Atmospheric effects
    insol = planet_data.get('pl_insol')
    if insol and insol > 100:
        appearance["emissive"] = True
    
    return appearance

def estimate_atmospheric_properties(planet_data, composition):
    """
    Estimate atmospheric composition and properties
    Critical for habitability and visual representation
    """
    atmosphere = {
        "has_atmosphere": False,
        "pressure_earth_relative": None,
        "scale_height_km": None,
        "main_components": [],
        "greenhouse_effect": "Unknown",
        "magnetic_field": "Unknown"
    }
    
    mass_earth = planet_data.get('pl_masse') or planet_data.get('pl_bmasse')
    temp = planet_data.get('pl_eqt')
    comp_primary = composition.get("primary", "Unknown")
    
    # Atmosphere presence determination
    if mass_earth:
        if mass_earth < 0.1:
            atmosphere["has_atmosphere"] = False
            atmosphere["main_components"] = ["None (too small)"]
        elif mass_earth > 10:
            atmosphere["has_atmosphere"] = True
            atmosphere["pressure_earth_relative"] = ">> 1000x"
        elif mass_earth > 0.5:
            atmosphere["has_atmosphere"] = True
    
    # Composition-based atmospheric components
    if "Gas giant" in comp_primary or "Ice giant" in comp_primary:
        atmosphere["has_atmosphere"] = True
        atmosphere["main_components"] = ["H2 (hydrogen)", "He (helium)"]
        if "Ice" in comp_primary:
            atmosphere["main_components"].extend(["CH4 (methane)", "H2O (water)", "NH3 (ammonia)"])
        atmosphere["pressure_earth_relative"] = "> 1000x"
        atmosphere["magnetic_field"] = "Strong (dynamo effect)"
    
    elif "Rocky" in comp_primary and temp:
        atmosphere["has_atmosphere"] = True
        if temp > 600:
            atmosphere["main_components"] = ["CO2 (carbon dioxide)", "SO2 (sulfur dioxide)", "N2 (nitrogen)"]
            atmosphere["greenhouse_effect"] = "Extreme runaway"
            atmosphere["pressure_earth_relative"] = "> 90x (Venus-like)"
        elif 250 <= temp <= 350:
            atmosphere["main_components"] = ["N2 (nitrogen)", "O2 (oxygen)", "CO2 (carbon dioxide)", "H2O (water vapor)"]
            atmosphere["greenhouse_effect"] = "Moderate (Earth-like)"
            atmosphere["pressure_earth_relative"] = "0.5-2x"
            atmosphere["magnetic_field"] = "Possible (iron core)"
        elif temp < 250:
            atmosphere["main_components"] = ["CO2 (carbon dioxide)", "N2 (nitrogen)", "Ar (argon)"]
            atmosphere["greenhouse_effect"] = "Minimal (Mars-like)"
            atmosphere["pressure_earth_relative"] = "< 0.01x"
    
    elif "Water world" in comp_primary:
        atmosphere["has_atmosphere"] = True
        atmosphere["main_components"] = ["H2O (steam)", "H2 (hydrogen)", "O2 (oxygen)"]
        atmosphere["pressure_earth_relative"] = "> 10x"
        atmosphere["greenhouse_effect"] = "Strong (steam)"
    
    # Scale height calculation (approximate)
    if atmosphere["has_atmosphere"] and temp and mass_earth:
        # H ≈ kT/(μmg) where μ is mean molecular weight
        mean_mol_weight = 29 if "N2" in str(atmosphere["main_components"]) else 2
        g_surface = 9.8 * (mass_earth / 1.0)  # Simplified
        k_boltzmann = 1.380649e-23
        m_u = 1.66054e-27
        
        scale_height_m = (k_boltzmann * temp) / (mean_mol_weight * m_u * g_surface)
        atmosphere["scale_height_km"] = round(scale_height_m / 1000, 1)
    
    return atmosphere

def estimate_toxicity(planet_data):
    """
    Estimate atmospheric toxicity based on available parameters
    Returns percentage (0-100) where 0 is Earth-like, 100 is extremely toxic
    """
    toxicity_score = 0
    
    # Factor 1: Temperature (equilibrium temperature)
    temp = planet_data.get('pl_eqt')
    if temp:
        if temp < 150:  # Too cold (CO2 freezes)
            toxicity_score += 40
        elif temp > 350:  # Too hot (Venus-like)
            toxicity_score += 50
        elif 270 <= temp <= 290:  # Earth-like
            toxicity_score += 0
        else:
            toxicity_score += 20
    else:
        toxicity_score += 30  # Unknown is risky
    
    # Factor 2: Mass/Size (atmosphere retention)
    mass = planet_data.get('pl_masse') or planet_data.get('pl_bmasse')
    if mass:
        if mass > 10:  # Gas giants - crushing pressure
            toxicity_score += 30
        elif mass < 0.3:  # Too small - can't hold atmosphere
            toxicity_score += 25
    
    # Factor 3: Stellar radiation (insolation flux)
    insol = planet_data.get('pl_insol')
    if insol:
        if insol > 1.5:  # High radiation
            toxicity_score += 15
        elif insol < 0.3:  # Too little
            toxicity_score += 10
    
    # Factor 4: Eccentricity (orbital stability)
    ecc = planet_data.get('pl_orbeccen')
    if ecc and ecc > 0.2:  # High eccentricity = extreme seasons
        toxicity_score += 10
    
    return min(toxicity_score, 100)

def calculate_habitability_score(planet_data):
    """
    Calculate habitability score (0-100) where 100 is most habitable
    Based on: temperature, size, stellar characteristics, orbital parameters
    """
    score = 0
    
    # 1. Temperature zone (40 points max)
    temp = planet_data.get('pl_eqt')
    if temp:
        if 270 <= temp <= 290:  # Earth-like
            score += 40
        elif 250 <= temp <= 310:  # Extended habitable
            score += 30
        elif 200 <= temp <= 350:  # Marginal
            score += 15
    
    # 2. Size (20 points max)
    radius = planet_data.get('pl_rade')
    if not radius:
        radj = planet_data.get('pl_radj')
        radius = radj * 11.2 if radj else None
    if radius:
        if 0.5 <= radius <= 2.0:  # Rocky planet range
            score += 20
        elif 2.0 < radius <= 4.0:  # Super-Earth
            score += 10
    
    # 3. Stellar characteristics (20 points max)
    st_teff = planet_data.get('st_teff')
    if st_teff:
        if 4500 <= st_teff <= 6500:  # Sun-like stars
            score += 20
        elif 3500 <= st_teff <= 7500:  # Acceptable range
            score += 10
    
    # 4. Orbital stability (10 points max)
    ecc = planet_data.get('pl_orbeccen')
    if ecc is not None:
        if ecc < 0.1:
            score += 10
        elif ecc < 0.3:
            score += 5
    
    # 5. Insolation flux (10 points max)
    insol = planet_data.get('pl_insol')
    if insol:
        if 0.8 <= insol <= 1.2:  # Earth-like
            score += 10
        elif 0.5 <= insol <= 2.0:  # Acceptable
            score += 5
    
    return round(score, 1)

def estimate_water_presence(planet_data):
    """
    Estimate likelihood of water presence
    Returns: "Likely", "Possible", "Unlikely", "Unknown"
    """
    temp = planet_data.get('pl_eqt')
    mass = planet_data.get('pl_masse') or planet_data.get('pl_bmasse')
    density = planet_data.get('pl_dens')
    
    # Gas giants - water vapor possible but no surface water
    if mass and mass > 50:
        return "Unlikely (Gas giant)"
    
    # Temperature check (liquid water range: 273-373K at 1 atm)
    if temp:
        if 250 <= temp <= 350:
            if density and 3 <= density <= 6:
                return "Likely (Habitable zone + rocky)"
            return "Possible (Habitable zone)"
        elif 150 <= temp <= 250:
            return "Possible (Ice form)"
        elif temp > 450:
            return "Unlikely (Too hot)"
        elif temp < 150:
            return "Unlikely (Too cold)"
    
    # Ice giants (Neptune-like) may have water ice
    if mass and 10 <= mass <= 50:
        return "Possible (Ice giant)"
    
    return "Unknown"

def calculate_escape_velocity(mass_earth, radius_earth):
    """Calculate escape velocity in km/s"""
    if not mass_earth or not radius_earth:
        return None
    
    mass_kg = mass_earth * EARTH_MASS
    radius_m = radius_earth * EARTH_RADIUS * 1000
    
    v_escape = math.sqrt(2 * G * mass_kg / radius_m) / 1000  # Convert to km/s
    return round(v_escape, 2)

def calculate_hill_sphere(planet_data):
    """Calculate Hill sphere radius (gravitational influence zone)"""
    a = planet_data.get('pl_orbsmax')  # Semi-major axis in AU
    mass_planet = planet_data.get('pl_masse')
    mass_star = planet_data.get('st_mass')  # Solar masses
    ecc = planet_data.get('pl_orbeccen')
    
    if not a or not mass_planet or not mass_star:
        return None
    
    if ecc is None:
        ecc = 0
    
    # Convert to consistent units
    mass_planet_solar = mass_planet / 332946  # Earth masses to solar masses
    
    # Hill radius: r_H = a(1-e) * (m_planet / 3*m_star)^(1/3)
    r_hill = a * (1 - ecc) * ((mass_planet_solar / (3 * mass_star)) ** (1/3))
    
    return round(r_hill, 6)  # In AU

def estimate_tidal_locking(orbital_period_days, rotation_period_days=None):
    """Estimate if planet is tidally locked to its star"""
    if not orbital_period_days:
        return "Unknown"
    
    # Very short period planets are almost always tidally locked
    if orbital_period_days < 10:
        return "Likely locked (hot planet)"
    elif orbital_period_days < 50:
        return "Possibly locked"
    else:
        return "Likely rotating"

def filter_planet_data(planet):
    """Extract and calculate all relevant front-end data for 3D visualization"""
    
    # ============ BASIC IDENTIFIERS ============
    filtered = {
        "name": planet.get("pl_name"),
        "host_star": planet.get("hostname"),
        "discovery_year": planet.get("disc_year"),
        "discovery_method": planet.get("discoverymethod"),
        "discovery_facility": planet.get("disc_facility"),
        "discovery_telescope": planet.get("disc_telescope"),
        "discovery_instrument": planet.get("disc_instrument"),
        "default_flag": planet.get("default_flag"),
        "controversial": planet.get("pl_controv_flag") == 1,
    }
    
    # ============ PHYSICAL PROPERTIES ============
    mass_earth = planet.get('pl_masse') or planet.get('pl_bmasse')
    mass_jupiter = planet.get('pl_massj') or planet.get('pl_bmassj')
    radius_earth = planet.get('pl_rade') or planet.get('pl_radj', 0) * 11.2 if planet.get('pl_radj') else None
    radius_jupiter = planet.get('pl_radj') or planet.get('pl_rade', 0) / 11.2 if planet.get('pl_rade') else None
    density = planet.get('pl_dens')
    
    # Convert units
    if not mass_earth and mass_jupiter:
        mass_earth = mass_jupiter * 317.8
    if not mass_jupiter and mass_earth:
        mass_jupiter = mass_earth / 317.8
    
    filtered["mass"] = {
        "value": round(mass_earth, 3) if mass_earth else None,
        "earth_masses": round(mass_earth, 3) if mass_earth else None,
        "jupiter_masses": round(mass_jupiter, 4) if mass_jupiter else None,
        "kg": round(mass_earth * EARTH_MASS, 3) if mass_earth else None,
        "error_min": planet.get('pl_masseerr2') or planet.get('pl_bmasseerr2'),
        "error_max": planet.get('pl_masseerr1') or planet.get('pl_bmasseerr1'),
        "provenance": planet.get('pl_bmassprov')
    }
    
    filtered["radius"] = {
        "value": round(radius_earth, 3) if radius_earth else None,
        "earth_radii": round(radius_earth, 3) if radius_earth else None,
        "jupiter_radii": round(radius_jupiter, 4) if radius_jupiter else None,
        "km": round(radius_earth * EARTH_RADIUS, 0) if radius_earth else None,
        "error_min": planet.get('pl_radeerr2') or (planet.get('pl_radjerr2') * 11.2 if planet.get('pl_radjerr2') else None),
        "error_max": planet.get('pl_radeerr1') or (planet.get('pl_radjerr1') * 11.2 if planet.get('pl_radjerr1') else None)
    }
    
    filtered["density"] = {
        "gcc": round(density, 3) if density else None,
        "earth_relative": round(density / EARTH_DENSITY, 2) if density else None,
        "error_min": planet.get('pl_denserr2'),
        "error_max": planet.get('pl_denserr1')
    }
    
    # ============ GRAVITY & DYNAMICS ============
    gravity = None
    if mass_earth and radius_earth:
        gravity = calculate_gravity(mass_earth, radius_earth)
    elif density and radius_earth:
        gravity = calculate_gravity_from_density(density, radius_earth)
    
    filtered["gravity"] = {
        "surface_ms2": gravity,
        "earth_relative": round(gravity / 9.8, 2) if gravity else None,
        "escape_velocity_kms": calculate_escape_velocity(mass_earth, radius_earth)
    }
    
    # ============ DISTANCE & LOCATION ============
    distance_parsecs = planet.get('sy_dist')
    filtered["distance_from_earth"] = {
        "parsecs": round(distance_parsecs, 3) if distance_parsecs else None,
        "light_years": round(distance_parsecs * PARSEC_TO_LY, 2) if distance_parsecs else None,
        "km": round(distance_parsecs * 3.086e13, 0) if distance_parsecs else None,
        "au": round(distance_parsecs * 206265, 0) if distance_parsecs else None,
        "error_min": planet.get('sy_disterr2'),
        "error_max": planet.get('sy_disterr1')
    }
    
    filtered["coordinates"] = {
        "ra_degrees": planet.get('ra'),
        "dec_degrees": planet.get('dec'),
        "galactic_lon": planet.get('glon'),
        "galactic_lat": planet.get('glat'),
        "ecliptic_lon": planet.get('elon'),
        "ecliptic_lat": planet.get('elat')
    }
    
    # ============ TEMPERATURE ============
    temp_k = planet.get('pl_eqt')
    filtered["temperature"] = {
        "equilibrium_k": round(temp_k, 1) if temp_k else None,
        "equilibrium_c": round(temp_k - 273.15, 1) if temp_k else None,
        "equilibrium_f": round((temp_k - 273.15) * 9/5 + 32, 1) if temp_k else None,
        "error_min": planet.get('pl_eqterr2'),
        "error_max": planet.get('pl_eqterr1'),
        "measurement_type": "Equilibrium (no greenhouse)"
    }
    
    # ============ ORBITAL CHARACTERISTICS (Critical for 3D) ============
    orbital_period = planet.get('pl_orbper')
    semi_major_axis = planet.get('pl_orbsmax')
    
    filtered["orbit"] = {
        "period_days": round(orbital_period, 3) if orbital_period else None,
        "period_years": round(orbital_period / 365.25, 4) if orbital_period else None,
        "period_hours": round(orbital_period * 24, 2) if orbital_period else None,
        "semi_major_axis_au": round(semi_major_axis, 4) if semi_major_axis else None,
        "semi_major_axis_km": round(semi_major_axis * AU_TO_KM, 0) if semi_major_axis else None,
        "eccentricity": round(planet.get('pl_orbeccen'), 4) if planet.get('pl_orbeccen') is not None else None,
        "inclination_deg": planet.get('pl_orbincl'),
        "argument_of_periastron_deg": planet.get('pl_orblper'),
        "longitude_of_ascending_node_deg": planet.get('pl_orblper'),  # Often not available
        "time_of_periastron_jd": planet.get('pl_orbtper'),
        "time_of_transit_jd": planet.get('pl_tranmid'),
        "tidal_locking_estimate": estimate_tidal_locking(orbital_period),
        "hill_sphere_au": calculate_hill_sphere(planet),
        "errors": {
            "period_min": planet.get('pl_orbpererr2'),
            "period_max": planet.get('pl_orbpererr1'),
            "sma_min": planet.get('pl_orbsmaxerr2'),
            "sma_max": planet.get('pl_orbsmaxerr1'),
            "ecc_min": planet.get('pl_orbeccenerr2'),
            "ecc_max": planet.get('pl_orbeccenerr1')
        }
    }
    
    # ============ STELLAR RADIATION ============
    filtered["radiation"] = {
        "insolation_flux_earth_relative": round(planet.get('pl_insol'), 3) if planet.get('pl_insol') else None,
        "insolation_error_min": planet.get('pl_insolerr2'),
        "insolation_error_max": planet.get('pl_insolerr1')
    }
    
    # ============ STELLAR PROPERTIES (Critical for context) ============
    filtered["star"] = {
        "name": planet.get('hostname'),
        "temperature_k": round(planet.get('st_teff'), 0) if planet.get('st_teff') else None,
        "mass_solar": round(planet.get('st_mass'), 3) if planet.get('st_mass') else None,
        "radius_solar": round(planet.get('st_rad'), 3) if planet.get('st_rad') else None,
        "spectral_type": planet.get('st_spectype'),
        "metallicity_dex": planet.get('st_met'),  # [Fe/H]
        "surface_gravity_log": planet.get('st_logg'),
        "age_gyr": planet.get('st_age'),
        "rotation_period_days": planet.get('st_rotp'),
        "luminosity_solar": planet.get('st_lum'),
        "distance_pc": planet.get('sy_dist'),
        "num_stars": planet.get('sy_snum'),
        "num_planets": planet.get('sy_pnum'),
        "num_moons": planet.get('sy_mnum')
    }
    
    # ============ COMPOSITION & ATMOSPHERE (Derived) ============
    composition = estimate_composition(mass_earth, radius_earth, density, temp_k)
    atmosphere = estimate_atmospheric_properties(planet, composition)
    visual = estimate_visual_appearance(planet, composition)
    
    filtered["composition"] = composition
    filtered["atmosphere"] = atmosphere
    filtered["visual_properties"] = visual
    filtered["water_presence_estimate"] = estimate_water_presence(planet)
    filtered["toxicity_percentage"] = estimate_toxicity(planet)
    filtered["habitability_score"] = calculate_habitability_score(planet)
    
    # ============ CLASSIFICATION ============
    if mass_earth and radius_earth:
        if mass_earth > 100 and radius_earth > 8:
            planet_type = "Gas Giant (Jupiter-class)"
            planet_class = "Jovian"
        elif mass_earth > 50:
            planet_type = "Gas Giant (Saturn-class)"
            planet_class = "Jovian"
        elif mass_earth > 10 and radius_earth > 3:
            planet_type = "Ice Giant (Neptune-class)"
            planet_class = "Neptunian"
        elif mass_earth > 10 and radius_earth < 3:
            planet_type = "Dense Ice Giant (Uranus-class)"
            planet_class = "Neptunian"
        elif mass_earth > 5 and radius_earth > 2:
            planet_type = "Super-Earth / Mini-Neptune"
            planet_class = "Super-Earth"
        elif mass_earth > 2:
            planet_type = "Super-Earth"
            planet_class = "Super-Earth"
        elif 0.5 <= mass_earth <= 2 and 0.8 <= radius_earth <= 1.25:
            planet_type = "Earth-like"
            planet_class = "Terrestrial"
        elif mass_earth > 0.5:
            planet_type = "Rocky (Venus/Earth-sized)"
            planet_class = "Terrestrial"
        elif mass_earth > 0.1:
            planet_type = "Mars-like"
            planet_class = "Terrestrial"
        else:
            planet_type = "Sub-Mars (Mercury-class)"
            planet_class = "Terrestrial"
    else:
        planet_type = "Unknown"
        planet_class = "Unknown"
    
    filtered["classification"] = {
        "planet_type": planet_type,
        "planet_class": planet_class,
        "size_category": "Giant" if mass_earth and mass_earth > 10 else "Terrestrial" if mass_earth else "Unknown"
    }
    
    # ============ 3D VISUALIZATION DATA ============
    filtered["position_3d"] = {
        "current_position_au": planet.get('position'),
        "has_calculated_orbit": planet.get('has_orbit', False),
        "orbital_elements_complete": all([
            planet.get('pl_orbper'),
            planet.get('pl_orbsmax'),
            planet.get('pl_orbtper') or planet.get('pl_tranmid')
        ])
    }
    
    # ============ DETECTION FLAGS ============
    filtered["detection_methods"] = {
        "radial_velocity": planet.get('rv_flag') == 1,
        "transit": planet.get('tran_flag') == 1,
        "imaging": planet.get('ima_flag') == 1,
        "microlensing": planet.get('micro_flag') == 1,
        "astrometry": planet.get('ast_flag') == 1,
        "timing_variations": planet.get('ttv_flag') == 1 or planet.get('etv_flag') == 1,
        "pulsation": planet.get('pul_flag') == 1,
        "orbital_brightness": planet.get('obm_flag') == 1,
        "disk_kinematics": planet.get('dkin_flag') == 1
    }
    
    # ============ TRANSIT DATA (if available) ============
    if planet.get('tran_flag') == 1:
        filtered["transit"] = {
            "depth_ppm": planet.get('pl_trandep'),
            "depth_percent": round(planet.get('pl_trandep') / 10000, 4) if planet.get('pl_trandep') else None,
            "duration_hours": planet.get('pl_trandur'),
            "duration_days": round(planet.get('pl_trandur') / 24, 4) if planet.get('pl_trandur') else None,
            "impact_parameter": planet.get('pl_imppar'),
            "mid_time_jd": planet.get('pl_tranmid'),
            "ingress_duration": planet.get('pl_trandurh'),
            "occdepth_ppm": planet.get('pl_occdep')
        }
    else:
        filtered["transit"] = None
    
    # ============ RADIAL VELOCITY DATA ============
    if planet.get('rv_flag') == 1:
        filtered["radial_velocity"] = {
            "amplitude_ms": planet.get('pl_rvamp'),
            "semi_amplitude_ms": planet.get('pl_rvsemi')
        }
    else:
        filtered["radial_velocity"] = None
    
    # ============ IDENTIFIERS & REFERENCES ============
    filtered["identifiers"] = {
        "planet_name": planet.get('pl_name'),
        "planet_letter": planet.get('pl_letter'),
        "hd_name": planet.get('hd_name'),
        "hip_name": planet.get('hip_name'),
        "tic_id": planet.get('tic_id'),
        "gaia_dr3_id": planet.get('gaia_dr3_id'),
        "gaia_dr2_id": planet.get('gaia_dr2_id'),
        "catalog_names": {
            "twomass": planet.get('2mass_id'),
            "wise": planet.get('wise_id'),
            "tycho": planet.get('tyc_id')
        }
    }
    
    filtered["references"] = {
        "discovery_reference": planet.get('disc_refname'),
        "planet_reference": planet.get('pl_refname'),
        "discovery_publication_date": planet.get('disc_pubdate'),
        "solution_type": planet.get('soltype')
    }
    
    # ============ SYSTEM INFORMATION ============
    filtered["system"] = {
        "num_stars": planet.get('sy_snum'),
        "num_planets": planet.get('sy_pnum'),
        "num_moons": planet.get('sy_mnum'),
        "circumbinary": planet.get('cb_flag') == 1
    }
    
    return filtered

# Main execution
print("Loading nasa_exoplanets_frontend.json...")
with open('nasa_exoplanets_frontend.json', 'r') as f:
    planets = json.load(f)

print(f"Processing {len(planets)} planets...")

filtered_planets = []
for i, planet in enumerate(planets):
    if i % 5000 == 0:
        print(f"  Processed {i}/{len(planets)}...")
    
    filtered = filter_planet_data(planet)
    filtered_planets.append(filtered)

print(f"\nSaving to nasa_exoplanets_filtered.json...")
with open('nasa_exoplanets_filtered.json', 'w') as f:
    json.dump(filtered_planets, f, indent=2)

print(f"\n✅ Success! Filtered {len(filtered_planets)} planets")

# Print some statistics
print("\n📊 Dataset Statistics:")
with_gravity = sum(1 for p in filtered_planets if p['gravity']['surface_ms2'])
with_orbit = sum(1 for p in filtered_planets if p['position_3d']['has_calculated_orbit'])
with_habitability = sum(1 for p in filtered_planets if p['habitability_score'] > 50)
with_water_likely = sum(1 for p in filtered_planets if 'Likely' in str(p.get('water_presence_estimate', '')))
terrestrial = sum(1 for p in filtered_planets if p['classification']['planet_class'] == 'Terrestrial')
gas_giants = sum(1 for p in filtered_planets if 'Jovian' in p['classification']['planet_class'])

print(f"  - Total planets processed: {len(filtered_planets)}")
print(f"  - Planets with calculated gravity: {with_gravity}")
print(f"  - Planets with 3D orbital positions: {with_orbit}")
print(f"  - Potentially habitable (score > 50): {with_habitability}")
print(f"  - Likely water presence: {with_water_likely}")
print(f"  - Terrestrial planets: {terrestrial}")
print(f"  - Gas/Ice giants: {gas_giants}")
print(f"  - Average toxicity: {sum(p['toxicity_percentage'] for p in filtered_planets) / len(filtered_planets):.1f}%")
print(f"  - Average habitability score: {sum(p['habitability_score'] for p in filtered_planets) / len(filtered_planets):.1f}/100")
