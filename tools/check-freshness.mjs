#!/usr/bin/env node
// Flag pit records that may be going stale.
//
// Debug knowledge rots: version-specific fixes stop being true. A record's
// last_verified date is its freshness signal. This reports records that have
// not been verified within --max-age-days (default 180) and are still marked
// verified/candidate (i.e. not already stale/disputed).
//
// Usage:
//   node tools/check-freshness.mjs [--max-age-days 180] [--fail]
//   --fail  exit non-zero if any record is stale-by-age (for CI gating)

import { loadPitRecords } from "./lib/pitlib.mjs";

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i += 1) {
    if (argv[i] === "--fail") args.fail = true;
    else if (argv[i] === "--max-age-days") args.maxAgeDays = Number(argv[(i += 1)]);
  }
  return args;
}

const args = parseArgs(process.argv.slice(2));
const maxAgeDays = Number.isFinite(args.maxAgeDays) ? args.maxAgeDays : 180;
const now = Date.now();
const MS_PER_DAY = 24 * 60 * 60 * 1000;

const records = loadPitRecords();
const aging = [];

for (const record of records) {
  if (record.status === "stale" || record.status === "disputed") continue;
  const stamp = record.last_verified || record.updated_at;
  if (!stamp) continue;
  const ageDays = Math.floor((now - Date.parse(`${stamp}T00:00:00Z`)) / MS_PER_DAY);
  if (ageDays > maxAgeDays) aging.push({ record, ageDays, stamp });
}

aging.sort((a, b) => b.ageDays - a.ageDays);

if (aging.length === 0) {
  console.log(`OK: all ${records.length} records verified within ${maxAgeDays} days.`);
  process.exit(0);
}

console.log(`${aging.length} record(s) not verified in ${maxAgeDays}+ days:\n`);
for (const { record, ageDays, stamp } of aging) {
  console.log(`  ${record.id}  last_verified=${stamp}  age=${ageDays}d  status=${record.status}`);
  console.log(`    -> re-verify and bump last_verified, or set status: stale`);
}

process.exit(args.fail ? 1 : 0);
