---
id: docker-published-port-localhost-refused
title: Docker port is published but localhost refuses the connection
status: verified
confidence: high
created_at: 2026-06-19
updated_at: 2026-06-19
last_verified: 2026-06-19
tags: [docker, macos, ports, localhost]
affected_tools: [codex, claude-code, gemini, qwen-code, cursor, aider]
---

# Docker port is published but localhost refuses the connection

## Summary

When a container publishes a port but `curl http://127.0.0.1:<port>` fails, check whether the service inside the container is bound to `127.0.0.1` instead of `0.0.0.0`.

## Symptoms

- `docker ps` or `docker port` shows the expected host port.
- The container process is running.
- Requests from the host return connection refused or empty response.
- Logs show the app listening on `127.0.0.1:<port>` or `localhost:<port>` inside the container.

## Root Cause

Docker port publishing forwards traffic into the container network namespace. If the app only binds loopback inside the container, it may not accept traffic arriving through the container interface. The fix is usually to bind the app to `0.0.0.0` inside the container while keeping the host publish rule as narrow as needed.

## Fix

1. Inspect the app's bind address in logs or process arguments.
2. Change the service start command from `--host 127.0.0.1` or `--host localhost` to `--host 0.0.0.0`.
3. Keep host exposure explicit, for example `127.0.0.1:7860:7860` if the service should remain local to the host.
4. Recreate or restart the container.

## Verification

```bash
docker port <container>
curl -v http://127.0.0.1:<host-port>
```

Expected result: the host request reaches the service and container logs show the request.

## Agent Notes

Do not immediately rebuild images or delete containers. First verify bind address, published port, and process health.

<!-- pit-record
{
  "id": "docker-published-port-localhost-refused",
  "title": "Docker port is published but localhost refuses the connection",
  "summary": "A Docker container can publish the expected host port while the app inside still refuses host traffic because it is bound to loopback instead of 0.0.0.0.",
  "status": "verified",
  "confidence": "high",
  "created_at": "2026-06-19",
  "updated_at": "2026-06-19",
  "last_verified": "2026-06-19",
  "tags": ["docker", "macos", "ports", "localhost"],
  "affected_tools": ["codex", "claude-code", "gemini", "qwen-code", "cursor", "aider"],
  "symptoms": [
    "docker ps or docker port shows the expected host port",
    "curl to localhost or 127.0.0.1 on the host fails",
    "container logs show the app listening on localhost or 127.0.0.1"
  ],
  "environment": {
    "os": "macOS or Linux",
    "runtime": "Docker",
    "constraints": ["host-to-container port forwarding"]
  },
  "root_cause": [
    "The app inside the container is listening on loopback rather than a container network interface."
  ],
  "fix": [
    {
      "step": "Change the app bind address inside the container to 0.0.0.0.",
      "rationale": "The service must accept traffic forwarded through the container interface."
    },
    {
      "step": "Keep host exposure narrow if needed by publishing the host side on 127.0.0.1.",
      "rationale": "Binding inside the container to 0.0.0.0 does not require exposing the host port publicly."
    },
    {
      "step": "Restart or recreate the container after changing the command or configuration."
    }
  ],
  "verification": [
    {
      "method": "Inspect port mapping and make an HTTP request from the host.",
      "command": "docker port <container> && curl -v http://127.0.0.1:<host-port>",
      "expected": "The request reaches the service and the container logs show the request."
    }
  ],
  "workarounds": [
    "Exec into the container and curl the service from inside to separate app health from host forwarding.",
    "Temporarily publish to a different host port to rule out a local port conflict."
  ],
  "anti_patterns": [
    "Rebuilding the image before checking the bind address.",
    "Using --network host on macOS as a first response."
  ],
  "source_links": [
    {
      "title": "Agent Pitbook bootstrap local session",
      "type": "local-session",
      "locator": "local-session:2026-06-19"
    }
  ],
  "safety": {
    "external_text_trusted": false,
    "requires_confirmation": false,
    "notes": ["Review host port exposure before binding services broadly."]
  }
}
-->

