---
id: github-mcp-vscode-toolset-name-mismatch
title: "VS Code agent config: github/* MCP toolset is Unknown tool while github warns it's renamed"
status: candidate
confidence: medium
created_at: 2026-06-21
updated_at: 2026-06-21
last_verified: 2026-06-21
tags: [mcp, github-mcp-server, vscode, toolsets, configuration, naming]
affected_tools: [github-mcp-server, vscode]
---

# VS Code agent config: github/* MCP toolset is Unknown tool while github warns it's renamed

## Summary

In a VS Code agent configuration, referencing the GitHub MCP toolset with the recommended `github/*` pattern fails with `Unknown tool`, while the plain `github` name works but warns it has been renamed to `github/*`. The two messages contradict each other. It stems from how the MCP server was named/installed and which agent-config location is used.

## Symptoms

- `"tools": ["github/*"]` produces `Unknown tool`.
- `"tools": ["github"]` works but warns it should be `github/*`.
- Reported for other MCP servers too, not just GitHub.

## Root Cause

The `server/*` toolset alias resolves only when the MCP server is registered under the matching name (e.g. installed via the official button/`@mcp` so it is named `github`). A manually named server, or an older agent-config location (`.github/chatmodes` vs `.github/agents`), does not resolve the `*` alias, so `github/*` is unknown while the bare name still matches.

## Fix

1. Use the name that actually resolves for your setup: if `github/*` is unknown, use `"github"` and ignore the rename warning for now.
2. Ensure the server is registered under the expected name (install via the official flow rather than a custom name) so the `github/*` alias resolves.
3. List both forms (`"github"` and `"github/*"`) — products ignore names they do not support — and use the newer `.github/agents` location, where the aliases apply.

## Verification

The agent can call GitHub MCP tools with the chosen `tools` entry, with no `Unknown tool` error.

## Anti-Patterns

- Blindly following the `github/*` rename warning when that form is `Unknown tool` in your config.
- Manually renaming the MCP server, which can break the `server/*` alias resolution.

<!-- pit-record
{
  "id": "github-mcp-vscode-toolset-name-mismatch",
  "title": "VS Code agent config: github/* MCP toolset is Unknown tool while github warns it's renamed",
  "summary": "In VS Code agent config, 'tools': ['github/*'] fails with Unknown tool while 'tools': ['github'] works but warns it's renamed to github/*. The */alias resolves only when the server is registered under the matching name and the newer .github/agents location is used. Use the name that resolves, or list both.",
  "status": "candidate",
  "confidence": "medium",
  "created_at": "2026-06-21",
  "updated_at": "2026-06-21",
  "last_verified": "2026-06-21",
  "tags": ["mcp", "github-mcp-server", "vscode", "toolsets", "configuration", "naming"],
  "affected_tools": ["github-mcp-server", "vscode"],
  "symptoms": [
    "'tools': ['github/*'] produces Unknown tool",
    "'tools': ['github'] works but warns it should be github/*",
    "reported for other MCP servers too, not just GitHub"
  ],
  "environment": {
    "constraints": ["VS Code agent configuration", "MCP server name must match the */ alias", ".github/agents vs .github/chatmodes location"]
  },
  "root_cause": [
    "The server/* toolset alias resolves only when the MCP server is registered under the matching name (e.g. installed via the official flow so it is named github).",
    "A manually named server, or an older agent-config location (.github/chatmodes vs .github/agents), does not resolve the * alias, so github/* is unknown while the bare name still matches."
  ],
  "fix": [
    {
      "step": "Use the name that resolves for your setup: if github/* is Unknown tool, use 'github' and ignore the rename warning for now."
    },
    {
      "step": "Register the server under the expected name (install via the official flow rather than a custom name) so github/* resolves."
    },
    {
      "step": "List both 'github' and 'github/*' (unsupported names are ignored) and use the newer .github/agents location where aliases apply."
    }
  ],
  "verification": [
    {
      "method": "Run the agent with the chosen tools entry.",
      "expected": "GitHub MCP tools are callable with no Unknown tool error."
    }
  ],
  "workarounds": [
    "Keep using the bare 'github' name until the aliasing is consistent."
  ],
  "anti_patterns": [
    "Blindly following the github/* rename warning when that form is Unknown tool.",
    "Manually renaming the MCP server, which can break server/* alias resolution."
  ],
  "source_links": [
    {
      "title": "github/github-mcp-server issue 1402: VSCode Toolset name mismatch: 'github/*' fails with Unknown tool, but 'github' warns it's deprecated",
      "type": "issue",
      "url": "https://github.com/github/github-mcp-server/issues/1402",
      "accessed_at": "2026-06-21"
    }
  ],
  "related": [],
  "safety": {
    "external_text_trusted": false,
    "requires_confirmation": false,
    "notes": ["Status candidate: an open issue at time of writing across VS Code/MCP toolset naming; verify current behavior."]
  }
}
-->
