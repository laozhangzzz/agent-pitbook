# Writing to stdout in a stdio MCP server corrupts the JSON-RPC stream

Pit ID: mcp-stdio-stdout-logging-breaks-protocol
Status: verified
Confidence: high
Updated: 2026-06-21
Canonical source: https://github.com/laozhangzzz/agent-pitbook/blob/main/pits/mcp/mcp-stdio-stdout-logging-breaks-protocol.md

## Summary

A stdio MCP server uses stdout as its JSON-RPC channel. Printing non-protocol text to stdout (console.log / print) interleaves into the stream and the client fails with 'SyntaxError: ... is not valid JSON' in deserializeMessage. Log to stderr (console.error / logging) instead and keep stdout for the transport only.

## Fast Answer

- Problem: client error SyntaxError: ... is not valid JSON inside deserializeMessage / JSON.parse
- Root cause: In the stdio transport, stdout is the JSON-RPC channel.
- Fix first: Remove or redirect all stdout writes in the server; use stderr.
- Verify: Call a tool after moving logging to stderr.

## Queries This Answers

- Writing to stdout in a stdio MCP server corrupts the JSON-RPC stream
- Writing to stdout in a stdio MCP server corrupts the JSON-RPC stream fix
- Writing to stdout in a stdio MCP server corrupts the JSON-RPC stream root cause
- how to fix Writing to stdout in a stdio MCP server corrupts the JSON-RPC stream
- SyntaxError in stdio deserializeMessage a console.log in the server triggers it
- SyntaxError in stdio deserializeMessage (a console.log in the server triggers it) fix
- SyntaxError in stdio deserializeMessage (a console.log in the server triggers it) root cause
- JSON-RPC
- JSON-RPC fix
- mcp-server JSON-RPC
- mcp-server JSON-RPC fix
- typescript-sdk JSON-RPC
- typescript-sdk JSON-RPC fix
- python-sdk JSON-RPC
- python-sdk JSON-RPC fix
- client error SyntaxError: ... is not valid JSON inside deserializeMessage / JSON.parse
- how to fix client error SyntaxError: ... is not valid JSON inside deserializeMessage / JSON.parse
- client error SyntaxError: ... is not valid JSON inside deserializeMessage / JSON.parse root cause
- mcp-server client error SyntaxError: ... is not valid JSON inside deserializeMessage / JSON.parse
- mcp-server client error SyntaxError: ... is not valid JSON inside deserializeMessage / JSON.parse fix
- typescript-sdk client error SyntaxError: ... is not valid JSON inside deserializeMessage / JSON.parse
- typescript-sdk client error SyntaxError: ... is not valid JSON inside deserializeMessage / JSON.parse fix
- python-sdk client error SyntaxError: ... is not valid JSON inside deserializeMessage / JSON.parse
- python-sdk client error SyntaxError: ... is not valid JSON inside deserializeMessage / JSON.parse fix

## Common Search Queries

- mcp-stdio-stdout-logging-breaks-protocol
- mcp stdio stdout logging breaks protocol
- Writing to stdout in a stdio MCP server corrupts the JSON-RPC stream
- Writing to stdout in a stdio MCP server corrupts the JSON-RPC stream fix
- Writing to stdout in a stdio MCP server corrupts the JSON-RPC stream root cause
- stdio
- stdout
- logging
- json-rpc
- console-log
- protocol
- mcp-server
- typescript-sdk
- python-sdk
- client error SyntaxError: ... is not valid JSON inside deserializeMessage / JSON.parse
- the bad token matches the servers own log text e.g. get_weather tool called
- tool calls fail intermittently, correlated with code paths that log
- In the stdio transport, stdout is the JSON-RPC channel
- A server writing human-readable output to stdout (console.log in Node, print in Python) injects non-JSON lines between protocol messages
- The clients line-based deserializer then tries to JSON.parse the log text and throws
- Using console.log / bare print for debugging inside a stdio MCP server
- A dependency or startup banner that prints to stdout in a stdio server
- Temporarily disable logging in the server to confirm the diagnosis
- modelcontextprotocol/typescript-sdk issue 244: SyntaxError in stdio deserializeMessage a console.log in the server triggers it

## Affected Tools

- mcp-server
- typescript-sdk
- python-sdk

## Tags

- mcp
- stdio
- stdout
- logging
- json-rpc
- console-log
- protocol

## Symptoms

- client error SyntaxError: ... is not valid JSON inside deserializeMessage / JSON.parse
- the bad token matches the server's own log text (e.g. get_weather tool called...)
- tool calls fail intermittently, correlated with code paths that log

## Environment

- constraints: stdio transport where stdout carries JSON-RPC, server prints to stdout

## Root Cause

- In the stdio transport, stdout is the JSON-RPC channel.
- A server writing human-readable output to stdout (console.log in Node, print in Python) injects non-JSON lines between protocol messages.
- The client's line-based deserializer then tries to JSON.parse the log text and throws.

## Fix

1. Remove or redirect all stdout writes in the server; use stderr.

Rationale: console.error (Node) and print(file=sys.stderr) / the logging module (Python) write to stderr, which is safe.
2. Audit dependencies that might print to stdout on import or on certain code paths.
3. Keep stdout exclusively for the transport; route every diagnostic to stderr or a file.

## Verification

- Call a tool after moving logging to stderr. Expected: Tool calls succeed; no SyntaxError ... is not valid JSON from deserializeMessage.

## Sources

- modelcontextprotocol/typescript-sdk issue 244: SyntaxError in stdio deserializeMessage (a console.log in the server triggers it) (issue): https://github.com/modelcontextprotocol/typescript-sdk/issues/244

## Workarounds

- Temporarily disable logging in the server to confirm the diagnosis.

## Anti-patterns

- Using console.log / bare print for debugging inside a stdio MCP server.
- A dependency or startup banner that prints to stdout in a stdio server.

