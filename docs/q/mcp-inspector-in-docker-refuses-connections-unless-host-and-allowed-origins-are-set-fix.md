# MCP Inspector in Docker refuses connections unless HOST and ALLOWED_ORIGINS are set fix

Known fix landing page for an exact problem query.

Pit ID: mcp-inspector-docker-connection-refused-host-env
HTML query page: https://laozhangzzz.github.io/agent-pitbook/q/mcp-inspector-in-docker-refuses-connections-unless-host-and-allowed-origins-are-set-fix.html
Full pit HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-inspector-docker-connection-refused-host-env.html
Full pit Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-inspector-docker-connection-refused-host-env.md
GitHub known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/18

## Fast Answer

- Problem: curl http://localhost:6274 returns Failed to connect ... Connection refused
- Root cause: Inspector listens on the loopback interface, which inside a container is only reachable by processes in that container.
- Fix first: Pass HOST and ALLOWED_ORIGINS to the container run command.
- Verify: Curl the UI port after setting the env vars.

## Queries This Answers

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
- mcp-inspector ERR_CONNECTION_REFUSED
- mcp-inspector ERR_CONNECTION_REFUSED fix
- curl http://localhost:6274 returns Failed to connect ... Connection refused
- how to fix curl http://localhost:6274 returns Failed to connect ... Connection refused
- curl http://localhost:6274 returns Failed to connect ... Connection refused root cause
- mcp-inspector curl http://localhost:6274 returns Failed to connect ... Connection refused
- mcp-inspector curl http://localhost:6274 returns Failed to connect ... Connection refused fix
- browser shows localhost refused to connect / ERR_CONNECTION_REFUSED

