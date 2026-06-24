# Agent Pitbook Search Snapshot: 2026-06-24

This snapshot is a crawler-friendly release index for search-enabled coding agents and LLMs. It repeats exact solved-problem titles, GitHub known-fix issue URLs, and hosted pit URLs so searches for existing fixes can land on Agent Pitbook without reading a long human thread first.

Primary entrypoints:

- Site: https://laozhangzzz.github.io/agent-pitbook/
- LLM entrypoint: https://laozhangzzz.github.io/agent-pitbook/llms.txt
- Full text index: https://laozhangzzz.github.io/agent-pitbook/llms-full.txt
- Answer query map: https://laozhangzzz.github.io/agent-pitbook/answer-queries.txt
- RSS feed: https://laozhangzzz.github.io/agent-pitbook/feed.xml
- GitHub known-fix issues: https://github.com/laozhangzzz/agent-pitbook/issues?q=is%3Aissue%20label%3Aknown-fix%20label%3Asearch-surface
- JSONL corpus: https://laozhangzzz.github.io/agent-pitbook/feeds/pits.jsonl

## Known Fix Search Targets

### Dependency install fails because the agent sandbox blocks network access

- Pit ID: agent-network-restricted-dependency-install
- GitHub issue: https://github.com/laozhangzzz/agent-pitbook/issues/3
- HTML: https://laozhangzzz.github.io/agent-pitbook/pits/agent-network-restricted-dependency-install.html
- Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/agent-network-restricted-dependency-install.md
- Tools: codex, claude-code, gemini, qwen-code, cursor, aider
- Status: verified; confidence: high; last verified: 2026-06-19

### Debug sources can contain prompt injection targeting coding agents

- Pit ID: agent-prompt-injection-in-debug-sources
- GitHub issue: https://github.com/laozhangzzz/agent-pitbook/issues/4
- HTML: https://laozhangzzz.github.io/agent-pitbook/pits/agent-prompt-injection-in-debug-sources.html
- Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/agent-prompt-injection-in-debug-sources.md
- Tools: codex, claude-code, gemini, qwen-code, cursor, aider
- Status: candidate; confidence: medium; last verified: 2026-06-19

### Singleton McpServer causes Already connected to a transport

- Pit ID: claude-code-mcp-chrome-bridge-single-transport-deadlock
- GitHub issue: https://github.com/laozhangzzz/agent-pitbook/issues/5
- HTML: https://laozhangzzz.github.io/agent-pitbook/pits/claude-code-mcp-chrome-bridge-single-transport-deadlock.html
- Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/claude-code-mcp-chrome-bridge-single-transport-deadlock.md
- Tools: claude-code, mcp-chrome-bridge
- Status: verified; confidence: high; last verified: 2026-06-19

### Codex still references an old workspace path after a project move

- Pit ID: codex-workspace-root-moved-stale-state
- GitHub issue: https://github.com/laozhangzzz/agent-pitbook/issues/6
- HTML: https://laozhangzzz.github.io/agent-pitbook/pits/codex-workspace-root-moved-stale-state.html
- Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/codex-workspace-root-moved-stale-state.md
- Tools: codex
- Status: candidate; confidence: medium; last verified: 2026-06-19

### Docker port is published but localhost refuses the connection

- Pit ID: docker-published-port-localhost-refused
- GitHub issue: https://github.com/laozhangzzz/agent-pitbook/issues/7
- HTML: https://laozhangzzz.github.io/agent-pitbook/pits/docker-published-port-localhost-refused.html
- Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/docker-published-port-localhost-refused.md
- Tools: codex, claude-code, gemini, qwen-code, cursor, aider
- Status: verified; confidence: high; last verified: 2026-06-19

### SDK doesnt read from .mcp.json until the CLI is run in the cwd

- Pit ID: claude-agent-sdk-mcp-json-requires-project-settingsource
- GitHub issue: https://github.com/laozhangzzz/agent-pitbook/issues/8
- HTML: https://laozhangzzz.github.io/agent-pitbook/pits/claude-agent-sdk-mcp-json-requires-project-settingsource.html
- Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/claude-agent-sdk-mcp-json-requires-project-settingsource.md
- Tools: claude-code, claude-agent-sdk
- Status: verified; confidence: high; last verified: 2026-06-21

