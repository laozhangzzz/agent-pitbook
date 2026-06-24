# mcp-inspector HTTP 401

Known fix landing page for an exact problem query.

Pit ID: mcp-streamable-http-client-no-oauth-on-401
HTML query page: https://laozhangzzz.github.io/agent-pitbook/q/mcp-inspector-http-401.html
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
- HTTP fix
- mcp-inspector HTTP
- mcp-inspector HTTP fix
- mcp-server HTTP
- mcp-server HTTP fix
- mcp-inspector HTTP 401
- mcp-inspector HTTP 401 fix
- mcp-server HTTP 401
- mcp-server HTTP 401 fix
- /SDK
- /SDK fix
- mcp-inspector /SDK
- mcp-inspector /SDK fix
- mcp-server /SDK
- mcp-server /SDK fix
- connecting to an OAuth-protected MCP server over Streamable HTTP hangs
- how to fix connecting to an OAuth-protected MCP server over Streamable HTTP hangs

