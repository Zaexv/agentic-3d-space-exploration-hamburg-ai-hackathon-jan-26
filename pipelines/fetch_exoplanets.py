#!/usr/bin/env python3
"""
fetch_exoplanets.py

Single pipeline script that replaces the old 00-05 step pipeline.
Queries the NASA Exoplanet Archive, computes 3D cartesian coordinates,
and exports clean JSON cluster files for the frontend.
"""

import json
import math
import os
import sys
from datetime import date

import numpy as np
import numpy.ma as ma

from astroquery.ipac.nexsci.nasa_exoplanet_archive import NasaExoplanetArchive

# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------

COLUMNS = [
    "pl_name", "hostname", "sy_dist", "ra", "dec",
    "pl_rade", "pl_bmasse", "pl_eqt", "pl_orbper", "pl_orbsmax",
    "discoverymethod", "disc_year",
    "st_teff", "st_rad", "st_mass", "st_spectype",
]

DISTANCE_TIERS = [
    ("nearby",  0,    100),
    ("medium",  100,  500),
    ("far",     500,  2000),
    ("veryfar", 2000, float("inf")),
]

QUADRANTS = [
    (1, 0,   90),
    (2, 90,  180),
    (3, 180, 270),
    (4, 270, 360),
]

PC_TO_LY = 3.26156  # parsecs -> light-years

MAX_CLUSTER_BYTES = 20 * 1024 * 1024  # 20 MB

OUTPUT_DIR = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
    "nasa_data", "clusters",
)

# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------


def safe_value(val):
    """Extract a raw Python scalar from an astropy Quantity / masked value."""
    if ma.is_masked(val):
        return None
    try:
        v = val.value  # astropy Quantity
    except AttributeError:
        v = val
    # Unwrap 0-d numpy arrays / masked arrays
    if isinstance(v, (np.ndarray, ma.MaskedArray)):
        if v.ndim == 0:
            v = v.item()
        else:
            return None
    # Convert numpy types to native Python types for JSON serialisation
    if isinstance(v, (np.integer, int)) and not isinstance(v, bool):
        return int(v)
    if isinstance(v, (np.floating, float)):
        fv = float(v)
        if math.isnan(fv) or math.isinf(fv):
            return None
        return round(fv, 6)
    if isinstance(v, (np.str_, np.bytes_, bytes)):
        return str(v)
    return v


def row_to_dict(row):
    """Convert one astropy Table row into a plain dict."""
    d = {}
    for col in COLUMNS:
        d[col] = safe_value(row[col])
    return d


def compute_cartesian(planet: dict) -> dict:
    """Add x_ly, y_ly, z_ly, dist_ly from ra/dec/sy_dist (parsecs)."""
    sy_dist = planet["sy_dist"]
    ra = planet["ra"]
    dec = planet["dec"]
    if sy_dist is None or ra is None or dec is None:
        return planet

    dist_ly = sy_dist * PC_TO_LY
    ra_rad = math.radians(ra)
    dec_rad = math.radians(dec)

    planet["dist_ly"] = round(dist_ly, 2)
    planet["x_ly"] = round(dist_ly * math.cos(dec_rad) * math.cos(ra_rad), 2)
    planet["y_ly"] = round(dist_ly * math.cos(dec_rad) * math.sin(ra_rad), 2)
    planet["z_ly"] = round(dist_ly * math.sin(dec_rad), 2)
    return planet