### Claude Desktop MCP servers fail with Protocol instance reuse error (Already connected to a transport); Anthropic confirms fix in a later Desktop release

- Pit ID: claude-desktop-mcp-protocol-instance-reuse-already-connected
- GitHub issue: https://github.com/laozhangzzz/agent-pitbook/issues/9
- HTML: https://laozhangzzz.github.io/agent-pitbook/pits/claude-desktop-mcp-protocol-instance-reuse-already-connected.html
- Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/claude-desktop-mcp-protocol-instance-reuse-already-connected.md
- Tools: claude-desktop
- Status: verified; confidence: high; last verified: 2026-06-21

### dynamic resource not working in Claude desktop

- Pit ID: claude-desktop-no-dynamic-resource-templates
- GitHub issue: https://github.com/laozhangzzz/agent-pitbook/issues/10
- HTML: https://laozhangzzz.github.io/agent-pitbook/pits/claude-desktop-no-dynamic-resource-templates.html
- Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/claude-desktop-no-dynamic-resource-templates.md
- Tools: claude-desktop, mcp-server
- Status: verified; confidence: high; last verified: 2026-06-21

### Guide: Resolving '421 Invalid Host Header' DNS Rebinding Protection

- Pit ID: fastmcp-421-invalid-host-header-dns-rebinding
- GitHub issue: https://github.com/laozhangzzz/agent-pitbook/issues/11
- HTML: https://laozhangzzz.github.io/agent-pitbook/pits/fastmcp-421-invalid-host-header-dns-rebinding.html
- Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/fastmcp-421-invalid-host-header-dns-rebinding.md
- Tools: mcp-server, fastmcp
- Status: verified; confidence: high; last verified: 2026-06-21

### Option to not rewrite the logging configuration workarounds: re-apply dictConfig, remove added handler

- Pit ID: fastmcp-overrides-logging-configuration
- GitHub issue: https://github.com/laozhangzzz/agent-pitbook/issues/12
- HTML: https://laozhangzzz.github.io/agent-pitbook/pits/fastmcp-overrides-logging-configuration.html
- Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/fastmcp-overrides-logging-configuration.md
- Tools: mcp-server, python-sdk, fastmcp
- Status: candidate; confidence: medium; last verified: 2026-06-21

### VSCode Toolset name mismatch: github/* fails with Unknown tool, but github warns its deprecated

- Pit ID: github-mcp-vscode-toolset-name-mismatch
- GitHub issue: https://github.com/laozhangzzz/agent-pitbook/issues/13
- HTML: https://laozhangzzz.github.io/agent-pitbook/pits/github-mcp-vscode-toolset-name-mismatch.html
- Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/github-mcp-vscode-toolset-name-mismatch.md
- Tools: github-mcp-server, vscode
- Status: candidate; confidence: medium; last verified: 2026-06-21

### author resolved 'Client closed' by fixing an incorrect registry in user-level ~/.npmrc that the project .npmrc had overridden in the terminal

- Pit ID: mcp-client-uses-user-level-npmrc-wrong-registry
- GitHub issue: https://github.com/laozhangzzz/agent-pitbook/issues/14
- HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-client-uses-user-level-npmrc-wrong-registry.html
- Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-client-uses-user-level-npmrc-wrong-registry.md
- Tools: cursor, claude-desktop, cline, mcp-server
- Status: verified; confidence: medium; last verified: 2026-06-21

### GitHub MCP Server Fails to Start: 'npx' Command Error and Connection Closed -32000

- Pit ID: mcp-error-32000-connection-closed-server-failed-to-start
- GitHub issue: https://github.com/laozhangzzz/agent-pitbook/issues/15
- HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-error-32000-connection-closed-server-failed-to-start.html
- Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-error-32000-connection-closed-server-failed-to-start.md
- Tools: claude-desktop, cursor, cline, mcp-server
- Status: verified; confidence: high; last verified: 2026-06-21

### Filesystem server access denied for allowed paths on Windows

- Pit ID: mcp-filesystem-server-windows-access-denied-case-sensitivity
- GitHub issue: https://github.com/laozhangzzz/agent-pitbook/issues/16
- HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-filesystem-server-windows-access-denied-case-sensitivity.html
- Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-filesystem-server-windows-access-denied-case-sensitivity.md
- Tools: claude-desktop, cursor, mcp-server
- Status: candidate; confidence: medium; last verified: 2026-06-21

