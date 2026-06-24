# Filesystem MCP server denies allowed Windows paths due to drive-letter case mismatch root cause

Known fix landing page for an exact problem query.

Pit ID: mcp-filesystem-server-windows-access-denied-case-sensitivity
HTML query page: https://laozhangzzz.github.io/agent-pitbook/q/filesystem-mcp-server-denies-allowed-windows-paths-due-to-drive-letter-case-mismatch-root-cause.html
Full pit HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-filesystem-server-windows-access-denied-case-sensitivity.html
Full pit Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-filesystem-server-windows-access-denied-case-sensitivity.md
GitHub known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/16

## Fast Answer

- Problem: Windows only: a file under an allowed directory returns 'Error: Access denied - path outside allowed directories'
- Root cause: The allowed-directory check compares request paths against allowed roots as strings.
- Fix first: Make the configured allowed-directory drive-letter case match what the client sends; try both C:\... and c:\... forms.
- Verify: Call read_file on a path under the allowed directory after aligning case or applying the patched build.

## Queries This Answers

- Filesystem server access denied for allowed paths on Windows
- Filesystem server access denied for allowed paths on Windows fix
- Filesystem server access denied for allowed paths on Windows root cause
- step toward fixing Windows path validation
- step toward fixing Windows path validation fix
- step toward fixing Windows path validation root cause
- Filesystem MCP server denies allowed Windows paths due to drive-letter case mismatch
- Filesystem MCP server denies allowed Windows paths due to drive-letter case mismatch fix
- Filesystem MCP server denies allowed Windows paths due to drive-letter case mismatch root cause
- how to fix Filesystem MCP server denies allowed Windows paths due to drive-letter case mismatch
- Windows only: a file under an allowed directory returns Error: Access denied - path outside allowed directories
- how to fix Windows only: a file under an allowed directory returns Error: Access denied - path outside allowed directories
- Windows only: a file under an allowed directory returns 'Error: Access denied - path outside allowed directories' root cause
- claude-desktop Windows only: a file under an allowed directory returns Error: Access denied - path outside allowed directories
- claude-desktop Windows only: a file under an allowed directory returns 'Error: Access denied - path outside allowed directories' fix
- cursor Windows only: a file under an allowed directory returns Error: Access denied - path outside allowed directories
- cursor Windows only: a file under an allowed directory returns 'Error: Access denied - path outside allowed directories' fix
- mcp-server Windows only: a file under an allowed directory returns Error: Access denied - path outside allowed directories
- mcp-server Windows only: a file under an allowed directory returns 'Error: Access denied - path outside allowed directories' fix
- the denied path is visibly inside a configured allowed root
- how to fix the denied path is visibly inside a configured allowed root
- the denied path is visibly inside a configured allowed root root cause
- claude-desktop the denied path is visibly inside a configured allowed root
- claude-desktop the denied path is visibly inside a configured allowed root fix