def enrich_characteristics(planet: dict) -> dict:
    """Add derived characteristics used by the frontend UI."""
    chars = {}

    pl_rade = planet.get('pl_rade') or 1.0
    pl_eqt = planet.get('pl_eqt') or 288
    pl_masse = planet.get('pl_bmasse') or 1.0

    # 1. radius_position — classification by size
    if pl_rade > 6:
        chars['radius_position'] = 'Jupiter-like'
    elif pl_rade > 3:
        chars['radius_position'] = 'Neptune-like'
    elif pl_rade > 1.5:
        chars['radius_position'] = 'Super-Earth'
    elif pl_rade > 0.8:
        chars['radius_position'] = 'Earth-like'
    else:
        chars['radius_position'] = 'Sub-Earth'

    # 2. atmosphere_type — based on size and temperature
    if pl_rade < 0.5:
        chars['atmosphere_type'] = 'None (Exosphere)'
    elif pl_rade > 6:
        chars['atmosphere_type'] = 'H2-He (Dense Gas Giant)'
    elif pl_rade > 3:
        chars['atmosphere_type'] = 'H2-He-CH4 (Ice Giant)'
    elif pl_eqt > 700:
        chars['atmosphere_type'] = 'CO2-SO2 (Hot Dense)'
    elif 200 <= pl_eqt <= 350 and pl_rade <= 2:
        chars['atmosphere_type'] = 'N2-O2 (Potentially Breathable)'
    elif pl_eqt < 200:
        chars['atmosphere_type'] = 'N2-CH4 (Cold Thin)'
    else:
        chars['atmosphere_type'] = 'CO2-N2 (Dense)'

    # 3. principal_material — based on radius and temperature
    if pl_rade > 6:
        chars['principal_material'] = 'Gas (Hydrogen/Helium)'
    elif pl_rade > 3:
        chars['principal_material'] = 'Ice/Gas (Water/Ammonia/Methane)'
    elif pl_eqt > 1000:
        chars['principal_material'] = 'Rocky (Iron/Silicates - Molten)'
    elif pl_eqt > 500:
        chars['principal_material'] = 'Rocky (Silicates)'
    elif 200 <= pl_eqt <= 350:
        chars['principal_material'] = 'Rocky (Silicates/Iron/Water)'
    else:
        chars['principal_material'] = 'Rocky/Ice (Silicates/Frozen Volatiles)'

    # 4. habitability_percent — rough estimate
    hab = 0
    if 200 <= pl_eqt <= 350 and 0.5 <= pl_rade <= 2.0:
        hab = 50
        if 250 <= pl_eqt <= 310:
            hab += 20
        if 0.8 <= pl_rade <= 1.5:
            hab += 15
        if 0.5 <= pl_masse <= 3.0:
            hab += 15
        hab = min(hab, 100)
    elif 200 <= pl_eqt <= 400 and pl_rade <= 3.0:
        hab = 15
    chars['habitability_percent'] = hab

    # 5. toxicity_percent — inverse of habitability roughly
    if hab > 70:
        chars['toxicity_percent'] = 10
    elif hab > 30:
        chars['toxicity_percent'] = 40
    elif pl_eqt > 700 or pl_eqt < 100:
        chars['toxicity_percent'] = 100
    else:
        chars['toxicity_percent'] = 80

    # 6. distance_to_earth_ly
    chars['distance_to_earth_ly'] = planet.get('dist_ly')

    # 7. orbit_type
    orbsmax = planet.get('pl_orbsmax')
    if orbsmax is not None:
        if orbsmax < 0.1:
            chars['orbit_type'] = 'Ultra-short - Scorching Zone'
        elif orbsmax < 0.5:
            chars['orbit_type'] = 'Circular - Hot Zone'
        elif orbsmax < 1.5:
            chars['orbit_type'] = 'Circular - Habitable Zone'
        elif orbsmax < 5:
            chars['orbit_type'] = 'Circular - Cold Zone'
        else:
            chars['orbit_type'] = 'Wide - Frozen Zone'

    # 8. coordinates_3d (for frontend compatibility)
    chars['coordinates_3d'] = {
        'x_light_years': planet.get('x_ly'),
        'y_light_years': planet.get('y_ly'),
        'z_light_years': planet.get('z_ly'),
        'system': 'Pre-computed (RA/Dec/Distance)',
    }

    planet['characteristics'] = chars
    return planet


def assign_bucket(planet: dict):
    """Return (tier_name, quadrant_number) for a planet."""
    sy_dist = planet.get("sy_dist")
    ra = planet.get("ra")
    if sy_dist is None or ra is None:
        return None, None

    tier_name = None
    for name, lo, hi in DISTANCE_TIERS:
        if lo <= sy_dist < hi:
            tier_name = name
            break

    quad = None
    for q, lo, hi in QUADRANTS:
        if lo <= ra < hi:
            quad = q
            break
    if quad is None and ra >= 360:
        quad = 4  # edge case

    return tier_name, quad


def write_cluster(filepath: str, planets: list):
    """Write a cluster JSON file; split into _a/_b if > 20 MB."""
    data = json.dumps(planets, separators=(",", ":"))
    if len(data.encode()) <= MAX_CLUSTER_BYTES:
        with open(filepath, "w") as f:
            f.write(data)
        return [filepath]

    # Split into two halves
    mid = len(planets) // 2
    base, ext = os.path.splitext(filepath)
    parts = []
    for suffix, chunk in [("_a", planets[:mid]), ("_b", planets[mid:])]:
        part_path = f"{base}{suffix}{ext}"
        with open(part_path, "w") as f:
            json.dump(chunk, f, separators=(",", ":"))
        parts.append(part_path)
    return parts


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------


