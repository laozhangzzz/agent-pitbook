# MCP SSE session lost across workers/pods: Could not find session for ID (404)

Pit ID: mcp-sse-session-lost-multi-worker
Status: verified
Confidence: high
Updated: 2026-06-21
Canonical source: https://github.com/laozhangzzz/agent-pitbook/blob/main/pits/mcp/mcp-sse-session-lost-multi-worker.md

## Summary

An MCP SSE server behind multiple gunicorn workers or k8s pods drops sessions: SSE opens, first POST returns 202, later POSTs return 404 with 'Could not find session for ID'. SSE keeps session state in one process's memory while a load balancer routes follow-ups elsewhere. Use stateless Streamable HTTP (FastMCP stateless_http=True) or sticky routing.

## Fast Answer

- Problem: SSE connection opens (200), first POST returns 202, later POSTs return 404
- Root cause: The SSE transport is stateful: the session lives in the memory of the worker/pod that accepted the SSE connection.
- Fix first: Preferred: run stateless with Streamable HTTP so no per-connection in-memory session is required.
- Verify: Send repeated messages on one session under a multi-instance deployment after the change.

## Queries This Answers

- MCP Server Session Lost in Multi-Worker Environment comments confirm stateless_http=True and ingress sticky-hash fixes
- MCP Server Session Lost in Multi-Worker Environment (comments confirm stateless_http=True and ingress sticky-hash fixes) fix
- MCP Server Session Lost in Multi-Worker Environment (comments confirm stateless_http=True and ingress sticky-hash fixes) root cause
- MCP SSE session lost across workers/pods: Could not find session for ID 404
- MCP SSE session lost across workers/pods: Could not find session for ID (404) fix
- MCP SSE session lost across workers/pods: Could not find session for ID (404) root cause
- how to fix MCP SSE session lost across workers/pods: Could not find session for ID 404
- mcp-server lost across workers pods find id 404

## Common Search Queries

- mcp-sse-session-lost-multi-worker
- mcp sse session lost multi worker
- MCP SSE session lost across workers/pods: Could not find session for ID 404
- MCP SSE session lost across workers/pods: Could not find session for ID (404) fix
- MCP SSE session lost across workers/pods: Could not find session for ID (404) root cause
- sessions
- kubernetes
- gunicorn
- scaling
- streamable-http
- python-sdk
- mcp-server

## Affected Tools

- mcp-server
- python-sdk
- fastmcp

## Tags

- mcp
- sse
- sessions
- kubernetes
- gunicorn
- scaling
- streamable-http
- python-sdk

## Symptoms

- SSE connection opens (200), first POST returns 202, later POSTs return 404
- server log: WARNING mcp.server.sse Could not find session for ID: <uuid>
- deployment uses gunicorn workers > 1 or multiple replicas behind a load balancer
- worse under autoscaling as pods are added/removed

## Environment

- language: Python
- framework: FastMCP / MCP Python SDK
- constraints: stateful SSE transport, multi-worker gunicorn or multi-pod Kubernetes, load balancer without session affinity

## Root Cause

- The SSE transport is stateful: the session lives in the memory of the worker/pod that accepted the SSE connection.
- A subsequent POST /messages?session_id=... can be routed to a different worker/pod with no record of that session, returning 404.

## Fix

1. Preferred: run stateless with Streamable HTTP so no per-connection in-memory session is required.

```bash
FastMCP("server", stateless_http=True)
```
2. If keeping stateful SSE, pin requests to the originating instance with sticky routing (Nginx ingress upstream-hash-by on a stable per-session value).

Rationale: Use a stable header like $http_x_user_id; fall back to $remote_addr only when clients have distinct IPs.
3. Avoid multi-worker for a single stateful instance unless sessions are shared out of process.

## Verification

- Send repeated messages on one session under a multi-instance deployment after the change. Expected: No 404 / 'Could not find session for ID', even under scaling.

## Sources

- modelcontextprotocol/python-sdk issue 520: MCP Server Session Lost in Multi-Worker Environment (comments confirm stateless_http=True and ingress sticky-hash fixes) (issue): https://github.com/modelcontextprotocol/python-sdk/issues/520

## Workarounds

- Sticky load-balancer routing keyed on a stable per-session identifier.

## Anti-patterns

- Running stateful SSE with workers > 1 or multiple replicas and no sticky routing.
- Hashing on $remote_addr when clients share IPs, which still splits sessions.

