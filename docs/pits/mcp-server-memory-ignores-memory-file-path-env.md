# server-memory ignores MEMORY_FILE_PATH because the npm build lagged the source

Pit ID: mcp-server-memory-ignores-memory-file-path-env
Status: verified
Confidence: high
Updated: 2026-06-21
Canonical source: https://github.com/laozhangzzz/agent-pitbook/blob/main/pits/mcp/mcp-server-memory-ignores-memory-file-path-env.md
GitHub known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/24

## Summary

@modelcontextprotocol/server-memory ignored MEMORY_FILE_PATH because the npm-published dist hardcoded the path while the GitHub source already handled the env var. Pin @latest (fixed in 2025.4.25) and use an absolute path; a relative path resolves to the package dir, not your project.

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

## Common Search Queries

- mcp-server-memory-ignores-memory-file-path-env
- mcp server memory ignores memory file path env
- server-memory ignores MEMORY_FILE_PATH because the npm build lagged the source
- server-memory ignores MEMORY_FILE_PATH because the npm build lagged the source fix
- server-memory ignores MEMORY_FILE_PATH because the npm build lagged the source root cause
- server-memory
- environment-variable
- versioning
- paths
- claude-desktop
- cursor
- mcp-server
- MEMORY_FILE_PATH is set but the memory file is created at a default location
- the GitHub source handles the env var, yet the installed copy ignores it
- a relative MEMORY_FILE_PATH writes to an unexpected directory
- The npm release e.g. 0.6.2 was older than the GitHub main source: its compiled dist/index.js hardcoded path.join__dirname, memory.json
- The repo source already read process.env.MEMORY_FILE_PATH, so reading the source misled users about installed behavior
- A relative MEMORY_FILE_PATH is resolved relative to the package install directory, not the users project
- Inferring installed MCP server behavior from the GitHub source instead of the published build
- Assuming a relative env-var path resolves against the project working directory
- Treating a node_modules patch as a permanent fix instead of upgrading
- As a stopgap some users edited dist/index.js in node_modules, but upgrading the package is the durable fix
- modelcontextprotocol/servers issue 1018: Environment variables not respected in @modelcontextprotocol/server-memory package
- Environment variables not respected in @modelcontextprotocol/server-memory package

## Affected Tools

- claude-desktop
- cursor
- mcp-server

## Tags

- mcp
- server-memory
- environment-variable
- npm
- versioning
- paths

## Symptoms

- MEMORY_FILE_PATH is set but the memory file is created at a default location
- the GitHub source handles the env var, yet the installed copy ignores it
- a relative MEMORY_FILE_PATH writes to an unexpected directory

## Environment

- package_manager: npm
- constraints: npm-published build lagged the GitHub source, relative env-var path resolved against package install dir

## Root Cause

- The npm release (e.g. 0.6.2) was older than the GitHub main source: its compiled dist/index.js hardcoded path.join(__dirname, 'memory.json').
- The repo source already read process.env.MEMORY_FILE_PATH, so reading the source misled users about installed behavior.
- A relative MEMORY_FILE_PATH is resolved relative to the package install directory, not the user's project.

## Fix

1. Pin @modelcontextprotocol/server-memory@latest in the config to get the build that honors the env var (fix shipped in release 2025.4.25).
2. Reset any cached older copy if your client caches npx packages, then relaunch.
3. Use an absolute MEMORY_FILE_PATH rather than a relative one.

## Verification

- Launch with @latest and an absolute MEMORY_FILE_PATH, then check where the file is written. Expected: The memory file is created at exactly the absolute path provided.

## Sources

- modelcontextprotocol/servers issue 1018: Environment variables not respected in @modelcontextprotocol/server-memory package (issue): https://github.com/modelcontextprotocol/servers/issues/1018

## Workarounds

- As a stopgap some users edited dist/index.js in node_modules, but upgrading the package is the durable fix.

## Anti-patterns

- Inferring installed MCP server behavior from the GitHub source instead of the published build.
- Assuming a relative env-var path resolves against the project working directory.
- Treating a node_modules patch as a permanent fix instead of upgrading.

