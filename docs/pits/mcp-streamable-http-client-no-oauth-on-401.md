# Streamable HTTP MCP client hangs on 401 instead of starting the OAuth flow

Pit ID: mcp-streamable-http-client-no-oauth-on-401
Status: verified
Confidence: medium
Updated: 2026-06-21
Canonical source: https://github.com/laozhangzzz/agent-pitbook/blob/main/pits/mcp/mcp-streamable-http-client-no-oauth-on-401.md

## Summary

With Streamable HTTP, a 401 did not trigger the OAuth flow the way SSE did; the client hung after 'Error POSTing to endpoint (HTTP 401)'. This was a transport gap (seen in MCP Inspector) where Streamable HTTP did not start auth on 401. Upgrade to a fixed client/SDK; SSE handled it as an interim check.

## Affected Tools

- mcp-inspector
- mcp-server

## Tags

- mcp
- streamable-http
- oauth
- 401
- inspector
- authorization
- transport

## Symptoms

- connecting to an OAuth-protected MCP server over Streamable HTTP hangs
- log shows Error from MCP server: Error: Error POSTing to endpoint (HTTP 401) then no further progress
- the same server triggers the browser OAuth flow correctly via the SSE transport

## Environment

- constraints: Streamable HTTP transport, OAuth-protected MCP server returning 401

## Root Cause

- The SSE client transport detected a 401 and started authorization.
- The Streamable HTTP client transport did not handle the 401 as an auth challenge, so no OAuth flow started and the connection stalled.
- It is a client/transport bug, not a server misconfiguration.

## Fix

1. Upgrade to a client/Inspector/SDK version where Streamable HTTP triggers OAuth on 401 (resolved in a released Inspector version).
2. As an interim check, confirm it is transport-specific by trying the SSE transport, which handled 401-driven auth.
3. Verify the server returns a spec-compliant 401 with the expected authorization metadata.

## Verification

- Connect over Streamable HTTP to an OAuth-protected server on the fixed client. Expected: A 401 triggers the authorization flow instead of hanging.

## Sources

- modelcontextprotocol/inspector issue 358: When using Streamable HTTP transport, the oauth flow is not triggered when the server returns 401 (resolved in a released Inspector version) (issue): https://github.com/modelcontextprotocol/inspector/issues/358

## Workarounds

- Use the SSE transport temporarily if it handles the OAuth challenge while you upgrade.

## Anti-patterns

- Concluding the OAuth server is broken when the client transport did not act on the 401.
- Staying on an old client version that lacks Streamable HTTP auth handling.

