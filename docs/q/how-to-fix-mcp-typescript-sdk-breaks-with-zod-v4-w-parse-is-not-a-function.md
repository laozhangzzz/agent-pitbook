# how to fix MCP TypeScript SDK breaks with Zod v4: w._parse is not a function

Known fix landing page for an exact problem query.

Pit ID: mcp-ts-sdk-zod-v4-incompatible
HTML query page: https://laozhangzzz.github.io/agent-pitbook/q/how-to-fix-mcp-typescript-sdk-breaks-with-zod-v4-w-parse-is-not-a-function.html
Full pit HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-ts-sdk-zod-v4-incompatible.html
Full pit Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-ts-sdk-zod-v4-incompatible.md
GitHub known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/36

## Fast Answer

- Problem: tool execution returns {"code":-32603,"message":"w._parse is not a function..."}
- Root cause: MCP SDK versions up to ~1.17.5 declare zod ^3.x and call Zod internal API (_def, _parse).
- Fix first: Quick unblock: pin Zod v3 and ensure a single Zod version resolves.
- Verify: Check the resolved Zod version and re-run a tool call.

## Queries This Answers

- MCP SDK v1.17.5 Incompatible with Zod v4 - Breaking Changes
- MCP SDK v1.17.5 Incompatible with Zod v4 - Breaking Changes fix
- MCP SDK v1.17.5 Incompatible with Zod v4 - Breaking Changes root cause
- MCP TypeScript SDK breaks with Zod v4: w._parse is not a function
- MCP TypeScript SDK breaks with Zod v4: w._parse is not a function fix
- MCP TypeScript SDK breaks with Zod v4: w._parse is not a function root cause
- how to fix MCP TypeScript SDK breaks with Zod v4: w._parse is not a function
- mcp-server typescript sdk breaks zod v4 parse function
- mcp-server typescript sdk breaks zod v4 parse function fix
- v4 parse function mcp typescript sdk breaks zod mcp-server
- v4 parse function mcp typescript sdk breaks zod mcp-server fix
- mcp typescript sdk breaks v4 parse function
- mcp typescript sdk breaks v4 parse function fix
- mcp typescript sdk breaks mcp-server
- mcp typescript sdk breaks mcp-server fix
- mcp-server execution returns code 32603 message parse function
- mcp-server execution returns code 32603 message parse function fix
- message parse function tool execution returns code 32603 mcp-server
- message parse function tool execution returns code 32603 mcp-server fix
- tool execution returns code message parse function
- tool execution returns code message parse function fix
- tool execution returns code mcp-server
- tool execution returns code mcp-server fix
- w._parse is not a function
