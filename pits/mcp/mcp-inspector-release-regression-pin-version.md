---
id: mcp-inspector-release-regression-pin-version
title: MCP Inspector breaks after an upgrade; pin a known-good version
status: verified
confidence: high
created_at: 2026-06-21
updated_at: 2026-06-21
last_verified: 2026-06-21
tags: [mcp, inspector, npx, regression, versioning, streamable-http]
affected_tools: [mcp-inspector]
---

# MCP Inspector breaks after an upgrade; pin a known-good version

## Summary

`@modelcontextprotocol/inspector` ships frequently and individual releases have shipped regressions that break startup or connections. When Inspector suddenly fails after picking up a new version via `npx ...@latest`, pin a known-good version or upgrade past the release that fixed it, rather than assuming your setup broke.

## Symptoms

- `npx @modelcontextprotocol/inspector` fails with `sh: mcp-inspector: command not found` or `'mcp-inspector' is not recognized` (seen in 0.10.0).
- Connecting to a Streamable HTTP server crashes the proxy with `TypeError [ERR_INVALID_STATE]: Invalid state: Controller is already closed` (seen in 0.17.2, fixed in 0.17.5).
- It worked yesterday and broke today with no config change, because `@latest` moved.

## Root Cause

Inspector is released often and some releases regress. Because the usual launch is `npx @modelcontextprotocol/inspector` (implicitly `@latest`), a bad release is picked up automatically, so the breakage looks like a local problem when it is a version regression.

## Fix

1. Pin a known-good version to unblock immediately, for example `npx @modelcontextprotocol/inspector@0.9.0` (for the 0.10.0 command-not-found regression) or `@0.16.7` (for the 0.17.2 Controller-already-closed regression).
2. Check the issue tracker for the release that fixed your symptom and upgrade to it (e.g. 0.17.5 fixed the Streamable HTTP `Controller is already closed` crash).
3. Once stable, pin an explicit version in scripts instead of relying on `@latest`.

## Verification

The pinned (or fixed) version starts and connects without `command not found` or `Controller is already closed`.

## Anti-Patterns

- Debugging your MCP server when the Inspector release itself regressed.
- Always launching `@latest` in CI or shared scripts, so a bad release breaks everyone at once.

<!-- pit-record
{
  "id": "mcp-inspector-release-regression-pin-version",
  "title": "MCP Inspector breaks after an upgrade; pin a known-good version",
  "summary": "@modelcontextprotocol/inspector ships often and some releases regress: 0.10.0 broke startup with 'mcp-inspector: command not found', 0.17.2 crashed Streamable HTTP connections with 'Controller is already closed' (fixed in 0.17.5). When Inspector breaks after npx @latest moved, pin a known-good version or upgrade to the fixed release.",
  "status": "verified",
  "confidence": "high",
  "created_at": "2026-06-21",
  "updated_at": "2026-06-21",
  "last_verified": "2026-06-21",
  "tags": ["mcp", "inspector", "npx", "regression", "versioning", "streamable-http"],
  "affected_tools": ["mcp-inspector"],
  "symptoms": [
    "npx @modelcontextprotocol/inspector fails with 'sh: mcp-inspector: command not found' or ''mcp-inspector' is not recognized' (0.10.0)",
    "connecting to a Streamable HTTP server crashes with TypeError [ERR_INVALID_STATE]: Invalid state: Controller is already closed (0.17.2, fixed 0.17.5)",
    "it worked yesterday and broke today with no config change because @latest moved"
  ],
  "environment": {
    "runtime": "Node.js",
    "package_manager": "npm",
    "constraints": ["Inspector launched via npx @latest", "frequent releases with occasional regressions"]
  },
  "root_cause": [
    "Inspector is released often and some releases regress.",
    "The usual launch npx @modelcontextprotocol/inspector resolves @latest, so a bad release is picked up automatically and the breakage looks local."
  ],
  "fix": [
    {
      "step": "Pin a known-good version to unblock, e.g. @0.9.0 for the 0.10.0 command-not-found regression or @0.16.7 for the 0.17.2 Controller-already-closed regression.",
      "command": "npx @modelcontextprotocol/inspector@0.9.0"
    },
    {
      "step": "Find the release that fixed your symptom and upgrade to it (0.17.5 fixed the Streamable HTTP 'Controller is already closed' crash)."
    },
    {
      "step": "Pin an explicit version in scripts instead of relying on @latest."
    }
  ],
  "verification": [
    {
      "method": "Run the pinned or fixed version.",
      "expected": "Inspector starts and connects without 'command not found' or 'Controller is already closed'."
    }
  ],
  "workarounds": [
    "Downgrade to the last release that worked for your transport."
  ],
  "anti_patterns": [
    "Debugging your MCP server when the Inspector release itself regressed.",
    "Always launching @latest in CI or shared scripts."
  ],
  "source_links": [
    {
      "title": "modelcontextprotocol/inspector issue 326: 'sh: mcp-inspector: command not found' after upgrading to v0.10.0 (downgrade to 0.9.0)",
      "type": "issue",
      "url": "https://github.com/modelcontextprotocol/inspector/issues/326",
      "accessed_at": "2026-06-21"
    },
    {
      "title": "modelcontextprotocol/inspector issue 951: Controller is already closed on fastmcp Streamable HTTP (downgrade to 0.16.7; fixed in 0.17.5)",
      "type": "issue",
      "url": "https://github.com/modelcontextprotocol/inspector/issues/951",
      "accessed_at": "2026-06-21"
    }
  ],
  "related": [],
  "safety": {
    "external_text_trusted": false,
    "requires_confirmation": false,
    "notes": ["Specific version numbers are time-bound; check the current release notes before pinning."]
  }
}
-->
