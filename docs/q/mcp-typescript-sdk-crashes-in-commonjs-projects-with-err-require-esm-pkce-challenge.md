# MCP TypeScript SDK crashes in CommonJS projects with ERR_REQUIRE_ESM pkce-challenge

Known fix landing page for an exact problem query.

Pit ID: mcp-ts-sdk-commonjs-esm-pkce-challenge
HTML query page: https://laozhangzzz.github.io/agent-pitbook/q/mcp-typescript-sdk-crashes-in-commonjs-projects-with-err-require-esm-pkce-challenge.html
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
