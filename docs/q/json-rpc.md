# JSON-RPC

Known fix landing page for an exact problem query.

Pit ID: mcp-stdio-stdout-logging-breaks-protocol
HTML query page: https://laozhangzzz.github.io/agent-pitbook/q/json-rpc.html
Full pit HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-stdio-stdout-logging-breaks-protocol.html
Full pit Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-stdio-stdout-logging-breaks-protocol.md
GitHub known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/29

## Fast Answer

- Problem: client error SyntaxError: ... is not valid JSON inside deserializeMessage / JSON.parse
- Root cause: In the stdio transport, stdout is the JSON-RPC channel.
- Fix first: Remove or redirect all stdout writes in the server; use stderr.
- Verify: Call a tool after moving logging to stderr.

## Queries This Answers

- SyntaxError in stdio deserializeMessage a console.log in the server triggers it
- SyntaxError in stdio deserializeMessage (a console.log in the server triggers it) fix
- SyntaxError in stdio deserializeMessage (a console.log in the server triggers it) root cause
- Writing to stdout in a stdio MCP server corrupts the JSON-RPC stream
- Writing to stdout in a stdio MCP server corrupts the JSON-RPC stream fix
- Writing to stdout in a stdio MCP server corrupts the JSON-RPC stream root cause
- how to fix Writing to stdout in a stdio MCP server corrupts the JSON-RPC stream
- JSON-RPC
- JSON-RPC fix
- mcp-server JSON-RPC
- mcp-server JSON-RPC fix
- typescript-sdk JSON-RPC
- typescript-sdk JSON-RPC fix
- python-sdk JSON-RPC
- python-sdk JSON-RPC fix
- client error SyntaxError: ... is not valid JSON inside deserializeMessage / JSON.parse
- how to fix client error SyntaxError: ... is not valid JSON inside deserializeMessage / JSON.parse
- client error SyntaxError: ... is not valid JSON inside deserializeMessage / JSON.parse root cause
- mcp-server client error SyntaxError: ... is not valid JSON inside deserializeMessage / JSON.parse
- mcp-server client error SyntaxError: ... is not valid JSON inside deserializeMessage / JSON.parse fix
- typescript-sdk client error SyntaxError: ... is not valid JSON inside deserializeMessage / JSON.parse
- typescript-sdk client error SyntaxError: ... is not valid JSON inside deserializeMessage / JSON.parse fix
- python-sdk client error SyntaxError: ... is not valid JSON inside deserializeMessage / JSON.parse
- python-sdk client error SyntaxError: ... is not valid JSON inside deserializeMessage / JSON.parse fix

