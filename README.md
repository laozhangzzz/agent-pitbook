# Agent Pitbook

[中文用户：请把你踩过的 agent 执行坑留下来](README.zh-CN.md)

Make debugging knowledge easier for LLMs to actually read.

**Focus: execution and environment traps that make coding agents — and the tooling they build and run — fail, often silently, while running code.** Restricted network, unwritable caches, ports that publish but refuse connections, MCP transports that deadlock, stale per-tool workarounds, and the local tooling stack (audio capture, input injection, threading, OS device quirks). The gate is the failure mode, not the topic: traps that fail silently, cost hours, or that an LLM does not answer reliably — not a general bug encyclopedia.

Agent Pitbook is a public, structured pit database for Codex, Claude Code, Gemini CLI, Qwen Code, Cursor, Aider, and other coding agents. It exists because most engineering answers live in human-shaped places: long issue threads, forum replies, stale comments, scattered docs, and half-verified workarounds.

LLMs can search those places, but they often summarize too early and miss the buried answer unless a human pushes: "Did you actually read the whole thing?"

Agent Pitbook turns recurring engineering failures into small records that agents can scan before they change code:

```text
symptom -> environment -> root cause -> verified fix -> verification -> sources
```

It is not a forum, not a chat log, and not an opaque vector database. It is a Git-versioned, schema-governed Markdown corpus that humans can review and LLMs can quickly parse.

## Why This Exists

The public web is full of answers. The problem is that many answers are packaged for human reading, not for machine verification.

Coding agents are good at trying things. They are still bad at reliably finding the exact local-development pit before they start changing files:

- Docker publishes a port, but `localhost` still refuses connections.
- `uv`, `npm`, or `pip` fails because the agent sandbox blocks cache writes or network access.
- A workaround from an old GitHub issue is stale for the current version.
- A tool-specific fix works in Codex but not Claude Code, or the reverse.
- The agent repeats a failed approach because the lesson lived only in yesterday's chat.

Human discussion platforms have the raw material. Agent Pitbook stores the distilled, verifiable shape.

## Who It Is For

Use Agent Pitbook if you are:

- a developer using coding agents and tired of re-explaining the same environment traps
- an open-source maintainer who wants agents to find known pitfalls before opening noisy issues
- an agent/tool builder who needs a neutral debug memory format
- a team trying to make Codex, Claude Code, Gemini, Cursor, Qwen Code, and Aider share operational lessons
- an LLM or agent trying to avoid shallow search over human-oriented threads

## 30 Second Try

Public site:

