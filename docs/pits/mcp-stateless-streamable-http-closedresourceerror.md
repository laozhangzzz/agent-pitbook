# Stateless Streamable HTTP MCP server throws anyio.ClosedResourceError on some SDK versions

Pit ID: mcp-stateless-streamable-http-closedresourceerror
Status: candidate
Confidence: medium
Updated: 2026-06-21
Canonical source: https://github.com/laozhangzzz/agent-pitbook/blob/main/pits/mcp/mcp-stateless-streamable-http-closedresourceerror.md

## Summary

A stateless Streamable HTTP MCP server can raise anyio.ClosedResourceError on certain MCP Python SDK / FastMCP versions because the stateless path re-enters the transport and a second request hits an already-closed stream. Pin a known-good SDK version (1.11.0 reported working vs 1.12.0) and track the upstream fix.

## Common Search Queries

- mcp-stateless-streamable-http-closedresourceerror
- mcp stateless streamable http closedresourceerror
- Stateless Streamable HTTP MCP server throws anyio.ClosedResourceError on some SDK versions
- Stateless Streamable HTTP MCP server throws anyio.ClosedResourceError on some SDK versions fix
- Stateless Streamable HTTP MCP server throws anyio.ClosedResourceError on some SDK versions root cause
- python-sdk
- streamable-http
- stateless
- anyio
- closedresourceerror
- versioning
- mcp-server
- fastmcp
- each request raises an exception group ending in anyio.ClosedResourceError
- stack passes through _handle_stateless_request / run_stateless_server / http_transport.connect() or streamable_http_manager.run_server
- reproduces with stateless mode on affected versions (e.g. SDK 1.12.0; FastMCP 2.10.x / 2.13.x
- In affected versions the stateless Streamable HTTP path re-enters the transport's read loop
- On the second request the write/read stream has already been closed, so anyio raises ClosedResourceError
- It is a regression in the stateless transport handling, not a problem with the user's handler
- Catching ClosedResourceError in your handler, which hides the transport regression
- Assuming the latest SDK is always safe for stateless mode without checking the issue tracker
- Stay on the last SDK version where stateless mode worked for you
- modelcontextprotocol/python-sdk issue 1219: _handle_stateless_request ClosedResourceError (reports 1.11.0 works, 1.12.0 fails; also FastMCP 2.10/2.13
- mcp-server each request raises an exception group ending in anyio.ClosedResourceError

## Affected Tools

- mcp-server
- python-sdk
- fastmcp

## Tags

- mcp
- python-sdk
- streamable-http
- stateless
- anyio
- closedresourceerror
- versioning

## Symptoms

- each request raises an exception group ending in anyio.ClosedResourceError
- stack passes through _handle_stateless_request / run_stateless_server / http_transport.connect() or streamable_http_manager.run_server
- reproduces with stateless mode on affected versions (e.g. SDK 1.12.0; FastMCP 2.10.x / 2.13.x)

## Environment

- language: Python
- framework: MCP Python SDK / FastMCP
- constraints: stateless Streamable HTTP transport, version-specific regression

## Root Cause

- In affected versions the stateless Streamable HTTP path re-enters the transport's read loop.
- On the second request the write/read stream has already been closed, so anyio raises ClosedResourceError.
- It is a regression in the stateless transport handling, not a problem with the user's handler.

## Fix

1. Pin a known-good SDK version; users reported 1.11.0 working where 1.12.0 failed.
2. Track the upstream issue/fix and upgrade to a release that resolves the stateless ClosedResourceError, then unpin.
3. If you do not need stateless mode, run stateful and handle scaling separately.

## Verification

- Send repeated requests to the stateless server on the pinned/fixed version. Expected: Requests succeed with no anyio.ClosedResourceError.

## Sources

- modelcontextprotocol/python-sdk issue 1219: _handle_stateless_request ClosedResourceError (reports 1.11.0 works, 1.12.0 fails; also FastMCP 2.10/2.13) (issue): https://github.com/modelcontextprotocol/python-sdk/issues/1219

## Workarounds

- Stay on the last SDK version where stateless mode worked for you.

## Anti-patterns

- Catching ClosedResourceError in your handler, which hides the transport regression.
- Assuming the latest SDK is always safe for stateless mode without checking the issue tracker.

