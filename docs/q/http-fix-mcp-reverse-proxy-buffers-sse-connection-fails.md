# HTTP fix

Known fix landing page for an exact problem query.

Pit ID: mcp-reverse-proxy-buffers-sse-connection-fails
HTML query page: https://laozhangzzz.github.io/agent-pitbook/q/http-fix-mcp-reverse-proxy-buffers-sse-connection-fails.html
Full pit HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-reverse-proxy-buffers-sse-connection-fails.html
Full pit Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-reverse-proxy-buffers-sse-connection-fails.md
GitHub known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/23

## Fast Answer

- Problem: the client connects to a custom remote MCP then errors (e.g. 'There was an error connecting to your server')
- Root cause: MCP Streamable HTTP streams responses over SSE, which must be flushed incrementally.
- Fix first: Disable response buffering for the MCP endpoint at the proxy.
- Verify: Connect through the proxy and watch the stream.

## Queries This Answers

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
- claude-desktop the client connects to a custom remote MCP then errors (e.g. 'There was an error connecting to your server') fix
- mcp-server the client connects to a custom remote MCP then errors e.g. There was an error connecting to your server
- mcp-server the client connects to a custom remote MCP then errors (e.g. 'There was an error connecting to your server') fix
- server logs show success through registration, OAuth authorize, token exchange, initialize, and the SSE GET with Accept: text/event-stream, then nothing flows
- how to fix server logs show success through registration, OAuth authorize, token exchange, initialize, and the SSE GET with Accept: text/event-stream, then nothing flows
- server logs show success through registration, OAuth authorize, token exchange, initialize, and the SSE GET with Accept: text/event-stream, then nothing flows root cause
- claude-desktop server logs show success through registration, OAuth authorize, token exchange, initialize, and the SSE GET with Accept: text/event-stream, then nothing flows
- claude-desktop server logs show success through registration, OAuth authorize, token exchange, initialize, and the SSE GET with Accept: text/event-stream, then nothing flows fix

