# comment noting Windows/WSL needs 'cmd /c' before 'npx -y' and matching npm versions root cause

Known fix landing page for an exact problem query.

Pit ID: mcp-windows-npx-requires-cmd-c-wrapper
HTML query page: https://laozhangzzz.github.io/agent-pitbook/q/comment-noting-windows-wsl-needs-cmd-c-before-npx-y-and-matching-npm-versions-root-cause.html
Full pit HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-windows-npx-requires-cmd-c-wrapper.html
Full pit Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-windows-npx-requires-cmd-c-wrapper.md
GitHub known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/37

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
- On Windows an MCP server launched with npx needs a cmd /c wrapper root cause
- how to fix On Windows an MCP server launched with npx needs a cmd /c wrapper
- claude-desktop mcp server launched npx needs cmd wrapper
- claude-desktop mcp server launched npx needs cmd wrapper fix
- needs cmd wrapper windows mcp server launched npx claude-desktop
- needs cmd wrapper windows mcp server launched npx claude-desktop fix
- windows mcp server launched needs cmd wrapper
- windows mcp server launched needs cmd wrapper fix
- windows mcp server launched claude-desktop
- windows mcp server launched claude-desktop fix
- claude-desktop windows mcp server will start
- claude-desktop windows mcp server will start fix
- server will start windows mcp claude-desktop
- server will start windows mcp claude-desktop fix
- windows mcp server will server will start
- windows mcp server will server will start fix
