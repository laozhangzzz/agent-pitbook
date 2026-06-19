# Resource Request Draft

This is a reusable draft for asking AI tooling vendors, open-source programs, or agent platform teams for credits, Pro access, sponsorship, or technical collaboration.

## Short Pitch

Agent Pitbook is a structured, LLM-native debugging pit knowledge base for coding agents. It turns recurring engineering failures into source-backed records with symptoms, environment, root cause, fix, verification, confidence, and freshness.

The project helps coding agents avoid repeating known mistakes and gives users safer, more explainable fixes.

## Why It Matters

Coding agents increasingly operate inside real development environments, but many failures are not algorithmic coding problems. They are environmental pits: sandbox permissions, network-restricted dependency installs, local port binding, stale workspace state, MCP configuration drift, and version-specific tool behavior.

Human discussion platforms contain the raw material, but agents need a structured, trustworthy retrieval layer.

## What Exists Now

- JSON schema for pit records
- Markdown records for humans and LLMs
- JSONL feed for retrieval
- `llms.txt` for model discovery
- adapters for Codex, Claude Code, Gemini, Qwen Code, Cursor, and generic agents
- local validation and search scripts

## What Support Would Enable

- more verified seed records
- benchmark tasks comparing normal agent debugging against pitbook-assisted debugging
- MCP server implementation and hosted search
- contributor review and safety process
- adapter testing across multiple coding agents

## Ask

We are requesting access, credits, sponsorship, or technical feedback that helps test Agent Pitbook across real agent workflows.

Specific support requested:

- advanced coding-agent access for compatibility testing
- API credits for benchmark runs
- feedback from agent platform teams on MCP and adapter design
- amplification to interested open-source maintainers

## Evidence Plan

The project will publish:

- benchmark tasks
- before/after agent transcripts
- solved-pit records with verification
- failure cases and stale records
- public schema and adapters

