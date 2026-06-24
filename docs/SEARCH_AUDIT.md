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

- root `SEARCH_INDEX.md`: answer-first exact problem titles in the GitHub repository root
- GitHub issue #2: native searchable tracker for solved-problem queries and matching pit links
- GitHub issues #3-#41: dedicated `known-fix` issue pages, one solved pit per issue, titled by exact problem query
- `/SEARCH_SNAPSHOT_2026-06-24.md`: release-style exact-query snapshot with known-fix issue links
- `/q/`: exact-query landing pages, one high-value solved-problem query per page, with searched phrase in URL/title/H1
- GitHub release `search-snapshot-2026-06-24`: release page plus downloadable JSONL/RSS/index assets
- `/feeds/known-fix-issues.jsonl`: machine-readable pit id -> dedicated GitHub known-fix issue URL map
- `/answers.html`: answer-first index of known fixes
- `/answers.md`: Markdown mirror for LLM readers
- `/llms-full.txt`: full answer-first text index
- `/answer-queries.txt`: plain-text query -> pit URL map
- `/ai.txt` and `/.well-known/llms.txt`: crawler-friendly AI routing mirrors
- `/feed.xml`: RSS items whose titles start from exact solved-problem queries
- `/feeds/answer-queries.jsonl`: machine-readable solved-problem query feed
- `/97be09ad8cd61c71af39f8b61c2de866.txt`: IndexNow ownership key for the `/agent-pitbook/` URL subtree
- per-pit `Fast answer` sections
- per-pit `Queries this answers` sections
- `Fix: ...` HTML titles and answer-first meta descriptions
- sitemap entries for answer pages and answer feed
- MCP search over `feeds/answer-queries.jsonl`
- `tools/indexnow-submit.mjs`: submit the sitemap URL set to IndexNow-compatible engines after deployment

## Latest Audit: 2026-06-24

Status after creating dedicated known-fix issues, deploying exact-query alias pages, and submitting the 1350-URL sitemap:

- Pass: GitHub repo search for `agent-pitbook` returns `laozhangzzz/agent-pitbook`.
- Pass: GitHub issue search for `GitHub MCP Server Fails to Start` returns dedicated issue #15 before the broad tracker issue #2.
- Pass: GitHub issue search for `Singleton McpServer causes Already connected to a transport` returns dedicated issue #5 before the broad tracker issue #2.
- Pass: GitHub issue search for `MCP Chrome Bridge returns 500 due to ERR_HTTP_HEADERS_SENT` returns dedicated issue #5.
- Pass: GitHub issue search for `MCP error -32000` returns dedicated issue #15.
- Pass: deployed Pages URLs expose `/feed.xml`, `/llms.txt`, `/ai.txt`, `/search-index.md`, and `/answer-queries.txt` with the known-fix issue search surface linked where appropriate.
- Pass: deployed Pages URLs expose 624 HTML exact-query alias pages plus 624 Markdown mirrors under `/q/`; `/feeds/answer-queries.jsonl` exposes 16 `query_landing_urls` per record.
- Pass: `/SEARCH_SNAPSHOT_2026-06-24.md` lists all 39 known-fix issue URLs with exact solved-problem titles.
- Pass: GitHub release `search-snapshot-2026-06-24` is public and includes the exact problem titles plus `pits.jsonl`, `answer-queries.jsonl`, `search-terms.jsonl`, `known-fix-issues.jsonl`, `SEARCH_INDEX.md`, `SEARCH_SNAPSHOT_2026-06-24.md`, and `feed.xml` assets.
- Pass: per-pit HTML and Markdown pages link to their dedicated known-fix issue; per-pit JSON-LD includes the issue URL in `sameAs` and `discussionUrl`.
- Pass: IndexNow accepted the current 1350-URL sitemap submission.
- Weak: GitHub code search via `gh search code` did not return even `agent-pitbook` inside the repository immediately after the commits, so code search indexing remains unproven.
- Fail/lagging: ordinary web search did not yet return the new Pages or GitHub issue surfaces immediately after deployment. This is expected indexing delay, but it means the objective is not complete until external search starts surfacing the records.
- Searchable audit comments were added to GitHub issue #2, plus alias URL comments on issues #5 and #15.

## IndexNow Submission

After a Pages deployment, notify IndexNow-compatible search engines:

```bash
node tools/indexnow-submit.mjs --dry-run
node tools/indexnow-submit.mjs
```

The script reads `docs/sitemap.xml`, posts the URL set to `https://api.indexnow.org/indexnow`, and includes `keyLocation` so the key file can live under the GitHub Pages project path instead of the host root.

An HTTP `200` or `202` only proves the URL set was accepted for processing. It does not prove ranking or indexing.

## Next Audit Loop

After deployment and indexing delay:

1. Generate probes with `node tools/search-probes.mjs --records 12 --queries 6`.
2. Submit the current sitemap with `node tools/indexnow-submit.mjs`.
3. Test each query in ordinary web search.
4. Test each query in GitHub repository search.
5. Test each query in GitHub issue search, especially whether a dedicated `known-fix` issue appears before issue #2.
6. Test exact error snippets in GitHub code search, especially whether `SEARCH_INDEX.md` appears.
7. Mark each query as `pass`, `weak pass`, or `fail`.
8. For failures, add relevant backlinks from real issue discussions only when the pit directly helps.
