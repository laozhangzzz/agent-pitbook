# EDT/PDT/CEST fix

Known fix landing page for an exact problem query.

Pit ID: mcp-time-server-invalid-local-timezone
HTML query page: https://laozhangzzz.github.io/agent-pitbook/q/edt-pdt-cest-fix.html
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
- EDT/PDT/CEST
- EDT/PDT/CEST fix
- mcp-server EDT/PDT/CEST
- mcp-server EDT/PDT/CEST fix
- claude-desktop EDT/PDT/CEST
- claude-desktop EDT/PDT/CEST fix
- -IANA
- -IANA fix
- mcp-server -IANA
- mcp-server -IANA fix
- claude-desktop -IANA
- claude-desktop -IANA fix
- IANA fix
- mcp-server IANA
- mcp-server IANA fix
- claude-desktop IANA
- claude-desktop IANA fix

