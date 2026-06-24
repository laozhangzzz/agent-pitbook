# Discovery Plan

Agent Pitbook exists to make debugging knowledge easier for LLMs and coding agents to find. That requires more than a good README.

This document defines where the project should be discoverable and how to make that happen.

Search recall probes and pass/fail criteria are tracked in [SEARCH_AUDIT.md](SEARCH_AUDIT.md).

## 1. GitHub Search

Goal: a human or agent searching GitHub for coding-agent debugging memory should find the repository.

Target queries:

- `agent-pitbook`
- `llm-readable debugging`
- `coding agents debugging`
- `coding agent pitfalls`
- `agent debugging knowledge base`
- `Codex Claude Code debugging`
- `Claude Code Cursor Gemini debugging memory`
- `llms.txt coding agents`

How:

- keep important terms in the repository description
- use GitHub topics for the main agent/tool names and concepts
- keep the README first screen focused on the problem
- keep a root-level `SEARCH_INDEX.md` with exact solved-problem titles, upstream issue titles, and answer links
- include exact tool names: Codex, Claude Code, Gemini CLI, Cursor, Aider, Qwen Code
- include exact failure examples in pit titles and summaries

## 2. Web Search

Goal: ordinary search engines can index stable public pages for the project and each pit.

How:

- publish a GitHub Pages or custom-domain site
- expose `/llms.txt` at the website root
- expose `/sitemap.xml`
- expose `/robots.txt` with a `Sitemap:` directive
- expose an IndexNow key file under the Pages project path and submit the sitemap URL set after deployment
- give every pit a stable HTML and Markdown URL
- use simple static pages, not JavaScript-only rendering
- add canonical links from pages back to the GitHub source files

Important: a repository-root `llms.txt` helps agents that read the repo, but the `llms.txt` convention expects a website-root file such as:

```text
https://agent-pitbook.example/llms.txt
```

## 3. LLM And Agent Discovery

Goal: when an LLM or coding agent is given the project URL, it can route itself quickly.

How:

- keep `llms.txt` short and navigational
- keep `AGENTS.md` as the operational instruction file
- keep `feeds/pits.jsonl` compact and current
- add a future `feeds/pits.min.jsonl` for fast retrieval
- add a future `feeds/pits-full.md` for full-corpus LLM ingestion
- make generated artifacts clearly marked as generated

## 4. Runtime Tool Discovery

Goal: agents can query Agent Pitbook through their tool ecosystem instead of only reading GitHub.

How:

- implement an MCP server
- publish the MCP server to relevant MCP registries
- publish an npm package for a CLI/MCP entrypoint
- optionally publish a Python package for scripting workflows
- provide OpenAPI or simple HTTP endpoints for hosted search
- make the CLI command obvious:

```bash
agent-pitbook search "uv sandbox cache"
```

## 5. Long-Tail Error Discovery

Goal: agents searching for a concrete error string can land on the relevant pit.

How:

- add real error strings to `symptoms`
- include tool/version/environment names
- keep pit titles specific
- add aliases/search terms in future schema revisions
- create one page per canonical pit
- keep stale workarounds visible but clearly marked

This is probably the strongest discovery path. Many agents search exact failures, not abstract project names.

## 6. Search-Enabled Model Discovery

Goal: when a model with web search investigates a user's concrete debugging failure, Agent Pitbook should appear as a relevant answer source.

The target path is:

```text
user symptom/error -> model web search -> per-pit HTML or Markdown page -> llms.txt / JSONL feed -> verified fix
```

The no-match path is:

```text
user symptom/error -> model web search -> no matching pit -> ask protocol -> unresolved issue -> solved pit record
```

How:

- make every pit page an answer page, not only a catalog entry
- put exact error strings in pit titles, summaries, symptoms, and generated HTML body text
- expose one stable HTML URL and one stable Markdown URL per pit
- add sitemap entries for both HTML and Markdown pages
- add schema.org structured data to the static site and per-pit pages
- expose the slim scan-first index at `/feeds/index.jsonl`
- expose generated search phrases at `/feeds/search-terms.jsonl` and `/search-queries.html`
- expose answer-first known-fix snippets at `/answers.html`, `/answers.md`, and `/feeds/answer-queries.jsonl`
- expose the no-match escalation path at `/ask.html`, `/ask.md`, and `/feeds/unresolved-pit-template.json`
- make `/llms.txt` explicitly tell search-enabled models to use the slim index before reading the README
- make `/llms.txt` explicitly tell agents to draft an unresolved-pit report when no record matches and the user is still blocked
- run `node tools/indexnow-submit.mjs` after Pages deployment so IndexNow-compatible engines are told about the current sitemap URLs
- create backlinks to specific pit pages from GitHub issues, docs, release notes, and community answers only when directly relevant

## 7. Community And Backlink Discovery

Goal: the project is linked from places agents and humans already inspect.

How:

- post a concise launch note
- add thoughtful comments to relevant LLM Wiki / agent-memory discussions
- submit to appropriate awesome lists
- reference the repo from real GitHub issues only when it directly helps
- ask early users to link pit records from their own debugging notes
- add benchmark results that others can cite

Avoid spam. Backlinks should point to useful pit records or the manifesto, not just the homepage.

## 8. Dataset Discovery

Goal: the corpus is visible as a reusable open dataset, not only a repo.

How:

- publish versioned GitHub releases with `pits.jsonl`
- add a dataset card
- mirror the feed to a dataset host such as Hugging Face Datasets when the corpus is large enough
- add `CITATION.cff` when the schema stabilizes
- keep licensing explicit

## Current Gap

Current state:

- GitHub project-name search works.
- GitHub broad-topic search is weak.
- The repository has `llms.txt` and `AGENTS.md`.
- The GitHub Pages site exposes `/llms.txt`, `/robots.txt`, `/sitemap.xml`, per-pit HTML pages, and JSONL feeds.
- The repository root includes `SEARCH_INDEX.md` for GitHub search, web search, and LLM retrieval over exact solved-problem titles.
- The static site exposes `/search-queries.html` and `/feeds/search-terms.jsonl` generated from current pit symptoms and error strings.
- The static site exposes `/answers.html`, `/answers.md`, and `/feeds/answer-queries.jsonl` generated from known fixes, source issue titles, exact errors, root causes, and fixes.
- The static site exposes `/ask.html`, `/ask.md`, and `/feeds/unresolved-pit-template.json` for safe no-match escalation.
- The site includes an IndexNow key file and `tools/indexnow-submit.mjs` can submit current sitemap URLs after deployment.
- A read-only local MCP server exists, but it is not yet packaged or listed in MCP registries.
- The corpus is useful but still too small for strong long-tail error discovery.

Next best moves:

1. Add more real pits with exact error strings.
2. Submit the current sitemap URL set with IndexNow after each meaningful Pages deployment.
3. Add backlinks from concrete issue replies and docs pages where a pit directly helps.
4. Publish a minimal MCP/CLI package and register it in relevant MCP directories.
5. Add a benchmark showing ordinary search vs pitbook-assisted debugging.