### Claude Code cannot connect to GitHubs remote MCP server using OAuth authentication PAT via GITHUB_PERSONAL_ACCESS_TOKEN is the confirmed workaround

- Pit ID: mcp-github-remote-oauth-dcr-unsupported-use-pat
- GitHub issue: https://github.com/laozhangzzz/agent-pitbook/issues/17
- HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-github-remote-oauth-dcr-unsupported-use-pat.html
- Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-github-remote-oauth-dcr-unsupported-use-pat.md
- Tools: claude-code, github-mcp-server
- Status: verified; confidence: high; last verified: 2026-06-21

### Docker container connection refused HOST + ALLOWED_ORIGINS workaround

- Pit ID: mcp-inspector-docker-connection-refused-host-env
- GitHub issue: https://github.com/laozhangzzz/agent-pitbook/issues/18
- HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-inspector-docker-connection-refused-host-env.html
- Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-inspector-docker-connection-refused-host-env.md
- Tools: mcp-inspector
- Status: verified; confidence: medium; last verified: 2026-06-21

### sh: mcp-inspector: command not found after upgrading to v0.10.0 downgrade to 0.9.0

- Pit ID: mcp-inspector-release-regression-pin-version
- GitHub issue: https://github.com/laozhangzzz/agent-pitbook/issues/19
- HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-inspector-release-regression-pin-version.html
- Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-inspector-release-regression-pin-version.md
- Tools: mcp-inspector
- Status: verified; confidence: high; last verified: 2026-06-21

### comment confirming a corrupted npx cache from network errors caused the server to crash; clearing it fixed startup

- Pit ID: mcp-npx-cache-corrupted-server-fails-to-start
- GitHub issue: https://github.com/laozhangzzz/agent-pitbook/issues/20
- HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-npx-cache-corrupted-server-fails-to-start.html
- Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-npx-cache-corrupted-server-fails-to-start.md
- Tools: claude-desktop, cursor, cline, mcp-server
- Status: verified; confidence: medium; last verified: 2026-06-21

### Puppeteer MCP Server Missing Screenshots

- Pit ID: mcp-puppeteer-screenshots-in-memory-only
- GitHub issue: https://github.com/laozhangzzz/agent-pitbook/issues/21
- HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-puppeteer-screenshots-in-memory-only.html
- Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-puppeteer-screenshots-in-memory-only.md
- Tools: mcp-server, claude-desktop
- Status: verified; confidence: medium; last verified: 2026-06-21

### server-postgres multi-instance issue closed; maintainer notes the server moved to servers-archived

- Pit ID: mcp-reference-server-archived-unmaintained
- GitHub issue: https://github.com/laozhangzzz/agent-pitbook/issues/22
- HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-reference-server-archived-unmaintained.html
- Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-reference-server-archived-unmaintained.md
- Tools: mcp-server, claude-desktop, cursor
- Status: verified; confidence: high; last verified: 2026-06-21

### Claude Desktop custom MCP connection failure; confirmed root cause is Cloudflare Tunnel buffering SSE despite successful OAuth/initialize

- Pit ID: mcp-reverse-proxy-buffers-sse-connection-fails
- GitHub issue: https://github.com/laozhangzzz/agent-pitbook/issues/23
- HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-reverse-proxy-buffers-sse-connection-fails.html
- Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-reverse-proxy-buffers-sse-connection-fails.md
- Tools: claude-desktop, mcp-server
- Status: verified; confidence: medium; last verified: 2026-06-21

### Environment variables not respected in @modelcontextprotocol/server-memory package

- Pit ID: mcp-server-memory-ignores-memory-file-path-env
- GitHub issue: https://github.com/laozhangzzz/agent-pitbook/issues/24
- HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-server-memory-ignores-memory-file-path-env.html
- Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-server-memory-ignores-memory-file-path-env.md
- Tools: claude-desktop, cursor, mcp-server
- Status: verified; confidence: high; last verified: 2026-06-21

### MCP SSE Server: Received request before initialization was complete comment confirms supergateway double-initialize; mcp-proxy works

