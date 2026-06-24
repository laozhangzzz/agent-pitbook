# SSE MCP server: Received request before initialization was complete root cause

Known fix landing page for an exact problem query.

Pit ID: mcp-sse-received-request-before-initialization
HTML query page: https://laozhangzzz.github.io/agent-pitbook/q/sse-mcp-server-received-request-before-initialization-was-complete-root-cause.html
Full pit HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-sse-received-request-before-initialization.html
Full pit Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-sse-received-request-before-initialization.md
GitHub known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/25

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
- RuntimeError: Received request before initialization was complete from an SSE MCP server means a non-initialize (or duplicate initialize) request arrived on an uninitialized
- RuntimeError: Received request before initialization was complete from an SSE MCP server means a non-initialize (or duplicate initialize) request arrived on an uninitialized fix
- mcp-server RuntimeError: Received request before initialization was complete from an SSE MCP server means a non-initialize (or duplicate initialize) request arrived on an uninitialized
- mcp-server RuntimeError: Received request before initialization was complete from an SSE MCP server means a non-initialize (or duplicate initialize) request arrived on an uninitialized fix
- python-sdk RuntimeError: Received request before initialization was complete from an SSE MCP server means a non-initialize (or duplicate initialize) request arrived on an uninitialized
- python-sdk RuntimeError: Received request before initialization was complete from an SSE MCP server means a non-initialize (or duplicate initialize) request arrived on an uninitialized fix
- RuntimeError: Received request before initialization was complete on tools/list or a tool call
- RuntimeError: Received request before initialization was complete on tools/list or a tool call fix
- mcp-server RuntimeError: Received request before initialization was complete on tools/list or a tool call
- mcp-server RuntimeError: Received request before initialization was complete on tools/list or a tool call fix
- python-sdk RuntimeError: Received request before initialization was complete on tools/list or a tool call
- python-sdk RuntimeError: Received request before initialization was complete on tools/list or a tool call fix
- server raises RuntimeError: Received request before initialization was complete on tools/list or a tool call
- how to fix server raises RuntimeError: Received request before initialization was complete on tools/list or a tool call
- server raises RuntimeError: Received request before initialization was complete on tools/list or a tool call root cause
- mcp-server server raises RuntimeError: Received request before initialization was complete on tools/list or a tool call
- mcp-server server raises RuntimeError: Received request before initialization was complete on tools/list or a tool call fix

