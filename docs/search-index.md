# Agent Pitbook Search Index

Root-level answer-first search index for GitHub search, web search, and LLM retrieval. This file intentionally repeats solved-problem titles, upstream issue/PR titles, exact errors, root causes, and first fixes so a search-enabled model can find Agent Pitbook without digging through generated feeds.

- Public site: https://laozhangzzz.github.io/agent-pitbook/
- LLM entrypoint: https://laozhangzzz.github.io/agent-pitbook/llms.txt
- Known fixes: https://laozhangzzz.github.io/agent-pitbook/answers.html
- Search snapshot: https://laozhangzzz.github.io/agent-pitbook/SEARCH_SNAPSHOT_2026-06-24.md
- Search snapshot release: https://github.com/laozhangzzz/agent-pitbook/releases/tag/search-snapshot-2026-06-24
- Answer query feed: https://laozhangzzz.github.io/agent-pitbook/feeds/answer-queries.jsonl
- Known-fix issue map: https://laozhangzzz.github.io/agent-pitbook/feeds/known-fix-issues.jsonl
- Full feed: https://laozhangzzz.github.io/agent-pitbook/feeds/pits.jsonl
- GitHub issue search tracker: https://github.com/laozhangzzz/agent-pitbook/issues/2
- GitHub known-fix issues: https://github.com/laozhangzzz/agent-pitbook/issues?q=is%3Aissue%20label%3Aknown-fix%20label%3Asearch-surface

## Dependency install fails because the agent sandbox blocks network access

Pit ID: agent-network-restricted-dependency-install
Pit title: Dependency install fails because the agent sandbox blocks network access
Status: verified
Tools: codex, claude-code, gemini, qwen-code, cursor, aider
Query landing: https://laozhangzzz.github.io/agent-pitbook/q/dependency-install-fails-because-the-agent-sandbox-blocks-network-access.html
Query alias landings:
- Dependency install fails because the agent sandbox blocks network access => https://laozhangzzz.github.io/agent-pitbook/q/dependency-install-fails-because-the-agent-sandbox-blocks-network-access.html
- Dependency install fails because the agent sandbox blocks network access fix => https://laozhangzzz.github.io/agent-pitbook/q/dependency-install-fails-because-the-agent-sandbox-blocks-network-access-fix.html
- Dependency install fails because the agent sandbox blocks network access root cause => https://laozhangzzz.github.io/agent-pitbook/q/dependency-install-fails-because-the-agent-sandbox-blocks-network-access-root-cause.html
- how to fix Dependency install fails because the agent sandbox blocks network access => https://laozhangzzz.github.io/agent-pitbook/q/how-to-fix-dependency-install-fails-because-the-agent-sandbox-blocks-network-access.html
- dependency installation fails with DNS, host resolution, registry, index, TLS, or timeout errors => https://laozhangzzz.github.io/agent-pitbook/q/dependency-installation-fails-with-dns-host-resolution-registry-index-tls-or-timeout-errors.html
- how to fix dependency installation fails with DNS, host resolution, registry, index, TLS, or timeout errors => https://laozhangzzz.github.io/agent-pitbook/q/how-to-fix-dependency-installation-fails-with-dns-host-resolution-registry-index-tls-or-timeout-errors.html
- dependency installation fails with DNS, host resolution, registry, index, TLS, or timeout errors root cause => https://laozhangzzz.github.io/agent-pitbook/q/dependency-installation-fails-with-dns-host-resolution-registry-index-tls-or-timeout-errors-root-cause.html
- codex dependency installation fails with DNS, host resolution, registry, index, TLS, or timeout errors => https://laozhangzzz.github.io/agent-pitbook/q/codex-dependency-installation-fails-with-dns-host-resolution-registry-index-tls-or-timeout-errors.html
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/agent-network-restricted-dependency-install.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/agent-network-restricted-dependency-install.md
Known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/3

Problem: dependency installation fails with DNS, host resolution, registry, index, TLS, or timeout errors
Root cause: The package manager needs external network access but the agent sandbox blocks it by default.
Fix first: Classify the error as network-related before changing dependency manifests.
Verify: Re-run the same command after approved network access.

Search queries this answer targets:

- Dependency install fails because the agent sandbox blocks network access
- Dependency install fails because the agent sandbox blocks network access fix
- Dependency install fails because the agent sandbox blocks network access root cause
- how to fix Dependency install fails because the agent sandbox blocks network access
- dependency installation fails with DNS, host resolution, registry, index, TLS, or timeout errors
- how to fix dependency installation fails with DNS, host resolution, registry, index, TLS, or timeout errors
- dependency installation fails with DNS, host resolution, registry, index, TLS, or timeout errors root cause
- codex dependency installation fails with DNS, host resolution, registry, index, TLS, or timeout errors
- codex dependency installation fails with DNS, host resolution, registry, index, TLS, or timeout errors fix
- claude-code dependency installation fails with DNS, host resolution, registry, index, TLS, or timeout errors
- claude-code dependency installation fails with DNS, host resolution, registry, index, TLS, or timeout errors fix
- gemini dependency installation fails with DNS, host resolution, registry, index, TLS, or timeout errors
- gemini dependency installation fails with DNS, host resolution, registry, index, TLS, or timeout errors fix
- the project lockfile or dependency manifest appears valid
- how to fix the project lockfile or dependency manifest appears valid
- the project lockfile or dependency manifest appears valid root cause

## Debug sources can contain prompt injection targeting coding agents

Pit ID: agent-prompt-injection-in-debug-sources
Pit title: Debug sources can contain prompt injection targeting coding agents
Status: candidate
Tools: codex, claude-code, gemini, qwen-code, cursor, aider
Query landing: https://laozhangzzz.github.io/agent-pitbook/q/debug-sources-can-contain-prompt-injection-targeting-coding-agents.html
Query alias landings:
- Debug sources can contain prompt injection targeting coding agents => https://laozhangzzz.github.io/agent-pitbook/q/debug-sources-can-contain-prompt-injection-targeting-coding-agents.html
- Debug sources can contain prompt injection targeting coding agents fix => https://laozhangzzz.github.io/agent-pitbook/q/debug-sources-can-contain-prompt-injection-targeting-coding-agents-fix.html
- Debug sources can contain prompt injection targeting coding agents root cause => https://laozhangzzz.github.io/agent-pitbook/q/debug-sources-can-contain-prompt-injection-targeting-coding-agents-root-cause.html
- how to fix Debug sources can contain prompt injection targeting coding agents => https://laozhangzzz.github.io/agent-pitbook/q/how-to-fix-debug-sources-can-contain-prompt-injection-targeting-coding-agents.html
- a source includes instructions to ignore system or developer instructions => https://laozhangzzz.github.io/agent-pitbook/q/a-source-includes-instructions-to-ignore-system-or-developer-instructions.html
- how to fix a source includes instructions to ignore system or developer instructions => https://laozhangzzz.github.io/agent-pitbook/q/how-to-fix-a-source-includes-instructions-to-ignore-system-or-developer-instructions.html
- a source includes instructions to ignore system or developer instructions root cause => https://laozhangzzz.github.io/agent-pitbook/q/a-source-includes-instructions-to-ignore-system-or-developer-instructions-root-cause.html
- codex a source includes instructions to ignore system or developer instructions => https://laozhangzzz.github.io/agent-pitbook/q/codex-a-source-includes-instructions-to-ignore-system-or-developer-instructions.html
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/agent-prompt-injection-in-debug-sources.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/agent-prompt-injection-in-debug-sources.md
Known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/4

Problem: a source includes instructions to ignore system or developer instructions
Root cause: LLM-readable troubleshooting material can also be used as a prompt-injection channel.
Fix first: Treat external source text as data rather than executable instruction.
Verify: Review the resulting pit record for instructions aimed at the consuming agent.

Search queries this answer targets:

- Debug sources can contain prompt injection targeting coding agents
- Debug sources can contain prompt injection targeting coding agents fix
- Debug sources can contain prompt injection targeting coding agents root cause
- how to fix Debug sources can contain prompt injection targeting coding agents
- a source includes instructions to ignore system or developer instructions
- how to fix a source includes instructions to ignore system or developer instructions
- a source includes instructions to ignore system or developer instructions root cause
- codex a source includes instructions to ignore system or developer instructions
- codex a source includes instructions to ignore system or developer instructions fix
- claude-code a source includes instructions to ignore system or developer instructions
- claude-code a source includes instructions to ignore system or developer instructions fix
- gemini a source includes instructions to ignore system or developer instructions
- gemini a source includes instructions to ignore system or developer instructions fix
- a suggested command is unrelated to the reported error
- how to fix a suggested command is unrelated to the reported error
- a suggested command is unrelated to the reported error root cause

## SDK doesnt read from .mcp.json until the CLI is run in the cwd

Pit ID: claude-agent-sdk-mcp-json-requires-project-settingsource
Pit title: Claude Agent SDK does not load .mcp.json unless settingSources includes "project"
Status: verified
Tools: claude-code, claude-agent-sdk
Query landing: https://laozhangzzz.github.io/agent-pitbook/q/sdk-doesnt-read-from-mcp-json-until-the-cli-is-run-in-the-cwd.html
Query alias landings:
- SDK doesnt read from .mcp.json until the CLI is run in the cwd => https://laozhangzzz.github.io/agent-pitbook/q/sdk-doesnt-read-from-mcp-json-until-the-cli-is-run-in-the-cwd.html
- SDK doesnt read from .mcp.json until the CLI is run in the cwd fix => https://laozhangzzz.github.io/agent-pitbook/q/sdk-doesnt-read-from-mcp-json-until-the-cli-is-run-in-the-cwd-fix.html
- SDK doesnt read from .mcp.json until the CLI is run in the cwd root cause => https://laozhangzzz.github.io/agent-pitbook/q/sdk-doesnt-read-from-mcp-json-until-the-cli-is-run-in-the-cwd-root-cause.html
- Claude Agent SDK does not load .mcp.json unless settingSources includes project => https://laozhangzzz.github.io/agent-pitbook/q/claude-agent-sdk-does-not-load-mcp-json-unless-settingsources-includes-project.html
- Claude Agent SDK does not load .mcp.json unless settingSources includes "project" fix => https://laozhangzzz.github.io/agent-pitbook/q/claude-agent-sdk-does-not-load-mcp-json-unless-settingsources-includes-project-fix.html
- Claude Agent SDK does not load .mcp.json unless settingSources includes "project" root cause => https://laozhangzzz.github.io/agent-pitbook/q/claude-agent-sdk-does-not-load-mcp-json-unless-settingsources-includes-project-root-cause.html
- how to fix Claude Agent SDK does not load .mcp.json unless settingSources includes project => https://laozhangzzz.github.io/agent-pitbook/q/how-to-fix-claude-agent-sdk-does-not-load-mcp-json-unless-settingsources-includes-project.html
- the SDK reports no MCP servers even though .mcp.json is in the working directory => https://laozhangzzz.github.io/agent-pitbook/q/the-sdk-reports-no-mcp-servers-even-though-mcp-json-is-in-the-working-directory.html
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/claude-agent-sdk-mcp-json-requires-project-settingsource.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/claude-agent-sdk-mcp-json-requires-project-settingsource.md
Known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/8

Problem: the SDK reports no MCP servers even though .mcp.json is in the working directory
Root cause: The Agent SDK does not auto-load project/user/local settings from disk; it loads them only when settingSources is set.
Fix first: Pass settingSources including 'project' (and 'user'/'local' as needed) when constructing the SDK query so .mcp.json is read.
Verify: Inspect mcpServerStatus() / the mcp_servers field on first SDK launch.

Search queries this answer targets:

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

## Singleton McpServer causes Already connected to a transport

Pit ID: claude-code-mcp-chrome-bridge-single-transport-deadlock
Pit title: Claude Code chrome-bridge MCP gets stuck after one transport connects
Status: verified
Tools: claude-code, mcp-chrome-bridge
Query landing: https://laozhangzzz.github.io/agent-pitbook/q/singleton-mcpserver-causes-already-connected-to-a-transport.html
Query alias landings:
- Singleton McpServer causes Already connected to a transport => https://laozhangzzz.github.io/agent-pitbook/q/singleton-mcpserver-causes-already-connected-to-a-transport.html
- Singleton McpServer causes Already connected to a transport fix => https://laozhangzzz.github.io/agent-pitbook/q/singleton-mcpserver-causes-already-connected-to-a-transport-fix.html
- Singleton McpServer causes Already connected to a transport root cause => https://laozhangzzz.github.io/agent-pitbook/q/singleton-mcpserver-causes-already-connected-to-a-transport-root-cause.html
- replace getMcpServer singleton with factory => https://laozhangzzz.github.io/agent-pitbook/q/replace-getmcpserver-singleton-with-factory.html
- replace getMcpServer singleton with factory fix => https://laozhangzzz.github.io/agent-pitbook/q/replace-getmcpserver-singleton-with-factory-fix.html
- replace getMcpServer singleton with factory root cause => https://laozhangzzz.github.io/agent-pitbook/q/replace-getmcpserver-singleton-with-factory-root-cause.html
- MCP Chrome Bridge returns 500 due to ERR_HTTP_HEADERS_SENT => https://laozhangzzz.github.io/agent-pitbook/q/mcp-chrome-bridge-returns-500-due-to-err-http-headers-sent.html
- MCP Chrome Bridge returns 500 due to ERR_HTTP_HEADERS_SENT fix => https://laozhangzzz.github.io/agent-pitbook/q/mcp-chrome-bridge-returns-500-due-to-err-http-headers-sent-fix.html
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/claude-code-mcp-chrome-bridge-single-transport-deadlock.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/claude-code-mcp-chrome-bridge-single-transport-deadlock.md
Known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/5

Problem: Claude Code cannot reconnect to the chrome-bridge MCP server
Root cause: The bridge can reuse a singleton MCP Server instance across HTTP/SSE connections.
Fix first: Do not use curl /mcp as a health check.
Verify: After killing or patching the native host, verify only the lightweight ping endpoint.

Search queries this answer targets:

- Singleton McpServer causes Already connected to a transport
- Singleton McpServer causes Already connected to a transport fix
- Singleton McpServer causes Already connected to a transport root cause
- replace getMcpServer singleton with factory
- replace getMcpServer singleton with factory fix
- replace getMcpServer singleton with factory root cause
- MCP Chrome Bridge returns 500 due to ERR_HTTP_HEADERS_SENT
- MCP Chrome Bridge returns 500 due to ERR_HTTP_HEADERS_SENT fix
- MCP Chrome Bridge returns 500 due to ERR_HTTP_HEADERS_SENT root cause
- service can only connect once after Chrome starts
- service can only connect once after Chrome starts fix
- service can only connect once after Chrome starts root cause
- Claude Code chrome-bridge MCP gets stuck after one transport connects
- Claude Code chrome-bridge MCP gets stuck after one transport connects fix
- Claude Code chrome-bridge MCP gets stuck after one transport connects root cause
- how to fix Claude Code chrome-bridge MCP gets stuck after one transport connects

## Claude Desktop MCP servers fail with Protocol instance reuse error (Already connected to a transport); Anthropic confirms fix in a later Desktop release

Pit ID: claude-desktop-mcp-protocol-instance-reuse-already-connected
Pit title: Claude Desktop MCP error: Already connected to a transport (Protocol instance reuse)
Status: verified
Tools: claude-desktop
Query landing: https://laozhangzzz.github.io/agent-pitbook/q/claude-desktop-mcp-servers-fail-with-protocol-instance-reuse-error-already-connected-to-a-transport-anthropic-confirms-f.html
Query alias landings:
- Claude Desktop MCP servers fail with Protocol instance reuse error (Already connected to a transport); Anthropic confirms fix in a later Desktop release => https://laozhangzzz.github.io/agent-pitbook/q/claude-desktop-mcp-servers-fail-with-protocol-instance-reuse-error-already-connected-to-a-transport-anthropic-confirms-f.html
- Claude Desktop MCP servers fail with Protocol instance reuse error (Already connected to a transport); Anthropic confirms fix in a later Desktop release fix => https://laozhangzzz.github.io/agent-pitbook/q/claude-desktop-mcp-servers-fail-with-protocol-instance-reuse-error-already-connected-to-a-transport-anthropic-confirms-f-claude-desktop-mcp-protocol-instance-reuse-already-connected.html
- Claude Desktop MCP servers fail with Protocol instance reuse error (Already connected to a transport); Anthropic confirms fix in a later Desktop release root cause => https://laozhangzzz.github.io/agent-pitbook/q/claude-desktop-mcp-servers-fail-with-protocol-instance-reuse-error-already-connected-to-a-transport-anthropic-confirms-f-claude-desktop-mcp-protocol-instance-reuse-already-connected-2.html
- Claude Desktop MCP error: Already connected to a transport Protocol instance reuse => https://laozhangzzz.github.io/agent-pitbook/q/claude-desktop-mcp-error-already-connected-to-a-transport-protocol-instance-reuse.html
- Claude Desktop MCP error: Already connected to a transport (Protocol instance reuse) fix => https://laozhangzzz.github.io/agent-pitbook/q/claude-desktop-mcp-error-already-connected-to-a-transport-protocol-instance-reuse-fix.html
- Claude Desktop MCP error: Already connected to a transport (Protocol instance reuse) root cause => https://laozhangzzz.github.io/agent-pitbook/q/claude-desktop-mcp-error-already-connected-to-a-transport-protocol-instance-reuse-root-cause.html
- how to fix Claude Desktop MCP error: Already connected to a transport Protocol instance reuse => https://laozhangzzz.github.io/agent-pitbook/q/how-to-fix-claude-desktop-mcp-error-already-connected-to-a-transport-protocol-instance-reuse.html
- startup toasts: Could not connect to MCP server <name> => https://laozhangzzz.github.io/agent-pitbook/q/startup-toasts-could-not-connect-to-mcp-server-name.html
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/claude-desktop-mcp-protocol-instance-reuse-already-connected.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/claude-desktop-mcp-protocol-instance-reuse-already-connected.md
Known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/9

Problem: startup toasts: Could not connect to MCP server <name>
Root cause: The MCP SDK connection model is one transport per Protocol/server instance.
Fix first: Upgrade Claude Desktop to a build where this is fixed (resolved in a later release after 1.1.3918).
Verify: Upgrade Claude Desktop and relaunch.

Search queries this answer targets:

- Claude Desktop MCP servers fail with Protocol instance reuse error (Already connected to a transport); Anthropic confirms fix in a later Desktop release
- Claude Desktop MCP servers fail with Protocol instance reuse error (Already connected to a transport); Anthropic confirms fix in a later Desktop release fix
- Claude Desktop MCP servers fail with Protocol instance reuse error (Already connected to a transport); Anthropic confirms fix in a later Desktop release root cause
- Claude Desktop MCP error: Already connected to a transport Protocol instance reuse
- Claude Desktop MCP error: Already connected to a transport (Protocol instance reuse) fix
- Claude Desktop MCP error: Already connected to a transport (Protocol instance reuse) root cause
- how to fix Claude Desktop MCP error: Already connected to a transport Protocol instance reuse
- startup toasts: Could not connect to MCP server <name>
- how to fix startup toasts: Could not connect to MCP server <name>
- startup toasts: Could not connect to MCP server <name> root cause
- claude-desktop startup toasts: Could not connect to MCP server <name>
- claude-desktop startup toasts: Could not connect to MCP server <name> fix
- log shows Error: Already connected to a transport. Call close() before connecting to a new transport, or use a separate Protocol instance per connection
- how to fix log shows Error: Already connected to a transport. Call close() before connecting to a new transport, or use a separate Protocol instance per connection
- log shows Error: Already connected to a transport. Call close() before connecting to a new transport, or use a separate Protocol instance per connection. root cause
- claude-desktop log shows Error: Already connected to a transport. Call close() before connecting to a new transport, or use a separate Protocol instance per connection

## dynamic resource not working in Claude desktop

