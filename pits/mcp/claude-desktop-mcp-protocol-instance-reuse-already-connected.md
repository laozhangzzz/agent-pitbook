---
id: claude-desktop-mcp-protocol-instance-reuse-already-connected
title: "Claude Desktop MCP error: Already connected to a transport (Protocol instance reuse)"
status: verified
confidence: high
created_at: 2026-06-21
updated_at: 2026-06-21
last_verified: 2026-06-21
tags: [mcp, claude-desktop, transport, protocol, already-connected, client-bug, versioning]
affected_tools: [claude-desktop]
---

# Claude Desktop MCP error: Already connected to a transport (Protocol instance reuse)

## Summary

Some Claude Desktop builds showed "Could not connect to MCP server" toasts on every launch, with the underlying error `Already connected to a transport. Call close() before connecting to a new transport, or use a separate Protocol instance per connection.` This was a client-side bug from reusing one MCP `Protocol`/transport instance across multiple server connections, fixed by upgrading Claude Desktop.

## Symptoms

- Startup toasts: `Could not connect to MCP server <name>`.
- Log (`claude.ai-web.log`) shows `Error: Already connected to a transport. Call close() before connecting to a new transport, or use a separate Protocol instance per connection.`
- The same error appears for multiple servers connected at startup.
- Affected servers may still actually work despite the toast.

## Root Cause

The MCP SDK connection model is one transport per `Protocol`/server instance. The Claude Desktop build reused a single instance while connecting several MCP servers at startup, so the second and later connections hit `Already connected to a transport`. It is a bug in the client, not in your server config.

## Fix

1. Upgrade Claude Desktop to a build where this is fixed (the reported regression was resolved in a later release after 1.1.3918).
2. If you cannot upgrade immediately, note the error can be benign for internal servers that still function; verify whether your server actually failed before changing its config.
3. Avoid editing per-server config in response to this error, since the cause is client-side instance reuse.

## Verification

After upgrading Claude Desktop, the startup toasts stop and the log shows no `Already connected to a transport` for the MCP servers.

## Anti-Patterns

- Rewriting MCP server configs to chase a client-side `Already connected to a transport` bug.
- Assuming the toast means your server is broken when it may still be functional.

<!-- pit-record
{
  "id": "claude-desktop-mcp-protocol-instance-reuse-already-connected",
  "title": "Claude Desktop MCP error: Already connected to a transport (Protocol instance reuse)",
  "summary": "Some Claude Desktop builds showed 'Could not connect to MCP server' toasts on launch with 'Already connected to a transport. Call close() ... or use a separate Protocol instance per connection.' This was a client bug from reusing one MCP Protocol/transport instance across multiple server connections; fixed by upgrading Claude Desktop.",
  "status": "verified",
  "confidence": "high",
  "created_at": "2026-06-21",
  "updated_at": "2026-06-21",
  "last_verified": "2026-06-21",
  "tags": ["mcp", "claude-desktop", "transport", "protocol", "already-connected", "client-bug", "versioning"],
  "affected_tools": ["claude-desktop"],
  "symptoms": [
    "startup toasts: Could not connect to MCP server <name>",
    "log shows Error: Already connected to a transport. Call close() before connecting to a new transport, or use a separate Protocol instance per connection.",
    "the same error appears for multiple servers connected at startup",
    "affected servers may still actually work despite the toast"
  ],
  "environment": {
    "os": "macOS / Windows",
    "agent": "claude-desktop",
    "versions": {"claude-desktop": "1.1.3918"},
    "constraints": ["one transport per Protocol/server instance", "client connects several MCP servers at startup"]
  },
  "root_cause": [
    "The MCP SDK connection model is one transport per Protocol/server instance.",
    "The Claude Desktop build reused a single instance while connecting several servers at startup, so later connections hit 'Already connected to a transport'.",
    "It is a client-side bug, not a server-config problem."
  ],
  "fix": [
    {
      "step": "Upgrade Claude Desktop to a build where this is fixed (resolved in a later release after 1.1.3918)."
    },
    {
      "step": "If you cannot upgrade, note the error can be benign for internal servers that still function; verify whether your server actually failed before changing config."
    },
    {
      "step": "Avoid editing per-server config in response to this error, since the cause is client-side instance reuse."
    }
  ],
  "verification": [
    {
      "method": "Upgrade Claude Desktop and relaunch.",
      "expected": "Startup toasts stop and the log shows no 'Already connected to a transport' for MCP servers."
    }
  ],
  "workarounds": [
    "Ignore the toast for internal servers that still function, until you can upgrade."
  ],
  "anti_patterns": [
    "Rewriting MCP server configs to chase a client-side 'Already connected to a transport' bug.",
    "Assuming the toast means your server is broken when it may still be functional."
  ],
  "source_links": [
    {
      "title": "anthropics/claude-code issue 27390: Claude Desktop MCP servers fail with Protocol instance reuse error (Already connected to a transport); Anthropic confirms fix in a later Desktop release",
      "type": "issue",
      "url": "https://github.com/anthropics/claude-code/issues/27390",
      "accessed_at": "2026-06-21"
    }
  ],
  "related": ["claude-code-mcp-chrome-bridge-single-transport-deadlock"],
  "safety": {
    "external_text_trusted": false,
    "requires_confirmation": false,
    "notes": ["Version-specific; confirm against the current Claude Desktop release."]
  }
}
-->
