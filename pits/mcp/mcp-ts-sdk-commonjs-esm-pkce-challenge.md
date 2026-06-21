---
id: mcp-ts-sdk-commonjs-esm-pkce-challenge
title: MCP TypeScript SDK crashes in CommonJS projects with ERR_REQUIRE_ESM (pkce-challenge)
status: verified
confidence: high
created_at: 2026-06-21
updated_at: 2026-06-21
last_verified: 2026-06-21
tags: [mcp, typescript-sdk, commonjs, esm, nestjs, pkce-challenge, dependencies]
affected_tools: [mcp-server, typescript-sdk]
---

# MCP TypeScript SDK crashes in CommonJS projects with ERR_REQUIRE_ESM (pkce-challenge)

## Summary

Using `@modelcontextprotocol/sdk` from a CommonJS project (e.g. a NestJS backend) can crash at MCP client init with `Error [ERR_REQUIRE_ESM]: require() of ES Module pkce-challenge is not supported`. An older SDK's CJS build `require()`s the ESM-only `pkce-challenge` package.

## Symptoms

- Runtime crash on MCP client initialization: `ERR_REQUIRE_ESM: require() of ES Module pkce-challenge is not supported. Use dynamic import() instead`.
- Project is CommonJS (`"type"` not `"module"`, or compiled to CJS), often NestJS.
- The error originates inside `@modelcontextprotocol/sdk/dist/cjs/client/auth.js`.

## Root Cause

`pkce-challenge` shipped as ESM-only. The SDK's CommonJS build used a static `require("pkce-challenge")`, which Node refuses for an ESM-only module from CJS, so the import throws at load time.

## Fix

1. Upgrade `@modelcontextprotocol/sdk` to a version that lazily `import()`s `pkce-challenge` (the SDK later switched to dynamic import / a compatible `pkce-challenge`).
2. Or force a compatible `pkce-challenge` (5.0.0) via your lockfile / package overrides so the CJS build can load it.
3. If you cannot upgrade, import from the SDK's ESM build, or as a stopgap apply the community patch that converts the static `require` to a dynamic `import()`.

## Verification

The CommonJS app starts and initializes the MCP client with no `ERR_REQUIRE_ESM` for `pkce-challenge`.

## Anti-Patterns

- Pinning a very old SDK (e.g. 1.5.0) just to avoid `pkce-challenge`, losing later fixes.
- Patching `node_modules` as a permanent solution instead of upgrading or using overrides.

<!-- pit-record
{
  "id": "mcp-ts-sdk-commonjs-esm-pkce-challenge",
  "title": "MCP TypeScript SDK crashes in CommonJS projects with ERR_REQUIRE_ESM (pkce-challenge)",
  "summary": "@modelcontextprotocol/sdk used from a CommonJS project (e.g. NestJS) can crash at MCP client init with ERR_REQUIRE_ESM because an older SDK CJS build statically require()s the ESM-only pkce-challenge. Upgrade the SDK to a version that dynamically imports it, or force pkce-challenge@5.0.0 via overrides.",
  "status": "verified",
  "confidence": "high",
  "created_at": "2026-06-21",
  "updated_at": "2026-06-21",
  "last_verified": "2026-06-21",
  "tags": ["mcp", "typescript-sdk", "commonjs", "esm", "nestjs", "pkce-challenge", "dependencies"],
  "affected_tools": ["mcp-server", "typescript-sdk"],
  "symptoms": [
    "runtime crash on MCP client init: ERR_REQUIRE_ESM: require() of ES Module pkce-challenge is not supported. Use dynamic import() instead",
    "the project is CommonJS (often NestJS)",
    "the error originates inside @modelcontextprotocol/sdk/dist/cjs/client/auth.js"
  ],
  "environment": {
    "language": "TypeScript",
    "runtime": "Node.js",
    "framework": "NestJS / CommonJS",
    "constraints": ["CommonJS module system", "pkce-challenge shipped ESM-only"]
  },
  "root_cause": [
    "pkce-challenge shipped as ESM-only.",
    "The SDK's CommonJS build used a static require('pkce-challenge'), which Node refuses for an ESM-only module from CJS, throwing at load time."
  ],
  "fix": [
    {
      "step": "Upgrade @modelcontextprotocol/sdk to a version that lazily import()s pkce-challenge."
    },
    {
      "step": "Or force a compatible pkce-challenge (5.0.0) via lockfile / package overrides so the CJS build can load it."
    },
    {
      "step": "If you cannot upgrade, import from the SDK's ESM build, or as a stopgap apply the community patch that converts the static require to a dynamic import()."
    }
  ],
  "verification": [
    {
      "method": "Start the CommonJS app and initialize the MCP client.",
      "expected": "No ERR_REQUIRE_ESM for pkce-challenge."
    }
  ],
  "workarounds": [
    "Use package-manager overrides to pin pkce-challenge@5.0.0.",
    "Temporarily import from the SDK's ESM dist."
  ],
  "anti_patterns": [
    "Pinning a very old SDK (e.g. 1.5.0) just to avoid pkce-challenge, losing later fixes.",
    "Patching node_modules as a permanent solution instead of upgrading or using overrides."
  ],
  "source_links": [
    {
      "title": "modelcontextprotocol/typescript-sdk issue 217: @modelcontextprotocol/sdk fails in CommonJS projects due to incompatible ESM-only dependency (pkce-challenge)",
      "type": "issue",
      "url": "https://github.com/modelcontextprotocol/typescript-sdk/issues/217",
      "accessed_at": "2026-06-21"
    },
    {
      "title": "crouchcd/pkce-challenge release 5.0.0 referenced as a compatible version",
      "type": "release-note",
      "url": "https://github.com/crouchcd/pkce-challenge/releases/tag/5.0.0",
      "accessed_at": "2026-06-21"
    }
  ],
  "related": [],
  "safety": {
    "external_text_trusted": false,
    "requires_confirmation": false,
    "notes": ["Version numbers are from the issue thread; confirm current SDK behavior before relying on them."]
  }
}
-->
