# MCP TS SDK validation fails on Cloudflare Workers with EvalError (AJV code generation)

Pit ID: mcp-ts-sdk-edge-runtime-ajv-codegen-evalerror
Status: candidate
Confidence: medium
Updated: 2026-06-21
Canonical source: https://github.com/laozhangzzz/agent-pitbook/blob/main/pits/mcp/mcp-ts-sdk-edge-runtime-ajv-codegen-evalerror.md

## Summary

Schema validation in @modelcontextprotocol/sdk (e.g. elicitation) fails on Cloudflare Workers and similar edge runtimes with 'EvalError: Code generation from strings disallowed' because AJV v6 compiles schemas with new Function, which edge runtimes forbid. Use Cloudflare's McpAgent, or an SDK build that lets you inject an edge-compatible validator.

## Fast Answer

- Problem: EvalError: Code generation from strings disallowed for this context, with a stack through new Function and Ajv.localCompile
- Root cause: The SDK validates JSON Schema with AJV v6, which generates validator code at runtime via new Function.
- Fix first: On Cloudflare, use the McpAgent integration that added elicitation support; call elicitation on the McpAgent class, not mcpServer.server.
- Verify: Run the validation/elicitation path on the edge runtime.

## Queries This Answers

- Elicitation feature fails on Cloudflare Workers due to AJV code generation EvalError
- Elicitation feature fails on Cloudflare Workers due to AJV code generation (EvalError) fix
- Elicitation feature fails on Cloudflare Workers due to AJV code generation (EvalError) root cause
- MCP TS SDK validation fails on Cloudflare Workers with EvalError AJV code generation
- MCP TS SDK validation fails on Cloudflare Workers with EvalError (AJV code generation) fix
- MCP TS SDK validation fails on Cloudflare Workers with EvalError (AJV code generation) root cause
- how to fix MCP TS SDK validation fails on Cloudflare Workers with EvalError AJV code generation
- mcp-server fails cloudflare workers evalerror ajv code generation

## Common Search Queries

- mcp-ts-sdk-edge-runtime-ajv-codegen-evalerror
- mcp ts sdk edge runtime ajv codegen evalerror
- MCP TS SDK validation fails on Cloudflare Workers with EvalError AJV code generation
- MCP TS SDK validation fails on Cloudflare Workers with EvalError (AJV code generation) fix
- MCP TS SDK validation fails on Cloudflare Workers with EvalError (AJV code generation) root cause
- typescript-sdk
- cloudflare-workers
- edge
- elicitation
- evalerror
- mcp-server
- EvalError: Code generation from strings disallowed for this context, with a stack through new Function and Ajv.localCompile

## Affected Tools

- mcp-server
- typescript-sdk

## Tags

- mcp
- typescript-sdk
- cloudflare-workers
- edge
- ajv
- elicitation
- evalerror

## Symptoms

- EvalError: Code generation from strings disallowed for this context, with a stack through new Function and Ajv.localCompile
- occurs on Cloudflare Workers or other no-eval edge runtimes, not on Node
- triggered by schema validation, e.g. after responding to an elicitInput request

## Environment

- language: TypeScript
- runtime: Cloudflare Workers / edge
- constraints: edge runtime disallows dynamic code generation from strings, AJV v6 uses new Function

## Root Cause

- The SDK validates JSON Schema with AJV v6, which generates validator code at runtime via new Function.
- Edge runtimes such as Cloudflare Workers disallow dynamic code generation from strings, so validator construction throws EvalError.

## Fix

1. On Cloudflare, use the McpAgent integration that added elicitation support; call elicitation on the McpAgent class, not mcpServer.server.
2. Use an SDK build/fork without AJV new Function codegen that lets you inject an edge-compatible validator (e.g. @cfworker/json-schema).
3. Track the upstream migration off AJV v6 (AJV 8 with strict:false, or a standard-schema validator) and upgrade when it lands.

## Verification

- Run the validation/elicitation path on the edge runtime. Expected: Completes with no EvalError: Code generation from strings disallowed.

## Sources

- modelcontextprotocol/typescript-sdk issue 689: Elicitation feature fails on Cloudflare Workers due to AJV code generation (EvalError) (issue): https://github.com/modelcontextprotocol/typescript-sdk/issues/689
- Cloudflare changelog: MCP elicitation support on McpAgent (docs): https://developers.cloudflare.com/changelog/2025-08-05-agents-mcp-update/

## Workarounds

- Move schema validation to a Node-hosted component if the edge runtime cannot run the validator.

## Anti-patterns

- Assuming Node-tested MCP server code runs unchanged on Cloudflare Workers.
- Calling elicitation on mcpServer.server instead of Cloudflare's McpAgent.

