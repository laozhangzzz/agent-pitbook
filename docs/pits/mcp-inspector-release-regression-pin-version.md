# MCP Inspector breaks after an upgrade; pin a known-good version

Pit ID: mcp-inspector-release-regression-pin-version
Status: verified
Confidence: high
Updated: 2026-06-21
Canonical source: https://github.com/laozhangzzz/agent-pitbook/blob/main/pits/mcp/mcp-inspector-release-regression-pin-version.md

## Summary

@modelcontextprotocol/inspector ships often and some releases regress: 0.10.0 broke startup with 'mcp-inspector: command not found', 0.17.2 crashed Streamable HTTP connections with 'Controller is already closed' (fixed in 0.17.5). When Inspector breaks after npx @latest moved, pin a known-good version or upgrade to the fixed release.

## Common Search Queries

- mcp-inspector-release-regression-pin-version
- mcp inspector release regression pin version
- MCP Inspector breaks after an upgrade; pin a known-good version
- MCP Inspector breaks after an upgrade; pin a known-good version fix
- MCP Inspector breaks after an upgrade; pin a known-good version root cause
- inspector
- regression
- versioning
- streamable-http
- mcp-inspector
- npx @modelcontextprotocol/inspector fails with 'sh: mcp-inspector: command not found' or ''mcp-inspector' is not recognized' (0.10.0
- connecting to a Streamable HTTP server crashes with TypeError [ERR_INVALID_STATE]: Invalid state: Controller is already closed (0.17.2, fixed 0.17.5
- it worked yesterday and broke today with no config change because @latest moved
- Inspector is released often and some releases regress
- The usual launch npx @modelcontextprotocol/inspector resolves @latest, so a bad release is picked up automatically and the breakage looks local
- Debugging your MCP server when the Inspector release itself regressed
- Always launching @latest in CI or shared scripts
- Downgrade to the last release that worked for your transport
- modelcontextprotocol/inspector issue 326: 'sh: mcp-inspector: command not found' after upgrading to v0.10.0 (downgrade to 0.9.0
- modelcontextprotocol/inspector issue 951: Controller is already closed on fastmcp Streamable HTTP (downgrade to 0.16.7; fixed in 0.17.5
- mcp-inspector connecting to a Streamable HTTP server crashes with TypeError [ERR_INVALID_STATE]: Invalid state: Controller is already closed (0.17.2, fixed 0.17.5
- mcp-inspector it worked yesterday and broke today with no config change because @latest moved
- ERR_INVALID_STATE

## Affected Tools

- mcp-inspector

## Tags

- mcp
- inspector
- npx
- regression
- versioning
- streamable-http

## Symptoms

- npx @modelcontextprotocol/inspector fails with 'sh: mcp-inspector: command not found' or ''mcp-inspector' is not recognized' (0.10.0)
- connecting to a Streamable HTTP server crashes with TypeError [ERR_INVALID_STATE]: Invalid state: Controller is already closed (0.17.2, fixed 0.17.5)
- it worked yesterday and broke today with no config change because @latest moved

## Environment

- runtime: Node.js
- package_manager: npm
- constraints: Inspector launched via npx @latest, frequent releases with occasional regressions

## Root Cause

- Inspector is released often and some releases regress.
- The usual launch npx @modelcontextprotocol/inspector resolves @latest, so a bad release is picked up automatically and the breakage looks local.

## Fix

1. Pin a known-good version to unblock, e.g. @0.9.0 for the 0.10.0 command-not-found regression or @0.16.7 for the 0.17.2 Controller-already-closed regression.

```bash
npx @modelcontextprotocol/inspector@0.9.0
```
2. Find the release that fixed your symptom and upgrade to it (0.17.5 fixed the Streamable HTTP 'Controller is already closed' crash).
3. Pin an explicit version in scripts instead of relying on @latest.

## Verification

- Run the pinned or fixed version. Expected: Inspector starts and connects without 'command not found' or 'Controller is already closed'.

## Sources

- modelcontextprotocol/inspector issue 326: 'sh: mcp-inspector: command not found' after upgrading to v0.10.0 (downgrade to 0.9.0) (issue): https://github.com/modelcontextprotocol/inspector/issues/326
- modelcontextprotocol/inspector issue 951: Controller is already closed on fastmcp Streamable HTTP (downgrade to 0.16.7; fixed in 0.17.5) (issue): https://github.com/modelcontextprotocol/inspector/issues/951

## Workarounds

- Downgrade to the last release that worked for your transport.

## Anti-patterns

- Debugging your MCP server when the Inspector release itself regressed.
- Always launching @latest in CI or shared scripts.

