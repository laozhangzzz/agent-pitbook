# Claude Code chrome-bridge MCP gets stuck after one transport connects

Pit ID: claude-code-mcp-chrome-bridge-single-transport-deadlock
Status: verified
Confidence: high
Updated: 2026-06-19
Canonical source: https://github.com/laozhangzzz/agent-pitbook/blob/main/pits/agents/claude-code-mcp-chrome-bridge-single-transport-deadlock.md

## Summary

mcp-chrome-bridge can repeatedly appear broken because its HTTP/SSE MCP service reuses one server instance; after one transport connects, Claude Code may hit HTTP 500 or Already connected to a transport until the native host is restarted or the bridge is patched.

## Fast Answer

- Problem: Claude Code cannot reconnect to the chrome-bridge MCP server
- Root cause: The bridge can reuse a singleton MCP Server instance across HTTP/SSE connections.
- Fix first: Do not use curl /mcp as a health check.
- Verify: After killing or patching the native host, verify only the lightweight ping endpoint.

## Queries This Answers

- Singleton McpServer causes Already connected to a transport
- Singleton McpServer causes Already connected to a transport fix
- Singleton McpServer causes Already connected to a transport root cause
- replace getMcpServer singleton with factory
- replace getMcpServer singleton with factory fix
- replace getMcpServer singleton with factory root cause
- MCP Chrome Bridge returns 500 due to ERR_HTTP_HEADERS_SENT
- MCP Chrome Bridge returns 500 due to ERR_HTTP_HEADERS_SENT fix
- MCP Chrome Bridge returns 500 due to ERR_HTTP_HEADERS_SENT root cause
- service can only connect once after Chrome starts
- service can only connect once after Chrome starts fix
- service can only connect once after Chrome starts root cause
- Claude Code chrome-bridge MCP gets stuck after one transport connects
- Claude Code chrome-bridge MCP gets stuck after one transport connects fix
- Claude Code chrome-bridge MCP gets stuck after one transport connects root cause
- how to fix Claude Code chrome-bridge MCP gets stuck after one transport connects
- HTTP 500 or Already connected to a transport until the native host is restarted or the bridge is patched
- HTTP 500 or Already connected to a transport until the native host is restarted or the bridge is patched fix
- claude-code HTTP 500 or Already connected to a transport until the native host is restarted or the bridge is patched
- claude-code HTTP 500 or Already connected to a transport until the native host is restarted or the bridge is patched fix
- mcp-chrome-bridge HTTP 500 or Already connected to a transport until the native host is restarted or the bridge is patched
- mcp-chrome-bridge HTTP 500 or Already connected to a transport until the native host is restarted or the bridge is patched fix
- HTTP/SSE
- HTTP/SSE fix

## Common Search Queries

- claude-code-mcp-chrome-bridge-single-transport-deadlock
- claude code mcp chrome bridge single transport deadlock
- Claude Code chrome-bridge MCP gets stuck after one transport connects
- Claude Code chrome-bridge MCP gets stuck after one transport connects fix
- Claude Code chrome-bridge MCP gets stuck after one transport connects root cause
- agents
- claude-code
- chrome
- browser-automation
- transport
- deadlock
- native-messaging
- mcp-chrome-bridge
- Claude Code cannot reconnect to the chrome-bridge MCP server
- GET http://127.0.0.1:12306/ping succeeds with pong
- the Chrome extension or bridge UI appears connected
- the MCP endpoint returns HTTP 500 during handshake or tool discovery
- logs contain Already connected to a transport
- logs contain ERR_HTTP_HEADERS_SENT
- doctor --fix or killing the native host helps only temporarily
- The bridge can reuse a singleton MCP Server instance across HTTP/SSE connections
- The MCP SDK server connection model expects one transport per server instance
- A manual curl /mcp request, Chrome extension /sse session, Claude Code session, or stale background job can occupy the singleton transport slot
- Killing the native host clears the runtime state, which explains why repair or restart works temporarily without fixing the underlying design

## Affected Tools

- claude-code
- mcp-chrome-bridge

## Tags

