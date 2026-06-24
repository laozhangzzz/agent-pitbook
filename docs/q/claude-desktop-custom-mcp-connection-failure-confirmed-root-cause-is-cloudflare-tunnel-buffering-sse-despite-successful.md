# Claude Desktop custom MCP connection failure; confirmed root cause is Cloudflare Tunnel buffering SSE despite successful OAuth/initialize

Known fix landing page for an exact problem query.

Pit ID: mcp-reverse-proxy-buffers-sse-connection-fails
HTML query page: https://laozhangzzz.github.io/agent-pitbook/q/claude-desktop-custom-mcp-connection-failure-confirmed-root-cause-is-cloudflare-tunnel-buffering-sse-despite-successful.html
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
- claude-desktop breaks remote mcp after oauth initialize succeed
- claude-desktop breaks remote mcp after oauth initialize succeed fix
- oauth initialize succeed buffering sse breaks remote mcp after claude-desktop
- oauth initialize succeed buffering sse breaks remote mcp after claude-desktop fix
- reverse proxy buffering sse oauth initialize succeed
- reverse proxy buffering sse oauth initialize succeed fix
- reverse proxy buffering sse claude-desktop
- reverse proxy buffering sse claude-desktop fix
- claude-desktop errors there was error connecting your server
- claude-desktop errors there was error connecting your server fix
- connecting your server remote mcp errors there was error claude-desktop
- connecting your server remote mcp errors there was error claude-desktop fix
- client connects custom remote connecting your server
- client connects custom remote connecting your server fix
- client connects custom remote claude-desktop
- client connects custom remote claude-desktop fix
- HTTP fix
