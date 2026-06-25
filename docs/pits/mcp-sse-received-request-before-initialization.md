# SSE MCP server: Received request before initialization was complete

Pit ID: mcp-sse-received-request-before-initialization
Status: verified
Confidence: medium
Updated: 2026-06-21
Canonical source: https://github.com/laozhangzzz/agent-pitbook/blob/main/pits/mcp/mcp-sse-received-request-before-initialization.md

## Summary

RuntimeError: Received request before initialization was complete from an SSE MCP server means a non-initialize (or duplicate initialize) request arrived on an uninitialized connection. The confirmed cause is a non-compliant proxy (supergateway injects its own initialize); a stale client session after redeploy is another. Use a compliant proxy (mcp-proxy) or reconnect.

## Fast Answer

- Problem: server raises RuntimeError: Received request before initialization was complete on tools/list or a tool call
- Root cause: The MCP lifecycle requires the client's initialize to complete before other requests.
- Fix first: If a gateway/proxy is in front, use a spec-compliant one: switching supergateway -> mcp-proxy resolves the double-initialize case.
- Verify: Use a compliant proxy or reconnect the client, then call tools/list.

## Queries This Answers

- MCP SSE Server: Received request before initialization was complete comment confirms supergateway double-initialize; mcp-proxy works
- MCP SSE Server: Received request before initialization was complete (comment confirms supergateway double-initialize; mcp-proxy works) fix
- MCP SSE Server: Received request before initialization was complete (comment confirms supergateway double-initialize; mcp-proxy works) root cause
- SSE MCP server: Received request before initialization was complete
- SSE MCP server: Received request before initialization was complete fix
- SSE MCP server: Received request before initialization was complete root cause
- how to fix SSE MCP server: Received request before initialization was complete
- mcp-server mcp server received request initialization was complete

## Common Search Queries

- mcp-sse-received-request-before-initialization
- mcp sse received request before initialization
- SSE MCP server: Received request before initialization was complete
- SSE MCP server: Received request before initialization was complete fix
- SSE MCP server: Received request before initialization was complete root cause
- initialization
- proxy
- supergateway
- python-sdk
- redeploy
- mcp-server
- server raises RuntimeError: Received request before initialization was complete on tools/list or a tool call

## Affected Tools

- mcp-server
- python-sdk

## Tags

- mcp
- sse
- initialization
- proxy
- supergateway
- python-sdk
- redeploy

## Symptoms

- server raises RuntimeError: Received request before initialization was complete on tools/list or a tool call
- appears after a redeploy/restart or when a gateway/proxy sits in front of the SSE server
- the first connection worked; a later one fails

## Environment

- language: Python
- framework: FastMCP / MCP Python SDK
- constraints: SSE transport, proxy/gateway in front, server redeploys while clients hold sessions

## Root Cause

- The MCP lifecycle requires the client's initialize to complete before other requests.
- A proxy such as supergateway sends its own initialize on launch (against spec) then forwards the client's, so the server sees initialize twice / out of order.
- After a redeploy the client may keep an old SSE session and send requests the fresh server never saw initialized.

## Fix

1. If a gateway/proxy is in front, use a spec-compliant one: switching supergateway -> mcp-proxy resolves the double-initialize case.
2. After redeploying the server, reconnect the client so a fresh initialize handshake runs.
3. For redeploy-heavy or multi-instance deployments, prefer stateless Streamable HTTP over stateful SSE.

## Verification

- Use a compliant proxy or reconnect the client, then call tools/list. Expected: Requests succeed and the 'Received request before initialization was complete' error stops.

## Sources

- modelcontextprotocol/python-sdk issue 423: MCP SSE Server: Received request before initialization was complete (comment confirms supergateway double-initialize; mcp-proxy works) (issue): https://github.com/modelcontextprotocol/python-sdk/issues/423

## Workarounds

- Reconnect the client after each server restart.

## Anti-patterns

- Wrapping the handler in a broad try/except that swallows the RuntimeError and masks other errors.
- Blaming the server example when the proxy violates the initialization sequence.

