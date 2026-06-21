import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const thisDir = path.dirname(fileURLToPath(import.meta.url));

export const repoRoot = path.resolve(thisDir, "..", "..");
export const pitsDir = path.join(repoRoot, "pits");

export function walkMarkdown(dir = pitsDir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...walkMarkdown(full));
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      out.push(full);
    }
  }
  return out.sort();
}

export function extractPitRecord(markdown, filePath) {
  const match = markdown.match(/<!--\s*pit-record\s*([\s\S]*?)\s*-->/);
  if (!match) {
    throw new Error(`${filePath}: missing <!-- pit-record ... --> block`);
  }
  try {
    const record = JSON.parse(match[1]);
    record.path = path.relative(repoRoot, filePath);
    return record;
  } catch (error) {
    throw new Error(`${filePath}: invalid pit-record JSON: ${error.message}`);
  }
}

export function loadPitRecords() {
  return walkMarkdown().map((filePath) => {
    const markdown = fs.readFileSync(filePath, "utf8");
    return extractPitRecord(markdown, filePath);
  });
}

export function validateRecord(record) {
  const errors = [];
  const required = [
    "id",
    "title",
    "summary",
    "status",
    "confidence",
    "created_at",
    "updated_at",
    "tags",
    "affected_tools",
    "symptoms",
    "environment",
    "root_cause",
    "fix",
    "verification",
    "source_links"
  ];

  for (const key of required) {
    if (record[key] === undefined) errors.push(`missing ${key}`);
  }

  if (typeof record.id !== "string" || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(record.id ?? "")) {
    errors.push("id must be a lowercase slug");
  }
  if (!["candidate", "verified", "stale", "disputed"].includes(record.status)) {
    errors.push("status must be candidate, verified, stale, or disputed");
  }
  if (!["low", "medium", "high"].includes(record.confidence)) {
    errors.push("confidence must be low, medium, or high");
  }

  for (const key of ["created_at", "updated_at", "last_verified"]) {
    if (record[key] !== undefined && !/^\d{4}-\d{2}-\d{2}$/.test(record[key])) {
      errors.push(`${key} must be YYYY-MM-DD`);
    }
  }

  for (const key of ["tags", "affected_tools", "symptoms", "root_cause", "fix", "verification", "source_links"]) {
    if (!Array.isArray(record[key]) || record[key].length === 0) {
      errors.push(`${key} must be a non-empty array`);
    }
  }

  for (const tag of record.tags ?? []) {
    if (!/^[a-z0-9][a-z0-9-]*$/.test(tag)) errors.push(`invalid tag ${tag}`);
  }
  for (const tool of record.affected_tools ?? []) {
    if (!/^[a-z0-9][a-z0-9-]*$/.test(tool)) errors.push(`invalid affected tool ${tool}`);
  }
  for (const item of record.fix ?? []) {
    if (!item || typeof item.step !== "string" || item.step.length < 5) {
      errors.push("each fix item must include a step");
    }
  }
  for (const item of record.verification ?? []) {
    if (!item || typeof item.method !== "string" || item.method.length < 5) {
      errors.push("each verification item must include a method");
    }
  }
  for (const item of record.source_links ?? []) {
    if (!item || typeof item.title !== "string" || typeof item.type !== "string") {
      errors.push("each source link must include title and type");
    }
    if (!item?.url && !item?.locator) {
      errors.push("each source link must include url or locator");
    }
  }

  return errors;
}

// Slim discovery shape: enough for an agent to scan all records cheaply and
// decide which full record to fetch, without paying for the full prose.
// Keeps symptoms because exact error strings (the most common query) live there.
export function slimRecord(record) {
  return {
    id: record.id,
    title: record.title,
    summary: record.summary,
    status: record.status,
    confidence: record.confidence,
    last_verified: record.last_verified ?? record.updated_at ?? null,
    tags: record.tags ?? [],
    affected_tools: record.affected_tools ?? [],
    symptoms: record.symptoms ?? [],
    path: record.path ?? null
  };
}

export function searchableText(record) {
  return [
    record.id,
    record.title,
    record.summary,
    ...(record.tags ?? []),
    ...(record.affected_tools ?? []),
    ...(record.symptoms ?? []),
    ...(record.root_cause ?? []),
    ...(record.workarounds ?? []),
    ...(record.anti_patterns ?? [])
  ]
    .join("\n")
    .toLowerCase();
}
