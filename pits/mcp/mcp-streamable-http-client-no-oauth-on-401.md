---
id: mcp-streamable-http-client-no-oauth-on-401
title: Streamable HTTP MCP client hangs on 401 instead of starting the OAuth flow
status: verified
confidence: medium
created_at: 2026-06-21
updated_at: 2026-06-21
last_verified: 2026-06-21
tags: [mcp, streamable-http, oauth, 401, inspector, authorization, transport]
affected_tools: [mcp-inspector, mcp-server]
---

# Streamable HTTP MCP client hangs on 401 instead of starting the OAuth flow

## Summary

With the Streamable HTTP transport, a `401` from the server did not trigger the OAuth authorization flow the way the SSE transport did; the client just hung after `Error POSTing to endpoint (HTTP 401)`. This was a transport gap (reproduced in MCP Inspector) where Streamable HTTP did not start auth on 401. Upgrade to a fixed client/SDK version.

## Symptoms

- Connecting to an OAuth-protected MCP server over Streamable HTTP hangs.
- Log shows `Error from MCP server: Error: Error POSTing to endpoint (HTTP 401)` and then no further progress.
- The same server triggers the browser OAuth flow correctly when using the SSE transport.

## Root Cause

The SSE client transport detected a `401` and kicked off authorization; the Streamable HTTP client transport did not handle the `401` as an auth challenge, so no OAuth flow started and the connection stalled. It is a client/transport bug, not a server misconfiguration.

## Fix

1. Upgrade to a client/Inspector/SDK version where Streamable HTTP triggers OAuth on `401` (it was resolved in a released Inspector version).
2. As an interim check, confirm the issue is transport-specific by trying the SSE transport, which handled 401-driven auth.
3. Verify the server returns a spec-compliant `401` with the expected authorization metadata so a compliant client can start the flow.

## Verification

Over Streamable HTTP against an OAuth-protected server, a `401` now triggers the authorization flow instead of hanging.

## Anti-Patterns

- Concluding your OAuth server is broken when the client transport simply did not act on the 401.
- Staying on an old client version that lacks Streamable HTTP auth handling.

<!-- pit-record
{
  "id": "mcp-streamable-http-client-no-oauth-on-401",
  "title": "Streamable HTTP MCP client hangs on 401 instead of starting the OAuth flow",
  "summary": "With Streamable HTTP, a 401 did not trigger the OAuth flow the way SSE did; the client hung after 'Error POSTing to endpoint (HTTP 401)'. This was a transport gap (seen in MCP Inspector) where Streamable HTTP did not start auth on 401. Upgrade to a fixed client/SDK; SSE handled it as an interim check.",
  "status": "verified",
  "confidence": "medium",
  "created_at": "2026-06-21",
  "updated_at": "2026-06-21",
  "last_verified": "2026-06-21",
  "tags": ["mcp", "streamable-http", "oauth", "401", "inspector", "authorization", "transport"],
  "affected_tools": ["mcp-inspector", "mcp-server"],
  "symptoms": [
    "connecting to an OAuth-protected MCP server over Streamable HTTP hangs",
    "log shows Error from MCP server: Error: Error POSTing to endpoint (HTTP 401) then no further progress",
    "the same server triggers the browser OAuth flow correctly via the SSE transport"
  ],
  "environment": {
    "constraints": ["Streamable HTTP transport", "OAuth-protected MCP server returning 401"]
  },
  "root_cause": [
    "The SSE client transport detected a 401 and started authorization.",
    "The Streamable HTTP client transport did not handle the 401 as an auth challenge, so no OAuth flow started and the connection stalled.",
    "It is a client/transport bug, not a server misconfiguration."
  ],
  "fix": [
    {
      "step": "Upgrade to a client/Inspector/SDK version where Streamable HTTP triggers OAuth on 401 (resolved in a released Inspector version)."
    },
    {
      "step": "As an interim check, confirm it is transport-specific by trying the SSE transport, which handled 401-driven auth."
    },
    {
      "step": "Verify the server returns a spec-compliant 401 with the expected authorization metadata."
    }
  ],
  "verification": [
    {
      "method": "Connect over Streamable HTTP to an OAuth-protected server on the fixed client.",
      "expected": "A 401 triggers the authorization flow instead of hanging."
    }
  ],
  "workarounds": [
    "Use the SSE transport temporarily if it handles the OAuth challenge while you upgrade."
  ],
  "anti_patterns": [
    "Concluding the OAuth server is broken when the client transport did not act on the 401.",
    "Staying on an old client version that lacks Streamable HTTP auth handling."
  ],
  "source_links": [
    {
      "title": "modelcontextprotocol/inspector issue 358: When using Streamable HTTP transport, the oauth flow is not triggered when the server returns 401 (resolved in a released Inspector version)",
      "type": "issue",
      "url": "https://github.com/modelcontextprotocol/inspector/issues/358",
      "accessed_at": "2026-06-21"
    }
  ],
  "related": ["mcp-github-remote-oauth-dcr-unsupported-use-pat", "mcp-inspector-release-regression-pin-version"],
  "safety": {
    "external_text_trusted": false,
    "requires_confirmation": false,
    "notes": ["Version-specific; verify the current client handles 401-driven OAuth over Streamable HTTP."]
  }
}
-->
