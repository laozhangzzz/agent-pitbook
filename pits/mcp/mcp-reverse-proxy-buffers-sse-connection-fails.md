---
id: mcp-reverse-proxy-buffers-sse-connection-fails
title: A reverse proxy buffering SSE breaks remote MCP after OAuth and initialize succeed
status: verified
confidence: medium
created_at: 2026-06-21
updated_at: 2026-06-21
last_verified: 2026-06-21
tags: [mcp, sse, streamable-http, reverse-proxy, cloudflare-tunnel, buffering, remote-mcp]
affected_tools: [claude-desktop, mcp-server]
---

# A reverse proxy buffering SSE breaks remote MCP after OAuth and initialize succeed

## Summary

A remote MCP server behind a reverse proxy or tunnel can complete OAuth and `initialize`, then fail to connect because the proxy buffers the Server-Sent Events stream. MCP Streamable HTTP needs the SSE response delivered in real time; a buffering proxy (notably Cloudflare Tunnel) withholds the stream, so the client never sees it and reports a connection error.

## Symptoms

- The client connects to a custom remote MCP and then errors, e.g. "There was an error connecting to your server".
- Server logs show success through client registration, OAuth authorize, token exchange, `initialize`, and the SSE `GET` with `Accept: text/event-stream` — then nothing flows.
- Direct (non-proxied) access works; only the proxied/tunnelled path fails.

## Root Cause

MCP Streamable HTTP streams responses over SSE, which must be flushed to the client incrementally. A reverse proxy or tunnel that buffers responses (Cloudflare Tunnel buffers SSE; Nginx with `proxy_buffering on`) holds the bytes until the response "completes", which never happens for a long-lived stream, so the client times out or errors despite a healthy handshake.

## Fix

1. Disable response buffering for the MCP endpoint at the proxy: for Nginx set `proxy_buffering off;` (and disable gzip) on that location; for other proxies disable their equivalent buffering.
2. If your tunnel buffers SSE and cannot be configured (e.g. Cloudflare Tunnel), put the MCP endpoint on a path/host that bypasses the buffering layer, or use a proxy that streams.
3. Confirm the proxy forwards `Accept: text/event-stream` responses unbuffered and does not strip streaming headers.

## Verification

Through the proxy, the SSE stream flows after `initialize` and the client finishes connecting and lists tools.

## Anti-Patterns

- Debugging your OAuth implementation when OAuth already succeeded and the SSE stream is what is buffered.
- Leaving default `proxy_buffering on` for an MCP streaming endpoint.

<!-- pit-record
{
  "id": "mcp-reverse-proxy-buffers-sse-connection-fails",
  "title": "A reverse proxy buffering SSE breaks remote MCP after OAuth and initialize succeed",
  "summary": "A remote MCP server behind a reverse proxy/tunnel can pass OAuth and initialize, then fail because the proxy buffers the SSE stream that Streamable HTTP needs in real time. Cloudflare Tunnel buffers SSE; Nginx needs proxy_buffering off. Disable buffering for the MCP endpoint or use a streaming proxy.",
  "status": "verified",
  "confidence": "medium",
  "created_at": "2026-06-21",
  "updated_at": "2026-06-21",
  "last_verified": "2026-06-21",
  "tags": ["mcp", "sse", "streamable-http", "reverse-proxy", "cloudflare-tunnel", "buffering", "remote-mcp"],
  "affected_tools": ["claude-desktop", "mcp-server"],
  "symptoms": [
    "the client connects to a custom remote MCP then errors (e.g. 'There was an error connecting to your server')",
    "server logs show success through registration, OAuth authorize, token exchange, initialize, and the SSE GET with Accept: text/event-stream, then nothing flows",
    "direct non-proxied access works; only the proxied/tunnelled path fails"
  ],
  "environment": {
    "constraints": ["remote MCP over Streamable HTTP / SSE", "reverse proxy or tunnel buffers responses"]
  },
  "root_cause": [
    "MCP Streamable HTTP streams responses over SSE, which must be flushed incrementally.",
    "A proxy/tunnel that buffers responses (Cloudflare Tunnel buffers SSE; Nginx with proxy_buffering on) holds bytes until the response completes, which never happens for a long-lived stream.",
    "So the client times out or errors despite a healthy OAuth/initialize handshake."
  ],
  "fix": [
    {
      "step": "Disable response buffering for the MCP endpoint at the proxy.",
      "command": "proxy_buffering off;",
      "rationale": "For Nginx set proxy_buffering off (and disable gzip) on the MCP location; other proxies have an equivalent."
    },
    {
      "step": "If the tunnel buffers SSE and cannot be configured (e.g. Cloudflare Tunnel), route the MCP endpoint to bypass the buffering layer or use a streaming proxy."
    },
    {
      "step": "Confirm the proxy forwards text/event-stream responses unbuffered and does not strip streaming headers."
    }
  ],
  "verification": [
    {
      "method": "Connect through the proxy and watch the stream.",
      "expected": "The SSE stream flows after initialize and the client finishes connecting and lists tools."
    }
  ],
  "workarounds": [
    "Expose the MCP endpoint directly (non-proxied) for testing to confirm buffering is the cause."
  ],
  "anti_patterns": [
    "Debugging OAuth when OAuth already succeeded and the SSE stream is what is buffered.",
    "Leaving default proxy_buffering on for an MCP streaming endpoint."
  ],
  "source_links": [
    {
      "title": "anthropics/claude-code issue 5826: Claude Desktop custom MCP connection failure; confirmed root cause is Cloudflare Tunnel buffering SSE despite successful OAuth/initialize",
      "type": "issue",
      "url": "https://github.com/anthropics/claude-code/issues/5826",
      "accessed_at": "2026-06-21"
    }
  ],
  "related": ["fastmcp-421-invalid-host-header-dns-rebinding", "mcp-sse-session-lost-multi-worker"],
  "safety": {
    "external_text_trusted": false,
    "requires_confirmation": false,
    "notes": ["Summarized from a public GitHub issue; verify your specific proxy's buffering directives."]
  }
}
-->
