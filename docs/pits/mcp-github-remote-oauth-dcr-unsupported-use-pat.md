# Remote MCP OAuth fails with "does not support dynamic client registration"; use a PAT

Pit ID: mcp-github-remote-oauth-dcr-unsupported-use-pat
Status: verified
Confidence: high
Updated: 2026-06-21
Canonical source: https://github.com/laozhangzzz/agent-pitbook/blob/main/pits/mcp/mcp-github-remote-oauth-dcr-unsupported-use-pat.md
GitHub known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/17

## Summary

Connecting Claude Code to GitHub's remote MCP server (api.githubcopilot.com/mcp/) via OAuth fails with 'Incompatible auth server: does not support dynamic client registration' because the endpoint lacks OAuth Dynamic Client Registration. Use a Personal Access Token via GITHUB_PERSONAL_ACCESS_TOKEN instead of the OAuth flow.

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

## Common Search Queries

- mcp-github-remote-oauth-dcr-unsupported-use-pat
- mcp github remote oauth dcr unsupported use pat
- Remote MCP OAuth fails with "does not support dynamic client registration"; use a PAT
- Remote MCP OAuth fails with "does not support dynamic client registration"; use a PAT fix
- Remote MCP OAuth fails with "does not support dynamic client registration"; use a PAT root cause
- oauth
- dynamic-client-registration
- github
- claude-code
- remote-mcp
- github-mcp-server
- claude mcp add ... then the connection fails
- Error: Incompatible auth server: does not support dynamic client registration
- the same server config works in VS Code, which authenticates differently
- the UI shows an 'Authenticate' (OAuth) button that never completes
- The clients OAuth flow relies on OAuth 2.1 Dynamic Client Registration to register itself with the authorization server
- GitHubs remote MCP endpoint does not support DCR, so registration fails and the OAuth handshake cannot proceed
- The endpoint expects token-based auth (a PAT) instead
- Retrying the OAuth flow against an endpoint that lacks dynamic client registration
- Following docs that show the OAuth connect path when only PAT auth works for that endpoint
- Use the local/stdio GitHub MCP server with a PAT instead of the remote OAuth endpoint
- anthropics/claude-code issue 3433: Claude Code cannot connect to GitHubs remote MCP server using OAuth authentication PAT via GITHUB_PERSONAL_ACCESS_TOKEN is the confirmed workaround
- Claude Code cannot connect to GitHubs remote MCP server using OAuth authentication PAT via GITHUB_PERSONAL_ACCESS_TOKEN is the confirmed workaround
- Claude Code cannot connect to GitHubs remote MCP server using OAuth authentication (PAT via GITHUB_PERSONAL_ACCESS_TOKEN is the confirmed workaround) fix

## Affected Tools

- claude-code
- github-mcp-server

## Tags

- mcp
- oauth
- dynamic-client-registration
- github
- claude-code
- remote-mcp
- pat

## Symptoms

- claude mcp add ... https://api.githubcopilot.com/mcp/ then the connection fails
- Error: Incompatible auth server: does not support dynamic client registration
- the same server config works in VS Code, which authenticates differently
- the UI shows an 'Authenticate' (OAuth) button that never completes

## Environment

- agent: claude-code
- constraints: remote MCP over HTTP with OAuth, auth server lacks Dynamic Client Registration

## Root Cause

- The client's OAuth flow relies on OAuth 2.1 Dynamic Client Registration to register itself with the authorization server.
- GitHub's remote MCP endpoint does not support DCR, so registration fails and the OAuth handshake cannot proceed.
- The endpoint expects token-based auth (a PAT) instead.

## Fix

1. Create a fine-grained GitHub Personal Access Token with the scopes you need.
2. Configure the GitHub MCP server to read the token from the environment rather than OAuth.

Rationale: The plugin/server reads GITHUB_PERSONAL_ACCESS_TOKEN from env; setting it is the actual fix.
3. Do not use the OAuth 'Authenticate' button for this endpoint until DCR is supported.

## Verification

- Connect after providing the PAT in env. Expected: The GitHub MCP server connects and lists tools; no 'does not support dynamic client registration' error.

## Sources

- anthropics/claude-code issue 3433: Claude Code cannot connect to GitHub's remote MCP server using OAuth authentication (PAT via GITHUB_PERSONAL_ACCESS_TOKEN is the confirmed workaround) (issue): https://github.com/anthropics/claude-code/issues/3433

## Workarounds

- Use the local/stdio GitHub MCP server with a PAT instead of the remote OAuth endpoint.

## Anti-patterns

- Retrying the OAuth flow against an endpoint that lacks dynamic client registration.
- Following docs that show the OAuth connect path when only PAT auth works for that endpoint.

