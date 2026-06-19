---
id: codex-workspace-root-moved-stale-state
title: Codex still references an old workspace path after a project move
status: candidate
confidence: medium
created_at: 2026-06-19
updated_at: 2026-06-19
tags: [codex, workspace, macos, state]
affected_tools: [codex]
---

# Codex still references an old workspace path after a project move

## Summary

After moving a workspace directory, Codex Desktop or related local state may still reference the old path. This can show up as confusing roots, stale sidebar entries, or tool calls pointed at the old location.

## Symptoms

- The current terminal path differs from the app's remembered workspace path.
- Sidebar or app state still shows the old folder.
- Searches or generated links point to the previous location.
- The new directory exists and is the intended active workspace.

## Root Cause

Desktop apps often persist workspace roots and UI state separately from the shell's current directory. Moving a folder does not always rewrite saved app state.

## Fix

1. Prefer the app's normal workspace switching or folder reopening flow.
2. Confirm the intended current root with `pwd`.
3. If manual state repair is needed, back up the app state file first and edit only the old path references.
4. Restart the app after changing persistent state.

## Verification

Open a new session and confirm the reported workspace root, current working directory, file links, and searches all point at the new path.

## Agent Notes

This is a candidate record because exact state file locations and formats can change across Codex Desktop versions. Do not instruct an agent to edit app state unless the user explicitly asks and the file has been backed up.

<!-- pit-record
{
  "id": "codex-workspace-root-moved-stale-state",
  "title": "Codex still references an old workspace path after a project move",
  "summary": "After moving a workspace, Codex Desktop may retain stale workspace roots in app state, causing links or tool calls to refer to the old path.",
  "status": "candidate",
  "confidence": "medium",
  "created_at": "2026-06-19",
  "updated_at": "2026-06-19",
  "tags": ["codex", "workspace", "macos", "state"],
  "affected_tools": ["codex"],
  "symptoms": [
    "Codex or its sidebar references an old workspace folder",
    "the shell current directory points to the new workspace",
    "file links or searches use the previous path"
  ],
  "environment": {
    "os": "macOS",
    "agent": "codex",
    "constraints": ["desktop app persistent state", "moved workspace directory"]
  },
  "root_cause": [
    "The desktop app persists workspace roots separately from the shell current directory, and those saved roots may not update when a folder is moved."
  ],
  "fix": [
    {
      "step": "Use the app's normal folder switching or reopen-workspace flow first."
    },
    {
      "step": "Confirm the desired active root with pwd before editing state.",
      "command": "pwd"
    },
    {
      "step": "If manual state editing is required, back up the state file and replace only exact old path references.",
      "rationale": "Persistent app state can contain unrelated user settings."
    },
    {
      "step": "Restart the app and confirm new sessions use the intended root."
    }
  ],
  "verification": [
    {
      "method": "Start a fresh Codex session after switching or repairing the workspace.",
      "expected": "The current directory, file links, and searches all use the new workspace path."
    }
  ],
  "workarounds": [
    "Create a temporary symlink from the old path to the new path only as a short-term bridge.",
    "Keep project moves visible to the agent by stating the new absolute path explicitly."
  ],
  "anti_patterns": [
    "Blindly rewriting all app state JSON without a backup.",
    "Deleting app state to fix one stale root when exact replacement would suffice."
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
    "requires_confirmation": true,
    "notes": ["Manual app-state edits should be backed up and scoped to exact path replacements."]
  }
}
-->