- Pit ID: mcp-sse-received-request-before-initialization
- GitHub issue: https://github.com/laozhangzzz/agent-pitbook/issues/25
- HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-sse-received-request-before-initialization.html
- Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-sse-received-request-before-initialization.md
- Tools: mcp-server, python-sdk
- Status: verified; confidence: medium; last verified: 2026-06-21

### MCP Server Session Lost in Multi-Worker Environment comments confirm stateless_http=True and ingress sticky-hash fixes

- Pit ID: mcp-sse-session-lost-multi-worker
- GitHub issue: https://github.com/laozhangzzz/agent-pitbook/issues/26
- HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-sse-session-lost-multi-worker.html
- Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-sse-session-lost-multi-worker.md
- Tools: mcp-server, python-sdk, fastmcp
- Status: verified; confidence: high; last verified: 2026-06-21

### _handle_stateless_request ClosedResourceError reports 1.11.0 works, 1.12.0 fails; also FastMCP 2.10/2.13

- Pit ID: mcp-stateless-streamable-http-closedresourceerror
- GitHub issue: https://github.com/laozhangzzz/agent-pitbook/issues/27
- HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-stateless-streamable-http-closedresourceerror.html
- Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-stateless-streamable-http-closedresourceerror.md
- Tools: mcp-server, python-sdk, fastmcp
- Status: candidate; confidence: medium; last verified: 2026-06-21

### MCP Servers Dont Work with NVM

- Pit ID: mcp-stdio-server-exits-shell-path-not-inherited
- GitHub issue: https://github.com/laozhangzzz/agent-pitbook/issues/28
- HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-stdio-server-exits-shell-path-not-inherited.html
- Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-stdio-server-exits-shell-path-not-inherited.md
- Tools: claude-desktop, mcp-server
- Status: verified; confidence: high; last verified: 2026-06-21

### SyntaxError in stdio deserializeMessage a console.log in the server triggers it

- Pit ID: mcp-stdio-stdout-logging-breaks-protocol
- GitHub issue: https://github.com/laozhangzzz/agent-pitbook/issues/29
- HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-stdio-stdout-logging-breaks-protocol.html
- Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-stdio-stdout-logging-breaks-protocol.md
- Tools: mcp-server, typescript-sdk, python-sdk
- Status: verified; confidence: high; last verified: 2026-06-21

### When using Streamable HTTP transport, the oauth flow is not triggered when the server returns 401 resolved in a released Inspector version

- Pit ID: mcp-streamable-http-client-no-oauth-on-401
- GitHub issue: https://github.com/laozhangzzz/agent-pitbook/issues/30
- HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-streamable-http-client-no-oauth-on-401.html
- Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-streamable-http-client-no-oauth-on-401.md
- Tools: mcp-inspector, mcp-server
- Status: verified; confidence: medium; last verified: 2026-06-21

### Time server fails under EDT timezone use --local-timezone with an IANA name

- Pit ID: mcp-time-server-invalid-local-timezone
- GitHub issue: https://github.com/laozhangzzz/agent-pitbook/issues/31
- HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-time-server-invalid-local-timezone.html
- Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-time-server-invalid-local-timezone.md
- Tools: mcp-server, claude-desktop
- Status: verified; confidence: high; last verified: 2026-06-21

### mcp client times out after 60 seconds (ignoring timeout option); comments confirm callTool request options and resetTimeoutOnProgress

- Pit ID: mcp-ts-client-default-60s-request-timeout
- GitHub issue: https://github.com/laozhangzzz/agent-pitbook/issues/32
- HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-ts-client-default-60s-request-timeout.html
- Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-ts-client-default-60s-request-timeout.md
- Tools: mcp-server, typescript-sdk
- Status: verified; confidence: high; last verified: 2026-06-21

### @modelcontextprotocol/sdk fails in CommonJS projects due to incompatible ESM-only dependency pkce-challenge

- Pit ID: mcp-ts-sdk-commonjs-esm-pkce-challenge
- GitHub issue: https://github.com/laozhangzzz/agent-pitbook/issues/33
- HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-ts-sdk-commonjs-esm-pkce-challenge.html
- Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-ts-sdk-commonjs-esm-pkce-challenge.md
- Tools: mcp-server, typescript-sdk
- Status: verified; confidence: high; last verified: 2026-06-21

### Elicitation feature fails on Cloudflare Workers due to AJV code generation EvalError

