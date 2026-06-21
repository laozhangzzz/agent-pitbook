---
id: claude-agent-sdk-mcp-json-requires-project-settingsource
title: Claude Agent SDK does not load .mcp.json unless settingSources includes "project"
status: verified
confidence: high
created_at: 2026-06-21
updated_at: 2026-06-21
last_verified: 2026-06-21
tags: [mcp, claude-agent-sdk, claude-code, mcp-json, settings, configuration]
affected_tools: [claude-code, claude-agent-sdk]
---

# Claude Agent SDK does not load .mcp.json unless settingSources includes "project"

## Summary

When you launch the Claude Agent SDK from a directory containing `.mcp.json`, the project's MCP servers may not be available: `mcpServerStatus()` and the `mcp_servers` field are empty. The SDK does not read filesystem settings by default — you must pass `settingSources` including `"project"`. An older bug also made `.mcp.json` load only after running the `claude` CLI once in that directory; that part was fixed in a later release.

## Symptoms

- The SDK reports no MCP servers even though `.mcp.json` is in the working directory.
- Servers appear only after launching the `claude` CLI in the same directory and running `/mcp`, then restarting the SDK process.
- Tools that wrap Claude (e.g. Conductor) cannot see your project MCP servers.

## Root Cause

The Agent SDK does not automatically load project/user/local settings from disk; it loads them only when `settingSources` is configured. Without `"project"` in `settingSources`, `.mcp.json` is ignored. Separately, an SDK bug caused project MCP discovery to require a prior CLI run in the cwd; that was fixed in a release.

## Fix

1. Pass `settingSources` including `"project"` (and `"user"`/`"local"` as needed) when constructing the SDK query, so `.mcp.json` is read.
2. Upgrade to a Claude Code / Agent SDK release that fixed the cwd-only discovery bug.
3. Confirm the working directory actually contains the intended `.mcp.json`.

## Verification

`mcpServerStatus()` and the `mcp_servers` field list your `.mcp.json` servers on first SDK launch, without first running the CLI in that directory.

## Anti-Patterns

- Expecting the Agent SDK to auto-load `.mcp.json` like the interactive CLI does, without setting `settingSources`.
- Working around it by launching the CLI once per directory instead of configuring `settingSources`.

<!-- pit-record
{
  "id": "claude-agent-sdk-mcp-json-requires-project-settingsource",
  "title": "Claude Agent SDK does not load .mcp.json unless settingSources includes \"project\"",
  "summary": "Launching the Claude Agent SDK from a directory with .mcp.json may show no MCP servers (mcpServerStatus()/mcp_servers empty) because the SDK does not read filesystem settings by default. Pass settingSources including 'project'. An older bug also required a prior CLI run in the cwd; that was fixed in a later release.",
  "status": "verified",
  "confidence": "high",
  "created_at": "2026-06-21",
  "updated_at": "2026-06-21",
  "last_verified": "2026-06-21",
  "tags": ["mcp", "claude-agent-sdk", "claude-code", "mcp-json", "settings", "configuration"],
  "affected_tools": ["claude-code", "claude-agent-sdk"],
  "symptoms": [
    "the SDK reports no MCP servers even though .mcp.json is in the working directory",
    "servers appear only after launching the claude CLI in the same directory and running /mcp, then restarting the SDK process",
    "tools wrapping Claude (e.g. Conductor) cannot see project MCP servers"
  ],
  "environment": {
    "runtime": "Node.js / Claude Agent SDK",
    "agent": "claude-agent-sdk",
    "constraints": ["SDK loads settings only when settingSources is configured"]
  },
  "root_cause": [
    "The Agent SDK does not auto-load project/user/local settings from disk; it loads them only when settingSources is set.",
    "Without 'project' in settingSources, .mcp.json is ignored.",
    "A separate SDK bug required a prior CLI run in the cwd before project MCP servers were discovered; this was fixed in a release."
  ],
  "fix": [
    {
      "step": "Pass settingSources including 'project' (and 'user'/'local' as needed) when constructing the SDK query so .mcp.json is read."
    },
    {
      "step": "Upgrade to a Claude Code / Agent SDK release that fixed the cwd-only discovery bug."
    },
    {
      "step": "Confirm the working directory actually contains the intended .mcp.json."
    }
  ],
  "verification": [
    {
      "method": "Inspect mcpServerStatus() / the mcp_servers field on first SDK launch.",
      "expected": "Lists the .mcp.json servers without first running the CLI in that directory."
    }
  ],
  "workarounds": [
    "Define MCP servers programmatically via the SDK options if you cannot rely on filesystem settings."
  ],
  "anti_patterns": [
    "Expecting the Agent SDK to auto-load .mcp.json like the interactive CLI, without setting settingSources.",
    "Launching the CLI once per directory as a workaround instead of configuring settingSources."
  ],
  "source_links": [
    {
      "title": "anthropics/claude-code issue 13107: SDK doesn't read from .mcp.json until the CLI is run in the cwd (maintainer notes settingSources 'project' requirement; fix shipped in a later release)",
      "type": "issue",
      "url": "https://github.com/anthropics/claude-code/issues/13107",
      "accessed_at": "2026-06-21"
    },
    {
      "title": "Claude Agent SDK settingSources documentation",
      "type": "docs",
      "url": "https://platform.claude.com/docs/en/agent-sdk/typescript",
      "accessed_at": "2026-06-21"
    }
  ],
  "related": [],
  "safety": {
    "external_text_trusted": false,
    "requires_confirmation": false,
    "notes": ["Agent SDK option names and defaults change; verify settingSources behavior against your SDK version."]
  }
}
-->
