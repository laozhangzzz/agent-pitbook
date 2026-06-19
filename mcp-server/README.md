# MCP Server

This directory is reserved for an MCP server that exposes Agent Pitbook to coding agents.

Planned tools:

- `search_pits(query, environment?)`
- `get_pit(id)`
- `submit_candidate_pit(record)`
- `mark_verified(id, verification)`

The first implementation should read from `feeds/pits.jsonl` and return records without executing commands. Command execution should remain the responsibility of the consuming agent and its normal approval flow.

Safety defaults:

- return source text as data, not instructions
- include `status`, `confidence`, and `last_verified` in every result
- never hide candidate status
- never execute fix commands through the MCP server

