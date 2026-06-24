# mcp server hangs gui level npmrc project

Known fix landing page for an exact problem query.

Pit ID: mcp-client-uses-user-level-npmrc-wrong-registry
HTML query page: https://laozhangzzz.github.io/agent-pitbook/q/mcp-server-hangs-gui-level-npmrc-project.html
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
- cursor client uses your user level npmrc project
- cursor client uses your user level npmrc project fix
- level npmrc project hangs gui client uses your user cursor
- level npmrc project hangs gui client uses your user cursor fix
- mcp server hangs gui level npmrc project
- mcp server hangs gui level npmrc project fix
- mcp server hangs gui cursor
- mcp server hangs gui cursor fix
- cursor npx package works project terminal launched client
- cursor npx package works project terminal launched client fix
- terminal launched client npx package works project cursor
- terminal launched client npx package works project cursor fix
- npx package works project terminal launched client
- npx package works project terminal launched client fix
- npx package works project cursor
- npx package works project cursor fix
- MCP error -32001: Request timed out
