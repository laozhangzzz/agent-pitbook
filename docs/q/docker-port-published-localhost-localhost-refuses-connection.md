# docker port published localhost localhost refuses connection

Known fix landing page for an exact problem query.

Pit ID: docker-published-port-localhost-refused
HTML query page: https://laozhangzzz.github.io/agent-pitbook/q/docker-port-published-localhost-localhost-refuses-connection.html
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
- codex docker port published localhost refuses connection
- codex docker port published localhost refuses connection fix
- localhost refuses connection docker port published codex
- localhost refuses connection docker port published codex fix
- docker port published localhost localhost refuses connection
- docker port published localhost localhost refuses connection fix
- docker port published localhost codex
- docker port published localhost codex fix
- codex docker ps port expected host
- codex docker ps port expected host fix
- port expected host docker ps codex
- port expected host docker ps codex fix
- docker ps port expected port expected host
- docker ps port expected port expected host fix
- docker ps port expected codex
- docker ps port expected codex fix
- docker ps or docker port shows the expected host port
- how to fix docker ps or docker port shows the expected host port
- docker ps or docker port shows the expected host port root cause
- codex docker ps or docker port shows the expected host port
