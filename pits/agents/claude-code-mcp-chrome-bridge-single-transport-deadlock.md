---
id: claude-code-mcp-chrome-bridge-single-transport-deadlock
title: Claude Code chrome-bridge MCP gets stuck after one transport connects
status: verified
confidence: high
created_at: 2026-06-19
updated_at: 2026-06-19
last_verified: 2026-06-19
tags: [agents, claude-code, mcp, chrome, browser-automation, transport, deadlock, native-messaging]
affected_tools: [claude-code, mcp-chrome-bridge]
---

# Claude Code chrome-bridge MCP gets stuck after one transport connects

## Summary

`mcp-chrome-bridge` can look like it needs repeated repair even when the Chrome Native Messaging registration and local HTTP service are healthy. The real pit is a single MCP Server instance being reused across HTTP/SSE transports. Once one client connects, later clients can fail with `Already connected to a transport` or HTTP 500 until the native host is restarted or the bridge is patched.

## Symptoms

- Claude Code cannot reconnect to `chrome-bridge` through `/mcp`.
- `curl http://127.0.0.1:12306/ping` returns `{"status":"ok","message":"pong"}`.
- The Chrome extension or bridge UI appears connected.
- MCP handshake or tool discovery fails with HTTP 500.
- Logs contain `Already connected to a transport` or `ERR_HTTP_HEADERS_SENT`.
- Running `doctor --fix`, restarting Chrome, or killing the native host helps temporarily.

## Root Cause

In `mcp-chrome-bridge@1.0.31`, the local HTTP/SSE server can reuse a singleton MCP Server. The MCP SDK server connection model is one transport per server instance. If the Chrome extension UI, Claude Code, a background job, or a manual `curl /mcp` request connects first, that transport can occupy the singleton. Later `/mcp` or `/sse` clients then fail instead of getting an independent server instance.

## Fix

1. For temporary recovery, make sure Claude Code is not actively using `chrome-bridge`.
2. Kill the current `mcp-chrome-bridge` native host process and let Chrome relaunch it.
3. Verify only `/ping`; do not send a manual `/mcp` request.
4. Reconnect from Claude Code with `/mcp -> chrome-bridge -> Reconnect`.
5. For durable repair, patch or upgrade the bridge so each HTTP/SSE transport gets a fresh MCP Server instance, and close that server when the transport closes.

## Verification

The local repair session patched the installed bridge, killed the old native host, let Chrome relaunch it, and verified `/ping` returned `pong`. The session intentionally did not call `/mcp`, because that endpoint can itself consume the single transport slot.

## Agent Notes

Use Codex or another tool that does not depend on `chrome-bridge` to patch `mcp-chrome-bridge`. Avoid asking Claude Code to repair the bridge while Claude Code is using that same MCP connection.

