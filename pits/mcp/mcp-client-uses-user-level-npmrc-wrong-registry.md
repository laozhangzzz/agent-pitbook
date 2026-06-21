---
id: mcp-client-uses-user-level-npmrc-wrong-registry
title: MCP server hangs because the GUI client uses your user-level .npmrc, not your project's
status: verified
confidence: medium
created_at: 2026-06-21
updated_at: 2026-06-21
last_verified: 2026-06-21
tags: [mcp, npx, npmrc, registry, startup, timeout]
affected_tools: [cursor, claude-desktop, cline, mcp-server]
---

# MCP server hangs because the GUI client uses your user-level .npmrc, not your project's

## Summary

If `npx -y <mcp-server>` works in your terminal but the editor/desktop client shows `Client closed` / `Request timed out`, check your npm registry config. A GUI client launches `npx` from your home directory, so it reads the user-level `~/.npmrc`. If that file points at a wrong, internal, or dead registry, `npx` cannot fetch the package and the launch hangs until the client times out — even though a per-project `.npmrc` with the correct registry makes it work in the terminal.

## Symptoms

- `npx -y <package>` works in a terminal opened inside your project, but not when launched by the client.
- Client log shows `Client closed` and `MCP error -32001: Request timed out`.
- You have a project-level `.npmrc` with a custom or corporate registry.

## Root Cause

npm merges config from several `.npmrc` files; the project-level one only applies when the working directory is inside that project. A GUI MCP client spawns `npx` from a different working directory (typically your home), so only the user-level `~/.npmrc` and global config apply. A wrong registry there makes the package fetch hang or fail, surfaced as a startup timeout.

## Fix

1. Inspect effective config: `npm config get registry` and `npm config ls -l`, and read `~/.npmrc`.
2. Fix the user-level registry to a reachable one (for example reset to the public registry): `npm config set registry https://registry.npmjs.org/`.
3. Or pre-install the server globally so launch needs no registry fetch, and point the config at the installed binary by absolute path.

## Verification

After fixing `~/.npmrc`, the client launches the server without `Client closed` / `-32001`. `npm config get registry` returns the reachable registry.

## Anti-Patterns

- Assuming the per-project `.npmrc` applies to a GUI-launched process; it does not unless the launch cwd is inside the project.
- Editing the MCP config repeatedly when the real fault is the registry in `~/.npmrc`.

<!-- pit-record
{
  "id": "mcp-client-uses-user-level-npmrc-wrong-registry",
  "title": "MCP server hangs because the GUI client uses your user-level .npmrc, not your project's",
  "summary": "npx-launched MCP servers that work in the terminal but hang under a GUI client (Client closed / -32001 Request timed out) can be a registry-config problem: the client launches npx from your home dir, so it reads user-level ~/.npmrc, not your project's .npmrc. A wrong registry there stalls the package fetch.",
  "status": "verified",
  "confidence": "medium",
  "created_at": "2026-06-21",
  "updated_at": "2026-06-21",
  "last_verified": "2026-06-21",
  "tags": ["mcp", "npx", "npmrc", "registry", "startup", "timeout"],
  "affected_tools": ["cursor", "claude-desktop", "cline", "mcp-server"],
  "symptoms": [
    "npx -y <package> works in a project terminal but not when launched by the client",
    "client log shows Client closed and MCP error -32001: Request timed out",
    "a project-level .npmrc with a custom or corporate registry exists"
  ],
  "environment": {
    "package_manager": "npm",
    "constraints": ["GUI client spawns npx from a non-project working directory", "user-level ~/.npmrc differs from project .npmrc"]
  },
  "root_cause": [
    "npm merges config from multiple .npmrc files; the project-level file only applies when the working directory is inside that project.",
    "A GUI MCP client launches npx from a different directory (typically home), so only user-level and global config apply.",
    "A wrong or unreachable registry in ~/.npmrc makes the fetch hang or fail, surfaced as a startup timeout."
  ],
  "fix": [
    {
      "step": "Inspect effective npm config and the user-level rc file.",
      "command": "npm config get registry && npm config ls -l"
    },
    {
      "step": "Set the user-level registry to a reachable one.",
      "command": "npm config set registry https://registry.npmjs.org/"
    },
    {
      "step": "Or pre-install the server globally and point the MCP config at the installed binary by absolute path so launch needs no registry fetch."
    }
  ],
  "verification": [
    {
      "method": "Relaunch from the client after fixing ~/.npmrc.",
      "command": "npm config get registry",
      "expected": "Returns the reachable registry; the client launches the server without Client closed / -32001."
    }
  ],
  "workarounds": [
    "Globally install the package and reference it by absolute path instead of npx."
  ],
  "anti_patterns": [
    "Assuming a per-project .npmrc applies to a GUI-launched process.",
    "Editing the MCP config repeatedly when the fault is the registry in ~/.npmrc."
  ],
  "source_links": [
    {
      "title": "modelcontextprotocol/servers issue 891: author resolved 'Client closed' by fixing an incorrect registry in user-level ~/.npmrc that the project .npmrc had overridden in the terminal",
      "type": "issue",
      "url": "https://github.com/modelcontextprotocol/servers/issues/891",
      "accessed_at": "2026-06-21"
    }
  ],
  "related": ["mcp-error-32000-connection-closed-server-failed-to-start", "mcp-npx-cache-corrupted-server-fails-to-start"],
  "safety": {
    "external_text_trusted": false,
    "requires_confirmation": true,
    "notes": ["Changing the global npm registry affects all npm usage on the machine; prefer a scoped fix if you rely on a private registry."]
  }
}
-->
