# cline MCP error -32001: Request timed out

Known fix landing page for an exact problem query.

Pit ID: mcp-client-uses-user-level-npmrc-wrong-registry
HTML query page: https://laozhangzzz.github.io/agent-pitbook/q/cline-mcp-error-32001-request-timed-out.html
Full pit HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-client-uses-user-level-npmrc-wrong-registry.html
Full pit Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-client-uses-user-level-npmrc-wrong-registry.md
GitHub known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/14

## Fast Answer

- Problem: npx -y <package> works in a project terminal but not when launched by the client
- Root cause: npm merges config from multiple .npmrc files; the project-level file only applies when the working directory is inside that project.
- Fix first: Inspect effective npm config and the user-level rc file.
- Verify: Relaunch from the client after fixing ~/.npmrc.

## Queries This Answers

- author resolved 'Client closed' by fixing an incorrect registry in user-level ~/.npmrc that the project .npmrc had overridden in the terminal
- author resolved 'Client closed' by fixing an incorrect registry in user-level ~/.npmrc that the project .npmrc had overridden in the terminal fix
- author resolved 'Client closed' by fixing an incorrect registry in user-level ~/.npmrc that the project .npmrc had overridden in the terminal root cause
- MCP server hangs because the GUI client uses your user-level .npmrc, not your projects
- MCP server hangs because the GUI client uses your user-level .npmrc, not your projects fix
- MCP server hangs because the GUI client uses your user-level .npmrc, not your projects root cause
- how to fix MCP server hangs because the GUI client uses your user-level .npmrc, not your projects
- MCP error -32001: Request timed out
- MCP error -32001: Request timed out fix
- cursor MCP error -32001: Request timed out
- cursor MCP error -32001: Request timed out fix
- claude-desktop MCP error -32001: Request timed out
- claude-desktop MCP error -32001: Request timed out fix
- cline MCP error -32001: Request timed out
- cline MCP error -32001: Request timed out fix
- mcp-server MCP error -32001: Request timed out
- mcp-server MCP error -32001: Request timed out fix
- npx -y <package> works in a project terminal but not when launched by the client
- how to fix npx -y <package> works in a project terminal but not when launched by the client
- npx -y <package> works in a project terminal but not when launched by the client root cause
- cursor npx -y <package> works in a project terminal but not when launched by the client
- cursor npx -y <package> works in a project terminal but not when launched by the client fix
- claude-desktop npx -y <package> works in a project terminal but not when launched by the client
- claude-desktop npx -y <package> works in a project terminal but not when launched by the client fix

