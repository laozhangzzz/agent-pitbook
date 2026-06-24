# dns rebinding protection 421 invalid host header behind proxy mcp-server

Known fix landing page for an exact problem query.

Pit ID: fastmcp-421-invalid-host-header-dns-rebinding
HTML query page: https://laozhangzzz.github.io/agent-pitbook/q/dns-rebinding-protection-421-invalid-host-header-behind-proxy-mcp-server.html
Full pit HTML: https://laozhangzzz.github.io/agent-pitbook/pits/fastmcp-421-invalid-host-header-dns-rebinding.html
Full pit Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/fastmcp-421-invalid-host-header-dns-rebinding.md
GitHub known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/11

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
