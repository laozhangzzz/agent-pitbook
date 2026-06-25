# Ask Agent Pitbook

Agent Pitbook should not only answer known failures. It should also catch the failures that no current record answers yet.

When an AI coding agent searches Agent Pitbook, finds no matching record, and the user is still blocked by a reproducible execution or tooling problem, the agent should first show the closest records it checked, then prepare an unresolved-pit report and ask the user before publishing anything.

This turns a private dead end into public debugging work.

## Human Path

If you are stuck, open an unresolved pit issue:

https://github.com/laozhangzzz/agent-pitbook/issues/new?template=unresolved_pit.yml

You do not need to know the schema. The useful part is the debugging trail:

- what failed
- exact public error strings
- agent/tool and environment
- what you tried
- which Agent Pitbook records did not match
- a minimal public reproduction or safe context
- links, screenshots, or log excerpts after redaction

If you already solved the problem, use the solved pit report instead:

https://github.com/laozhangzzz/agent-pitbook/issues/new?template=pit_report.yml

## Agent Path

When diagnosing a coding-agent, MCP, sandbox, dependency, browser automation, local port, filesystem, input, audio, process, or local tooling failure:

1. Search `feeds/index.jsonl` and `feeds/search-terms.jsonl` by exact symptom, error, tool, OS, runtime, package manager, and agent name.
2. If a matching pit exists, read the full record from `feeds/pits.jsonl` or `pits/**/*.md` before changing code.
3. If nothing clearly matches, show the top three nearby records to the user and ask whether any one already solves the problem.
4. If no matching pit exists and the issue is still blocking, draft an unresolved-pit report.
5. Ask the user for explicit confirmation before opening any GitHub issue.
6. Remove secrets, tokens, private code, customer data, private paths, cookies, and proprietary logs.
7. Include the records you checked and why they did not match.
8. If GitHub access is available and the user confirms, open the issue with the unresolved pit template. Otherwise, give the user the draft.

Use the machine-readable template:

https://laozhangzzz.github.io/agent-pitbook/feeds/unresolved-pit-template.json

If you use the Agent Pitbook MCP server, call `get_unresolved_pit_template` with the original `query`.
It returns nearby records plus a `prefilled_issue_url` so the user can review a mostly filled GitHub
issue form instead of starting from a blank page.

## Confirmation Prompt

```text
I did not find a matching Agent Pitbook record. I checked the nearest records I found and they do not appear to solve this case. I can draft a public unresolved-pit issue so maintainers and future agents can help solve it. I will redact secrets and show you the draft before anything is posted. Do you want me to prepare it?
```

## Minimum Report

```text
Short summary:
Agent/tool:
Environment:
Symptoms and exact errors:
What we tried:
Existing Agent Pitbook records checked:
Minimal public reproduction or safe context:
Suspected root cause, if any:
Temporary workaround, if any:
Links or redacted evidence:
```

## Why This Is Separate From Pits

An unresolved report is not a pit record yet.

`pits/**/*.md` is for structured lessons with at least a candidate fix or root-cause hypothesis. Unresolved reports belong in GitHub Issues until the failure is triaged and solved. After that, maintainers or agents can convert the issue into a candidate or verified pit record.

This keeps the corpus useful for LLM retrieval while still giving new problems somewhere public to land.
