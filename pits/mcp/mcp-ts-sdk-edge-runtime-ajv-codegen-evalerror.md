---
id: mcp-ts-sdk-edge-runtime-ajv-codegen-evalerror
title: MCP TS SDK validation fails on Cloudflare Workers with EvalError (AJV code generation)
status: candidate
confidence: medium
created_at: 2026-06-21
updated_at: 2026-06-21
last_verified: 2026-06-21
tags: [mcp, typescript-sdk, cloudflare-workers, edge, ajv, elicitation, evalerror]
affected_tools: [mcp-server, typescript-sdk]
---

# MCP TS SDK validation fails on Cloudflare Workers with EvalError (AJV code generation)

## Summary

Schema validation in `@modelcontextprotocol/sdk` (for example during the elicitation flow) fails on Cloudflare Workers and similar edge runtimes with `EvalError: Code generation from strings disallowed for this context`. AJV v6 compiles schemas with `new Function`, which edge runtimes forbid.

## Symptoms

- `EvalError: Code generation from strings disallowed for this context`, with a stack through `new Function` and `Ajv.localCompile`.
- Occurs on Cloudflare Workers (or other `no-eval` edge runtimes), not on Node.
- Triggered by schema validation, e.g. after responding to an `elicitInput` request.

## Root Cause

The SDK validates JSON Schema with AJV v6, which generates validator code at runtime via `new Function`. Edge runtimes such as Cloudflare Workers disallow dynamic code generation from strings, so the validator construction throws `EvalError`.

## Fix

1. On Cloudflare specifically, use Cloudflare's `McpAgent` integration, which added elicitation support; call elicitation on the `McpAgent` class, not on `mcpServer.server`.
2. Use an SDK build/fork that does not depend on AJV's `new Function` codegen and lets you inject a validator compatible with edge runtimes (e.g. `@cfworker/json-schema`).
3. Track the upstream migration off AJV v6 (to AJV 8 with `strict:false`, or a standard-schema validator) and upgrade when it lands.

## Verification

The validation step (e.g. elicitation response) completes on the edge runtime with no `EvalError: Code generation from strings disallowed`.

## Anti-Patterns

- Assuming Node-tested MCP server code runs unchanged on Cloudflare Workers; edge `no-eval` policies break `new Function`-based libraries.
- Calling elicitation on `mcpServer.server` instead of Cloudflare's `McpAgent`.

<!-- pit-record
{
  "id": "mcp-ts-sdk-edge-runtime-ajv-codegen-evalerror",
  "title": "MCP TS SDK validation fails on Cloudflare Workers with EvalError (AJV code generation)",
  "summary": "Schema validation in @modelcontextprotocol/sdk (e.g. elicitation) fails on Cloudflare Workers and similar edge runtimes with 'EvalError: Code generation from strings disallowed' because AJV v6 compiles schemas with new Function, which edge runtimes forbid. Use Cloudflare's McpAgent, or an SDK build that lets you inject an edge-compatible validator.",
  "status": "candidate",
  "confidence": "medium",
  "created_at": "2026-06-21",
  "updated_at": "2026-06-21",
  "last_verified": "2026-06-21",
  "tags": ["mcp", "typescript-sdk", "cloudflare-workers", "edge", "ajv", "elicitation", "evalerror"],
  "affected_tools": ["mcp-server", "typescript-sdk"],
  "symptoms": [
    "EvalError: Code generation from strings disallowed for this context, with a stack through new Function and Ajv.localCompile",
    "occurs on Cloudflare Workers or other no-eval edge runtimes, not on Node",
    "triggered by schema validation, e.g. after responding to an elicitInput request"
  ],
  "environment": {
    "language": "TypeScript",
    "runtime": "Cloudflare Workers / edge",
    "constraints": ["edge runtime disallows dynamic code generation from strings", "AJV v6 uses new Function"]
  },
  "root_cause": [
    "The SDK validates JSON Schema with AJV v6, which generates validator code at runtime via new Function.",
    "Edge runtimes such as Cloudflare Workers disallow dynamic code generation from strings, so validator construction throws EvalError."
  ],
  "fix": [
    {
      "step": "On Cloudflare, use the McpAgent integration that added elicitation support; call elicitation on the McpAgent class, not mcpServer.server."
    },
    {
      "step": "Use an SDK build/fork without AJV new Function codegen that lets you inject an edge-compatible validator (e.g. @cfworker/json-schema)."
    },
    {
      "step": "Track the upstream migration off AJV v6 (AJV 8 with strict:false, or a standard-schema validator) and upgrade when it lands."
    }
  ],
  "verification": [
    {
      "method": "Run the validation/elicitation path on the edge runtime.",
      "expected": "Completes with no EvalError: Code generation from strings disallowed."
    }
  ],
  "workarounds": [
    "Move schema validation to a Node-hosted component if the edge runtime cannot run the validator."
  ],
  "anti_patterns": [
    "Assuming Node-tested MCP server code runs unchanged on Cloudflare Workers.",
    "Calling elicitation on mcpServer.server instead of Cloudflare's McpAgent."
  ],
  "source_links": [
    {
      "title": "modelcontextprotocol/typescript-sdk issue 689: Elicitation feature fails on Cloudflare Workers due to AJV code generation (EvalError)",
      "type": "issue",
      "url": "https://github.com/modelcontextprotocol/typescript-sdk/issues/689",
      "accessed_at": "2026-06-21"
    },
    {
      "title": "Cloudflare changelog: MCP elicitation support on McpAgent",
      "type": "docs",
      "url": "https://developers.cloudflare.com/changelog/2025-08-05-agents-mcp-update/",
      "accessed_at": "2026-06-21"
    }
  ],
  "related": [],
  "safety": {
    "external_text_trusted": false,
    "requires_confirmation": false,
    "notes": ["Status candidate: upstream AJV migration was still pending at time of writing; verify current SDK behavior."]
  }
}
-->
