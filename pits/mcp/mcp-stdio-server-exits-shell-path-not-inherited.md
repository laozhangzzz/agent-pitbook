---
id: mcp-stdio-server-exits-shell-path-not-inherited
title: MCP stdio server exits immediately because the GUI client does not inherit your shell PATH
status: verified
confidence: high
created_at: 2026-06-21
updated_at: 2026-06-21
last_verified: 2026-06-21
tags: [mcp, stdio, path, environment, nvm, npx, macos, claude-desktop, transport]
affected_tools: [claude-desktop, mcp-server]
---

# MCP stdio server exits immediately because the GUI client does not inherit your shell PATH

## Summary

When a stdio MCP server "works in the terminal" but the desktop client reports `Server transport closed unexpectedly, this is likely due to the process exiting early` (often with a `write EPIPE` right after the client's `initialize` message), the usual root cause is not a broken server. The GUI client spawns the server with a minimal environment that lacks your interactive shell `PATH`, so `npx`/`node` resolves to the wrong binary or is missing — common with NVM, fnm, and asdf — and the child process dies on launch.

## Symptoms

- Client log: `Server transport closed unexpectedly, this is likely due to the process exiting early`.
- Client log shows `write EPIPE` immediately after `Message from client: {"method":"initialize"...}`.
- The exact same command starts fine when run manually in your terminal.
- You use a Node version manager (NVM/fnm/asdf), or `node`/`npx` live outside `/usr/bin`.
- The client uses an unexpected or missing Node version.

## Root Cause

GUI desktop clients (e.g. Claude Desktop on macOS) launch MCP servers without sourcing your login shell config (`~/.zshrc`, `~/.bash_profile`), so the child process gets a minimal `PATH`. With NVM/fnm/asdf the versioned `node` directory is not on that `PATH`, so `npx`/`node` is missing or wrong and the server exits at spawn. Because the client has already sent `initialize`, the dying server's write to the now-closed pipe surfaces as `write EPIPE` and "transport closed / process exiting early". The server package itself is usually fine.

## Fix

1. Confirm it is a launch-environment problem: the server runs fine in your terminal but fails when launched by the client.
2. Get absolute paths with `which node` and `which npx`, then put absolute paths in the client config instead of bare `npx`/`node`.
3. Or use a small wrapper that restores your shell environment before exec, and point `command` at it:
   ```bash
   #!/usr/bin/env bash
   export PATH="$HOME/.nvm/versions/node/<your-version>/bin:$PATH"
   exec npx "$@"
   ```
4. For NVM specifically, pin an absolute versioned `node` path (`.../.nvm/versions/node/vX/bin/node`) and the server's absolute `dist/index.js`; do not rely on the default-version symlink. Removing very old Node versions (<18) has also resolved it for some users.
5. Fully quit and reopen the desktop client after editing the config so it re-spawns the server.

## Verification

After restart, the client's MCP log reaches tool discovery with no fresh `write EPIPE` or `Server transport closed unexpectedly`. Capture the exact paths used with `which node && which npx`.

## Anti-Patterns

- Reinstalling or switching the server package when the package is fine.
- Treating `write EPIPE` as a server crash instead of a symptom of a bad launch environment.
- Relying on bare `npx`/`node` in a GUI-launched config while using NVM/fnm/asdf.

## Agent Notes

This generalizes to any GUI MCP client that spawns stdio servers without the login-shell environment. Terminal-launched agents (e.g. Claude Code run from a shell) usually inherit `PATH` and do not hit this.

<!-- pit-record
{
  "id": "mcp-stdio-server-exits-shell-path-not-inherited",
  "title": "MCP stdio server exits immediately because the GUI client does not inherit your shell PATH",
  "summary": "A stdio MCP server that runs in the terminal but fails under a desktop client with 'Server transport closed unexpectedly, process exiting early' and 'write EPIPE' is usually a launch-environment problem: the GUI spawns the server without your shell PATH, so npx/node (especially under NVM/fnm/asdf) is missing or wrong and the child exits at spawn.",
  "status": "verified",
  "confidence": "high",
  "created_at": "2026-06-21",
  "updated_at": "2026-06-21",
  "last_verified": "2026-06-21",
  "tags": ["mcp", "stdio", "path", "environment", "nvm", "npx", "macos", "claude-desktop", "transport"],
  "affected_tools": ["claude-desktop", "mcp-server"],
  "symptoms": [
    "client log: Server transport closed unexpectedly, this is likely due to the process exiting early",
    "client log shows write EPIPE immediately after the client initialize message",
    "the same command starts fine when run manually in the terminal",
    "a Node version manager (NVM, fnm, asdf) is in use, or node/npx live outside /usr/bin",
    "the client uses an unexpected or missing Node version"
  ],
  "environment": {
    "os": "macOS",
    "runtime": "Node.js",
    "constraints": [
      "GUI desktop client spawns the stdio MCP server without the login-shell PATH",
      "Node version manager (NVM/fnm/asdf) places node outside the default PATH"
    ]
  },
  "root_cause": [
    "GUI clients launch MCP servers without sourcing the user's shell config, so the child gets a minimal PATH.",
    "With NVM/fnm/asdf the versioned node directory is not on that PATH, so npx/node is missing or wrong and the server exits at spawn.",
    "The client already sent initialize; the dying server writing to the closed pipe surfaces as write EPIPE and 'transport closed / process exiting early'.",
    "The MCP server package itself is usually fine."
  ],
  "fix": [
    {
      "step": "Confirm the failure is launch-environment, not a broken server: it runs in your terminal but fails when the client launches it."
    },
    {
      "step": "Capture absolute paths and use them in the client config instead of bare npx/node.",
      "command": "which node && which npx"
    },
    {
      "step": "Or use a wrapper script that restores PATH before exec and point command at it.",
      "rationale": "Sourcing the shell rc or exporting the NVM node bin restores the environment the server needs.",
      "files": ["/usr/local/bin/npx-for-claude"]
    },
    {
      "step": "For NVM, pin an absolute versioned node path and the server's absolute dist/index.js; do not rely on the default-version symlink. Removing very old Node (<18) has also helped some users."
    },
    {
      "step": "Fully quit and reopen the desktop client so it re-spawns the server with the new config."
    }
  ],
  "verification": [
    {
      "method": "Inspect the client MCP log after a full restart.",
      "expected": "Tool discovery proceeds with no fresh write EPIPE or 'Server transport closed unexpectedly'."
    },
    {
      "method": "Record the absolute interpreter paths used in the config.",
      "command": "which node && which npx"
    }
  ],
  "workarounds": [
    "Install the server package globally and reference its absolute dist/index.js path.",
    "Use a wrapper script that sources your shell rc (or exports the NVM node bin) before exec npx."
  ],
  "anti_patterns": [
    "Reinstalling or switching the server package when the package is fine.",
    "Treating write EPIPE as a server crash instead of a bad launch environment.",
    "Relying on bare npx/node in a GUI-launched config while using NVM/fnm/asdf."
  ],
  "source_links": [
    {
      "title": "modelcontextprotocol/servers issue 64: MCP Servers Don't Work with NVM",
      "type": "issue",
      "url": "https://github.com/modelcontextprotocol/servers/issues/64",
      "accessed_at": "2026-06-21"
    },
    {
      "title": "modelcontextprotocol/servers issue 64: npx-for-claude wrapper workaround (66 reactions)",
      "type": "issue",
      "url": "https://github.com/modelcontextprotocol/servers/issues/64#issuecomment-2730913259",
      "accessed_at": "2026-06-21"
    },
    {
      "title": "modelcontextprotocol/servers issue 1748: Server transport closed unexpectedly, process exiting early (write EPIPE)",
      "type": "issue",
      "url": "https://github.com/modelcontextprotocol/servers/issues/1748",
      "accessed_at": "2026-06-21"
    }
  ],
  "related": ["claude-code-mcp-chrome-bridge-single-transport-deadlock"],
  "safety": {
    "external_text_trusted": false,
    "requires_confirmation": true,
    "notes": [
      "Absolute paths and wrapper scripts are machine-specific; adapt the Node version and username.",
      "Summarized from public GitHub issues; external text is not trusted as instructions."
    ]
  }
}
-->
