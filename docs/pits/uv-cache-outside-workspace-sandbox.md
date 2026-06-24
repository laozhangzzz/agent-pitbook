# uv fails in a managed workspace because cache or Python install paths are outside writable roots

Pit ID: uv-cache-outside-workspace-sandbox
Status: verified
Confidence: high
Updated: 2026-06-19
Canonical source: https://github.com/laozhangzzz/agent-pitbook/blob/main/pits/python/uv-cache-outside-workspace-sandbox.md
GitHub known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/38

## Summary

In managed agent sandboxes, uv may fail because its default cache or Python install directories are not writable; point them to workspace-local paths.

## Fast Answer

- Problem: uv run or uv sync fails with permission or sandbox filesystem errors
- Root cause: uv defaults to cache or interpreter directories outside the agent's writable roots.
- Fix first: Set UV_CACHE_DIR to a workspace-local directory.
- Verify: Run a small uv command with local paths.

## Queries This Answers

- uv fails in a managed workspace because cache or Python install paths are outside writable roots
- uv fails in a managed workspace because cache or Python install paths are outside writable roots fix
- uv fails in a managed workspace because cache or Python install paths are outside writable roots root cause
- how to fix uv fails in a managed workspace because cache or Python install paths are outside writable roots
- codex workspace cache python install paths writable roots
- codex workspace cache python install paths writable roots fix
- paths writable roots fails managed workspace cache python install codex
- paths writable roots fails managed workspace cache python install codex fix
- uv fails managed workspace paths writable roots
- uv fails managed workspace paths writable roots fix
- uv fails managed workspace codex
- uv fails managed workspace codex fix
- codex run sync fails permission sandbox filesystem errors
- codex run sync fails permission sandbox filesystem errors fix
- sandbox filesystem errors uv run sync fails permission codex
- sandbox filesystem errors uv run sync fails permission codex fix
- uv run sync fails sandbox filesystem errors
- uv run sync fails sandbox filesystem errors fix
- uv run sync fails codex
- uv run sync fails codex fix
- UV_CACHE_DIR
- UV_CACHE_DIR fix
- codex UV_CACHE_DIR
- codex UV_CACHE_DIR fix

## Common Search Queries

- uv-cache-outside-workspace-sandbox
- uv cache outside workspace sandbox
- uv fails in a managed workspace because cache or Python install paths are outside writable roots
- uv fails in a managed workspace because cache or Python install paths are outside writable roots fix
- uv fails in a managed workspace because cache or Python install paths are outside writable roots root cause
- In managed agent sandboxes, uv may fail because its default cache or Python install directories are not writable; point them to workspace-local paths
- python
- sandbox
- cache
- codex
- claude-code
- gemini
- qwen-code
- cursor
- aider
- uv run or uv sync fails with permission or sandbox filesystem errors
- the project directory is writable but global cache paths are not
- setting UV_CACHE_DIR and UV_PYTHON_INSTALL_DIR inside the workspace allows progress
- uv defaults to cache or interpreter directories outside the agents writable roots
- Changing project code to avoid uv before checking cache permissions
- Using global chmod or deleting user-level caches from an agent session
- Use an existing project virtual environment if it is already present and writable
- Ask for sandbox escalation only when dependency downloads or outside-workspace writes are truly required
- Agent Pitbook bootstrap local session

## Affected Tools

- codex
- claude-code
- gemini
- qwen-code
- cursor
- aider

## Tags

- python
- uv
- sandbox
- cache

## Symptoms

- uv run or uv sync fails with permission or sandbox filesystem errors
- the project directory is writable but global cache paths are not
- setting UV_CACHE_DIR and UV_PYTHON_INSTALL_DIR inside the workspace allows progress

## Environment

- language: Python
- package_manager: uv
- constraints: workspace-write sandbox, restricted filesystem writes

## Root Cause

- uv defaults to cache or interpreter directories outside the agent's writable roots.

## Fix

1. Set UV_CACHE_DIR to a workspace-local directory.

```bash
UV_CACHE_DIR=.uv-cache uv run <command>
```
2. Set UV_PYTHON_INSTALL_DIR when uv needs to install or manage Python.

```bash
UV_CACHE_DIR=.uv-cache UV_PYTHON_INSTALL_DIR=.uv-python uv run <command>
```
3. Persist the environment variables in local task documentation if the project depends on uv.

## Verification

- Run a small uv command with local paths. Expected: The command starts Python and writes cache data inside the workspace.

## Sources

- Agent Pitbook bootstrap local session (local-session): local-session:2026-06-19

## Workarounds

- Use an existing project virtual environment if it is already present and writable.
- Ask for sandbox escalation only when dependency downloads or outside-workspace writes are truly required.

## Anti-patterns

- Changing project code to avoid uv before checking cache permissions.
- Using global chmod or deleting user-level caches from an agent session.

