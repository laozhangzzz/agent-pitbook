# LLM Wiki Follow-Up Notes

This directory records what Agent Pitbook borrows from Andrej Karpathy's LLM Wiki pattern and what we add after reading the follow-up discussion.

## Source Audit

- [source-audit.md](source-audit.md): what was read and what was not.
- [design-lessons.md](design-lessons.md): distilled lessons from the gist, comments, and follow-up papers.
- [agent-pitbook-layout.md](agent-pitbook-layout.md): how the LLM Wiki directory pattern maps into Agent Pitbook.

## Short Conclusion

Karpathy's original pattern is still the right base:

```text
raw sources -> wiki -> schema
```

For Agent Pitbook, the follow-up discussion pushes us to extend it:

```text
sources -> pits -> schema
        -> claims
        -> indexes
        -> logs
        -> errors
```

The canonical source remains Git-versioned, schema-governed Markdown. JSONL feeds, search indexes, graph indexes, websites, and MCP responses are rebuildable artifacts.

