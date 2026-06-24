# MCP TS SDK: 'Type instantiation is excessively deep' (ts2589) freezes the IDE

Pit ID: mcp-ts-sdk-type-instantiation-excessively-deep
Status: verified
Confidence: medium
Updated: 2026-06-21
Canonical source: https://github.com/laozhangzzz/agent-pitbook/blob/main/pits/mcp/mcp-ts-sdk-type-instantiation-excessively-deep.md

## Summary

Using MCP SDK tool types (e.g. ToolCallback<Args>) with Zod can trigger 'Type instantiation is excessively deep and possibly infinite ts(2589)' and freeze the TypeScript language server. Fix on the Zod/tsconfig side: single Zod version, modern moduleResolution (not legacy 'node'), and a Zod release with the fix (4.1.6).

## Fast Answer

- Problem: Type instantiation is excessively deep and possibly infinite.ts(2589) on lines referencing SDK tool types
- Root cause: Deep generic instantiation in Zod's types as consumed by the SDK's tool typings.
- Fix first: Ensure a single Zod version is installed; duplicates are a common trigger.
- Verify: Reopen the project and reference SDK tool types after the change.

## Queries This Answers

- MCP TS SDK: 'Type instantiation is excessively deep' (ts2589) freezes the IDE
- MCP TS SDK: 'Type instantiation is excessively deep' (ts2589) freezes the IDE fix
- MCP TS SDK: 'Type instantiation is excessively deep' (ts2589) freezes the IDE root cause
- how to fix MCP TS SDK: 'Type instantiation is excessively deep' (ts2589) freezes the IDE
- Type instantiation is excessively deep when importing ToolCallback Zod author recommends single Zod version + modern moduleResolution; fixed in Zod 4.1.6
- Type instantiation is excessively deep when importing ToolCallback (Zod author recommends single Zod version + modern moduleResolution; fixed in Zod 4.1.6) fix
- Type instantiation is excessively deep when importing ToolCallback (Zod author recommends single Zod version + modern moduleResolution; fixed in Zod 4.1.6) root cause
- Type instantiation is excessively deep and possibly infinite.ts(2589) on lines referencing SDK tool types
- how to fix Type instantiation is excessively deep and possibly infinite.ts(2589) on lines referencing SDK tool types
- Type instantiation is excessively deep and possibly infinite.ts(2589) on lines referencing SDK tool types root cause
- mcp-server Type instantiation is excessively deep and possibly infinite.ts(2589) on lines referencing SDK tool types
- mcp-server Type instantiation is excessively deep and possibly infinite.ts(2589) on lines referencing SDK tool types fix
- typescript-sdk Type instantiation is excessively deep and possibly infinite.ts(2589) on lines referencing SDK tool types
- typescript-sdk Type instantiation is excessively deep and possibly infinite.ts(2589) on lines referencing SDK tool types fix
- the TypeScript server in Cursor/VS Code hangs and saving files stalls
- how to fix the TypeScript server in Cursor/VS Code hangs and saving files stalls
- the TypeScript server in Cursor/VS Code hangs and saving files stalls root cause
- mcp-server the TypeScript server in Cursor/VS Code hangs and saving files stalls
- mcp-server the TypeScript server in Cursor/VS Code hangs and saving files stalls fix
- typescript-sdk the TypeScript server in Cursor/VS Code hangs and saving files stalls
- typescript-sdk the TypeScript server in Cursor/VS Code hangs and saving files stalls fix
- it appears intermittently; @ts-ignore silences the error but not the slowdown
- how to fix it appears intermittently; @ts-ignore silences the error but not the slowdown
- it appears intermittently; @ts-ignore silences the error but not the slowdown root cause

## Common Search Queries

