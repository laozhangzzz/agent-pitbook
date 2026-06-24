# server-memory ignores MEMORY_FILE_PATH because the npm build lagged the source fix

Known fix landing page for an exact problem query.

Pit ID: mcp-server-memory-ignores-memory-file-path-env
HTML query page: https://laozhangzzz.github.io/agent-pitbook/q/server-memory-ignores-memory-file-path-because-the-npm-build-lagged-the-source-fix.html
Full pit HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-server-memory-ignores-memory-file-path-env.html
Full pit Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-server-memory-ignores-memory-file-path-env.md
GitHub known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/24

## Fast Answer

- Problem: MEMORY_FILE_PATH is set but the memory file is created at a default location
- Root cause: The npm release (e.g. 0.6.2) was older than the GitHub main source: its compiled dist/index.js hardcoded path.join(__dirname, 'memory.json').
- Fix first: Pin @modelcontextprotocol/server-memory@latest in the config to get the build that honors the env var (fix shipped in release 2025.4.25).
- Verify: Launch with @latest and an absolute MEMORY_FILE_PATH, then check where the file is written.

## Queries This Answers

- Environment variables not respected in @modelcontextprotocol/server-memory package
- Environment variables not respected in @modelcontextprotocol/server-memory package fix
- Environment variables not respected in @modelcontextprotocol/server-memory package root cause
- server-memory ignores MEMORY_FILE_PATH because the npm build lagged the source
- server-memory ignores MEMORY_FILE_PATH because the npm build lagged the source fix
- server-memory ignores MEMORY_FILE_PATH because the npm build lagged the source root cause
- how to fix server-memory ignores MEMORY_FILE_PATH because the npm build lagged the source
- MEMORY_FILE_PATH
- MEMORY_FILE_PATH fix
- claude-desktop MEMORY_FILE_PATH
- claude-desktop MEMORY_FILE_PATH fix
- cursor MEMORY_FILE_PATH
- cursor MEMORY_FILE_PATH fix
- mcp-server MEMORY_FILE_PATH
- mcp-server MEMORY_FILE_PATH fix
- MEMORY_FILE_PATH is set but the memory file is created at a default location
- how to fix MEMORY_FILE_PATH is set but the memory file is created at a default location
- MEMORY_FILE_PATH is set but the memory file is created at a default location root cause
- claude-desktop MEMORY_FILE_PATH is set but the memory file is created at a default location
- claude-desktop MEMORY_FILE_PATH is set but the memory file is created at a default location fix
- cursor MEMORY_FILE_PATH is set but the memory file is created at a default location
- cursor MEMORY_FILE_PATH is set but the memory file is created at a default location fix
- mcp-server MEMORY_FILE_PATH is set but the memory file is created at a default location
- mcp-server MEMORY_FILE_PATH is set but the memory file is created at a default location fix

