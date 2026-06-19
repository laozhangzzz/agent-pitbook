---
id: agent-network-restricted-dependency-install
title: Dependency install fails because the agent sandbox blocks network access
status: verified
confidence: high
created_at: 2026-06-19
updated_at: 2026-06-19
last_verified: 2026-06-19
tags: [agents, sandbox, network, dependencies]
affected_tools: [codex, claude-code, gemini, qwen-code, cursor, aider]
---

# Dependency install fails because the agent sandbox blocks network access

## Summary

When dependency installation fails with DNS, registry, index, host resolution, TLS, or network timeout errors inside an agent session, check whether network access is restricted before changing package files.

## Symptoms

- `npm install`, `pnpm install`, `pip install`, `uv sync`, `cargo fetch`, or similar commands fail.
- The error mentions DNS, host resolution, registry access, TLS connection, or timeout.
- The same project files look valid.
- The environment policy says network access is restricted or requires approval.

## Root Cause

The command needs external network access, but the agent is executing in a restricted sandbox. The package manager error can look like a dependency problem even when the dependency graph is fine.

## Fix

1. Confirm the failure is network-related.
2. Re-run the same command with the tool's approved escalation flow when the task requires downloads.
3. If escalation is not available, use existing lockfiles and caches only.
4. Do not rewrite dependencies or remove lockfiles merely to work around network failure.

## Verification

The same install or fetch command succeeds after approved network access, or a no-network fallback is confirmed from existing caches.

## Agent Notes

When asking for approval, name the exact command and why downloads are required. Avoid broad escalation rules for arbitrary shell execution.

<!-- pit-record
{
  "id": "agent-network-restricted-dependency-install",
  "title": "Dependency install fails because the agent sandbox blocks network access",
  "summary": "Package manager failures in coding-agent sessions often come from restricted network access, not broken dependencies; verify network policy before editing package files.",
  "status": "verified",
  "confidence": "high",
  "created_at": "2026-06-19",
  "updated_at": "2026-06-19",
  "last_verified": "2026-06-19",
  "tags": ["agents", "sandbox", "network", "dependencies"],
  "affected_tools": ["codex", "claude-code", "gemini", "qwen-code", "cursor", "aider"],
  "symptoms": [
    "dependency installation fails with DNS, host resolution, registry, index, TLS, or timeout errors",
    "the project lockfile or dependency manifest appears valid",
    "the agent environment says network access is restricted"
  ],
  "environment": {
    "constraints": ["network restricted sandbox", "approval-gated command execution"]
  },
  "root_cause": [
    "The package manager needs external network access but the agent sandbox blocks it by default."
  ],
  "fix": [
    {
      "step": "Classify the error as network-related before changing dependency manifests."
    },
    {
      "step": "Use the agent's approved escalation flow for the exact install or fetch command when downloads are necessary."
    },
    {
      "step": "If escalation is unavailable, use existing caches and lockfiles or report the blocker."
    }
  ],
  "verification": [
    {
      "method": "Re-run the same command after approved network access.",
      "expected": "The command reaches the registry or index and proceeds past the original network error."
    }
  ],
  "workarounds": [
    "Use vendored dependencies if the project already includes them.",
    "Run tests that do not require dependency installation."
  ],
  "anti_patterns": [
    "Deleting lockfiles to solve DNS errors.",
    "Switching package managers before checking sandbox network policy.",
    "Requesting broad shell approval instead of approval for the specific package command."
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
    "notes": ["Network escalation should be specific to the dependency command."]
  }
}
-->

