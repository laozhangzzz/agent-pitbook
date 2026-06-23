#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import {
  repoRoot,
  loadPitRecords,
  validateRecord,
  slimRecord,
  recordSearchTerms,
  unresolvedPitTemplate
} from "./lib/pitlib.mjs";

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

const sorted = records.sort((a, b) => a.id.localeCompare(b.id));

const feedPath = path.join(repoRoot, "feeds", "pits.jsonl");
fs.writeFileSync(feedPath, `${sorted.map((record) => JSON.stringify(record)).join("\n")}\n`);
console.log(`Wrote ${records.length} records to ${path.relative(repoRoot, feedPath)}`);

// Slim discovery index: scan this first (small), then fetch the full record by id.
const indexPath = path.join(repoRoot, "feeds", "index.jsonl");
fs.writeFileSync(indexPath, `${sorted.map((record) => JSON.stringify(slimRecord(record))).join("\n")}\n`);
console.log(`Wrote ${records.length} records to ${path.relative(repoRoot, indexPath)}`);

const searchTermsPath = path.join(repoRoot, "feeds", "search-terms.jsonl");
fs.writeFileSync(
  searchTermsPath,
  `${sorted
    .map((record) =>
      JSON.stringify({
        id: record.id,
        title: record.title,
        status: record.status,
        affected_tools: record.affected_tools ?? [],
        tags: record.tags ?? [],
        url: `https://laozhangzzz.github.io/agent-pitbook/pits/${record.id}.html`,
        markdown_url: `https://laozhangzzz.github.io/agent-pitbook/pits/${record.id}.md`,
        search_terms: recordSearchTerms(record, 48)
      })
    )
    .join("\n")}\n`
);
console.log(`Wrote ${records.length} records to ${path.relative(repoRoot, searchTermsPath)}`);

const unresolvedTemplatePath = path.join(repoRoot, "feeds", "unresolved-pit-template.json");
fs.writeFileSync(unresolvedTemplatePath, `${JSON.stringify(unresolvedPitTemplate(), null, 2)}\n`);
console.log(`Wrote unresolved pit template to ${path.relative(repoRoot, unresolvedTemplatePath)}`);
