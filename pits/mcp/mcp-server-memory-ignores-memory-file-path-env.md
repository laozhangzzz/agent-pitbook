---
id: mcp-server-memory-ignores-memory-file-path-env
title: server-memory ignores MEMORY_FILE_PATH because the npm build lagged the source
status: verified
confidence: high
created_at: 2026-06-21
updated_at: 2026-06-21
last_verified: 2026-06-21
tags: [mcp, server-memory, environment-variable, npm, versioning, paths]
affected_tools: [claude-desktop, cursor, mcp-server]
---

# server-memory ignores MEMORY_FILE_PATH because the npm build lagged the source

## Summary

`@modelcontextprotocol/server-memory` appeared to ignore the `MEMORY_FILE_PATH` environment variable and always wrote `memory.json` to a fixed location. The GitHub source handled the variable correctly, but the version published to npm shipped a compiled `dist/index.js` with a hardcoded path. The general lesson: the npm-published build of an MCP server can lag the repository, so do not infer installed behavior from the repo source.

## Symptoms

- `MEMORY_FILE_PATH` is set but the memory file is created at a default location.
- Reading the GitHub source shows the env var being handled, yet your installed copy ignores it.
- A relative `MEMORY_FILE_PATH` writes to an unexpected directory.

## Root Cause

The npm release (e.g. 0.6.2) was older than the GitHub `main` source: its compiled `dist/index.js` hardcoded `path.join(__dirname, 'memory.json')` while the repo already read `process.env.MEMORY_FILE_PATH`. Separately, a relative `MEMORY_FILE_PATH` is resolved relative to the package's install directory, not your project, so it lands somewhere unexpected.

## Fix

1. Pin the fixed version explicitly so you get the build that honors the env var: use `@modelcontextprotocol/server-memory@latest` in the config (the fix shipped in release `2025.4.25`).
2. Reset any cached older copy if your client caches npx packages, then relaunch.
3. Use an absolute `MEMORY_FILE_PATH`; do not rely on a relative path resolving to your project root.

## Verification

With `@latest` and an absolute `MEMORY_FILE_PATH`, the memory file is created at exactly that path.

## Anti-Patterns

- Inferring an installed MCP server's behavior from the GitHub source instead of the published build.
- Assuming a relative env-var path is resolved against your project working directory.
- Patching `dist/index.js` in `node_modules` as a permanent fix instead of upgrading the package.

<!-- pit-record
{
  "id": "mcp-server-memory-ignores-memory-file-path-env",
  "title": "server-memory ignores MEMORY_FILE_PATH because the npm build lagged the source",
  "summary": "@modelcontextprotocol/server-memory ignored MEMORY_FILE_PATH because the npm-published dist hardcoded the path while the GitHub source already handled the env var. Pin @latest (fixed in 2025.4.25) and use an absolute path; a relative path resolves to the package dir, not your project.",
  "status": "verified",
  "confidence": "high",
  "created_at": "2026-06-21",
  "updated_at": "2026-06-21",
  "last_verified": "2026-06-21",
  "tags": ["mcp", "server-memory", "environment-variable", "npm", "versioning", "paths"],
  "affected_tools": ["claude-desktop", "cursor", "mcp-server"],
  "symptoms": [
    "MEMORY_FILE_PATH is set but the memory file is created at a default location",
    "the GitHub source handles the env var, yet the installed copy ignores it",
    "a relative MEMORY_FILE_PATH writes to an unexpected directory"
  ],
  "environment": {
    "package_manager": "npm",
    "constraints": ["npm-published build lagged the GitHub source", "relative env-var path resolved against package install dir"]
  },
  "root_cause": [
    "The npm release (e.g. 0.6.2) was older than the GitHub main source: its compiled dist/index.js hardcoded path.join(__dirname, 'memory.json').",
    "The repo source already read process.env.MEMORY_FILE_PATH, so reading the source misled users about installed behavior.",
    "A relative MEMORY_FILE_PATH is resolved relative to the package install directory, not the user's project."
  ],
  "fix": [
    {
      "step": "Pin @modelcontextprotocol/server-memory@latest in the config to get the build that honors the env var (fix shipped in release 2025.4.25)."
    },
    {
      "step": "Reset any cached older copy if your client caches npx packages, then relaunch."
    },
    {
      "step": "Use an absolute MEMORY_FILE_PATH rather than a relative one."
    }
  ],
  "verification": [
    {
      "method": "Launch with @latest and an absolute MEMORY_FILE_PATH, then check where the file is written.",
      "expected": "The memory file is created at exactly the absolute path provided."
    }
  ],
  "workarounds": [
    "As a stopgap some users edited dist/index.js in node_modules, but upgrading the package is the durable fix."
  ],
  "anti_patterns": [
    "Inferring installed MCP server behavior from the GitHub source instead of the published build.",
    "Assuming a relative env-var path resolves against the project working directory.",
    "Treating a node_modules patch as a permanent fix instead of upgrading."
  ],
  "source_links": [
    {
      "title": "modelcontextprotocol/servers issue 1018: Environment variables not respected in @modelcontextprotocol/server-memory package",
      "type": "issue",
      "url": "https://github.com/modelcontextprotocol/servers/issues/1018",
      "accessed_at": "2026-06-21"
    }
  ],
  "related": [],
  "safety": {
    "external_text_trusted": false,
    "requires_confirmation": false,
    "notes": ["Version identifiers (0.6.2, 2025.4.25) are from the issue thread; verify the current published version before relying on them."]
  }
}
-->
