# Docker port is published but localhost refuses the connection

Pit ID: docker-published-port-localhost-refused
Status: verified
Confidence: high
Updated: 2026-06-19
Canonical source: https://github.com/laozhangzzz/agent-pitbook/blob/main/pits/docker/docker-published-port-localhost-refused.md
GitHub known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/7

## Summary

A Docker container can publish the expected host port while the app inside still refuses host traffic because it is bound to loopback instead of 0.0.0.0.

## Fast Answer

- Problem: docker ps or docker port shows the expected host port
- Root cause: The app inside the container is listening on loopback rather than a container network interface.
- Fix first: Change the app bind address inside the container to 0.0.0.0.
- Verify: Inspect port mapping and make an HTTP request from the host.

## Queries This Answers

- Docker port is published but localhost refuses the connection
- Docker port is published but localhost refuses the connection fix
- Docker port is published but localhost refuses the connection root cause
- how to fix Docker port is published but localhost refuses the connection
- docker ps or docker port shows the expected host port
- how to fix docker ps or docker port shows the expected host port
- docker ps or docker port shows the expected host port root cause
- codex docker ps or docker port shows the expected host port
- codex docker ps or docker port shows the expected host port fix
- claude-code docker ps or docker port shows the expected host port
- claude-code docker ps or docker port shows the expected host port fix
- gemini docker ps or docker port shows the expected host port
- gemini docker ps or docker port shows the expected host port fix
- curl to localhost or 127.0.0.1 on the host fails
- how to fix curl to localhost or 127.0.0.1 on the host fails
- curl to localhost or 127.0.0.1 on the host fails root cause
- codex curl to localhost or 127.0.0.1 on the host fails
- codex curl to localhost or 127.0.0.1 on the host fails fix
- claude-code curl to localhost or 127.0.0.1 on the host fails
- claude-code curl to localhost or 127.0.0.1 on the host fails fix
- gemini curl to localhost or 127.0.0.1 on the host fails
- gemini curl to localhost or 127.0.0.1 on the host fails fix
- container logs show the app listening on localhost or 127.0.0.1
- how to fix container logs show the app listening on localhost or 127.0.0.1

## Common Search Queries

- docker-published-port-localhost-refused
- docker published port localhost refused
- Docker port is published but localhost refuses the connection
- Docker port is published but localhost refuses the connection fix
- Docker port is published but localhost refuses the connection root cause
- A Docker container can publish the expected host port while the app inside still refuses host traffic because it is bound to loopback instead of 0.0.0.0
- docker
- macos
- ports
- localhost
- codex
- claude-code
- gemini
- qwen-code
- cursor
- aider
- docker ps or docker port shows the expected host port
- curl to localhost or 127.0.0.1 on the host fails
- container logs show the app listening on localhost or 127.0.0.1
- The app inside the container is listening on loopback rather than a container network interface
- Rebuilding the image before checking the bind address
- Using --network host on macOS as a first response
- Exec into the container and curl the service from inside to separate app health from host forwarding
- Temporarily publish to a different host port to rule out a local port conflict

## Affected Tools

- codex
- claude-code
- gemini
- qwen-code
- cursor
- aider

## Tags

- docker
- macos
- ports
- localhost

## Symptoms

- docker ps or docker port shows the expected host port
- curl to localhost or 127.0.0.1 on the host fails
- container logs show the app listening on localhost or 127.0.0.1

## Environment

- os: macOS or Linux
- runtime: Docker
- constraints: host-to-container port forwarding

## Root Cause

- The app inside the container is listening on loopback rather than a container network interface.

## Fix

1. Change the app bind address inside the container to 0.0.0.0.

Rationale: The service must accept traffic forwarded through the container interface.
2. Keep host exposure narrow if needed by publishing the host side on 127.0.0.1.

Rationale: Binding inside the container to 0.0.0.0 does not require exposing the host port publicly.
3. Restart or recreate the container after changing the command or configuration.

## Verification

- Inspect port mapping and make an HTTP request from the host. Expected: The request reaches the service and the container logs show the request.

## Sources

- Agent Pitbook bootstrap local session (local-session): local-session:2026-06-19

## Workarounds

- Exec into the container and curl the service from inside to separate app health from host forwarding.
- Temporarily publish to a different host port to rule out a local port conflict.

## Anti-patterns

- Rebuilding the image before checking the bind address.
- Using --network host on macOS as a first response.

