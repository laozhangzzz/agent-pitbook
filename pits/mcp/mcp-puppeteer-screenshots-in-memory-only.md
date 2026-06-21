---
id: mcp-puppeteer-screenshots-in-memory-only
title: Puppeteer MCP screenshots live in memory only; there is no file on disk to find
status: verified
confidence: medium
created_at: 2026-06-21
updated_at: 2026-06-21
last_verified: 2026-06-21
tags: [mcp, server-puppeteer, screenshots, resources, in-memory, misconception]
affected_tools: [mcp-server, claude-desktop]
---

# Puppeteer MCP screenshots live in memory only; there is no file on disk to find

## Summary

After `puppeteer_screenshot`, the screenshot is confirmed taken but cannot be found on the filesystem. By design the Puppeteer MCP server keeps screenshots in memory (exposed as an MCP resource), not as files. Agents that go looking for a saved file — sometimes even searching outside the project — are chasing a file that does not exist.

## Symptoms

- `puppeteer_screenshot` reports success but no image file appears anywhere on disk.
- The model tries to open/read a screenshot path and finds nothing.
- The agent searches the filesystem (occasionally outside the project) for the missing file.

## Root Cause

The server stores screenshots in memory and exposes them as MCP resources, with no documented filesystem path. Models often assume a screenshot was written to disk (and may even claim they saved it), reinforcing the misconception.

## Fix

1. Retrieve the screenshot via the MCP resource the server exposes, not from a file path.
2. Do not instruct the agent to read the screenshot from disk; there is no file unless you add persistence.
3. If you need a file, add a step that writes the in-memory image out yourself (or use a server/tool that persists screenshots).

## Verification

The screenshot is accessible as an MCP resource in the client/Inspector, while no corresponding file exists on disk — confirming the in-memory design.

## Anti-Patterns

- Searching the filesystem for a Puppeteer MCP screenshot.
- Trusting a model's claim that it "saved the screenshot" to a path.

<!-- pit-record
{
  "id": "mcp-puppeteer-screenshots-in-memory-only",
  "title": "Puppeteer MCP screenshots live in memory only; there is no file on disk to find",
  "summary": "The Puppeteer MCP server keeps screenshots in memory and exposes them as MCP resources, not as files. After puppeteer_screenshot there is no image on disk, so agents that search the filesystem for a saved file are chasing something that does not exist. Retrieve via the resource, or add your own persistence step.",
  "status": "verified",
  "confidence": "medium",
  "created_at": "2026-06-21",
  "updated_at": "2026-06-21",
  "last_verified": "2026-06-21",
  "tags": ["mcp", "server-puppeteer", "screenshots", "resources", "in-memory", "misconception"],
  "affected_tools": ["mcp-server", "claude-desktop"],
  "symptoms": [
    "puppeteer_screenshot reports success but no image file appears on disk",
    "the model tries to open a screenshot path and finds nothing",
    "the agent searches the filesystem (sometimes outside the project) for the missing file"
  ],
  "environment": {
    "constraints": ["Puppeteer MCP server stores screenshots in memory and exposes them as resources"]
  },
  "root_cause": [
    "The server stores screenshots in memory and exposes them as MCP resources, with no documented filesystem path.",
    "Models often assume the screenshot was written to disk (and may claim they saved it), reinforcing the misconception."
  ],
  "fix": [
    {
      "step": "Retrieve the screenshot via the MCP resource the server exposes, not from a file path."
    },
    {
      "step": "Do not instruct the agent to read the screenshot from disk; there is no file unless you add persistence."
    },
    {
      "step": "If you need a file, add a step that writes the in-memory image out, or use a server/tool that persists screenshots."
    }
  ],
  "verification": [
    {
      "method": "Inspect the resource list in the client/Inspector and the filesystem.",
      "expected": "The screenshot is available as a resource while no corresponding file exists on disk."
    }
  ],
  "workarounds": [
    "Persist the in-memory image yourself if a file is required downstream."
  ],
  "anti_patterns": [
    "Searching the filesystem for a Puppeteer MCP screenshot.",
    "Trusting a model's claim that it saved the screenshot to a path."
  ],
  "source_links": [
    {
      "title": "modelcontextprotocol/servers issue 865: Puppeteer MCP Server Missing Screenshots (maintainer: screenshots are stored in memory only)",
      "type": "issue",
      "url": "https://github.com/modelcontextprotocol/servers/issues/865",
      "accessed_at": "2026-06-21"
    }
  ],
  "related": ["mcp-reference-server-archived-unmaintained"],
  "safety": {
    "external_text_trusted": false,
    "requires_confirmation": false,
    "notes": ["server-puppeteer is among the archived reference servers; behavior may differ in maintained alternatives."]
  }
}
-->
