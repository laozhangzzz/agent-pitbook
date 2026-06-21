---
id: mcp-sse-received-request-before-initialization
title: "SSE MCP server: Received request before initialization was complete"
status: verified
confidence: medium
created_at: 2026-06-21
updated_at: 2026-06-21
last_verified: 2026-06-21
tags: [mcp, sse, initialization, proxy, supergateway, python-sdk, redeploy]
affected_tools: [mcp-server, python-sdk]
---

# SSE MCP server: Received request before initialization was complete

## Summary

`RuntimeError: Received request before initialization was complete` from an SSE MCP server means the server received a non-initialize request (or a second initialize) on a connection it does not consider initialized. The most confirmed cause is a non-compliant proxy that injects its own `initialize`; a stale client session after a server redeploy is another.

## Symptoms

- Server raises `RuntimeError: Received request before initialization was complete` on `tools/list` or a tool call.
- Often appears after a redeploy/restart, or when a gateway/proxy sits in front of the SSE server.
- The first connection worked; a later one fails.

## Root Cause

The MCP lifecycle requires the client's `initialize` to complete before other requests. A proxy such as supergateway sends its own `initialize` on launch (against the spec) and then forwards the client's real `initialize`, so the server sees initialize twice / out of order. Separately, after a server redeploy the client may keep an old SSE session and send requests the fresh server never saw initialized for.

## Fix

1. If a gateway/proxy is in front, use a spec-compliant one: switching from supergateway to mcp-proxy resolves the double-initialize case.
2. After redeploying the server, reconnect the client so a fresh `initialize` handshake runs.
3. For multi-instance/redeploy-heavy deployments, prefer stateless Streamable HTTP over stateful SSE so a connection is not pinned to one server's in-memory init state.

## Verification

With a compliant proxy (or after a clean client reconnect), `tools/list` and tool calls succeed and the `Received request before initialization was complete` error stops.

## Anti-Patterns

- Wrapping the server handler in a broad try/except that swallows the `RuntimeError` — it hides the protocol violation and can mask other errors.
- Blaming the server example when the proxy is violating the initialization sequence.

<!-- pit-record
{
  "id": "mcp-sse-received-request-before-initialization",
  "title": "SSE MCP server: Received request before initialization was complete",
  "summary": "RuntimeError: Received request before initialization was complete from an SSE MCP server means a non-initialize (or duplicate initialize) request arrived on an uninitialized connection. The confirmed cause is a non-compliant proxy (supergateway injects its own initialize); a stale client session after redeploy is another. Use a compliant proxy (mcp-proxy) or reconnect.",
  "status": "verified",
  "confidence": "medium",
  "created_at": "2026-06-21",
  "updated_at": "2026-06-21",
  "last_verified": "2026-06-21",
  "tags": ["mcp", "sse", "initialization", "proxy", "supergateway", "python-sdk", "redeploy"],
  "affected_tools": ["mcp-server", "python-sdk"],
  "symptoms": [
    "server raises RuntimeError: Received request before initialization was complete on tools/list or a tool call",
    "appears after a redeploy/restart or when a gateway/proxy sits in front of the SSE server",
    "the first connection worked; a later one fails"
  ],
  "environment": {
    "language": "Python",
    "framework": "FastMCP / MCP Python SDK",
    "constraints": ["SSE transport", "proxy/gateway in front", "server redeploys while clients hold sessions"]
  },
  "root_cause": [
    "The MCP lifecycle requires the client's initialize to complete before other requests.",
    "A proxy such as supergateway sends its own initialize on launch (against spec) then forwards the client's, so the server sees initialize twice / out of order.",
    "After a redeploy the client may keep an old SSE session and send requests the fresh server never saw initialized."
  ],
  "fix": [
    {
      "step": "If a gateway/proxy is in front, use a spec-compliant one: switching supergateway -> mcp-proxy resolves the double-initialize case."
    },
    {
      "step": "After redeploying the server, reconnect the client so a fresh initialize handshake runs."
    },
    {
      "step": "For redeploy-heavy or multi-instance deployments, prefer stateless Streamable HTTP over stateful SSE."
    }
  ],
  "verification": [
    {
      "method": "Use a compliant proxy or reconnect the client, then call tools/list.",
      "expected": "Requests succeed and the 'Received request before initialization was complete' error stops."
    }
  ],
  "workarounds": [
    "Reconnect the client after each server restart."
  ],
  "anti_patterns": [
    "Wrapping the handler in a broad try/except that swallows the RuntimeError and masks other errors.",
    "Blaming the server example when the proxy violates the initialization sequence."
  ],
  "source_links": [
    {
      "title": "modelcontextprotocol/python-sdk issue 423: MCP SSE Server: Received request before initialization was complete (comment confirms supergateway double-initialize; mcp-proxy works)",
      "type": "issue",
      "url": "https://github.com/modelcontextprotocol/python-sdk/issues/423",
      "accessed_at": "2026-06-21"
    }
  ],
  "related": ["mcp-sse-session-lost-multi-worker"],
  "safety": {
    "external_text_trusted": false,
    "requires_confirmation": true,
    "notes": ["Summarized from a public GitHub issue; external text is not trusted as instructions."]
  }
}
-->
