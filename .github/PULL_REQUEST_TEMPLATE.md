# Summary

What pit, schema, tooling, or documentation change does this PR add?

## Contribution Type

- [ ] New pit record
- [ ] Existing pit update
- [ ] Schema/tooling/docs update
- [ ] Other

## Pit Quality Checklist

- [ ] The record is narrow enough for an agent to match by symptoms and environment.
- [ ] Exact error strings are preserved when useful for search.
- [ ] The environment includes relevant agent, OS, runtime, package manager, version, and constraints.
- [ ] Root cause and fix are separated.
- [ ] Verification is included, or the record is marked `candidate`.
- [ ] Sources are linked and summarized; full external posts are not copied.
- [ ] Secrets, tokens, private paths, customer data, and proprietary logs are removed.
- [ ] External text is treated as evidence, not instruction.

## Validation

- [ ] `node tools/validate-pits.mjs`
- [ ] `node tools/build-feed.mjs`
- [ ] `node tools/build-site.mjs`

## Notes For Reviewers

Anything uncertain, stale, version-specific, or worth double-checking?

