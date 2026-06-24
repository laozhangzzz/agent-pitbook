# Type instantiation is excessively deep when importing ToolCallback (Zod author recommends single Zod version + modern moduleResolution; fixed in Zod 4.1.6) fix

Known fix landing page for an exact problem query.

Pit ID: mcp-ts-sdk-type-instantiation-excessively-deep
HTML query page: https://laozhangzzz.github.io/agent-pitbook/q/type-instantiation-is-excessively-deep-when-importing-toolcallback-zod-author-recommends-single-zod-version-modern-modul-mcp-ts-sdk-type-instantiation-excessively-deep.html
Full pit HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-ts-sdk-type-instantiation-excessively-deep.html
Full pit Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-ts-sdk-type-instantiation-excessively-deep.md
GitHub known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/35

## Fast Answer

- Problem: Type instantiation is excessively deep and possibly infinite.ts(2589) on lines referencing SDK tool types
- Root cause: Deep generic instantiation in Zod's types as consumed by the SDK's tool typings.
- Fix first: Ensure a single Zod version is installed; duplicates are a common trigger.
- Verify: Reopen the project and reference SDK tool types after the change.

## Queries This Answers

- Type instantiation is excessively deep when importing ToolCallback Zod author recommends single Zod version + modern moduleResolution; fixed in Zod 4.1.6
- Type instantiation is excessively deep when importing ToolCallback (Zod author recommends single Zod version + modern moduleResolution; fixed in Zod 4.1.6) fix
- Type instantiation is excessively deep when importing ToolCallback (Zod author recommends single Zod version + modern moduleResolution; fixed in Zod 4.1.6) root cause
- MCP TS SDK: 'Type instantiation is excessively deep' (ts2589) freezes the IDE
- MCP TS SDK: 'Type instantiation is excessively deep' (ts2589) freezes the IDE fix
- MCP TS SDK: 'Type instantiation is excessively deep' (ts2589) freezes the IDE root cause
- how to fix MCP TS SDK: 'Type instantiation is excessively deep' (ts2589) freezes the IDE
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