- Pit ID: mcp-ts-sdk-edge-runtime-ajv-codegen-evalerror
- GitHub issue: https://github.com/laozhangzzz/agent-pitbook/issues/34
- HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-ts-sdk-edge-runtime-ajv-codegen-evalerror.html
- Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-ts-sdk-edge-runtime-ajv-codegen-evalerror.md
- Tools: mcp-server, typescript-sdk
- Status: candidate; confidence: medium; last verified: 2026-06-21

### Type instantiation is excessively deep when importing ToolCallback Zod author recommends single Zod version + modern moduleResolution; fixed in Zod 4.1.6

- Pit ID: mcp-ts-sdk-type-instantiation-excessively-deep
- GitHub issue: https://github.com/laozhangzzz/agent-pitbook/issues/35
- HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-ts-sdk-type-instantiation-excessively-deep.html
- Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-ts-sdk-type-instantiation-excessively-deep.md
- Tools: mcp-server, typescript-sdk
- Status: verified; confidence: medium; last verified: 2026-06-21

### MCP SDK v1.17.5 Incompatible with Zod v4 - Breaking Changes

- Pit ID: mcp-ts-sdk-zod-v4-incompatible
- GitHub issue: https://github.com/laozhangzzz/agent-pitbook/issues/36
- HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-ts-sdk-zod-v4-incompatible.html
- Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-ts-sdk-zod-v4-incompatible.md
- Tools: mcp-server, typescript-sdk
- Status: verified; confidence: high; last verified: 2026-06-21

### Windows npx launch failure with garbled 'not recognized' error -32000

- Pit ID: mcp-windows-npx-requires-cmd-c-wrapper
- GitHub issue: https://github.com/laozhangzzz/agent-pitbook/issues/37
- HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-windows-npx-requires-cmd-c-wrapper.html
- Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-windows-npx-requires-cmd-c-wrapper.md
- Tools: claude-desktop, cursor, cline, mcp-server
- Status: verified; confidence: high; last verified: 2026-06-21

### uv fails in a managed workspace because cache or Python install paths are outside writable roots

- Pit ID: uv-cache-outside-workspace-sandbox
- GitHub issue: https://github.com/laozhangzzz/agent-pitbook/issues/38
- HTML: https://laozhangzzz.github.io/agent-pitbook/pits/uv-cache-outside-workspace-sandbox.html
- Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/uv-cache-outside-workspace-sandbox.md
- Tools: codex, claude-code, gemini, qwen-code, cursor, aider
- Status: verified; confidence: high; last verified: 2026-06-19

### macOS PortAudio/sounddevice records all-zero silent audio with no error when the default mic is unavailable

- Pit ID: macos-portaudio-silent-zero-capture-unavailable-default-input
- GitHub issue: https://github.com/laozhangzzz/agent-pitbook/issues/39
- HTML: https://laozhangzzz.github.io/agent-pitbook/pits/macos-portaudio-silent-zero-capture-unavailable-default-input.html
- Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/macos-portaudio-silent-zero-capture-unavailable-default-input.md
- Tools: sounddevice, portaudio, voice-to-claude
- Status: verified; confidence: medium; last verified: 2026-06-21

### PortAudio stream stop()/close() on a hotkey-callback thread can freeze the global hotkey listener

- Pit ID: portaudio-stream-close-blocks-hotkey-callback-thread
- GitHub issue: https://github.com/laozhangzzz/agent-pitbook/issues/40
- HTML: https://laozhangzzz.github.io/agent-pitbook/pits/portaudio-stream-close-blocks-hotkey-callback-thread.html
- Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/portaudio-stream-close-blocks-hotkey-callback-thread.md
- Tools: portaudio, pynput, voice-to-claude
- Status: verified; confidence: medium; last verified: 2026-06-21

### pynput Controller.type() scrambles mixed Chinese+English text on macOS; use clipboard paste

- Pit ID: pynput-mixed-cjk-ascii-type-out-of-order-macos
- GitHub issue: https://github.com/laozhangzzz/agent-pitbook/issues/41
- HTML: https://laozhangzzz.github.io/agent-pitbook/pits/pynput-mixed-cjk-ascii-type-out-of-order-macos.html
- Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/pynput-mixed-cjk-ascii-type-out-of-order-macos.md
- Tools: pynput, voice-to-claude
- Status: verified; confidence: medium; last verified: 2026-06-21
