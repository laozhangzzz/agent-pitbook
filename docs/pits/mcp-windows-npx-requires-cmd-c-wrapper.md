# On Windows an MCP server launched with npx needs a cmd /c wrapper

Pit ID: mcp-windows-npx-requires-cmd-c-wrapper
Status: verified
Confidence: high
Updated: 2026-06-21
Canonical source: https://github.com/laozhangzzz/agent-pitbook/blob/main/pits/mcp/mcp-windows-npx-requires-cmd-c-wrapper.md

## Summary

On Windows, command: 'npx' for an MCP server fails with spawn npx ENOENT or ''npx' is not recognized' because npx is a .cmd batch shim that cannot be spawned directly. Wrap it as command: 'cmd', args: ['/c','npx','-y','<package>'], or point command at node.exe with the script path.

## Fast Answer

- Problem: Windows only: the MCP server will not start
- Root cause: On Windows npx and npm are npx.cmd / npm.cmd batch files, not executables.
- Fix first: Launch through cmd: set command to 'cmd' and args to ['/c','npx','-y','<package>', ...].
- Verify: Relaunch after wrapping with cmd /c.

## Queries This Answers

- Windows npx launch failure with garbled 'not recognized' error -32000
- Windows npx launch failure with garbled 'not recognized' error (-32000) fix
- Windows npx launch failure with garbled 'not recognized' error (-32000) root cause
- comment noting Windows/WSL needs 'cmd /c' before 'npx -y' and matching npm versions
- comment noting Windows/WSL needs 'cmd /c' before 'npx -y' and matching npm versions fix
- comment noting Windows/WSL needs 'cmd /c' before 'npx -y' and matching npm versions root cause
- On Windows an MCP server launched with npx needs a cmd /c wrapper
- On Windows an MCP server launched with npx needs a cmd /c wrapper fix

## Common Search Queries

- mcp-windows-npx-requires-cmd-c-wrapper
- mcp windows npx requires cmd c wrapper
- On Windows an MCP server launched with npx needs a cmd /c wrapper
- On Windows an MCP server launched with npx needs a cmd /c wrapper fix
- On Windows an MCP server launched with npx needs a cmd /c wrapper root cause
- windows
- spawn
- enoent
- startup
- claude-desktop
- cursor
- cline

## Affected Tools

- claude-desktop
- cursor
- cline
- mcp-server

## Tags

- mcp
- windows
- npx
- cmd
- spawn
- enoent
- startup

## Symptoms

- Windows only: the MCP server will not start
- logs show spawn npx ENOENT or locale text equivalent to ''npx' is not recognized as an internal or external command'
- the same npx command runs fine in PowerShell or cmd manually

## Environment

- os: Windows
- runtime: Node.js
- package_manager: npm
- constraints: npx/npm are .cmd shims on Windows, client spawns the command without a shell

## Root Cause

- On Windows npx and npm are npx.cmd / npm.cmd batch files, not executables.
- Node's spawn without a shell cannot execute a .cmd directly, so command: 'npx' yields ENOENT.
- Routing through cmd /c lets the Windows command interpreter resolve and run the shim.

## Fix

1. Launch through cmd: set command to 'cmd' and args to ['/c','npx','-y','<package>', ...].

Rationale: cmd /c resolves and runs the .cmd shim that cannot be spawned directly.
2. For WSL setups, ensure the Windows-side and WSL-side npm versions are compatible; large mismatches can break the launch.
3. Alternatively point command at the absolute node.exe and pass the server's script path, bypassing the .cmd shim.

## Verification

- Relaunch after wrapping with cmd /c. Expected: The server starts and there is no spawn npx ENOENT in the client log.

## Sources

- modelcontextprotocol/servers issue 1097: Windows npx launch failure with garbled 'not recognized' error (-32000) (issue): https://github.com/modelcontextprotocol/servers/issues/1097
- modelcontextprotocol/servers issue 891: comment noting Windows/WSL needs 'cmd /c' before 'npx -y' and matching npm versions (issue): https://github.com/modelcontextprotocol/servers/issues/891

## Workarounds

- Use the absolute node.exe path plus the server script path instead of npx.

## Anti-patterns

- Using bare command: 'npx' on Windows.
- Assuming a macOS/Linux config is portable to Windows without cmd /c.

