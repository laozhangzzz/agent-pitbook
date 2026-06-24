# A reverse proxy buffering SSE breaks remote MCP after OAuth and initialize succeed

Pit ID: mcp-reverse-proxy-buffers-sse-connection-fails
Status: verified
Confidence: medium
Updated: 2026-06-21
Canonical source: https://github.com/laozhangzzz/agent-pitbook/blob/main/pits/mcp/mcp-reverse-proxy-buffers-sse-connection-fails.md

## Summary

A remote MCP server behind a reverse proxy/tunnel can pass OAuth and initialize, then fail because the proxy buffers the SSE stream that Streamable HTTP needs in real time. Cloudflare Tunnel buffers SSE; Nginx needs proxy_buffering off. Disable buffering for the MCP endpoint or use a streaming proxy.

## Fast Answer

- Problem: the client connects to a custom remote MCP then errors (e.g. 'There was an error connecting to your server')
- Root cause: MCP Streamable HTTP streams responses over SSE, which must be flushed incrementally.
- Fix first: Disable response buffering for the MCP endpoint at the proxy.
- Verify: Connect through the proxy and watch the stream.

## Queries This Answers

- Claude Desktop custom MCP connection failure; confirmed root cause is Cloudflare Tunnel buffering SSE despite successful OAuth/initialize
- Claude Desktop custom MCP connection failure; confirmed root cause is Cloudflare Tunnel buffering SSE despite successful OAuth/initialize fix
- Claude Desktop custom MCP connection failure; confirmed root cause is Cloudflare Tunnel buffering SSE despite successful OAuth/initialize root cause
- A reverse proxy buffering SSE breaks remote MCP after OAuth and initialize succeed
- A reverse proxy buffering SSE breaks remote MCP after OAuth and initialize succeed fix
- A reverse proxy buffering SSE breaks remote MCP after OAuth and initialize succeed root cause
- how to fix A reverse proxy buffering SSE breaks remote MCP after OAuth and initialize succeed
- HTTP fix
- claude-desktop HTTP
- claude-desktop HTTP fix
- mcp-server HTTP
- mcp-server HTTP fix
- the client connects to a custom remote MCP then errors e.g. There was an error connecting to your server
- how to fix the client connects to a custom remote MCP then errors e.g. There was an error connecting to your server
- the client connects to a custom remote MCP then errors (e.g. 'There was an error connecting to your server') root cause
- claude-desktop the client connects to a custom remote MCP then errors e.g. There was an error connecting to your server
- claude-desktop the client connects to a custom remote MCP then errors (e.g. 'There was an error connecting to your server') fix
- mcp-server the client connects to a custom remote MCP then errors e.g. There was an error connecting to your server
- mcp-server the client connects to a custom remote MCP then errors (e.g. 'There was an error connecting to your server') fix
- server logs show success through registration, OAuth authorize, token exchange, initialize, and the SSE GET with Accept: text/event-stream, then nothing flows
- how to fix server logs show success through registration, OAuth authorize, token exchange, initialize, and the SSE GET with Accept: text/event-stream, then nothing flows
- server logs show success through registration, OAuth authorize, token exchange, initialize, and the SSE GET with Accept: text/event-stream, then nothing flows root cause
- claude-desktop server logs show success through registration, OAuth authorize, token exchange, initialize, and the SSE GET with Accept: text/event-stream, then nothing flows
- claude-desktop server logs show success through registration, OAuth authorize, token exchange, initialize, and the SSE GET with Accept: text/event-stream, then nothing flows fix

## Common Search Queries

- mcp-reverse-proxy-buffers-sse-connection-fails
- mcp reverse proxy buffers sse connection fails
- A reverse proxy buffering SSE breaks remote MCP after OAuth and initialize succeed
- A reverse proxy buffering SSE breaks remote MCP after OAuth and initialize succeed fix
- A reverse proxy buffering SSE breaks remote MCP after OAuth and initialize succeed root cause
- streamable-http
- reverse-proxy
- cloudflare-tunnel
- buffering
- remote-mcp
- claude-desktop
- mcp-server
- the client connects to a custom remote MCP then errors e.g. There was an error connecting to your server
- server logs show success through registration, OAuth authorize, token exchange, initialize, and the SSE GET with Accept: text/event-stream, then nothing flows
- direct non-proxied access works; only the proxied/tunnelled path fails
- MCP Streamable HTTP streams responses over SSE, which must be flushed incrementally
- A proxy/tunnel that buffers responses (Cloudflare Tunnel buffers SSE; Nginx with proxy_buffering on) holds bytes until the response completes, which never happens for a long-lived stream
- So the client times out or errors despite a healthy OAuth/initialize handshake
- Debugging OAuth when OAuth already succeeded and the SSE stream is what is buffered
- Leaving default proxy_buffering on for an MCP streaming endpoint
- Expose the MCP endpoint directly (non-proxied) for testing to confirm buffering is the cause
- anthropics/claude-code issue 5826: Claude Desktop custom MCP connection failure; confirmed root cause is Cloudflare Tunnel buffering SSE despite successful OAuth/initialize
- Claude Desktop custom MCP connection failure; confirmed root cause is Cloudflare Tunnel buffering SSE despite successful OAuth/initialize
- Claude Desktop custom MCP connection failure; confirmed root cause is Cloudflare Tunnel buffering SSE despite successful OAuth/initialize fix

## Affected Tools

- claude-desktop
- mcp-server

## Tags

- mcp
- sse
- streamable-http
- reverse-proxy
- cloudflare-tunnel
- buffering
- remote-mcp

## Symptoms

- the client connects to a custom remote MCP then errors (e.g. 'There was an error connecting to your server')
- server logs show success through registration, OAuth authorize, token exchange, initialize, and the SSE GET with Accept: text/event-stream, then nothing flows
- direct non-proxied access works; only the proxied/tunnelled path fails

## Environment

- constraints: remote MCP over Streamable HTTP / SSE, reverse proxy or tunnel buffers responses

## Root Cause

- MCP Streamable HTTP streams responses over SSE, which must be flushed incrementally.
- A proxy/tunnel that buffers responses (Cloudflare Tunnel buffers SSE; Nginx with proxy_buffering on) holds bytes until the response completes, which never happens for a long-lived stream.
- So the client times out or errors despite a healthy OAuth/initialize handshake.

## Fix

1. Disable response buffering for the MCP endpoint at the proxy.

```bash
proxy_buffering off;
```

Rationale: For Nginx set proxy_buffering off (and disable gzip) on the MCP location; other proxies have an equivalent.
2. If the tunnel buffers SSE and cannot be configured (e.g. Cloudflare Tunnel), route the MCP endpoint to bypass the buffering layer or use a streaming proxy.
3. Confirm the proxy forwards text/event-stream responses unbuffered and does not strip streaming headers.

## Verification

- Connect through the proxy and watch the stream. Expected: The SSE stream flows after initialize and the client finishes connecting and lists tools.

## Sources

- anthropics/claude-code issue 5826: Claude Desktop custom MCP connection failure; confirmed root cause is Cloudflare Tunnel buffering SSE despite successful OAuth/initialize (issue): https://github.com/anthropics/claude-code/issues/5826

## Workarounds

- Expose the MCP endpoint directly (non-proxied) for testing to confirm buffering is the cause.

## Anti-patterns

- Debugging OAuth when OAuth already succeeded and the SSE stream is what is buffered.
- Leaving default proxy_buffering on for an MCP streaming endpoint.

