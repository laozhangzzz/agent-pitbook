# mcp-server-time crashes when the local timezone is an abbreviation like EDT/PDT/CEST

Pit ID: mcp-time-server-invalid-local-timezone
Status: verified
Confidence: high
Updated: 2026-06-21
Canonical source: https://github.com/laozhangzzz/agent-pitbook/blob/main/pits/mcp/mcp-time-server-invalid-local-timezone.md
GitHub known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/31

## Summary

uvx mcp-server-time can crash with a zoneinfo load error when the local timezone resolves to a non-IANA abbreviation (EDT/PDT/CEST), typically under DST, because Python zoneinfo only loads canonical IANA names. Pass a valid IANA name with --local-timezone (e.g. America/New_York).

## Fast Answer

- Problem: uvx mcp-server-time traceback through zoneinfo/_common.py load_tzdata failing to load the timezone
- Root cause: The server resolves the local timezone, but the platform reports a non-IANA abbreviation (e.g. EDT).
- Fix first: Pass an explicit IANA timezone with --local-timezone.
- Verify: Start the server with an explicit IANA timezone.

## Queries This Answers

- Time server fails under EDT timezone use --local-timezone with an IANA name
- Time server fails under EDT timezone (use --local-timezone with an IANA name) fix
- Time server fails under EDT timezone (use --local-timezone with an IANA name) root cause
- mcp-server-time crashes when the local timezone is an abbreviation like EDT/PDT/CEST
- mcp-server-time crashes when the local timezone is an abbreviation like EDT/PDT/CEST fix
- mcp-server-time crashes when the local timezone is an abbreviation like EDT/PDT/CEST root cause
- how to fix mcp-server-time crashes when the local timezone is an abbreviation like EDT/PDT/CEST
- mcp-server local timezone abbreviation like edt pdt cest
- mcp-server local timezone abbreviation like edt pdt cest fix
- edt pdt cest time crashes local timezone abbreviation like mcp-server
- edt pdt cest time crashes local timezone abbreviation like mcp-server fix
- mcp server time crashes edt pdt cest
- mcp server time crashes edt pdt cest fix
- mcp server time crashes mcp-server
- mcp server time crashes mcp-server fix
- mcp-server zoneinfo common py load tzdata failing timezone
- mcp-server zoneinfo common py load tzdata failing timezone fix
- tzdata failing timezone traceback through zoneinfo common py load mcp-server
- tzdata failing timezone traceback through zoneinfo common py load mcp-server fix
- uvx mcp server time tzdata failing timezone
- uvx mcp server time tzdata failing timezone fix
- uvx mcp server time mcp-server
- uvx mcp server time mcp-server fix
- EDT/PDT/CEST

## Common Search Queries

- mcp-time-server-invalid-local-timezone
- mcp time server invalid local timezone
- mcp-server-time crashes when the local timezone is an abbreviation like EDT/PDT/CEST
- mcp-server-time crashes when the local timezone is an abbreviation like EDT/PDT/CEST fix
- mcp-server-time crashes when the local timezone is an abbreviation like EDT/PDT/CEST root cause
- server-time
- timezone
- zoneinfo
- iana
- mcp-server
- claude-desktop
- uvx mcp-server-time traceback through zoneinfo/_common.py load_tzdata failing to load the timezone
- happens when DST is active and the local zone shows as an abbreviation EDT/PDT/CEST
- works fine in standard time for some users
- The server resolves the local timezone, but the platform reports a non-IANA abbreviation e.g. EDT
- Pythons zoneinfo only loads canonical IANA names (e.g. America/New_York), so loading the abbreviation raises and the server fails to start
- Passing a timezone abbreviation (EDT/PDT/CEST) instead of an IANA name
- Relying on auto-detected local timezone on a platform that emits abbreviations during DST
- Set the process/system timezone to a canonical IANA name
- modelcontextprotocol/servers issue 786: Time server fails under EDT timezone use --local-timezone with an IANA name
- Time server fails under EDT timezone use --local-timezone with an IANA name
- Time server fails under EDT timezone (use --local-timezone with an IANA name) fix
- Time server fails under EDT timezone (use --local-timezone with an IANA name) root cause
- how to fix mcp-server-time crashes when the local timezone is an abbreviation like EDT/PDT/CEST

## Affected Tools

- mcp-server
- claude-desktop

## Tags

- mcp
- server-time
- timezone
- zoneinfo
- iana
- uvx

## Symptoms

- uvx mcp-server-time traceback through zoneinfo/_common.py load_tzdata failing to load the timezone
- happens when DST is active and the local zone shows as an abbreviation (EDT/PDT/CEST)
- works fine in standard time for some users

## Environment

- language: Python
- package_manager: uv
- constraints: platform reports a non-IANA local timezone abbreviation, zoneinfo loads only canonical IANA names

## Root Cause

- The server resolves the local timezone, but the platform reports a non-IANA abbreviation (e.g. EDT).
- Python's zoneinfo only loads canonical IANA names (e.g. America/New_York), so loading the abbreviation raises and the server fails to start.

## Fix

1. Pass an explicit IANA timezone with --local-timezone.

```bash
mcp-server-time --local-timezone America/New_York
```
2. In an MCP config, add --local-timezone with an IANA name to args.
3. Always use a region/city IANA name, never an abbreviation like EDT/PDT/CEST.

## Verification

- Start the server with an explicit IANA timezone. Expected: Starts without the zoneinfo load traceback.

## Sources

- modelcontextprotocol/servers issue 786: Time server fails under EDT timezone (use --local-timezone with an IANA name) (issue): https://github.com/modelcontextprotocol/servers/issues/786

## Workarounds

- Set the process/system timezone to a canonical IANA name.

## Anti-patterns

- Passing a timezone abbreviation (EDT/PDT/CEST) instead of an IANA name.
- Relying on auto-detected local timezone on a platform that emits abbreviations during DST.

