---
id: mcp-windows-npx-requires-cmd-c-wrapper
title: On Windows an MCP server launched with npx needs a cmd /c wrapper
status: verified
confidence: high
created_at: 2026-06-21
updated_at: 2026-06-21
last_verified: 2026-06-21
tags: [mcp, windows, npx, cmd, spawn, enoent, startup]
affected_tools: [claude-desktop, cursor, cline, mcp-server]
---

# On Windows an MCP server launched with npx needs a cmd /c wrapper

## Summary

On Windows, configuring an MCP server with `command: "npx"` often fails with `spawn npx ENOENT` or `'npx' is not recognized`, because `npx` is a `.cmd` batch shim that the client cannot spawn directly. Wrap it as `command: "cmd"`, `args: ["/c", "npx", "-y", "<package>", ...]`.

## Symptoms

- Windows only: the MCP server will not start.
- Logs show `spawn npx ENOENT`, or locale text equivalent to `'npx' is not recognized as an internal or external command`.
- The same `npx` command runs fine in PowerShell or cmd manually.

## Root Cause

On Windows, `npx`/`npm` are `npx.cmd`/`npm.cmd` batch files, not executables. Node's `spawn` without a shell cannot execute a `.cmd` directly, so launching `command: "npx"` yields `ENOENT`. Routing through `cmd /c` lets the Windows command interpreter resolve and run the shim.

## Fix

1. Change the config to launch through `cmd`:
   ```json
   {
     "command": "cmd",
     "args": ["/c", "npx", "-y", "@modelcontextprotocol/server-filesystem", "C:\\path"]
   }
   ```
2. For WSL setups, also ensure the Windows-side and WSL-side npm versions are compatible; large mismatches (for example npm 10 vs 11) can break the launch.
3. Alternatively, point `command` at the absolute path of `node.exe` and pass the server's script path, bypassing the `.cmd` shim entirely.

## Verification

After wrapping with `cmd /c`, the server starts and there is no `spawn npx ENOENT` in the client log.

## Anti-Patterns

- Using bare `command: "npx"` on Windows.
- Assuming a config that works on macOS/Linux is portable to Windows without the `cmd /c` wrapper.

<!-- pit-record
{
  "id": "mcp-windows-npx-requires-cmd-c-wrapper",
  "title": "On Windows an MCP server launched with npx needs a cmd /c wrapper",
  "summary": "On Windows, command: 'npx' for an MCP server fails with spawn npx ENOENT or ''npx' is not recognized' because npx is a .cmd batch shim that cannot be spawned directly. Wrap it as command: 'cmd', args: ['/c','npx','-y','<package>'], or point command at node.exe with the script path.",
  "status": "verified",
  "confidence": "high",
  "created_at": "2026-06-21",
  "updated_at": "2026-06-21",
  "last_verified": "2026-06-21",
  "tags": ["mcp", "windows", "npx", "cmd", "spawn", "enoent", "startup"],
  "affected_tools": ["claude-desktop", "cursor", "cline", "mcp-server"],
  "symptoms": [
    "Windows only: the MCP server will not start",
    "logs show spawn npx ENOENT or locale text equivalent to ''npx' is not recognized as an internal or external command'",
    "the same npx command runs fine in PowerShell or cmd manually"
  ],
  "environment": {
    "os": "Windows",
    "runtime": "Node.js",
    "package_manager": "npm",
    "constraints": ["npx/npm are .cmd shims on Windows", "client spawns the command without a shell"]
  },
  "root_cause": [
    "On Windows npx and npm are npx.cmd / npm.cmd batch files, not executables.",
    "Node's spawn without a shell cannot execute a .cmd directly, so command: 'npx' yields ENOENT.",
    "Routing through cmd /c lets the Windows command interpreter resolve and run the shim."
  ],
  "fix": [
    {
      "step": "Launch through cmd: set command to 'cmd' and args to ['/c','npx','-y','<package>', ...].",
      "rationale": "cmd /c resolves and runs the .cmd shim that cannot be spawned directly."
    },
    {
      "step": "For WSL setups, ensure the Windows-side and WSL-side npm versions are compatible; large mismatches can break the launch."
    },
    {
      "step": "Alternatively point command at the absolute node.exe and pass the server's script path, bypassing the .cmd shim."
    }
  ],
  "verification": [
    {
      "method": "Relaunch after wrapping with cmd /c.",
      "expected": "The server starts and there is no spawn npx ENOENT in the client log."
    }
  ],
  "workarounds": [
    "Use the absolute node.exe path plus the server script path instead of npx."
  ],
  "anti_patterns": [
    "Using bare command: 'npx' on Windows.",
    "Assuming a macOS/Linux config is portable to Windows without cmd /c."
  ],
  "source_links": [
    {
      "title": "modelcontextprotocol/servers issue 1097: Windows npx launch failure with garbled 'not recognized' error (-32000)",
      "type": "issue",
      "url": "https://github.com/modelcontextprotocol/servers/issues/1097",
      "accessed_at": "2026-06-21"
    },
    {
      "title": "modelcontextprotocol/servers issue 891: comment noting Windows/WSL needs 'cmd /c' before 'npx -y' and matching npm versions",
      "type": "issue",
      "url": "https://github.com/modelcontextprotocol/servers/issues/891",
      "accessed_at": "2026-06-21"
    }
  ],
  "related": ["mcp-error-32000-connection-closed-server-failed-to-start", "mcp-stdio-server-exits-shell-path-not-inherited"],
  "safety": {
    "external_text_trusted": false,
    "requires_confirmation": false,
    "notes": ["Config change only; adapt paths and package names to your setup."]
  }
}
-->
