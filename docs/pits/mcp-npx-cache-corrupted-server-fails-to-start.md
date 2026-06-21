# A corrupted or cold npx cache makes an MCP server fail to start or time out

Pit ID: mcp-npx-cache-corrupted-server-fails-to-start
Status: verified
Confidence: medium
Updated: 2026-06-21
Canonical source: https://github.com/laozhangzzz/agent-pitbook/blob/main/pits/mcp/mcp-npx-cache-corrupted-server-fails-to-start.md

## Summary

An npx-launched MCP server that intermittently fails or yields 'Client closed' / 'MCP error -32001: Request timed out' is often a npx/npm cache problem: an interrupted download leaves a partial package, or a cold first download exceeds the client startup timeout. Clear the cache or pre-install the package.

## Affected Tools

- claude-desktop
- cursor
- cline
- mcp-server

## Tags

- mcp
- npx
- cache
- startup
- timeout
- error-32001

## Symptoms

- npx-launched MCP server worked before and now fails, or fails only on first launch
- client log shows Client closed and/or MCP error -32001: Request timed out
- the failure is intermittent and sometimes clears up on its own
- a recent flaky network or interrupted install preceded it

## Environment

- runtime: Node.js
- package_manager: npm
- constraints: MCP server launched via npx -y <package>, client enforces a startup timeout

## Root Cause

- npx downloads the package into the npm cache before running it.
- An interrupted or rate-limited fetch can leave a partial or corrupted package, so the next launch crashes on missing files.
- A genuine cold download can exceed the client's startup timeout, producing -32001: Request timed out.

## Fix

1. Clear the npm/npx cache and relaunch.

```bash
npm cache clean --force
```
2. Pre-install the package so launch does not depend on a fresh download, and point the config at it.

```bash
npm i -g <package>
```
3. If it was a cold-start timeout, retry once the package is cached, or raise the client's MCP startup timeout if configurable.

## Verification

- Relaunch after clearing the cache or pre-installing. Expected: Server starts on first try with no Client closed / -32001: Request timed out.

## Sources

- modelcontextprotocol/servers issue 1097: comment confirming a corrupted npx cache from network errors caused the server to crash; clearing it fixed startup (issue): https://github.com/modelcontextprotocol/servers/issues/1097
- modelcontextprotocol/servers issue 891: Client closed / -32001 Request timed out around npx MCP startup (issue): https://github.com/modelcontextprotocol/servers/issues/891

## Workarounds

- Pin a globally installed package by absolute path instead of relying on npx download at launch.

## Anti-patterns

- Repeatedly editing the config when the real fault is a half-written cache.
- Assuming the server package is broken when a clean cache fixes it.

