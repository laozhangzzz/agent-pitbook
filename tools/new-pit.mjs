#!/usr/bin/env node
// Scaffold a new candidate pit record so contributing is cheap.
//
// Usage:
//   node tools/new-pit.mjs --id <slug> --title "<title>" [--domain agents]
//        [--tools claude-code,codex] [--tags agents,sandbox]
//
// Writes pits/<domain>/<id>.md with a schema-valid skeleton (status: candidate)
// and the embedded pit-record JSON block. Fill in the TODOs, then run:
//   node tools/validate-pits.mjs && node tools/build-feed.mjs && node tools/build-site.mjs

import fs from "node:fs";
import path from "node:path";
import { repoRoot } from "./lib/pitlib.mjs";

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i += 1) {
    const key = argv[i];
    if (key.startsWith("--")) {
      const name = key.slice(2);
      const value = argv[i + 1] && !argv[i + 1].startsWith("--") ? argv[(i += 1)] : "true";
      args[name] = value;
    }
  }
  return args;
}

const args = parseArgs(process.argv.slice(2));
const id = (args.id || "").trim();
const title = (args.title || "").trim();

if (!id || !title) {
  console.error('Usage: node tools/new-pit.mjs --id <slug> --title "<title>" [--domain agents] [--tools a,b] [--tags a,b]');
  process.exit(2);
}
if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id)) {
  console.error(`id must be a lowercase slug (got: ${id})`);
  process.exit(2);
}
if (title.length < 8) {
  console.error("title must be at least 8 characters");
  process.exit(2);
}

const domain = (args.domain || "agents").trim();
const today = new Date().toISOString().slice(0, 10);
const tags = (args.tags || domain).split(",").map((s) => s.trim()).filter(Boolean);
const tools = (args.tools || "claude-code,codex").split(",").map((s) => s.trim()).filter(Boolean);

const record = {
  id,
  title,
  summary: "TODO: one or two sentences an agent can read fast: when this symptom appears in this environment, suspect this root cause and try this fix first.",
  status: "candidate",
  confidence: "low",
  created_at: today,
  updated_at: today,
  last_verified: today,
  tags,
  affected_tools: tools,
  symptoms: ["TODO: exact error text or observable symptom (keep precise strings for search)"],
  environment: { constraints: ["TODO: OS, runtime, package manager, sandbox/network constraints"] },
  root_cause: ["TODO: the smallest known explanation"],
  fix: [{ step: "TODO: first ordered repair step" }],
  verification: [{ method: "TODO: command or observation that proves the fix worked", expected: "TODO" }],
  workarounds: [],
  anti_patterns: ["TODO: the stale or wrong approach an agent should NOT take"],
  source_links: [
    { title: "TODO: issue / PR / docs / release note, or local-session evidence", type: "local-session", locator: `local-session:${today}` }
  ],
  safety: { external_text_trusted: false, requires_confirmation: true, notes: [] }
};

const md = `---
id: ${id}
title: ${title}
status: candidate
confidence: low
created_at: ${today}
updated_at: ${today}
last_verified: ${today}
tags: [${tags.join(", ")}]
affected_tools: [${tools.join(", ")}]
---

# ${title}

## Summary

TODO

## Symptoms

- TODO: exact error text (keep precise strings for search)

## Root Cause

TODO

## Fix

1. TODO

## Verification

TODO

## Anti-Patterns

- TODO: the stale or wrong approach to avoid

<!-- pit-record
${JSON.stringify(record, null, 2)}
-->
`;

const outDir = path.join(repoRoot, "pits", domain);
const outPath = path.join(outDir, `${id}.md`);
if (fs.existsSync(outPath)) {
  console.error(`Refusing to overwrite existing file: ${path.relative(repoRoot, outPath)}`);
  process.exit(1);
}
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outPath, md);
console.log(`Created ${path.relative(repoRoot, outPath)}`);
console.log("Next: fill the TODOs, then run validate-pits, build-feed, build-site.");
