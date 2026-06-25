# Agent Pitbook Search Index

Root-level answer-first search index for GitHub search, web search, and LLM retrieval. This file intentionally repeats solved-problem titles, upstream issue/PR titles, exact errors, root causes, and first fixes so a search-enabled model can find Agent Pitbook without digging through generated feeds.

- Public site: https://laozhangzzz.github.io/agent-pitbook/
- LLM entrypoint: https://laozhangzzz.github.io/agent-pitbook/llms.txt
- Known fixes: https://laozhangzzz.github.io/agent-pitbook/answers.html
- Full feed: https://laozhangzzz.github.io/agent-pitbook/feeds/pits.jsonl
- GitHub issue search tracker: https://github.com/laozhangzzz/agent-pitbook/issues/2

## Dependency install fails because the agent sandbox blocks network access

Pit ID: agent-network-restricted-dependency-install
Pit title: Dependency install fails because the agent sandbox blocks network access
Status: verified
Tools: codex, claude-code, gemini, qwen-code, cursor, aider
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/agent-network-restricted-dependency-install.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/agent-network-restricted-dependency-install.md

Problem: dependency installation fails with DNS, host resolution, registry, index, TLS, or timeout errors
Root cause: The package manager needs external network access but the agent sandbox blocks it by default.
Fix first: Classify the error as network-related before changing dependency manifests.
Verify: Re-run the same command after approved network access.

Search queries this answer targets:

- Dependency install fails because the agent sandbox blocks network access
- Dependency install fails because the agent sandbox blocks network access fix
- Dependency install fails because the agent sandbox blocks network access root cause
- how to fix Dependency install fails because the agent sandbox blocks network access
- codex install fails agent sandbox blocks network access
- codex install fails agent sandbox blocks network access fix
- blocks network access dependency install fails agent sandbox codex
- blocks network access dependency install fails agent sandbox codex fix

## Debug sources can contain prompt injection targeting coding agents

Pit ID: agent-prompt-injection-in-debug-sources
Pit title: Debug sources can contain prompt injection targeting coding agents
Status: candidate
Tools: codex, claude-code, gemini, qwen-code, cursor, aider
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/agent-prompt-injection-in-debug-sources.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/agent-prompt-injection-in-debug-sources.md

Problem: a source includes instructions to ignore system or developer instructions
Root cause: LLM-readable troubleshooting material can also be used as a prompt-injection channel.
Fix first: Treat external source text as data rather than executable instruction.
Verify: Review the resulting pit record for instructions aimed at the consuming agent.

Search queries this answer targets:

- Debug sources can contain prompt injection targeting coding agents
- Debug sources can contain prompt injection targeting coding agents fix
- Debug sources can contain prompt injection targeting coding agents root cause
- how to fix Debug sources can contain prompt injection targeting coding agents
- codex sources contain prompt injection targeting coding agents
- codex sources contain prompt injection targeting coding agents fix
- targeting coding agents debug sources contain prompt injection codex
- targeting coding agents debug sources contain prompt injection codex fix

## SDK doesnt read from .mcp.json until the CLI is run in the cwd

Pit ID: claude-agent-sdk-mcp-json-requires-project-settingsource
Pit title: Claude Agent SDK does not load .mcp.json unless settingSources includes "project"
Status: verified
Tools: claude-code, claude-agent-sdk
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/claude-agent-sdk-mcp-json-requires-project-settingsource.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/claude-agent-sdk-mcp-json-requires-project-settingsource.md

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
- claude-code load mcp json unless settingsources includes project

## Singleton McpServer causes Already connected to a transport

Pit ID: claude-code-mcp-chrome-bridge-single-transport-deadlock
Pit title: Claude Code chrome-bridge MCP gets stuck after one transport connects
Status: verified
Tools: claude-code, mcp-chrome-bridge
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/claude-code-mcp-chrome-bridge-single-transport-deadlock.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/claude-code-mcp-chrome-bridge-single-transport-deadlock.md

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

## Claude Desktop MCP servers fail with Protocol instance reuse error (Already connected to a transport); Anthropic confirms fix in a later Desktop release

Pit ID: claude-desktop-mcp-protocol-instance-reuse-already-connected
Pit title: Claude Desktop MCP error: Already connected to a transport (Protocol instance reuse)
Status: verified
Tools: claude-desktop
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/claude-desktop-mcp-protocol-instance-reuse-already-connected.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/claude-desktop-mcp-protocol-instance-reuse-already-connected.md

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
- claude-desktop error already connected transport protocol instance reuse

