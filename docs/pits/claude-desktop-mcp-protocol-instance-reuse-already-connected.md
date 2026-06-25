# Claude Desktop MCP error: Already connected to a transport (Protocol instance reuse)

Pit ID: claude-desktop-mcp-protocol-instance-reuse-already-connected
Status: verified
Confidence: high
Updated: 2026-06-21
Canonical source: https://github.com/laozhangzzz/agent-pitbook/blob/main/pits/mcp/claude-desktop-mcp-protocol-instance-reuse-already-connected.md

## Summary

Some Claude Desktop builds showed 'Could not connect to MCP server' toasts on launch with 'Already connected to a transport. Call close() ... or use a separate Protocol instance per connection.' This was a client bug from reusing one MCP Protocol/transport instance across multiple server connections; fixed by upgrading Claude Desktop.

## Fast Answer

- Problem: startup toasts: Could not connect to MCP server <name>
- Root cause: The MCP SDK connection model is one transport per Protocol/server instance.
- Fix first: Upgrade Claude Desktop to a build where this is fixed (resolved in a later release after 1.1.3918).
- Verify: Upgrade Claude Desktop and relaunch.

## Queries This Answers

- Claude Desktop MCP servers fail with Protocol instance reuse error (Already connected to a transport); Anthropic confirms fix in a later Desktop release
- Claude Desktop MCP servers fail with Protocol instance reuse error (Already connected to a transport); Anthropic confirms fix in a later Desktop release fix
- Claude Desktop MCP servers fail with Protocol instance reuse error (Already connected to a transport); Anthropic confirms fix in a later Desktop release root cause
- Claude Desktop MCP error: Already connected to a transport Protocol instance reuse
- Claude Desktop MCP error: Already connected to a transport (Protocol instance reuse) fix
- Claude Desktop MCP error: Already connected to a transport (Protocol instance reuse) root cause
- how to fix Claude Desktop MCP error: Already connected to a transport Protocol instance reuse
- claude-desktop error already connected transport protocol instance reuse

## Common Search Queries

- claude-desktop-mcp-protocol-instance-reuse-already-connected
- claude desktop mcp protocol instance reuse already connected
- Claude Desktop MCP error: Already connected to a transport Protocol instance reuse
- Claude Desktop MCP error: Already connected to a transport (Protocol instance reuse) fix
- Claude Desktop MCP error: Already connected to a transport (Protocol instance reuse) root cause
- claude-desktop
- transport
- protocol
- already-connected
- client-bug
- versioning
- startup toasts: Could not connect to MCP server <name>

## Affected Tools

- claude-desktop

## Tags

- mcp
- claude-desktop
- transport
- protocol
- already-connected
- client-bug
- versioning

## Symptoms

- startup toasts: Could not connect to MCP server <name>
- log shows Error: Already connected to a transport. Call close() before connecting to a new transport, or use a separate Protocol instance per connection.
- the same error appears for multiple servers connected at startup
- affected servers may still actually work despite the toast

## Environment

- os: macOS / Windows
- agent: claude-desktop
- versions: {"claude-desktop":"1.1.3918"}
- constraints: one transport per Protocol/server instance, client connects several MCP servers at startup

## Root Cause

- The MCP SDK connection model is one transport per Protocol/server instance.
- The Claude Desktop build reused a single instance while connecting several servers at startup, so later connections hit 'Already connected to a transport'.
- It is a client-side bug, not a server-config problem.

## Fix

1. Upgrade Claude Desktop to a build where this is fixed (resolved in a later release after 1.1.3918).
2. If you cannot upgrade, note the error can be benign for internal servers that still function; verify whether your server actually failed before changing config.
3. Avoid editing per-server config in response to this error, since the cause is client-side instance reuse.

## Verification

- Upgrade Claude Desktop and relaunch. Expected: Startup toasts stop and the log shows no 'Already connected to a transport' for MCP servers.

## Sources

- anthropics/claude-code issue 27390: Claude Desktop MCP servers fail with Protocol instance reuse error (Already connected to a transport); Anthropic confirms fix in a later Desktop release (issue): https://github.com/anthropics/claude-code/issues/27390

## Workarounds

- Ignore the toast for internal servers that still function, until you can upgrade.

## Anti-patterns

- Rewriting MCP server configs to chase a client-side 'Already connected to a transport' bug.
- Assuming the toast means your server is broken when it may still be functional.

