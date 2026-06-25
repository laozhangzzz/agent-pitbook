# MCP TypeScript SDK breaks with Zod v4: w._parse is not a function

Pit ID: mcp-ts-sdk-zod-v4-incompatible
Status: verified
Confidence: high
Updated: 2026-06-21
Canonical source: https://github.com/laozhangzzz/agent-pitbook/blob/main/pits/mcp/mcp-ts-sdk-zod-v4-incompatible.md

## Summary

Older @modelcontextprotocol/sdk (up to ~1.17.5) hard-depends on Zod v3 and calls Zod internals; with Zod v4 installed, tool calls fail with -32603 'w._parse is not a function' or 'null is not an object (evaluating F._def)'. Pin zod@3, or upgrade the SDK to a version with Zod v4 support (~1.23.0+).

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
- mcp-server typescript sdk breaks zod v4 parse function

## Common Search Queries

- mcp-ts-sdk-zod-v4-incompatible
- mcp ts sdk zod v4 incompatible
- MCP TypeScript SDK breaks with Zod v4: w._parse is not a function
- MCP TypeScript SDK breaks with Zod v4: w._parse is not a function fix
- MCP TypeScript SDK breaks with Zod v4: w._parse is not a function root cause
- typescript-sdk
- dependencies
- versioning
- tools
- mcp-server
- tool execution returns {"code":-32603,"message":"w._parse is not a function..."}
- tools/list fails with null is not an object evaluating F._def

## Affected Tools

- mcp-server
- typescript-sdk

## Tags

- mcp
- typescript-sdk
- zod
- dependencies
- versioning
- tools

## Symptoms

- tool execution returns {"code":-32603,"message":"w._parse is not a function..."}
- tools/list fails with 'null is not an object (evaluating F._def)'
- errors appear in minified code and are hard to trace
- Zod was recently upgraded to v4.x

## Environment

- language: TypeScript
- runtime: Node.js / Bun
- package_manager: npm
- versions: {"@modelcontextprotocol/sdk":"1.17.5","zod":"4.1.5"}
- constraints: SDK declares zod ^3.x and calls Zod internals

## Root Cause

- MCP SDK versions up to ~1.17.5 declare zod ^3.x and call Zod internal API (_def, _parse).
- Zod v4 changed those internal structures, so the SDK's calls hit undefined methods at runtime when a v4 Zod is resolved.

## Fix

1. Quick unblock: pin Zod v3 and ensure a single Zod version resolves.

```bash
npm install zod@3.23.8
```
2. Durable fix: upgrade @modelcontextprotocol/sdk to a version with backwards-compatible Zod v4 support (added around the 1.23.0 line).
3. Deduplicate so only one Zod version is installed.

```bash
npm ls zod
```

## Verification

- Check the resolved Zod version and re-run a tool call. Expected: One compatible Zod version; tool calls and tools/list succeed with no w._parse / F._def errors.

## Sources

- modelcontextprotocol/typescript-sdk issue 925: MCP SDK v1.17.5 Incompatible with Zod v4 - Breaking Changes (maintainer notes 1.23.0-beta adds v4 support) (issue): https://github.com/modelcontextprotocol/typescript-sdk/issues/925

## Workarounds

- Stay on Zod v3 until the SDK upgrade is feasible.

## Anti-patterns

- Mixing a Zod-v4 project with an SDK that only supports Zod v3.
- Leaving two Zod versions in the tree and assuming the right one resolves.