Pit ID: claude-desktop-no-dynamic-resource-templates
Pit title: Claude Desktop does not list dynamic MCP resource templates (only static resources)
Status: verified
Tools: claude-desktop, mcp-server
Query landing: https://laozhangzzz.github.io/agent-pitbook/q/dynamic-resource-not-working-in-claude-desktop.html
Query alias landings:
- dynamic resource not working in Claude desktop => https://laozhangzzz.github.io/agent-pitbook/q/dynamic-resource-not-working-in-claude-desktop.html
- dynamic resource not working in Claude desktop fix => https://laozhangzzz.github.io/agent-pitbook/q/dynamic-resource-not-working-in-claude-desktop-fix.html
- dynamic resource not working in Claude desktop root cause => https://laozhangzzz.github.io/agent-pitbook/q/dynamic-resource-not-working-in-claude-desktop-root-cause.html
- Claude Desktop does not list dynamic MCP resource templates only static resources => https://laozhangzzz.github.io/agent-pitbook/q/claude-desktop-does-not-list-dynamic-mcp-resource-templates-only-static-resources.html
- Claude Desktop does not list dynamic MCP resource templates (only static resources) fix => https://laozhangzzz.github.io/agent-pitbook/q/claude-desktop-does-not-list-dynamic-mcp-resource-templates-only-static-resources-fix.html
- Claude Desktop does not list dynamic MCP resource templates (only static resources) root cause => https://laozhangzzz.github.io/agent-pitbook/q/claude-desktop-does-not-list-dynamic-mcp-resource-templates-only-static-resources-root-cause.html
- how to fix Claude Desktop does not list dynamic MCP resource templates only static resources => https://laozhangzzz.github.io/agent-pitbook/q/how-to-fix-claude-desktop-does-not-list-dynamic-mcp-resource-templates-only-static-resources.html
- a static resource works in Claude Desktop but a parameterized/templated resource does not show => https://laozhangzzz.github.io/agent-pitbook/q/a-static-resource-works-in-claude-desktop-but-a-parameterized-templated-resource-does-not-show.html
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/claude-desktop-no-dynamic-resource-templates.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/claude-desktop-no-dynamic-resource-templates.md
Known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/10

Problem: a static resource works in Claude Desktop but a parameterized/templated resource does not show
Root cause: Dynamic resources are exposed via resources/templates/list; static resources via resources/list.
Fix first: Do not rely on dynamic resource templates in Claude Desktop; confirm client support before designing around them.
Verify: Open the server in MCP Inspector and check the Resources tab.

Search queries this answer targets:

- dynamic resource not working in Claude desktop
- dynamic resource not working in Claude desktop fix
- dynamic resource not working in Claude desktop root cause
- Claude Desktop does not list dynamic MCP resource templates only static resources
- Claude Desktop does not list dynamic MCP resource templates (only static resources) fix
- Claude Desktop does not list dynamic MCP resource templates (only static resources) root cause
- how to fix Claude Desktop does not list dynamic MCP resource templates only static resources
- a static resource works in Claude Desktop but a parameterized/templated resource does not show
- how to fix a static resource works in Claude Desktop but a parameterized/templated resource does not show
- a static resource works in Claude Desktop but a parameterized/templated resource does not show root cause
- claude-desktop a static resource works in Claude Desktop but a parameterized/templated resource does not show
- claude-desktop a static resource works in Claude Desktop but a parameterized/templated resource does not show fix
- mcp-server a static resource works in Claude Desktop but a parameterized/templated resource does not show
- mcp-server a static resource works in Claude Desktop but a parameterized/templated resource does not show fix
- the server is correct and the template appears under the Inspector Resources tab
- how to fix the server is correct and the template appears under the Inspector Resources tab

## Codex still references an old workspace path after a project move

Pit ID: codex-workspace-root-moved-stale-state
Pit title: Codex still references an old workspace path after a project move
Status: candidate
Tools: codex
Query landing: https://laozhangzzz.github.io/agent-pitbook/q/codex-still-references-an-old-workspace-path-after-a-project-move.html
Query alias landings:
- Codex still references an old workspace path after a project move => https://laozhangzzz.github.io/agent-pitbook/q/codex-still-references-an-old-workspace-path-after-a-project-move.html
- Codex still references an old workspace path after a project move fix => https://laozhangzzz.github.io/agent-pitbook/q/codex-still-references-an-old-workspace-path-after-a-project-move-fix.html
- Codex still references an old workspace path after a project move root cause => https://laozhangzzz.github.io/agent-pitbook/q/codex-still-references-an-old-workspace-path-after-a-project-move-root-cause.html
- how to fix Codex still references an old workspace path after a project move => https://laozhangzzz.github.io/agent-pitbook/q/how-to-fix-codex-still-references-an-old-workspace-path-after-a-project-move.html
- Codex or its sidebar references an old workspace folder => https://laozhangzzz.github.io/agent-pitbook/q/codex-or-its-sidebar-references-an-old-workspace-folder.html
- how to fix Codex or its sidebar references an old workspace folder => https://laozhangzzz.github.io/agent-pitbook/q/how-to-fix-codex-or-its-sidebar-references-an-old-workspace-folder.html
- Codex or its sidebar references an old workspace folder root cause => https://laozhangzzz.github.io/agent-pitbook/q/codex-or-its-sidebar-references-an-old-workspace-folder-root-cause.html
- the shell current directory points to the new workspace => https://laozhangzzz.github.io/agent-pitbook/q/the-shell-current-directory-points-to-the-new-workspace.html
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/codex-workspace-root-moved-stale-state.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/codex-workspace-root-moved-stale-state.md
Known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/6

Problem: Codex or its sidebar references an old workspace folder
Root cause: The desktop app persists workspace roots separately from the shell current directory, and those saved roots may not update when a folder is moved.
Fix first: Use the app's normal folder switching or reopen-workspace flow first.
Verify: Start a fresh Codex session after switching or repairing the workspace.

Search queries this answer targets:

- Codex still references an old workspace path after a project move
- Codex still references an old workspace path after a project move fix
- Codex still references an old workspace path after a project move root cause
- how to fix Codex still references an old workspace path after a project move
- Codex or its sidebar references an old workspace folder
- how to fix Codex or its sidebar references an old workspace folder
- Codex or its sidebar references an old workspace folder root cause
- the shell current directory points to the new workspace
- how to fix the shell current directory points to the new workspace
- the shell current directory points to the new workspace root cause
- codex the shell current directory points to the new workspace
- codex the shell current directory points to the new workspace fix
- file links or searches use the previous path
- how to fix file links or searches use the previous path
- file links or searches use the previous path root cause
- codex file links or searches use the previous path

## Docker port is published but localhost refuses the connection

Pit ID: docker-published-port-localhost-refused
Pit title: Docker port is published but localhost refuses the connection
Status: verified
Tools: codex, claude-code, gemini, qwen-code, cursor, aider
Query landing: https://laozhangzzz.github.io/agent-pitbook/q/docker-port-is-published-but-localhost-refuses-the-connection.html
Query alias landings:
- Docker port is published but localhost refuses the connection => https://laozhangzzz.github.io/agent-pitbook/q/docker-port-is-published-but-localhost-refuses-the-connection.html
- Docker port is published but localhost refuses the connection fix => https://laozhangzzz.github.io/agent-pitbook/q/docker-port-is-published-but-localhost-refuses-the-connection-fix.html
- Docker port is published but localhost refuses the connection root cause => https://laozhangzzz.github.io/agent-pitbook/q/docker-port-is-published-but-localhost-refuses-the-connection-root-cause.html
- how to fix Docker port is published but localhost refuses the connection => https://laozhangzzz.github.io/agent-pitbook/q/how-to-fix-docker-port-is-published-but-localhost-refuses-the-connection.html
- docker ps or docker port shows the expected host port => https://laozhangzzz.github.io/agent-pitbook/q/docker-ps-or-docker-port-shows-the-expected-host-port.html
- how to fix docker ps or docker port shows the expected host port => https://laozhangzzz.github.io/agent-pitbook/q/how-to-fix-docker-ps-or-docker-port-shows-the-expected-host-port.html
- docker ps or docker port shows the expected host port root cause => https://laozhangzzz.github.io/agent-pitbook/q/docker-ps-or-docker-port-shows-the-expected-host-port-root-cause.html
- codex docker ps or docker port shows the expected host port => https://laozhangzzz.github.io/agent-pitbook/q/codex-docker-ps-or-docker-port-shows-the-expected-host-port.html
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/docker-published-port-localhost-refused.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/docker-published-port-localhost-refused.md
Known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/7

Problem: docker ps or docker port shows the expected host port
Root cause: The app inside the container is listening on loopback rather than a container network interface.
Fix first: Change the app bind address inside the container to 0.0.0.0.
Verify: Inspect port mapping and make an HTTP request from the host.

Search queries this answer targets:

- Docker port is published but localhost refuses the connection
- Docker port is published but localhost refuses the connection fix
- Docker port is published but localhost refuses the connection root cause
- how to fix Docker port is published but localhost refuses the connection
- docker ps or docker port shows the expected host port
- how to fix docker ps or docker port shows the expected host port
- docker ps or docker port shows the expected host port root cause
- codex docker ps or docker port shows the expected host port
- codex docker ps or docker port shows the expected host port fix
- claude-code docker ps or docker port shows the expected host port
- claude-code docker ps or docker port shows the expected host port fix
- gemini docker ps or docker port shows the expected host port
- gemini docker ps or docker port shows the expected host port fix
- curl to localhost or 127.0.0.1 on the host fails
- how to fix curl to localhost or 127.0.0.1 on the host fails
- curl to localhost or 127.0.0.1 on the host fails root cause

## Guide: Resolving '421 Invalid Host Header' DNS Rebinding Protection

Pit ID: fastmcp-421-invalid-host-header-dns-rebinding
Pit title: FastMCP returns 421 Invalid Host Header behind a proxy due to DNS rebinding protection
Status: verified
Tools: mcp-server, fastmcp
Query landing: https://laozhangzzz.github.io/agent-pitbook/q/guide-resolving-421-invalid-host-header-dns-rebinding-protection.html
Query alias landings:
- Guide: Resolving '421 Invalid Host Header' DNS Rebinding Protection => https://laozhangzzz.github.io/agent-pitbook/q/guide-resolving-421-invalid-host-header-dns-rebinding-protection.html
- Guide: Resolving '421 Invalid Host Header' (DNS Rebinding Protection) fix => https://laozhangzzz.github.io/agent-pitbook/q/guide-resolving-421-invalid-host-header-dns-rebinding-protection-fix.html
- Guide: Resolving '421 Invalid Host Header' (DNS Rebinding Protection) root cause => https://laozhangzzz.github.io/agent-pitbook/q/guide-resolving-421-invalid-host-header-dns-rebinding-protection-root-cause.html
- FastMCP returns 421 Invalid Host Header behind a proxy due to DNS rebinding protection => https://laozhangzzz.github.io/agent-pitbook/q/fastmcp-returns-421-invalid-host-header-behind-a-proxy-due-to-dns-rebinding-protection.html
- FastMCP returns 421 Invalid Host Header behind a proxy due to DNS rebinding protection fix => https://laozhangzzz.github.io/agent-pitbook/q/fastmcp-returns-421-invalid-host-header-behind-a-proxy-due-to-dns-rebinding-protection-fix.html
- FastMCP returns 421 Invalid Host Header behind a proxy due to DNS rebinding protection root cause => https://laozhangzzz.github.io/agent-pitbook/q/fastmcp-returns-421-invalid-host-header-behind-a-proxy-due-to-dns-rebinding-protection-root-cause.html
- how to fix FastMCP returns 421 Invalid Host Header behind a proxy due to DNS rebinding protection => https://laozhangzzz.github.io/agent-pitbook/q/how-to-fix-fastmcp-returns-421-invalid-host-header-behind-a-proxy-due-to-dns-rebinding-protection.html
- /MCP => https://laozhangzzz.github.io/agent-pitbook/q/mcp.html
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/fastmcp-421-invalid-host-header-dns-rebinding.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/fastmcp-421-invalid-host-header-dns-rebinding.md
Known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/11