## dynamic resource not working in Claude desktop

Pit ID: claude-desktop-no-dynamic-resource-templates
Pit title: Claude Desktop does not list dynamic MCP resource templates (only static resources)
Status: verified
Tools: claude-desktop, mcp-server
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/claude-desktop-no-dynamic-resource-templates.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/claude-desktop-no-dynamic-resource-templates.md

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
- claude-desktop list dynamic mcp resource templates static resources

## Codex still references an old workspace path after a project move

Pit ID: codex-workspace-root-moved-stale-state
Pit title: Codex still references an old workspace path after a project move
Status: candidate
Tools: codex
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/codex-workspace-root-moved-stale-state.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/codex-workspace-root-moved-stale-state.md

Problem: Codex or its sidebar references an old workspace folder
Root cause: The desktop app persists workspace roots separately from the shell current directory, and those saved roots may not update when a folder is moved.
Fix first: Use the app's normal folder switching or reopen-workspace flow first.
Verify: Start a fresh Codex session after switching or repairing the workspace.

Search queries this answer targets:

- Codex still references an old workspace path after a project move
- Codex still references an old workspace path after a project move fix
- Codex still references an old workspace path after a project move root cause
- how to fix Codex still references an old workspace path after a project move
- codex references old workspace path after project move
- codex references old workspace path after project move fix
- after project move still references old workspace path codex
- after project move still references old workspace path codex fix

## Docker port is published but localhost refuses the connection

Pit ID: docker-published-port-localhost-refused
Pit title: Docker port is published but localhost refuses the connection
Status: verified
Tools: codex, claude-code, gemini, qwen-code, cursor, aider
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/docker-published-port-localhost-refused.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/docker-published-port-localhost-refused.md

Problem: docker ps or docker port shows the expected host port
Root cause: The app inside the container is listening on loopback rather than a container network interface.
Fix first: Change the app bind address inside the container to 0.0.0.0.
Verify: Inspect port mapping and make an HTTP request from the host.

Search queries this answer targets:

- Docker port is published but localhost refuses the connection
- Docker port is published but localhost refuses the connection fix
- Docker port is published but localhost refuses the connection root cause
- how to fix Docker port is published but localhost refuses the connection
- codex docker port published localhost refuses connection
- codex docker port published localhost refuses connection fix
- localhost refuses connection docker port published codex
- localhost refuses connection docker port published codex fix

## Guide: Resolving '421 Invalid Host Header' DNS Rebinding Protection

Pit ID: fastmcp-421-invalid-host-header-dns-rebinding
Pit title: FastMCP returns 421 Invalid Host Header behind a proxy due to DNS rebinding protection
Status: verified
Tools: mcp-server, fastmcp
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/fastmcp-421-invalid-host-header-dns-rebinding.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/fastmcp-421-invalid-host-header-dns-rebinding.md

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
- mcp-server host header behind proxy dns rebinding protection

## Option to not rewrite the logging configuration workarounds: re-apply dictConfig, remove added handler

Pit ID: fastmcp-overrides-logging-configuration
Pit title: FastMCP overrides your app's logging configuration on init (duplicate or lost logs)
Status: candidate
Tools: mcp-server, python-sdk, fastmcp
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/fastmcp-overrides-logging-configuration.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/fastmcp-overrides-logging-configuration.md

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
- mcp-server app logging configuration init duplicate lost logs

## VSCode Toolset name mismatch: github/* fails with Unknown tool, but github warns its deprecated

