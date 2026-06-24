# MCP server hangs because the GUI client uses your user-level .npmrc, not your project's

Pit ID: mcp-client-uses-user-level-npmrc-wrong-registry
Status: verified
Confidence: medium
Updated: 2026-06-21
Canonical source: https://github.com/laozhangzzz/agent-pitbook/blob/main/pits/mcp/mcp-client-uses-user-level-npmrc-wrong-registry.md

## Summary

npx-launched MCP servers that work in the terminal but hang under a GUI client (Client closed / -32001 Request timed out) can be a registry-config problem: the client launches npx from your home dir, so it reads user-level ~/.npmrc, not your project's .npmrc. A wrong registry there stalls the package fetch.

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

## Common Search Queries

- mcp-client-uses-user-level-npmrc-wrong-registry
- mcp client uses user level npmrc wrong registry
- MCP server hangs because the GUI client uses your user-level .npmrc, not your projects
- MCP server hangs because the GUI client uses your user-level .npmrc, not your projects fix
- MCP server hangs because the GUI client uses your user-level .npmrc, not your projects root cause
- npmrc
- registry
- startup
- timeout
- cursor
- claude-desktop
- cline
- mcp-server
- npx -y <package> works in a project terminal but not when launched by the client
- client log shows Client closed and MCP error -32001: Request timed out
- a project-level .npmrc with a custom or corporate registry exists
- npm merges config from multiple .npmrc files; the project-level file only applies when the working directory is inside that project
- A GUI MCP client launches npx from a different directory (typically home), so only user-level and global config apply
- A wrong or unreachable registry in ~/.npmrc makes the fetch hang or fail, surfaced as a startup timeout
- Assuming a per-project .npmrc applies to a GUI-launched process
- Editing the MCP config repeatedly when the fault is the registry in ~/.npmrc
- Globally install the package and reference it by absolute path instead of npx
- modelcontextprotocol/servers issue 891: author resolved 'Client closed' by fixing an incorrect registry in user-level ~/.npmrc that the project .npmrc had overridden in the terminal
- author resolved 'Client closed' by fixing an incorrect registry in user-level ~/.npmrc that the project .npmrc had overridden in the terminal

## Affected Tools

- cursor
- claude-desktop
- cline
- mcp-server

## Tags

- mcp
- npx
- npmrc
- registry
- startup
- timeout

## Symptoms

- npx -y <package> works in a project terminal but not when launched by the client
- client log shows Client closed and MCP error -32001: Request timed out
- a project-level .npmrc with a custom or corporate registry exists

## Environment

- package_manager: npm
- constraints: GUI client spawns npx from a non-project working directory, user-level ~/.npmrc differs from project .npmrc

## Root Cause

- npm merges config from multiple .npmrc files; the project-level file only applies when the working directory is inside that project.
- A GUI MCP client launches npx from a different directory (typically home), so only user-level and global config apply.
- A wrong or unreachable registry in ~/.npmrc makes the fetch hang or fail, surfaced as a startup timeout.

## Fix

1. Inspect effective npm config and the user-level rc file.

```bash
npm config get registry && npm config ls -l
```
2. Set the user-level registry to a reachable one.

```bash
npm config set registry https://registry.npmjs.org/
```
3. Or pre-install the server globally and point the MCP config at the installed binary by absolute path so launch needs no registry fetch.

## Verification

- Relaunch from the client after fixing ~/.npmrc. Expected: Returns the reachable registry; the client launches the server without Client closed / -32001.

## Sources

- modelcontextprotocol/servers issue 891: author resolved 'Client closed' by fixing an incorrect registry in user-level ~/.npmrc that the project .npmrc had overridden in the terminal (issue): https://github.com/modelcontextprotocol/servers/issues/891

## Workarounds

- Globally install the package and reference it by absolute path instead of npx.

## Anti-patterns

- Assuming a per-project .npmrc applies to a GUI-launched process.
- Editing the MCP config repeatedly when the fault is the registry in ~/.npmrc.

