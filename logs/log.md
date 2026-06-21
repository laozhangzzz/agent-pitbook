# Agent Pitbook Log

## [2026-06-19] pit | Initial seed records

Created the initial Agent Pitbook structure with five seed pit records, JSON schema, JSONL feed, and agent adapters.

## [2026-06-19] schema | LLM Wiki follow-up directories

Added directories for sources, claims, indexes, logs, and errors after auditing Karpathy's LLM Wiki gist and follow-up discussion.

## [2026-06-21] focus | Narrow to one vertical, ship distribution and freshness machinery

Repositioned the project around a single high-frequency vertical: environment and sandbox
traps that coding agents hit while running code. Updated README and llms.txt scope.

Shipped the distribution and quality machinery that the read/contribute loop depends on:

- `mcp-server/server.mjs`: runnable, zero-dependency, read-only stdio MCP server (`search_pits`,
  `get_pit`) over `feeds/pits.jsonl`, with Claude Code / Cursor install instructions.
- `tools/new-pit.mjs`: scaffolds a schema-valid `candidate` record to lower contribution cost.
- `tools/check-freshness.mjs`: flags records not re-verified within N days (debug knowledge rots).
- `.github/workflows/ci.yml`: validates records, fails on feed drift, smoke-tests the MCP server,
  reports freshness on every push and PR.

Content sprint (mining real pits from agent session logs at volume) is the next step; the
scaffolder makes each new record cheap to add. No pit records were fabricated in this change.

