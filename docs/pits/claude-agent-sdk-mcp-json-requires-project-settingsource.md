# Claude Agent SDK does not load .mcp.json unless settingSources includes "project"

Pit ID: claude-agent-sdk-mcp-json-requires-project-settingsource
Status: verified
Confidence: high
Updated: 2026-06-21
Canonical source: https://github.com/laozhangzzz/agent-pitbook/blob/main/pits/mcp/claude-agent-sdk-mcp-json-requires-project-settingsource.md
GitHub known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/8

## Summary

Launching the Claude Agent SDK from a directory with .mcp.json may show no MCP servers (mcpServerStatus()/mcp_servers empty) because the SDK does not read filesystem settings by default. Pass settingSources including 'project'. An older bug also required a prior CLI run in the cwd; that was fixed in a later release.

## Fast Answer

- Problem: the SDK reports no MCP servers even though .mcp.json is in the working directory
- Root cause: The Agent SDK does not auto-load project/user/local settings from disk; it loads them only when settingSources is set.
- Fix first: Pass settingSources including 'project' (and 'user'/'local' as needed) when constructing the SDK query so .mcp.json is read.
- Verify: Inspect mcpServerStatus() / the mcp_servers field on first SDK launch.

## Queries This Answers

- SDK doesnt read from .mcp.json until the CLI is run in the cwd
- SDK doesnt read from .mcp.json until the CLI is run in the cwd fix
- SDK doesnt read from .mcp.json until the CLI is run in the cwd root cause
- Claude Agent SDK does not load .mcp.json unless settingSources includes project
- Claude Agent SDK does not load .mcp.json unless settingSources includes "project" fix
- Claude Agent SDK does not load .mcp.json unless settingSources includes "project" root cause
- how to fix Claude Agent SDK does not load .mcp.json unless settingSources includes project
- the SDK reports no MCP servers even though .mcp.json is in the working directory
- how to fix the SDK reports no MCP servers even though .mcp.json is in the working directory
- the SDK reports no MCP servers even though .mcp.json is in the working directory root cause
- claude-code the SDK reports no MCP servers even though .mcp.json is in the working directory
- claude-code the SDK reports no MCP servers even though .mcp.json is in the working directory fix
- claude-agent-sdk the SDK reports no MCP servers even though .mcp.json is in the working directory
- claude-agent-sdk the SDK reports no MCP servers even though .mcp.json is in the working directory fix
- servers appear only after launching the claude CLI in the same directory and running /mcp, then restarting the SDK process
- how to fix servers appear only after launching the claude CLI in the same directory and running /mcp, then restarting the SDK process
- servers appear only after launching the claude CLI in the same directory and running /mcp, then restarting the SDK process root cause
- claude-code servers appear only after launching the claude CLI in the same directory and running /mcp, then restarting the SDK process
- claude-code servers appear only after launching the claude CLI in the same directory and running /mcp, then restarting the SDK process fix
- claude-agent-sdk servers appear only after launching the claude CLI in the same directory and running /mcp, then restarting the SDK process
- claude-agent-sdk servers appear only after launching the claude CLI in the same directory and running /mcp, then restarting the SDK process fix
- tools wrapping Claude (e.g. Conductor) cannot see project MCP servers
- how to fix tools wrapping Claude (e.g. Conductor) cannot see project MCP servers
- tools wrapping Claude (e.g. Conductor) cannot see project MCP servers root cause

## Common Search Queries

- claude-agent-sdk-mcp-json-requires-project-settingsource
- claude agent sdk mcp json requires project settingsource
- Claude Agent SDK does not load .mcp.json unless settingSources includes project
- Claude Agent SDK does not load .mcp.json unless settingSources includes "project" fix
- Claude Agent SDK does not load .mcp.json unless settingSources includes "project" root cause
- claude-agent-sdk
- claude-code
- mcp-json
- settings
- configuration
- the SDK reports no MCP servers even though .mcp.json is in the working directory
- servers appear only after launching the claude CLI in the same directory and running /mcp, then restarting the SDK process
- tools wrapping Claude (e.g. Conductor) cannot see project MCP servers
- The Agent SDK does not auto-load project/user/local settings from disk; it loads them only when settingSources is set
- Without 'project' in settingSources, .mcp.json is ignored
- A separate SDK bug required a prior CLI run in the cwd before project MCP servers were discovered; this was fixed in a release
- Expecting the Agent SDK to auto-load .mcp.json like the interactive CLI, without setting settingSources
- Launching the CLI once per directory as a workaround instead of configuring settingSources
- Define MCP servers programmatically via the SDK options if you cannot rely on filesystem settings
- anthropics/claude-code issue 13107: SDK doesnt read from .mcp.json until the CLI is run in the cwd maintainer notes settingSources project requirement; fix shipped in a later release
- Claude Agent SDK settingSources documentation
- SDK doesnt read from .mcp.json until the CLI is run in the cwd
- SDK doesnt read from .mcp.json until the CLI is run in the cwd fix
- SDK doesnt read from .mcp.json until the CLI is run in the cwd root cause

## Affected Tools

- claude-code
- claude-agent-sdk

## Tags

- mcp
- claude-agent-sdk
- claude-code
- mcp-json
- settings
- configuration

## Symptoms

- the SDK reports no MCP servers even though .mcp.json is in the working directory
- servers appear only after launching the claude CLI in the same directory and running /mcp, then restarting the SDK process
- tools wrapping Claude (e.g. Conductor) cannot see project MCP servers

## Environment

- runtime: Node.js / Claude Agent SDK
- agent: claude-agent-sdk
- constraints: SDK loads settings only when settingSources is configured

## Root Cause

- The Agent SDK does not auto-load project/user/local settings from disk; it loads them only when settingSources is set.
- Without 'project' in settingSources, .mcp.json is ignored.
- A separate SDK bug required a prior CLI run in the cwd before project MCP servers were discovered; this was fixed in a release.

## Fix

1. Pass settingSources including 'project' (and 'user'/'local' as needed) when constructing the SDK query so .mcp.json is read.
2. Upgrade to a Claude Code / Agent SDK release that fixed the cwd-only discovery bug.
3. Confirm the working directory actually contains the intended .mcp.json.

## Verification

- Inspect mcpServerStatus() / the mcp_servers field on first SDK launch. Expected: Lists the .mcp.json servers without first running the CLI in that directory.

## Sources

- anthropics/claude-code issue 13107: SDK doesn't read from .mcp.json until the CLI is run in the cwd (maintainer notes settingSources 'project' requirement; fix shipped in a later release) (issue): https://github.com/anthropics/claude-code/issues/13107
- Claude Agent SDK settingSources documentation (docs): https://platform.claude.com/docs/en/agent-sdk/typescript

## Workarounds

- Define MCP servers programmatically via the SDK options if you cannot rely on filesystem settings.

## Anti-patterns

- Expecting the Agent SDK to auto-load .mcp.json like the interactive CLI, without setting settingSources.
- Launching the CLI once per directory as a workaround instead of configuring settingSources.

