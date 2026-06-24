# Codex still references an old workspace path after a project move

Pit ID: codex-workspace-root-moved-stale-state
Status: candidate
Confidence: medium
Updated: 2026-06-19
Canonical source: https://github.com/laozhangzzz/agent-pitbook/blob/main/pits/agents/codex-workspace-root-moved-stale-state.md

## Summary

After moving a workspace, Codex Desktop may retain stale workspace roots in app state, causing links or tool calls to refer to the old path.

## Fast Answer

- Problem: Codex or its sidebar references an old workspace folder
- Root cause: The desktop app persists workspace roots separately from the shell current directory, and those saved roots may not update when a folder is moved.
- Fix first: Use the app's normal folder switching or reopen-workspace flow first.
- Verify: Start a fresh Codex session after switching or repairing the workspace.

## Queries This Answers

- Codex still references an old workspace path after a project move
- Codex still references an old workspace path after a project move fix
- Codex still references an old workspace path after a project move root cause
- how to fix Codex still references an old workspace path after a project move
- Codex or its sidebar references an old workspace folder
- how to fix Codex or its sidebar references an old workspace folder
- Codex or its sidebar references an old workspace folder root cause
- the shell current directory points to the new workspace
- how to fix the shell current directory points to the new workspace
- the shell current directory points to the new workspace root cause
- codex the shell current directory points to the new workspace
- codex the shell current directory points to the new workspace fix
- file links or searches use the previous path
- how to fix file links or searches use the previous path
- file links or searches use the previous path root cause
- codex file links or searches use the previous path
- codex file links or searches use the previous path fix

## Common Search Queries

- codex-workspace-root-moved-stale-state
- codex workspace root moved stale state
- Codex still references an old workspace path after a project move
- Codex still references an old workspace path after a project move fix
- Codex still references an old workspace path after a project move root cause
- After moving a workspace, Codex Desktop may retain stale workspace roots in app state, causing links or tool calls to refer to the old path
- codex
- workspace
- macos
- state
- Codex or its sidebar references an old workspace folder
- the shell current directory points to the new workspace
- file links or searches use the previous path
- The desktop app persists workspace roots separately from the shell current directory, and those saved roots may not update when a folder is moved
- Blindly rewriting all app state JSON without a backup
- Deleting app state to fix one stale root when exact replacement would suffice
- Create a temporary symlink from the old path to the new path only as a short-term bridge
- Keep project moves visible to the agent by stating the new absolute path explicitly
- Agent Pitbook bootstrap local session
- how to fix Codex still references an old workspace path after a project move
- how to fix Codex or its sidebar references an old workspace folder
- Codex or its sidebar references an old workspace folder root cause
- how to fix the shell current directory points to the new workspace
- the shell current directory points to the new workspace root cause

## Affected Tools

- codex

## Tags

- codex
- workspace
- macos
- state

## Symptoms

- Codex or its sidebar references an old workspace folder
- the shell current directory points to the new workspace
- file links or searches use the previous path

## Environment

- os: macOS
- agent: codex
- constraints: desktop app persistent state, moved workspace directory

## Root Cause

- The desktop app persists workspace roots separately from the shell current directory, and those saved roots may not update when a folder is moved.

## Fix

1. Use the app's normal folder switching or reopen-workspace flow first.
2. Confirm the desired active root with pwd before editing state.

```bash
pwd
```
3. If manual state editing is required, back up the state file and replace only exact old path references.

Rationale: Persistent app state can contain unrelated user settings.
4. Restart the app and confirm new sessions use the intended root.

## Verification

- Start a fresh Codex session after switching or repairing the workspace. Expected: The current directory, file links, and searches all use the new workspace path.

## Sources

- Agent Pitbook bootstrap local session (local-session): local-session:2026-06-19

## Workarounds

- Create a temporary symlink from the old path to the new path only as a short-term bridge.
- Keep project moves visible to the agent by stating the new absolute path explicitly.

## Anti-patterns

- Blindly rewriting all app state JSON without a backup.
- Deleting app state to fix one stale root when exact replacement would suffice.

