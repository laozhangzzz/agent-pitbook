# MCP Inspector in Docker refuses connections unless HOST and ALLOWED_ORIGINS are set

Pit ID: mcp-inspector-docker-connection-refused-host-env
Status: verified
Confidence: medium
Updated: 2026-06-21
Canonical source: https://github.com/laozhangzzz/agent-pitbook/blob/main/pits/mcp/mcp-inspector-docker-connection-refused-host-env.md

## Summary

MCP Inspector run in Docker refuses connections (ERR_CONNECTION_REFUSED / localhost refused to connect) because inside the container it binds loopback only and enforces an allowed-origins check. Set HOST and ALLOWED_ORIGINS env vars (also needed in devcontainers) so the proxy is reachable and the origin is accepted.

## Fast Answer

- Problem: curl http://localhost:6274 returns Failed to connect ... Connection refused
- Root cause: Inspector listens on the loopback interface, which inside a container is only reachable by processes in that container.
- Fix first: Pass HOST and ALLOWED_ORIGINS to the container run command.
- Verify: Curl the UI port after setting the env vars.

## Queries This Answers

- Docker container connection refused HOST + ALLOWED_ORIGINS workaround
- Docker container connection refused (HOST + ALLOWED_ORIGINS workaround) fix
- Docker container connection refused (HOST + ALLOWED_ORIGINS workaround) root cause
- MCP Inspector in Docker refuses connections unless HOST and ALLOWED_ORIGINS are set
- MCP Inspector in Docker refuses connections unless HOST and ALLOWED_ORIGINS are set fix
- MCP Inspector in Docker refuses connections unless HOST and ALLOWED_ORIGINS are set root cause
- how to fix MCP Inspector in Docker refuses connections unless HOST and ALLOWED_ORIGINS are set
- mcp-inspector refuses connections unless host allowed origins set

## Common Search Queries

- mcp-inspector-docker-connection-refused-host-env
- mcp inspector docker connection refused host env
- MCP Inspector in Docker refuses connections unless HOST and ALLOWED_ORIGINS are set
- MCP Inspector in Docker refuses connections unless HOST and ALLOWED_ORIGINS are set fix
- MCP Inspector in Docker refuses connections unless HOST and ALLOWED_ORIGINS are set root cause
- inspector
- docker
- devcontainer
- networking
- connection-refused
- allowed-origins
- mcp-inspector

## Affected Tools

- mcp-inspector

## Tags

- mcp
- inspector
- docker
- devcontainer
- networking
- connection-refused
- allowed-origins

## Symptoms

- curl http://localhost:6274 returns Failed to connect ... Connection refused
- browser shows localhost refused to connect / ERR_CONNECTION_REFUSED
- same symptom running Inspector inside a devcontainer
- the published docker run inspector:latest command alone does not connect

## Environment

- runtime: Node.js
- constraints: Inspector in a Docker container or devcontainer, binds loopback interface, enforces allowed-origins

## Root Cause

- Inspector listens on the loopback interface, which inside a container is only reachable by processes in that container.
- It also validates request origin, so without HOST/ALLOWED_ORIGINS the host browser's connection is refused even when ports are published.

## Fix

1. Pass HOST and ALLOWED_ORIGINS to the container run command.

```bash
docker run --rm --network host -e HOST=127.0.0.1 -e ALLOWED_ORIGINS=http://127.0.0.1:6274 -p 6274:6274 -p 6277:6277 ghcr.io/modelcontextprotocol/inspector:latest
```
2. Use the same env vars when running in a devcontainer.

```bash
HOST=127.0.0.1 ALLOWED_ORIGINS=http://127.0.0.1:6274 npx @modelcontextprotocol/inspector@latest
```
3. If it still refuses on a very new OS/Docker combo, try the latest Inspector release.

## Verification

- Curl the UI port after setting the env vars. Expected: Succeeds and the browser loads the Inspector UI.

## Sources

- modelcontextprotocol/inspector issue 828: Docker container connection refused (HOST + ALLOWED_ORIGINS workaround) (issue): https://github.com/modelcontextprotocol/inspector/issues/828

## Workarounds

- Run Inspector directly on the host instead of in a container if env configuration is not possible.

## Anti-patterns

- Assuming -p 6274:6274 alone exposes a loopback-only service.
- Setting ALLOWED_ORIGINS to a value that does not match the URL opened in the browser.

