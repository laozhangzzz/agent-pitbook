# Agent Pitbook Layout After LLM Wiki

## Mapping

Karpathy's LLM Wiki pattern maps to Agent Pitbook like this:

| LLM Wiki layer | Agent Pitbook directory | Role |
|---|---|---|
| raw sources | `sources/` | immutable or externally linked evidence |
| wiki | `pits/` | canonical structured Markdown pit records |
| schema | `schema/` and `adapters/` | data contracts and agent behavior |
| index.md | `indexes/` | rebuildable maps and browsing aids |
| log.md | `logs/` | append-only audit trail |
| lint/errors | `errors/` | recurring system failures and correction rules |
| optional search | `feeds/`, future FTS/vector/graph indexes | generated retrieval artifacts |

## Proposed Directory Contract

```text
sources/
  README.md
  local-session/
  external/

pits/
  <domain>/<pit-id>.md

claims/
  README.md
  claims.schema.json
  claims.jsonl

indexes/
  README.md
  index.md
  tags.md
  tools.md

logs/
  README.md
  log.md

errors/
  README.md
  error-book.schema.json
  error-book.yaml

feeds/
  pits.jsonl
```

## Canonical vs Generated

Canonical:

- `pits/**/*.md`
- `schema/*.json`
- `claims/*.jsonl`
- `sources/**` metadata
- `logs/log.md`
- `errors/error-book.yaml`

Generated:

- `feeds/pits.jsonl`
- `indexes/*.md`
- future SQLite, vector, graph, web, or MCP outputs

## The Foundation File

The first foundation file remains:

```text
schema/pit.schema.json
```

The foundation corpus is:

```text
pits/**/*.md
```

The next foundation layer should be:

```text
claims/claims.schema.json
claims/claims.jsonl
sources/source.schema.json
```

This keeps pit records readable while allowing claim-level staleness, contradiction, and provenance checks.

