#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { repoRoot, loadPitRecords, recordAnswerQueries, recordAnswerSummary, defaultSiteBaseUrl } from "./lib/pitlib.mjs";

function parseArgs(argv) {
  const args = {
    format: "markdown",
    records: 12,
    queries: 6,
    id: null
  };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--format") args.format = argv[++i] ?? args.format;
    else if (arg === "--records") args.records = Number(argv[++i] ?? args.records);
    else if (arg === "--queries") args.queries = Number(argv[++i] ?? args.queries);
    else if (arg === "--id") args.id = argv[++i] ?? null;
    else if (arg === "--help" || arg === "-h") {
      console.log(`Usage: node tools/search-probes.mjs [--format markdown|json] [--records 12] [--queries 6] [--id pit-id]

Generate repeatable search-probe queries for auditing whether public search can find Agent Pitbook.
Use each query in web search and GitHub search; the expected result is the pit URL.`);
      process.exit(0);
    }
  }
  return args;
}

function loadAnswerFeed() {
  const filePath = path.join(repoRoot, "feeds", "answer-queries.jsonl");
  try {
    return fs
      .readFileSync(filePath, "utf8")
      .trim()
      .split("\n")
      .filter(Boolean)
      .map((line) => JSON.parse(line));
  } catch {
    return [];
  }
}

function buildFromRecords() {
  return loadPitRecords()
    .sort((a, b) => a.id.localeCompare(b.id))
    .map((record) => ({
      id: record.id,
      title: record.title,
      status: record.status,
      affected_tools: record.affected_tools ?? [],
      url: `${defaultSiteBaseUrl}/pits/${record.id}.html`,
      markdown_url: `${defaultSiteBaseUrl}/pits/${record.id}.md`,
      answer_summary: recordAnswerSummary(record),
      answer_queries: recordAnswerQueries(record, 64)
    }));
}

function buildProbes(args) {
  let records = loadAnswerFeed();
  if (records.length === 0) records = buildFromRecords();
  if (args.id) records = records.filter((record) => record.id === args.id);
  const limitRecords = Number.isFinite(args.records) && args.records > 0 ? args.records : records.length;
  const limitQueries = Number.isFinite(args.queries) && args.queries > 0 ? args.queries : 6;
  return records.slice(0, limitRecords).map((record) => ({
    id: record.id,
    title: record.title,
    status: record.status,
    expected_url: record.url,
    expected_markdown_url: record.markdown_url,
    answer_summary: record.answer_summary,
    queries: (record.answer_queries ?? []).slice(0, limitQueries)
  }));
}

function printMarkdown(probes) {
  const lines = [
    "# Agent Pitbook Search Probes",
    "",
    "Use these queries to audit whether ordinary web search, GitHub repository search, and GitHub code search can find Agent Pitbook for solved problems.",
    "",
    "A pass means the expected Agent Pitbook pit URL appears in the results for the query. A weak pass means the repository appears but the specific pit page does not. A fail means neither appears.",
    ""
  ];
  for (const probe of probes) {
    lines.push(`## ${probe.id}`, "");
    lines.push(`Expected: ${probe.expected_url}`);
    lines.push("");
    lines.push(`Problem: ${probe.answer_summary?.problem ?? ""}`);
    lines.push(`Root cause: ${probe.answer_summary?.root_cause ?? ""}`);
    lines.push(`Fix first: ${probe.answer_summary?.fix ?? ""}`);
    lines.push("");
    lines.push("Queries:", "");
    for (const query of probe.queries) lines.push(`- ${query}`);
    lines.push("");
  }
  console.log(lines.join("\n"));
}

const args = parseArgs(process.argv.slice(2));
const probes = buildProbes(args);
if (args.format === "json") {
  console.log(JSON.stringify(probes, null, 2));
} else {
  printMarkdown(probes);
}

