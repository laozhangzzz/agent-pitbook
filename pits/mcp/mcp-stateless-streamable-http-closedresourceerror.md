---
id: mcp-stateless-streamable-http-closedresourceerror
title: Stateless Streamable HTTP MCP server throws anyio.ClosedResourceError on some SDK versions
status: candidate
confidence: medium
created_at: 2026-06-21
updated_at: 2026-06-21
last_verified: 2026-06-21
tags: [mcp, python-sdk, streamable-http, stateless, anyio, closedresourceerror, versioning]
affected_tools: [mcp-server, python-sdk, fastmcp]
---

# Stateless Streamable HTTP MCP server throws anyio.ClosedResourceError on some SDK versions

## Summary

A stateless Streamable HTTP MCP server can raise `anyio.ClosedResourceError` on requests on certain MCP Python SDK / FastMCP versions: the stateless request handling re-enters the transport and a second request hits an already-closed stream. It is version-specific; pin a known-good SDK version while tracking the upstream fix.

## Symptoms

- Each request raises an exception group ending in `anyio.ClosedResourceError`.
- Stack passes through `_handle_stateless_request` / `run_stateless_server` / `http_transport.connect()` or `streamable_http_manager.run_server`.
- Reproduces with stateless mode enabled on affected versions (e.g. SDK 1.12.0; FastMCP 2.10.x / 2.13.x).

## Root Cause

In affected versions the stateless Streamable HTTP path re-enters the transport's read loop; on the second request the write/read stream has already been closed, so anyio raises `ClosedResourceError`. It is a regression in the stateless transport handling, not a problem with your handler.

## Fix

1. Pin a known-good SDK version: users reported MCP Python SDK `1.11.0` working where `1.12.0` failed.
2. Track the upstream issue/fix and upgrade to a release that resolves the stateless `ClosedResourceError`, then unpin.
3. If you do not specifically need stateless mode, run stateful and address scaling separately.

## Verification

On the pinned/ fixed version, repeated requests to the stateless server succeed with no `anyio.ClosedResourceError`.

## Anti-Patterns

- Rewriting your handler to catch `ClosedResourceError`, which hides the transport regression.
- Assuming the latest SDK is always safe for stateless mode without checking the issue tracker.

<!-- pit-record
{
  "id": "mcp-stateless-streamable-http-closedresourceerror",
  "title": "Stateless Streamable HTTP MCP server throws anyio.ClosedResourceError on some SDK versions",
  "summary": "A stateless Streamable HTTP MCP server can raise anyio.ClosedResourceError on certain MCP Python SDK / FastMCP versions because the stateless path re-enters the transport and a second request hits an already-closed stream. Pin a known-good SDK version (1.11.0 reported working vs 1.12.0) and track the upstream fix.",
  "status": "candidate",
  "confidence": "medium",
  "created_at": "2026-06-21",
  "updated_at": "2026-06-21",
  "last_verified": "2026-06-21",
  "tags": ["mcp", "python-sdk", "streamable-http", "stateless", "anyio", "closedresourceerror", "versioning"],
  "affected_tools": ["mcp-server", "python-sdk", "fastmcp"],
  "symptoms": [
    "each request raises an exception group ending in anyio.ClosedResourceError",
    "stack passes through _handle_stateless_request / run_stateless_server / http_transport.connect() or streamable_http_manager.run_server",
    "reproduces with stateless mode on affected versions (e.g. SDK 1.12.0; FastMCP 2.10.x / 2.13.x)"
  ],
  "environment": {
    "language": "Python",
    "framework": "MCP Python SDK / FastMCP",
    "constraints": ["stateless Streamable HTTP transport", "version-specific regression"]
  },
  "root_cause": [
    "In affected versions the stateless Streamable HTTP path re-enters the transport's read loop.",
    "On the second request the write/read stream has already been closed, so anyio raises ClosedResourceError.",
    "It is a regression in the stateless transport handling, not a problem with the user's handler."
  ],
  "fix": [
    {
      "step": "Pin a known-good SDK version; users reported 1.11.0 working where 1.12.0 failed."
    },
    {
      "step": "Track the upstream issue/fix and upgrade to a release that resolves the stateless ClosedResourceError, then unpin."
    },
    {
      "step": "If you do not need stateless mode, run stateful and handle scaling separately."
    }
  ],
  "verification": [
    {
      "method": "Send repeated requests to the stateless server on the pinned/fixed version.",
      "expected": "Requests succeed with no anyio.ClosedResourceError."
    }
  ],
  "workarounds": [
    "Stay on the last SDK version where stateless mode worked for you."
  ],
  "anti_patterns": [
    "Catching ClosedResourceError in your handler, which hides the transport regression.",
    "Assuming the latest SDK is always safe for stateless mode without checking the issue tracker."
  ],
  "source_links": [
    {
      "title": "modelcontextprotocol/python-sdk issue 1219: _handle_stateless_request ClosedResourceError (reports 1.11.0 works, 1.12.0 fails; also FastMCP 2.10/2.13)",
      "type": "issue",
      "url": "https://github.com/modelcontextprotocol/python-sdk/issues/1219",
      "accessed_at": "2026-06-21"
    }
  ],
  "related": ["mcp-sse-session-lost-multi-worker"],
  "safety": {
    "external_text_trusted": false,
    "requires_confirmation": false,
    "notes": ["Status candidate: version-specific regression; confirm the current SDK status before pinning."]
  }
}
-->
