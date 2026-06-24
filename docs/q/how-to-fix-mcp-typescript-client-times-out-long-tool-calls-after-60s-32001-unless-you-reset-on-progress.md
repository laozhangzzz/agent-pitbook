# how to fix MCP TypeScript client times out long tool calls after 60s (-32001) unless you reset on progress

Known fix landing page for an exact problem query.

Pit ID: mcp-ts-client-default-60s-request-timeout
HTML query page: https://laozhangzzz.github.io/agent-pitbook/q/how-to-fix-mcp-typescript-client-times-out-long-tool-calls-after-60s-32001-unless-you-reset-on-progress.html
Full pit HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-ts-client-default-60s-request-timeout.html
Full pit Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-ts-client-default-60s-request-timeout.md
GitHub known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/32

## Fast Answer

- Problem: McpError: MCP error -32001: Request timed out with data: { timeout: 60000 }
- Root cause: The default per-request timeout is 60000 ms.
- Fix first: Pass request options as the third argument to callTool with a larger timeout and resetTimeoutOnProgress: true.
- Verify: Run a tool call that exceeds 60 seconds with the options set.

## Queries This Answers

- mcp client times out after 60 seconds (ignoring timeout option); comments confirm callTool request options and resetTimeoutOnProgress
- mcp client times out after 60 seconds (ignoring timeout option); comments confirm callTool request options and resetTimeoutOnProgress fix
- mcp client times out after 60 seconds (ignoring timeout option); comments confirm callTool request options and resetTimeoutOnProgress root cause
- MCP TypeScript client times out long tool calls after 60s (-32001) unless you reset on progress
- MCP TypeScript client times out long tool calls after 60s (-32001) unless you reset on progress fix
- MCP TypeScript client times out long tool calls after 60s (-32001) unless you reset on progress root cause
- how to fix MCP TypeScript client times out long tool calls after 60s (-32001) unless you reset on progress
- MCP error -32001: Request timed out even with server progress
- MCP error -32001: Request timed out even with server progress fix
- mcp-server MCP error -32001: Request timed out even with server progress
- mcp-server MCP error -32001: Request timed out even with server progress fix
- typescript-sdk MCP error -32001: Request timed out even with server progress
- typescript-sdk MCP error -32001: Request timed out even with server progress fix
- MCP error -32001: Request timed out with data: { timeout: 60000 }
- MCP error -32001: Request timed out with data: { timeout: 60000 } fix
- mcp-server MCP error -32001: Request timed out with data: { timeout: 60000 }
- mcp-server MCP error -32001: Request timed out with data: { timeout: 60000 } fix
- typescript-sdk MCP error -32001: Request timed out with data: { timeout: 60000 }
- typescript-sdk MCP error -32001: Request timed out with data: { timeout: 60000 } fix
- McpError: MCP error -32001: Request timed out with data: { timeout: 60000 }
- McpError: MCP error -32001: Request timed out with data: { timeout: 60000 } fix
- mcp-server McpError: MCP error -32001: Request timed out with data: { timeout: 60000 }
- mcp-server McpError: MCP error -32001: Request timed out with data: { timeout: 60000 } fix
- typescript-sdk McpError: MCP error -32001: Request timed out with data: { timeout: 60000 }

