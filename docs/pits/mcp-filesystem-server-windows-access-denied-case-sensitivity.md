# Filesystem MCP server denies allowed Windows paths due to drive-letter case mismatch

Pit ID: mcp-filesystem-server-windows-access-denied-case-sensitivity
Status: candidate
Confidence: medium
Updated: 2026-06-21
Canonical source: https://github.com/laozhangzzz/agent-pitbook/blob/main/pits/mcp/mcp-filesystem-server-windows-access-denied-case-sensitivity.md

## Summary

On Windows, @modelcontextprotocol/server-filesystem can return 'Access denied - path outside allowed directories' for paths that are inside an allowed root, because its validation does not normalize Windows drive-letter case (C:\source vs c:\source). Match the configured case, or use a patched build until the upstream fix ships.

## Common Search Queries

- mcp-filesystem-server-windows-access-denied-case-sensitivity
- mcp filesystem server windows access denied case sensitivity
- Filesystem MCP server denies allowed Windows paths due to drive-letter case mismatch
- Filesystem MCP server denies allowed Windows paths due to drive-letter case mismatch fix
- Filesystem MCP server denies allowed Windows paths due to drive-letter case mismatch root cause
- server-filesystem
- windows
- paths
- case-sensitivity
- access-denied
- claude-desktop
- cursor
- mcp-server
- Windows only: a file under an allowed directory returns 'Error: Access denied - path outside allowed directories
- the denied path is visibly inside a configured allowed root
- no other errors in the logs
- The allowed-directory check compares request paths against allowed roots as strings
- Windows drive letters/normalization are effectively case-insensitive (C:\source == c:\source) but the comparison treats them as different, failing the containment test
- Windows can rarely have case-sensitive paths, which complicates a fully correct fix
- Widening allowed directories to the drive root to dodge the case mismatch
- Assuming the allow-list config is wrong when the validator's normalization is the bug
- Temporarily configure the allowed root in the exact case the client emits
- modelcontextprotocol/servers issue 470: Filesystem server access denied for allowed paths on Windows
- modelcontextprotocol/servers PR 2111: step toward fixing Windows path validation

## Affected Tools

- claude-desktop
- cursor
- mcp-server

## Tags

- mcp
- server-filesystem
- windows
- paths
- case-sensitivity
- access-denied

## Symptoms

- Windows only: a file under an allowed directory returns 'Error: Access denied - path outside allowed directories'
- the denied path is visibly inside a configured allowed root
- no other errors in the logs

## Environment

- os: Windows
- constraints: server-filesystem allowed-directory validation, Windows drive-letter case insensitivity

## Root Cause

- The allowed-directory check compares request paths against allowed roots as strings.
- Windows drive letters/normalization are effectively case-insensitive (C:\source == c:\source) but the comparison treats them as different, failing the containment test.
- Windows can rarely have case-sensitive paths, which complicates a fully correct fix.

## Fix

1. Make the configured allowed-directory drive-letter case match what the client sends; try both C:\... and c:\... forms.
2. Track the upstream normalization fix (PR #2111 at time of writing) and upgrade once it ships in a release.
3. As an interim measure, patch index.ts path normalization, rebuild, and replace the installed dist/index.js.

## Verification

- Call read_file on a path under the allowed directory after aligning case or applying the patched build. Expected: The read succeeds instead of returning 'Access denied - path outside allowed directories'.

## Sources

- modelcontextprotocol/servers issue 470: Filesystem server access denied for allowed paths on Windows (issue): https://github.com/modelcontextprotocol/servers/issues/470
- modelcontextprotocol/servers PR 2111: step toward fixing Windows path validation (pr): https://github.com/modelcontextprotocol/servers/pull/2111

## Workarounds

- Temporarily configure the allowed root in the exact case the client emits.

## Anti-patterns

- Widening allowed directories to the drive root to dodge the case mismatch.
- Assuming the allow-list config is wrong when the validator's normalization is the bug.

