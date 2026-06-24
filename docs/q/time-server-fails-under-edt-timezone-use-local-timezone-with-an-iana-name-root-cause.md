# Time server fails under EDT timezone (use --local-timezone with an IANA name) root cause

Known fix landing page for an exact problem query.

Pit ID: mcp-time-server-invalid-local-timezone
HTML query page: https://laozhangzzz.github.io/agent-pitbook/q/time-server-fails-under-edt-timezone-use-local-timezone-with-an-iana-name-root-cause.html
Full pit HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-time-server-invalid-local-timezone.html
Full pit Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-time-server-invalid-local-timezone.md
GitHub known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/31

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
