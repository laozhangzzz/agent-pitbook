# MCP TypeScript client times out long tool calls after 60s (-32001) unless you reset on progress

Pit ID: mcp-ts-client-default-60s-request-timeout
Status: verified
Confidence: high
Updated: 2026-06-21
Canonical source: https://github.com/laozhangzzz/agent-pitbook/blob/main/pits/mcp/mcp-ts-client-default-60s-request-timeout.md
GitHub known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/32

## Summary

The MCP TypeScript/JS client defaults to a 60000 ms per-request timeout; long tool calls fail with 'MCP error -32001: Request timed out' even with server progress. Pass request options to callTool with a larger timeout and resetTimeoutOnProgress: true so progress notifications extend the deadline.

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

## Common Search Queries

- mcp-ts-client-default-60s-request-timeout
- mcp ts client default 60s request timeout
- MCP TypeScript client times out long tool calls after 60s (-32001) unless you reset on progress
- MCP TypeScript client times out long tool calls after 60s (-32001) unless you reset on progress fix
- MCP TypeScript client times out long tool calls after 60s (-32001) unless you reset on progress root cause
- typescript-sdk
- timeout
- error-32001
- progress
- long-running
- mcp-server
- McpError: MCP error -32001: Request timed out with data: { timeout: 60000 }
- the tool finishes fine from the Python client but times out from the TS/JS client
- setting a timeout on connect alone does not help
- the server sends periodic progress yet the client gives up at 60s
- The default per-request timeout is 60000 ms
- Progress notifications only extend it when resetTimeoutOnProgress is enabled
- The timeout must be set in the per-request options passed to callTool, not only on connect/transport
- Setting timeout only on connect and expecting per-call requests to inherit it
- Relying on server progress without resetTimeoutOnProgress: true
- Break very long operations into shorter calls if you cannot stream progress
- modelcontextprotocol/typescript-sdk issue 245: mcp client times out after 60 seconds (ignoring timeout option); comments confirm callTool request options and resetTimeoutOnProgress
- mcp client times out after 60 seconds (ignoring timeout option); comments confirm callTool request options and resetTimeoutOnProgress
- mcp client times out after 60 seconds (ignoring timeout option); comments confirm callTool request options and resetTimeoutOnProgress fix

## Affected Tools

- mcp-server
- typescript-sdk

## Tags

- mcp
- typescript-sdk
- timeout
- error-32001
- progress
- long-running

## Symptoms

- McpError: MCP error -32001: Request timed out with data: { timeout: 60000 }
- the tool finishes fine from the Python client but times out from the TS/JS client
- setting a timeout on connect alone does not help
- the server sends periodic progress yet the client gives up at 60s

## Environment

- language: TypeScript
- runtime: Node.js
- constraints: default request timeout 60000 ms, progress only resets timeout when enabled

## Root Cause

- The default per-request timeout is 60000 ms.
- Progress notifications only extend it when resetTimeoutOnProgress is enabled.
- The timeout must be set in the per-request options passed to callTool, not only on connect/transport.

## Fix

1. Pass request options as the third argument to callTool with a larger timeout and resetTimeoutOnProgress: true.

Rationale: This is the per-request option set; connect-level options do not apply to each call.
2. Ensure the server emits progress notifications during the long operation so the reset can fire.
3. For very long jobs, also consider setting maxTotalTimeout as a hard ceiling.

## Verification

- Run a tool call that exceeds 60 seconds with the options set. Expected: It completes and returns a result with no -32001: Request timed out.

## Sources

- modelcontextprotocol/typescript-sdk issue 245: mcp client times out after 60 seconds (ignoring timeout option); comments confirm callTool request options and resetTimeoutOnProgress (issue): https://github.com/modelcontextprotocol/typescript-sdk/issues/245

## Workarounds

- Break very long operations into shorter calls if you cannot stream progress.

## Anti-patterns

- Setting timeout only on connect and expecting per-call requests to inherit it.
- Relying on server progress without resetTimeoutOnProgress: true.

