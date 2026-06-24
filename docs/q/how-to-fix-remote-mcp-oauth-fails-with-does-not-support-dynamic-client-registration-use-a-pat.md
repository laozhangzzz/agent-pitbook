# how to fix Remote MCP OAuth fails with "does not support dynamic client registration"; use a PAT

Known fix landing page for an exact problem query.

Pit ID: mcp-github-remote-oauth-dcr-unsupported-use-pat
HTML query page: https://laozhangzzz.github.io/agent-pitbook/q/how-to-fix-remote-mcp-oauth-fails-with-does-not-support-dynamic-client-registration-use-a-pat.html
Full pit HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-github-remote-oauth-dcr-unsupported-use-pat.html
Full pit Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-github-remote-oauth-dcr-unsupported-use-pat.md
GitHub known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/17

## Fast Answer

- Problem: claude mcp add ... https://api.githubcopilot.com/mcp/ then the connection fails
- Root cause: The client's OAuth flow relies on OAuth 2.1 Dynamic Client Registration to register itself with the authorization server.
- Fix first: Create a fine-grained GitHub Personal Access Token with the scopes you need.
- Verify: Connect after providing the PAT in env.

## Queries This Answers

- Claude Code cannot connect to GitHubs remote MCP server using OAuth authentication PAT via GITHUB_PERSONAL_ACCESS_TOKEN is the confirmed workaround
- Claude Code cannot connect to GitHubs remote MCP server using OAuth authentication (PAT via GITHUB_PERSONAL_ACCESS_TOKEN is the confirmed workaround) fix
- Claude Code cannot connect to GitHubs remote MCP server using OAuth authentication (PAT via GITHUB_PERSONAL_ACCESS_TOKEN is the confirmed workaround) root cause
- Remote MCP OAuth fails with "does not support dynamic client registration"; use a PAT
- Remote MCP OAuth fails with "does not support dynamic client registration"; use a PAT fix
- Remote MCP OAuth fails with "does not support dynamic client registration"; use a PAT root cause
- how to fix Remote MCP OAuth fails with "does not support dynamic client registration"; use a PAT
- does not support dynamic client registration
- does not support dynamic client registration fix
- claude-code does not support dynamic client registration
- claude-code does not support dynamic client registration fix
- github-mcp-server does not support dynamic client registration
- github-mcp-server does not support dynamic client registration fix
- GITHUB_PERSONAL_ACCESS_TOKEN
- GITHUB_PERSONAL_ACCESS_TOKEN fix
- claude-code GITHUB_PERSONAL_ACCESS_TOKEN
- claude-code GITHUB_PERSONAL_ACCESS_TOKEN fix
- github-mcp-server GITHUB_PERSONAL_ACCESS_TOKEN
- github-mcp-server GITHUB_PERSONAL_ACCESS_TOKEN fix
- claude mcp add ... then the connection fails
- how to fix claude mcp add ... then the connection fails
- claude mcp add ... then the connection fails root cause
- claude-code claude mcp add ... then the connection fails
- claude-code claude mcp add ... then the connection fails fix