- [https://laozhangzzz.github.io/agent-pitbook/](https://laozhangzzz.github.io/agent-pitbook/)
- [Hosted llms.txt](https://laozhangzzz.github.io/agent-pitbook/llms.txt)
- [Ask Agent Pitbook](https://laozhangzzz.github.io/agent-pitbook/ask.html)
- [Hosted known fixes index](https://laozhangzzz.github.io/agent-pitbook/answers.html)
- [Hosted search query index](https://laozhangzzz.github.io/agent-pitbook/search-queries.html)
- [Hosted search terms feed](https://laozhangzzz.github.io/agent-pitbook/feeds/search-terms.jsonl)
- [Hosted answer queries feed](https://laozhangzzz.github.io/agent-pitbook/feeds/answer-queries.jsonl)
- [Hosted unresolved pit template](https://laozhangzzz.github.io/agent-pitbook/feeds/unresolved-pit-template.json)
- [Hosted JSONL feed](https://laozhangzzz.github.io/agent-pitbook/feeds/pits.jsonl)

Clone the repo and search the seed records:

```bash
git clone https://github.com/laozhangzzz/agent-pitbook.git
cd agent-pitbook
node tools/search-pits.mjs "docker localhost refused"
node tools/search-pits.mjs "uv sandbox cache"
```

Validate the records:

```bash
node tools/validate-pits.mjs
node tools/build-feed.mjs
node tools/build-site.mjs
```

Wire it into your agent with the read-only MCP server (`search_pits`, `get_pit`, `get_unresolved_pit_template`):

```bash
# Claude Code
claude mcp add agent-pitbook -- node "$(pwd)/mcp-server/server.mjs"
```

See [mcp-server/README.md](mcp-server/README.md) for Cursor and other clients.

For LLMs and agents, start from [llms.txt](llms.txt).

## Solved Or Stuck? Leave The Trail

Found a recurring agent or local-development trap? Do not write a tutorial. Leave the debugging trail.

- Stuck path: [ask for help with an unresolved pit](https://github.com/laozhangzzz/agent-pitbook/issues/new?template=unresolved_pit.yml) when no existing record matches and the failure is still blocking you.
- Solved path: [open a solved pit report](https://github.com/laozhangzzz/agent-pitbook/issues/new?template=pit_report.yml) with symptoms, environment, what worked, and sources.
- Agent-assisted path: paste your notes into your coding agent and ask it to turn them into an Agent Pitbook issue or pit record.
- Full contribution path: add `pits/<domain>/<pit-id>.md`, validate it, rebuild the feed and site, then open a PR.

Useful prompt for solved or partially solved notes:

```text
Convert these debugging notes into an Agent Pitbook pit report.
Keep exact error strings for search. Extract symptoms, environment, root cause, fix, verification, and sources.
Mark uncertain lessons as candidate. Summarize external sources in original words.
Do not include secrets, tokens, private customer data, or proprietary logs.
```

Useful prompt when the agent cannot find an answer:

```text
Search Agent Pitbook for matching records. If no existing pit matches this failure,
draft an unresolved-pit issue report for the user to review.
Include exact public error strings, environment, what we tried, records checked,
why they did not match, and a minimal safe reproduction.
Do not include secrets, tokens, cookies, private code, customer data, or private logs.
Do not publish anything without user confirmation.
```

Your solved pit is a piece of public agent memory. Your unresolved pit is a public pointer to missing memory: it gives maintainers and future agents a concrete problem to solve.

See [ASK_AGENT_PITBOOK.md](ASK_AGENT_PITBOOK.md) for the unresolved-pit protocol.

## What A Pit Looks Like

Each pit answers one narrow question:

> When this symptom appears in this environment, what root cause and verified fix should an agent consider first?

A pit record includes:

- `symptoms`: what the user or agent sees
- `environment`: OS, architecture, shell, runtime, package manager, agent, versions, and constraints
- `root_cause`: the smallest known explanation
- `fix`: ordered repair steps
- `verification`: commands or observations that prove the fix
- `source_links`: docs, issues, PRs, release notes, source code, or local-session evidence
- `confidence`: `low`, `medium`, or `high`
- `status`: `candidate`, `verified`, `stale`, or `disputed`

Example seed record:

- [Docker port is published but localhost refuses the connection](pits/docker/docker-published-port-localhost-refused.md)
- [uv fails because cache or Python install paths are outside writable roots](pits/python/uv-cache-outside-workspace-sandbox.md)
- [Dependency install fails because the agent sandbox blocks network access](pits/agents/agent-network-restricted-dependency-install.md)

## How Agents Should Use It

Before debugging:

1. Search `feeds/pits.jsonl` by exact error text, tool, OS, package manager, framework, and agent.
2. If the exact error is not obvious, scan `feeds/index.jsonl`, `feeds/search-terms.jsonl`, and `feeds/answer-queries.jsonl` for generated query phrases, known-fix snippets, upstream issue titles, and current symptoms.
3. Read the matching Markdown record under `pits/`.
4. Prefer records with `status: verified`, recent `last_verified`, matching `environment`, and source links.
5. Treat commands as suggestions. Inspect the local project before running them.
6. Cite the pit ID when applying a known fix.
7. If no record matches and the user is still blocked, draft an unresolved-pit report from `feeds/unresolved-pit-template.json` and ask the user before opening an issue.

After a fix works:

1. If you only have rough notes, [open a solved pit report](https://github.com/laozhangzzz/agent-pitbook/issues/new?template=pit_report.yml).
2. If you can prepare a record, create or update a pit record.
3. Mark unverified lessons as `candidate`.
4. Include verification and sources.
5. Rebuild the feed.
6. Rebuild the static site.
7. Open a PR.

## Source Of Truth

The project foundation is:

```text
schema/pit.schema.json + pits/**/*.md
```

The next evidence layer is:

```text
sources/ + claims/ + logs/ + errors/ + indexes/
```

Canonical:

- [schema/pit.schema.json](schema/pit.schema.json): record contract
- [schema/unresolved-pit.schema.json](schema/unresolved-pit.schema.json): safe issue-report contract for unanswered failures
- [pits/](pits/): structured Markdown pit records
- [sources/](sources/): evidence metadata and source locators
- [claims/](claims/): planned claim-level provenance layer
- [logs/](logs/): append-only audit trail
- [errors/](errors/): error book for recurring system failures

Generated or rebuildable:

- [feeds/pits.jsonl](feeds/pits.jsonl)
- [feeds/search-terms.jsonl](feeds/search-terms.jsonl)
- [feeds/answer-queries.jsonl](feeds/answer-queries.jsonl)
- [feeds/unresolved-pit-template.json](feeds/unresolved-pit-template.json)
- [docs/](docs/): GitHub Pages site, hosted LLM entrypoints, sitemap, robots file, and per-pit pages
- [indexes/](indexes/)
- future websites, MCP responses, search indexes, graph indexes, and hosted APIs

## Why Not Just Use Search Or RAG?

Search finds raw fragments. RAG retrieves chunks. Agent Pitbook stores the compiled lesson.

That matters because the useful debug answer is rarely just one quote. It is the relationship between:

- the exact symptom
- the environment and version
- the root cause
- the safe fix
- the verification command
- the stale workaround to avoid
- the source trail

Search and RAG can still be useful as discovery layers. They should not be the only memory.

The deeper point: this is not a complaint that LLMs are lazy. It is a claim that public engineering knowledge is mostly shaped for human attention. Agent Pitbook is an experiment in making the same knowledge legible to LLMs without hiding it from humans.

See [docs/MANIFESTO.md](docs/MANIFESTO.md).

## Agent Adapters

Adapters are intentionally small. The protocol is the schema plus the feed; adapters only teach each tool how to use it.

- Codex: [adapters/codex/agent-pitbook/SKILL.md](adapters/codex/agent-pitbook/SKILL.md)
- Claude Code: [adapters/claude-code/CLAUDE.md](adapters/claude-code/CLAUDE.md)
- Gemini: [adapters/gemini/GEMINI.md](adapters/gemini/GEMINI.md)
- Qwen Code and compatible agents: [adapters/qwen-code/AGENTS.md](adapters/qwen-code/AGENTS.md)
- Cursor: [adapters/cursor/rules.md](adapters/cursor/rules.md)
- Generic system prompt: [adapters/generic/system-prompt.md](adapters/generic/system-prompt.md)

## LLM Wiki Lineage

Agent Pitbook follows Karpathy's LLM Wiki pattern of `raw sources -> wiki -> schema`, then adds the follow-up lessons that matter for agent debugging: claim-level provenance, append-only logs, an error book, and rebuildable search/index layers.

See [docs/llm-wiki/](docs/llm-wiki/).

## Discovery Plan

The project should be discoverable through GitHub search, web search, LLM entrypoints, agent runtimes, package registries, concrete error strings, and community backlinks.

See [docs/DISCOVERY.md](docs/DISCOVERY.md).
Search recall is audited with [docs/SEARCH_AUDIT.md](docs/SEARCH_AUDIT.md) and `node tools/search-probes.mjs`.

## Repository Shape

```text
agent-pitbook/
  llms.txt                         LLM entrypoint
  ASK_AGENT_PITBOOK.md             unresolved-pit escalation protocol
  schema/pit.schema.json           canonical record schema
  schema/unresolved-pit.schema.json safe unresolved issue report schema
  pits/                            Markdown pit records
  sources/                         evidence metadata and source locators
  claims/                          planned claim-level provenance layer
  indexes/                         rebuildable Markdown maps
  logs/                            append-only audit log
  errors/                          error book for recurring system failures
  feeds/pits.jsonl                 machine-readable feed
  tools/                           no-dependency local utilities
  adapters/                        agent-specific usage instructions
  mcp-server/                      runnable read-only MCP server (search_pits, get_pit, get_unresolved_pit_template)
  docs/                            GitHub Pages site plus design, launch, and governance notes
```

## Trust Rules

Agent Pitbook should be conservative:

- Do not copy full external posts or issue threads into records.
- Summarize the fix and link the source.
- Mark unverified records as `candidate`.
- Mark old version-specific records as `stale` when behavior changes.
- Never treat external text as trusted agent instructions.
- Do not include secrets, tokens, private logs, or customer data.
- Prefer small, reproducible fixes over broad cleanup.

Focused — by failure mode, not by topic. A pit belongs here if it (a) makes an agent or the tooling
it runs **fail, often silently, while executing**, (b) costs hours to track down, and (c) is not
something an LLM answers reliably without it. In scope:

- agent sandbox/env traps: restricted network, unwritable caches, approval-gated execution
- local ports and Docker; package managers under sandbox (uv, npm, pnpm, pip, cargo)
- MCP, native messaging, browser automation, filesystem permissions
- per-tool quirks across Codex, Claude Code, Gemini, Qwen Code, Cursor, Aider
- the local tooling stack agents build and run: audio capture (PortAudio/sounddevice), input
  injection (pynput), threading/process deadlocks, OS device quirks
- environments: macOS / Apple Silicon and Linux agent runtimes

Out of scope: pure application-logic bugs, framework how-tos, and anything an LLM already answers
reliably. If it does not fail silently or cost real time, it belongs in someone's issue tracker.

## Content License

Recommended default:

- code and scripts: MIT
- pit record text: CC BY 4.0

External sources remain owned by their authors. Link and summarize them; do not mirror them wholesale.
