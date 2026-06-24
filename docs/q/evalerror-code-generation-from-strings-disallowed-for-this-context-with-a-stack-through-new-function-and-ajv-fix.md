# EvalError: Code generation from strings disallowed for this context, with a stack through new Function and Ajv fix

Known fix landing page for an exact problem query.

Pit ID: mcp-ts-sdk-edge-runtime-ajv-codegen-evalerror
HTML query page: https://laozhangzzz.github.io/agent-pitbook/q/evalerror-code-generation-from-strings-disallowed-for-this-context-with-a-stack-through-new-function-and-ajv-fix.html
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
- EvalError: Code generation from strings disallowed because AJV v6 compiles schemas with new Function, which edge runtimes forbid
- EvalError: Code generation from strings disallowed because AJV v6 compiles schemas with new Function, which edge runtimes forbid fix
- mcp-server EvalError: Code generation from strings disallowed because AJV v6 compiles schemas with new Function, which edge runtimes forbid
- mcp-server EvalError: Code generation from strings disallowed because AJV v6 compiles schemas with new Function, which edge runtimes forbid fix
- typescript-sdk EvalError: Code generation from strings disallowed because AJV v6 compiles schemas with new Function, which edge runtimes forbid
- typescript-sdk EvalError: Code generation from strings disallowed because AJV v6 compiles schemas with new Function, which edge runtimes forbid fix
- EvalError: Code generation from strings disallowed for this context, with a stack through new Function and Ajv
- EvalError: Code generation from strings disallowed for this context, with a stack through new Function and Ajv fix
- mcp-server EvalError: Code generation from strings disallowed for this context, with a stack through new Function and Ajv
- mcp-server EvalError: Code generation from strings disallowed for this context, with a stack through new Function and Ajv fix
- typescript-sdk EvalError: Code generation from strings disallowed for this context, with a stack through new Function and Ajv
- typescript-sdk EvalError: Code generation from strings disallowed for this context, with a stack through new Function and Ajv fix
- EvalError: Code generation from strings disallowed for this context, with a stack through new Function and Ajv.localCompile
- how to fix EvalError: Code generation from strings disallowed for this context, with a stack through new Function and Ajv.localCompile
- EvalError: Code generation from strings disallowed for this context, with a stack through new Function and Ajv.localCompile root cause
- mcp-server EvalError: Code generation from strings disallowed for this context, with a stack through new Function and Ajv.localCompile
- mcp-server EvalError: Code generation from strings disallowed for this context, with a stack through new Function and Ajv.localCompile fix

