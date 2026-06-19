#!/usr/bin/env node
import { loadPitRecords, searchableText } from "./lib/pitlib.mjs";

const query = process.argv.slice(2).join(" ").trim().toLowerCase();

if (!query) {
  console.error('Usage: node tools/search-pits.mjs "error text or tool name"');
  process.exit(2);
}

const terms = query.split(/\s+/).filter(Boolean);
const results = loadPitRecords()
  .map((record) => {
    const text = searchableText(record);
    const score = terms.reduce((sum, term) => sum + (text.includes(term) ? 1 : 0), 0);
    return { record, score };
  })
  .filter((item) => item.score > 0)
  .sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    if (a.record.status !== b.record.status) return a.record.status === "verified" ? -1 : 1;
    return a.record.id.localeCompare(b.record.id);
  })
  .slice(0, 10);

if (results.length === 0) {
  console.log("No pit records matched.");
  process.exit(0);
}

for (const { record, score } of results) {
  console.log(`${record.id}  score=${score}  status=${record.status}  confidence=${record.confidence}`);
  console.log(`  ${record.title}`);
  console.log(`  ${record.summary}`);
  console.log(`  ${record.path}`);
}

