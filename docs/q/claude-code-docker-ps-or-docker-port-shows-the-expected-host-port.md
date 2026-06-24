# claude-code docker ps or docker port shows the expected host port

Known fix landing page for an exact problem query.

Pit ID: docker-published-port-localhost-refused
HTML query page: https://laozhangzzz.github.io/agent-pitbook/q/claude-code-docker-ps-or-docker-port-shows-the-expected-host-port.html
Full pit HTML: https://laozhangzzz.github.io/agent-pitbook/pits/docker-published-port-localhost-refused.html
Full pit Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/docker-published-port-localhost-refused.md
GitHub known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/7

## Fast Answer

- Problem: docker ps or docker port shows the expected host port
- Root cause: The app inside the container is listening on loopback rather than a container network interface.
- Fix first: Change the app bind address inside the container to 0.0.0.0.
- Verify: Inspect port mapping and make an HTTP request from the host.

## Queries This Answers

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
- codex curl to localhost or 127.0.0.1 on the host fails
- codex curl to localhost or 127.0.0.1 on the host fails fix
- claude-code curl to localhost or 127.0.0.1 on the host fails
- claude-code curl to localhost or 127.0.0.1 on the host fails fix
- gemini curl to localhost or 127.0.0.1 on the host fails
- gemini curl to localhost or 127.0.0.1 on the host fails fix
- container logs show the app listening on localhost or 127.0.0.1
- how to fix container logs show the app listening on localhost or 127.0.0.1

