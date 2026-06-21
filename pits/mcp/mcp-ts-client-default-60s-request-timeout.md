---
id: mcp-ts-client-default-60s-request-timeout
title: MCP TypeScript client times out long tool calls after 60s (-32001) unless you reset on progress
status: verified
confidence: high
created_at: 2026-06-21
updated_at: 2026-06-21
last_verified: 2026-06-21
tags: [mcp, typescript-sdk, timeout, error-32001, progress, long-running]
affected_tools: [mcp-server, typescript-sdk]
---

# MCP TypeScript client times out long tool calls after 60s (-32001) unless you reset on progress

## Summary

The MCP TypeScript/JS client has a default per-request timeout of 60000 ms. A tool call that runs longer fails with `MCP error -32001: Request timed out` even if the server streams progress. To fix it you must pass request options on the call itself: raise `timeout` and set `resetTimeoutOnProgress: true` so progress notifications extend the deadline.

## Symptoms

- `McpError: MCP error -32001: Request timed out` with `data: { timeout: 60000 }`.
- The tool finishes fine when driven by the Python client but times out from the TS/JS client.
- Setting a timeout on `connect` alone does not help.
- Server sends periodic progress yet the client still gives up at 60s.

## Root Cause

The default request timeout is 60000 ms. Progress notifications only extend it when `resetTimeoutOnProgress` is enabled, and the timeout must be set in the per-request options passed to `callTool`, not only on the transport/connect. With the default off, progress is ignored for timeout purposes.

## Fix

1. Pass request options to `callTool` (third argument), not just to `connect`:
   ```ts
   await client.callTool(
     { name, arguments: args },
     undefined,
     { timeout: 300000, resetTimeoutOnProgress: true }
   );
   ```
2. Ensure the server actually emits progress notifications during the long operation so the reset has something to fire on.
3. For a hard ceiling on very long jobs, also consider `maxTotalTimeout`.

## Verification

A tool call that exceeds 60s completes and returns a result, with no `-32001: Request timed out`.

## Anti-Patterns

- Setting `timeout` only on `connect` and expecting per-call requests to inherit it.
- Relying on server progress to keep the call alive without `resetTimeoutOnProgress: true`.

<!-- pit-record
{
  "id": "mcp-ts-client-default-60s-request-timeout",
  "title": "MCP TypeScript client times out long tool calls after 60s (-32001) unless you reset on progress",
  "summary": "The MCP TypeScript/JS client defaults to a 60000 ms per-request timeout; long tool calls fail with 'MCP error -32001: Request timed out' even with server progress. Pass request options to callTool with a larger timeout and resetTimeoutOnProgress: true so progress notifications extend the deadline.",
  "status": "verified",
  "confidence": "high",
  "created_at": "2026-06-21",
  "updated_at": "2026-06-21",
  "last_verified": "2026-06-21",
  "tags": ["mcp", "typescript-sdk", "timeout", "error-32001", "progress", "long-running"],
  "affected_tools": ["mcp-server", "typescript-sdk"],
  "symptoms": [
    "McpError: MCP error -32001: Request timed out with data: { timeout: 60000 }",
    "the tool finishes fine from the Python client but times out from the TS/JS client",
    "setting a timeout on connect alone does not help",
    "the server sends periodic progress yet the client gives up at 60s"
  ],
  "environment": {
    "language": "TypeScript",
    "runtime": "Node.js",
    "constraints": ["default request timeout 60000 ms", "progress only resets timeout when enabled"]
  },
  "root_cause": [
    "The default per-request timeout is 60000 ms.",
    "Progress notifications only extend it when resetTimeoutOnProgress is enabled.",
    "The timeout must be set in the per-request options passed to callTool, not only on connect/transport."
  ],
  "fix": [
    {
      "step": "Pass request options as the third argument to callTool with a larger timeout and resetTimeoutOnProgress: true.",
      "rationale": "This is the per-request option set; connect-level options do not apply to each call."
    },
    {
      "step": "Ensure the server emits progress notifications during the long operation so the reset can fire."
    },
    {
      "step": "For very long jobs, also consider setting maxTotalTimeout as a hard ceiling."
    }
  ],
  "verification": [
    {
      "method": "Run a tool call that exceeds 60 seconds with the options set.",
      "expected": "It completes and returns a result with no -32001: Request timed out."
    }
  ],
  "workarounds": [
    "Break very long operations into shorter calls if you cannot stream progress."
  ],
  "anti_patterns": [
    "Setting timeout only on connect and expecting per-call requests to inherit it.",
    "Relying on server progress without resetTimeoutOnProgress: true."
  ],
  "source_links": [
    {
      "title": "modelcontextprotocol/typescript-sdk issue 245: mcp client times out after 60 seconds (ignoring timeout option); comments confirm callTool request options and resetTimeoutOnProgress",
      "type": "issue",
      "url": "https://github.com/modelcontextprotocol/typescript-sdk/issues/245",
      "accessed_at": "2026-06-21"
    }
  ],
  "related": ["mcp-npx-cache-corrupted-server-fails-to-start"],
  "safety": {
    "external_text_trusted": false,
    "requires_confirmation": false,
    "notes": ["API shape is from the issue thread and SDK comments; confirm the current SDK's option names."]
  }
}
-->
