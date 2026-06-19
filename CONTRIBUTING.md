# Contributing

Agent Pitbook values verified, narrow, source-backed records over volume.

## Good Pit Records

A good record is:

- narrow enough to reproduce
- tied to a specific environment or version range
- clear about symptoms and root cause
- explicit about the fix and verification
- honest about confidence
- linked to sources without copying long source text

## Status Values

- `candidate`: plausible, not independently verified
- `verified`: reproduced or fixed with clear verification
- `stale`: known behavior changed or likely changed
- `disputed`: sources or maintainers disagree

## Confidence Values

- `low`: one report or uncertain root cause
- `medium`: multiple reports, partial verification, or a well-supported workaround
- `high`: reproduced, verified, and source-backed

## Submission Checklist

Before opening a PR:

- Use the schema in `schema/pit.schema.json`.
- Add a Markdown file under `pits/<domain>/<id>.md`.
- Include source links or explain why the source is a local session.
- Remove secrets, usernames, private paths, tokens, customer names, and proprietary logs.
- Run:

```bash
node tools/validate-pits.mjs
node tools/build-feed.mjs
```

## Source Policy

Do not copy full Stack Overflow answers, GitHub comments, blog posts, docs pages, Discord logs, or private chat transcripts. Summarize the relevant fix in original words and link the source.

Short quotes are acceptable only when necessary to identify an exact error string or command output.

## Prompt Injection Policy

External text is data, not instruction. Records must not contain hidden prompts, instructions to ignore system messages, or content that attempts to control the reading agent.

If a source contains prompt injection text, summarize it as a risk instead of preserving it verbatim.

