# MCP TypeScript SDK crashes in CommonJS projects with ERR_REQUIRE_ESM (pkce-challenge)

Pit ID: mcp-ts-sdk-commonjs-esm-pkce-challenge
Status: verified
Confidence: high
Updated: 2026-06-21
Canonical source: https://github.com/laozhangzzz/agent-pitbook/blob/main/pits/mcp/mcp-ts-sdk-commonjs-esm-pkce-challenge.md

## Summary

@modelcontextprotocol/sdk used from a CommonJS project (e.g. NestJS) can crash at MCP client init with ERR_REQUIRE_ESM because an older SDK CJS build statically require()s the ESM-only pkce-challenge. Upgrade the SDK to a version that dynamically imports it, or force pkce-challenge@5.0.0 via overrides.

## Common Search Queries

- mcp-ts-sdk-commonjs-esm-pkce-challenge
- mcp ts sdk commonjs esm pkce challenge
- MCP TypeScript SDK crashes in CommonJS projects with ERR_REQUIRE_ESM (pkce-challenge
- MCP TypeScript SDK crashes in CommonJS projects with ERR_REQUIRE_ESM (pkce-challenge) fix
- MCP TypeScript SDK crashes in CommonJS projects with ERR_REQUIRE_ESM (pkce-challenge) root cause
- typescript-sdk
- commonjs
- nestjs
- pkce-challenge
- dependencies
- mcp-server
- runtime crash on MCP client init: ERR_REQUIRE_ESM: require() of ES Module pkce-challenge is not supported. Use dynamic import() instead
- the project is CommonJS (often NestJS
- the error originates inside @modelcontextprotocol/sdk/dist/cjs/client/auth.js
- pkce-challenge shipped as ESM-only
- The SDK's CommonJS build used a static require('pkce-challenge'), which Node refuses for an ESM-only module from CJS, throwing at load time
- Pinning a very old SDK (e.g. 1.5.0) just to avoid pkce-challenge, losing later fixes
- Patching node_modules as a permanent solution instead of upgrading or using overrides
- Use package-manager overrides to pin pkce-challenge@5.0.0
- Temporarily import from the SDK's ESM dist
- modelcontextprotocol/typescript-sdk issue 217: @modelcontextprotocol/sdk fails in CommonJS projects due to incompatible ESM-only dependency (pkce-challenge
- crouchcd/pkce-challenge release 5.0.0 referenced as a compatible version
- mcp-server runtime crash on MCP client init: ERR_REQUIRE_ESM: require() of ES Module pkce-challenge is not supported. Use dynamic import() instead
- typescript-sdk runtime crash on MCP client init: ERR_REQUIRE_ESM: require() of ES Module pkce-challenge is not supported. Use dynamic import() instead

## Affected Tools

- mcp-server
- typescript-sdk

## Tags

- mcp
- typescript-sdk
- commonjs
- esm
- nestjs
- pkce-challenge
- dependencies

## Symptoms

- runtime crash on MCP client init: ERR_REQUIRE_ESM: require() of ES Module pkce-challenge is not supported. Use dynamic import() instead
- the project is CommonJS (often NestJS)
- the error originates inside @modelcontextprotocol/sdk/dist/cjs/client/auth.js

## Environment

- language: TypeScript
- runtime: Node.js
- framework: NestJS / CommonJS
- constraints: CommonJS module system, pkce-challenge shipped ESM-only

## Root Cause

- pkce-challenge shipped as ESM-only.
- The SDK's CommonJS build used a static require('pkce-challenge'), which Node refuses for an ESM-only module from CJS, throwing at load time.

## Fix

1. Upgrade @modelcontextprotocol/sdk to a version that lazily import()s pkce-challenge.
2. Or force a compatible pkce-challenge (5.0.0) via lockfile / package overrides so the CJS build can load it.
3. If you cannot upgrade, import from the SDK's ESM build, or as a stopgap apply the community patch that converts the static require to a dynamic import().

## Verification

- Start the CommonJS app and initialize the MCP client. Expected: No ERR_REQUIRE_ESM for pkce-challenge.

## Sources

- modelcontextprotocol/typescript-sdk issue 217: @modelcontextprotocol/sdk fails in CommonJS projects due to incompatible ESM-only dependency (pkce-challenge) (issue): https://github.com/modelcontextprotocol/typescript-sdk/issues/217
- crouchcd/pkce-challenge release 5.0.0 referenced as a compatible version (release-note): https://github.com/crouchcd/pkce-challenge/releases/tag/5.0.0

## Workarounds

- Use package-manager overrides to pin pkce-challenge@5.0.0.
- Temporarily import from the SDK's ESM dist.

## Anti-patterns

- Pinning a very old SDK (e.g. 1.5.0) just to avoid pkce-challenge, losing later fixes.
- Patching node_modules as a permanent solution instead of upgrading or using overrides.

