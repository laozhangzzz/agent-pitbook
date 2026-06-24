# Streamable HTTP MCP client hangs on 401 instead of starting the OAuth flow root cause

Known fix landing page for an exact problem query.

Pit ID: mcp-streamable-http-client-no-oauth-on-401
HTML query page: https://laozhangzzz.github.io/agent-pitbook/q/streamable-http-mcp-client-hangs-on-401-instead-of-starting-the-oauth-flow-root-cause.html
Full pit HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-streamable-http-client-no-oauth-on-401.html
Full pit Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-streamable-http-client-no-oauth-on-401.md
GitHub known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/30

## Fast Answer

- Problem: connecting to an OAuth-protected MCP server over Streamable HTTP hangs
- Root cause: The SSE client transport detected a 401 and started authorization.
- Fix first: Upgrade to a client/Inspector/SDK version where Streamable HTTP triggers OAuth on 401 (resolved in a released Inspector version).
- Verify: Connect over Streamable HTTP to an OAuth-protected server on the fixed client.

## Queries This Answers

- When using Streamable HTTP transport, the oauth flow is not triggered when the server returns 401 resolved in a released Inspector version
- When using Streamable HTTP transport, the oauth flow is not triggered when the server returns 401 (resolved in a released Inspector version) fix
- When using Streamable HTTP transport, the oauth flow is not triggered when the server returns 401 (resolved in a released Inspector version) root cause
- Streamable HTTP MCP client hangs on 401 instead of starting the OAuth flow
- Streamable HTTP MCP client hangs on 401 instead of starting the OAuth flow fix
- Streamable HTTP MCP client hangs on 401 instead of starting the OAuth flow root cause
- how to fix Streamable HTTP MCP client hangs on 401 instead of starting the OAuth flow
- mcp-inspector client hangs 401 instead starting oauth flow
- mcp-inspector client hangs 401 instead starting oauth flow fix
- starting oauth flow http mcp client hangs 401 instead mcp-inspector
- starting oauth flow http mcp client hangs 401 instead mcp-inspector fix
- streamable http mcp client starting oauth flow
- streamable http mcp client starting oauth flow fix
- streamable http mcp client mcp-inspector
- streamable http mcp client mcp-inspector fix
- mcp-inspector protected mcp server over streamable http hangs
- mcp-inspector protected mcp server over streamable http hangs fix
- streamable http hangs connecting oauth protected mcp server over mcp-inspector
- streamable http hangs connecting oauth protected mcp server over mcp-inspector fix
- connecting oauth protected mcp streamable http hangs
- connecting oauth protected mcp streamable http hangs fix
- connecting oauth protected mcp mcp-inspector
- connecting oauth protected mcp mcp-inspector fix
- HTTP fix
