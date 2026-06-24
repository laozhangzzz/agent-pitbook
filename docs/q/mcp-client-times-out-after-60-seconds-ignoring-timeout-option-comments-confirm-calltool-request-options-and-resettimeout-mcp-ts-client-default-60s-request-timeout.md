# mcp client times out after 60 seconds (ignoring timeout option); comments confirm callTool request options and resetTimeoutOnProgress fix

Known fix landing page for an exact problem query.

Pit ID: mcp-ts-client-default-60s-request-timeout
HTML query page: https://laozhangzzz.github.io/agent-pitbook/q/mcp-client-times-out-after-60-seconds-ignoring-timeout-option-comments-confirm-calltool-request-options-and-resettimeout-mcp-ts-client-default-60s-request-timeout.html
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
- mcp-server after 60s 32001 unless you reset progress
- mcp-server after 60s 32001 unless you reset progress fix
- you reset progress tool calls after 60s 32001 unless mcp-server
- you reset progress tool calls after 60s 32001 unless mcp-server fix
- mcp typescript client times you reset progress
- mcp typescript client times you reset progress fix
- mcp typescript client times mcp-server
- mcp typescript client times mcp-server fix
- mcp-server 32001 request timed out data timeout 60000
- mcp-server 32001 request timed out data timeout 60000 fix
- data timeout 60000 mcp error 32001 request timed out mcp-server
- data timeout 60000 mcp error 32001 request timed out mcp-server fix
- mcperror mcp error 32001 data timeout 60000
- mcperror mcp error 32001 data timeout 60000 fix
- mcperror mcp error 32001 mcp-server
- mcperror mcp error 32001 mcp-server fix
- MCP error -32001: Request timed out even with server progress
