---
id: fastmcp-421-invalid-host-header-dns-rebinding
title: FastMCP returns 421 Invalid Host Header behind a proxy due to DNS rebinding protection
status: verified
confidence: high
created_at: 2026-06-21
updated_at: 2026-06-21
last_verified: 2026-06-21
tags: [mcp, fastmcp, python-sdk, streamable-http, dns-rebinding, proxy, docker, 421]
affected_tools: [mcp-server, fastmcp]
---

# FastMCP returns 421 Invalid Host Header behind a proxy due to DNS rebinding protection

## Summary

After a FastMCP / MCP Python SDK upgrade, a streamable-HTTP or SSE server behind a reverse proxy, gateway, or container starts rejecting every request with `421 Misdirected Request` / `Invalid Host header`. This is DNS rebinding protection (added in PR #861): the incoming `Host` header does not match the server's allowed-hosts list. Configure `allowed_hosts`/`allowed_origins`, or disable the protection where another layer handles security.

## Symptoms

- All external requests fail with HTTP `421 Misdirected Request` and `Invalid Host header`.
- Started after upgrading the MCP Python SDK / FastMCP.
- The server runs behind Nginx/Caddy/Cloudflare Tunnel/Kubernetes, or binds `host=0.0.0.0`.
- Direct `localhost` access works; proxied or custom-domain access does not.

## Root Cause

FastMCP enables DNS rebinding protection that validates the request `Host` header against an allowed list. When the server is bound to `0.0.0.0` or reached through a proxy/gateway, the real `Host` (your domain or a cluster service name) is not in the default allowed list, so the transport-security middleware rejects it with `421`. There is no startup warning, so users often blame their proxy config. Note that when mounting `streamable_http_app()`/`sse_app()` into Starlette/FastAPI, the FastMCP `host` parameter does not control the bind address (uvicorn does), but still drives this auto-enable logic.

## Fix

1. Explicitly allow your hosts/origins (recommended for production/gateways):
   ```python
   from mcp.server.fastmcp import FastMCP
   from mcp.server.transport_security import TransportSecuritySettings

   mcp = FastMCP("MyServer", transport_security=TransportSecuritySettings(
       enable_dns_rebinding_protection=True,
       allowed_hosts=["localhost:*", "127.0.0.1:*", "your-gateway-host:*"],
       allowed_origins=["http://localhost:*", "http://your-gateway-host:*"],
   ))
   ```
2. Or disable it for local dev or when security is handled at another layer:
   ```python
   transport_security=TransportSecuritySettings(enable_dns_rebinding_protection=False)
   ```
3. Ensure the reverse proxy forwards the correct `Host` header to the server.

## Verification

After setting `allowed_hosts` (or disabling the protection), proxied requests return normal MCP responses instead of `421 Invalid Host header`.

## Anti-Patterns

- Debugging your Nginx/Caddy config for a day when the rejection comes from FastMCP's transport-security middleware.
- Expecting the FastMCP `host` parameter to set the bind address when the app is mounted (uvicorn/gunicorn controls that).

<!-- pit-record
{
  "id": "fastmcp-421-invalid-host-header-dns-rebinding",
  "title": "FastMCP returns 421 Invalid Host Header behind a proxy due to DNS rebinding protection",
  "summary": "A FastMCP/MCP Python SDK streamable-HTTP or SSE server behind a proxy/gateway/container rejecting requests with 421 Misdirected Request / Invalid Host header is DNS rebinding protection (PR #861): the Host header is not in allowed_hosts. Set allowed_hosts/allowed_origins via TransportSecuritySettings or disable the protection where another layer secures it.",
  "status": "verified",
  "confidence": "high",
  "created_at": "2026-06-21",
  "updated_at": "2026-06-21",
  "last_verified": "2026-06-21",
  "tags": ["mcp", "fastmcp", "python-sdk", "streamable-http", "dns-rebinding", "proxy", "docker", "421"],
  "affected_tools": ["mcp-server", "fastmcp"],
  "symptoms": [
    "all external requests fail with HTTP 421 Misdirected Request and 'Invalid Host header'",
    "started after upgrading the MCP Python SDK / FastMCP",
    "the server runs behind Nginx/Caddy/Cloudflare Tunnel/Kubernetes or binds host=0.0.0.0",
    "direct localhost access works but proxied or custom-domain access does not"
  ],
  "environment": {
    "language": "Python",
    "framework": "FastMCP / MCP Python SDK",
    "constraints": ["streamable-HTTP or SSE transport", "reverse proxy / gateway / container deployment", "host bound to 0.0.0.0"]
  },
  "root_cause": [
    "FastMCP enables DNS rebinding protection that validates the request Host header against an allowed list (added in PR #861).",
    "Behind a proxy or when bound to 0.0.0.0, the real Host (your domain or a cluster service name) is not in the default allowed list, so the transport-security middleware returns 421.",
    "There is no startup warning, so users blame their proxy config.",
    "When mounting streamable_http_app()/sse_app() into Starlette/FastAPI, the FastMCP host parameter does not control the bind address but still drives the auto-enable logic."
  ],
  "fix": [
    {
      "step": "Explicitly allow your hosts and origins via TransportSecuritySettings(allowed_hosts=[...], allowed_origins=[...]).",
      "rationale": "Recommended for production behind a gateway; ports can be wildcarded with '*'."
    },
    {
      "step": "Or disable protection for local dev / when another layer secures it: TransportSecuritySettings(enable_dns_rebinding_protection=False)."
    },
    {
      "step": "Ensure the reverse proxy forwards the correct Host header to the server."
    }
  ],
  "verification": [
    {
      "method": "Send a proxied request after setting allowed_hosts or disabling protection.",
      "expected": "Normal MCP responses instead of 421 Invalid Host header."
    }
  ],
  "workarounds": [
    "Disable DNS rebinding protection when the deployment is isolated at the network layer and authenticated via OAuth."
  ],
  "anti_patterns": [
    "Debugging the Nginx/Caddy config when the 421 comes from FastMCP transport-security middleware.",
    "Expecting the FastMCP host parameter to set the bind address for a mounted app (uvicorn/gunicorn controls that)."
  ],
  "source_links": [
    {
      "title": "modelcontextprotocol/python-sdk issue 1798: Guide: Resolving '421 Invalid Host Header' (DNS Rebinding Protection)",
      "type": "issue",
      "url": "https://github.com/modelcontextprotocol/python-sdk/issues/1798",
      "accessed_at": "2026-06-21"
    }
  ],
  "related": [],
  "safety": {
    "external_text_trusted": false,
    "requires_confirmation": true,
    "notes": ["Disabling DNS rebinding protection removes a security control; only do so when another layer enforces host/origin trust."]
  }
}
-->
