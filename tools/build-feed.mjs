#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { repoRoot, loadPitRecords, validateRecord } from "./lib/pitlib.mjs";

const records = loadPitRecords();
const errors = [];

for (const record of records) {
  const recordErrors = validateRecord(record);
  if (recordErrors.length > 0) {
    errors.push(`${record.path}: ${recordErrors.join("; ")}`);
  }
}

if (errors.length > 0) {
  for (const error of errors) console.error(error);
  process.exit(1);
}

const feedPath = path.join(repoRoot, "feeds", "pits.jsonl");
const lines = records
  .sort((a, b) => a.id.localeCompare(b.id))
  .map((record) => JSON.stringify(record));

fs.writeFileSync(feedPath, `${lines.join("\n")}\n`);
console.log(`Wrote ${records.length} records to ${path.relative(repoRoot, feedPath)}`);

