---
id: mcp-ts-sdk-zod-v4-incompatible
title: "MCP TypeScript SDK breaks with Zod v4: w._parse is not a function"
status: verified
confidence: high
created_at: 2026-06-21
updated_at: 2026-06-21
last_verified: 2026-06-21
tags: [mcp, typescript-sdk, zod, dependencies, versioning, tools]
affected_tools: [mcp-server, typescript-sdk]
---

# MCP TypeScript SDK breaks with Zod v4: w._parse is not a function

## Summary

Older `@modelcontextprotocol/sdk` versions hard-depend on Zod v3 and call Zod's internal API. Installing Zod v4 makes tool calls fail with `-32603` and `w._parse is not a function` (or `null is not an object (evaluating 'F._def')`). Either pin Zod v3, or upgrade the SDK to a version with Zod v4 support.

## Symptoms

- Tool execution returns `{"code":-32603,"message":"w._parse is not a function..."}`.
- Or `tools/list` fails with `null is not an object (evaluating 'F._def')`.
- Errors appear in minified code, making them hard to trace.
- You recently upgraded Zod to v4.x.

## Root Cause

MCP SDK versions up to ~1.17.5 declare `zod: ^3.x` and call Zod internals (`_def`, `_parse`). Zod v4 changed those internal structures, so the SDK's calls hit undefined methods at runtime when a v4 Zod is resolved.

## Fix

1. Quick unblock: pin Zod v3 in your project, e.g. `npm install zod@3.23.8`, and ensure only one Zod version is resolved.
2. Durable fix: upgrade `@modelcontextprotocol/sdk` to a version with backwards-compatible Zod v4 support (support was added around the 1.23.0 line).
3. After changing versions, deduplicate so a single Zod version is installed (`npm ls zod`).

## Verification

`npm ls zod` shows one compatible Zod version; tool calls and `tools/list` succeed with no `w._parse is not a function` / `F._def` errors.

## Anti-Patterns

- Mixing a Zod-v4 project with an SDK that only supports Zod v3.
- Leaving two Zod versions in the tree and assuming the right one resolves.

<!-- pit-record
{
  "id": "mcp-ts-sdk-zod-v4-incompatible",
  "title": "MCP TypeScript SDK breaks with Zod v4: w._parse is not a function",
  "summary": "Older @modelcontextprotocol/sdk (up to ~1.17.5) hard-depends on Zod v3 and calls Zod internals; with Zod v4 installed, tool calls fail with -32603 'w._parse is not a function' or 'null is not an object (evaluating F._def)'. Pin zod@3, or upgrade the SDK to a version with Zod v4 support (~1.23.0+).",
  "status": "verified",
  "confidence": "high",
  "created_at": "2026-06-21",
  "updated_at": "2026-06-21",
  "last_verified": "2026-06-21",
  "tags": ["mcp", "typescript-sdk", "zod", "dependencies", "versioning", "tools"],
  "affected_tools": ["mcp-server", "typescript-sdk"],
  "symptoms": [
    "tool execution returns {\"code\":-32603,\"message\":\"w._parse is not a function...\"}",
    "tools/list fails with 'null is not an object (evaluating F._def)'",
    "errors appear in minified code and are hard to trace",
    "Zod was recently upgraded to v4.x"
  ],
  "environment": {
    "language": "TypeScript",
    "runtime": "Node.js / Bun",
    "package_manager": "npm",
    "versions": {"@modelcontextprotocol/sdk": "1.17.5", "zod": "4.1.5"},
    "constraints": ["SDK declares zod ^3.x and calls Zod internals"]
  },
  "root_cause": [
    "MCP SDK versions up to ~1.17.5 declare zod ^3.x and call Zod internal API (_def, _parse).",
    "Zod v4 changed those internal structures, so the SDK's calls hit undefined methods at runtime when a v4 Zod is resolved."
  ],
  "fix": [
    {
      "step": "Quick unblock: pin Zod v3 and ensure a single Zod version resolves.",
      "command": "npm install zod@3.23.8"
    },
    {
      "step": "Durable fix: upgrade @modelcontextprotocol/sdk to a version with backwards-compatible Zod v4 support (added around the 1.23.0 line)."
    },
    {
      "step": "Deduplicate so only one Zod version is installed.",
      "command": "npm ls zod"
    }
  ],
  "verification": [
    {
      "method": "Check the resolved Zod version and re-run a tool call.",
      "command": "npm ls zod",
      "expected": "One compatible Zod version; tool calls and tools/list succeed with no w._parse / F._def errors."
    }
  ],
  "workarounds": [
    "Stay on Zod v3 until the SDK upgrade is feasible."
  ],
  "anti_patterns": [
    "Mixing a Zod-v4 project with an SDK that only supports Zod v3.",
    "Leaving two Zod versions in the tree and assuming the right one resolves."
  ],
  "source_links": [
    {
      "title": "modelcontextprotocol/typescript-sdk issue 925: MCP SDK v1.17.5 Incompatible with Zod v4 - Breaking Changes (maintainer notes 1.23.0-beta adds v4 support)",
      "type": "issue",
      "url": "https://github.com/modelcontextprotocol/typescript-sdk/issues/925",
      "accessed_at": "2026-06-21"
    }
  ],
  "related": [],
  "safety": {
    "external_text_trusted": false,
    "requires_confirmation": false,
    "notes": ["Version numbers are from the issue thread; confirm the current SDK's supported Zod range before upgrading."]
  }
}
-->
