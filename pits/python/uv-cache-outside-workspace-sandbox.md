---
id: uv-cache-outside-workspace-sandbox
title: uv fails in a managed workspace because cache or Python install paths are outside writable roots
status: verified
confidence: high
created_at: 2026-06-19
updated_at: 2026-06-19
last_verified: 2026-06-19
tags: [python, uv, sandbox, cache]
affected_tools: [codex, claude-code, gemini, qwen-code, cursor, aider]
---

# uv fails because cache or Python install paths are outside writable roots

## Summary

In managed coding-agent sandboxes, `uv run`, `uv sync`, or Python installation may fail because default cache and Python install directories are outside the writable workspace.

## Symptoms

- `uv` tries to write under a global cache path.
- The command fails with permission, sandbox, or filesystem access errors.
- The project itself is inside a writable workspace.
- The same command succeeds after setting cache and Python install directories inside the repo.

## Root Cause

The agent can write to the project but not to the default global cache or interpreter installation directories. `uv` is doing the right thing for a normal workstation, but the sandbox needs local writable paths.

## Fix

Run `uv` with workspace-local paths:

```bash
UV_CACHE_DIR=.uv-cache UV_PYTHON_INSTALL_DIR=.uv-python uv run <command>
```

For repeated use, document the environment variables in the project README or task runner.

## Verification

```bash
UV_CACHE_DIR=.uv-cache UV_PYTHON_INSTALL_DIR=.uv-python uv run python -V
```

Expected result: Python starts and `.uv-cache` / `.uv-python` are created in the workspace.

## Agent Notes

If the command fails because it needs network access to download dependencies, the fix is not only local cache paths. The agent may also need explicit user-approved network escalation.

<!-- pit-record
{
  "id": "uv-cache-outside-workspace-sandbox",
  "title": "uv fails in a managed workspace because cache or Python install paths are outside writable roots",
  "summary": "In managed agent sandboxes, uv may fail because its default cache or Python install directories are not writable; point them to workspace-local paths.",
  "status": "verified",
  "confidence": "high",
  "created_at": "2026-06-19",
  "updated_at": "2026-06-19",
  "last_verified": "2026-06-19",
  "tags": ["python", "uv", "sandbox", "cache"],
  "affected_tools": ["codex", "claude-code", "gemini", "qwen-code", "cursor", "aider"],
  "symptoms": [
    "uv run or uv sync fails with permission or sandbox filesystem errors",
    "the project directory is writable but global cache paths are not",
    "setting UV_CACHE_DIR and UV_PYTHON_INSTALL_DIR inside the workspace allows progress"
  ],
  "environment": {
    "language": "Python",
    "package_manager": "uv",
    "constraints": ["workspace-write sandbox", "restricted filesystem writes"]
  },
  "root_cause": [
    "uv defaults to cache or interpreter directories outside the agent's writable roots."
  ],
  "fix": [
    {
      "step": "Set UV_CACHE_DIR to a workspace-local directory.",
      "command": "UV_CACHE_DIR=.uv-cache uv run <command>"
    },
    {
      "step": "Set UV_PYTHON_INSTALL_DIR when uv needs to install or manage Python.",
      "command": "UV_CACHE_DIR=.uv-cache UV_PYTHON_INSTALL_DIR=.uv-python uv run <command>"
    },
    {
      "step": "Persist the environment variables in local task documentation if the project depends on uv."
    }
  ],
  "verification": [
    {
      "method": "Run a small uv command with local paths.",
      "command": "UV_CACHE_DIR=.uv-cache UV_PYTHON_INSTALL_DIR=.uv-python uv run python -V",
      "expected": "The command starts Python and writes cache data inside the workspace."
    }
  ],
  "workarounds": [
    "Use an existing project virtual environment if it is already present and writable.",
    "Ask for sandbox escalation only when dependency downloads or outside-workspace writes are truly required."
  ],
  "anti_patterns": [
    "Changing project code to avoid uv before checking cache permissions.",
    "Using global chmod or deleting user-level caches from an agent session."
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
    "notes": ["Do not delete global cache directories to solve a workspace-local permission issue."]
  }
}
-->

