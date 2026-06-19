# Schema Notes

`pit.schema.json` defines the machine-readable record used by the JSONL feed and embedded in each Markdown pit record.

The schema is intentionally strict:

- IDs are stable slug strings.
- Status and confidence are enumerated.
- Source links are required.
- Verification is required even for candidate records. For candidates, verification can describe what still needs to be checked.
- Safety metadata is optional but recommended for records involving commands, untrusted sources, or destructive operations.

Markdown pit records embed a JSON object inside an HTML comment:

```markdown
<!-- pit-record
{ "...": "..." }
-->
```

The build script extracts those objects and writes `feeds/pits.jsonl`.

