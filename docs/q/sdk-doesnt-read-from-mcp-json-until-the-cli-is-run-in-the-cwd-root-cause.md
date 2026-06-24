# SDK doesnt read from .mcp.json until the CLI is run in the cwd root cause

Known fix landing page for an exact problem query.

Pit ID: claude-agent-sdk-mcp-json-requires-project-settingsource
HTML query page: https://laozhangzzz.github.io/agent-pitbook/q/sdk-doesnt-read-from-mcp-json-until-the-cli-is-run-in-the-cwd-root-cause.html
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
- claude-code load mcp json unless settingsources includes project
- claude-code load mcp json unless settingsources includes project fix
- settingsources includes project agent sdk load mcp json unless claude-code
- settingsources includes project agent sdk load mcp json unless claude-code fix
- claude agent sdk load settingsources includes project
- claude agent sdk load settingsources includes project fix
- claude agent sdk load claude-code
- claude agent sdk load claude-code fix
- claude-code mcp servers even though json working directory
- claude-code mcp servers even though json working directory fix
- json working directory sdk no mcp servers even though claude-code
- json working directory sdk no mcp servers even though claude-code fix
- sdk no mcp servers json working directory
- sdk no mcp servers json working directory fix
- sdk no mcp servers claude-code
- sdk no mcp servers claude-code fix
- the SDK reports no MCP servers even though .mcp.json is in the working directory
