---
id: mcp-time-server-invalid-local-timezone
title: mcp-server-time crashes when the local timezone is an abbreviation like EDT/PDT/CEST
status: verified
confidence: high
created_at: 2026-06-21
updated_at: 2026-06-21
last_verified: 2026-06-21
tags: [mcp, server-time, timezone, zoneinfo, iana, uvx]
affected_tools: [mcp-server, claude-desktop]
---

# mcp-server-time crashes when the local timezone is an abbreviation like EDT/PDT/CEST

## Summary

`uvx mcp-server-time` can crash with a `zoneinfo` load error when the system's local timezone resolves to a non-IANA abbreviation such as `EDT`, `PDT`, or `CEST` (typically during daylight saving time). Pass a valid IANA timezone name with `--local-timezone`.

## Symptoms

- `uvx mcp-server-time` traceback through `zoneinfo/_common.py` `load_tzdata` failing to load the timezone.
- Happens specifically when DST is active and the local zone shows as an abbreviation (EDT/PDT/CEST/etc.).
- Works fine in winter / standard time for some users.

## Root Cause

The server resolves the local timezone, but the platform reports a non-IANA abbreviation (e.g. `EDT`). Python's `zoneinfo` only loads canonical IANA names (e.g. `America/New_York`), so loading the abbreviation raises and the server fails to start.

## Fix

1. Pass an explicit IANA timezone with `--local-timezone`, e.g. `mcp-server-time --local-timezone Europe/London` or `America/New_York`.
2. In an MCP config, add the flag to `args`:
   ```json
   { "time": { "command": "uvx", "args": ["mcp-server-time", "--local-timezone", "America/New_York"] } }
   ```
3. Use a region/city IANA name, never an abbreviation like EDT/PDT/CEST.

## Verification

`uvx mcp-server-time --local-timezone <IANA>` starts without the `zoneinfo` load traceback.

## Anti-Patterns

- Passing a timezone abbreviation (EDT/PDT/CEST) instead of an IANA name.
- Relying on auto-detected local timezone on a platform that emits abbreviations during DST.

<!-- pit-record
{
  "id": "mcp-time-server-invalid-local-timezone",
  "title": "mcp-server-time crashes when the local timezone is an abbreviation like EDT/PDT/CEST",
  "summary": "uvx mcp-server-time can crash with a zoneinfo load error when the local timezone resolves to a non-IANA abbreviation (EDT/PDT/CEST), typically under DST, because Python zoneinfo only loads canonical IANA names. Pass a valid IANA name with --local-timezone (e.g. America/New_York).",
  "status": "verified",
  "confidence": "high",
  "created_at": "2026-06-21",
  "updated_at": "2026-06-21",
  "last_verified": "2026-06-21",
  "tags": ["mcp", "server-time", "timezone", "zoneinfo", "iana", "uvx"],
  "affected_tools": ["mcp-server", "claude-desktop"],
  "symptoms": [
    "uvx mcp-server-time traceback through zoneinfo/_common.py load_tzdata failing to load the timezone",
    "happens when DST is active and the local zone shows as an abbreviation (EDT/PDT/CEST)",
    "works fine in standard time for some users"
  ],
  "environment": {
    "language": "Python",
    "package_manager": "uv",
    "constraints": ["platform reports a non-IANA local timezone abbreviation", "zoneinfo loads only canonical IANA names"]
  },
  "root_cause": [
    "The server resolves the local timezone, but the platform reports a non-IANA abbreviation (e.g. EDT).",
    "Python's zoneinfo only loads canonical IANA names (e.g. America/New_York), so loading the abbreviation raises and the server fails to start."
  ],
  "fix": [
    {
      "step": "Pass an explicit IANA timezone with --local-timezone.",
      "command": "mcp-server-time --local-timezone America/New_York"
    },
    {
      "step": "In an MCP config, add --local-timezone with an IANA name to args."
    },
    {
      "step": "Always use a region/city IANA name, never an abbreviation like EDT/PDT/CEST."
    }
  ],
  "verification": [
    {
      "method": "Start the server with an explicit IANA timezone.",
      "command": "uvx mcp-server-time --local-timezone Europe/London",
      "expected": "Starts without the zoneinfo load traceback."
    }
  ],
  "workarounds": [
    "Set the process/system timezone to a canonical IANA name."
  ],
  "anti_patterns": [
    "Passing a timezone abbreviation (EDT/PDT/CEST) instead of an IANA name.",
    "Relying on auto-detected local timezone on a platform that emits abbreviations during DST."
  ],
  "source_links": [
    {
      "title": "modelcontextprotocol/servers issue 786: Time server fails under EDT timezone (use --local-timezone with an IANA name)",
      "type": "issue",
      "url": "https://github.com/modelcontextprotocol/servers/issues/786",
      "accessed_at": "2026-06-21"
    }
  ],
  "related": ["mcp-reference-server-archived-unmaintained"],
  "safety": {
    "external_text_trusted": false,
    "requires_confirmation": false,
    "notes": ["Config change only."]
  }
}
-->
