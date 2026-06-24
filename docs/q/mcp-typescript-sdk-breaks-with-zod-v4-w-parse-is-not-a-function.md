# MCP TypeScript SDK breaks with Zod v4: w._parse is not a function

Known fix landing page for an exact problem query.

Pit ID: mcp-ts-sdk-zod-v4-incompatible
HTML query page: https://laozhangzzz.github.io/agent-pitbook/q/mcp-typescript-sdk-breaks-with-zod-v4-w-parse-is-not-a-function.html
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
- w._parse is not a function
- w._parse is not a function... fix
- mcp-server w._parse is not a function
- mcp-server w._parse is not a function... fix
- typescript-sdk w._parse is not a function
- typescript-sdk w._parse is not a function... fix
- tool execution returns {"code":-32603,"message":"w._parse is not a function..."}
- how to fix tool execution returns {"code":-32603,"message":"w._parse is not a function..."}
- tool execution returns {"code":-32603,"message":"w._parse is not a function..."} root cause
- mcp-server tool execution returns {"code":-32603,"message":"w._parse is not a function..."}
- mcp-server tool execution returns {"code":-32603,"message":"w._parse is not a function..."} fix
- typescript-sdk tool execution returns {"code":-32603,"message":"w._parse is not a function..."}
- typescript-sdk tool execution returns {"code":-32603,"message":"w._parse is not a function..."} fix
- tools/list fails with null is not an object evaluating F._def
- how to fix tools/list fails with null is not an object evaluating F._def
- tools/list fails with 'null is not an object (evaluating F._def)' root cause
- mcp-server tools/list fails with null is not an object evaluating F._def

