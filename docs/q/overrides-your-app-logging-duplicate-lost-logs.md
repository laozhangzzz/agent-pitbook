# overrides your app logging duplicate lost logs

Known fix landing page for an exact problem query.

Pit ID: fastmcp-overrides-logging-configuration
HTML query page: https://laozhangzzz.github.io/agent-pitbook/q/overrides-your-app-logging-duplicate-lost-logs.html
Full pit HTML: https://laozhangzzz.github.io/agent-pitbook/pits/fastmcp-overrides-logging-configuration.html
Full pit Markdown: https://laozhangzzz.github.io/agent-pitbook/pits/fastmcp-overrides-logging-configuration.md
GitHub known-fix issue: https://github.com/laozhangzzz/agent-pitbook/issues/12

## Fast Answer

- Problem: log messages become duplicated after the FastMCP server is created
- Root cause: FastMCP performs global logging configuration at startup (configure_logging) instead of confining itself to its own logger.
- Fix first: Re-apply your logging configuration after constructing FastMCP so your handlers win.
- Verify: Emit logs after re-applying your config.

## Queries This Answers

- Option to not rewrite the logging configuration workarounds: re-apply dictConfig, remove added handler
- Option to not rewrite the logging configuration (workarounds: re-apply dictConfig, remove added handler) fix
- Option to not rewrite the logging configuration (workarounds: re-apply dictConfig, remove added handler) root cause
- FastMCP overrides your apps logging configuration on init duplicate or lost logs
- FastMCP overrides your apps logging configuration on init (duplicate or lost logs) fix
- FastMCP overrides your apps logging configuration on init (duplicate or lost logs) root cause
- how to fix FastMCP overrides your apps logging configuration on init duplicate or lost logs
- mcp-server app logging configuration init duplicate lost logs
- mcp-server app logging configuration init duplicate lost logs fix
- duplicate lost logs overrides your app logging configuration init mcp-server
- duplicate lost logs overrides your app logging configuration init mcp-server fix
- overrides your app logging duplicate lost logs
- overrides your app logging duplicate lost logs fix
- overrides your app logging mcp-server
- overrides your app logging mcp-server fix
- mcp-server log messages become duplicated after server created
- mcp-server log messages become duplicated after server created fix
- after server created log messages become duplicated mcp-server
- after server created log messages become duplicated mcp-server fix
- log messages become duplicated after server created
- log messages become duplicated after server created fix
- log messages become duplicated mcp-server
- log messages become duplicated mcp-server fix
- log messages become duplicated after the FastMCP server is created
