# MCP Servers Dont Work with NVM

Known fix landing page for an exact problem query.

Pit ID: mcp-stdio-server-exits-shell-path-not-inherited
HTML query page: https://laozhangzzz.github.io/agent-pitbook/q/mcp-servers-dont-work-with-nvm.html
Full pit HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-stdio-server-exits-shell-path-not-inherited.html
Full pit Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-stdio-server-exits-shell-path-not-inherited.md
GitHub known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/28

## Fast Answer

- Problem: client log: Server transport closed unexpectedly, this is likely due to the process exiting early
- Root cause: GUI clients launch MCP servers without sourcing the user's shell config, so the child gets a minimal PATH.
- Fix first: Confirm the failure is launch-environment, not a broken server: it runs in your terminal but fails when the client launches it.
- Verify: Inspect the client MCP log after a full restart.

## Queries This Answers

- MCP Servers Dont Work with NVM
- MCP Servers Dont Work with NVM fix
- MCP Servers Dont Work with NVM root cause
- npx-for-claude wrapper workaround 66 reactions
- npx-for-claude wrapper workaround (66 reactions) fix
- npx-for-claude wrapper workaround (66 reactions) root cause
- Server transport closed unexpectedly, process exiting early write EPIPE
- Server transport closed unexpectedly, process exiting early (write EPIPE) fix
- Server transport closed unexpectedly, process exiting early (write EPIPE) root cause
- MCP stdio server exits immediately because the GUI client does not inherit your shell PATH
- MCP stdio server exits immediately because the GUI client does not inherit your shell PATH fix
- MCP stdio server exits immediately because the GUI client does not inherit your shell PATH root cause
- how to fix MCP stdio server exits immediately because the GUI client does not inherit your shell PATH
- claude-desktop immediately gui client inherit your shell path
- claude-desktop immediately gui client inherit your shell path fix
- your shell path server exits immediately gui client inherit claude-desktop
- your shell path server exits immediately gui client inherit claude-desktop fix
- mcp stdio server exits your shell path
- mcp stdio server exits your shell path fix
- mcp stdio server exits claude-desktop
- mcp stdio server exits claude-desktop fix
- claude-desktop transport closed unexpectedly likely process exiting early
- claude-desktop transport closed unexpectedly likely process exiting early fix
- process exiting early log server transport closed unexpectedly likely claude-desktop
