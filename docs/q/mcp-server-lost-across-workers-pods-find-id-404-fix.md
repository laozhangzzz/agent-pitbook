# mcp-server lost across workers pods find id 404 fix

Known fix landing page for an exact problem query.

Pit ID: mcp-sse-session-lost-multi-worker
HTML query page: https://laozhangzzz.github.io/agent-pitbook/q/mcp-server-lost-across-workers-pods-find-id-404-fix.html
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
- mcp-server lost across workers pods find id 404
- mcp-server lost across workers pods find id 404 fix
- find id 404 sse session lost across workers pods mcp-server
- find id 404 sse session lost across workers pods mcp-server fix
- mcp sse session lost find id 404
- mcp sse session lost find id 404 fix
- mcp sse session lost mcp-server
- mcp sse session lost mcp-server fix
- mcp-server post returns 202 later posts return 404
- mcp-server post returns 202 later posts return 404 fix
- posts return 404 200 first post returns 202 later mcp-server
- posts return 404 200 first post returns 202 later mcp-server fix
- sse connection opens 200 posts return 404
- sse connection opens 200 posts return 404 fix
- sse connection opens 200 mcp-server
- sse connection opens 200 mcp-server fix
- POST fix
