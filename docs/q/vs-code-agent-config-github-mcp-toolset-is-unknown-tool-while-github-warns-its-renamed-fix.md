# VS Code agent config: github/* MCP toolset is Unknown tool while github warns its renamed fix

Known fix landing page for an exact problem query.

Pit ID: github-mcp-vscode-toolset-name-mismatch
HTML query page: https://laozhangzzz.github.io/agent-pitbook/q/vs-code-agent-config-github-mcp-toolset-is-unknown-tool-while-github-warns-its-renamed-fix.html
Full pit HTML: https://laozhangzzz.github.io/agent-pitbook/pits/github-mcp-vscode-toolset-name-mismatch.html
Full pit Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/github-mcp-vscode-toolset-name-mismatch.md
GitHub known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/13

## Fast Answer

- Problem: 'tools': ['github/*'] produces Unknown tool
- Root cause: The server/* toolset alias resolves only when the MCP server is registered under the matching name (e.g. installed via the official flow so it is named github).
- Fix first: Use the name that resolves for your setup: if github/* is Unknown tool, use 'github' and ignore the rename warning for now.
- Verify: Run the agent with the chosen tools entry.

## Queries This Answers

- VSCode Toolset name mismatch: github/* fails with Unknown tool, but github warns its deprecated
- VSCode Toolset name mismatch: github/* fails with Unknown tool, but github warns its deprecated fix
- VSCode Toolset name mismatch: github/* fails with Unknown tool, but github warns its deprecated root cause
- VS Code agent config: github/* MCP toolset is Unknown tool while github warns its renamed
- VS Code agent config: github/* MCP toolset is Unknown tool while github warns its renamed fix
- VS Code agent config: github/* MCP toolset is Unknown tool while github warns its renamed root cause
- how to fix VS Code agent config: github/* MCP toolset is Unknown tool while github warns its renamed
- tools: [github/*] produces Unknown tool
- how to fix 'tools': ['github/*'] produces Unknown tool
- tools: [github/*] produces Unknown tool root cause
- github-mcp-server 'tools': ['github/*'] produces Unknown tool
- github-mcp-server 'tools': ['github/*'] produces Unknown tool fix
- vscode 'tools': ['github/*'] produces Unknown tool
- vscode 'tools': ['github/*'] produces Unknown tool fix
- tools: [github] works but warns it should be github/*
- how to fix 'tools': ['github'] works but warns it should be github/*
- tools: [github] works but warns it should be github/* root cause
- github-mcp-server 'tools': ['github'] works but warns it should be github/*
- github-mcp-server 'tools': ['github'] works but warns it should be github/* fix
- vscode 'tools': ['github'] works but warns it should be github/*
- vscode 'tools': ['github'] works but warns it should be github/* fix
- reported for other MCP servers too, not just GitHub
- how to fix reported for other MCP servers too, not just GitHub
- reported for other MCP servers too, not just GitHub root cause

