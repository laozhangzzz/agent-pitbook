# Source Audit

Audit date: 2026-06-19

## Primary Source

- Karpathy gist: <https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f>
- Raw gist file fetched from GitHub raw URL.
- Raw gist size at audit time: 75 lines.

## Comment Corpus

GitHub Gist comments were fetched through the GitHub API:

```text
https://api.github.com/gists/442a6bf555914893e9891c11519de94f/comments?per_page=100&page=N
```

Observed pagination:

- 10 API pages
- 902 comments total
- first comment timestamp: 2026-04-04T16:49:23Z
- last comment timestamp: 2026-06-18T16:09:13Z
- local audit text size: about 1.4 MB

The full comment text was used as audit material but is not copied into this repository.

## Follow-Up Papers Read

- Retrieval as Reasoning: Self-Evolving Agent-Native Retrieval via LLM-Wiki  
  <https://arxiv.org/abs/2605.25480>
- Vector RAG vs LLM-Compiled Wiki: A Preregistered Comparison on a Small Multi-Domain Research Corpus  
  <https://arxiv.org/abs/2605.18490>
- Memory as Metabolism: A Design for Companion Knowledge Systems  
  <https://arxiv.org/abs/2604.12034>

## External Links In Comments

The comments contain many linked projects and demos. This pass extracted and grouped those links but did not clone, run, security-review, or benchmark each linked project.

High-frequency linked or discussed directions included:

- qmd and hybrid Markdown search
- OMEGA and local semantic search over Markdown
- TreeSearch and structure-aware search
- Palinode and proposition-level provenance
- SwarmVault and candidate staging
- RTFM and progressive disclosure over vaults
- Cortex and formal graph reasoning
- multiple Obsidian, Claude Code, Cursor, and MCP implementations

## Confidence

High confidence:

- The original LLM Wiki pattern is raw sources, wiki, schema, plus index/log operations.
- Comment discussion repeatedly converges on provenance, search scaling, write-back, and multi-writer safety.
- Later papers operationalize structured wiki retrieval and introduce error bookkeeping.

Medium confidence:

- Which specific external project has the best implementation. That requires separate hands-on testing.

Low confidence:

- Claims made by commenters about benchmark numbers, production scale, or product maturity unless independently verified.

