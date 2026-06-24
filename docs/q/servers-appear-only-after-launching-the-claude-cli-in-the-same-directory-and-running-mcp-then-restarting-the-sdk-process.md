# servers appear only after launching the claude CLI in the same directory and running /mcp, then restarting the SDK process

Known fix landing page for an exact problem query.

Pit ID: claude-agent-sdk-mcp-json-requires-project-settingsource
HTML query page: https://laozhangzzz.github.io/agent-pitbook/q/servers-appear-only-after-launching-the-claude-cli-in-the-same-directory-and-running-mcp-then-restarting-the-sdk-process.html
Full pit HTML: https://laozhangzzz.github.io/agent-pitbook/pits/claude-agent-sdk-mcp-json-requires-project-settingsource.html
Full pit Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/claude-agent-sdk-mcp-json-requires-project-settingsource.md
GitHub known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/8

## Fast Answer

- Problem: the SDK reports no MCP servers even though .mcp.json is in the working directory
- Root cause: The Agent SDK does not auto-load project/user/local settings from disk; it loads them only when settingSources is set.
- Fix first: Pass settingSources including 'project' (and 'user'/'local' as needed) when constructing the SDK query so .mcp.json is read.
- Verify: Inspect mcpServerStatus() / the mcp_servers field on first SDK launch.

## Queries This Answers

- SDK doesnt read from .mcp.json until the CLI is run in the cwd
- SDK doesnt read from .mcp.json until the CLI is run in the cwd fix
- SDK doesnt read from .mcp.json until the CLI is run in the cwd root cause
- Claude Agent SDK does not load .mcp.json unless settingSources includes project
- Claude Agent SDK does not load .mcp.json unless settingSources includes "project" fix
- Claude Agent SDK does not load .mcp.json unless settingSources includes "project" root cause
- how to fix Claude Agent SDK does not load .mcp.json unless settingSources includes project
- the SDK reports no MCP servers even though .mcp.json is in the working directory
- how to fix the SDK reports no MCP servers even though .mcp.json is in the working directory
- the SDK reports no MCP servers even though .mcp.json is in the working directory root cause
- claude-code the SDK reports no MCP servers even though .mcp.json is in the working directory
- claude-code the SDK reports no MCP servers even though .mcp.json is in the working directory fix
- claude-agent-sdk the SDK reports no MCP servers even though .mcp.json is in the working directory
- claude-agent-sdk the SDK reports no MCP servers even though .mcp.json is in the working directory fix
- servers appear only after launching the claude CLI in the same directory and running /mcp, then restarting the SDK process
- how to fix servers appear only after launching the claude CLI in the same directory and running /mcp, then restarting the SDK process
- servers appear only after launching the claude CLI in the same directory and running /mcp, then restarting the SDK process root cause
- claude-code servers appear only after launching the claude CLI in the same directory and running /mcp, then restarting the SDK process
- claude-code servers appear only after launching the claude CLI in the same directory and running /mcp, then restarting the SDK process fix
- claude-agent-sdk servers appear only after launching the claude CLI in the same directory and running /mcp, then restarting the SDK process
- claude-agent-sdk servers appear only after launching the claude CLI in the same directory and running /mcp, then restarting the SDK process fix
- tools wrapping Claude (e.g. Conductor) cannot see project MCP servers
- how to fix tools wrapping Claude (e.g. Conductor) cannot see project MCP servers
- tools wrapping Claude (e.g. Conductor) cannot see project MCP servers root cause

