# FastMCP returns 421 Invalid Host Header behind a proxy due to DNS rebinding protection

Pit ID: fastmcp-421-invalid-host-header-dns-rebinding
Status: verified
Confidence: high
Updated: 2026-06-21
Canonical source: https://github.com/laozhangzzz/agent-pitbook/blob/main/pits/mcp/fastmcp-421-invalid-host-header-dns-rebinding.md
GitHub known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/11

## Summary

A FastMCP/MCP Python SDK streamable-HTTP or SSE server behind a proxy/gateway/container rejecting requests with 421 Misdirected Request / Invalid Host header is DNS rebinding protection (PR #861): the Host header is not in allowed_hosts. Set allowed_hosts/allowed_origins via TransportSecuritySettings or disable the protection where another layer secures it.

## Fast Answer

- Problem: all external requests fail with HTTP 421 Misdirected Request and 'Invalid Host header'
- Root cause: FastMCP enables DNS rebinding protection that validates the request Host header against an allowed list (added in PR #861).
- Fix first: Explicitly allow your hosts and origins via TransportSecuritySettings(allowed_hosts=[...], allowed_origins=[...]).
- Verify: Send a proxied request after setting allowed_hosts or disabling protection.

## Queries This Answers

- Guide: Resolving '421 Invalid Host Header' DNS Rebinding Protection
- Guide: Resolving '421 Invalid Host Header' (DNS Rebinding Protection) fix
- Guide: Resolving '421 Invalid Host Header' (DNS Rebinding Protection) root cause
- FastMCP returns 421 Invalid Host Header behind a proxy due to DNS rebinding protection
- FastMCP returns 421 Invalid Host Header behind a proxy due to DNS rebinding protection fix
- FastMCP returns 421 Invalid Host Header behind a proxy due to DNS rebinding protection root cause
- how to fix FastMCP returns 421 Invalid Host Header behind a proxy due to DNS rebinding protection
- mcp-server host header behind proxy dns rebinding protection
- mcp-server host header behind proxy dns rebinding protection fix
- dns rebinding protection 421 invalid host header behind proxy mcp-server
- dns rebinding protection 421 invalid host header behind proxy mcp-server fix
- returns 421 invalid host dns rebinding protection
- returns 421 invalid host dns rebinding protection fix
- returns 421 invalid host mcp-server
- returns 421 invalid host mcp-server fix
- mcp-server http 421 misdirected request invalid host header
- mcp-server http 421 misdirected request invalid host header fix
- invalid host header requests fail http 421 misdirected request mcp-server
- invalid host header requests fail http 421 misdirected request mcp-server fix
- all external requests fail invalid host header
- all external requests fail invalid host header fix
- all external requests fail mcp-server
- all external requests fail mcp-server fix
- /MCP

## Common Search Queries

- fastmcp-421-invalid-host-header-dns-rebinding
- fastmcp 421 invalid host header dns rebinding
- FastMCP returns 421 Invalid Host Header behind a proxy due to DNS rebinding protection
- FastMCP returns 421 Invalid Host Header behind a proxy due to DNS rebinding protection fix
- FastMCP returns 421 Invalid Host Header behind a proxy due to DNS rebinding protection root cause
- fastmcp
- python-sdk
- streamable-http
- dns-rebinding
- proxy
- docker
- mcp-server
- all external requests fail with HTTP 421 Misdirected Request and Invalid Host header
- started after upgrading the MCP Python SDK / FastMCP
- the server runs behind Nginx/Caddy/Cloudflare Tunnel/Kubernetes or binds host=0.0.0.0
- direct localhost access works but proxied or custom-domain access does not
- FastMCP enables DNS rebinding protection that validates the request Host header against an allowed list added in PR #861
- Behind a proxy or when bound to 0.0.0.0, the real Host (your domain or a cluster service name) is not in the default allowed list, so the transport-security middleware returns 421
- There is no startup warning, so users blame their proxy config
- When mounting streamable_http_app()/sse_app() into Starlette/FastAPI, the FastMCP host parameter does not control the bind address but still drives the auto-enable logic
- Debugging the Nginx/Caddy config when the 421 comes from FastMCP transport-security middleware
- Expecting the FastMCP host parameter to set the bind address for a mounted app uvicorn/gunicorn controls that
- Disable DNS rebinding protection when the deployment is isolated at the network layer and authenticated via OAuth
- modelcontextprotocol/python-sdk issue 1798: Guide: Resolving '421 Invalid Host Header' DNS Rebinding Protection

## Affected Tools

- mcp-server
- fastmcp

## Tags

- mcp
- fastmcp
- python-sdk
- streamable-http
- dns-rebinding
- proxy
- docker
- 421

## Symptoms

- all external requests fail with HTTP 421 Misdirected Request and 'Invalid Host header'
- started after upgrading the MCP Python SDK / FastMCP
- the server runs behind Nginx/Caddy/Cloudflare Tunnel/Kubernetes or binds host=0.0.0.0
- direct localhost access works but proxied or custom-domain access does not

## Environment

- language: Python
- framework: FastMCP / MCP Python SDK
- constraints: streamable-HTTP or SSE transport, reverse proxy / gateway / container deployment, host bound to 0.0.0.0

## Root Cause

- FastMCP enables DNS rebinding protection that validates the request Host header against an allowed list (added in PR #861).
- Behind a proxy or when bound to 0.0.0.0, the real Host (your domain or a cluster service name) is not in the default allowed list, so the transport-security middleware returns 421.
- There is no startup warning, so users blame their proxy config.
- When mounting streamable_http_app()/sse_app() into Starlette/FastAPI, the FastMCP host parameter does not control the bind address but still drives the auto-enable logic.

## Fix

1. Explicitly allow your hosts and origins via TransportSecuritySettings(allowed_hosts=[...], allowed_origins=[...]).

Rationale: Recommended for production behind a gateway; ports can be wildcarded with '*'.
2. Or disable protection for local dev / when another layer secures it: TransportSecuritySettings(enable_dns_rebinding_protection=False).
3. Ensure the reverse proxy forwards the correct Host header to the server.

## Verification

- Send a proxied request after setting allowed_hosts or disabling protection. Expected: Normal MCP responses instead of 421 Invalid Host header.

## Sources

- modelcontextprotocol/python-sdk issue 1798: Guide: Resolving '421 Invalid Host Header' (DNS Rebinding Protection) (issue): https://github.com/modelcontextprotocol/python-sdk/issues/1798

## Workarounds

- Disable DNS rebinding protection when the deployment is isolated at the network layer and authenticated via OAuth.

## Anti-patterns

- Debugging the Nginx/Caddy config when the 421 comes from FastMCP transport-security middleware.
- Expecting the FastMCP host parameter to set the bind address for a mounted app (uvicorn/gunicorn controls that).