Problem: all external requests fail with HTTP 421 Misdirected Request and 'Invalid Host header'
Root cause: FastMCP enables DNS rebinding protection that validates the request Host header against an allowed list (added in PR #861).
Fix first: Explicitly allow your hosts and origins via TransportSecuritySettings(allowed_hosts=[...], allowed_origins=[...]).
Verify: Send a proxied request after setting allowed_hosts or disabling protection.

Search queries this answer targets:

- Guide: Resolving '421 Invalid Host Header' DNS Rebinding Protection
- Guide: Resolving '421 Invalid Host Header' (DNS Rebinding Protection) fix
- Guide: Resolving '421 Invalid Host Header' (DNS Rebinding Protection) root cause
- FastMCP returns 421 Invalid Host Header behind a proxy due to DNS rebinding protection
- FastMCP returns 421 Invalid Host Header behind a proxy due to DNS rebinding protection fix
- FastMCP returns 421 Invalid Host Header behind a proxy due to DNS rebinding protection root cause
- how to fix FastMCP returns 421 Invalid Host Header behind a proxy due to DNS rebinding protection
- /MCP
- /MCP fix
- mcp-server /MCP
- mcp-server /MCP fix
- fastmcp /MCP
- fastmcp /MCP fix
- -HTTP
- -HTTP fix
- mcp-server -HTTP

## Option to not rewrite the logging configuration workarounds: re-apply dictConfig, remove added handler

Pit ID: fastmcp-overrides-logging-configuration
Pit title: FastMCP overrides your app's logging configuration on init (duplicate or lost logs)
Status: candidate
Tools: mcp-server, python-sdk, fastmcp
Query landing: https://laozhangzzz.github.io/agent-pitbook/q/option-to-not-rewrite-the-logging-configuration-workarounds-re-apply-dictconfig-remove-added-handler.html
Query alias landings:
- Option to not rewrite the logging configuration workarounds: re-apply dictConfig, remove added handler => https://laozhangzzz.github.io/agent-pitbook/q/option-to-not-rewrite-the-logging-configuration-workarounds-re-apply-dictconfig-remove-added-handler.html
- Option to not rewrite the logging configuration (workarounds: re-apply dictConfig, remove added handler) fix => https://laozhangzzz.github.io/agent-pitbook/q/option-to-not-rewrite-the-logging-configuration-workarounds-re-apply-dictconfig-remove-added-handler-fix.html
- Option to not rewrite the logging configuration (workarounds: re-apply dictConfig, remove added handler) root cause => https://laozhangzzz.github.io/agent-pitbook/q/option-to-not-rewrite-the-logging-configuration-workarounds-re-apply-dictconfig-remove-added-handler-root-cause.html
- FastMCP overrides your apps logging configuration on init duplicate or lost logs => https://laozhangzzz.github.io/agent-pitbook/q/fastmcp-overrides-your-apps-logging-configuration-on-init-duplicate-or-lost-logs.html
- FastMCP overrides your apps logging configuration on init (duplicate or lost logs) fix => https://laozhangzzz.github.io/agent-pitbook/q/fastmcp-overrides-your-apps-logging-configuration-on-init-duplicate-or-lost-logs-fix.html
- FastMCP overrides your apps logging configuration on init (duplicate or lost logs) root cause => https://laozhangzzz.github.io/agent-pitbook/q/fastmcp-overrides-your-apps-logging-configuration-on-init-duplicate-or-lost-logs-root-cause.html
- how to fix FastMCP overrides your apps logging configuration on init duplicate or lost logs => https://laozhangzzz.github.io/agent-pitbook/q/how-to-fix-fastmcp-overrides-your-apps-logging-configuration-on-init-duplicate-or-lost-logs.html
- log messages become duplicated after the FastMCP server is created => https://laozhangzzz.github.io/agent-pitbook/q/log-messages-become-duplicated-after-the-fastmcp-server-is-created.html
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/fastmcp-overrides-logging-configuration.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/fastmcp-overrides-logging-configuration.md
Known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/12

Problem: log messages become duplicated after the FastMCP server is created
Root cause: FastMCP performs global logging configuration at startup (configure_logging) instead of confining itself to its own logger.
Fix first: Re-apply your logging configuration after constructing FastMCP so your handlers win.
Verify: Emit logs after re-applying your config.

Search queries this answer targets:

- Option to not rewrite the logging configuration workarounds: re-apply dictConfig, remove added handler
- Option to not rewrite the logging configuration (workarounds: re-apply dictConfig, remove added handler) fix
- Option to not rewrite the logging configuration (workarounds: re-apply dictConfig, remove added handler) root cause
- FastMCP overrides your apps logging configuration on init duplicate or lost logs
- FastMCP overrides your apps logging configuration on init (duplicate or lost logs) fix
- FastMCP overrides your apps logging configuration on init (duplicate or lost logs) root cause
- how to fix FastMCP overrides your apps logging configuration on init duplicate or lost logs
- log messages become duplicated after the FastMCP server is created
- how to fix log messages become duplicated after the FastMCP server is created
- log messages become duplicated after the FastMCP server is created root cause
- mcp-server log messages become duplicated after the FastMCP server is created
- mcp-server log messages become duplicated after the FastMCP server is created fix
- python-sdk log messages become duplicated after the FastMCP server is created
- python-sdk log messages become duplicated after the FastMCP server is created fix
- a custom/structured global logging handler stops taking effect
- how to fix a custom/structured global logging handler stops taking effect

## VSCode Toolset name mismatch: github/* fails with Unknown tool, but github warns its deprecated

Pit ID: github-mcp-vscode-toolset-name-mismatch
Pit title: VS Code agent config: github/* MCP toolset is Unknown tool while github warns it's renamed
Status: candidate
Tools: github-mcp-server, vscode
Query landing: https://laozhangzzz.github.io/agent-pitbook/q/vscode-toolset-name-mismatch-github-fails-with-unknown-tool-but-github-warns-its-deprecated.html
Query alias landings:
- VSCode Toolset name mismatch: github/* fails with Unknown tool, but github warns its deprecated => https://laozhangzzz.github.io/agent-pitbook/q/vscode-toolset-name-mismatch-github-fails-with-unknown-tool-but-github-warns-its-deprecated.html
- VSCode Toolset name mismatch: github/* fails with Unknown tool, but github warns its deprecated fix => https://laozhangzzz.github.io/agent-pitbook/q/vscode-toolset-name-mismatch-github-fails-with-unknown-tool-but-github-warns-its-deprecated-fix.html
- VSCode Toolset name mismatch: github/* fails with Unknown tool, but github warns its deprecated root cause => https://laozhangzzz.github.io/agent-pitbook/q/vscode-toolset-name-mismatch-github-fails-with-unknown-tool-but-github-warns-its-deprecated-root-cause.html
- VS Code agent config: github/* MCP toolset is Unknown tool while github warns its renamed => https://laozhangzzz.github.io/agent-pitbook/q/vs-code-agent-config-github-mcp-toolset-is-unknown-tool-while-github-warns-its-renamed.html
- VS Code agent config: github/* MCP toolset is Unknown tool while github warns its renamed fix => https://laozhangzzz.github.io/agent-pitbook/q/vs-code-agent-config-github-mcp-toolset-is-unknown-tool-while-github-warns-its-renamed-fix.html
- VS Code agent config: github/* MCP toolset is Unknown tool while github warns its renamed root cause => https://laozhangzzz.github.io/agent-pitbook/q/vs-code-agent-config-github-mcp-toolset-is-unknown-tool-while-github-warns-its-renamed-root-cause.html
- how to fix VS Code agent config: github/* MCP toolset is Unknown tool while github warns its renamed => https://laozhangzzz.github.io/agent-pitbook/q/how-to-fix-vs-code-agent-config-github-mcp-toolset-is-unknown-tool-while-github-warns-its-renamed.html
- tools: [github/*] produces Unknown tool => https://laozhangzzz.github.io/agent-pitbook/q/tools-github-produces-unknown-tool.html
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/github-mcp-vscode-toolset-name-mismatch.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/github-mcp-vscode-toolset-name-mismatch.md
Known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/13

Problem: 'tools': ['github/*'] produces Unknown tool
Root cause: The server/* toolset alias resolves only when the MCP server is registered under the matching name (e.g. installed via the official flow so it is named github).
Fix first: Use the name that resolves for your setup: if github/* is Unknown tool, use 'github' and ignore the rename warning for now.
Verify: Run the agent with the chosen tools entry.

Search queries this answer targets:

- VSCode Toolset name mismatch: github/* fails with Unknown tool, but github warns its deprecated
- VSCode Toolset name mismatch: github/* fails with Unknown tool, but github warns its deprecated fix
- VSCode Toolset name mismatch: github/* fails with Unknown tool, but github warns its deprecated root cause
- VS Code agent config: github/* MCP toolset is Unknown tool while github warns its renamed
- VS Code agent config: github/* MCP toolset is Unknown tool while github warns its renamed fix
- VS Code agent config: github/* MCP toolset is Unknown tool while github warns its renamed root cause
- how to fix VS Code agent config: github/* MCP toolset is Unknown tool while github warns its renamed
- tools: [github/*] produces Unknown tool
- how to fix 'tools': ['github/*'] produces Unknown tool
- tools: [github/*] produces Unknown tool root cause
- github-mcp-server 'tools': ['github/*'] produces Unknown tool
- github-mcp-server 'tools': ['github/*'] produces Unknown tool fix
- vscode 'tools': ['github/*'] produces Unknown tool
- vscode 'tools': ['github/*'] produces Unknown tool fix
- tools: [github] works but warns it should be github/*
- how to fix 'tools': ['github'] works but warns it should be github/*

## macOS PortAudio/sounddevice records all-zero silent audio with no error when the default mic is unavailable

Pit ID: macos-portaudio-silent-zero-capture-unavailable-default-input
Pit title: macOS PortAudio/sounddevice records all-zero silent audio with no error when the default mic is unavailable
Status: verified
Tools: sounddevice, portaudio, voice-to-claude
Query landing: https://laozhangzzz.github.io/agent-pitbook/q/macos-portaudio-sounddevice-records-all-zero-silent-audio-with-no-error-when-the-default-mic-is-unavailable.html
Query alias landings:
- macOS PortAudio/sounddevice records all-zero silent audio with no error when the default mic is unavailable => https://laozhangzzz.github.io/agent-pitbook/q/macos-portaudio-sounddevice-records-all-zero-silent-audio-with-no-error-when-the-default-mic-is-unavailable.html
- macOS PortAudio/sounddevice records all-zero silent audio with no error when the default mic is unavailable fix => https://laozhangzzz.github.io/agent-pitbook/q/macos-portaudio-sounddevice-records-all-zero-silent-audio-with-no-error-when-the-default-mic-is-unavailable-fix.html
- macOS PortAudio/sounddevice records all-zero silent audio with no error when the default mic is unavailable root cause => https://laozhangzzz.github.io/agent-pitbook/q/macos-portaudio-sounddevice-records-all-zero-silent-audio-with-no-error-when-the-default-mic-is-unavailable-root-cause.html
- how to fix macOS PortAudio/sounddevice records all-zero silent audio with no error when the default mic is unavailable => https://laozhangzzz.github.io/agent-pitbook/q/how-to-fix-macos-portaudio-sounddevice-records-all-zero-silent-audio-with-no-error-when-the-default-mic-is-unavailable.html
- multi-second speech transcribes to a single junk token e.g. 6.2s clip -> 我。, stray Korean 그., or 谷歌 => https://laozhangzzz.github.io/agent-pitbook/q/multi-second-speech-transcribes-to-a-single-junk-token-e-g-6-2s-clip-我-stray-korean-그-or-谷歌.html
- how to fix multi-second speech transcribes to a single junk token e.g. 6.2s clip -> 我。, stray Korean 그., or 谷歌 => https://laozhangzzz.github.io/agent-pitbook/q/how-to-fix-multi-second-speech-transcribes-to-a-single-junk-token-e-g-6-2s-clip-我-stray-korean-그-or-谷歌.html
- multi-second speech transcribes to a single junk token (e.g. 6.2s clip -> '我。', stray Korean '그.', or '谷歌') root cause => https://laozhangzzz.github.io/agent-pitbook/q/multi-second-speech-transcribes-to-a-single-junk-token-e-g-6-2s-clip-我-stray-korean-그-or-谷歌-root-cause.html
- sounddevice multi-second speech transcribes to a single junk token e.g. 6.2s clip -> 我。, stray Korean 그., or 谷歌 => https://laozhangzzz.github.io/agent-pitbook/q/sounddevice-multi-second-speech-transcribes-to-a-single-junk-token-e-g-6-2s-clip-我-stray-korean-그-or-谷歌.html
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/macos-portaudio-silent-zero-capture-unavailable-default-input.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/macos-portaudio-silent-zero-capture-unavailable-default-input.md
Known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/39

Problem: multi-second speech transcribes to a single junk token (e.g. 6.2s clip -> '我。', stray Korean '그.', or '谷歌')
Root cause: With the lid closed (clamshell), the built-in MacBook mic is physically unavailable but is still enumerated AND still selected as the default input device.
Fix first: Diagnose by measuring the recorded level, not by trusting the API: 0 == silent capture.
Verify: After pinning to the Studio Display mic, measure the recorded peak and run ASR.

Search queries this answer targets:

- macOS PortAudio/sounddevice records all-zero silent audio with no error when the default mic is unavailable
- macOS PortAudio/sounddevice records all-zero silent audio with no error when the default mic is unavailable fix
- macOS PortAudio/sounddevice records all-zero silent audio with no error when the default mic is unavailable root cause
- how to fix macOS PortAudio/sounddevice records all-zero silent audio with no error when the default mic is unavailable
- multi-second speech transcribes to a single junk token e.g. 6.2s clip -> 我。, stray Korean 그., or 谷歌
- how to fix multi-second speech transcribes to a single junk token e.g. 6.2s clip -> 我。, stray Korean 그., or 谷歌
- multi-second speech transcribes to a single junk token (e.g. 6.2s clip -> '我。', stray Korean '그.', or '谷歌') root cause
- sounddevice multi-second speech transcribes to a single junk token e.g. 6.2s clip -> 我。, stray Korean 그., or 谷歌
- sounddevice multi-second speech transcribes to a single junk token (e.g. 6.2s clip -> '我。', stray Korean '그.', or '谷歌') fix
- portaudio multi-second speech transcribes to a single junk token e.g. 6.2s clip -> 我。, stray Korean 그., or 谷歌
- portaudio multi-second speech transcribes to a single junk token (e.g. 6.2s clip -> '我。', stray Korean '그.', or '谷歌') fix
- voice-to-claude multi-second speech transcribes to a single junk token e.g. 6.2s clip -> 我。, stray Korean 그., or 谷歌
- voice-to-claude multi-second speech transcribes to a single junk token (e.g. 6.2s clip -> '我。', stray Korean '그.', or '谷歌') fix
- the saved WAV has peak amplitude 0 and RMS 0 all-zero samples across the whole clip
- how to fix the saved WAV has peak amplitude 0 and RMS 0 all-zero samples across the whole clip
- the saved WAV has peak amplitude 0 and RMS 0 (all-zero samples across the whole clip) root cause

## author resolved 'Client closed' by fixing an incorrect registry in user-level ~/.npmrc that the project .npmrc had overridden in the terminal

Pit ID: mcp-client-uses-user-level-npmrc-wrong-registry
Pit title: MCP server hangs because the GUI client uses your user-level .npmrc, not your project's
Status: verified
Tools: cursor, claude-desktop, cline, mcp-server
Query landing: https://laozhangzzz.github.io/agent-pitbook/q/author-resolved-client-closed-by-fixing-an-incorrect-registry-in-user-level-npmrc-that-the-project-npmrc-had-overridden.html
Query alias landings:
- author resolved 'Client closed' by fixing an incorrect registry in user-level ~/.npmrc that the project .npmrc had overridden in the terminal => https://laozhangzzz.github.io/agent-pitbook/q/author-resolved-client-closed-by-fixing-an-incorrect-registry-in-user-level-npmrc-that-the-project-npmrc-had-overridden.html
- author resolved 'Client closed' by fixing an incorrect registry in user-level ~/.npmrc that the project .npmrc had overridden in the terminal fix => https://laozhangzzz.github.io/agent-pitbook/q/author-resolved-client-closed-by-fixing-an-incorrect-registry-in-user-level-npmrc-that-the-project-npmrc-had-overridden-mcp-client-uses-user-level-npmrc-wrong-registry.html
- author resolved 'Client closed' by fixing an incorrect registry in user-level ~/.npmrc that the project .npmrc had overridden in the terminal root cause => https://laozhangzzz.github.io/agent-pitbook/q/author-resolved-client-closed-by-fixing-an-incorrect-registry-in-user-level-npmrc-that-the-project-npmrc-had-overridden-mcp-client-uses-user-level-npmrc-wrong-registry-2.html
- MCP server hangs because the GUI client uses your user-level .npmrc, not your projects => https://laozhangzzz.github.io/agent-pitbook/q/mcp-server-hangs-because-the-gui-client-uses-your-user-level-npmrc-not-your-projects.html
- MCP server hangs because the GUI client uses your user-level .npmrc, not your projects fix => https://laozhangzzz.github.io/agent-pitbook/q/mcp-server-hangs-because-the-gui-client-uses-your-user-level-npmrc-not-your-projects-fix.html
- MCP server hangs because the GUI client uses your user-level .npmrc, not your projects root cause => https://laozhangzzz.github.io/agent-pitbook/q/mcp-server-hangs-because-the-gui-client-uses-your-user-level-npmrc-not-your-projects-root-cause.html
- how to fix MCP server hangs because the GUI client uses your user-level .npmrc, not your projects => https://laozhangzzz.github.io/agent-pitbook/q/how-to-fix-mcp-server-hangs-because-the-gui-client-uses-your-user-level-npmrc-not-your-projects.html
- MCP error -32001: Request timed out => https://laozhangzzz.github.io/agent-pitbook/q/mcp-error-32001-request-timed-out.html
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-client-uses-user-level-npmrc-wrong-registry.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-client-uses-user-level-npmrc-wrong-registry.md
Known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/14

Problem: npx -y <package> works in a project terminal but not when launched by the client
Root cause: npm merges config from multiple .npmrc files; the project-level file only applies when the working directory is inside that project.
Fix first: Inspect effective npm config and the user-level rc file.
Verify: Relaunch from the client after fixing ~/.npmrc.

Search queries this answer targets:

- author resolved 'Client closed' by fixing an incorrect registry in user-level ~/.npmrc that the project .npmrc had overridden in the terminal
- author resolved 'Client closed' by fixing an incorrect registry in user-level ~/.npmrc that the project .npmrc had overridden in the terminal fix
- author resolved 'Client closed' by fixing an incorrect registry in user-level ~/.npmrc that the project .npmrc had overridden in the terminal root cause
- MCP server hangs because the GUI client uses your user-level .npmrc, not your projects
- MCP server hangs because the GUI client uses your user-level .npmrc, not your projects fix
- MCP server hangs because the GUI client uses your user-level .npmrc, not your projects root cause
- how to fix MCP server hangs because the GUI client uses your user-level .npmrc, not your projects
- MCP error -32001: Request timed out
- MCP error -32001: Request timed out fix
- cursor MCP error -32001: Request timed out
- cursor MCP error -32001: Request timed out fix
- claude-desktop MCP error -32001: Request timed out
- claude-desktop MCP error -32001: Request timed out fix
- cline MCP error -32001: Request timed out
- cline MCP error -32001: Request timed out fix
- mcp-server MCP error -32001: Request timed out

## GitHub MCP Server Fails to Start: 'npx' Command Error and Connection Closed -32000

Pit ID: mcp-error-32000-connection-closed-server-failed-to-start
Pit title: MCP error -32000: Connection closed means the stdio server died before the handshake
Status: verified
Tools: claude-desktop, cursor, cline, mcp-server
Query landing: https://laozhangzzz.github.io/agent-pitbook/q/github-mcp-server-fails-to-start-npx-command-error-and-connection-closed-32000.html
Query alias landings:
- GitHub MCP Server Fails to Start: 'npx' Command Error and Connection Closed -32000 => https://laozhangzzz.github.io/agent-pitbook/q/github-mcp-server-fails-to-start-npx-command-error-and-connection-closed-32000.html
- GitHub MCP Server Fails to Start: 'npx' Command Error and Connection Closed (-32000) fix => https://laozhangzzz.github.io/agent-pitbook/q/github-mcp-server-fails-to-start-npx-command-error-and-connection-closed-32000-fix.html
- GitHub MCP Server Fails to Start: 'npx' Command Error and Connection Closed (-32000) root cause => https://laozhangzzz.github.io/agent-pitbook/q/github-mcp-server-fails-to-start-npx-command-error-and-connection-closed-32000-root-cause.html
- Fix 'Client Closed' Error by Correcting npm Config => https://laozhangzzz.github.io/agent-pitbook/q/fix-client-closed-error-by-correcting-npm-config.html
- Fix 'Client Closed' Error by Correcting npm Config fix => https://laozhangzzz.github.io/agent-pitbook/q/fix-client-closed-error-by-correcting-npm-config-fix.html
- Fix 'Client Closed' Error by Correcting npm Config root cause => https://laozhangzzz.github.io/agent-pitbook/q/fix-client-closed-error-by-correcting-npm-config-root-cause.html
- MCP error -32000: Connection closed means the stdio server died before the handshake => https://laozhangzzz.github.io/agent-pitbook/q/mcp-error-32000-connection-closed-means-the-stdio-server-died-before-the-handshake.html
- MCP error -32000: Connection closed means the stdio server died before the handshake fix => https://laozhangzzz.github.io/agent-pitbook/q/mcp-error-32000-connection-closed-means-the-stdio-server-died-before-the-handshake-fix.html
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-error-32000-connection-closed-server-failed-to-start.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-error-32000-connection-closed-server-failed-to-start.md
Known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/15

Problem: client UI shows MCP error -32000: Connection closed
Root cause: The client spawns the configured command and speaks JSON-RPC over stdio.
Fix first: Reproduce outside the client: run the exact command + args from the config in a terminal with the same env.
Verify: Reconnect from the client after fixing the underlying cause.

Search queries this answer targets:

- GitHub MCP Server Fails to Start: 'npx' Command Error and Connection Closed -32000
- GitHub MCP Server Fails to Start: 'npx' Command Error and Connection Closed (-32000) fix
- GitHub MCP Server Fails to Start: 'npx' Command Error and Connection Closed (-32000) root cause
- Fix 'Client Closed' Error by Correcting npm Config
- Fix 'Client Closed' Error by Correcting npm Config fix
- Fix 'Client Closed' Error by Correcting npm Config root cause
- MCP error -32000: Connection closed means the stdio server died before the handshake
- MCP error -32000: Connection closed means the stdio server died before the handshake fix
- MCP error -32000: Connection closed means the stdio server died before the handshake root cause
- how to fix MCP error -32000: Connection closed means the stdio server died before the handshake
- claude-desktop MCP error -32000: Connection closed means the stdio server died before the handshake
- claude-desktop MCP error -32000: Connection closed means the stdio server died before the handshake fix
- cursor MCP error -32000: Connection closed means the stdio server died before the handshake
- cursor MCP error -32000: Connection closed means the stdio server died before the handshake fix
- cline MCP error -32000: Connection closed means the stdio server died before the handshake
- cline MCP error -32000: Connection closed means the stdio server died before the handshake fix

## Filesystem server access denied for allowed paths on Windows

Pit ID: mcp-filesystem-server-windows-access-denied-case-sensitivity
Pit title: Filesystem MCP server denies allowed Windows paths due to drive-letter case mismatch
Status: candidate
Tools: claude-desktop, cursor, mcp-server
Query landing: https://laozhangzzz.github.io/agent-pitbook/q/filesystem-server-access-denied-for-allowed-paths-on-windows.html
Query alias landings:
- Filesystem server access denied for allowed paths on Windows => https://laozhangzzz.github.io/agent-pitbook/q/filesystem-server-access-denied-for-allowed-paths-on-windows.html
- Filesystem server access denied for allowed paths on Windows fix => https://laozhangzzz.github.io/agent-pitbook/q/filesystem-server-access-denied-for-allowed-paths-on-windows-fix.html
- Filesystem server access denied for allowed paths on Windows root cause => https://laozhangzzz.github.io/agent-pitbook/q/filesystem-server-access-denied-for-allowed-paths-on-windows-root-cause.html
- step toward fixing Windows path validation => https://laozhangzzz.github.io/agent-pitbook/q/step-toward-fixing-windows-path-validation.html
- step toward fixing Windows path validation fix => https://laozhangzzz.github.io/agent-pitbook/q/step-toward-fixing-windows-path-validation-fix.html
- step toward fixing Windows path validation root cause => https://laozhangzzz.github.io/agent-pitbook/q/step-toward-fixing-windows-path-validation-root-cause.html
- Filesystem MCP server denies allowed Windows paths due to drive-letter case mismatch => https://laozhangzzz.github.io/agent-pitbook/q/filesystem-mcp-server-denies-allowed-windows-paths-due-to-drive-letter-case-mismatch.html
- Filesystem MCP server denies allowed Windows paths due to drive-letter case mismatch fix => https://laozhangzzz.github.io/agent-pitbook/q/filesystem-mcp-server-denies-allowed-windows-paths-due-to-drive-letter-case-mismatch-fix.html
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-filesystem-server-windows-access-denied-case-sensitivity.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-filesystem-server-windows-access-denied-case-sensitivity.md
Known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/16

Problem: Windows only: a file under an allowed directory returns 'Error: Access denied - path outside allowed directories'
Root cause: The allowed-directory check compares request paths against allowed roots as strings.
Fix first: Make the configured allowed-directory drive-letter case match what the client sends; try both C:\... and c:\... forms.
Verify: Call read_file on a path under the allowed directory after aligning case or applying the patched build.

Search queries this answer targets:

- Filesystem server access denied for allowed paths on Windows
- Filesystem server access denied for allowed paths on Windows fix
- Filesystem server access denied for allowed paths on Windows root cause
- step toward fixing Windows path validation
- step toward fixing Windows path validation fix
- step toward fixing Windows path validation root cause
- Filesystem MCP server denies allowed Windows paths due to drive-letter case mismatch
- Filesystem MCP server denies allowed Windows paths due to drive-letter case mismatch fix
- Filesystem MCP server denies allowed Windows paths due to drive-letter case mismatch root cause
- how to fix Filesystem MCP server denies allowed Windows paths due to drive-letter case mismatch
- Windows only: a file under an allowed directory returns Error: Access denied - path outside allowed directories
- how to fix Windows only: a file under an allowed directory returns Error: Access denied - path outside allowed directories
- Windows only: a file under an allowed directory returns 'Error: Access denied - path outside allowed directories' root cause
- claude-desktop Windows only: a file under an allowed directory returns Error: Access denied - path outside allowed directories
- claude-desktop Windows only: a file under an allowed directory returns 'Error: Access denied - path outside allowed directories' fix
- cursor Windows only: a file under an allowed directory returns Error: Access denied - path outside allowed directories

## Claude Code cannot connect to GitHubs remote MCP server using OAuth authentication PAT via GITHUB_PERSONAL_ACCESS_TOKEN is the confirmed workaround

Pit ID: mcp-github-remote-oauth-dcr-unsupported-use-pat
Pit title: Remote MCP OAuth fails with "does not support dynamic client registration"; use a PAT
Status: verified
Tools: claude-code, github-mcp-server
Query landing: https://laozhangzzz.github.io/agent-pitbook/q/claude-code-cannot-connect-to-githubs-remote-mcp-server-using-oauth-authentication-pat-via-github-personal-access-token.html
Query alias landings:
- Claude Code cannot connect to GitHubs remote MCP server using OAuth authentication PAT via GITHUB_PERSONAL_ACCESS_TOKEN is the confirmed workaround => https://laozhangzzz.github.io/agent-pitbook/q/claude-code-cannot-connect-to-githubs-remote-mcp-server-using-oauth-authentication-pat-via-github-personal-access-token.html
- Claude Code cannot connect to GitHubs remote MCP server using OAuth authentication (PAT via GITHUB_PERSONAL_ACCESS_TOKEN is the confirmed workaround) fix => https://laozhangzzz.github.io/agent-pitbook/q/claude-code-cannot-connect-to-githubs-remote-mcp-server-using-oauth-authentication-pat-via-github-personal-access-token-mcp-github-remote-oauth-dcr-unsupported-use-pat.html
- Claude Code cannot connect to GitHubs remote MCP server using OAuth authentication (PAT via GITHUB_PERSONAL_ACCESS_TOKEN is the confirmed workaround) root cause => https://laozhangzzz.github.io/agent-pitbook/q/claude-code-cannot-connect-to-githubs-remote-mcp-server-using-oauth-authentication-pat-via-github-personal-access-token-mcp-github-remote-oauth-dcr-unsupported-use-pat-2.html
- Remote MCP OAuth fails with "does not support dynamic client registration"; use a PAT => https://laozhangzzz.github.io/agent-pitbook/q/remote-mcp-oauth-fails-with-does-not-support-dynamic-client-registration-use-a-pat.html
- Remote MCP OAuth fails with "does not support dynamic client registration"; use a PAT fix => https://laozhangzzz.github.io/agent-pitbook/q/remote-mcp-oauth-fails-with-does-not-support-dynamic-client-registration-use-a-pat-fix.html
- Remote MCP OAuth fails with "does not support dynamic client registration"; use a PAT root cause => https://laozhangzzz.github.io/agent-pitbook/q/remote-mcp-oauth-fails-with-does-not-support-dynamic-client-registration-use-a-pat-root-cause.html
- how to fix Remote MCP OAuth fails with "does not support dynamic client registration"; use a PAT => https://laozhangzzz.github.io/agent-pitbook/q/how-to-fix-remote-mcp-oauth-fails-with-does-not-support-dynamic-client-registration-use-a-pat.html
- does not support dynamic client registration => https://laozhangzzz.github.io/agent-pitbook/q/does-not-support-dynamic-client-registration.html
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-github-remote-oauth-dcr-unsupported-use-pat.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-github-remote-oauth-dcr-unsupported-use-pat.md
Known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/17

Problem: claude mcp add ... https://api.githubcopilot.com/mcp/ then the connection fails
Root cause: The client's OAuth flow relies on OAuth 2.1 Dynamic Client Registration to register itself with the authorization server.
Fix first: Create a fine-grained GitHub Personal Access Token with the scopes you need.
Verify: Connect after providing the PAT in env.

Search queries this answer targets:

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

## Docker container connection refused HOST + ALLOWED_ORIGINS workaround

Pit ID: mcp-inspector-docker-connection-refused-host-env
Pit title: MCP Inspector in Docker refuses connections unless HOST and ALLOWED_ORIGINS are set
Status: verified
Tools: mcp-inspector
Query landing: https://laozhangzzz.github.io/agent-pitbook/q/docker-container-connection-refused-host-allowed-origins-workaround.html
Query alias landings:
- Docker container connection refused HOST + ALLOWED_ORIGINS workaround => https://laozhangzzz.github.io/agent-pitbook/q/docker-container-connection-refused-host-allowed-origins-workaround.html
- Docker container connection refused (HOST + ALLOWED_ORIGINS workaround) fix => https://laozhangzzz.github.io/agent-pitbook/q/docker-container-connection-refused-host-allowed-origins-workaround-fix.html
- Docker container connection refused (HOST + ALLOWED_ORIGINS workaround) root cause => https://laozhangzzz.github.io/agent-pitbook/q/docker-container-connection-refused-host-allowed-origins-workaround-root-cause.html
- MCP Inspector in Docker refuses connections unless HOST and ALLOWED_ORIGINS are set => https://laozhangzzz.github.io/agent-pitbook/q/mcp-inspector-in-docker-refuses-connections-unless-host-and-allowed-origins-are-set.html
- MCP Inspector in Docker refuses connections unless HOST and ALLOWED_ORIGINS are set fix => https://laozhangzzz.github.io/agent-pitbook/q/mcp-inspector-in-docker-refuses-connections-unless-host-and-allowed-origins-are-set-fix.html
- MCP Inspector in Docker refuses connections unless HOST and ALLOWED_ORIGINS are set root cause => https://laozhangzzz.github.io/agent-pitbook/q/mcp-inspector-in-docker-refuses-connections-unless-host-and-allowed-origins-are-set-root-cause.html
- how to fix MCP Inspector in Docker refuses connections unless HOST and ALLOWED_ORIGINS are set => https://laozhangzzz.github.io/agent-pitbook/q/how-to-fix-mcp-inspector-in-docker-refuses-connections-unless-host-and-allowed-origins-are-set.html
- HOST fix => https://laozhangzzz.github.io/agent-pitbook/q/host-fix.html
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-inspector-docker-connection-refused-host-env.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-inspector-docker-connection-refused-host-env.md
Known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/18

Problem: curl http://localhost:6274 returns Failed to connect ... Connection refused
Root cause: Inspector listens on the loopback interface, which inside a container is only reachable by processes in that container.
Fix first: Pass HOST and ALLOWED_ORIGINS to the container run command.
Verify: Curl the UI port after setting the env vars.

Search queries this answer targets:

- Docker container connection refused HOST + ALLOWED_ORIGINS workaround
- Docker container connection refused (HOST + ALLOWED_ORIGINS workaround) fix
- Docker container connection refused (HOST + ALLOWED_ORIGINS workaround) root cause
- MCP Inspector in Docker refuses connections unless HOST and ALLOWED_ORIGINS are set
- MCP Inspector in Docker refuses connections unless HOST and ALLOWED_ORIGINS are set fix
- MCP Inspector in Docker refuses connections unless HOST and ALLOWED_ORIGINS are set root cause
- how to fix MCP Inspector in Docker refuses connections unless HOST and ALLOWED_ORIGINS are set
- HOST fix
- mcp-inspector HOST
- mcp-inspector HOST fix
- ALLOWED_ORIGINS
- ALLOWED_ORIGINS fix
- mcp-inspector ALLOWED_ORIGINS
- mcp-inspector ALLOWED_ORIGINS fix
- ERR_CONNECTION_REFUSED
- ERR_CONNECTION_REFUSED fix

## sh: mcp-inspector: command not found after upgrading to v0.10.0 downgrade to 0.9.0

Pit ID: mcp-inspector-release-regression-pin-version
Pit title: MCP Inspector breaks after an upgrade; pin a known-good version
Status: verified
Tools: mcp-inspector
Query landing: https://laozhangzzz.github.io/agent-pitbook/q/sh-mcp-inspector-command-not-found-after-upgrading-to-v0-10-0-downgrade-to-0-9-0.html
Query alias landings:
- sh: mcp-inspector: command not found after upgrading to v0.10.0 downgrade to 0.9.0 => https://laozhangzzz.github.io/agent-pitbook/q/sh-mcp-inspector-command-not-found-after-upgrading-to-v0-10-0-downgrade-to-0-9-0.html
- sh: mcp-inspector: command not found after upgrading to v0.10.0 (downgrade to 0.9.0) fix => https://laozhangzzz.github.io/agent-pitbook/q/sh-mcp-inspector-command-not-found-after-upgrading-to-v0-10-0-downgrade-to-0-9-0-fix.html
- sh: mcp-inspector: command not found after upgrading to v0.10.0 (downgrade to 0.9.0) root cause => https://laozhangzzz.github.io/agent-pitbook/q/sh-mcp-inspector-command-not-found-after-upgrading-to-v0-10-0-downgrade-to-0-9-0-root-cause.html
- Controller is already closed on fastmcp Streamable HTTP downgrade to 0.16.7; fixed in 0.17.5 => https://laozhangzzz.github.io/agent-pitbook/q/controller-is-already-closed-on-fastmcp-streamable-http-downgrade-to-0-16-7-fixed-in-0-17-5.html
- Controller is already closed on fastmcp Streamable HTTP (downgrade to 0.16.7; fixed in 0.17.5) fix => https://laozhangzzz.github.io/agent-pitbook/q/controller-is-already-closed-on-fastmcp-streamable-http-downgrade-to-0-16-7-fixed-in-0-17-5-fix.html
- Controller is already closed on fastmcp Streamable HTTP (downgrade to 0.16.7; fixed in 0.17.5) root cause => https://laozhangzzz.github.io/agent-pitbook/q/controller-is-already-closed-on-fastmcp-streamable-http-downgrade-to-0-16-7-fixed-in-0-17-5-root-cause.html
- MCP Inspector breaks after an upgrade; pin a known-good version => https://laozhangzzz.github.io/agent-pitbook/q/mcp-inspector-breaks-after-an-upgrade-pin-a-known-good-version.html
- MCP Inspector breaks after an upgrade; pin a known-good version fix => https://laozhangzzz.github.io/agent-pitbook/q/mcp-inspector-breaks-after-an-upgrade-pin-a-known-good-version-fix.html
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-inspector-release-regression-pin-version.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-inspector-release-regression-pin-version.md
Known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/19

Problem: npx @modelcontextprotocol/inspector fails with 'sh: mcp-inspector: command not found' or ''mcp-inspector' is not recognized' (0.10.0)
Root cause: Inspector is released often and some releases regress.
Fix first: Pin a known-good version to unblock, e.g. @0.9.0 for the 0.10.0 command-not-found regression or @0.16.7 for the 0.17.2 Controller-already-closed regression.
Verify: Run the pinned or fixed version.

Search queries this answer targets:

- sh: mcp-inspector: command not found after upgrading to v0.10.0 downgrade to 0.9.0
- sh: mcp-inspector: command not found after upgrading to v0.10.0 (downgrade to 0.9.0) fix
- sh: mcp-inspector: command not found after upgrading to v0.10.0 (downgrade to 0.9.0) root cause
- Controller is already closed on fastmcp Streamable HTTP downgrade to 0.16.7; fixed in 0.17.5
- Controller is already closed on fastmcp Streamable HTTP (downgrade to 0.16.7; fixed in 0.17.5) fix
- Controller is already closed on fastmcp Streamable HTTP (downgrade to 0.16.7; fixed in 0.17.5) root cause
- MCP Inspector breaks after an upgrade; pin a known-good version
- MCP Inspector breaks after an upgrade; pin a known-good version fix
- MCP Inspector breaks after an upgrade; pin a known-good version root cause
- how to fix MCP Inspector breaks after an upgrade; pin a known-good version
- HTTP fix
- mcp-inspector HTTP
- mcp-inspector HTTP fix
- ERR_INVALID_STATE
- ERR_INVALID_STATE fix
- mcp-inspector ERR_INVALID_STATE

## comment confirming a corrupted npx cache from network errors caused the server to crash; clearing it fixed startup

Pit ID: mcp-npx-cache-corrupted-server-fails-to-start
Pit title: A corrupted or cold npx cache makes an MCP server fail to start or time out
Status: verified
Tools: claude-desktop, cursor, cline, mcp-server
Query landing: https://laozhangzzz.github.io/agent-pitbook/q/comment-confirming-a-corrupted-npx-cache-from-network-errors-caused-the-server-to-crash-clearing-it-fixed-startup.html
Query alias landings:
- comment confirming a corrupted npx cache from network errors caused the server to crash; clearing it fixed startup => https://laozhangzzz.github.io/agent-pitbook/q/comment-confirming-a-corrupted-npx-cache-from-network-errors-caused-the-server-to-crash-clearing-it-fixed-startup.html
- comment confirming a corrupted npx cache from network errors caused the server to crash; clearing it fixed startup fix => https://laozhangzzz.github.io/agent-pitbook/q/comment-confirming-a-corrupted-npx-cache-from-network-errors-caused-the-server-to-crash-clearing-it-fixed-startup-fix.html
- comment confirming a corrupted npx cache from network errors caused the server to crash; clearing it fixed startup root cause => https://laozhangzzz.github.io/agent-pitbook/q/comment-confirming-a-corrupted-npx-cache-from-network-errors-caused-the-server-to-crash-clearing-it-fixed-startup-root-c.html
- Client closed / -32001 Request timed out around npx MCP startup => https://laozhangzzz.github.io/agent-pitbook/q/client-closed-32001-request-timed-out-around-npx-mcp-startup.html
- Client closed / -32001 Request timed out around npx MCP startup fix => https://laozhangzzz.github.io/agent-pitbook/q/client-closed-32001-request-timed-out-around-npx-mcp-startup-fix.html
- Client closed / -32001 Request timed out around npx MCP startup root cause => https://laozhangzzz.github.io/agent-pitbook/q/client-closed-32001-request-timed-out-around-npx-mcp-startup-root-cause.html
- A corrupted or cold npx cache makes an MCP server fail to start or time out => https://laozhangzzz.github.io/agent-pitbook/q/a-corrupted-or-cold-npx-cache-makes-an-mcp-server-fail-to-start-or-time-out.html
- A corrupted or cold npx cache makes an MCP server fail to start or time out fix => https://laozhangzzz.github.io/agent-pitbook/q/a-corrupted-or-cold-npx-cache-makes-an-mcp-server-fail-to-start-or-time-out-fix.html
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-npx-cache-corrupted-server-fails-to-start.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-npx-cache-corrupted-server-fails-to-start.md
Known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/20

Problem: npx-launched MCP server worked before and now fails, or fails only on first launch
Root cause: npx downloads the package into the npm cache before running it.
Fix first: Clear the npm/npx cache and relaunch.
Verify: Relaunch after clearing the cache or pre-installing.

Search queries this answer targets:

- comment confirming a corrupted npx cache from network errors caused the server to crash; clearing it fixed startup
- comment confirming a corrupted npx cache from network errors caused the server to crash; clearing it fixed startup fix
- comment confirming a corrupted npx cache from network errors caused the server to crash; clearing it fixed startup root cause
- Client closed / -32001 Request timed out around npx MCP startup
- Client closed / -32001 Request timed out around npx MCP startup fix
- Client closed / -32001 Request timed out around npx MCP startup root cause
- A corrupted or cold npx cache makes an MCP server fail to start or time out
- A corrupted or cold npx cache makes an MCP server fail to start or time out fix
- A corrupted or cold npx cache makes an MCP server fail to start or time out root cause
- how to fix A corrupted or cold npx cache makes an MCP server fail to start or time out
- MCP error -32001: Request timed out is often a npx/npm cache problem: an interrupted download leaves a partial package, or a cold first download exceeds the client startup timeo
- MCP error -32001: Request timed out is often a npx/npm cache problem: an interrupted download leaves a partial package, or a cold first download exceeds the client startup timeo fix
- claude-desktop MCP error -32001: Request timed out is often a npx/npm cache problem: an interrupted download leaves a partial package, or a cold first download exceeds the client startup timeo
- claude-desktop MCP error -32001: Request timed out is often a npx/npm cache problem: an interrupted download leaves a partial package, or a cold first download exceeds the client startup timeo fix
- cursor MCP error -32001: Request timed out is often a npx/npm cache problem: an interrupted download leaves a partial package, or a cold first download exceeds the client startup timeo
- cursor MCP error -32001: Request timed out is often a npx/npm cache problem: an interrupted download leaves a partial package, or a cold first download exceeds the client startup timeo fix

## Puppeteer MCP Server Missing Screenshots

Pit ID: mcp-puppeteer-screenshots-in-memory-only
Pit title: Puppeteer MCP screenshots live in memory only; there is no file on disk to find
Status: verified
Tools: mcp-server, claude-desktop
Query landing: https://laozhangzzz.github.io/agent-pitbook/q/puppeteer-mcp-server-missing-screenshots.html
Query alias landings:
- Puppeteer MCP Server Missing Screenshots => https://laozhangzzz.github.io/agent-pitbook/q/puppeteer-mcp-server-missing-screenshots.html
- Puppeteer MCP Server Missing Screenshots fix => https://laozhangzzz.github.io/agent-pitbook/q/puppeteer-mcp-server-missing-screenshots-fix.html
- Puppeteer MCP Server Missing Screenshots root cause => https://laozhangzzz.github.io/agent-pitbook/q/puppeteer-mcp-server-missing-screenshots-root-cause.html
- Puppeteer MCP screenshots live in memory only; there is no file on disk to find => https://laozhangzzz.github.io/agent-pitbook/q/puppeteer-mcp-screenshots-live-in-memory-only-there-is-no-file-on-disk-to-find.html
- Puppeteer MCP screenshots live in memory only; there is no file on disk to find fix => https://laozhangzzz.github.io/agent-pitbook/q/puppeteer-mcp-screenshots-live-in-memory-only-there-is-no-file-on-disk-to-find-fix.html
- Puppeteer MCP screenshots live in memory only; there is no file on disk to find root cause => https://laozhangzzz.github.io/agent-pitbook/q/puppeteer-mcp-screenshots-live-in-memory-only-there-is-no-file-on-disk-to-find-root-cause.html
- how to fix Puppeteer MCP screenshots live in memory only; there is no file on disk to find => https://laozhangzzz.github.io/agent-pitbook/q/how-to-fix-puppeteer-mcp-screenshots-live-in-memory-only-there-is-no-file-on-disk-to-find.html
- puppeteer_screenshot reports success but no image file appears on disk => https://laozhangzzz.github.io/agent-pitbook/q/puppeteer-screenshot-reports-success-but-no-image-file-appears-on-disk.html
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-puppeteer-screenshots-in-memory-only.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-puppeteer-screenshots-in-memory-only.md
Known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/21

Problem: puppeteer_screenshot reports success but no image file appears on disk
Root cause: The server stores screenshots in memory and exposes them as MCP resources, with no documented filesystem path.
Fix first: Retrieve the screenshot via the MCP resource the server exposes, not from a file path.
Verify: Inspect the resource list in the client/Inspector and the filesystem.

Search queries this answer targets:

- Puppeteer MCP Server Missing Screenshots
- Puppeteer MCP Server Missing Screenshots fix
- Puppeteer MCP Server Missing Screenshots root cause
- Puppeteer MCP screenshots live in memory only; there is no file on disk to find
- Puppeteer MCP screenshots live in memory only; there is no file on disk to find fix
- Puppeteer MCP screenshots live in memory only; there is no file on disk to find root cause
- how to fix Puppeteer MCP screenshots live in memory only; there is no file on disk to find
- puppeteer_screenshot reports success but no image file appears on disk
- how to fix puppeteer_screenshot reports success but no image file appears on disk
- puppeteer_screenshot reports success but no image file appears on disk root cause
- mcp-server puppeteer_screenshot reports success but no image file appears on disk
- mcp-server puppeteer_screenshot reports success but no image file appears on disk fix
- claude-desktop puppeteer_screenshot reports success but no image file appears on disk
- claude-desktop puppeteer_screenshot reports success but no image file appears on disk fix
- the model tries to open a screenshot path and finds nothing
- how to fix the model tries to open a screenshot path and finds nothing

## server-postgres multi-instance issue closed; maintainer notes the server moved to servers-archived

Pit ID: mcp-reference-server-archived-unmaintained
Pit title: Several official reference MCP servers are archived; their bugs will not be fixed
Status: verified
Tools: mcp-server, claude-desktop, cursor
Query landing: https://laozhangzzz.github.io/agent-pitbook/q/server-postgres-multi-instance-issue-closed-maintainer-notes-the-server-moved-to-servers-archived.html
Query alias landings:
- server-postgres multi-instance issue closed; maintainer notes the server moved to servers-archived => https://laozhangzzz.github.io/agent-pitbook/q/server-postgres-multi-instance-issue-closed-maintainer-notes-the-server-moved-to-servers-archived.html
- server-postgres multi-instance issue closed; maintainer notes the server moved to servers-archived fix => https://laozhangzzz.github.io/agent-pitbook/q/server-postgres-multi-instance-issue-closed-maintainer-notes-the-server-moved-to-servers-archived-fix.html
- server-postgres multi-instance issue closed; maintainer notes the server moved to servers-archived root cause => https://laozhangzzz.github.io/agent-pitbook/q/server-postgres-multi-instance-issue-closed-maintainer-notes-the-server-moved-to-servers-archived-root-cause.html
- maintainer deprecation notice that server-github development moved to github/github-mcp-server => https://laozhangzzz.github.io/agent-pitbook/q/maintainer-deprecation-notice-that-server-github-development-moved-to-github-github-mcp-server.html
- maintainer deprecation notice that server-github development moved to github/github-mcp-server fix => https://laozhangzzz.github.io/agent-pitbook/q/maintainer-deprecation-notice-that-server-github-development-moved-to-github-github-mcp-server-fix.html
- maintainer deprecation notice that server-github development moved to github/github-mcp-server root cause => https://laozhangzzz.github.io/agent-pitbook/q/maintainer-deprecation-notice-that-server-github-development-moved-to-github-github-mcp-server-root-cause.html
- Several official reference MCP servers are archived; their bugs will not be fixed => https://laozhangzzz.github.io/agent-pitbook/q/several-official-reference-mcp-servers-are-archived-their-bugs-will-not-be-fixed.html
- Several official reference MCP servers are archived; their bugs will not be fixed fix => https://laozhangzzz.github.io/agent-pitbook/q/several-official-reference-mcp-servers-are-archived-their-bugs-will-not-be-fixed-fix.html
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-reference-server-archived-unmaintained.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-reference-server-archived-unmaintained.md
Known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/22

Problem: a reference server misbehaves and the issue is closed with a deprecation/archival note
Root cause: The project archived a number of reference servers to reduce maintenance load and focus on a smaller core set.
Fix first: Before debugging a reference server, check whether it is in modelcontextprotocol/servers-archived or flagged deprecated in the main README.
Verify: Check the repository of the server you depend on.

Search queries this answer targets:

- server-postgres multi-instance issue closed; maintainer notes the server moved to servers-archived
- server-postgres multi-instance issue closed; maintainer notes the server moved to servers-archived fix
- server-postgres multi-instance issue closed; maintainer notes the server moved to servers-archived root cause
- maintainer deprecation notice that server-github development moved to github/github-mcp-server
- maintainer deprecation notice that server-github development moved to github/github-mcp-server fix
- maintainer deprecation notice that server-github development moved to github/github-mcp-server root cause
- Several official reference MCP servers are archived; their bugs will not be fixed
- Several official reference MCP servers are archived; their bugs will not be fixed fix
- Several official reference MCP servers are archived; their bugs will not be fixed root cause
- how to fix Several official reference MCP servers are archived; their bugs will not be fixed
- README fix
- mcp-server README
- mcp-server README fix
- claude-desktop README
- claude-desktop README fix
- cursor README

## Claude Desktop custom MCP connection failure; confirmed root cause is Cloudflare Tunnel buffering SSE despite successful OAuth/initialize

Pit ID: mcp-reverse-proxy-buffers-sse-connection-fails
Pit title: A reverse proxy buffering SSE breaks remote MCP after OAuth and initialize succeed
Status: verified
Tools: claude-desktop, mcp-server
Query landing: https://laozhangzzz.github.io/agent-pitbook/q/claude-desktop-custom-mcp-connection-failure-confirmed-root-cause-is-cloudflare-tunnel-buffering-sse-despite-successful.html
Query alias landings:
- Claude Desktop custom MCP connection failure; confirmed root cause is Cloudflare Tunnel buffering SSE despite successful OAuth/initialize => https://laozhangzzz.github.io/agent-pitbook/q/claude-desktop-custom-mcp-connection-failure-confirmed-root-cause-is-cloudflare-tunnel-buffering-sse-despite-successful.html
- Claude Desktop custom MCP connection failure; confirmed root cause is Cloudflare Tunnel buffering SSE despite successful OAuth/initialize fix => https://laozhangzzz.github.io/agent-pitbook/q/claude-desktop-custom-mcp-connection-failure-confirmed-root-cause-is-cloudflare-tunnel-buffering-sse-despite-successful-mcp-reverse-proxy-buffers-sse-connection-fails.html
- Claude Desktop custom MCP connection failure; confirmed root cause is Cloudflare Tunnel buffering SSE despite successful OAuth/initialize root cause => https://laozhangzzz.github.io/agent-pitbook/q/claude-desktop-custom-mcp-connection-failure-confirmed-root-cause-is-cloudflare-tunnel-buffering-sse-despite-successful-mcp-reverse-proxy-buffers-sse-connection-fails-2.html
- A reverse proxy buffering SSE breaks remote MCP after OAuth and initialize succeed => https://laozhangzzz.github.io/agent-pitbook/q/a-reverse-proxy-buffering-sse-breaks-remote-mcp-after-oauth-and-initialize-succeed.html
- A reverse proxy buffering SSE breaks remote MCP after OAuth and initialize succeed fix => https://laozhangzzz.github.io/agent-pitbook/q/a-reverse-proxy-buffering-sse-breaks-remote-mcp-after-oauth-and-initialize-succeed-fix.html
- A reverse proxy buffering SSE breaks remote MCP after OAuth and initialize succeed root cause => https://laozhangzzz.github.io/agent-pitbook/q/a-reverse-proxy-buffering-sse-breaks-remote-mcp-after-oauth-and-initialize-succeed-root-cause.html
- how to fix A reverse proxy buffering SSE breaks remote MCP after OAuth and initialize succeed => https://laozhangzzz.github.io/agent-pitbook/q/how-to-fix-a-reverse-proxy-buffering-sse-breaks-remote-mcp-after-oauth-and-initialize-succeed.html
- HTTP fix => https://laozhangzzz.github.io/agent-pitbook/q/http-fix-mcp-reverse-proxy-buffers-sse-connection-fails.html
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-reverse-proxy-buffers-sse-connection-fails.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-reverse-proxy-buffers-sse-connection-fails.md
Known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/23

Problem: the client connects to a custom remote MCP then errors (e.g. 'There was an error connecting to your server')
Root cause: MCP Streamable HTTP streams responses over SSE, which must be flushed incrementally.
Fix first: Disable response buffering for the MCP endpoint at the proxy.
Verify: Connect through the proxy and watch the stream.

Search queries this answer targets:

- Claude Desktop custom MCP connection failure; confirmed root cause is Cloudflare Tunnel buffering SSE despite successful OAuth/initialize
- Claude Desktop custom MCP connection failure; confirmed root cause is Cloudflare Tunnel buffering SSE despite successful OAuth/initialize fix
- Claude Desktop custom MCP connection failure; confirmed root cause is Cloudflare Tunnel buffering SSE despite successful OAuth/initialize root cause
- A reverse proxy buffering SSE breaks remote MCP after OAuth and initialize succeed
- A reverse proxy buffering SSE breaks remote MCP after OAuth and initialize succeed fix
- A reverse proxy buffering SSE breaks remote MCP after OAuth and initialize succeed root cause
- how to fix A reverse proxy buffering SSE breaks remote MCP after OAuth and initialize succeed
- HTTP fix
- claude-desktop HTTP
- claude-desktop HTTP fix
- mcp-server HTTP
- mcp-server HTTP fix
- the client connects to a custom remote MCP then errors e.g. There was an error connecting to your server
- how to fix the client connects to a custom remote MCP then errors e.g. There was an error connecting to your server
- the client connects to a custom remote MCP then errors (e.g. 'There was an error connecting to your server') root cause
- claude-desktop the client connects to a custom remote MCP then errors e.g. There was an error connecting to your server

## Environment variables not respected in @modelcontextprotocol/server-memory package

Pit ID: mcp-server-memory-ignores-memory-file-path-env
Pit title: server-memory ignores MEMORY_FILE_PATH because the npm build lagged the source
Status: verified
Tools: claude-desktop, cursor, mcp-server
Query landing: https://laozhangzzz.github.io/agent-pitbook/q/environment-variables-not-respected-in-modelcontextprotocol-server-memory-package.html
Query alias landings:
- Environment variables not respected in @modelcontextprotocol/server-memory package => https://laozhangzzz.github.io/agent-pitbook/q/environment-variables-not-respected-in-modelcontextprotocol-server-memory-package.html
- Environment variables not respected in @modelcontextprotocol/server-memory package fix => https://laozhangzzz.github.io/agent-pitbook/q/environment-variables-not-respected-in-modelcontextprotocol-server-memory-package-fix.html
- Environment variables not respected in @modelcontextprotocol/server-memory package root cause => https://laozhangzzz.github.io/agent-pitbook/q/environment-variables-not-respected-in-modelcontextprotocol-server-memory-package-root-cause.html
- server-memory ignores MEMORY_FILE_PATH because the npm build lagged the source => https://laozhangzzz.github.io/agent-pitbook/q/server-memory-ignores-memory-file-path-because-the-npm-build-lagged-the-source.html
- server-memory ignores MEMORY_FILE_PATH because the npm build lagged the source fix => https://laozhangzzz.github.io/agent-pitbook/q/server-memory-ignores-memory-file-path-because-the-npm-build-lagged-the-source-fix.html
- server-memory ignores MEMORY_FILE_PATH because the npm build lagged the source root cause => https://laozhangzzz.github.io/agent-pitbook/q/server-memory-ignores-memory-file-path-because-the-npm-build-lagged-the-source-root-cause.html
- how to fix server-memory ignores MEMORY_FILE_PATH because the npm build lagged the source => https://laozhangzzz.github.io/agent-pitbook/q/how-to-fix-server-memory-ignores-memory-file-path-because-the-npm-build-lagged-the-source.html
- MEMORY_FILE_PATH => https://laozhangzzz.github.io/agent-pitbook/q/memory-file-path.html
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-server-memory-ignores-memory-file-path-env.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-server-memory-ignores-memory-file-path-env.md
Known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/24

Problem: MEMORY_FILE_PATH is set but the memory file is created at a default location
Root cause: The npm release (e.g. 0.6.2) was older than the GitHub main source: its compiled dist/index.js hardcoded path.join(__dirname, 'memory.json').
Fix first: Pin @modelcontextprotocol/server-memory@latest in the config to get the build that honors the env var (fix shipped in release 2025.4.25).
Verify: Launch with @latest and an absolute MEMORY_FILE_PATH, then check where the file is written.

Search queries this answer targets:

- Environment variables not respected in @modelcontextprotocol/server-memory package
- Environment variables not respected in @modelcontextprotocol/server-memory package fix
- Environment variables not respected in @modelcontextprotocol/server-memory package root cause
- server-memory ignores MEMORY_FILE_PATH because the npm build lagged the source
- server-memory ignores MEMORY_FILE_PATH because the npm build lagged the source fix
- server-memory ignores MEMORY_FILE_PATH because the npm build lagged the source root cause
- how to fix server-memory ignores MEMORY_FILE_PATH because the npm build lagged the source
- MEMORY_FILE_PATH
- MEMORY_FILE_PATH fix
- claude-desktop MEMORY_FILE_PATH
- claude-desktop MEMORY_FILE_PATH fix
- cursor MEMORY_FILE_PATH
- cursor MEMORY_FILE_PATH fix
- mcp-server MEMORY_FILE_PATH
- mcp-server MEMORY_FILE_PATH fix
- MEMORY_FILE_PATH is set but the memory file is created at a default location

## MCP SSE Server: Received request before initialization was complete comment confirms supergateway double-initialize; mcp-proxy works

Pit ID: mcp-sse-received-request-before-initialization
Pit title: SSE MCP server: Received request before initialization was complete
Status: verified
Tools: mcp-server, python-sdk
Query landing: https://laozhangzzz.github.io/agent-pitbook/q/mcp-sse-server-received-request-before-initialization-was-complete-comment-confirms-supergateway-double-initialize-mcp-p.html
Query alias landings:
- MCP SSE Server: Received request before initialization was complete comment confirms supergateway double-initialize; mcp-proxy works => https://laozhangzzz.github.io/agent-pitbook/q/mcp-sse-server-received-request-before-initialization-was-complete-comment-confirms-supergateway-double-initialize-mcp-p.html
- MCP SSE Server: Received request before initialization was complete (comment confirms supergateway double-initialize; mcp-proxy works) fix => https://laozhangzzz.github.io/agent-pitbook/q/mcp-sse-server-received-request-before-initialization-was-complete-comment-confirms-supergateway-double-initialize-mcp-p-mcp-sse-received-request-before-initialization.html
- MCP SSE Server: Received request before initialization was complete (comment confirms supergateway double-initialize; mcp-proxy works) root cause => https://laozhangzzz.github.io/agent-pitbook/q/mcp-sse-server-received-request-before-initialization-was-complete-comment-confirms-supergateway-double-initialize-mcp-p-mcp-sse-received-request-before-initialization-2.html
- SSE MCP server: Received request before initialization was complete => https://laozhangzzz.github.io/agent-pitbook/q/sse-mcp-server-received-request-before-initialization-was-complete.html
- SSE MCP server: Received request before initialization was complete fix => https://laozhangzzz.github.io/agent-pitbook/q/sse-mcp-server-received-request-before-initialization-was-complete-fix.html
- SSE MCP server: Received request before initialization was complete root cause => https://laozhangzzz.github.io/agent-pitbook/q/sse-mcp-server-received-request-before-initialization-was-complete-root-cause.html
- how to fix SSE MCP server: Received request before initialization was complete => https://laozhangzzz.github.io/agent-pitbook/q/how-to-fix-sse-mcp-server-received-request-before-initialization-was-complete.html
- RuntimeError: Received request before initialization was complete from an SSE MCP server means a non-initialize (or duplicate initialize) request arrived on an uninitialized => https://laozhangzzz.github.io/agent-pitbook/q/runtimeerror-received-request-before-initialization-was-complete-from-an-sse-mcp-server-means-a-non-initialize-or-duplic.html
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-sse-received-request-before-initialization.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-sse-received-request-before-initialization.md
Known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/25

Problem: server raises RuntimeError: Received request before initialization was complete on tools/list or a tool call
Root cause: The MCP lifecycle requires the client's initialize to complete before other requests.
Fix first: If a gateway/proxy is in front, use a spec-compliant one: switching supergateway -> mcp-proxy resolves the double-initialize case.
Verify: Use a compliant proxy or reconnect the client, then call tools/list.

Search queries this answer targets:

- MCP SSE Server: Received request before initialization was complete comment confirms supergateway double-initialize; mcp-proxy works
- MCP SSE Server: Received request before initialization was complete (comment confirms supergateway double-initialize; mcp-proxy works) fix
- MCP SSE Server: Received request before initialization was complete (comment confirms supergateway double-initialize; mcp-proxy works) root cause
- SSE MCP server: Received request before initialization was complete
- SSE MCP server: Received request before initialization was complete fix
- SSE MCP server: Received request before initialization was complete root cause
- how to fix SSE MCP server: Received request before initialization was complete
- RuntimeError: Received request before initialization was complete from an SSE MCP server means a non-initialize (or duplicate initialize) request arrived on an uninitialized
- RuntimeError: Received request before initialization was complete from an SSE MCP server means a non-initialize (or duplicate initialize) request arrived on an uninitialized fix
- mcp-server RuntimeError: Received request before initialization was complete from an SSE MCP server means a non-initialize (or duplicate initialize) request arrived on an uninitialized
- mcp-server RuntimeError: Received request before initialization was complete from an SSE MCP server means a non-initialize (or duplicate initialize) request arrived on an uninitialized fix
- python-sdk RuntimeError: Received request before initialization was complete from an SSE MCP server means a non-initialize (or duplicate initialize) request arrived on an uninitialized
- python-sdk RuntimeError: Received request before initialization was complete from an SSE MCP server means a non-initialize (or duplicate initialize) request arrived on an uninitialized fix
- RuntimeError: Received request before initialization was complete on tools/list or a tool call
- RuntimeError: Received request before initialization was complete on tools/list or a tool call fix
- mcp-server RuntimeError: Received request before initialization was complete on tools/list or a tool call

## MCP Server Session Lost in Multi-Worker Environment comments confirm stateless_http=True and ingress sticky-hash fixes

Pit ID: mcp-sse-session-lost-multi-worker
Pit title: MCP SSE session lost across workers/pods: Could not find session for ID (404)
Status: verified
Tools: mcp-server, python-sdk, fastmcp
Query landing: https://laozhangzzz.github.io/agent-pitbook/q/mcp-server-session-lost-in-multi-worker-environment-comments-confirm-stateless-http-true-and-ingress-sticky-hash-fixes.html
Query alias landings:
- MCP Server Session Lost in Multi-Worker Environment comments confirm stateless_http=True and ingress sticky-hash fixes => https://laozhangzzz.github.io/agent-pitbook/q/mcp-server-session-lost-in-multi-worker-environment-comments-confirm-stateless-http-true-and-ingress-sticky-hash-fixes.html
- MCP Server Session Lost in Multi-Worker Environment (comments confirm stateless_http=True and ingress sticky-hash fixes) fix => https://laozhangzzz.github.io/agent-pitbook/q/mcp-server-session-lost-in-multi-worker-environment-comments-confirm-stateless-http-true-and-ingress-sticky-hash-fixes-f.html
- MCP Server Session Lost in Multi-Worker Environment (comments confirm stateless_http=True and ingress sticky-hash fixes) root cause => https://laozhangzzz.github.io/agent-pitbook/q/mcp-server-session-lost-in-multi-worker-environment-comments-confirm-stateless-http-true-and-ingress-sticky-hash-fixes-r.html
- MCP SSE session lost across workers/pods: Could not find session for ID 404 => https://laozhangzzz.github.io/agent-pitbook/q/mcp-sse-session-lost-across-workers-pods-could-not-find-session-for-id-404.html
- MCP SSE session lost across workers/pods: Could not find session for ID (404) fix => https://laozhangzzz.github.io/agent-pitbook/q/mcp-sse-session-lost-across-workers-pods-could-not-find-session-for-id-404-fix.html
- MCP SSE session lost across workers/pods: Could not find session for ID (404) root cause => https://laozhangzzz.github.io/agent-pitbook/q/mcp-sse-session-lost-across-workers-pods-could-not-find-session-for-id-404-root-cause.html
- how to fix MCP SSE session lost across workers/pods: Could not find session for ID 404 => https://laozhangzzz.github.io/agent-pitbook/q/how-to-fix-mcp-sse-session-lost-across-workers-pods-could-not-find-session-for-id-404.html
- POST fix => https://laozhangzzz.github.io/agent-pitbook/q/post-fix.html
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-sse-session-lost-multi-worker.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-sse-session-lost-multi-worker.md
Known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/26

Problem: SSE connection opens (200), first POST returns 202, later POSTs return 404
Root cause: The SSE transport is stateful: the session lives in the memory of the worker/pod that accepted the SSE connection.
Fix first: Preferred: run stateless with Streamable HTTP so no per-connection in-memory session is required.
Verify: Send repeated messages on one session under a multi-instance deployment after the change.

Search queries this answer targets:

- MCP Server Session Lost in Multi-Worker Environment comments confirm stateless_http=True and ingress sticky-hash fixes
- MCP Server Session Lost in Multi-Worker Environment (comments confirm stateless_http=True and ingress sticky-hash fixes) fix
- MCP Server Session Lost in Multi-Worker Environment (comments confirm stateless_http=True and ingress sticky-hash fixes) root cause
- MCP SSE session lost across workers/pods: Could not find session for ID 404
- MCP SSE session lost across workers/pods: Could not find session for ID (404) fix
- MCP SSE session lost across workers/pods: Could not find session for ID (404) root cause
- how to fix MCP SSE session lost across workers/pods: Could not find session for ID 404
- POST fix
- mcp-server POST
- mcp-server POST fix
- python-sdk POST
- python-sdk POST fix
- fastmcp POST
- fastmcp POST fix
- HTTP fix
- mcp-server HTTP

## _handle_stateless_request ClosedResourceError reports 1.11.0 works, 1.12.0 fails; also FastMCP 2.10/2.13

Pit ID: mcp-stateless-streamable-http-closedresourceerror
Pit title: Stateless Streamable HTTP MCP server throws anyio.ClosedResourceError on some SDK versions
Status: candidate
Tools: mcp-server, python-sdk, fastmcp
Query landing: https://laozhangzzz.github.io/agent-pitbook/q/handle-stateless-request-closedresourceerror-reports-1-11-0-works-1-12-0-fails-also-fastmcp-2-10-2-13.html
Query alias landings:
- _handle_stateless_request ClosedResourceError reports 1.11.0 works, 1.12.0 fails; also FastMCP 2.10/2.13 => https://laozhangzzz.github.io/agent-pitbook/q/handle-stateless-request-closedresourceerror-reports-1-11-0-works-1-12-0-fails-also-fastmcp-2-10-2-13.html
- _handle_stateless_request ClosedResourceError (reports 1.11.0 works, 1.12.0 fails; also FastMCP 2.10/2.13) fix => https://laozhangzzz.github.io/agent-pitbook/q/handle-stateless-request-closedresourceerror-reports-1-11-0-works-1-12-0-fails-also-fastmcp-2-10-2-13-fix.html
- _handle_stateless_request ClosedResourceError (reports 1.11.0 works, 1.12.0 fails; also FastMCP 2.10/2.13) root cause => https://laozhangzzz.github.io/agent-pitbook/q/handle-stateless-request-closedresourceerror-reports-1-11-0-works-1-12-0-fails-also-fastmcp-2-10-2-13-root-cause.html
- Stateless Streamable HTTP MCP server throws anyio.ClosedResourceError on some SDK versions => https://laozhangzzz.github.io/agent-pitbook/q/stateless-streamable-http-mcp-server-throws-anyio-closedresourceerror-on-some-sdk-versions.html
- Stateless Streamable HTTP MCP server throws anyio.ClosedResourceError on some SDK versions fix => https://laozhangzzz.github.io/agent-pitbook/q/stateless-streamable-http-mcp-server-throws-anyio-closedresourceerror-on-some-sdk-versions-fix.html
- Stateless Streamable HTTP MCP server throws anyio.ClosedResourceError on some SDK versions root cause => https://laozhangzzz.github.io/agent-pitbook/q/stateless-streamable-http-mcp-server-throws-anyio-closedresourceerror-on-some-sdk-versions-root-cause.html
- how to fix Stateless Streamable HTTP MCP server throws anyio.ClosedResourceError on some SDK versions => https://laozhangzzz.github.io/agent-pitbook/q/how-to-fix-stateless-streamable-http-mcp-server-throws-anyio-closedresourceerror-on-some-sdk-versions.html
- HTTP fix => https://laozhangzzz.github.io/agent-pitbook/q/http-fix-mcp-stateless-streamable-http-closedresourceerror.html
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-stateless-streamable-http-closedresourceerror.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-stateless-streamable-http-closedresourceerror.md
Known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/27

Problem: each request raises an exception group ending in anyio.ClosedResourceError
Root cause: In affected versions the stateless Streamable HTTP path re-enters the transport's read loop.
Fix first: Pin a known-good SDK version; users reported 1.11.0 working where 1.12.0 failed.
Verify: Send repeated requests to the stateless server on the pinned/fixed version.

Search queries this answer targets:

- _handle_stateless_request ClosedResourceError reports 1.11.0 works, 1.12.0 fails; also FastMCP 2.10/2.13
- _handle_stateless_request ClosedResourceError (reports 1.11.0 works, 1.12.0 fails; also FastMCP 2.10/2.13) fix
- _handle_stateless_request ClosedResourceError (reports 1.11.0 works, 1.12.0 fails; also FastMCP 2.10/2.13) root cause
- Stateless Streamable HTTP MCP server throws anyio.ClosedResourceError on some SDK versions
- Stateless Streamable HTTP MCP server throws anyio.ClosedResourceError on some SDK versions fix
- Stateless Streamable HTTP MCP server throws anyio.ClosedResourceError on some SDK versions root cause
- how to fix Stateless Streamable HTTP MCP server throws anyio.ClosedResourceError on some SDK versions
- HTTP fix
- mcp-server HTTP
- mcp-server HTTP fix
- python-sdk HTTP
- python-sdk HTTP fix
- fastmcp HTTP
- fastmcp HTTP fix
- 10/2
- 10/2 fix

## MCP Servers Dont Work with NVM

Pit ID: mcp-stdio-server-exits-shell-path-not-inherited
Pit title: MCP stdio server exits immediately because the GUI client does not inherit your shell PATH
Status: verified
Tools: claude-desktop, mcp-server
Query landing: https://laozhangzzz.github.io/agent-pitbook/q/mcp-servers-dont-work-with-nvm.html
Query alias landings:
- MCP Servers Dont Work with NVM => https://laozhangzzz.github.io/agent-pitbook/q/mcp-servers-dont-work-with-nvm.html
- MCP Servers Dont Work with NVM fix => https://laozhangzzz.github.io/agent-pitbook/q/mcp-servers-dont-work-with-nvm-fix.html
- MCP Servers Dont Work with NVM root cause => https://laozhangzzz.github.io/agent-pitbook/q/mcp-servers-dont-work-with-nvm-root-cause.html
- npx-for-claude wrapper workaround 66 reactions => https://laozhangzzz.github.io/agent-pitbook/q/npx-for-claude-wrapper-workaround-66-reactions.html
- npx-for-claude wrapper workaround (66 reactions) fix => https://laozhangzzz.github.io/agent-pitbook/q/npx-for-claude-wrapper-workaround-66-reactions-fix.html
- npx-for-claude wrapper workaround (66 reactions) root cause => https://laozhangzzz.github.io/agent-pitbook/q/npx-for-claude-wrapper-workaround-66-reactions-root-cause.html
- Server transport closed unexpectedly, process exiting early write EPIPE => https://laozhangzzz.github.io/agent-pitbook/q/server-transport-closed-unexpectedly-process-exiting-early-write-epipe.html
- Server transport closed unexpectedly, process exiting early (write EPIPE) fix => https://laozhangzzz.github.io/agent-pitbook/q/server-transport-closed-unexpectedly-process-exiting-early-write-epipe-fix.html
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-stdio-server-exits-shell-path-not-inherited.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-stdio-server-exits-shell-path-not-inherited.md
Known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/28

Problem: client log: Server transport closed unexpectedly, this is likely due to the process exiting early
Root cause: GUI clients launch MCP servers without sourcing the user's shell config, so the child gets a minimal PATH.
Fix first: Confirm the failure is launch-environment, not a broken server: it runs in your terminal but fails when the client launches it.
Verify: Inspect the client MCP log after a full restart.

Search queries this answer targets:

- MCP Servers Dont Work with NVM
- MCP Servers Dont Work with NVM fix
- MCP Servers Dont Work with NVM root cause
- npx-for-claude wrapper workaround 66 reactions
- npx-for-claude wrapper workaround (66 reactions) fix
- npx-for-claude wrapper workaround (66 reactions) root cause
- Server transport closed unexpectedly, process exiting early write EPIPE
- Server transport closed unexpectedly, process exiting early (write EPIPE) fix
- Server transport closed unexpectedly, process exiting early (write EPIPE) root cause
- MCP stdio server exits immediately because the GUI client does not inherit your shell PATH
- MCP stdio server exits immediately because the GUI client does not inherit your shell PATH fix
- MCP stdio server exits immediately because the GUI client does not inherit your shell PATH root cause
- how to fix MCP stdio server exits immediately because the GUI client does not inherit your shell PATH
- PATH fix
- claude-desktop PATH
- claude-desktop PATH fix

## SyntaxError in stdio deserializeMessage a console.log in the server triggers it

Pit ID: mcp-stdio-stdout-logging-breaks-protocol
Pit title: Writing to stdout in a stdio MCP server corrupts the JSON-RPC stream
Status: verified
Tools: mcp-server, typescript-sdk, python-sdk
Query landing: https://laozhangzzz.github.io/agent-pitbook/q/syntaxerror-in-stdio-deserializemessage-a-console-log-in-the-server-triggers-it.html
Query alias landings:
- SyntaxError in stdio deserializeMessage a console.log in the server triggers it => https://laozhangzzz.github.io/agent-pitbook/q/syntaxerror-in-stdio-deserializemessage-a-console-log-in-the-server-triggers-it.html
- SyntaxError in stdio deserializeMessage (a console.log in the server triggers it) fix => https://laozhangzzz.github.io/agent-pitbook/q/syntaxerror-in-stdio-deserializemessage-a-console-log-in-the-server-triggers-it-fix.html
- SyntaxError in stdio deserializeMessage (a console.log in the server triggers it) root cause => https://laozhangzzz.github.io/agent-pitbook/q/syntaxerror-in-stdio-deserializemessage-a-console-log-in-the-server-triggers-it-root-cause.html
- Writing to stdout in a stdio MCP server corrupts the JSON-RPC stream => https://laozhangzzz.github.io/agent-pitbook/q/writing-to-stdout-in-a-stdio-mcp-server-corrupts-the-json-rpc-stream.html
- Writing to stdout in a stdio MCP server corrupts the JSON-RPC stream fix => https://laozhangzzz.github.io/agent-pitbook/q/writing-to-stdout-in-a-stdio-mcp-server-corrupts-the-json-rpc-stream-fix.html
- Writing to stdout in a stdio MCP server corrupts the JSON-RPC stream root cause => https://laozhangzzz.github.io/agent-pitbook/q/writing-to-stdout-in-a-stdio-mcp-server-corrupts-the-json-rpc-stream-root-cause.html
- how to fix Writing to stdout in a stdio MCP server corrupts the JSON-RPC stream => https://laozhangzzz.github.io/agent-pitbook/q/how-to-fix-writing-to-stdout-in-a-stdio-mcp-server-corrupts-the-json-rpc-stream.html
- JSON-RPC => https://laozhangzzz.github.io/agent-pitbook/q/json-rpc.html
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-stdio-stdout-logging-breaks-protocol.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-stdio-stdout-logging-breaks-protocol.md
Known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/29

Problem: client error SyntaxError: ... is not valid JSON inside deserializeMessage / JSON.parse
Root cause: In the stdio transport, stdout is the JSON-RPC channel.
Fix first: Remove or redirect all stdout writes in the server; use stderr.
Verify: Call a tool after moving logging to stderr.

Search queries this answer targets:

- SyntaxError in stdio deserializeMessage a console.log in the server triggers it
- SyntaxError in stdio deserializeMessage (a console.log in the server triggers it) fix
- SyntaxError in stdio deserializeMessage (a console.log in the server triggers it) root cause
- Writing to stdout in a stdio MCP server corrupts the JSON-RPC stream
- Writing to stdout in a stdio MCP server corrupts the JSON-RPC stream fix
- Writing to stdout in a stdio MCP server corrupts the JSON-RPC stream root cause
- how to fix Writing to stdout in a stdio MCP server corrupts the JSON-RPC stream
- JSON-RPC
- JSON-RPC fix
- mcp-server JSON-RPC
- mcp-server JSON-RPC fix
- typescript-sdk JSON-RPC
- typescript-sdk JSON-RPC fix
- python-sdk JSON-RPC
- python-sdk JSON-RPC fix
- client error SyntaxError: ... is not valid JSON inside deserializeMessage / JSON.parse

## When using Streamable HTTP transport, the oauth flow is not triggered when the server returns 401 resolved in a released Inspector version

Pit ID: mcp-streamable-http-client-no-oauth-on-401
Pit title: Streamable HTTP MCP client hangs on 401 instead of starting the OAuth flow
Status: verified
Tools: mcp-inspector, mcp-server
Query landing: https://laozhangzzz.github.io/agent-pitbook/q/when-using-streamable-http-transport-the-oauth-flow-is-not-triggered-when-the-server-returns-401-resolved-in-a-released.html
Query alias landings:
- When using Streamable HTTP transport, the oauth flow is not triggered when the server returns 401 resolved in a released Inspector version => https://laozhangzzz.github.io/agent-pitbook/q/when-using-streamable-http-transport-the-oauth-flow-is-not-triggered-when-the-server-returns-401-resolved-in-a-released.html
- When using Streamable HTTP transport, the oauth flow is not triggered when the server returns 401 (resolved in a released Inspector version) fix => https://laozhangzzz.github.io/agent-pitbook/q/when-using-streamable-http-transport-the-oauth-flow-is-not-triggered-when-the-server-returns-401-resolved-in-a-released-mcp-streamable-http-client-no-oauth-on-401.html
- When using Streamable HTTP transport, the oauth flow is not triggered when the server returns 401 (resolved in a released Inspector version) root cause => https://laozhangzzz.github.io/agent-pitbook/q/when-using-streamable-http-transport-the-oauth-flow-is-not-triggered-when-the-server-returns-401-resolved-in-a-released-mcp-streamable-http-client-no-oauth-on-401-2.html
- Streamable HTTP MCP client hangs on 401 instead of starting the OAuth flow => https://laozhangzzz.github.io/agent-pitbook/q/streamable-http-mcp-client-hangs-on-401-instead-of-starting-the-oauth-flow.html
- Streamable HTTP MCP client hangs on 401 instead of starting the OAuth flow fix => https://laozhangzzz.github.io/agent-pitbook/q/streamable-http-mcp-client-hangs-on-401-instead-of-starting-the-oauth-flow-fix.html
- Streamable HTTP MCP client hangs on 401 instead of starting the OAuth flow root cause => https://laozhangzzz.github.io/agent-pitbook/q/streamable-http-mcp-client-hangs-on-401-instead-of-starting-the-oauth-flow-root-cause.html
- how to fix Streamable HTTP MCP client hangs on 401 instead of starting the OAuth flow => https://laozhangzzz.github.io/agent-pitbook/q/how-to-fix-streamable-http-mcp-client-hangs-on-401-instead-of-starting-the-oauth-flow.html
- HTTP fix => https://laozhangzzz.github.io/agent-pitbook/q/http-fix-mcp-streamable-http-client-no-oauth-on-401.html
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-streamable-http-client-no-oauth-on-401.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-streamable-http-client-no-oauth-on-401.md
Known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/30

Problem: connecting to an OAuth-protected MCP server over Streamable HTTP hangs
Root cause: The SSE client transport detected a 401 and started authorization.
Fix first: Upgrade to a client/Inspector/SDK version where Streamable HTTP triggers OAuth on 401 (resolved in a released Inspector version).
Verify: Connect over Streamable HTTP to an OAuth-protected server on the fixed client.

Search queries this answer targets:

- When using Streamable HTTP transport, the oauth flow is not triggered when the server returns 401 resolved in a released Inspector version
- When using Streamable HTTP transport, the oauth flow is not triggered when the server returns 401 (resolved in a released Inspector version) fix
- When using Streamable HTTP transport, the oauth flow is not triggered when the server returns 401 (resolved in a released Inspector version) root cause
- Streamable HTTP MCP client hangs on 401 instead of starting the OAuth flow
- Streamable HTTP MCP client hangs on 401 instead of starting the OAuth flow fix
- Streamable HTTP MCP client hangs on 401 instead of starting the OAuth flow root cause
- how to fix Streamable HTTP MCP client hangs on 401 instead of starting the OAuth flow
- HTTP fix
- mcp-inspector HTTP
- mcp-inspector HTTP fix
- mcp-server HTTP
- mcp-server HTTP fix
- mcp-inspector HTTP 401
- mcp-inspector HTTP 401 fix
- mcp-server HTTP 401
- mcp-server HTTP 401 fix

## Time server fails under EDT timezone use --local-timezone with an IANA name

Pit ID: mcp-time-server-invalid-local-timezone
Pit title: mcp-server-time crashes when the local timezone is an abbreviation like EDT/PDT/CEST
Status: verified
Tools: mcp-server, claude-desktop
Query landing: https://laozhangzzz.github.io/agent-pitbook/q/time-server-fails-under-edt-timezone-use-local-timezone-with-an-iana-name.html
Query alias landings:
- Time server fails under EDT timezone use --local-timezone with an IANA name => https://laozhangzzz.github.io/agent-pitbook/q/time-server-fails-under-edt-timezone-use-local-timezone-with-an-iana-name.html
- Time server fails under EDT timezone (use --local-timezone with an IANA name) fix => https://laozhangzzz.github.io/agent-pitbook/q/time-server-fails-under-edt-timezone-use-local-timezone-with-an-iana-name-fix.html
- Time server fails under EDT timezone (use --local-timezone with an IANA name) root cause => https://laozhangzzz.github.io/agent-pitbook/q/time-server-fails-under-edt-timezone-use-local-timezone-with-an-iana-name-root-cause.html
- mcp-server-time crashes when the local timezone is an abbreviation like EDT/PDT/CEST => https://laozhangzzz.github.io/agent-pitbook/q/mcp-server-time-crashes-when-the-local-timezone-is-an-abbreviation-like-edt-pdt-cest.html
- mcp-server-time crashes when the local timezone is an abbreviation like EDT/PDT/CEST fix => https://laozhangzzz.github.io/agent-pitbook/q/mcp-server-time-crashes-when-the-local-timezone-is-an-abbreviation-like-edt-pdt-cest-fix.html
- mcp-server-time crashes when the local timezone is an abbreviation like EDT/PDT/CEST root cause => https://laozhangzzz.github.io/agent-pitbook/q/mcp-server-time-crashes-when-the-local-timezone-is-an-abbreviation-like-edt-pdt-cest-root-cause.html
- how to fix mcp-server-time crashes when the local timezone is an abbreviation like EDT/PDT/CEST => https://laozhangzzz.github.io/agent-pitbook/q/how-to-fix-mcp-server-time-crashes-when-the-local-timezone-is-an-abbreviation-like-edt-pdt-cest.html
- EDT/PDT/CEST => https://laozhangzzz.github.io/agent-pitbook/q/edt-pdt-cest.html
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-time-server-invalid-local-timezone.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-time-server-invalid-local-timezone.md
Known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/31

Problem: uvx mcp-server-time traceback through zoneinfo/_common.py load_tzdata failing to load the timezone
Root cause: The server resolves the local timezone, but the platform reports a non-IANA abbreviation (e.g. EDT).
Fix first: Pass an explicit IANA timezone with --local-timezone.
Verify: Start the server with an explicit IANA timezone.

Search queries this answer targets:

- Time server fails under EDT timezone use --local-timezone with an IANA name
- Time server fails under EDT timezone (use --local-timezone with an IANA name) fix
- Time server fails under EDT timezone (use --local-timezone with an IANA name) root cause
- mcp-server-time crashes when the local timezone is an abbreviation like EDT/PDT/CEST
- mcp-server-time crashes when the local timezone is an abbreviation like EDT/PDT/CEST fix
- mcp-server-time crashes when the local timezone is an abbreviation like EDT/PDT/CEST root cause
- how to fix mcp-server-time crashes when the local timezone is an abbreviation like EDT/PDT/CEST
- EDT/PDT/CEST
- EDT/PDT/CEST fix
- mcp-server EDT/PDT/CEST
- mcp-server EDT/PDT/CEST fix
- claude-desktop EDT/PDT/CEST
- claude-desktop EDT/PDT/CEST fix
- -IANA
- -IANA fix
- mcp-server -IANA

## mcp client times out after 60 seconds (ignoring timeout option); comments confirm callTool request options and resetTimeoutOnProgress

Pit ID: mcp-ts-client-default-60s-request-timeout
Pit title: MCP TypeScript client times out long tool calls after 60s (-32001) unless you reset on progress
Status: verified
Tools: mcp-server, typescript-sdk
Query landing: https://laozhangzzz.github.io/agent-pitbook/q/mcp-client-times-out-after-60-seconds-ignoring-timeout-option-comments-confirm-calltool-request-options-and-resettimeout.html
Query alias landings:
- mcp client times out after 60 seconds (ignoring timeout option); comments confirm callTool request options and resetTimeoutOnProgress => https://laozhangzzz.github.io/agent-pitbook/q/mcp-client-times-out-after-60-seconds-ignoring-timeout-option-comments-confirm-calltool-request-options-and-resettimeout.html
- mcp client times out after 60 seconds (ignoring timeout option); comments confirm callTool request options and resetTimeoutOnProgress fix => https://laozhangzzz.github.io/agent-pitbook/q/mcp-client-times-out-after-60-seconds-ignoring-timeout-option-comments-confirm-calltool-request-options-and-resettimeout-mcp-ts-client-default-60s-request-timeout.html
- mcp client times out after 60 seconds (ignoring timeout option); comments confirm callTool request options and resetTimeoutOnProgress root cause => https://laozhangzzz.github.io/agent-pitbook/q/mcp-client-times-out-after-60-seconds-ignoring-timeout-option-comments-confirm-calltool-request-options-and-resettimeout-mcp-ts-client-default-60s-request-timeout-2.html
- MCP TypeScript client times out long tool calls after 60s (-32001) unless you reset on progress => https://laozhangzzz.github.io/agent-pitbook/q/mcp-typescript-client-times-out-long-tool-calls-after-60s-32001-unless-you-reset-on-progress.html
- MCP TypeScript client times out long tool calls after 60s (-32001) unless you reset on progress fix => https://laozhangzzz.github.io/agent-pitbook/q/mcp-typescript-client-times-out-long-tool-calls-after-60s-32001-unless-you-reset-on-progress-fix.html
- MCP TypeScript client times out long tool calls after 60s (-32001) unless you reset on progress root cause => https://laozhangzzz.github.io/agent-pitbook/q/mcp-typescript-client-times-out-long-tool-calls-after-60s-32001-unless-you-reset-on-progress-root-cause.html
- how to fix MCP TypeScript client times out long tool calls after 60s (-32001) unless you reset on progress => https://laozhangzzz.github.io/agent-pitbook/q/how-to-fix-mcp-typescript-client-times-out-long-tool-calls-after-60s-32001-unless-you-reset-on-progress.html
- MCP error -32001: Request timed out even with server progress => https://laozhangzzz.github.io/agent-pitbook/q/mcp-error-32001-request-timed-out-even-with-server-progress.html
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-ts-client-default-60s-request-timeout.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-ts-client-default-60s-request-timeout.md
Known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/32

Problem: McpError: MCP error -32001: Request timed out with data: { timeout: 60000 }
Root cause: The default per-request timeout is 60000 ms.
Fix first: Pass request options as the third argument to callTool with a larger timeout and resetTimeoutOnProgress: true.
Verify: Run a tool call that exceeds 60 seconds with the options set.

Search queries this answer targets:

- mcp client times out after 60 seconds (ignoring timeout option); comments confirm callTool request options and resetTimeoutOnProgress
- mcp client times out after 60 seconds (ignoring timeout option); comments confirm callTool request options and resetTimeoutOnProgress fix
- mcp client times out after 60 seconds (ignoring timeout option); comments confirm callTool request options and resetTimeoutOnProgress root cause
- MCP TypeScript client times out long tool calls after 60s (-32001) unless you reset on progress
- MCP TypeScript client times out long tool calls after 60s (-32001) unless you reset on progress fix
- MCP TypeScript client times out long tool calls after 60s (-32001) unless you reset on progress root cause
- how to fix MCP TypeScript client times out long tool calls after 60s (-32001) unless you reset on progress
- MCP error -32001: Request timed out even with server progress
- MCP error -32001: Request timed out even with server progress fix
- mcp-server MCP error -32001: Request timed out even with server progress
- mcp-server MCP error -32001: Request timed out even with server progress fix
- typescript-sdk MCP error -32001: Request timed out even with server progress
- typescript-sdk MCP error -32001: Request timed out even with server progress fix
- MCP error -32001: Request timed out with data: { timeout: 60000 }
- MCP error -32001: Request timed out with data: { timeout: 60000 } fix
- mcp-server MCP error -32001: Request timed out with data: { timeout: 60000 }

## @modelcontextprotocol/sdk fails in CommonJS projects due to incompatible ESM-only dependency pkce-challenge

Pit ID: mcp-ts-sdk-commonjs-esm-pkce-challenge
Pit title: MCP TypeScript SDK crashes in CommonJS projects with ERR_REQUIRE_ESM (pkce-challenge)
Status: verified
Tools: mcp-server, typescript-sdk
Query landing: https://laozhangzzz.github.io/agent-pitbook/q/modelcontextprotocol-sdk-fails-in-commonjs-projects-due-to-incompatible-esm-only-dependency-pkce-challenge.html
Query alias landings:
- @modelcontextprotocol/sdk fails in CommonJS projects due to incompatible ESM-only dependency pkce-challenge => https://laozhangzzz.github.io/agent-pitbook/q/modelcontextprotocol-sdk-fails-in-commonjs-projects-due-to-incompatible-esm-only-dependency-pkce-challenge.html
- @modelcontextprotocol/sdk fails in CommonJS projects due to incompatible ESM-only dependency (pkce-challenge) fix => https://laozhangzzz.github.io/agent-pitbook/q/modelcontextprotocol-sdk-fails-in-commonjs-projects-due-to-incompatible-esm-only-dependency-pkce-challenge-fix.html
- @modelcontextprotocol/sdk fails in CommonJS projects due to incompatible ESM-only dependency (pkce-challenge) root cause => https://laozhangzzz.github.io/agent-pitbook/q/modelcontextprotocol-sdk-fails-in-commonjs-projects-due-to-incompatible-esm-only-dependency-pkce-challenge-root-cause.html
- MCP TypeScript SDK crashes in CommonJS projects with ERR_REQUIRE_ESM pkce-challenge => https://laozhangzzz.github.io/agent-pitbook/q/mcp-typescript-sdk-crashes-in-commonjs-projects-with-err-require-esm-pkce-challenge.html
- MCP TypeScript SDK crashes in CommonJS projects with ERR_REQUIRE_ESM (pkce-challenge) fix => https://laozhangzzz.github.io/agent-pitbook/q/mcp-typescript-sdk-crashes-in-commonjs-projects-with-err-require-esm-pkce-challenge-fix.html
- MCP TypeScript SDK crashes in CommonJS projects with ERR_REQUIRE_ESM (pkce-challenge) root cause => https://laozhangzzz.github.io/agent-pitbook/q/mcp-typescript-sdk-crashes-in-commonjs-projects-with-err-require-esm-pkce-challenge-root-cause.html
- how to fix MCP TypeScript SDK crashes in CommonJS projects with ERR_REQUIRE_ESM pkce-challenge => https://laozhangzzz.github.io/agent-pitbook/q/how-to-fix-mcp-typescript-sdk-crashes-in-commonjs-projects-with-err-require-esm-pkce-challenge.html
- ERR_REQUIRE_ESM => https://laozhangzzz.github.io/agent-pitbook/q/err-require-esm.html
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-ts-sdk-commonjs-esm-pkce-challenge.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-ts-sdk-commonjs-esm-pkce-challenge.md
Known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/33

Problem: runtime crash on MCP client init: ERR_REQUIRE_ESM: require() of ES Module pkce-challenge is not supported. Use dynamic import() instead
Root cause: pkce-challenge shipped as ESM-only.
Fix first: Upgrade @modelcontextprotocol/sdk to a version that lazily import()s pkce-challenge.
Verify: Start the CommonJS app and initialize the MCP client.

Search queries this answer targets:

- @modelcontextprotocol/sdk fails in CommonJS projects due to incompatible ESM-only dependency pkce-challenge
- @modelcontextprotocol/sdk fails in CommonJS projects due to incompatible ESM-only dependency (pkce-challenge) fix
- @modelcontextprotocol/sdk fails in CommonJS projects due to incompatible ESM-only dependency (pkce-challenge) root cause
- MCP TypeScript SDK crashes in CommonJS projects with ERR_REQUIRE_ESM pkce-challenge
- MCP TypeScript SDK crashes in CommonJS projects with ERR_REQUIRE_ESM (pkce-challenge) fix
- MCP TypeScript SDK crashes in CommonJS projects with ERR_REQUIRE_ESM (pkce-challenge) root cause
- how to fix MCP TypeScript SDK crashes in CommonJS projects with ERR_REQUIRE_ESM pkce-challenge
- ERR_REQUIRE_ESM
- ERR_REQUIRE_ESM fix
- mcp-server ERR_REQUIRE_ESM
- mcp-server ERR_REQUIRE_ESM fix
- typescript-sdk ERR_REQUIRE_ESM
- typescript-sdk ERR_REQUIRE_ESM fix
- runtime crash on MCP client init: ERR_REQUIRE_ESM: require() of ES Module pkce-challenge is not supported. Use dynamic import() instead
- how to fix runtime crash on MCP client init: ERR_REQUIRE_ESM: require() of ES Module pkce-challenge is not supported. Use dynamic import() instead
- runtime crash on MCP client init: ERR_REQUIRE_ESM: require() of ES Module pkce-challenge is not supported. Use dynamic import() instead root cause

## Elicitation feature fails on Cloudflare Workers due to AJV code generation EvalError

Pit ID: mcp-ts-sdk-edge-runtime-ajv-codegen-evalerror
Pit title: MCP TS SDK validation fails on Cloudflare Workers with EvalError (AJV code generation)
Status: candidate
Tools: mcp-server, typescript-sdk
Query landing: https://laozhangzzz.github.io/agent-pitbook/q/elicitation-feature-fails-on-cloudflare-workers-due-to-ajv-code-generation-evalerror.html
Query alias landings:
- Elicitation feature fails on Cloudflare Workers due to AJV code generation EvalError => https://laozhangzzz.github.io/agent-pitbook/q/elicitation-feature-fails-on-cloudflare-workers-due-to-ajv-code-generation-evalerror.html
- Elicitation feature fails on Cloudflare Workers due to AJV code generation (EvalError) fix => https://laozhangzzz.github.io/agent-pitbook/q/elicitation-feature-fails-on-cloudflare-workers-due-to-ajv-code-generation-evalerror-fix.html
- Elicitation feature fails on Cloudflare Workers due to AJV code generation (EvalError) root cause => https://laozhangzzz.github.io/agent-pitbook/q/elicitation-feature-fails-on-cloudflare-workers-due-to-ajv-code-generation-evalerror-root-cause.html
- MCP TS SDK validation fails on Cloudflare Workers with EvalError AJV code generation => https://laozhangzzz.github.io/agent-pitbook/q/mcp-ts-sdk-validation-fails-on-cloudflare-workers-with-evalerror-ajv-code-generation.html
- MCP TS SDK validation fails on Cloudflare Workers with EvalError (AJV code generation) fix => https://laozhangzzz.github.io/agent-pitbook/q/mcp-ts-sdk-validation-fails-on-cloudflare-workers-with-evalerror-ajv-code-generation-fix.html
- MCP TS SDK validation fails on Cloudflare Workers with EvalError (AJV code generation) root cause => https://laozhangzzz.github.io/agent-pitbook/q/mcp-ts-sdk-validation-fails-on-cloudflare-workers-with-evalerror-ajv-code-generation-root-cause.html
- how to fix MCP TS SDK validation fails on Cloudflare Workers with EvalError AJV code generation => https://laozhangzzz.github.io/agent-pitbook/q/how-to-fix-mcp-ts-sdk-validation-fails-on-cloudflare-workers-with-evalerror-ajv-code-generation.html
- EvalError: Code generation from strings disallowed because AJV v6 compiles schemas with new Function, which edge runtimes forbid => https://laozhangzzz.github.io/agent-pitbook/q/evalerror-code-generation-from-strings-disallowed-because-ajv-v6-compiles-schemas-with-new-function-which-edge-runtimes.html
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-ts-sdk-edge-runtime-ajv-codegen-evalerror.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-ts-sdk-edge-runtime-ajv-codegen-evalerror.md
Known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/34

Problem: EvalError: Code generation from strings disallowed for this context, with a stack through new Function and Ajv.localCompile
Root cause: The SDK validates JSON Schema with AJV v6, which generates validator code at runtime via new Function.
Fix first: On Cloudflare, use the McpAgent integration that added elicitation support; call elicitation on the McpAgent class, not mcpServer.server.
Verify: Run the validation/elicitation path on the edge runtime.

Search queries this answer targets:

- Elicitation feature fails on Cloudflare Workers due to AJV code generation EvalError
- Elicitation feature fails on Cloudflare Workers due to AJV code generation (EvalError) fix
- Elicitation feature fails on Cloudflare Workers due to AJV code generation (EvalError) root cause
- MCP TS SDK validation fails on Cloudflare Workers with EvalError AJV code generation
- MCP TS SDK validation fails on Cloudflare Workers with EvalError (AJV code generation) fix
- MCP TS SDK validation fails on Cloudflare Workers with EvalError (AJV code generation) root cause
- how to fix MCP TS SDK validation fails on Cloudflare Workers with EvalError AJV code generation
- EvalError: Code generation from strings disallowed because AJV v6 compiles schemas with new Function, which edge runtimes forbid
- EvalError: Code generation from strings disallowed because AJV v6 compiles schemas with new Function, which edge runtimes forbid fix
- mcp-server EvalError: Code generation from strings disallowed because AJV v6 compiles schemas with new Function, which edge runtimes forbid
- mcp-server EvalError: Code generation from strings disallowed because AJV v6 compiles schemas with new Function, which edge runtimes forbid fix
- typescript-sdk EvalError: Code generation from strings disallowed because AJV v6 compiles schemas with new Function, which edge runtimes forbid
- typescript-sdk EvalError: Code generation from strings disallowed because AJV v6 compiles schemas with new Function, which edge runtimes forbid fix
- EvalError: Code generation from strings disallowed for this context, with a stack through new Function and Ajv
- EvalError: Code generation from strings disallowed for this context, with a stack through new Function and Ajv fix
- mcp-server EvalError: Code generation from strings disallowed for this context, with a stack through new Function and Ajv

## Type instantiation is excessively deep when importing ToolCallback Zod author recommends single Zod version + modern moduleResolution; fixed in Zod 4.1.6

Pit ID: mcp-ts-sdk-type-instantiation-excessively-deep
Pit title: MCP TS SDK: 'Type instantiation is excessively deep' (ts2589) freezes the IDE
Status: verified
Tools: mcp-server, typescript-sdk
Query landing: https://laozhangzzz.github.io/agent-pitbook/q/type-instantiation-is-excessively-deep-when-importing-toolcallback-zod-author-recommends-single-zod-version-modern-modul.html
Query alias landings:
- Type instantiation is excessively deep when importing ToolCallback Zod author recommends single Zod version + modern moduleResolution; fixed in Zod 4.1.6 => https://laozhangzzz.github.io/agent-pitbook/q/type-instantiation-is-excessively-deep-when-importing-toolcallback-zod-author-recommends-single-zod-version-modern-modul.html
- Type instantiation is excessively deep when importing ToolCallback (Zod author recommends single Zod version + modern moduleResolution; fixed in Zod 4.1.6) fix => https://laozhangzzz.github.io/agent-pitbook/q/type-instantiation-is-excessively-deep-when-importing-toolcallback-zod-author-recommends-single-zod-version-modern-modul-mcp-ts-sdk-type-instantiation-excessively-deep.html
- Type instantiation is excessively deep when importing ToolCallback (Zod author recommends single Zod version + modern moduleResolution; fixed in Zod 4.1.6) root cause => https://laozhangzzz.github.io/agent-pitbook/q/type-instantiation-is-excessively-deep-when-importing-toolcallback-zod-author-recommends-single-zod-version-modern-modul-mcp-ts-sdk-type-instantiation-excessively-deep-2.html
- MCP TS SDK: 'Type instantiation is excessively deep' (ts2589) freezes the IDE => https://laozhangzzz.github.io/agent-pitbook/q/mcp-ts-sdk-type-instantiation-is-excessively-deep-ts2589-freezes-the-ide.html
- MCP TS SDK: 'Type instantiation is excessively deep' (ts2589) freezes the IDE fix => https://laozhangzzz.github.io/agent-pitbook/q/mcp-ts-sdk-type-instantiation-is-excessively-deep-ts2589-freezes-the-ide-fix.html
- MCP TS SDK: 'Type instantiation is excessively deep' (ts2589) freezes the IDE root cause => https://laozhangzzz.github.io/agent-pitbook/q/mcp-ts-sdk-type-instantiation-is-excessively-deep-ts2589-freezes-the-ide-root-cause.html
- how to fix MCP TS SDK: 'Type instantiation is excessively deep' (ts2589) freezes the IDE => https://laozhangzzz.github.io/agent-pitbook/q/how-to-fix-mcp-ts-sdk-type-instantiation-is-excessively-deep-ts2589-freezes-the-ide.html
- Type instantiation is excessively deep and possibly infinite.ts(2589) on lines referencing SDK tool types => https://laozhangzzz.github.io/agent-pitbook/q/type-instantiation-is-excessively-deep-and-possibly-infinite-ts-2589-on-lines-referencing-sdk-tool-types.html
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-ts-sdk-type-instantiation-excessively-deep.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-ts-sdk-type-instantiation-excessively-deep.md
Known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/35

Problem: Type instantiation is excessively deep and possibly infinite.ts(2589) on lines referencing SDK tool types
Root cause: Deep generic instantiation in Zod's types as consumed by the SDK's tool typings.
Fix first: Ensure a single Zod version is installed; duplicates are a common trigger.
Verify: Reopen the project and reference SDK tool types after the change.

Search queries this answer targets:

- Type instantiation is excessively deep when importing ToolCallback Zod author recommends single Zod version + modern moduleResolution; fixed in Zod 4.1.6
- Type instantiation is excessively deep when importing ToolCallback (Zod author recommends single Zod version + modern moduleResolution; fixed in Zod 4.1.6) fix
- Type instantiation is excessively deep when importing ToolCallback (Zod author recommends single Zod version + modern moduleResolution; fixed in Zod 4.1.6) root cause
- MCP TS SDK: 'Type instantiation is excessively deep' (ts2589) freezes the IDE
- MCP TS SDK: 'Type instantiation is excessively deep' (ts2589) freezes the IDE fix
- MCP TS SDK: 'Type instantiation is excessively deep' (ts2589) freezes the IDE root cause
- how to fix MCP TS SDK: 'Type instantiation is excessively deep' (ts2589) freezes the IDE
- Type instantiation is excessively deep and possibly infinite.ts(2589) on lines referencing SDK tool types
- how to fix Type instantiation is excessively deep and possibly infinite.ts(2589) on lines referencing SDK tool types
- Type instantiation is excessively deep and possibly infinite.ts(2589) on lines referencing SDK tool types root cause
- mcp-server Type instantiation is excessively deep and possibly infinite.ts(2589) on lines referencing SDK tool types
- mcp-server Type instantiation is excessively deep and possibly infinite.ts(2589) on lines referencing SDK tool types fix
- typescript-sdk Type instantiation is excessively deep and possibly infinite.ts(2589) on lines referencing SDK tool types
- typescript-sdk Type instantiation is excessively deep and possibly infinite.ts(2589) on lines referencing SDK tool types fix
- the TypeScript server in Cursor/VS Code hangs and saving files stalls
- how to fix the TypeScript server in Cursor/VS Code hangs and saving files stalls

## MCP SDK v1.17.5 Incompatible with Zod v4 - Breaking Changes

Pit ID: mcp-ts-sdk-zod-v4-incompatible
Pit title: MCP TypeScript SDK breaks with Zod v4: w._parse is not a function
Status: verified
Tools: mcp-server, typescript-sdk
Query landing: https://laozhangzzz.github.io/agent-pitbook/q/mcp-sdk-v1-17-5-incompatible-with-zod-v4-breaking-changes.html
Query alias landings:
- MCP SDK v1.17.5 Incompatible with Zod v4 - Breaking Changes => https://laozhangzzz.github.io/agent-pitbook/q/mcp-sdk-v1-17-5-incompatible-with-zod-v4-breaking-changes.html
- MCP SDK v1.17.5 Incompatible with Zod v4 - Breaking Changes fix => https://laozhangzzz.github.io/agent-pitbook/q/mcp-sdk-v1-17-5-incompatible-with-zod-v4-breaking-changes-fix.html
- MCP SDK v1.17.5 Incompatible with Zod v4 - Breaking Changes root cause => https://laozhangzzz.github.io/agent-pitbook/q/mcp-sdk-v1-17-5-incompatible-with-zod-v4-breaking-changes-root-cause.html
- MCP TypeScript SDK breaks with Zod v4: w._parse is not a function => https://laozhangzzz.github.io/agent-pitbook/q/mcp-typescript-sdk-breaks-with-zod-v4-w-parse-is-not-a-function.html
- MCP TypeScript SDK breaks with Zod v4: w._parse is not a function fix => https://laozhangzzz.github.io/agent-pitbook/q/mcp-typescript-sdk-breaks-with-zod-v4-w-parse-is-not-a-function-fix.html
- MCP TypeScript SDK breaks with Zod v4: w._parse is not a function root cause => https://laozhangzzz.github.io/agent-pitbook/q/mcp-typescript-sdk-breaks-with-zod-v4-w-parse-is-not-a-function-root-cause.html
- how to fix MCP TypeScript SDK breaks with Zod v4: w._parse is not a function => https://laozhangzzz.github.io/agent-pitbook/q/how-to-fix-mcp-typescript-sdk-breaks-with-zod-v4-w-parse-is-not-a-function.html
- w._parse is not a function => https://laozhangzzz.github.io/agent-pitbook/q/w-parse-is-not-a-function.html
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-ts-sdk-zod-v4-incompatible.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-ts-sdk-zod-v4-incompatible.md
Known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/36

Problem: tool execution returns {"code":-32603,"message":"w._parse is not a function..."}
Root cause: MCP SDK versions up to ~1.17.5 declare zod ^3.x and call Zod internal API (_def, _parse).
Fix first: Quick unblock: pin Zod v3 and ensure a single Zod version resolves.
Verify: Check the resolved Zod version and re-run a tool call.

Search queries this answer targets:

- MCP SDK v1.17.5 Incompatible with Zod v4 - Breaking Changes
- MCP SDK v1.17.5 Incompatible with Zod v4 - Breaking Changes fix
- MCP SDK v1.17.5 Incompatible with Zod v4 - Breaking Changes root cause
- MCP TypeScript SDK breaks with Zod v4: w._parse is not a function
- MCP TypeScript SDK breaks with Zod v4: w._parse is not a function fix
- MCP TypeScript SDK breaks with Zod v4: w._parse is not a function root cause
- how to fix MCP TypeScript SDK breaks with Zod v4: w._parse is not a function
- w._parse is not a function
- w._parse is not a function... fix
- mcp-server w._parse is not a function
- mcp-server w._parse is not a function... fix
- typescript-sdk w._parse is not a function
- typescript-sdk w._parse is not a function... fix
- tool execution returns {"code":-32603,"message":"w._parse is not a function..."}
- how to fix tool execution returns {"code":-32603,"message":"w._parse is not a function..."}
- tool execution returns {"code":-32603,"message":"w._parse is not a function..."} root cause

## Windows npx launch failure with garbled 'not recognized' error -32000

Pit ID: mcp-windows-npx-requires-cmd-c-wrapper
Pit title: On Windows an MCP server launched with npx needs a cmd /c wrapper
Status: verified
Tools: claude-desktop, cursor, cline, mcp-server
Query landing: https://laozhangzzz.github.io/agent-pitbook/q/windows-npx-launch-failure-with-garbled-not-recognized-error-32000.html
Query alias landings:
- Windows npx launch failure with garbled 'not recognized' error -32000 => https://laozhangzzz.github.io/agent-pitbook/q/windows-npx-launch-failure-with-garbled-not-recognized-error-32000.html
- Windows npx launch failure with garbled 'not recognized' error (-32000) fix => https://laozhangzzz.github.io/agent-pitbook/q/windows-npx-launch-failure-with-garbled-not-recognized-error-32000-fix.html
- Windows npx launch failure with garbled 'not recognized' error (-32000) root cause => https://laozhangzzz.github.io/agent-pitbook/q/windows-npx-launch-failure-with-garbled-not-recognized-error-32000-root-cause.html
- comment noting Windows/WSL needs 'cmd /c' before 'npx -y' and matching npm versions => https://laozhangzzz.github.io/agent-pitbook/q/comment-noting-windows-wsl-needs-cmd-c-before-npx-y-and-matching-npm-versions.html
- comment noting Windows/WSL needs 'cmd /c' before 'npx -y' and matching npm versions fix => https://laozhangzzz.github.io/agent-pitbook/q/comment-noting-windows-wsl-needs-cmd-c-before-npx-y-and-matching-npm-versions-fix.html
- comment noting Windows/WSL needs 'cmd /c' before 'npx -y' and matching npm versions root cause => https://laozhangzzz.github.io/agent-pitbook/q/comment-noting-windows-wsl-needs-cmd-c-before-npx-y-and-matching-npm-versions-root-cause.html
- On Windows an MCP server launched with npx needs a cmd /c wrapper => https://laozhangzzz.github.io/agent-pitbook/q/on-windows-an-mcp-server-launched-with-npx-needs-a-cmd-c-wrapper.html
- On Windows an MCP server launched with npx needs a cmd /c wrapper fix => https://laozhangzzz.github.io/agent-pitbook/q/on-windows-an-mcp-server-launched-with-npx-needs-a-cmd-c-wrapper-fix.html
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-windows-npx-requires-cmd-c-wrapper.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-windows-npx-requires-cmd-c-wrapper.md
Known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/37

Problem: Windows only: the MCP server will not start
Root cause: On Windows npx and npm are npx.cmd / npm.cmd batch files, not executables.
Fix first: Launch through cmd: set command to 'cmd' and args to ['/c','npx','-y','<package>', ...].
Verify: Relaunch after wrapping with cmd /c.

Search queries this answer targets:

- Windows npx launch failure with garbled 'not recognized' error -32000
- Windows npx launch failure with garbled 'not recognized' error (-32000) fix
- Windows npx launch failure with garbled 'not recognized' error (-32000) root cause
- comment noting Windows/WSL needs 'cmd /c' before 'npx -y' and matching npm versions
- comment noting Windows/WSL needs 'cmd /c' before 'npx -y' and matching npm versions fix
- comment noting Windows/WSL needs 'cmd /c' before 'npx -y' and matching npm versions root cause
- On Windows an MCP server launched with npx needs a cmd /c wrapper
- On Windows an MCP server launched with npx needs a cmd /c wrapper fix
- On Windows an MCP server launched with npx needs a cmd /c wrapper root cause
- how to fix On Windows an MCP server launched with npx needs a cmd /c wrapper
- ENOENT fix
- claude-desktop ENOENT
- claude-desktop ENOENT fix
- cursor ENOENT
- cursor ENOENT fix
- cline ENOENT

## PortAudio stream stop()/close() on a hotkey-callback thread can freeze the global hotkey listener

Pit ID: portaudio-stream-close-blocks-hotkey-callback-thread
Pit title: PortAudio stream stop()/close() on a hotkey-callback thread can freeze the global hotkey listener
Status: verified
Tools: portaudio, pynput, voice-to-claude
Query landing: https://laozhangzzz.github.io/agent-pitbook/q/portaudio-stream-stop-close-on-a-hotkey-callback-thread-can-freeze-the-global-hotkey-listener.html
Query alias landings:
- PortAudio stream stop()/close() on a hotkey-callback thread can freeze the global hotkey listener => https://laozhangzzz.github.io/agent-pitbook/q/portaudio-stream-stop-close-on-a-hotkey-callback-thread-can-freeze-the-global-hotkey-listener.html
- PortAudio stream stop()/close() on a hotkey-callback thread can freeze the global hotkey listener fix => https://laozhangzzz.github.io/agent-pitbook/q/portaudio-stream-stop-close-on-a-hotkey-callback-thread-can-freeze-the-global-hotkey-listener-fix.html
- PortAudio stream stop()/close() on a hotkey-callback thread can freeze the global hotkey listener root cause => https://laozhangzzz.github.io/agent-pitbook/q/portaudio-stream-stop-close-on-a-hotkey-callback-thread-can-freeze-the-global-hotkey-listener-root-cause.html
- how to fix PortAudio stream stop()/close() on a hotkey-callback thread can freeze the global hotkey listener => https://laozhangzzz.github.io/agent-pitbook/q/how-to-fix-portaudio-stream-stop-close-on-a-hotkey-callback-thread-can-freeze-the-global-hotkey-listener.html
- a push-to-talk dictation daemon intermittently goes unresponsive after switching windows and dictating => https://laozhangzzz.github.io/agent-pitbook/q/a-push-to-talk-dictation-daemon-intermittently-goes-unresponsive-after-switching-windows-and-dictating.html
- how to fix a push-to-talk dictation daemon intermittently goes unresponsive after switching windows and dictating => https://laozhangzzz.github.io/agent-pitbook/q/how-to-fix-a-push-to-talk-dictation-daemon-intermittently-goes-unresponsive-after-switching-windows-and-dictating.html
- a push-to-talk dictation daemon intermittently goes unresponsive after switching windows and dictating root cause => https://laozhangzzz.github.io/agent-pitbook/q/a-push-to-talk-dictation-daemon-intermittently-goes-unresponsive-after-switching-windows-and-dictating-root-cause.html
- portaudio a push-to-talk dictation daemon intermittently goes unresponsive after switching windows and dictating => https://laozhangzzz.github.io/agent-pitbook/q/portaudio-a-push-to-talk-dictation-daemon-intermittently-goes-unresponsive-after-switching-windows-and-dictating.html
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/portaudio-stream-close-blocks-hotkey-callback-thread.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/portaudio-stream-close-blocks-hotkey-callback-thread.md
Known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/40

Problem: a push-to-talk dictation daemon intermittently goes unresponsive after switching windows and dictating
Root cause: stop()/close() of a PortAudio stream on a flaky/display-connected device can block for a long time.
Fix first: Move recorder.stop() (the PortAudio stream.stop()/close() calls) AND all downstream processing off the pynput key-release callback thread into a background thread.
Verify: Use the daemon heavily across multiple windows after the change.

Search queries this answer targets:

- PortAudio stream stop()/close() on a hotkey-callback thread can freeze the global hotkey listener
- PortAudio stream stop()/close() on a hotkey-callback thread can freeze the global hotkey listener fix
- PortAudio stream stop()/close() on a hotkey-callback thread can freeze the global hotkey listener root cause
- how to fix PortAudio stream stop()/close() on a hotkey-callback thread can freeze the global hotkey listener
- a push-to-talk dictation daemon intermittently goes unresponsive after switching windows and dictating
- how to fix a push-to-talk dictation daemon intermittently goes unresponsive after switching windows and dictating
- a push-to-talk dictation daemon intermittently goes unresponsive after switching windows and dictating root cause
- portaudio a push-to-talk dictation daemon intermittently goes unresponsive after switching windows and dictating
- portaudio a push-to-talk dictation daemon intermittently goes unresponsive after switching windows and dictating fix
- pynput a push-to-talk dictation daemon intermittently goes unresponsive after switching windows and dictating
- pynput a push-to-talk dictation daemon intermittently goes unresponsive after switching windows and dictating fix
- voice-to-claude a push-to-talk dictation daemon intermittently goes unresponsive after switching windows and dictating
- voice-to-claude a push-to-talk dictation daemon intermittently goes unresponsive after switching windows and dictating fix
- the log is stuck at 'Recording stopped, processing...' with no following 'Audio duration' line
- how to fix the log is stuck at 'Recording stopped, processing...' with no following 'Audio duration' line
- the log is stuck at 'Recording stopped, processing...' with no following 'Audio duration' line root cause

## pynput Controller.type() scrambles mixed Chinese+English text on macOS; use clipboard paste

Pit ID: pynput-mixed-cjk-ascii-type-out-of-order-macos
Pit title: pynput Controller.type() scrambles mixed Chinese+English text on macOS; use clipboard paste
Status: verified
Tools: pynput, voice-to-claude
Query landing: https://laozhangzzz.github.io/agent-pitbook/q/pynput-controller-type-scrambles-mixed-chinese-english-text-on-macos-use-clipboard-paste.html
Query alias landings:
- pynput Controller.type() scrambles mixed Chinese+English text on macOS; use clipboard paste => https://laozhangzzz.github.io/agent-pitbook/q/pynput-controller-type-scrambles-mixed-chinese-english-text-on-macos-use-clipboard-paste.html
- pynput Controller.type() scrambles mixed Chinese+English text on macOS; use clipboard paste fix => https://laozhangzzz.github.io/agent-pitbook/q/pynput-controller-type-scrambles-mixed-chinese-english-text-on-macos-use-clipboard-paste-fix.html
- pynput Controller.type() scrambles mixed Chinese+English text on macOS; use clipboard paste root cause => https://laozhangzzz.github.io/agent-pitbook/q/pynput-controller-type-scrambles-mixed-chinese-english-text-on-macos-use-clipboard-paste-root-cause.html
- how to fix pynput Controller.type() scrambles mixed Chinese+English text on macOS; use clipboard paste => https://laozhangzzz.github.io/agent-pitbook/q/how-to-fix-pynput-controller-type-scrambles-mixed-chinese-english-text-on-macos-use-clipboard-paste.html
- ASCII fix => https://laozhangzzz.github.io/agent-pitbook/q/ascii-fix.html
- pynput ASCII => https://laozhangzzz.github.io/agent-pitbook/q/pynput-ascii.html
- pynput ASCII fix => https://laozhangzzz.github.io/agent-pitbook/q/pynput-ascii-fix.html
- voice-to-claude ASCII => https://laozhangzzz.github.io/agent-pitbook/q/voice-to-claude-ascii.html
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/pynput-mixed-cjk-ascii-type-out-of-order-macos.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/pynput-mixed-cjk-ascii-type-out-of-order-macos.md
Known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/41

Problem: injecting '打开Claude Code，然后commit一下。' yields '打开ClaudeC，然后一下。odecomit' — reordered, English fragments shoved to the end, some CJK dropped
Root cause: On macOS pynput types CJK characters via synthesized Unicode events and ASCII via key events.
Fix first: Switch text injection from per-character keyboard.type() to clipboard paste: copy the full string via pbcopy, then simulate Cmd+V.
Verify: Inject the same mixed Chinese+English sentence after the change.

Search queries this answer targets:

- pynput Controller.type() scrambles mixed Chinese+English text on macOS; use clipboard paste
- pynput Controller.type() scrambles mixed Chinese+English text on macOS; use clipboard paste fix
- pynput Controller.type() scrambles mixed Chinese+English text on macOS; use clipboard paste root cause
- how to fix pynput Controller.type() scrambles mixed Chinese+English text on macOS; use clipboard paste
- ASCII fix
- pynput ASCII
- pynput ASCII fix
- voice-to-claude ASCII
- voice-to-claude ASCII fix
- injecting '打开Claude Code，然后commit一下。' yields '打开ClaudeC，然后一下。odecomit' — reordered, English fragments shoved to the end, some CJK dropped
- how to fix injecting '打开Claude Code，然后commit一下。' yields '打开ClaudeC，然后一下。odecomit' — reordered, English fragments shoved to the end, some CJK dropped
- injecting '打开Claude Code，然后commit一下。' yields '打开ClaudeC，然后一下。odecomit' — reordered, English fragments shoved to the end, some CJK dropped root cause
- pynput injecting '打开Claude Code，然后commit一下。' yields '打开ClaudeC，然后一下。odecomit' — reordered, English fragments shoved to the end, some CJK dropped
- pynput injecting '打开Claude Code，然后commit一下。' yields '打开ClaudeC，然后一下。odecomit' — reordered, English fragments shoved to the end, some CJK dropped fix
- voice-to-claude injecting '打开Claude Code，然后commit一下。' yields '打开ClaudeC，然后一下。odecomit' — reordered, English fragments shoved to the end, some CJK dropped
- voice-to-claude injecting '打开Claude Code，然后commit一下。' yields '打开ClaudeC，然后一下。odecomit' — reordered, English fragments shoved to the end, some CJK dropped fix

## uv fails in a managed workspace because cache or Python install paths are outside writable roots

Pit ID: uv-cache-outside-workspace-sandbox
Pit title: uv fails in a managed workspace because cache or Python install paths are outside writable roots
Status: verified
Tools: codex, claude-code, gemini, qwen-code, cursor, aider
Query landing: https://laozhangzzz.github.io/agent-pitbook/q/uv-fails-in-a-managed-workspace-because-cache-or-python-install-paths-are-outside-writable-roots.html
Query alias landings:
- uv fails in a managed workspace because cache or Python install paths are outside writable roots => https://laozhangzzz.github.io/agent-pitbook/q/uv-fails-in-a-managed-workspace-because-cache-or-python-install-paths-are-outside-writable-roots.html
- uv fails in a managed workspace because cache or Python install paths are outside writable roots fix => https://laozhangzzz.github.io/agent-pitbook/q/uv-fails-in-a-managed-workspace-because-cache-or-python-install-paths-are-outside-writable-roots-fix.html
- uv fails in a managed workspace because cache or Python install paths are outside writable roots root cause => https://laozhangzzz.github.io/agent-pitbook/q/uv-fails-in-a-managed-workspace-because-cache-or-python-install-paths-are-outside-writable-roots-root-cause.html
- how to fix uv fails in a managed workspace because cache or Python install paths are outside writable roots => https://laozhangzzz.github.io/agent-pitbook/q/how-to-fix-uv-fails-in-a-managed-workspace-because-cache-or-python-install-paths-are-outside-writable-roots.html
- UV_CACHE_DIR => https://laozhangzzz.github.io/agent-pitbook/q/uv-cache-dir.html
- UV_CACHE_DIR fix => https://laozhangzzz.github.io/agent-pitbook/q/uv-cache-dir-fix.html
- codex UV_CACHE_DIR => https://laozhangzzz.github.io/agent-pitbook/q/codex-uv-cache-dir.html
- codex UV_CACHE_DIR fix => https://laozhangzzz.github.io/agent-pitbook/q/codex-uv-cache-dir-fix.html
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/uv-cache-outside-workspace-sandbox.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/uv-cache-outside-workspace-sandbox.md
Known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/38

Problem: uv run or uv sync fails with permission or sandbox filesystem errors
Root cause: uv defaults to cache or interpreter directories outside the agent's writable roots.
Fix first: Set UV_CACHE_DIR to a workspace-local directory.
Verify: Run a small uv command with local paths.

Search queries this answer targets:

- uv fails in a managed workspace because cache or Python install paths are outside writable roots
- uv fails in a managed workspace because cache or Python install paths are outside writable roots fix
- uv fails in a managed workspace because cache or Python install paths are outside writable roots root cause
- how to fix uv fails in a managed workspace because cache or Python install paths are outside writable roots
- UV_CACHE_DIR
- UV_CACHE_DIR fix
- codex UV_CACHE_DIR
- codex UV_CACHE_DIR fix
- claude-code UV_CACHE_DIR
- claude-code UV_CACHE_DIR fix
- gemini UV_CACHE_DIR
- gemini UV_CACHE_DIR fix
- qwen-code UV_CACHE_DIR
- qwen-code UV_CACHE_DIR fix
- UV_PYTHON_INSTALL_DIR
- UV_PYTHON_INSTALL_DIR fix