- agents
- claude-code
- mcp
- chrome
- browser-automation
- transport
- deadlock
- native-messaging

## Symptoms

- Claude Code cannot reconnect to the chrome-bridge MCP server
- GET http://127.0.0.1:12306/ping succeeds with pong
- the Chrome extension or bridge UI appears connected
- the MCP endpoint returns HTTP 500 during handshake or tool discovery
- logs contain Already connected to a transport
- logs contain ERR_HTTP_HEADERS_SENT
- doctor --fix or killing the native host helps only temporarily

## Environment

- os: macOS
- runtime: Node.js
- agent: claude-code
- versions: {"mcp-chrome-bridge":"1.0.31","local-observed-node":"25.9.0_1"}
- constraints: Chrome Native Messaging host, local Streamable HTTP MCP endpoint, SSE route shared with Chrome extension UI, multiple clients or tests can touch /mcp or /sse

## Root Cause

- The bridge can reuse a singleton MCP Server instance across HTTP/SSE connections.
- The MCP SDK server connection model expects one transport per server instance.
- A manual curl /mcp request, Chrome extension /sse session, Claude Code session, or stale background job can occupy the singleton transport slot.
- Killing the native host clears the runtime state, which explains why repair or restart works temporarily without fixing the underlying design.

## Fix

1. Do not use curl /mcp as a health check.

Rationale: The test request can initialize and occupy the transport slot that Claude Code needs.
2. Use /ping only to verify the bridge process is alive.

```bash
curl -s http://127.0.0.1:12306/ping
```
3. When stuck, pause Claude Code's active use of chrome-bridge, kill the native host process, and let Chrome relaunch it.

Rationale: This clears the stale singleton transport state without changing registration files.
4. After relaunch, reconnect from Claude Code with /mcp -> chrome-bridge -> Reconnect.

Rationale: Leave the first real /mcp initialize request to the intended client.
5. For durable repair, patch or upgrade mcp-chrome-bridge so each HTTP/SSE transport creates a fresh MCP Server instance and closes it with the transport.

Rationale: This follows the public singleton-to-factory fix discussed upstream.

## Verification

- After killing or patching the native host, verify only the lightweight ping endpoint. Expected: {"status":"ok","message":"pong"}
- Reconnect from Claude Code rather than from curl. Expected: Claude Code owns the first real /mcp transport after the reset.
- Review logs after reconnect. Expected: No fresh Already connected to a transport or ERR_HTTP_HEADERS_SENT errors appear during tool discovery.

## Sources

- Local Codex thread: chrome-bridge repeated repair investigation (local-session): codex-thread:019edd12-68d0-7ad0-b92f-50d9c5d76eba
- hangwin/mcp-chrome issue 321: Singleton McpServer causes Already connected to a transport (issue): https://github.com/hangwin/mcp-chrome/issues/321
- hangwin/mcp-chrome pull request 301: replace getMcpServer singleton with factory (pr): https://github.com/hangwin/mcp-chrome/pull/301
- hangwin/mcp-chrome issue 349: MCP Chrome Bridge returns 500 due to ERR_HTTP_HEADERS_SENT (issue): https://github.com/hangwin/mcp-chrome/issues/349
- hangwin/mcp-chrome issue 306: service can only connect once after Chrome starts (issue): https://github.com/hangwin/mcp-chrome/issues/306
- Chrome Extensions Native Messaging documentation (docs): https://developer.chrome.com/docs/extensions/develop/concepts/native-messaging

## Workarounds

- Keep only one active owner of chrome-bridge when debugging Claude Code MCP connection failures.
- Create a small reset script that kills the native host and checks /ping, but never calls /mcp.
- Avoid always-loading chrome-bridge in multiple Claude Code foreground and background jobs at the same time.

## Anti-patterns

- Using curl /mcp to test whether the bridge is fixed.
- Running doctor --fix repeatedly when /ping already works.
- Asking Claude Code to patch chrome-bridge while Claude Code is actively using that MCP.
- Hot-patching the global npm install without first backing up the original files.
- Treating a healthy /ping response as proof that MCP handshake and tool discovery are healthy.

