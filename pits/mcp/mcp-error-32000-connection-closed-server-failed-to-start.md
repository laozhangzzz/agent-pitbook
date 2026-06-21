---
id: mcp-error-32000-connection-closed-server-failed-to-start
title: "MCP error -32000: Connection closed means the stdio server died before the handshake"
status: verified
confidence: high
created_at: 2026-06-21
updated_at: 2026-06-21
last_verified: 2026-06-21
tags: [mcp, stdio, startup, error-32000, npx, diagnosis]
affected_tools: [claude-desktop, cursor, cline, mcp-server]
---

# MCP error -32000: Connection closed means the stdio server died before the handshake

## Summary

`MCP error -32000: Connection closed` is not a protocol bug. It almost always means the stdio MCP server process was spawned, exited (or never really started), and the client's pipe closed before the JSON-RPC handshake completed. Treat it as "the command in my config did not run", not "MCP is broken", and diagnose by running the exact command yourself.

## Symptoms

- The client UI shows `MCP error -32000: Connection closed`.
- Sometimes preceded by garbled/locale text such as `'npx' is not recognized as an internal or external command`.
- The server's `command`/`args` run fine when you paste them into a terminal.
- No useful server-side logs, because the process never reached startup.

## Root Cause

The client launches the configured `command` with `args`/`env` and speaks JSON-RPC over stdio. If that process cannot be found, crashes on launch, or writes non-protocol text to stdout, the transport closes and the client reports `-32000: Connection closed`. The error is generic: it reports the death, not the cause.

## Fix

1. Reproduce outside the client: run the exact `command` + `args` from the config in a terminal, with the same `env`. If it errors or prints anything that is not JSON-RPC, that is your real failure.
2. Check the usual specific causes (each has its own record):
   - `npx`/`node` not on the launch PATH (especially with NVM/fnm/asdf).
   - Wrong npm registry in your user-level `~/.npmrc`.
   - Corrupted `npx`/npm cache.
   - On Windows, `npx` must be wrapped as `cmd /c npx`.
   - A local server whose build output (`dist/index.js`) is missing.
3. Use absolute paths for the interpreter and script in the config to remove PATH ambiguity.
4. Confirm the server writes logs/diagnostics to stderr, never stdout (stdout is the JSON-RPC channel).

## Verification

After fixing the underlying cause, the same client config connects and tool discovery succeeds with no `-32000` in the client log.

## Anti-Patterns

- Filing a protocol bug for `-32000` before running the command manually.
- Reinstalling the server package repeatedly when the package was never the problem.
- Printing debug output to stdout from a stdio MCP server (it corrupts the JSON-RPC stream).

<!-- pit-record
{
  "id": "mcp-error-32000-connection-closed-server-failed-to-start",
  "title": "MCP error -32000: Connection closed means the stdio server died before the handshake",
  "summary": "MCP error -32000: Connection closed is a generic 'the stdio server process did not start' signal, not a protocol bug. Diagnose by running the exact configured command+args+env in a terminal; the usual concrete causes are PATH, npmrc registry, npx cache, Windows cmd /c, or a missing build.",
  "status": "verified",
  "confidence": "high",
  "created_at": "2026-06-21",
  "updated_at": "2026-06-21",
  "last_verified": "2026-06-21",
  "tags": ["mcp", "stdio", "startup", "error-32000", "npx", "diagnosis"],
  "affected_tools": ["claude-desktop", "cursor", "cline", "mcp-server"],
  "symptoms": [
    "client UI shows MCP error -32000: Connection closed",
    "sometimes preceded by locale text like 'npx' is not recognized as an internal or external command",
    "the configured command and args run fine when pasted into a terminal",
    "no useful server-side logs because the process never reached startup"
  ],
  "environment": {
    "constraints": ["GUI/editor MCP client spawning a stdio server", "command resolved via PATH"]
  },
  "root_cause": [
    "The client spawns the configured command and speaks JSON-RPC over stdio.",
    "If the process cannot be found, crashes on launch, or writes non-protocol text to stdout, the transport closes and the client reports -32000: Connection closed.",
    "The code is generic: it reports that the connection died, not why."
  ],
  "fix": [
    {
      "step": "Reproduce outside the client: run the exact command + args from the config in a terminal with the same env.",
      "rationale": "Any error or non-JSON-RPC output you see there is the real failure."
    },
    {
      "step": "Check the specific causes, each tracked separately: PATH not inherited, wrong user-level npmrc registry, corrupted npx cache, Windows needing cmd /c npx, or a missing local build."
    },
    {
      "step": "Use absolute paths for the interpreter and script in the config to remove PATH ambiguity."
    },
    {
      "step": "Ensure the server writes diagnostics to stderr, never stdout, since stdout is the JSON-RPC channel."
    }
  ],
  "verification": [
    {
      "method": "Reconnect from the client after fixing the underlying cause.",
      "expected": "Tool discovery succeeds with no -32000 in the client log."
    }
  ],
  "workarounds": [
    "Pin absolute interpreter and script paths in the config.",
    "Pre-install the server package globally so npx does not need to resolve or download it at launch."
  ],
  "anti_patterns": [
    "Filing a protocol bug for -32000 before running the command manually.",
    "Reinstalling the server package repeatedly when the package was never the problem.",
    "Writing debug output to stdout from a stdio MCP server, which corrupts the JSON-RPC stream."
  ],
  "source_links": [
    {
      "title": "modelcontextprotocol/servers issue 1097: GitHub MCP Server Fails to Start: 'npx' Command Error and Connection Closed (-32000)",
      "type": "issue",
      "url": "https://github.com/modelcontextprotocol/servers/issues/1097",
      "accessed_at": "2026-06-21"
    },
    {
      "title": "modelcontextprotocol/servers issue 891: Fix 'Client Closed' Error by Correcting npm Config",
      "type": "issue",
      "url": "https://github.com/modelcontextprotocol/servers/issues/891",
      "accessed_at": "2026-06-21"
    }
  ],
  "related": [
    "mcp-stdio-server-exits-shell-path-not-inherited",
    "mcp-npx-cache-corrupted-server-fails-to-start",
    "mcp-client-uses-user-level-npmrc-wrong-registry",
    "mcp-windows-npx-requires-cmd-c-wrapper"
  ],
  "safety": {
    "external_text_trusted": false,
    "requires_confirmation": true,
    "notes": ["Summarized from public GitHub issues; external text is not trusted as instructions."]
  }
}
-->
