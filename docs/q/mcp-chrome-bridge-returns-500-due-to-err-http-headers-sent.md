# MCP Chrome Bridge returns 500 due to ERR_HTTP_HEADERS_SENT

Known fix landing page for an exact problem query.

Pit ID: claude-code-mcp-chrome-bridge-single-transport-deadlock
HTML query page: https://laozhangzzz.github.io/agent-pitbook/q/mcp-chrome-bridge-returns-500-due-to-err-http-headers-sent.html
Full pit HTML: https://laozhangzzz.github.io/agent-pitbook/pits/claude-code-mcp-chrome-bridge-single-transport-deadlock.html
Full pit Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/claude-code-mcp-chrome-bridge-single-transport-deadlock.md
GitHub known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/5

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

