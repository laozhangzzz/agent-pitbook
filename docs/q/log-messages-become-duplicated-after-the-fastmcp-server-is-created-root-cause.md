# log messages become duplicated after the FastMCP server is created root cause

Known fix landing page for an exact problem query.

Pit ID: fastmcp-overrides-logging-configuration
HTML query page: https://laozhangzzz.github.io/agent-pitbook/q/log-messages-become-duplicated-after-the-fastmcp-server-is-created-root-cause.html
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
- log messages become duplicated after the FastMCP server is created
- how to fix log messages become duplicated after the FastMCP server is created
- log messages become duplicated after the FastMCP server is created root cause
- mcp-server log messages become duplicated after the FastMCP server is created
- mcp-server log messages become duplicated after the FastMCP server is created fix
- python-sdk log messages become duplicated after the FastMCP server is created
- python-sdk log messages become duplicated after the FastMCP server is created fix
- a custom/structured global logging handler stops taking effect
- how to fix a custom/structured global logging handler stops taking effect
- a custom/structured global logging handler stops taking effect root cause
- mcp-server a custom/structured global logging handler stops taking effect
- mcp-server a custom/structured global logging handler stops taking effect fix
- python-sdk a custom/structured global logging handler stops taking effect
- python-sdk a custom/structured global logging handler stops taking effect fix
- fastmcp a custom/structured global logging handler stops taking effect
- fastmcp a custom/structured global logging handler stops taking effect fix
- the change appears exactly when FastMCP(...) is instantiated

