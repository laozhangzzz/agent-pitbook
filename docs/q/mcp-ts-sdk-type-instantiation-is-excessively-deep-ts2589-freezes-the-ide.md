# MCP TS SDK: 'Type instantiation is excessively deep' (ts2589) freezes the IDE

Known fix landing page for an exact problem query.

Pit ID: mcp-ts-sdk-type-instantiation-excessively-deep
HTML query page: https://laozhangzzz.github.io/agent-pitbook/q/mcp-ts-sdk-type-instantiation-is-excessively-deep-ts2589-freezes-the-ide.html
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
- mcp-server type instantiation excessively deep ts2589 freezes ide
- mcp-server type instantiation excessively deep ts2589 freezes ide fix
- ts2589 freezes ide ts sdk type instantiation excessively deep mcp-server
- ts2589 freezes ide ts sdk type instantiation excessively deep mcp-server fix
- mcp ts sdk type ts2589 freezes ide
- mcp ts sdk type ts2589 freezes ide fix
- mcp ts sdk type mcp-server
- mcp ts sdk type mcp-server fix
- mcp-server ts 2589 lines referencing sdk tool types
- mcp-server ts 2589 lines referencing sdk tool types fix
- sdk tool types possibly infinite ts 2589 lines referencing mcp-server
- sdk tool types possibly infinite ts 2589 lines referencing mcp-server fix
- type instantiation excessively deep sdk tool types
- type instantiation excessively deep sdk tool types fix
- type instantiation excessively deep mcp-server
- type instantiation excessively deep mcp-server fix
- Type instantiation is excessively deep and possibly infinite.ts(2589) on lines referencing SDK tool types
