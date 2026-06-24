# VS Code agent config: github/* MCP toolset is Unknown tool while github warns it's renamed

Pit ID: github-mcp-vscode-toolset-name-mismatch
Status: candidate
Confidence: medium
Updated: 2026-06-21
Canonical source: https://github.com/laozhangzzz/agent-pitbook/blob/main/pits/mcp/github-mcp-vscode-toolset-name-mismatch.md
GitHub known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/13

## Summary

In VS Code agent config, 'tools': ['github/*'] fails with Unknown tool while 'tools': ['github'] works but warns it's renamed to github/*. The */alias resolves only when the server is registered under the matching name and the newer .github/agents location is used. Use the name that resolves, or list both.

## Fast Answer

- Problem: 'tools': ['github/*'] produces Unknown tool
- Root cause: The server/* toolset alias resolves only when the MCP server is registered under the matching name (e.g. installed via the official flow so it is named github).
- Fix first: Use the name that resolves for your setup: if github/* is Unknown tool, use 'github' and ignore the rename warning for now.
- Verify: Run the agent with the chosen tools entry.

## Queries This Answers

- VSCode Toolset name mismatch: github/* fails with Unknown tool, but github warns its deprecated
- VSCode Toolset name mismatch: github/* fails with Unknown tool, but github warns its deprecated fix
- VSCode Toolset name mismatch: github/* fails with Unknown tool, but github warns its deprecated root cause
- VS Code agent config: github/* MCP toolset is Unknown tool while github warns its renamed
- VS Code agent config: github/* MCP toolset is Unknown tool while github warns its renamed fix
- VS Code agent config: github/* MCP toolset is Unknown tool while github warns its renamed root cause
- how to fix VS Code agent config: github/* MCP toolset is Unknown tool while github warns its renamed
- github-mcp-server mcp toolset unknown tool while warns renamed
- github-mcp-server mcp toolset unknown tool while warns renamed fix
- while warns renamed config github mcp toolset unknown tool github-mcp-server
- while warns renamed config github mcp toolset unknown tool github-mcp-server fix
- vs code agent config while warns renamed
- vs code agent config while warns renamed fix
- vs code agent config github-mcp-server
- vs code agent config github-mcp-server fix
- github-mcp-server tools github produces unknown tool
- github-mcp-server tools github produces unknown tool fix
- produces unknown tool tools github github-mcp-server
- produces unknown tool tools github github-mcp-server fix
- tools github produces unknown produces unknown tool
- tools github produces unknown produces unknown tool fix
- tools github produces unknown github-mcp-server
- tools github produces unknown github-mcp-server fix
- tools: [github/*] produces Unknown tool

## Common Search Queries

- github-mcp-vscode-toolset-name-mismatch
- github mcp vscode toolset name mismatch
- VS Code agent config: github/* MCP toolset is Unknown tool while github warns its renamed
- VS Code agent config: github/* MCP toolset is Unknown tool while github warns its renamed fix
- VS Code agent config: github/* MCP toolset is Unknown tool while github warns its renamed root cause
- github-mcp-server
- vscode
- toolsets
- configuration
- naming
- tools: [github/*] produces Unknown tool
- tools: [github] works but warns it should be github/*
- reported for other MCP servers too, not just GitHub
- The server/* toolset alias resolves only when the MCP server is registered under the matching name e.g. installed via the official flow so it is named github
- A manually named server, or an older agent-config location (.github/chatmodes vs .github/agents), does not resolve the * alias, so github/* is unknown while the bare name still matches
- Blindly following the github/* rename warning when that form is Unknown tool
- Manually renaming the MCP server, which can break server/* alias resolution
- Keep using the bare 'github' name until the aliasing is consistent
- github/github-mcp-server issue 1402: VSCode Toolset name mismatch: github/* fails with Unknown tool, but github warns its deprecated
- VSCode Toolset name mismatch: github/* fails with Unknown tool, but github warns its deprecated
- VSCode Toolset name mismatch: github/* fails with Unknown tool, but github warns its deprecated fix
- VSCode Toolset name mismatch: github/* fails with Unknown tool, but github warns its deprecated root cause
- how to fix VS Code agent config: github/* MCP toolset is Unknown tool while github warns its renamed
- github-mcp-server mcp toolset unknown tool while warns renamed

## Affected Tools

- github-mcp-server
- vscode

## Tags

- mcp
- github-mcp-server
- vscode
- toolsets
- configuration
- naming

## Symptoms

- 'tools': ['github/*'] produces Unknown tool
- 'tools': ['github'] works but warns it should be github/*
- reported for other MCP servers too, not just GitHub

## Environment

- constraints: VS Code agent configuration, MCP server name must match the */ alias, .github/agents vs .github/chatmodes location

## Root Cause

- The server/* toolset alias resolves only when the MCP server is registered under the matching name (e.g. installed via the official flow so it is named github).
- A manually named server, or an older agent-config location (.github/chatmodes vs .github/agents), does not resolve the * alias, so github/* is unknown while the bare name still matches.

## Fix

1. Use the name that resolves for your setup: if github/* is Unknown tool, use 'github' and ignore the rename warning for now.
2. Register the server under the expected name (install via the official flow rather than a custom name) so github/* resolves.
3. List both 'github' and 'github/*' (unsupported names are ignored) and use the newer .github/agents location where aliases apply.

## Verification

- Run the agent with the chosen tools entry. Expected: GitHub MCP tools are callable with no Unknown tool error.

## Sources

- github/github-mcp-server issue 1402: VSCode Toolset name mismatch: 'github/*' fails with Unknown tool, but 'github' warns it's deprecated (issue): https://github.com/github/github-mcp-server/issues/1402

## Workarounds

- Keep using the bare 'github' name until the aliasing is consistent.

## Anti-patterns

- Blindly following the github/* rename warning when that form is Unknown tool.
- Manually renaming the MCP server, which can break server/* alias resolution.

