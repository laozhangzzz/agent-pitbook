# MCP TypeScript SDK crashes in CommonJS projects with ERR_REQUIRE_ESM (pkce-challenge)

Pit ID: mcp-ts-sdk-commonjs-esm-pkce-challenge
Status: verified
Confidence: high
Updated: 2026-06-21
Canonical source: https://github.com/laozhangzzz/agent-pitbook/blob/main/pits/mcp/mcp-ts-sdk-commonjs-esm-pkce-challenge.md
GitHub known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/33

## Summary

@modelcontextprotocol/sdk used from a CommonJS project (e.g. NestJS) can crash at MCP client init with ERR_REQUIRE_ESM because an older SDK CJS build statically require()s the ESM-only pkce-challenge. Upgrade the SDK to a version that dynamically imports it, or force pkce-challenge@5.0.0 via overrides.

## Fast Answer

- Problem: runtime crash on MCP client init: ERR_REQUIRE_ESM: require() of ES Module pkce-challenge is not supported. Use dynamic import() instead
- Root cause: pkce-challenge shipped as ESM-only.
- Fix first: Upgrade @modelcontextprotocol/sdk to a version that lazily import()s pkce-challenge.
- Verify: Start the CommonJS app and initialize the MCP client.

## Queries This Answers

- @modelcontextprotocol/sdk fails in CommonJS projects due to incompatible ESM-only dependency pkce-challenge
- @modelcontextprotocol/sdk fails in CommonJS projects due to incompatible ESM-only dependency (pkce-challenge) fix
- @modelcontextprotocol/sdk fails in CommonJS projects due to incompatible ESM-only dependency (pkce-challenge) root cause
- MCP TypeScript SDK crashes in CommonJS projects with ERR_REQUIRE_ESM pkce-challenge
- MCP TypeScript SDK crashes in CommonJS projects with ERR_REQUIRE_ESM (pkce-challenge) fix
- MCP TypeScript SDK crashes in CommonJS projects with ERR_REQUIRE_ESM (pkce-challenge) root cause
- how to fix MCP TypeScript SDK crashes in CommonJS projects with ERR_REQUIRE_ESM pkce-challenge
- mcp-server commonjs projects err require esm pkce challenge
- mcp-server commonjs projects err require esm pkce challenge fix
- esm pkce challenge sdk crashes commonjs projects err require mcp-server
- esm pkce challenge sdk crashes commonjs projects err require mcp-server fix
- mcp typescript sdk crashes esm pkce challenge
- mcp typescript sdk crashes esm pkce challenge fix
- mcp typescript sdk crashes mcp-server
- mcp typescript sdk crashes mcp-server fix
- mcp-server module pkce challenge supported dynamic import instead
- mcp-server module pkce challenge supported dynamic import instead fix
- dynamic import instead esm es module pkce challenge supported mcp-server
- dynamic import instead esm es module pkce challenge supported mcp-server fix
- runtime crash mcp client dynamic import instead
- runtime crash mcp client dynamic import instead fix
- runtime crash mcp client mcp-server
- runtime crash mcp client mcp-server fix
- ERR_REQUIRE_ESM

## Common Search Queries

- mcp-ts-sdk-commonjs-esm-pkce-challenge
- mcp ts sdk commonjs esm pkce challenge
- MCP TypeScript SDK crashes in CommonJS projects with ERR_REQUIRE_ESM pkce-challenge
- MCP TypeScript SDK crashes in CommonJS projects with ERR_REQUIRE_ESM (pkce-challenge) fix
- MCP TypeScript SDK crashes in CommonJS projects with ERR_REQUIRE_ESM (pkce-challenge) root cause
- typescript-sdk
- commonjs
- nestjs
- pkce-challenge
- dependencies
- mcp-server
- runtime crash on MCP client init: ERR_REQUIRE_ESM: require() of ES Module pkce-challenge is not supported. Use dynamic import() instead
- the project is CommonJS often NestJS
- the error originates inside @modelcontextprotocol/sdk/dist/cjs/client/auth.js
- pkce-challenge shipped as ESM-only
- The SDKs CommonJS build used a static require(pkce-challenge), which Node refuses for an ESM-only module from CJS, throwing at load time
- Pinning a very old SDK (e.g. 1.5.0) just to avoid pkce-challenge, losing later fixes
- Patching node_modules as a permanent solution instead of upgrading or using overrides
- Use package-manager overrides to pin pkce-challenge@5.0.0
- Temporarily import from the SDKs ESM dist
- modelcontextprotocol/typescript-sdk issue 217: @modelcontextprotocol/sdk fails in CommonJS projects due to incompatible ESM-only dependency pkce-challenge
- crouchcd/pkce-challenge release 5.0.0 referenced as a compatible version
- @modelcontextprotocol/sdk fails in CommonJS projects due to incompatible ESM-only dependency pkce-challenge
- @modelcontextprotocol/sdk fails in CommonJS projects due to incompatible ESM-only dependency (pkce-challenge) fix

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

