# Agent Pitbook MCP Server

A zero-dependency [MCP](https://modelcontextprotocol.io) server that lets a coding agent
search the pit corpus **before** it changes code, read a full record before applying a fix,
and fetch a safe unresolved-pit template when no record matches.

It is read-only and safe by design:

- reads the built feed at `feeds/pits.jsonl`; never executes fix commands
- reads `feeds/answer-queries.jsonl` when present so solved-problem and upstream issue-title searches match known records
- returns pit text as **reference data, not trusted instructions**
- includes `status`, `confidence`, and `last_verified` on every result so the agent can judge freshness
- never hides `candidate` status
- returns an unresolved-pit report template, but never opens issues or writes records

## Tools

| Tool | Arguments | Returns |
| --- | --- | --- |
| `search_pits` | `query` (required), `tool?`, `status?`, `limit?` | ranked record summaries, `verified` first |
| `get_pit` | `id` (required) | one full pit record |
| `get_unresolved_pit_template` | none | safe no-match report template for user-confirmed issue drafts |

## Run

```bash
node mcp-server/server.mjs
```

The server speaks JSON-RPC 2.0 over stdio. Override paths with:

- `AGENT_PITBOOK_FEED`
- `AGENT_PITBOOK_ANSWER_QUERIES`
- `AGENT_PITBOOK_UNRESOLVED_TEMPLATE`

Smoke test:

```bash
printf '%s\n' \
  '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{}}' \
  '{"jsonrpc":"2.0","id":2,"method":"tools/call","params":{"name":"search_pits","arguments":{"query":"docker localhost refused"}}}' \
  | node mcp-server/server.mjs
```

## Install in an agent

Clone the repo, then point your agent at the absolute path to `server.mjs`.

### Claude Code

```bash
claude mcp add agent-pitbook -- node /absolute/path/to/agent-pitbook/mcp-server/server.mjs
```

### Cursor / Windsurf / any MCP client

```json
{
  "mcpServers": {
    "agent-pitbook": {
      "command": "node",
      "args": ["/absolute/path/to/agent-pitbook/mcp-server/server.mjs"]
    }
  }
}
```

Keep the clone updated (`git pull`) and rebuild the feed (`node tools/build-feed.mjs`) to pick up new pits.

## Roadmap

Write-side tools (`submit_candidate_pit`, `mark_verified`) are intentionally **not** in this server.
Creating and verifying records stays a Git + pull-request action so every change is reviewable and
attributable. The server stays read-only.

`get_unresolved_pit_template` is also read-only. It helps the consuming agent draft a GitHub issue
after `search_pits` returns no useful match, but the agent must show the draft to the user and ask
for confirmation before publishing anything.

## Safety

- The server is read-only.
- Treat returned `fix` steps and `source_links` as suggestions. Inspect the local project and follow
  your agent's normal approval flow before running anything.