- mcp-ts-sdk-type-instantiation-excessively-deep
- mcp ts sdk type instantiation excessively deep
- MCP TS SDK: 'Type instantiation is excessively deep' (ts2589) freezes the IDE
- MCP TS SDK: 'Type instantiation is excessively deep' (ts2589) freezes the IDE fix
- MCP TS SDK: 'Type instantiation is excessively deep' (ts2589) freezes the IDE root cause
- typescript-sdk
- typescript
- tsconfig
- type-error
- mcp-server
- Type instantiation is excessively deep and possibly infinite.ts(2589) on lines referencing SDK tool types
- the TypeScript server in Cursor/VS Code hangs and saving files stalls
- it appears intermittently; @ts-ignore silences the error but not the slowdown
- Deep generic instantiation in Zod's types as consumed by the SDK's tool typings
- Worsened by multiple resolved Zod versions, a legacy moduleResolution: 'node' tsconfig, and certain SDK versions reported from >=1.16.0
- Suppressing with @ts-ignore and ignoring the language-server slowdown
- Leaving two Zod versions in the dependency tree
- Pin a known-good SDK + Zod pair until you can update tsconfig/Zod
- modelcontextprotocol/typescript-sdk issue 494: 'Type instantiation is excessively deep' when importing ToolCallback Zod author recommends single Zod version + modern moduleResolution; fixed in Zod 4.1.6
- Type instantiation is excessively deep when importing ToolCallback Zod author recommends single Zod version + modern moduleResolution; fixed in Zod 4.1.6
- how to fix MCP TS SDK: 'Type instantiation is excessively deep' (ts2589) freezes the IDE
- Type instantiation is excessively deep when importing ToolCallback (Zod author recommends single Zod version + modern moduleResolution; fixed in Zod 4.1.6) fix
- Type instantiation is excessively deep when importing ToolCallback (Zod author recommends single Zod version + modern moduleResolution; fixed in Zod 4.1.6) root cause
- how to fix Type instantiation is excessively deep and possibly infinite.ts(2589) on lines referencing SDK tool types

## Affected Tools

- mcp-server
- typescript-sdk

## Tags

- mcp
- typescript-sdk
- zod
- typescript
- tsconfig
- type-error
- ide

## Symptoms

- Type instantiation is excessively deep and possibly infinite.ts(2589) on lines referencing SDK tool types
- the TypeScript server in Cursor/VS Code hangs and saving files stalls
- it appears intermittently; @ts-ignore silences the error but not the slowdown

## Environment

- language: TypeScript
- constraints: Zod-typed tool definitions, possibly multiple Zod versions, legacy moduleResolution 'node', SDK >= 1.16.0 reported

## Root Cause

- Deep generic instantiation in Zod's types as consumed by the SDK's tool typings.
- Worsened by multiple resolved Zod versions, a legacy moduleResolution: 'node' tsconfig, and certain SDK versions (reported from >=1.16.0).

## Fix

1. Ensure a single Zod version is installed; duplicates are a common trigger.

```bash
npm ls zod
```
2. Update tsconfig to a modern module/moduleResolution (e.g. 'bundler' or 'nodenext') instead of legacy 'node'.

Rationale: Recommended by the Zod author for this class of deep-instantiation error.
3. If on Zod 4, upgrade to a release with the fix (reported fixed in Zod 4.1.6); on Zod 3 the tsconfig change is the main lever.
4. As a stopgap, pin a known-good combination such as SDK 1.12.1 with zod 3.25.49.

## Verification

- Reopen the project and reference SDK tool types after the change. Expected: No ts(2589) error and the TypeScript server responds normally (no hang on save).

## Sources

- modelcontextprotocol/typescript-sdk issue 494: 'Type instantiation is excessively deep' when importing ToolCallback (Zod author recommends single Zod version + modern moduleResolution; fixed in Zod 4.1.6) (issue): https://github.com/modelcontextprotocol/typescript-sdk/issues/494

## Workarounds

- Pin a known-good SDK + Zod pair until you can update tsconfig/Zod.

## Anti-patterns

- Suppressing with @ts-ignore and ignoring the language-server slowdown.
- Leaving two Zod versions in the dependency tree.

