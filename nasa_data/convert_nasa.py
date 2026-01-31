import pandas as pd
import numpy as np
import json
import math
from io import StringIO
from datetime import datetime

# --- CONFIGURATION ---
INPUT_FILE = 'nasa_data.csv'
OUTPUT_FILE = 'nasa_exoplanets_frontend.json'
# Current approximate Julian Date (Jan 2026)
CURRENT_JD = 2461072.0 

# --- ORBITAL PHYSICS FUNCTIONS ---

def solve_kepler(M, e, tolerance=1e-6):
    """ Numerically solves Kepler's Equation: M = E - e*sin(E) """
    E = M if e < 0.8 else np.pi
    for _ in range(50):
        delta = E - e * np.sin(E) - M
        if abs(delta) < tolerance:
            break
        E = E - delta / (1 - e * np.cos(E))
    return E

def calculate_position(row, jd_date):
    """ Returns x, y, z coordinates in Astronomical Units (AU) """
    try:
        # Extract parameters (handling missing values)
        a = row.get('pl_orbsmax')      # Semi-major axis
        e = row.get('pl_orbeccen', 0)  # Eccentricity (default to 0)
        i_deg = row.get('pl_orbincl', 90) # Inclination (default to 90 for transits)
        w_deg = row.get('pl_orblper', 0)  # Arg of periastron
        P = row.get('pl_orbper')       # Period (days)
        
        # Reference time (Time of Periastron or Transit Midpoint)
        T0 = row.get('pl_orbtper')
        if pd.isna(T0): T0 = row.get('pl_tranmid')
        
        # If critical data is missing, we cannot calculate the orbit
        if pd.isna(a) or pd.isna(P) or pd.isna(T0):
            return None

        # Convert to float and radians
        a, e, P, T0 = float(a), float(e), float(P), float(T0)
        i_rad = np.radians(float(i_deg))
        w_rad = np.radians(float(w_deg))
        
        # 1. Mean Anomaly (M)
        dt = jd_date - T0
        M = (2 * np.pi * dt) / P
        M = M % (2 * np.pi)
        
        # 2. Eccentric Anomaly (E)
        E = solve_kepler(M, e)
        
        # 3. 2D Coordinates in orbital plane
        x_orb = a * (np.cos(E) - e)
        y_orb = a * np.sqrt(1 - e**2) * np.sin(E)
        
        # 4. Rotate to 3D space (x, y, z)
        # Assuming Longitude of Ascending Node (Omega) = 0
        x = x_orb * np.cos(w_rad) - y_orb * np.sin(w_rad) * np.cos(i_rad)
        y = x_orb * np.sin(w_rad) + y_orb * np.cos(w_rad) * np.cos(i_rad)
        z = y_orb * np.sin(i_rad)
        
        return {"x": x, "y": y, "z": z}
    except:
        return None

def clean_data_for_json(obj):
    """ Recursively converts NaN/Infinity to None for valid JSON """
    if isinstance(obj, float):
        if math.isnan(obj) or math.isinf(obj):
            return None
        return obj
    elif isinstance(obj, dict):
        return {k: clean_data_for_json(v) for k, v in obj.items()}
    elif isinstance(obj, list):
        return [clean_data_for_json(v) for v in obj]
    return obj

# --- MAIN EXECUTION ---

print(f"Reading {INPUT_FILE}...")

# 1. Read file to find the header (skipping comments)
with open(INPUT_FILE, 'r') as f:
    lines = f.readlines()

header_idx = next(i for i, l in enumerate(lines) if not l.startswith('#'))

# 2. Load into Pandas
df = pd.read_csv(StringIO("".join(lines[header_idx:])))
print(f"Processing {len(df)} exoplanets...")

# 3. Iterate and calculate orbits
records = []
for _, row in df.iterrows():
    record = row.to_dict()
    
    # Calculate current position
    pos = calculate_position(row, CURRENT_JD)
    
    if pos:
        record['position'] = pos
        record['has_orbit'] = True
    else:
        record['position'] = None
        record['has_orbit'] = False
        
    records.append(record)

# 4. Clean and Save
print("Cleaning NaN values...")
final_data = clean_data_for_json(records)

print(f"Saving to {OUTPUT_FILE}...")
with open(OUTPUT_FILE, 'w') as f:
    json.dump(final_data, f, indent=2)

print("Success! The JSON file is ready for your Front-End.")