<!-- pit-record
{
  "id": "claude-code-mcp-chrome-bridge-single-transport-deadlock",
  "title": "Claude Code chrome-bridge MCP gets stuck after one transport connects",
  "summary": "mcp-chrome-bridge can repeatedly appear broken because its HTTP/SSE MCP service reuses one server instance; after one transport connects, Claude Code may hit HTTP 500 or Already connected to a transport until the native host is restarted or the bridge is patched.",
  "status": "verified",
  "confidence": "high",
  "created_at": "2026-06-19",
  "updated_at": "2026-06-19",
  "last_verified": "2026-06-19",
  "tags": ["agents", "claude-code", "mcp", "chrome", "browser-automation", "transport", "deadlock", "native-messaging"],
  "affected_tools": ["claude-code", "mcp-chrome-bridge"],
  "symptoms": [
    "Claude Code cannot reconnect to the chrome-bridge MCP server",
    "GET http://127.0.0.1:12306/ping succeeds with pong",
    "the Chrome extension or bridge UI appears connected",
    "the MCP endpoint returns HTTP 500 during handshake or tool discovery",
    "logs contain Already connected to a transport",
    "logs contain ERR_HTTP_HEADERS_SENT",
    "doctor --fix or killing the native host helps only temporarily"
  ],
  "environment": {
    "os": "macOS",
    "runtime": "Node.js",
    "agent": "claude-code",
    "versions": {
      "mcp-chrome-bridge": "1.0.31",
      "local-observed-node": "25.9.0_1"
    },
    "constraints": [
      "Chrome Native Messaging host",
      "local Streamable HTTP MCP endpoint",
      "SSE route shared with Chrome extension UI",
      "multiple clients or tests can touch /mcp or /sse"
    ]
  },
  "root_cause": [
    "The bridge can reuse a singleton MCP Server instance across HTTP/SSE connections.",
    "The MCP SDK server connection model expects one transport per server instance.",
    "A manual curl /mcp request, Chrome extension /sse session, Claude Code session, or stale background job can occupy the singleton transport slot.",
    "Killing the native host clears the runtime state, which explains why repair or restart works temporarily without fixing the underlying design."
  ],
  "fix": [
    {
      "step": "Do not use curl /mcp as a health check.",
      "rationale": "The test request can initialize and occupy the transport slot that Claude Code needs."
    },
    {
      "step": "Use /ping only to verify the bridge process is alive.",
      "command": "curl -s http://127.0.0.1:12306/ping"
    },
    {
      "step": "When stuck, pause Claude Code's active use of chrome-bridge, kill the native host process, and let Chrome relaunch it.",
      "rationale": "This clears the stale singleton transport state without changing registration files."
    },
    {
      "step": "After relaunch, reconnect from Claude Code with /mcp -> chrome-bridge -> Reconnect.",
      "rationale": "Leave the first real /mcp initialize request to the intended client."
    },
    {
      "step": "For durable repair, patch or upgrade mcp-chrome-bridge so each HTTP/SSE transport creates a fresh MCP Server instance and closes it with the transport.",
      "files": [
        "/opt/homebrew/lib/node_modules/mcp-chrome-bridge/dist/mcp/mcp-server.js",
        "/opt/homebrew/lib/node_modules/mcp-chrome-bridge/dist/server/index.js"
      ],
      "rationale": "This follows the public singleton-to-factory fix discussed upstream."
    }
  ],
  "verification": [
    {
      "method": "After killing or patching the native host, verify only the lightweight ping endpoint.",
      "command": "curl -s http://127.0.0.1:12306/ping",
      "expected": "{\"status\":\"ok\",\"message\":\"pong\"}"
    },
    {
      "method": "Reconnect from Claude Code rather than from curl.",
      "expected": "Claude Code owns the first real /mcp transport after the reset."
    },
    {
      "method": "Review logs after reconnect.",
      "expected": "No fresh Already connected to a transport or ERR_HTTP_HEADERS_SENT errors appear during tool discovery."
    }
  ],
  "workarounds": [
    "Keep only one active owner of chrome-bridge when debugging Claude Code MCP connection failures.",
    "Create a small reset script that kills the native host and checks /ping, but never calls /mcp.",
    "Avoid always-loading chrome-bridge in multiple Claude Code foreground and background jobs at the same time."
  ],
  "anti_patterns": [
    "Using curl /mcp to test whether the bridge is fixed.",
    "Running doctor --fix repeatedly when /ping already works.",
    "Asking Claude Code to patch chrome-bridge while Claude Code is actively using that MCP.",
    "Hot-patching the global npm install without first backing up the original files.",
    "Treating a healthy /ping response as proof that MCP handshake and tool discovery are healthy."
  ],
  "source_links": [
    {
      "title": "Local Codex thread: chrome-bridge repeated repair investigation",
      "type": "local-session",
      "locator": "codex-thread:019edd12-68d0-7ad0-b92f-50d9c5d76eba"
    },
    {
      "title": "hangwin/mcp-chrome issue 321: Singleton McpServer causes Already connected to a transport",
      "type": "issue",
      "url": "https://github.com/hangwin/mcp-chrome/issues/321",
      "accessed_at": "2026-06-19"
    },
    {
      "title": "hangwin/mcp-chrome pull request 301: replace getMcpServer singleton with factory",
      "type": "pr",
      "url": "https://github.com/hangwin/mcp-chrome/pull/301",
      "accessed_at": "2026-06-19"
    },
    {
      "title": "hangwin/mcp-chrome issue 349: MCP Chrome Bridge returns 500 due to ERR_HTTP_HEADERS_SENT",
      "type": "issue",
      "url": "https://github.com/hangwin/mcp-chrome/issues/349",
      "accessed_at": "2026-06-19"
    },
    {
      "title": "hangwin/mcp-chrome issue 306: service can only connect once after Chrome starts",
      "type": "issue",
      "url": "https://github.com/hangwin/mcp-chrome/issues/306",
      "accessed_at": "2026-06-19"
    },
    {
      "title": "Chrome Extensions Native Messaging documentation",
      "type": "docs",
      "url": "https://developer.chrome.com/docs/extensions/develop/concepts/native-messaging",
      "accessed_at": "2026-06-19"
    }
  ],
  "related": ["agent-prompt-injection-in-debug-sources"],
  "safety": {
    "external_text_trusted": false,
    "requires_confirmation": true,
    "notes": [
      "Do not modify global npm installation files without a backup.",
      "Do not run manual /mcp initialize requests during recovery because they can consume the connection slot."
    ]
  }
}
-->