def main():
    print("=" * 60)
    print("  Exoplanet Pipeline  -  fetch, transform, cluster")
    print("=" * 60)

    # 1. Query NASA Exoplanet Archive — use 'ps' table for maximum coverage
    #    'ps' has ~39K rows (multiple references per planet) vs 'pscomppars' ~6K
    print("\n[1/4] Querying NASA Exoplanet Archive (ps table — all references)...")
    result = NasaExoplanetArchive.query_criteria(
        table="ps",
        select=",".join(COLUMNS),
        where="sy_dist is not null and ra is not null and dec is not null",
    )
    print(f"       Fetched {len(result)} rows.")

    # 2. Convert to dicts + compute cartesian + deduplicate by pl_name
    print("[2/4] Converting rows, computing 3D coordinates, deduplicating...")
    seen = {}  # pl_name -> planet dict (keep the most complete entry)
    skipped = 0
    for row in result:
        d = row_to_dict(row)
        if d["sy_dist"] is None or d["ra"] is None or d["dec"] is None:
            skipped += 1
            continue
        name = d.get("pl_name")
        if name is None:
            skipped += 1
            continue
        # Keep the entry with the most non-null fields
        if name in seen:
            existing_nulls = sum(1 for v in seen[name].values() if v is None)
            new_nulls = sum(1 for v in d.values() if v is None)
            if new_nulls >= existing_nulls:
                continue  # existing entry is better
        d = compute_cartesian(d)
        d = enrich_characteristics(d)
        seen[name] = d
    planets = list(seen.values())
    print(f"       {len(planets)} unique planets with valid positions ({skipped} skipped, {len(result) - len(planets) - skipped} duplicates merged).")

    # 3. Bucket into clusters
    print("[3/4] Assigning planets to distance/quadrant clusters...")
    buckets: dict[str, list] = {}
    unassigned = 0
    for p in planets:
        tier, quad = assign_bucket(p)
        if tier is None or quad is None:
            unassigned += 1
            continue
        key = f"{tier}_quad{quad}"
        buckets.setdefault(key, []).append(p)

    # 4. Write output
    print("[4/4] Writing cluster files...")
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    cluster_meta: dict[str, dict] = {}
    total_exported = 0

    for key in sorted(buckets):
        filepath = os.path.join(OUTPUT_DIR, f"{key}.json")
        written_files = write_cluster(filepath, buckets[key])
        count = len(buckets[key])
        total_exported += count

        if len(written_files) == 1:
            cluster_meta[key] = {
                "filename": os.path.basename(written_files[0]),
                "planet_count": count,
            }
        else:
            # Split files: register each part
            mid = count // 2
            for i, wf in enumerate(written_files):
                part_key = f"{key}_{chr(ord('a') + i)}"
                part_count = mid if i == 0 else count - mid
                cluster_meta[part_key] = {
                    "filename": os.path.basename(wf),
                    "planet_count": part_count,
                }
            # Also keep unsplit file reference removed (don't write orig)
            # Remove the unsplit file if it exists from a previous run
            if os.path.exists(filepath):
                os.remove(filepath)

    # Write cluster_index.json
    index = {
        "total_planets": total_exported,
        "total_clusters": len(cluster_meta),
        "generated_date": date.today().isoformat(),
        "clusters": cluster_meta,
    }
    index_path = os.path.join(OUTPUT_DIR, "cluster_index.json")
    with open(index_path, "w") as f:
        json.dump(index, f, indent=2)

    # Summary
    print("\n" + "=" * 60)
    print("  SUMMARY")
    print("=" * 60)
    print(f"  Total fetched from NASA:  {len(result)}")
    print(f"  Total exported:           {total_exported}")
    print(f"  Skipped (no position):    {skipped}")
    print(f"  Unassigned (bucket err):  {unassigned}")
    print(f"  Cluster files written:    {len(cluster_meta)}")
    print()
    for key in sorted(cluster_meta):
        m = cluster_meta[key]
        print(f"    {m['filename']:30s}  {m['planet_count']:>6,} planets")
    print()
    print(f"  Output directory: {OUTPUT_DIR}")
    print(f"  Index file:       {index_path}")
    print("=" * 60)


if __name__ == "__main__":
    main()
