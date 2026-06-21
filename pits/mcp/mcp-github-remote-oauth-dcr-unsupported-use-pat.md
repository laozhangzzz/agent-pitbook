---
id: mcp-github-remote-oauth-dcr-unsupported-use-pat
title: Remote MCP OAuth fails with "does not support dynamic client registration"; use a PAT
status: verified
confidence: high
created_at: 2026-06-21
updated_at: 2026-06-21
last_verified: 2026-06-21
tags: [mcp, oauth, dynamic-client-registration, github, claude-code, remote-mcp, pat]
affected_tools: [claude-code, github-mcp-server]
---

# Remote MCP OAuth fails with "does not support dynamic client registration"; use a PAT

## Summary

Connecting Claude Code to GitHub's remote MCP server (`https://api.githubcopilot.com/mcp/`) via OAuth fails with `Error: Incompatible auth server: does not support dynamic client registration`. The endpoint does not implement OAuth Dynamic Client Registration, which the client's OAuth flow expects. Use a Personal Access Token via `GITHUB_PERSONAL_ACCESS_TOKEN` instead of the OAuth "Authenticate" button.

## Symptoms

- `claude mcp add ... https://api.githubcopilot.com/mcp/` then the connection fails.
- Error: `Incompatible auth server: does not support dynamic client registration`.
- The same server config works in VS Code (which authenticates differently).
- The UI shows an "Authenticate" (OAuth) button that never completes.

## Root Cause

The client's OAuth flow relies on OAuth 2.1 Dynamic Client Registration (DCR) to register itself with the authorization server. GitHub's remote MCP endpoint does not support DCR, so the registration step fails and the OAuth handshake cannot proceed. The server expects token-based auth (a PAT) instead.

## Fix

1. Create a fine-grained GitHub Personal Access Token with the scopes you need.
2. Configure the GitHub MCP server to read it from the environment rather than using OAuth, e.g. provide `GITHUB_PERSONAL_ACCESS_TOKEN` in the server's `env`.
3. Do not use the OAuth "Authenticate" button for this endpoint; the PAT is the working auth path until DCR is supported.

## Verification

With the PAT set, the GitHub MCP server connects and lists tools, and no `does not support dynamic client registration` error appears.

## Anti-Patterns

- Retrying the OAuth flow against an endpoint that does not support dynamic client registration.
- Following docs that show the OAuth connect path when only PAT auth works for that endpoint.

<!-- pit-record
{
  "id": "mcp-github-remote-oauth-dcr-unsupported-use-pat",
  "title": "Remote MCP OAuth fails with \"does not support dynamic client registration\"; use a PAT",
  "summary": "Connecting Claude Code to GitHub's remote MCP server (api.githubcopilot.com/mcp/) via OAuth fails with 'Incompatible auth server: does not support dynamic client registration' because the endpoint lacks OAuth Dynamic Client Registration. Use a Personal Access Token via GITHUB_PERSONAL_ACCESS_TOKEN instead of the OAuth flow.",
  "status": "verified",
  "confidence": "high",
  "created_at": "2026-06-21",
  "updated_at": "2026-06-21",
  "last_verified": "2026-06-21",
  "tags": ["mcp", "oauth", "dynamic-client-registration", "github", "claude-code", "remote-mcp", "pat"],
  "affected_tools": ["claude-code", "github-mcp-server"],
  "symptoms": [
    "claude mcp add ... https://api.githubcopilot.com/mcp/ then the connection fails",
    "Error: Incompatible auth server: does not support dynamic client registration",
    "the same server config works in VS Code, which authenticates differently",
    "the UI shows an 'Authenticate' (OAuth) button that never completes"
  ],
  "environment": {
    "agent": "claude-code",
    "constraints": ["remote MCP over HTTP with OAuth", "auth server lacks Dynamic Client Registration"]
  },
  "root_cause": [
    "The client's OAuth flow relies on OAuth 2.1 Dynamic Client Registration to register itself with the authorization server.",
    "GitHub's remote MCP endpoint does not support DCR, so registration fails and the OAuth handshake cannot proceed.",
    "The endpoint expects token-based auth (a PAT) instead."
  ],
  "fix": [
    {
      "step": "Create a fine-grained GitHub Personal Access Token with the scopes you need."
    },
    {
      "step": "Configure the GitHub MCP server to read the token from the environment rather than OAuth.",
      "rationale": "The plugin/server reads GITHUB_PERSONAL_ACCESS_TOKEN from env; setting it is the actual fix."
    },
    {
      "step": "Do not use the OAuth 'Authenticate' button for this endpoint until DCR is supported."
    }
  ],
  "verification": [
    {
      "method": "Connect after providing the PAT in env.",
      "expected": "The GitHub MCP server connects and lists tools; no 'does not support dynamic client registration' error."
    }
  ],
  "workarounds": [
    "Use the local/stdio GitHub MCP server with a PAT instead of the remote OAuth endpoint."
  ],
  "anti_patterns": [
    "Retrying the OAuth flow against an endpoint that lacks dynamic client registration.",
    "Following docs that show the OAuth connect path when only PAT auth works for that endpoint."
  ],
  "source_links": [
    {
      "title": "anthropics/claude-code issue 3433: Claude Code cannot connect to GitHub's remote MCP server using OAuth authentication (PAT via GITHUB_PERSONAL_ACCESS_TOKEN is the confirmed workaround)",
      "type": "issue",
      "url": "https://github.com/anthropics/claude-code/issues/3433",
      "accessed_at": "2026-06-21"
    }
  ],
  "related": [],
  "safety": {
    "external_text_trusted": false,
    "requires_confirmation": true,
    "notes": ["A PAT is a secret; store it in env/secret storage, never commit it. Endpoint auth support may change over time."]
  }
}
-->
