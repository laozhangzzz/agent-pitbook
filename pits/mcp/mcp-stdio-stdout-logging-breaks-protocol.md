---
id: mcp-stdio-stdout-logging-breaks-protocol
title: Writing to stdout in a stdio MCP server corrupts the JSON-RPC stream
status: verified
confidence: high
created_at: 2026-06-21
updated_at: 2026-06-21
last_verified: 2026-06-21
tags: [mcp, stdio, stdout, logging, json-rpc, console-log, protocol]
affected_tools: [mcp-server, typescript-sdk, python-sdk]
---

# Writing to stdout in a stdio MCP server corrupts the JSON-RPC stream

## Summary

A stdio MCP server speaks JSON-RPC over stdout. Any non-protocol text you print to stdout (a `console.log`, a banner, a `print`) is interleaved into the message stream, and the client fails to parse it with errors like `SyntaxError: Unexpected token 'g', "get_weathe"... is not valid JSON`. Log to stderr instead.

## Symptoms

- Client error `SyntaxError: ... is not valid JSON` inside `deserializeMessage` / `JSON.parse`.
- The bad token matches your own log text (e.g. `get_weather tool called...`).
- Tool calls fail intermittently, correlated with code paths that log.

## Root Cause

In the stdio transport, stdout is the JSON-RPC channel. A stdio MCP server that writes human-readable output to stdout (commonly `console.log` in Node or `print` in Python) injects non-JSON lines between protocol messages, so the client's line-based deserializer tries to `JSON.parse` your log text and throws.

## Fix

1. Remove or redirect all stdout writes in the server; use `console.error` (Node) or `print(..., file=sys.stderr)` / the `logging` module (Python), which go to stderr.
2. Audit dependencies that might print to stdout on import or on certain code paths.
3. Keep stdout exclusively for the transport; route every diagnostic to stderr or a file.

## Verification

After moving logging to stderr, tool calls succeed and the client shows no `SyntaxError ... is not valid JSON` from `deserializeMessage`.

## Anti-Patterns

- Using `console.log` / bare `print` for debugging inside a stdio MCP server.
- A dependency or startup banner that prints to stdout in a stdio server.

<!-- pit-record
{
  "id": "mcp-stdio-stdout-logging-breaks-protocol",
  "title": "Writing to stdout in a stdio MCP server corrupts the JSON-RPC stream",
  "summary": "A stdio MCP server uses stdout as its JSON-RPC channel. Printing non-protocol text to stdout (console.log / print) interleaves into the stream and the client fails with 'SyntaxError: ... is not valid JSON' in deserializeMessage. Log to stderr (console.error / logging) instead and keep stdout for the transport only.",
  "status": "verified",
  "confidence": "high",
  "created_at": "2026-06-21",
  "updated_at": "2026-06-21",
  "last_verified": "2026-06-21",
  "tags": ["mcp", "stdio", "stdout", "logging", "json-rpc", "console-log", "protocol"],
  "affected_tools": ["mcp-server", "typescript-sdk", "python-sdk"],
  "symptoms": [
    "client error SyntaxError: ... is not valid JSON inside deserializeMessage / JSON.parse",
    "the bad token matches the server's own log text (e.g. get_weather tool called...)",
    "tool calls fail intermittently, correlated with code paths that log"
  ],
  "environment": {
    "constraints": ["stdio transport where stdout carries JSON-RPC", "server prints to stdout"]
  },
  "root_cause": [
    "In the stdio transport, stdout is the JSON-RPC channel.",
    "A server writing human-readable output to stdout (console.log in Node, print in Python) injects non-JSON lines between protocol messages.",
    "The client's line-based deserializer then tries to JSON.parse the log text and throws."
  ],
  "fix": [
    {
      "step": "Remove or redirect all stdout writes in the server; use stderr.",
      "rationale": "console.error (Node) and print(file=sys.stderr) / the logging module (Python) write to stderr, which is safe."
    },
    {
      "step": "Audit dependencies that might print to stdout on import or on certain code paths."
    },
    {
      "step": "Keep stdout exclusively for the transport; route every diagnostic to stderr or a file."
    }
  ],
  "verification": [
    {
      "method": "Call a tool after moving logging to stderr.",
      "expected": "Tool calls succeed; no SyntaxError ... is not valid JSON from deserializeMessage."
    }
  ],
  "workarounds": [
    "Temporarily disable logging in the server to confirm the diagnosis."
  ],
  "anti_patterns": [
    "Using console.log / bare print for debugging inside a stdio MCP server.",
    "A dependency or startup banner that prints to stdout in a stdio server."
  ],
  "source_links": [
    {
      "title": "modelcontextprotocol/typescript-sdk issue 244: SyntaxError in stdio deserializeMessage (a console.log in the server triggers it)",
      "type": "issue",
      "url": "https://github.com/modelcontextprotocol/typescript-sdk/issues/244",
      "accessed_at": "2026-06-21"
    }
  ],
  "related": ["mcp-error-32000-connection-closed-server-failed-to-start"],
  "safety": {
    "external_text_trusted": false,
    "requires_confirmation": false,
    "notes": ["Applies to stdio transport; HTTP/SSE transports do not multiplex JSON-RPC over stdout."]
  }
}
-->