Pit ID: github-mcp-vscode-toolset-name-mismatch
Pit title: VS Code agent config: github/* MCP toolset is Unknown tool while github warns it's renamed
Status: candidate
Tools: github-mcp-server, vscode
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/github-mcp-vscode-toolset-name-mismatch.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/github-mcp-vscode-toolset-name-mismatch.md

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
- github-mcp-server mcp toolset unknown tool while warns renamed

## macOS PortAudio/sounddevice records all-zero silent audio with no error when the default mic is unavailable

Pit ID: macos-portaudio-silent-zero-capture-unavailable-default-input
Pit title: macOS PortAudio/sounddevice records all-zero silent audio with no error when the default mic is unavailable
Status: verified
Tools: sounddevice, portaudio, voice-to-claude
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/macos-portaudio-silent-zero-capture-unavailable-default-input.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/macos-portaudio-silent-zero-capture-unavailable-default-input.md

Problem: multi-second speech transcribes to a single junk token (e.g. 6.2s clip -> '我。', stray Korean '그.', or '谷歌')
Root cause: With the lid closed (clamshell), the built-in MacBook mic is physically unavailable but is still enumerated AND still selected as the default input device.
Fix first: Diagnose by measuring the recorded level, not by trusting the API: 0 == silent capture.
Verify: After pinning to the Studio Display mic, measure the recorded peak and run ASR.

Search queries this answer targets:

- macOS PortAudio/sounddevice records all-zero silent audio with no error when the default mic is unavailable
- macOS PortAudio/sounddevice records all-zero silent audio with no error when the default mic is unavailable fix
- macOS PortAudio/sounddevice records all-zero silent audio with no error when the default mic is unavailable root cause
- how to fix macOS PortAudio/sounddevice records all-zero silent audio with no error when the default mic is unavailable
- sounddevice silent audio no error default mic unavailable
- sounddevice silent audio no error default mic unavailable fix
- default mic unavailable all zero silent audio no error sounddevice
- default mic unavailable all zero silent audio no error sounddevice fix

## author resolved 'Client closed' by fixing an incorrect registry in user-level ~/.npmrc that the project .npmrc had overridden in the terminal

Pit ID: mcp-client-uses-user-level-npmrc-wrong-registry
Pit title: MCP server hangs because the GUI client uses your user-level .npmrc, not your project's
Status: verified
Tools: cursor, claude-desktop, cline, mcp-server
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-client-uses-user-level-npmrc-wrong-registry.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-client-uses-user-level-npmrc-wrong-registry.md

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
- cursor client uses your user level npmrc project

## GitHub MCP Server Fails to Start: 'npx' Command Error and Connection Closed -32000

Pit ID: mcp-error-32000-connection-closed-server-failed-to-start
Pit title: MCP error -32000: Connection closed means the stdio server died before the handshake
Status: verified
Tools: claude-desktop, cursor, cline, mcp-server
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-error-32000-connection-closed-server-failed-to-start.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-error-32000-connection-closed-server-failed-to-start.md

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

## Filesystem server access denied for allowed paths on Windows

Pit ID: mcp-filesystem-server-windows-access-denied-case-sensitivity
Pit title: Filesystem MCP server denies allowed Windows paths due to drive-letter case mismatch
Status: candidate
Tools: claude-desktop, cursor, mcp-server
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-filesystem-server-windows-access-denied-case-sensitivity.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-filesystem-server-windows-access-denied-case-sensitivity.md

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

## Claude Code cannot connect to GitHubs remote MCP server using OAuth authentication PAT via GITHUB_PERSONAL_ACCESS_TOKEN is the confirmed workaround

Pit ID: mcp-github-remote-oauth-dcr-unsupported-use-pat
Pit title: Remote MCP OAuth fails with "does not support dynamic client registration"; use a PAT
Status: verified
Tools: claude-code, github-mcp-server
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-github-remote-oauth-dcr-unsupported-use-pat.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-github-remote-oauth-dcr-unsupported-use-pat.md

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
- claude-code oauth fails support dynamic client registration pat

## Docker container connection refused HOST + ALLOWED_ORIGINS workaround

Pit ID: mcp-inspector-docker-connection-refused-host-env
Pit title: MCP Inspector in Docker refuses connections unless HOST and ALLOWED_ORIGINS are set
Status: verified
Tools: mcp-inspector
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-inspector-docker-connection-refused-host-env.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-inspector-docker-connection-refused-host-env.md

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
- mcp-inspector refuses connections unless host allowed origins set

## sh: mcp-inspector: command not found after upgrading to v0.10.0 downgrade to 0.9.0

Pit ID: mcp-inspector-release-regression-pin-version
Pit title: MCP Inspector breaks after an upgrade; pin a known-good version
Status: verified
Tools: mcp-inspector
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-inspector-release-regression-pin-version.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-inspector-release-regression-pin-version.md

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

## comment confirming a corrupted npx cache from network errors caused the server to crash; clearing it fixed startup

Pit ID: mcp-npx-cache-corrupted-server-fails-to-start
Pit title: A corrupted or cold npx cache makes an MCP server fail to start or time out
Status: verified
Tools: claude-desktop, cursor, cline, mcp-server
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-npx-cache-corrupted-server-fails-to-start.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-npx-cache-corrupted-server-fails-to-start.md

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

## Puppeteer MCP Server Missing Screenshots

Pit ID: mcp-puppeteer-screenshots-in-memory-only
Pit title: Puppeteer MCP screenshots live in memory only; there is no file on disk to find
Status: verified
Tools: mcp-server, claude-desktop
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-puppeteer-screenshots-in-memory-only.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-puppeteer-screenshots-in-memory-only.md

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
- mcp-server live memory there no file disk find

## server-postgres multi-instance issue closed; maintainer notes the server moved to servers-archived

Pit ID: mcp-reference-server-archived-unmaintained
Pit title: Several official reference MCP servers are archived; their bugs will not be fixed
Status: verified
Tools: mcp-server, claude-desktop, cursor
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-reference-server-archived-unmaintained.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-reference-server-archived-unmaintained.md

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

## Claude Desktop custom MCP connection failure; confirmed root cause is Cloudflare Tunnel buffering SSE despite successful OAuth/initialize

Pit ID: mcp-reverse-proxy-buffers-sse-connection-fails
Pit title: A reverse proxy buffering SSE breaks remote MCP after OAuth and initialize succeed
Status: verified
Tools: claude-desktop, mcp-server
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-reverse-proxy-buffers-sse-connection-fails.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-reverse-proxy-buffers-sse-connection-fails.md

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
- claude-desktop breaks remote mcp after oauth initialize succeed

## Environment variables not respected in @modelcontextprotocol/server-memory package

Pit ID: mcp-server-memory-ignores-memory-file-path-env
Pit title: server-memory ignores MEMORY_FILE_PATH because the npm build lagged the source
Status: verified
Tools: claude-desktop, cursor, mcp-server
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-server-memory-ignores-memory-file-path-env.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-server-memory-ignores-memory-file-path-env.md

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
- claude-desktop ignores file path npm build lagged source

## MCP SSE Server: Received request before initialization was complete comment confirms supergateway double-initialize; mcp-proxy works

Pit ID: mcp-sse-received-request-before-initialization
Pit title: SSE MCP server: Received request before initialization was complete
Status: verified
Tools: mcp-server, python-sdk
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-sse-received-request-before-initialization.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-sse-received-request-before-initialization.md

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
- mcp-server mcp server received request initialization was complete

## MCP Server Session Lost in Multi-Worker Environment comments confirm stateless_http=True and ingress sticky-hash fixes

Pit ID: mcp-sse-session-lost-multi-worker
Pit title: MCP SSE session lost across workers/pods: Could not find session for ID (404)
Status: verified
Tools: mcp-server, python-sdk, fastmcp
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-sse-session-lost-multi-worker.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-sse-session-lost-multi-worker.md

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
- mcp-server lost across workers pods find id 404

## _handle_stateless_request ClosedResourceError reports 1.11.0 works, 1.12.0 fails; also FastMCP 2.10/2.13

Pit ID: mcp-stateless-streamable-http-closedresourceerror
Pit title: Stateless Streamable HTTP MCP server throws anyio.ClosedResourceError on some SDK versions
Status: candidate
Tools: mcp-server, python-sdk, fastmcp
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-stateless-streamable-http-closedresourceerror.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-stateless-streamable-http-closedresourceerror.md

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
- mcp-server server throws anyio closedresourceerror some sdk versions

## MCP Servers Dont Work with NVM

Pit ID: mcp-stdio-server-exits-shell-path-not-inherited
Pit title: MCP stdio server exits immediately because the GUI client does not inherit your shell PATH
Status: verified
Tools: claude-desktop, mcp-server
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-stdio-server-exits-shell-path-not-inherited.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-stdio-server-exits-shell-path-not-inherited.md

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

## SyntaxError in stdio deserializeMessage a console.log in the server triggers it

Pit ID: mcp-stdio-stdout-logging-breaks-protocol
Pit title: Writing to stdout in a stdio MCP server corrupts the JSON-RPC stream
Status: verified
Tools: mcp-server, typescript-sdk, python-sdk
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-stdio-stdout-logging-breaks-protocol.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-stdio-stdout-logging-breaks-protocol.md

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
- mcp-server stdio mcp server corrupts json rpc stream

## When using Streamable HTTP transport, the oauth flow is not triggered when the server returns 401 resolved in a released Inspector version

Pit ID: mcp-streamable-http-client-no-oauth-on-401
Pit title: Streamable HTTP MCP client hangs on 401 instead of starting the OAuth flow
Status: verified
Tools: mcp-inspector, mcp-server
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-streamable-http-client-no-oauth-on-401.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-streamable-http-client-no-oauth-on-401.md

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
- mcp-inspector client hangs 401 instead starting oauth flow

## Time server fails under EDT timezone use --local-timezone with an IANA name

Pit ID: mcp-time-server-invalid-local-timezone
Pit title: mcp-server-time crashes when the local timezone is an abbreviation like EDT/PDT/CEST
Status: verified
Tools: mcp-server, claude-desktop
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-time-server-invalid-local-timezone.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-time-server-invalid-local-timezone.md

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
- mcp-server local timezone abbreviation like edt pdt cest

## mcp client times out after 60 seconds (ignoring timeout option); comments confirm callTool request options and resetTimeoutOnProgress

Pit ID: mcp-ts-client-default-60s-request-timeout
Pit title: MCP TypeScript client times out long tool calls after 60s (-32001) unless you reset on progress
Status: verified
Tools: mcp-server, typescript-sdk
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-ts-client-default-60s-request-timeout.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-ts-client-default-60s-request-timeout.md

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
- mcp-server after 60s 32001 unless you reset progress

## @modelcontextprotocol/sdk fails in CommonJS projects due to incompatible ESM-only dependency pkce-challenge

Pit ID: mcp-ts-sdk-commonjs-esm-pkce-challenge
Pit title: MCP TypeScript SDK crashes in CommonJS projects with ERR_REQUIRE_ESM (pkce-challenge)
Status: verified
Tools: mcp-server, typescript-sdk
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-ts-sdk-commonjs-esm-pkce-challenge.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-ts-sdk-commonjs-esm-pkce-challenge.md

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
- mcp-server commonjs projects err require esm pkce challenge

## Elicitation feature fails on Cloudflare Workers due to AJV code generation EvalError

Pit ID: mcp-ts-sdk-edge-runtime-ajv-codegen-evalerror
Pit title: MCP TS SDK validation fails on Cloudflare Workers with EvalError (AJV code generation)
Status: candidate
Tools: mcp-server, typescript-sdk
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-ts-sdk-edge-runtime-ajv-codegen-evalerror.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-ts-sdk-edge-runtime-ajv-codegen-evalerror.md

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
- mcp-server fails cloudflare workers evalerror ajv code generation

## Type instantiation is excessively deep when importing ToolCallback Zod author recommends single Zod version + modern moduleResolution; fixed in Zod 4.1.6

Pit ID: mcp-ts-sdk-type-instantiation-excessively-deep
Pit title: MCP TS SDK: 'Type instantiation is excessively deep' (ts2589) freezes the IDE
Status: verified
Tools: mcp-server, typescript-sdk
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-ts-sdk-type-instantiation-excessively-deep.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-ts-sdk-type-instantiation-excessively-deep.md

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
- mcp-server type instantiation excessively deep ts2589 freezes ide

## MCP SDK v1.17.5 Incompatible with Zod v4 - Breaking Changes

Pit ID: mcp-ts-sdk-zod-v4-incompatible
Pit title: MCP TypeScript SDK breaks with Zod v4: w._parse is not a function
Status: verified
Tools: mcp-server, typescript-sdk
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-ts-sdk-zod-v4-incompatible.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-ts-sdk-zod-v4-incompatible.md

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
- mcp-server typescript sdk breaks zod v4 parse function

## Windows npx launch failure with garbled 'not recognized' error -32000

Pit ID: mcp-windows-npx-requires-cmd-c-wrapper
Pit title: On Windows an MCP server launched with npx needs a cmd /c wrapper
Status: verified
Tools: claude-desktop, cursor, cline, mcp-server
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-windows-npx-requires-cmd-c-wrapper.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-windows-npx-requires-cmd-c-wrapper.md

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

## PortAudio stream stop()/close() on a hotkey-callback thread can freeze the global hotkey listener

Pit ID: portaudio-stream-close-blocks-hotkey-callback-thread
Pit title: PortAudio stream stop()/close() on a hotkey-callback thread can freeze the global hotkey listener
Status: verified
Tools: portaudio, pynput, voice-to-claude
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/portaudio-stream-close-blocks-hotkey-callback-thread.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/portaudio-stream-close-blocks-hotkey-callback-thread.md

Problem: a push-to-talk dictation daemon intermittently goes unresponsive after switching windows and dictating
Root cause: stop()/close() of a PortAudio stream on a flaky/display-connected device can block for a long time.
Fix first: Move recorder.stop() (the PortAudio stream.stop()/close() calls) AND all downstream processing off the pynput key-release callback thread into a background thread.
Verify: Use the daemon heavily across multiple windows after the change.

Search queries this answer targets:

- PortAudio stream stop()/close() on a hotkey-callback thread can freeze the global hotkey listener
- PortAudio stream stop()/close() on a hotkey-callback thread can freeze the global hotkey listener fix
- PortAudio stream stop()/close() on a hotkey-callback thread can freeze the global hotkey listener root cause
- how to fix PortAudio stream stop()/close() on a hotkey-callback thread can freeze the global hotkey listener
- portaudio close hotkey callback thread freeze global listener
- portaudio close hotkey callback thread freeze global listener fix
- freeze global listener stream stop close hotkey callback thread portaudio
- freeze global listener stream stop close hotkey callback thread portaudio fix

## pynput Controller.type() scrambles mixed Chinese+English text on macOS; use clipboard paste

Pit ID: pynput-mixed-cjk-ascii-type-out-of-order-macos
Pit title: pynput Controller.type() scrambles mixed Chinese+English text on macOS; use clipboard paste
Status: verified
Tools: pynput, voice-to-claude
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/pynput-mixed-cjk-ascii-type-out-of-order-macos.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/pynput-mixed-cjk-ascii-type-out-of-order-macos.md

Problem: injecting '打开Claude Code，然后commit一下。' yields '打开ClaudeC，然后一下。odecomit' — reordered, English fragments shoved to the end, some CJK dropped
Root cause: On macOS pynput types CJK characters via synthesized Unicode events and ASCII via key events.
Fix first: Switch text injection from per-character keyboard.type() to clipboard paste: copy the full string via pbcopy, then simulate Cmd+V.
Verify: Inject the same mixed Chinese+English sentence after the change.

Search queries this answer targets:

- pynput Controller.type() scrambles mixed Chinese+English text on macOS; use clipboard paste
- pynput Controller.type() scrambles mixed Chinese+English text on macOS; use clipboard paste fix
- pynput Controller.type() scrambles mixed Chinese+English text on macOS; use clipboard paste root cause
- how to fix pynput Controller.type() scrambles mixed Chinese+English text on macOS; use clipboard paste
- pynput mixed chinese english text macos clipboard paste
- pynput mixed chinese english text macos clipboard paste fix
- macos clipboard paste type scrambles mixed chinese english text pynput
- macos clipboard paste type scrambles mixed chinese english text pynput fix

## uv fails in a managed workspace because cache or Python install paths are outside writable roots

Pit ID: uv-cache-outside-workspace-sandbox
Pit title: uv fails in a managed workspace because cache or Python install paths are outside writable roots
Status: verified
Tools: codex, claude-code, gemini, qwen-code, cursor, aider
HTML: https://laozhangzzz.github.io/agent-pitbook/pits/uv-cache-outside-workspace-sandbox.html
Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/uv-cache-outside-workspace-sandbox.md

Problem: uv run or uv sync fails with permission or sandbox filesystem errors
Root cause: uv defaults to cache or interpreter directories outside the agent's writable roots.
Fix first: Set UV_CACHE_DIR to a workspace-local directory.
Verify: Run a small uv command with local paths.

Search queries this answer targets:

- uv fails in a managed workspace because cache or Python install paths are outside writable roots
- uv fails in a managed workspace because cache or Python install paths are outside writable roots fix
- uv fails in a managed workspace because cache or Python install paths are outside writable roots root cause
- how to fix uv fails in a managed workspace because cache or Python install paths are outside writable roots
- codex workspace cache python install paths writable roots
- codex workspace cache python install paths writable roots fix
- paths writable roots fails managed workspace cache python install codex
- paths writable roots fails managed workspace cache python install codex fix

