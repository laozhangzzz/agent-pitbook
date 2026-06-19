# Design Lessons

## What Karpathy Got Right

The original LLM Wiki pattern says the durable system is not chat history and not one-shot RAG. It is a maintained artifact:

- immutable raw sources
- LLM-maintained wiki pages
- a schema/instruction file that disciplines the agent
- index and log files for navigation and history
- periodic linting for contradictions, stale claims, orphans, missing links, and gaps
- query answers that can be filed back into the wiki

For Agent Pitbook, this means our durable layer should not be MCP or a hosted app. It should be files that agents can read, diff, review, and repair.

## What The Follow-Up Discussion Adds

### 1. Markdown Is Right, But Free-Form Markdown Is Not Enough

Most serious follow-up implementations converged on Markdown plus metadata. The disagreement is not Markdown vs database; it is what should be canonical.

Agent Pitbook decision:

- canonical content: structured Markdown pit records
- governing contract: JSON schema
- generated artifacts: JSONL feed, indexes, MCP responses, website pages

### 2. Provenance Must Become Structural

Source links are necessary but not sufficient. The stronger pattern is claim-level provenance:

- each important claim has a stable claim ID
- each claim links to source IDs
- sources have content hashes or stable locators
- stale detection can happen mechanically when source hashes change

Agent Pitbook decision:

- keep `source_links` in pit records
- add `claims/` as the next layer for granular evidence
- do not promote high-impact claims to `verified` without source or local-session evidence

### 3. Index Files Are A Bootstrap, Not A Scaling Plan

`index.md` works well while the corpus is small. Many commenters reported it breaks once a vault reaches hundreds or thousands of pages.

Agent Pitbook decision:

- use `indexes/index.md` as a human and LLM map
- treat BM25, FTS5, vector, graph, and MCP indexes as rebuildable accelerators
- never let a search index become the only source of truth

### 4. Write-Back Is The Compounding Loop

Ingest is only half the system. The bigger compounding effect comes from writing useful answers, decisions, failed fixes, and verified outcomes back into the corpus.

Agent Pitbook decision:

- after a solved debugging session, create a candidate pit
- after verification, update status and `last_verified`
- store failed approaches and anti-patterns, not just final fixes

### 5. Multi-Agent Writing Needs Data-Model Discipline

Git merge solves textual conflicts, not semantic duplicates. The follow-up discussion repeatedly points toward append-only logs, partitioned writes, stable claim identities, and deterministic merge rules.

Agent Pitbook decision:

- pit records remain one file per canonical issue
- append-only logs record ingest, verification, stale checks, and disputes
- candidate records should be staged before promotion
- ambiguous supersession or contradiction goes to human review

### 6. Error Books Are More Than Logs

The LLM-Wiki research paper turns recurring structural and semantic failures into an Error Book. That is directly relevant to an agent debugging pit database.

Agent Pitbook decision:

- add `errors/` for recurring ingestion, retrieval, verification, and agent-behavior failures
- use error records to update adapters and validation scripts
- track when the system itself repeatedly creates bad pit records

### 7. Decisions And Outcomes Matter

Several follow-ups argue that knowledge systems should record decisions, alternatives, outcomes, and reversals. This is especially important for debugging pits, because a fix may be version-specific or later superseded.

Agent Pitbook decision:

- pit records should include anti-patterns and workarounds
- future claim records should support supersedes/contradicts relations
- logs should record why status changed from candidate to verified, stale, or disputed

## Bottom Line

Agent Pitbook should be:

```text
Git-versioned structured Markdown
+ strict schema
+ claim-level provenance
+ append-only logs
+ error book
+ rebuildable search/MCP/index artifacts
```

Not:

```text
opaque vector DB as source of truth
free-form forum posts
unverified LLM summaries
MCP-only memory
```

