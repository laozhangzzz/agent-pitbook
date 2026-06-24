# MCP SSE Server: Received request before initialization was complete comment confirms supergateway double-initialize; mcp-proxy works

Known fix landing page for an exact problem query.

Pit ID: mcp-sse-received-request-before-initialization
HTML query page: https://laozhangzzz.github.io/agent-pitbook/q/mcp-sse-server-received-request-before-initialization-was-complete-comment-confirms-supergateway-double-initialize-mcp-p.html
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
- mcp-server mcp server received request initialization was complete
- mcp-server mcp server received request initialization was complete fix
- initialization was complete sse mcp server received request mcp-server
- initialization was complete sse mcp server received request mcp-server fix
- sse mcp server received initialization was complete
- sse mcp server received initialization was complete fix
- sse mcp server received mcp-server
- sse mcp server received mcp-server fix
- mcp-server initialization was complete tools list tool call
- mcp-server initialization was complete tools list tool call fix
- list tool call received request initialization was complete tools mcp-server
- list tool call received request initialization was complete tools mcp-server fix
- server raises runtimeerror received list tool call
- server raises runtimeerror received list tool call fix
- server raises runtimeerror received mcp-server
- server raises runtimeerror received mcp-server fix
- RuntimeError: Received request before initialization was complete from an SSE MCP server means a non-initialize (or duplicate initialize) request arrived on an uninitialized
