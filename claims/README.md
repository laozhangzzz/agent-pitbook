# Claims

`claims/` is the planned claim-level provenance layer.

Pit records stay readable and practical. Claim records make important statements auditable and stale-detectable.

## Why

A pit can contain many claims:

- a symptom occurs under a version range
- a root cause is known
- a command fixes the issue
- a workaround is risky
- a record supersedes an older belief

If all of that lives only as prose, agents cannot reliably detect staleness or contradictions. Claim records give those statements IDs and evidence.

## Planned Flow

1. Create or update a pit record.
2. Extract important claims into `claims.jsonl`.
3. Link claims to source IDs and pit IDs.
4. Mark claims as `candidate`, `supported`, `disputed`, `stale`, or `superseded`.
5. Use claim state to update pit confidence and status.

