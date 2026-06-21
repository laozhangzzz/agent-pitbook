---
id: mcp-reference-server-archived-unmaintained
title: Several official reference MCP servers are archived; their bugs will not be fixed
status: verified
confidence: high
created_at: 2026-06-21
updated_at: 2026-06-21
last_verified: 2026-06-21
tags: [mcp, servers, archived, deprecated, maintenance, postgres, github, puppeteer]
affected_tools: [mcp-server, claude-desktop, cursor]
---

# Several official reference MCP servers are archived; their bugs will not be fixed

## Summary

Some early `@modelcontextprotocol/*` reference servers (for example `server-postgres`, `server-github`, `server-puppeteer`) were moved to the `servers-archived` repository and are no longer maintained. If you hit a bug in one, do not spend time debugging it — switch to a maintained alternative.

## Symptoms

- A reference server misbehaves (e.g. cannot run two `server-postgres` instances at once; `server-github` fails) and issues are closed with a deprecation/archival note.
- The package still installs from npm, so it looks current.
- A maintainer reply points to `servers-archived` or to alternative integrations.

## Root Cause

To reduce maintenance load, the project archived a number of reference servers and concentrates on a smaller core set. Archived packages may remain published, so an agent can install and run a server whose bugs will never be fixed.

## Fix

1. Before debugging a reference server, check whether it lives in `modelcontextprotocol/servers-archived` or is flagged deprecated in the main README.
2. If archived, switch to a maintained alternative listed in the servers README (often a vendor-official or community-maintained server, e.g. the GitHub MCP server moved to `github/github-mcp-server`).
3. Pin and track the maintained replacement rather than the archived package.

## Verification

The chosen server is in an actively maintained repository (recent commits/releases, open issue triage), not under `servers-archived`.

## Anti-Patterns

- Filing or chasing bugs against an archived reference server.
- Assuming an npm package is maintained just because it installs and runs.

<!-- pit-record
{
  "id": "mcp-reference-server-archived-unmaintained",
  "title": "Several official reference MCP servers are archived; their bugs will not be fixed",
  "summary": "Some early @modelcontextprotocol/* reference servers (server-postgres, server-github, server-puppeteer) were moved to servers-archived and are unmaintained, though still installable from npm. Don't debug an archived server; check servers-archived / the README and switch to a maintained alternative (e.g. github/github-mcp-server).",
  "status": "verified",
  "confidence": "high",
  "created_at": "2026-06-21",
  "updated_at": "2026-06-21",
  "last_verified": "2026-06-21",
  "tags": ["mcp", "servers", "archived", "deprecated", "maintenance", "postgres", "github", "puppeteer"],
  "affected_tools": ["mcp-server", "claude-desktop", "cursor"],
  "symptoms": [
    "a reference server misbehaves and the issue is closed with a deprecation/archival note",
    "the package still installs from npm, so it looks current",
    "a maintainer reply points to servers-archived or alternative integrations"
  ],
  "environment": {
    "constraints": ["archived reference server still published on npm"]
  },
  "root_cause": [
    "The project archived a number of reference servers to reduce maintenance load and focus on a smaller core set.",
    "Archived packages may remain published, so an agent can install and run a server whose bugs will never be fixed."
  ],
  "fix": [
    {
      "step": "Before debugging a reference server, check whether it is in modelcontextprotocol/servers-archived or flagged deprecated in the main README."
    },
    {
      "step": "If archived, switch to a maintained alternative from the servers README (e.g. the GitHub MCP server moved to github/github-mcp-server)."
    },
    {
      "step": "Pin and track the maintained replacement rather than the archived package."
    }
  ],
  "verification": [
    {
      "method": "Check the repository of the server you depend on.",
      "expected": "It is actively maintained (recent commits/releases), not under servers-archived."
    }
  ],
  "workarounds": [
    "Use a community- or vendor-maintained server for the same capability."
  ],
  "anti_patterns": [
    "Filing or chasing bugs against an archived reference server.",
    "Assuming an npm package is maintained just because it installs and runs."
  ],
  "source_links": [
    {
      "title": "modelcontextprotocol/servers issue 1219: server-postgres multi-instance issue closed; maintainer notes the server moved to servers-archived",
      "type": "issue",
      "url": "https://github.com/modelcontextprotocol/servers/issues/1219",
      "accessed_at": "2026-06-21"
    },
    {
      "title": "modelcontextprotocol/servers issue 1097: maintainer deprecation notice that server-github development moved to github/github-mcp-server",
      "type": "issue",
      "url": "https://github.com/modelcontextprotocol/servers/issues/1097",
      "accessed_at": "2026-06-21"
    }
  ],
  "related": ["mcp-server-memory-ignores-memory-file-path-env"],
  "safety": {
    "external_text_trusted": false,
    "requires_confirmation": false,
    "notes": ["Which servers are archived changes over time; confirm against the current servers and servers-archived repositories."]
  }
}
-->
