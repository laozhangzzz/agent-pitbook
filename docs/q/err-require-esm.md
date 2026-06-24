# ERR_REQUIRE_ESM

Known fix landing page for an exact problem query.

Pit ID: mcp-ts-sdk-commonjs-esm-pkce-challenge
HTML query page: https://laozhangzzz.github.io/agent-pitbook/q/err-require-esm.html
Full pit HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-ts-sdk-commonjs-esm-pkce-challenge.html
Full pit Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-ts-sdk-commonjs-esm-pkce-challenge.md
GitHub known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/33

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
- ERR_REQUIRE_ESM
- ERR_REQUIRE_ESM fix
- mcp-server ERR_REQUIRE_ESM
- mcp-server ERR_REQUIRE_ESM fix
- typescript-sdk ERR_REQUIRE_ESM
- typescript-sdk ERR_REQUIRE_ESM fix
- runtime crash on MCP client init: ERR_REQUIRE_ESM: require() of ES Module pkce-challenge is not supported. Use dynamic import() instead
- how to fix runtime crash on MCP client init: ERR_REQUIRE_ESM: require() of ES Module pkce-challenge is not supported. Use dynamic import() instead
- runtime crash on MCP client init: ERR_REQUIRE_ESM: require() of ES Module pkce-challenge is not supported. Use dynamic import() instead root cause
- mcp-server runtime crash on MCP client init: ERR_REQUIRE_ESM: require() of ES Module pkce-challenge is not supported. Use dynamic import() instead
- mcp-server runtime crash on MCP client init: ERR_REQUIRE_ESM: require() of ES Module pkce-challenge is not supported. Use dynamic import() instead fix
- typescript-sdk runtime crash on MCP client init: ERR_REQUIRE_ESM: require() of ES Module pkce-challenge is not supported. Use dynamic import() instead
- typescript-sdk runtime crash on MCP client init: ERR_REQUIRE_ESM: require() of ES Module pkce-challenge is not supported. Use dynamic import() instead fix
- the project is CommonJS often NestJS
- how to fix the project is CommonJS often NestJS
- the project is CommonJS (often NestJS) root cause
- mcp-server the project is CommonJS often NestJS

