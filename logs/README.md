# Logs

`logs/` contains append-only records of repository knowledge operations.

The log exists for auditability, not as a substitute for git history.

Suggested entry prefix:

```text
## [YYYY-MM-DD] <operation> | <short title>
```

Operations:

- `ingest`: new source or session processed
- `pit`: pit created or materially updated
- `verify`: pit or claim verified
- `stale`: pit or claim marked stale
- `dispute`: pit or claim disputed
- `lint`: health check run
- `schema`: schema or adapter changed

