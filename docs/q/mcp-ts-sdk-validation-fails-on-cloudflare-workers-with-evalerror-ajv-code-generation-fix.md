# MCP TS SDK validation fails on Cloudflare Workers with EvalError (AJV code generation) fix

Known fix landing page for an exact problem query.

Pit ID: mcp-ts-sdk-edge-runtime-ajv-codegen-evalerror
HTML query page: https://laozhangzzz.github.io/agent-pitbook/q/mcp-ts-sdk-validation-fails-on-cloudflare-workers-with-evalerror-ajv-code-generation-fix.html
Full pit HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-ts-sdk-edge-runtime-ajv-codegen-evalerror.html
Full pit Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-ts-sdk-edge-runtime-ajv-codegen-evalerror.md
GitHub known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/34

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
- mcp-server fails cloudflare workers evalerror ajv code generation fix
- ajv code generation sdk validation fails cloudflare workers evalerror mcp-server
- ajv code generation sdk validation fails cloudflare workers evalerror mcp-server fix
- mcp ts sdk validation ajv code generation
- mcp ts sdk validation ajv code generation fix
- mcp ts sdk validation mcp-server
- mcp ts sdk validation mcp-server fix
- mcp-server context stack through new function ajv localcompile
- mcp-server context stack through new function ajv localcompile fix
- function ajv localcompile strings disallowed context stack through new mcp-server
- function ajv localcompile strings disallowed context stack through new mcp-server fix
- evalerror code generation strings function ajv localcompile
- evalerror code generation strings function ajv localcompile fix
- evalerror code generation strings mcp-server
- evalerror code generation strings mcp-server fix
- EvalError: Code generation from strings disallowed because AJV v6 compiles schemas with new Function, which edge runtimes forbid
