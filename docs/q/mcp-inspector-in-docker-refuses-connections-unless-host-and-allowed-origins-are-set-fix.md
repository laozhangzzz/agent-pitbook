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
- mcp-inspector refuses connections unless host allowed origins set
- mcp-inspector refuses connections unless host allowed origins set fix
- allowed origins set inspector docker refuses connections unless host mcp-inspector
- allowed origins set inspector docker refuses connections unless host mcp-inspector fix
- mcp inspector docker refuses allowed origins set
- mcp inspector docker refuses allowed origins set fix
- mcp inspector docker refuses mcp-inspector
- mcp inspector docker refuses mcp-inspector fix
- mcp-inspector localhost 6274 returns failed connect connection refused
- mcp-inspector localhost 6274 returns failed connect connection refused fix
- connect connection refused curl http localhost 6274 returns failed mcp-inspector
- connect connection refused curl http localhost 6274 returns failed mcp-inspector fix
- curl http localhost 6274 connect connection refused
- curl http localhost 6274 connect connection refused fix
- curl http localhost 6274 mcp-inspector
- curl http localhost 6274 mcp-inspector fix
- HOST fix
