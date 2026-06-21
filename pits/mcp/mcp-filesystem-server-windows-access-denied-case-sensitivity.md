---
id: mcp-filesystem-server-windows-access-denied-case-sensitivity
title: Filesystem MCP server denies allowed Windows paths due to drive-letter case mismatch
status: candidate
confidence: medium
created_at: 2026-06-21
updated_at: 2026-06-21
last_verified: 2026-06-21
tags: [mcp, server-filesystem, windows, paths, case-sensitivity, access-denied]
affected_tools: [claude-desktop, cursor, mcp-server]
---

# Filesystem MCP server denies allowed Windows paths due to drive-letter case mismatch

## Summary

On Windows, `@modelcontextprotocol/server-filesystem` can reject paths that are inside an allowed directory with `Access denied - path outside allowed directories`, because its path-validation compares strings without normalizing Windows drive-letter case and separators (`C:\source` vs `c:\source`).

## Symptoms

- Windows only: `read_file`/`list_directory` on a file under an allowed directory returns `Error: Access denied - path outside allowed directories`.
- The denied path is visibly inside one of the configured allowed roots.
- No other errors in the logs.

## Root Cause

The allowed-directory check compares the requested path against the allowed roots as strings. Windows drive letters and path normalization are case-insensitive in practice (`C:\source` and `c:\source` refer to the same place) but the comparison treats them as different, so a legitimately-allowed path fails the containment test. Windows can also, rarely, have case-sensitive paths, which makes a fully correct fix non-trivial.

## Fix

1. Make the configured allowed-directory path's drive-letter case match what the client sends (try both `C:\...` and `c:\...`).
2. Track the upstream fix: a PR (#2111 at time of writing) addresses the normalization; upgrade once it ships in a release.
3. As an interim measure some users patched `index.ts` path normalization, rebuilt, and replaced the installed `dist/index.js`.

## Verification

After aligning the drive-letter case (or applying the patched build), `read_file` on a path under the allowed directory succeeds instead of returning `Access denied - path outside allowed directories`.

## Anti-Patterns

- Widening allowed directories to the drive root to work around the case mismatch (over-broad filesystem access).
- Assuming the allow-list config is wrong when the validator's normalization is the bug.

<!-- pit-record
{
  "id": "mcp-filesystem-server-windows-access-denied-case-sensitivity",
  "title": "Filesystem MCP server denies allowed Windows paths due to drive-letter case mismatch",
  "summary": "On Windows, @modelcontextprotocol/server-filesystem can return 'Access denied - path outside allowed directories' for paths that are inside an allowed root, because its validation does not normalize Windows drive-letter case (C:\\source vs c:\\source). Match the configured case, or use a patched build until the upstream fix ships.",
  "status": "candidate",
  "confidence": "medium",
  "created_at": "2026-06-21",
  "updated_at": "2026-06-21",
  "last_verified": "2026-06-21",
  "tags": ["mcp", "server-filesystem", "windows", "paths", "case-sensitivity", "access-denied"],
  "affected_tools": ["claude-desktop", "cursor", "mcp-server"],
  "symptoms": [
    "Windows only: a file under an allowed directory returns 'Error: Access denied - path outside allowed directories'",
    "the denied path is visibly inside a configured allowed root",
    "no other errors in the logs"
  ],
  "environment": {
    "os": "Windows",
    "constraints": ["server-filesystem allowed-directory validation", "Windows drive-letter case insensitivity"]
  },
  "root_cause": [
    "The allowed-directory check compares request paths against allowed roots as strings.",
    "Windows drive letters/normalization are effectively case-insensitive (C:\\source == c:\\source) but the comparison treats them as different, failing the containment test.",
    "Windows can rarely have case-sensitive paths, which complicates a fully correct fix."
  ],
  "fix": [
    {
      "step": "Make the configured allowed-directory drive-letter case match what the client sends; try both C:\\... and c:\\... forms."
    },
    {
      "step": "Track the upstream normalization fix (PR #2111 at time of writing) and upgrade once it ships in a release."
    },
    {
      "step": "As an interim measure, patch index.ts path normalization, rebuild, and replace the installed dist/index.js."
    }
  ],
  "verification": [
    {
      "method": "Call read_file on a path under the allowed directory after aligning case or applying the patched build.",
      "expected": "The read succeeds instead of returning 'Access denied - path outside allowed directories'."
    }
  ],
  "workarounds": [
    "Temporarily configure the allowed root in the exact case the client emits."
  ],
  "anti_patterns": [
    "Widening allowed directories to the drive root to dodge the case mismatch.",
    "Assuming the allow-list config is wrong when the validator's normalization is the bug."
  ],
  "source_links": [
    {
      "title": "modelcontextprotocol/servers issue 470: Filesystem server access denied for allowed paths on Windows",
      "type": "issue",
      "url": "https://github.com/modelcontextprotocol/servers/issues/470",
      "accessed_at": "2026-06-21"
    },
    {
      "title": "modelcontextprotocol/servers PR 2111: step toward fixing Windows path validation",
      "type": "pr",
      "url": "https://github.com/modelcontextprotocol/servers/pull/2111",
      "accessed_at": "2026-06-21"
    }
  ],
  "related": [],
  "safety": {
    "external_text_trusted": false,
    "requires_confirmation": true,
    "notes": ["Status is candidate: no clean released fix at time of writing; the upstream PR was still in progress."]
  }
}
-->
