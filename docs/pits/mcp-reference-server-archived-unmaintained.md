# Several official reference MCP servers are archived; their bugs will not be fixed

Pit ID: mcp-reference-server-archived-unmaintained
Status: verified
Confidence: high
Updated: 2026-06-21
Canonical source: https://github.com/laozhangzzz/agent-pitbook/blob/main/pits/mcp/mcp-reference-server-archived-unmaintained.md

## Summary

Some early @modelcontextprotocol/* reference servers (server-postgres, server-github, server-puppeteer) were moved to servers-archived and are unmaintained, though still installable from npm. Don't debug an archived server; check servers-archived / the README and switch to a maintained alternative (e.g. github/github-mcp-server).

## Common Search Queries

- mcp-reference-server-archived-unmaintained
- mcp reference server archived unmaintained
- Several official reference MCP servers are archived; their bugs will not be fixed
- Several official reference MCP servers are archived; their bugs will not be fixed fix
- Several official reference MCP servers are archived; their bugs will not be fixed root cause
- servers
- archived
- deprecated
- maintenance
- postgres
- github
- puppeteer
- mcp-server
- claude-desktop
- cursor
- a reference server misbehaves and the issue is closed with a deprecation/archival note
- the package still installs from npm, so it looks current
- a maintainer reply points to servers-archived or alternative integrations
- The project archived a number of reference servers to reduce maintenance load and focus on a smaller core set
- Archived packages may remain published, so an agent can install and run a server whose bugs will never be fixed
- Filing or chasing bugs against an archived reference server
- Assuming an npm package is maintained just because it installs and runs
- Use a community- or vendor-maintained server for the same capability
- modelcontextprotocol/servers issue 1219: server-postgres multi-instance issue closed; maintainer notes the server moved to servers-archived

## Affected Tools

- mcp-server
- claude-desktop
- cursor

## Tags

- mcp
- servers
- archived
- deprecated
- maintenance
- postgres
- github
- puppeteer

## Symptoms

- a reference server misbehaves and the issue is closed with a deprecation/archival note
- the package still installs from npm, so it looks current
- a maintainer reply points to servers-archived or alternative integrations

## Environment

- constraints: archived reference server still published on npm

## Root Cause

- The project archived a number of reference servers to reduce maintenance load and focus on a smaller core set.
- Archived packages may remain published, so an agent can install and run a server whose bugs will never be fixed.

## Fix

1. Before debugging a reference server, check whether it is in modelcontextprotocol/servers-archived or flagged deprecated in the main README.
2. If archived, switch to a maintained alternative from the servers README (e.g. the GitHub MCP server moved to github/github-mcp-server).
3. Pin and track the maintained replacement rather than the archived package.

## Verification

- Check the repository of the server you depend on. Expected: It is actively maintained (recent commits/releases), not under servers-archived.

## Sources

- modelcontextprotocol/servers issue 1219: server-postgres multi-instance issue closed; maintainer notes the server moved to servers-archived (issue): https://github.com/modelcontextprotocol/servers/issues/1219
- modelcontextprotocol/servers issue 1097: maintainer deprecation notice that server-github development moved to github/github-mcp-server (issue): https://github.com/modelcontextprotocol/servers/issues/1097

## Workarounds

- Use a community- or vendor-maintained server for the same capability.

## Anti-patterns

- Filing or chasing bugs against an archived reference server.
- Assuming an npm package is maintained just because it installs and runs.

