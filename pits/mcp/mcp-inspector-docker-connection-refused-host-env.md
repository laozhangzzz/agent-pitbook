---
id: mcp-inspector-docker-connection-refused-host-env
title: MCP Inspector in Docker refuses connections unless HOST and ALLOWED_ORIGINS are set
status: verified
confidence: medium
created_at: 2026-06-21
updated_at: 2026-06-21
last_verified: 2026-06-21
tags: [mcp, inspector, docker, devcontainer, networking, connection-refused, allowed-origins]
affected_tools: [mcp-inspector]
---

# MCP Inspector in Docker refuses connections unless HOST and ALLOWED_ORIGINS are set

## Summary

Running the MCP Inspector container and opening `http://localhost:6274` fails with `ERR_CONNECTION_REFUSED` / `localhost refused to connect`. Inside the container Inspector binds to the loopback interface only and enforces an allowed-origins check. Set `HOST` and `ALLOWED_ORIGINS` env vars so the client and proxy are reachable and the origin is accepted.

## Symptoms

- `curl http://localhost:6274` returns `Failed to connect ... Connection refused`.
- Browser shows `localhost refused to connect` / `ERR_CONNECTION_REFUSED`.
- Same symptom when running Inspector inside a devcontainer.
- The published `docker run ... ghcr.io/modelcontextprotocol/inspector:latest` command alone does not connect.

## Root Cause

Inspector listens on the loopback interface, which inside a container is only reachable by other processes in that container, and it validates request origin. Without telling it which host/origin to accept, connections from the host browser are refused even when ports are published.

## Fix

1. Pass `HOST` and `ALLOWED_ORIGINS` to the container:
   ```bash
   docker run --rm --network host \
     -e HOST=127.0.0.1 -e ALLOWED_ORIGINS=http://127.0.0.1:6274 \
     -p 6274:6274 -p 6277:6277 \
     ghcr.io/modelcontextprotocol/inspector:latest
   ```
2. The same env vars are needed when running Inspector in a devcontainer:
   `HOST=127.0.0.1 ALLOWED_ORIGINS=http://127.0.0.1:6274 npx @modelcontextprotocol/inspector@latest`
3. If it still refuses on a newer OS/Docker combo, try the latest Inspector release; some host networking edge cases were reported on very new macOS/Docker versions.

## Verification

After setting the env vars, `curl http://127.0.0.1:6274` succeeds and the browser loads the Inspector UI.

## Anti-Patterns

- Assuming `-p 6274:6274` alone exposes a loopback-only service.
- Setting `ALLOWED_ORIGINS` to a value that does not match the URL you actually open in the browser.

<!-- pit-record
{
  "id": "mcp-inspector-docker-connection-refused-host-env",
  "title": "MCP Inspector in Docker refuses connections unless HOST and ALLOWED_ORIGINS are set",
  "summary": "MCP Inspector run in Docker refuses connections (ERR_CONNECTION_REFUSED / localhost refused to connect) because inside the container it binds loopback only and enforces an allowed-origins check. Set HOST and ALLOWED_ORIGINS env vars (also needed in devcontainers) so the proxy is reachable and the origin is accepted.",
  "status": "verified",
  "confidence": "medium",
  "created_at": "2026-06-21",
  "updated_at": "2026-06-21",
  "last_verified": "2026-06-21",
  "tags": ["mcp", "inspector", "docker", "devcontainer", "networking", "connection-refused", "allowed-origins"],
  "affected_tools": ["mcp-inspector"],
  "symptoms": [
    "curl http://localhost:6274 returns Failed to connect ... Connection refused",
    "browser shows localhost refused to connect / ERR_CONNECTION_REFUSED",
    "same symptom running Inspector inside a devcontainer",
    "the published docker run inspector:latest command alone does not connect"
  ],
  "environment": {
    "runtime": "Node.js",
    "constraints": ["Inspector in a Docker container or devcontainer", "binds loopback interface", "enforces allowed-origins"]
  },
  "root_cause": [
    "Inspector listens on the loopback interface, which inside a container is only reachable by processes in that container.",
    "It also validates request origin, so without HOST/ALLOWED_ORIGINS the host browser's connection is refused even when ports are published."
  ],
  "fix": [
    {
      "step": "Pass HOST and ALLOWED_ORIGINS to the container run command.",
      "command": "docker run --rm --network host -e HOST=127.0.0.1 -e ALLOWED_ORIGINS=http://127.0.0.1:6274 -p 6274:6274 -p 6277:6277 ghcr.io/modelcontextprotocol/inspector:latest"
    },
    {
      "step": "Use the same env vars when running in a devcontainer.",
      "command": "HOST=127.0.0.1 ALLOWED_ORIGINS=http://127.0.0.1:6274 npx @modelcontextprotocol/inspector@latest"
    },
    {
      "step": "If it still refuses on a very new OS/Docker combo, try the latest Inspector release."
    }
  ],
  "verification": [
    {
      "method": "Curl the UI port after setting the env vars.",
      "command": "curl http://127.0.0.1:6274",
      "expected": "Succeeds and the browser loads the Inspector UI."
    }
  ],
  "workarounds": [
    "Run Inspector directly on the host instead of in a container if env configuration is not possible."
  ],
  "anti_patterns": [
    "Assuming -p 6274:6274 alone exposes a loopback-only service.",
    "Setting ALLOWED_ORIGINS to a value that does not match the URL opened in the browser."
  ],
  "source_links": [
    {
      "title": "modelcontextprotocol/inspector issue 828: Docker container connection refused (HOST + ALLOWED_ORIGINS workaround)",
      "type": "issue",
      "url": "https://github.com/modelcontextprotocol/inspector/issues/828",
      "accessed_at": "2026-06-21"
    }
  ],
  "related": ["docker-published-port-localhost-refused"],
  "safety": {
    "external_text_trusted": false,
    "requires_confirmation": false,
    "notes": ["Some users on very new macOS/Docker versions reported it still failing; the env-var fix worked for most."]
  }
}
-->
