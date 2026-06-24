# Environment variables not respected in @modelcontextprotocol/server-memory package root cause

Known fix landing page for an exact problem query.

Pit ID: mcp-server-memory-ignores-memory-file-path-env
HTML query page: https://laozhangzzz.github.io/agent-pitbook/q/environment-variables-not-respected-in-modelcontextprotocol-server-memory-package-root-cause.html
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
- claude-desktop ignores file path npm build lagged source
- claude-desktop ignores file path npm build lagged source fix
- build lagged source server memory ignores file path npm claude-desktop
- build lagged source server memory ignores file path npm claude-desktop fix
- server memory ignores file build lagged source
- server memory ignores file build lagged source fix
- server memory ignores file claude-desktop
- server memory ignores file claude-desktop fix
- claude-desktop memory file path set created default location
- claude-desktop memory file path set created default location fix
- created default location memory file path set claude-desktop
- created default location memory file path set claude-desktop fix
- memory file path set created default location
- memory file path set created default location fix
- memory file path set claude-desktop
- memory file path set claude-desktop fix
- MEMORY_FILE_PATH
