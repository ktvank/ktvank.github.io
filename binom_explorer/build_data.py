"""
Build script: splits consolidated_ords.csv into per-binomial CSV files,
and supplements with clean binomials from uncleaned_data_consolidated_limited.csv
that have >= MIN_RECORDS records but are absent from the full dataset.

Output goes to binom_explorer/data/<bin_name>.csv
Ordinality is rounded to 4 decimal places to reduce file size.

Run once from the binom_explorer directory:
    python3 build_data.py
"""

import csv
import os
import re
from collections import defaultdict

FULL_FILE    = "consolidated_ords.csv"
LIMITED_FILE = "uncleaned_data_consolidated_limited.csv"
OUTPUT_DIR   = "data"
MIN_RECORDS   = 100
MIN_COUNT     = 10

os.makedirs(OUTPUT_DIR, exist_ok=True)

def bin_to_filename(bin_name):
    """Convert '(able, willing)' -> 'able_willing'"""
    name = bin_name.strip("()")
    name = name.replace(", ", "_")
    name = re.sub(r"[^a-z0-9_]", "", name)
    return name

STOPWORDS = {
    "a", "an", "the", "and", "or", "but", "nor", "so", "yet",
    "in", "on", "at", "to", "for", "of", "by", "as",
    "is", "it", "its", "be", "am", "are", "was", "were", "been",
    "he", "she", "we", "i", "me", "my", "his", "her", "him",
    "they", "them", "their", "you", "your", "our", "us",
    "this", "that", "these", "those", "not", "no", "nor",
    "if", "do", "did", "has", "had", "have", "may", "can",
    "will", "would", "could", "should", "shall", "with",
    "from", "into", "than", "then", "when", "where", "which",
    "who", "whom", "what", "how", "whether",
}

def is_clean(bin_name):
    """Only accept purely alphabetic word pairs with no stopwords."""
    name = bin_name.strip("()")
    if not re.match(r'^[a-z]+, [a-z]+$', name):
        return False
    w1, w2 = name.split(", ")
    return w1 not in STOPWORDS and w2 not in STOPWORDS

def write_group(bin_name, records):
    filename = bin_to_filename(bin_name)
    if not filename:
        return False
    records.sort(key=lambda r: r["date"])
    path = os.path.join(OUTPUT_DIR, f"{filename}.csv")
    with open(path, "w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        writer.writerow(["date", "ordinality", "count"])
        for r in records:
            writer.writerow([r["date"], round(r["ordinality"], 4), r["count"]])
    return True

# --- Full dataset ---
full_groups = defaultdict(list)
with open(FULL_FILE, newline="", encoding="utf-8") as f:
    for row in csv.DictReader(f):
        full_groups[row["bin"]].append({
            "date": int(row["date"]),
            "ordinality": float(row["ordinality"]),
            "count": int(row["count"]),
        })

full_written = sum(1 for bin_name, records in full_groups.items() if write_group(bin_name, records))
print(f"Full dataset: {full_written} files written")

# --- Supplement from limited CSV ---
limited_groups = defaultdict(list)
with open(LIMITED_FILE, newline="", encoding="utf-8") as f:
    for row in csv.DictReader(f):
        if not is_clean(row["bin"]):
            continue
        limited_groups[row["bin"]].append({
            "date": int(row["date"]),
            "ordinality": float(row["ordinality"]),
            "count": int(float(row["count"])),
        })

supplemented = 0
for bin_name, records in limited_groups.items():
    if bin_name in full_groups:
        continue  # already written from full dataset
    qualifying = [r for r in records if r["count"] >= MIN_COUNT]
    if len(qualifying) < MIN_RECORDS:
        continue
    if write_group(bin_name, qualifying):
        supplemented += 1

print(f"Supplemented: {supplemented} additional files from limited CSV (>= {MIN_RECORDS} records)")
print(f"Total: {full_written + supplemented} files in {OUTPUT_DIR}/")
