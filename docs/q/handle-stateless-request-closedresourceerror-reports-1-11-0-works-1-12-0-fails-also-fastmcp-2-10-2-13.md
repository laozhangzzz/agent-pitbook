# _handle_stateless_request ClosedResourceError reports 1.11.0 works, 1.12.0 fails; also FastMCP 2.10/2.13

Known fix landing page for an exact problem query.

Pit ID: mcp-stateless-streamable-http-closedresourceerror
HTML query page: https://laozhangzzz.github.io/agent-pitbook/q/handle-stateless-request-closedresourceerror-reports-1-11-0-works-1-12-0-fails-also-fastmcp-2-10-2-13.html
Full pit HTML: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-stateless-streamable-http-closedresourceerror.html
Full pit Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/mcp-stateless-streamable-http-closedresourceerror.md
GitHub known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/27

## Fast Answer

- Problem: each request raises an exception group ending in anyio.ClosedResourceError
- Root cause: In affected versions the stateless Streamable HTTP path re-enters the transport's read loop.
- Fix first: Pin a known-good SDK version; users reported 1.11.0 working where 1.12.0 failed.
- Verify: Send repeated requests to the stateless server on the pinned/fixed version.

## Queries This Answers

- _handle_stateless_request ClosedResourceError reports 1.11.0 works, 1.12.0 fails; also FastMCP 2.10/2.13
- _handle_stateless_request ClosedResourceError (reports 1.11.0 works, 1.12.0 fails; also FastMCP 2.10/2.13) fix
- _handle_stateless_request ClosedResourceError (reports 1.11.0 works, 1.12.0 fails; also FastMCP 2.10/2.13) root cause
- Stateless Streamable HTTP MCP server throws anyio.ClosedResourceError on some SDK versions
- Stateless Streamable HTTP MCP server throws anyio.ClosedResourceError on some SDK versions fix
- Stateless Streamable HTTP MCP server throws anyio.ClosedResourceError on some SDK versions root cause
- how to fix Stateless Streamable HTTP MCP server throws anyio.ClosedResourceError on some SDK versions
- mcp-server server throws anyio closedresourceerror some sdk versions
- mcp-server server throws anyio closedresourceerror some sdk versions fix
- some sdk versions http mcp server throws anyio closedresourceerror mcp-server
- some sdk versions http mcp server throws anyio closedresourceerror mcp-server fix
- stateless streamable http mcp some sdk versions
- stateless streamable http mcp some sdk versions fix
- stateless streamable http mcp mcp-server
- stateless streamable http mcp mcp-server fix
- mcp-server request raises exception group ending anyio closedresourceerror
- mcp-server request raises exception group ending anyio closedresourceerror fix
- ending anyio closedresourceerror each request raises exception group mcp-server
- ending anyio closedresourceerror each request raises exception group mcp-server fix
- each request raises exception ending anyio closedresourceerror
- each request raises exception ending anyio closedresourceerror fix
- each request raises exception mcp-server
- each request raises exception mcp-server fix
- HTTP fix
