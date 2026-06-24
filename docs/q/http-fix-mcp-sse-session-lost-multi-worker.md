# HTTP fix

Known fix landing page for an exact problem query.

Pit ID: mcp-sse-session-lost-multi-worker
HTML query page: https://laozhangzzz.github.io/agent-pitbook/q/http-fix-mcp-sse-session-lost-multi-worker.html
Full pit HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-sse-session-lost-multi-worker.html
Full pit Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-sse-session-lost-multi-worker.md
GitHub known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/26

## Fast Answer

- Problem: SSE connection opens (200), first POST returns 202, later POSTs return 404
- Root cause: The SSE transport is stateful: the session lives in the memory of the worker/pod that accepted the SSE connection.
- Fix first: Preferred: run stateless with Streamable HTTP so no per-connection in-memory session is required.
- Verify: Send repeated messages on one session under a multi-instance deployment after the change.

## Queries This Answers

- MCP Server Session Lost in Multi-Worker Environment comments confirm stateless_http=True and ingress sticky-hash fixes
- MCP Server Session Lost in Multi-Worker Environment (comments confirm stateless_http=True and ingress sticky-hash fixes) fix
- MCP Server Session Lost in Multi-Worker Environment (comments confirm stateless_http=True and ingress sticky-hash fixes) root cause
- MCP SSE session lost across workers/pods: Could not find session for ID 404
- MCP SSE session lost across workers/pods: Could not find session for ID (404) fix
- MCP SSE session lost across workers/pods: Could not find session for ID (404) root cause
- how to fix MCP SSE session lost across workers/pods: Could not find session for ID 404
- POST fix
- mcp-server POST
- mcp-server POST fix
- python-sdk POST
- python-sdk POST fix
- fastmcp POST
- fastmcp POST fix
- HTTP fix
- mcp-server HTTP
- mcp-server HTTP fix
- python-sdk HTTP
- python-sdk HTTP fix
- fastmcp HTTP
- fastmcp HTTP fix
- WARNING fix
- mcp-server WARNING
- mcp-server WARNING fix

