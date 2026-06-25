# Puppeteer MCP screenshots live in memory only; there is no file on disk to find

Pit ID: mcp-puppeteer-screenshots-in-memory-only
Status: verified
Confidence: medium
Updated: 2026-06-21
Canonical source: https://github.com/laozhangzzz/agent-pitbook/blob/main/pits/mcp/mcp-puppeteer-screenshots-in-memory-only.md

## Summary

The Puppeteer MCP server keeps screenshots in memory and exposes them as MCP resources, not as files. After puppeteer_screenshot there is no image on disk, so agents that search the filesystem for a saved file are chasing something that does not exist. Retrieve via the resource, or add your own persistence step.

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
- mcp-server live memory there no file disk find

## Common Search Queries

- mcp-puppeteer-screenshots-in-memory-only
- mcp puppeteer screenshots in memory only
- Puppeteer MCP screenshots live in memory only; there is no file on disk to find
- Puppeteer MCP screenshots live in memory only; there is no file on disk to find fix
- Puppeteer MCP screenshots live in memory only; there is no file on disk to find root cause
- server-puppeteer
- screenshots
- resources
- in-memory
- misconception
- mcp-server
- claude-desktop

## Affected Tools

- mcp-server
- claude-desktop

## Tags

- mcp
- server-puppeteer
- screenshots
- resources
- in-memory
- misconception

## Symptoms

- puppeteer_screenshot reports success but no image file appears on disk
- the model tries to open a screenshot path and finds nothing
- the agent searches the filesystem (sometimes outside the project) for the missing file

## Environment

- constraints: Puppeteer MCP server stores screenshots in memory and exposes them as resources

## Root Cause

- The server stores screenshots in memory and exposes them as MCP resources, with no documented filesystem path.
- Models often assume the screenshot was written to disk (and may claim they saved it), reinforcing the misconception.

## Fix

1. Retrieve the screenshot via the MCP resource the server exposes, not from a file path.
2. Do not instruct the agent to read the screenshot from disk; there is no file unless you add persistence.
3. If you need a file, add a step that writes the in-memory image out, or use a server/tool that persists screenshots.

## Verification

- Inspect the resource list in the client/Inspector and the filesystem. Expected: The screenshot is available as a resource while no corresponding file exists on disk.

## Sources

- modelcontextprotocol/servers issue 865: Puppeteer MCP Server Missing Screenshots (maintainer: screenshots are stored in memory only) (issue): https://github.com/modelcontextprotocol/servers/issues/865

## Workarounds

- Persist the in-memory image yourself if a file is required downstream.

## Anti-patterns

- Searching the filesystem for a Puppeteer MCP screenshot.
- Trusting a model's claim that it saved the screenshot to a path.

