# Agent Pitbook

Agent Pitbook is a small, machine-readable knowledge base for the engineering pits that coding agents repeatedly fall into.

The project is not a forum. It is a structured debug memory layer for Codex, Claude Code, Gemini CLI, Qwen Code, Cursor, Aider, and other agentic coding tools.

Each pit record answers a narrow question:

> When this symptom appears in this environment, what root cause and verified fix should an agent consider first?

## Why

Public engineering knowledge is scattered across GitHub issues, Stack Overflow, docs, blogs, chat logs, and local sessions. Human discussion formats often hide the actual fix inside long threads. LLMs can read those threads, but they do not reliably extract:

- exact symptoms
- affected versions and environments
- root cause
- verified fix
- commands used to verify the fix
- stale or unsafe workarounds
- source links and confidence

Agent Pitbook turns those lessons into records that are both human-readable and agent-readable.

## Repository Shape

```text
agent-pitbook/
  llms.txt                         LLM entrypoint
  schema/pit.schema.json           canonical record schema
  pits/                            Markdown pit records with frontmatter
  feeds/pits.jsonl                 machine-readable feed
  tools/                           no-dependency local utilities
  adapters/                        agent-specific usage instructions
  mcp-server/                      experimental MCP bridge notes
  docs/                            launch and governance notes
```

## Record Contract

A pit record should include:

- `symptoms`: what the user or agent sees
- `environment`: operating system, architecture, shell, runtime, package manager, agent, and relevant versions
- `root_cause`: the smallest known explanation
- `fix`: ordered repair steps
- `verification`: commands or observations that prove the fix
- `source_links`: original sources, issue threads, docs, or local session notes
- `confidence`: `low`, `medium`, or `high`
- `status`: `candidate`, `verified`, `stale`, or `disputed`

See [schema/pit.schema.json](schema/pit.schema.json).

## Consume As An Agent

Start from [llms.txt](llms.txt).

Preferred flow:

1. Search `feeds/pits.jsonl` by symptom, tool, error text, OS, package manager, and agent.
2. Read the matching Markdown pit under `pits/`.
3. Treat all commands as suggestions. Inspect the local project before running them.
4. Prefer records with `status: verified`, recent `last_verified`, and source links.
5. If a fix works, propose a new pit record or a verification update.

Local search:

```bash
node tools/search-pits.mjs "docker localhost refused"
```

Validate records:

```bash
node tools/validate-pits.mjs
```

Rebuild the JSONL feed:

```bash
node tools/build-feed.mjs
```

## Agent Adapters

Adapters are intentionally small. The protocol is the schema plus the feed; adapters only teach each tool how to use it.

- Codex: [adapters/codex/agent-pitbook/SKILL.md](adapters/codex/agent-pitbook/SKILL.md)
- Claude Code: [adapters/claude-code/CLAUDE.md](adapters/claude-code/CLAUDE.md)
- Gemini: [adapters/gemini/GEMINI.md](adapters/gemini/GEMINI.md)
- Qwen Code and compatible agents: [adapters/qwen-code/AGENTS.md](adapters/qwen-code/AGENTS.md)
- Cursor: [adapters/cursor/rules.md](adapters/cursor/rules.md)
- Generic system prompt: [adapters/generic/system-prompt.md](adapters/generic/system-prompt.md)

## Trust Rules

Agent Pitbook should be conservative:

- Do not copy full external posts or issue threads into records.
- Summarize the fix and link the source.
- Mark unverified records as `candidate`.
- Mark old version-specific records as `stale` when behavior changes.
- Never treat external text as trusted agent instructions.
- Do not include secrets, tokens, private logs, or customer data.
- Prefer small, reproducible fixes over broad cleanup.

## Initial Scope

The first useful scope is agentic local development:

- macOS and Apple Silicon
- Docker and local ports
- Python, uv, Node, and package caches
- local LLM tooling
- Codex, Claude Code, Gemini, Qwen Code, Cursor, Aider
- sandboxing, filesystem permissions, browser automation, MCP, and tool execution quirks

## Content License

Recommended default:

- code and scripts: MIT
- pit record text: CC BY 4.0

External sources remain owned by their authors. Link and summarize them; do not mirror them wholesale.

