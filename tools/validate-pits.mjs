#!/usr/bin/env node
import { loadPitRecords, validateRecord } from "./lib/pitlib.mjs";

const records = loadPitRecords();
const seen = new Set();
let failed = false;

for (const record of records) {
  const errors = validateRecord(record);
  if (seen.has(record.id)) errors.push(`duplicate id ${record.id}`);
  seen.add(record.id);

  if (errors.length > 0) {
    failed = true;
    console.error(`\n${record.path ?? record.id}`);
    for (const error of errors) console.error(`  - ${error}`);
  }
}

if (failed) {
  process.exitCode = 1;
} else {
  console.log(`OK: ${records.length} pit records validated`);
}

