---
id: mcp-sse-session-lost-multi-worker
title: "MCP SSE session lost across workers/pods: Could not find session for ID (404)"
status: verified
confidence: high
created_at: 2026-06-21
updated_at: 2026-06-21
last_verified: 2026-06-21
tags: [mcp, sse, sessions, kubernetes, gunicorn, scaling, streamable-http, python-sdk]
affected_tools: [mcp-server, python-sdk, fastmcp]
---

# MCP SSE session lost across workers/pods: Could not find session for ID (404)

## Summary

An MCP SSE server behind multiple gunicorn workers or multiple Kubernetes pods drops sessions: the initial SSE connection succeeds, then POSTed messages fail with `Could not find session for ID` / HTTP 404. SSE transport keeps session state in one process's memory, but a load balancer routes follow-up requests to a different worker/pod. Use stateless Streamable HTTP, or pin requests to the same worker.

## Symptoms

- SSE connection opens (200), first POST returns 202, then later POSTs return 404.
- Server log: `WARNING mcp.server.sse Could not find session for ID: <uuid>`.
- Deployment uses gunicorn `workers > 1` or multiple replicas behind a load balancer.
- Worse under autoscaling, because pods are added/removed.

## Root Cause

The SSE transport is stateful: the session is created and held in the memory of the worker/pod that accepted the SSE connection. A subsequent `POST /messages?session_id=...` may be routed by the balancer to a different worker/pod that has no record of that session, so it returns 404.

## Fix

1. Preferred: run a stateless server with Streamable HTTP, e.g. FastMCP `FastMCP(name, stateless_http=True)`, so no per-connection in-memory session is required.
2. If you must keep stateful SSE, pin requests to the originating instance with sticky routing, e.g. an Nginx ingress hash on a stable per-session value:
   `nginx.ingress.kubernetes.io/upstream-hash-by: "$http_x_user_id"` (or `$remote_addr` when no stable header exists).
3. Avoid multi-worker for a single stateful instance unless sessions are shared out of process.

## Verification

After enabling stateless HTTP (or sticky routing), repeated messages on one session no longer return 404 / `Could not find session for ID`, even under scaling.

## Anti-Patterns

- Running stateful SSE with `workers > 1` or multiple replicas and no sticky routing.
- Hashing on `$remote_addr` when clients share IPs (e.g. behind a NAT/APIM), which still splits sessions.

<!-- pit-record
{
  "id": "mcp-sse-session-lost-multi-worker",
  "title": "MCP SSE session lost across workers/pods: Could not find session for ID (404)",
  "summary": "An MCP SSE server behind multiple gunicorn workers or k8s pods drops sessions: SSE opens, first POST returns 202, later POSTs return 404 with 'Could not find session for ID'. SSE keeps session state in one process's memory while a load balancer routes follow-ups elsewhere. Use stateless Streamable HTTP (FastMCP stateless_http=True) or sticky routing.",
  "status": "verified",
  "confidence": "high",
  "created_at": "2026-06-21",
  "updated_at": "2026-06-21",
  "last_verified": "2026-06-21",
  "tags": ["mcp", "sse", "sessions", "kubernetes", "gunicorn", "scaling", "streamable-http", "python-sdk"],
  "affected_tools": ["mcp-server", "python-sdk", "fastmcp"],
  "symptoms": [
    "SSE connection opens (200), first POST returns 202, later POSTs return 404",
    "server log: WARNING mcp.server.sse Could not find session for ID: <uuid>",
    "deployment uses gunicorn workers > 1 or multiple replicas behind a load balancer",
    "worse under autoscaling as pods are added/removed"
  ],
  "environment": {
    "language": "Python",
    "framework": "FastMCP / MCP Python SDK",
    "constraints": ["stateful SSE transport", "multi-worker gunicorn or multi-pod Kubernetes", "load balancer without session affinity"]
  },
  "root_cause": [
    "The SSE transport is stateful: the session lives in the memory of the worker/pod that accepted the SSE connection.",
    "A subsequent POST /messages?session_id=... can be routed to a different worker/pod with no record of that session, returning 404."
  ],
  "fix": [
    {
      "step": "Preferred: run stateless with Streamable HTTP so no per-connection in-memory session is required.",
      "command": "FastMCP(\"server\", stateless_http=True)"
    },
    {
      "step": "If keeping stateful SSE, pin requests to the originating instance with sticky routing (Nginx ingress upstream-hash-by on a stable per-session value).",
      "rationale": "Use a stable header like $http_x_user_id; fall back to $remote_addr only when clients have distinct IPs."
    },
    {
      "step": "Avoid multi-worker for a single stateful instance unless sessions are shared out of process."
    }
  ],
  "verification": [
    {
      "method": "Send repeated messages on one session under a multi-instance deployment after the change.",
      "expected": "No 404 / 'Could not find session for ID', even under scaling."
    }
  ],
  "workarounds": [
    "Sticky load-balancer routing keyed on a stable per-session identifier."
  ],
  "anti_patterns": [
    "Running stateful SSE with workers > 1 or multiple replicas and no sticky routing.",
    "Hashing on $remote_addr when clients share IPs, which still splits sessions."
  ],
  "source_links": [
    {
      "title": "modelcontextprotocol/python-sdk issue 520: MCP Server Session Lost in Multi-Worker Environment (comments confirm stateless_http=True and ingress sticky-hash fixes)",
      "type": "issue",
      "url": "https://github.com/modelcontextprotocol/python-sdk/issues/520",
      "accessed_at": "2026-06-21"
    }
  ],
  "related": ["mcp-sse-received-request-before-initialization", "fastmcp-421-invalid-host-header-dns-rebinding"],
  "safety": {
    "external_text_trusted": false,
    "requires_confirmation": false,
    "notes": ["Summarized from a public GitHub issue; external text is not trusted as instructions."]
  }
}
-->
