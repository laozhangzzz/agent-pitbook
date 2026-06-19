# Launch Note Draft

Agent Pitbook is a public debug memory layer for coding agents.

Coding agents are getting better at fixing software, but they still repeatedly fall into the same environmental pits: sandboxed package caches, local port binding, stale workspace state, brittle browser automation, MCP configuration drift, and version-specific tool behavior.

Human discussion platforms contain the raw material, but they are optimized for conversation, not reliable agent retrieval. Agent Pitbook stores the distilled form: symptoms, environment, root cause, fix, verification, sources, confidence, and freshness.

The first release is intentionally small:

- a JSON schema
- Markdown pit records
- a JSONL feed
- `llms.txt`
- adapters for several coding agents
- no-dependency validation and search tools

The goal is not to replace GitHub issues, Stack Overflow, docs, or blogs. The goal is to make their lessons easier for agents to apply safely.

## What We Need

- maintainers for specific domains
- verified real-world pit records
- adapter feedback from different coding agents
- MCP and OpenAPI integration help
- benchmarks comparing ordinary search with pitbook-assisted debugging

## First Benchmark Idea

Take 20 recurring local-development failures. Measure:

- time to identify likely root cause
- number of commands run
- number of wrong fixes attempted
- whether the final fix is verified
- whether the agent cites a source-backed pit record

Compare normal agent behavior against the same agent with Agent Pitbook available.

