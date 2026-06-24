# writing stdout stdio mcp json rpc stream fix

Known fix landing page for an exact problem query.

Pit ID: mcp-stdio-stdout-logging-breaks-protocol
HTML query page: https://laozhangzzz.github.io/agent-pitbook/q/writing-stdout-stdio-mcp-json-rpc-stream-fix.html
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
- mcp-server stdio mcp server corrupts json rpc stream
- mcp-server stdio mcp server corrupts json rpc stream fix
- json rpc stream writing stdout stdio mcp server corrupts mcp-server
- json rpc stream writing stdout stdio mcp server corrupts mcp-server fix
- writing stdout stdio mcp json rpc stream
- writing stdout stdio mcp json rpc stream fix
- writing stdout stdio mcp mcp-server
- writing stdout stdio mcp mcp-server fix
- mcp-server client error syntaxerror valid json deserializemessage parse
- mcp-server client error syntaxerror valid json deserializemessage parse fix
- json deserializemessage parse client error syntaxerror valid mcp-server
- json deserializemessage parse client error syntaxerror valid mcp-server fix
- client error syntaxerror valid json deserializemessage parse
- client error syntaxerror valid json deserializemessage parse fix
- client error syntaxerror valid mcp-server
- client error syntaxerror valid mcp-server fix
- JSON-RPC
