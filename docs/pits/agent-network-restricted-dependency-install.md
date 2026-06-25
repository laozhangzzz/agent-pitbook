# Dependency install fails because the agent sandbox blocks network access

Pit ID: agent-network-restricted-dependency-install
Status: verified
Confidence: high
Updated: 2026-06-19
Canonical source: https://github.com/laozhangzzz/agent-pitbook/blob/main/pits/agents/agent-network-restricted-dependency-install.md

## Summary

Package manager failures in coding-agent sessions often come from restricted network access, not broken dependencies; verify network policy before editing package files.

## Fast Answer

- Problem: dependency installation fails with DNS, host resolution, registry, index, TLS, or timeout errors
- Root cause: The package manager needs external network access but the agent sandbox blocks it by default.
- Fix first: Classify the error as network-related before changing dependency manifests.
- Verify: Re-run the same command after approved network access.

## Queries This Answers

- Dependency install fails because the agent sandbox blocks network access
- Dependency install fails because the agent sandbox blocks network access fix
- Dependency install fails because the agent sandbox blocks network access root cause
- how to fix Dependency install fails because the agent sandbox blocks network access
- codex install fails agent sandbox blocks network access
- codex install fails agent sandbox blocks network access fix
- blocks network access dependency install fails agent sandbox codex
- blocks network access dependency install fails agent sandbox codex fix

## Common Search Queries

- agent-network-restricted-dependency-install
- agent network restricted dependency install
- Dependency install fails because the agent sandbox blocks network access
- Dependency install fails because the agent sandbox blocks network access fix
- Dependency install fails because the agent sandbox blocks network access root cause
- Package manager failures in coding-agent sessions often come from restricted network access, not broken dependencies; verify network policy before editing package files
- agents
- sandbox
- network
- dependencies
- codex
- claude-code

## Affected Tools

- codex
- claude-code
- gemini
- qwen-code
- cursor
- aider

## Tags

- agents
- sandbox
- network
- dependencies

## Symptoms

- dependency installation fails with DNS, host resolution, registry, index, TLS, or timeout errors
- the project lockfile or dependency manifest appears valid
- the agent environment says network access is restricted

## Environment

- constraints: network restricted sandbox, approval-gated command execution

## Root Cause

- The package manager needs external network access but the agent sandbox blocks it by default.

## Fix

1. Classify the error as network-related before changing dependency manifests.
2. Use the agent's approved escalation flow for the exact install or fetch command when downloads are necessary.
3. If escalation is unavailable, use existing caches and lockfiles or report the blocker.

## Verification

- Re-run the same command after approved network access. Expected: The command reaches the registry or index and proceeds past the original network error.

## Sources

- Agent Pitbook bootstrap local session (local-session): local-session:2026-06-19

## Workarounds

- Use vendored dependencies if the project already includes them.
- Run tests that do not require dependency installation.

## Anti-patterns

- Deleting lockfiles to solve DNS errors.
- Switching package managers before checking sandbox network policy.
- Requesting broad shell approval instead of approval for the specific package command.

