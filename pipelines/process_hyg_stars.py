#!/usr/bin/env python3
"""
Download and process the HYG star database into a binary format for the frontend.

Outputs:
  public/star_data/hyg_stars.bin   — Float32Array (7 floats per star)
  public/star_data/hyg_meta.json   — metadata JSON
"""

import csv
import json
import math
import os
import struct
import urllib.request

# ─── Paths ────────────────────────────────────────────────────────────
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
ROOT_DIR = os.path.dirname(SCRIPT_DIR)
CSV_URL = "https://raw.githubusercontent.com/astronexus/HYG-Database/main/hyg/CURRENT/hygdata_v41.csv"
CSV_PATH = os.path.join(SCRIPT_DIR, "data", "hygdata_v3.csv")
OUT_DIR = os.path.join(ROOT_DIR, "public", "star_data")
BIN_PATH = os.path.join(OUT_DIR, "hyg_stars.bin")
META_PATH = os.path.join(OUT_DIR, "hyg_meta.json")

PARSEC_TO_LY = 3.26156


# ─── Color conversion ────────────────────────────────────────────────

def clamp(v, lo=0.0, hi=255.0):
    return max(lo, min(hi, v))


def temp_to_rgb(temp):
    """Tanner Helland algorithm — temperature (K) to (r, g, b) in 0-1 range."""
    temp = temp / 100.0

    # Red
    if temp <= 66:
        r = 255.0
    else:
        r = 329.698727446 * ((temp - 60) ** -0.1332047592)

    # Green
    if temp <= 66:
        g = 99.4708025861 * math.log(temp) - 161.1195681661
    else:
        g = 288.1221695283 * ((temp - 60) ** -0.0755148492)

    # Blue
    if temp >= 66:
        b = 255.0
    elif temp <= 19:
        b = 0.0
    else:
        b = 138.5177312231 * math.log(temp - 10) - 305.0447927307

    return (clamp(r) / 255.0, clamp(g) / 255.0, clamp(b) / 255.0)


def bv_to_rgb(bv):
    """Convert B-V color index to RGB via Ballesteros' formula."""
    bv = max(-0.4, min(2.0, bv))
    t = 4600.0 * (1.0 / (0.92 * bv + 1.7) + 1.0 / (0.92 * bv + 0.62))
    return temp_to_rgb(t)


def mag_to_size(mag):
    """Convert apparent magnitude to point size."""
    return max(0.5, min(5.0, 3.0 - mag * 0.3))


# ─── Download ─────────────────────────────────────────────────────────

def download_csv():
    os.makedirs(os.path.dirname(CSV_PATH), exist_ok=True)
    if os.path.exists(CSV_PATH):
        print(f"CSV already exists at {CSV_PATH}, skipping download.")
        return
    print(f"Downloading HYG database from {CSV_URL} ...")
    urllib.request.urlretrieve(CSV_URL, CSV_PATH)
    size_mb = os.path.getsize(CSV_PATH) / (1024 * 1024)
    print(f"Downloaded {size_mb:.1f} MB")


# ─── Process ──────────────────────────────────────────────────────────

def process():
    download_csv()

    stars = []
    skipped_dist = 0
    skipped_pos = 0
    skipped_ci = 0
    mag_buckets = {"< 0": 0, "0-2": 0, "2-4": 0, "4-6": 0, "6-8": 0, "8+": 0}

    with open(CSV_PATH, "r", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for row in reader:
            # Parse distance
            try:
                dist = float(row["dist"])
            except (ValueError, KeyError):
                skipped_dist += 1
                continue
            if dist >= 100000:
                skipped_dist += 1
                continue

            # Parse x, y, z (parsecs)
            try:
                x_pc = float(row["x"])
                y_pc = float(row["y"])
                z_pc = float(row["z"])
            except (ValueError, KeyError):
                skipped_pos += 1
                continue

            # Parse magnitude
            try:
                mag = float(row["mag"])
            except (ValueError, KeyError):
                mag = 6.0  # default dim star

            # Parse B-V color index
            try:
                ci = float(row["ci"])
            except (ValueError, KeyError):
                ci = 0.65  # default solar-ish
                skipped_ci += 1

            # Convert
            x_ly = x_pc * PARSEC_TO_LY
            y_ly = y_pc * PARSEC_TO_LY
            z_ly = z_pc * PARSEC_TO_LY
            r, g, b = bv_to_rgb(ci)
            size = mag_to_size(mag)

            stars.append((x_ly, y_ly, z_ly, r, g, b, size))

            # Magnitude buckets
            if mag < 0:
                mag_buckets["< 0"] += 1
            elif mag < 2:
                mag_buckets["0-2"] += 1
            elif mag < 4:
                mag_buckets["2-4"] += 1
            elif mag < 6:
                mag_buckets["4-6"] += 1
            elif mag < 8:
                mag_buckets["6-8"] += 1
            else:
                mag_buckets["8+"] += 1

    print(f"\nFiltering summary:")
    print(f"  Skipped (bad distance): {skipped_dist}")
    print(f"  Skipped (bad position): {skipped_pos}")
    print(f"  Missing B-V (defaulted): {skipped_ci}")
    print(f"  Stars kept: {len(stars)}")

    # ─── Write binary ─────────────────────────────────────────────────
    os.makedirs(OUT_DIR, exist_ok=True)

    with open(BIN_PATH, "wb") as f:
        for star in stars:
            f.write(struct.pack("7f", *star))

    bin_size = os.path.getsize(BIN_PATH)

    # Compute bounds
    min_ly = min(min(s[0], s[1], s[2]) for s in stars)
    max_ly = max(max(s[0], s[1], s[2]) for s in stars)

    # ─── Write metadata ───────────────────────────────────────────────
    meta = {
        "star_count": len(stars),
        "format": "float32",
        "fields_per_star": 7,
        "fields": ["x_ly", "y_ly", "z_ly", "r", "g", "b", "size"],
        "bounds": {"min_ly": round(min_ly), "max_ly": round(max_ly)},
    }

    with open(META_PATH, "w", encoding="utf-8") as f:
        json.dump(meta, f, indent=2)
        f.write("\n")

    meta_size = os.path.getsize(META_PATH)

    # ─── Summary ──────────────────────────────────────────────────────
    print(f"\nOutput files:")
    print(f"  {BIN_PATH}  ({bin_size / (1024 * 1024):.2f} MB)")
    print(f"  {META_PATH}  ({meta_size} bytes)")
    print(f"\nTotal stars: {len(stars)}")
    print(f"Bounds: [{round(min_ly)}, {round(max_ly)}] light-years")
    print(f"\nStars by magnitude:")
    for bucket, count in mag_buckets.items():
        print(f"  mag {bucket}: {count}")


if __name__ == "__main__":
    process()
