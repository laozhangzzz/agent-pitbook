---
id: mcp-ts-sdk-type-instantiation-excessively-deep
title: "MCP TS SDK: 'Type instantiation is excessively deep' (ts2589) freezes the IDE"
status: verified
confidence: medium
created_at: 2026-06-21
updated_at: 2026-06-21
last_verified: 2026-06-21
tags: [mcp, typescript-sdk, zod, typescript, tsconfig, type-error, ide]
affected_tools: [mcp-server, typescript-sdk]
---

# MCP TS SDK: 'Type instantiation is excessively deep' (ts2589) freezes the IDE

## Summary

Using MCP SDK tool types (such as `ToolCallback<Args>`) with Zod can trigger `Type instantiation is excessively deep and possibly infinite. ts(2589)`, which also slows or freezes the TypeScript language server in the editor. The fix is on the Zod/tsconfig side: a single Zod version, a modern `moduleResolution`, and/or a Zod release that fixes the deep instantiation.

## Symptoms

- `Type instantiation is excessively deep and possibly infinite.ts(2589)` on lines referencing SDK tool types.
- The TypeScript server in Cursor/VS Code hangs; saving files stalls.
- It appears intermittently, and `@ts-ignore` silences the error but not the slowdown.

## Root Cause

The error comes from deep generic instantiation in Zod's types as consumed by the SDK's tool typings, made worse by: multiple Zod versions resolved in the tree, a legacy `moduleResolution: "node"` tsconfig, and certain SDK versions (reported from `>=1.16.0`).

## Fix

1. Ensure a single Zod version is installed (`npm ls zod`); duplicate Zod versions are a common trigger.
2. Update `tsconfig.json` to a modern `module`/`moduleResolution` (e.g. `"bundler"` or `"nodenext"`) instead of the legacy `"node"`.
3. If on Zod 4, upgrade to a release with the deep-instantiation fix (reported fixed in Zod 4.1.6). On Zod 3, the tsconfig change is the main lever.
4. Pinning a known-good combination (e.g. SDK 1.12.1 with zod 3.25.49) unblocked some users as a stopgap.

## Verification

The `ts(2589)` error disappears and the TypeScript server responds normally (no hang on save) in a project using SDK tool types.

## Anti-Patterns

- Suppressing with `@ts-ignore` and ignoring the language-server slowdown it leaves behind.
- Leaving two Zod versions in the dependency tree.

<!-- pit-record
{
  "id": "mcp-ts-sdk-type-instantiation-excessively-deep",
  "title": "MCP TS SDK: 'Type instantiation is excessively deep' (ts2589) freezes the IDE",
  "summary": "Using MCP SDK tool types (e.g. ToolCallback<Args>) with Zod can trigger 'Type instantiation is excessively deep and possibly infinite ts(2589)' and freeze the TypeScript language server. Fix on the Zod/tsconfig side: single Zod version, modern moduleResolution (not legacy 'node'), and a Zod release with the fix (4.1.6).",
  "status": "verified",
  "confidence": "medium",
  "created_at": "2026-06-21",
  "updated_at": "2026-06-21",
  "last_verified": "2026-06-21",
  "tags": ["mcp", "typescript-sdk", "zod", "typescript", "tsconfig", "type-error", "ide"],
  "affected_tools": ["mcp-server", "typescript-sdk"],
  "symptoms": [
    "Type instantiation is excessively deep and possibly infinite.ts(2589) on lines referencing SDK tool types",
    "the TypeScript server in Cursor/VS Code hangs and saving files stalls",
    "it appears intermittently; @ts-ignore silences the error but not the slowdown"
  ],
  "environment": {
    "language": "TypeScript",
    "constraints": ["Zod-typed tool definitions", "possibly multiple Zod versions", "legacy moduleResolution 'node'", "SDK >= 1.16.0 reported"]
  },
  "root_cause": [
    "Deep generic instantiation in Zod's types as consumed by the SDK's tool typings.",
    "Worsened by multiple resolved Zod versions, a legacy moduleResolution: 'node' tsconfig, and certain SDK versions (reported from >=1.16.0)."
  ],
  "fix": [
    {
      "step": "Ensure a single Zod version is installed; duplicates are a common trigger.",
      "command": "npm ls zod"
    },
    {
      "step": "Update tsconfig to a modern module/moduleResolution (e.g. 'bundler' or 'nodenext') instead of legacy 'node'.",
      "rationale": "Recommended by the Zod author for this class of deep-instantiation error."
    },
    {
      "step": "If on Zod 4, upgrade to a release with the fix (reported fixed in Zod 4.1.6); on Zod 3 the tsconfig change is the main lever."
    },
    {
      "step": "As a stopgap, pin a known-good combination such as SDK 1.12.1 with zod 3.25.49."
    }
  ],
  "verification": [
    {
      "method": "Reopen the project and reference SDK tool types after the change.",
      "expected": "No ts(2589) error and the TypeScript server responds normally (no hang on save)."
    }
  ],
  "workarounds": [
    "Pin a known-good SDK + Zod pair until you can update tsconfig/Zod."
  ],
  "anti_patterns": [
    "Suppressing with @ts-ignore and ignoring the language-server slowdown.",
    "Leaving two Zod versions in the dependency tree."
  ],
  "source_links": [
    {
      "title": "modelcontextprotocol/typescript-sdk issue 494: 'Type instantiation is excessively deep' when importing ToolCallback (Zod author recommends single Zod version + modern moduleResolution; fixed in Zod 4.1.6)",
      "type": "issue",
      "url": "https://github.com/modelcontextprotocol/typescript-sdk/issues/494",
      "accessed_at": "2026-06-21"
    }
  ],
  "related": ["mcp-ts-sdk-zod-v4-incompatible"],
  "safety": {
    "external_text_trusted": false,
    "requires_confirmation": false,
    "notes": ["Version numbers are from the issue thread; confirm current Zod/SDK behavior before pinning."]
  }
}
-->
