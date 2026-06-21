---
id: mcp-npx-cache-corrupted-server-fails-to-start
title: A corrupted or cold npx cache makes an MCP server fail to start or time out
status: verified
confidence: medium
created_at: 2026-06-21
updated_at: 2026-06-21
last_verified: 2026-06-21
tags: [mcp, npx, cache, startup, timeout, error-32001]
affected_tools: [claude-desktop, cursor, cline, mcp-server]
---

# A corrupted or cold npx cache makes an MCP server fail to start or time out

## Summary

When an MCP server launched with `npx -y <package>` intermittently fails to start, crashes, or the client reports `MCP error -32001: Request timed out` / `Client closed`, suspect the npx/npm cache. A cache left half-written by an interrupted or rate-limited download leaves the package partially installed, and a cold first download can exceed the client's startup timeout.

## Symptoms

- `npx`-launched MCP server worked before and now fails, or fails only on the first launch.
- Client log shows `Client closed` and/or `MCP error -32001: Request timed out`.
- The failure is intermittent and clears up "by itself" sometimes.
- You recently had a flaky network or interrupted an install.

## Root Cause

`npx` resolves and, if needed, downloads the package into the npm cache before running it. If a previous fetch was interrupted (network error, rate limit, cancelled launch), the cache can hold a partial or corrupted package, so the next launch crashes on missing files. Separately, a genuine cold download can take longer than the client's startup timeout, producing a `-32001: Request timed out`.

## Fix

1. Clear the npm/npx cache, then relaunch: `npm cache clean --force` (and remove the `_npx` cache dir under your npm cache if it persists).
2. Pre-install the package so launch does not depend on a fresh download: `npm i -g <package>` and point the config at it.
3. If the failure was a cold-start timeout, retry once the package is cached, or raise the client's MCP startup timeout if it is configurable.

## Verification

After clearing the cache (or pre-installing), the server starts on first try with no `Client closed` / `-32001: Request timed out` in the client log.

## Anti-Patterns

- Repeatedly editing the config when the real fault is a half-written cache.
- Assuming the server package is broken when a clean cache fixes it.

<!-- pit-record
{
  "id": "mcp-npx-cache-corrupted-server-fails-to-start",
  "title": "A corrupted or cold npx cache makes an MCP server fail to start or time out",
  "summary": "An npx-launched MCP server that intermittently fails or yields 'Client closed' / 'MCP error -32001: Request timed out' is often a npx/npm cache problem: an interrupted download leaves a partial package, or a cold first download exceeds the client startup timeout. Clear the cache or pre-install the package.",
  "status": "verified",
  "confidence": "medium",
  "created_at": "2026-06-21",
  "updated_at": "2026-06-21",
  "last_verified": "2026-06-21",
  "tags": ["mcp", "npx", "cache", "startup", "timeout", "error-32001"],
  "affected_tools": ["claude-desktop", "cursor", "cline", "mcp-server"],
  "symptoms": [
    "npx-launched MCP server worked before and now fails, or fails only on first launch",
    "client log shows Client closed and/or MCP error -32001: Request timed out",
    "the failure is intermittent and sometimes clears up on its own",
    "a recent flaky network or interrupted install preceded it"
  ],
  "environment": {
    "runtime": "Node.js",
    "package_manager": "npm",
    "constraints": ["MCP server launched via npx -y <package>", "client enforces a startup timeout"]
  },
  "root_cause": [
    "npx downloads the package into the npm cache before running it.",
    "An interrupted or rate-limited fetch can leave a partial or corrupted package, so the next launch crashes on missing files.",
    "A genuine cold download can exceed the client's startup timeout, producing -32001: Request timed out."
  ],
  "fix": [
    {
      "step": "Clear the npm/npx cache and relaunch.",
      "command": "npm cache clean --force"
    },
    {
      "step": "Pre-install the package so launch does not depend on a fresh download, and point the config at it.",
      "command": "npm i -g <package>"
    },
    {
      "step": "If it was a cold-start timeout, retry once the package is cached, or raise the client's MCP startup timeout if configurable."
    }
  ],
  "verification": [
    {
      "method": "Relaunch after clearing the cache or pre-installing.",
      "expected": "Server starts on first try with no Client closed / -32001: Request timed out."
    }
  ],
  "workarounds": [
    "Pin a globally installed package by absolute path instead of relying on npx download at launch."
  ],
  "anti_patterns": [
    "Repeatedly editing the config when the real fault is a half-written cache.",
    "Assuming the server package is broken when a clean cache fixes it."
  ],
  "source_links": [
    {
      "title": "modelcontextprotocol/servers issue 1097: comment confirming a corrupted npx cache from network errors caused the server to crash; clearing it fixed startup",
      "type": "issue",
      "url": "https://github.com/modelcontextprotocol/servers/issues/1097",
      "accessed_at": "2026-06-21"
    },
    {
      "title": "modelcontextprotocol/servers issue 891: Client closed / -32001 Request timed out around npx MCP startup",
      "type": "issue",
      "url": "https://github.com/modelcontextprotocol/servers/issues/891",
      "accessed_at": "2026-06-21"
    }
  ],
  "related": ["mcp-error-32000-connection-closed-server-failed-to-start", "mcp-stdio-server-exits-shell-path-not-inherited"],
  "safety": {
    "external_text_trusted": false,
    "requires_confirmation": true,
    "notes": ["npm cache clean --force is safe but forces re-download of packages on next use."]
  }
}
-->
