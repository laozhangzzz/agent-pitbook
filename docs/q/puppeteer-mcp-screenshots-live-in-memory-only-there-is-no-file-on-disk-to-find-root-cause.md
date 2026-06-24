# Puppeteer MCP screenshots live in memory only; there is no file on disk to find root cause

Known fix landing page for an exact problem query.

Pit ID: mcp-puppeteer-screenshots-in-memory-only
HTML query page: https://laozhangzzz.github.io/agent-pitbook/q/puppeteer-mcp-screenshots-live-in-memory-only-there-is-no-file-on-disk-to-find-root-cause.html
Full pit HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-puppeteer-screenshots-in-memory-only.html
Full pit Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-puppeteer-screenshots-in-memory-only.md
GitHub known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/21

## Fast Answer

- Problem: puppeteer_screenshot reports success but no image file appears on disk
- Root cause: The server stores screenshots in memory and exposes them as MCP resources, with no documented filesystem path.
- Fix first: Retrieve the screenshot via the MCP resource the server exposes, not from a file path.
- Verify: Inspect the resource list in the client/Inspector and the filesystem.

## Queries This Answers

- Puppeteer MCP Server Missing Screenshots
- Puppeteer MCP Server Missing Screenshots fix
- Puppeteer MCP Server Missing Screenshots root cause
- Puppeteer MCP screenshots live in memory only; there is no file on disk to find
- Puppeteer MCP screenshots live in memory only; there is no file on disk to find fix
- Puppeteer MCP screenshots live in memory only; there is no file on disk to find root cause
- how to fix Puppeteer MCP screenshots live in memory only; there is no file on disk to find
- puppeteer_screenshot reports success but no image file appears on disk
- how to fix puppeteer_screenshot reports success but no image file appears on disk
- puppeteer_screenshot reports success but no image file appears on disk root cause
- mcp-server puppeteer_screenshot reports success but no image file appears on disk
- mcp-server puppeteer_screenshot reports success but no image file appears on disk fix
- claude-desktop puppeteer_screenshot reports success but no image file appears on disk
- claude-desktop puppeteer_screenshot reports success but no image file appears on disk fix
- the model tries to open a screenshot path and finds nothing
- how to fix the model tries to open a screenshot path and finds nothing
- the model tries to open a screenshot path and finds nothing root cause
- mcp-server the model tries to open a screenshot path and finds nothing
- mcp-server the model tries to open a screenshot path and finds nothing fix
- claude-desktop the model tries to open a screenshot path and finds nothing
- claude-desktop the model tries to open a screenshot path and finds nothing fix
- the agent searches the filesystem (sometimes outside the project) for the missing file
- how to fix the agent searches the filesystem (sometimes outside the project) for the missing file
- the agent searches the filesystem (sometimes outside the project) for the missing file root cause

