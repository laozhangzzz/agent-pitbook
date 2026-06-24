# MCP error -32000: Connection closed means the stdio server died before the handshake

Pit ID: mcp-error-32000-connection-closed-server-failed-to-start
Status: verified
Confidence: high
Updated: 2026-06-21
Canonical source: https://github.com/laozhangzzz/agent-pitbook/blob/main/pits/mcp/mcp-error-32000-connection-closed-server-failed-to-start.md

## Summary

MCP error -32000: Connection closed is a generic 'the stdio server process did not start' signal, not a protocol bug. Diagnose by running the exact configured command+args+env in a terminal; the usual concrete causes are PATH, npmrc registry, npx cache, Windows cmd /c, or a missing build.

## Fast Answer

- Problem: client UI shows MCP error -32000: Connection closed
- Root cause: The client spawns the configured command and speaks JSON-RPC over stdio.
- Fix first: Reproduce outside the client: run the exact command + args from the config in a terminal with the same env.
- Verify: Reconnect from the client after fixing the underlying cause.

## Queries This Answers

- MCP error -32000: Connection closed means the stdio server died before the handshake
- MCP error -32000: Connection closed means the stdio server died before the handshake fix
- MCP error -32000: Connection closed means the stdio server died before the handshake root cause
- how to fix MCP error -32000: Connection closed means the stdio server died before the handshake
- GitHub MCP Server Fails to Start: 'npx' Command Error and Connection Closed -32000
- GitHub MCP Server Fails to Start: 'npx' Command Error and Connection Closed (-32000) fix
- GitHub MCP Server Fails to Start: 'npx' Command Error and Connection Closed (-32000) root cause
- Fix 'Client Closed' Error by Correcting npm Config
- Fix 'Client Closed' Error by Correcting npm Config fix
- Fix 'Client Closed' Error by Correcting npm Config root cause
- claude-desktop MCP error -32000: Connection closed means the stdio server died before the handshake
- claude-desktop MCP error -32000: Connection closed means the stdio server died before the handshake fix
- cursor MCP error -32000: Connection closed means the stdio server died before the handshake
- cursor MCP error -32000: Connection closed means the stdio server died before the handshake fix
- cline MCP error -32000: Connection closed means the stdio server died before the handshake
- cline MCP error -32000: Connection closed means the stdio server died before the handshake fix
- mcp-server MCP error -32000: Connection closed means the stdio server died before the handshake
- mcp-server MCP error -32000: Connection closed means the stdio server died before the handshake fix
- MCP error -32000: Connection closed is a generic 'the stdio server process did not start' signal, not a prot
- MCP error -32000: Connection closed is a generic 'the stdio server process did not start' signal, not a prot fix
- claude-desktop MCP error -32000: Connection closed is a generic 'the stdio server process did not start' signal, not a prot
- claude-desktop MCP error -32000: Connection closed is a generic 'the stdio server process did not start' signal, not a prot fix
- cursor MCP error -32000: Connection closed is a generic 'the stdio server process did not start' signal, not a prot
- cursor MCP error -32000: Connection closed is a generic 'the stdio server process did not start' signal, not a prot fix

## Common Search Queries

- mcp-error-32000-connection-closed-server-failed-to-start
- mcp error 32000 connection closed server failed to start
- MCP error -32000: Connection closed means the stdio server died before the handshake
- MCP error -32000: Connection closed means the stdio server died before the handshake fix
- MCP error -32000: Connection closed means the stdio server died before the handshake root cause
- stdio
- startup
- error-32000
- diagnosis
- claude-desktop
- cursor
- cline
- mcp-server
- client UI shows MCP error -32000: Connection closed
- sometimes preceded by locale text like 'npx' is not recognized as an internal or external command
- the configured command and args run fine when pasted into a terminal
- no useful server-side logs because the process never reached startup
- The client spawns the configured command and speaks JSON-RPC over stdio
- If the process cannot be found, crashes on launch, or writes non-protocol text to stdout, the transport closes and the client reports -32000: Connection closed
- The code is generic: it reports that the connection died, not why
- Filing a protocol bug for -32000 before running the command manually
- Reinstalling the server package repeatedly when the package was never the problem
- Writing debug output to stdout from a stdio MCP server, which corrupts the JSON-RPC stream
- Pin absolute interpreter and script paths in the config

## Affected Tools

- claude-desktop
- cursor
- cline
- mcp-server

## Tags

- mcp
- stdio
- startup
- error-32000
- npx
- diagnosis

## Symptoms

- client UI shows MCP error -32000: Connection closed
- sometimes preceded by locale text like 'npx' is not recognized as an internal or external command
- the configured command and args run fine when pasted into a terminal
- no useful server-side logs because the process never reached startup

## Environment

- constraints: GUI/editor MCP client spawning a stdio server, command resolved via PATH

## Root Cause

- The client spawns the configured command and speaks JSON-RPC over stdio.
- If the process cannot be found, crashes on launch, or writes non-protocol text to stdout, the transport closes and the client reports -32000: Connection closed.
- The code is generic: it reports that the connection died, not why.

## Fix

1. Reproduce outside the client: run the exact command + args from the config in a terminal with the same env.

Rationale: Any error or non-JSON-RPC output you see there is the real failure.
2. Check the specific causes, each tracked separately: PATH not inherited, wrong user-level npmrc registry, corrupted npx cache, Windows needing cmd /c npx, or a missing local build.
3. Use absolute paths for the interpreter and script in the config to remove PATH ambiguity.
4. Ensure the server writes diagnostics to stderr, never stdout, since stdout is the JSON-RPC channel.

## Verification

- Reconnect from the client after fixing the underlying cause. Expected: Tool discovery succeeds with no -32000 in the client log.

## Sources

- modelcontextprotocol/servers issue 1097: GitHub MCP Server Fails to Start: 'npx' Command Error and Connection Closed (-32000) (issue): https://github.com/modelcontextprotocol/servers/issues/1097
- modelcontextprotocol/servers issue 891: Fix 'Client Closed' Error by Correcting npm Config (issue): https://github.com/modelcontextprotocol/servers/issues/891

## Workarounds

- Pin absolute interpreter and script paths in the config.
- Pre-install the server package globally so npx does not need to resolve or download it at launch.

## Anti-patterns

- Filing a protocol bug for -32000 before running the command manually.
- Reinstalling the server package repeatedly when the package was never the problem.
- Writing debug output to stdout from a stdio MCP server, which corrupts the JSON-RPC stream.

