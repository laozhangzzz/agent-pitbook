# Search Audit

Agent Pitbook's distribution goal is not merely "a crawler cloned the repo." The useful goal is:

```text
user error or upstream issue title -> search-enabled model/web search -> Agent Pitbook pit page -> fix applied or unresolved report filed
```

## Pass Criteria

- `pass`: the specific Agent Pitbook pit URL appears in ordinary web search or GitHub search for the query.
- `weak pass`: the Agent Pitbook repository appears, but the specific pit page does not.
- `fail`: neither the repository nor the specific pit page appears.

Use exact user-facing errors, upstream issue titles, and known-solution titles. Do not only search for `agent-pitbook`, because real users and models will search symptoms first.

## Probe Generator

Generate repeatable query sets:

```bash
node tools/search-probes.mjs --records 12 --queries 6
node tools/search-probes.mjs --id mcp-error-32000-connection-closed-server-failed-to-start --queries 10
node tools/search-probes.mjs --format json --records 39 --queries 8
```

Each probe includes:

- expected HTML pit URL
- answer summary
- exact queries to test

The probe source is `feeds/answer-queries.jsonl`, generated from:

- pit titles
- symptoms
- exact error strings
- upstream issue and PR titles
- root cause and fix summaries

## Current Baseline: 2026-06-24

Manual probe results before the answer-query changes:

- Ordinary web search did not reliably return Agent Pitbook for `agent-pitbook`, `"Agent Pitbook"`, `laozhangzzz/agent-pitbook`, or selected exact-error queries.
- GitHub repository search returned `laozhangzzz/agent-pitbook`.
- GitHub code search did not reliably return specific pit files for selected exact-error queries.
- GitHub traffic showed clone spikes, but no external issues, PRs, discussions, or backlinks.

Interpretation:

```text
machine clone/crawl: likely
ordinary search discoverability: not yet proven
model in-the-wild usage: not yet proven
```

## Current Improvements

The search surface now includes:

- `/answers.html`: answer-first index of known fixes
- `/answers.md`: Markdown mirror for LLM readers
- `/feeds/answer-queries.jsonl`: machine-readable solved-problem query feed
- per-pit `Fast answer` sections
- per-pit `Queries this answers` sections
- `Fix: ...` HTML titles and answer-first meta descriptions
- sitemap entries for answer pages and answer feed
- MCP search over `feeds/answer-queries.jsonl`

## Next Audit Loop

After deployment and indexing delay:

1. Generate probes with `node tools/search-probes.mjs --records 12 --queries 6`.
2. Test each query in ordinary web search.
3. Test each query in GitHub repository search.
4. Test exact error snippets in GitHub code search.
5. Mark each query as `pass`, `weak pass`, or `fail`.
6. For failures, add relevant backlinks from real issue discussions only when the pit directly helps.

