# FastMCP overrides your app's logging configuration on init (duplicate or lost logs)

Pit ID: fastmcp-overrides-logging-configuration
Status: candidate
Confidence: medium
Updated: 2026-06-21
Canonical source: https://github.com/laozhangzzz/agent-pitbook/blob/main/pits/mcp/fastmcp-overrides-logging-configuration.md

## Summary

Constructing a FastMCP server reconfigures Python's global logging (a configure_logging call), disturbing handlers your app already set up, so logs duplicate or your custom handler is bypassed. There is no opt-out flag yet; re-apply your logging config (logging.config.dictConfig) after building FastMCP, or remove the handler it added.

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

## Common Search Queries

- fastmcp-overrides-logging-configuration
- fastmcp overrides logging configuration
- FastMCP overrides your apps logging configuration on init duplicate or lost logs
- FastMCP overrides your apps logging configuration on init (duplicate or lost logs) fix
- FastMCP overrides your apps logging configuration on init (duplicate or lost logs) root cause
- fastmcp
- python-sdk
- logging
- configuration
- side-effects
- mcp-server
- log messages become duplicated after the FastMCP server is created

## Affected Tools

- mcp-server
- python-sdk
- fastmcp

## Tags

- mcp
- fastmcp
- python-sdk
- logging
- configuration
- side-effects

## Symptoms

- log messages become duplicated after the FastMCP server is created
- a custom/structured global logging handler stops taking effect
- the change appears exactly when FastMCP(...) is instantiated

## Environment

- language: Python
- framework: FastMCP / MCP Python SDK
- constraints: FastMCP embedded in a larger process with its own logging config

## Root Cause

- FastMCP performs global logging configuration at startup (configure_logging) instead of confining itself to its own logger.
- Logging config is process-global, so this mutates handlers the host app already installed, duplicating messages or routing through the wrong handler.
- There is no built-in opt-out flag at time of writing.

## Fix

1. Re-apply your logging configuration after constructing FastMCP so your handlers win.

```bash
logging.config.dictConfig(YOUR_LOGGING_CONFIG)
```
2. Or enumerate and remove the handler FastMCP added from the affected logger after instantiation.
3. Track the upstream request for an option to disable FastMCP's logging reconfiguration and adopt it when released.

## Verification

- Emit logs after re-applying your config. Expected: No duplicate lines; your custom/structured handler formats MCP server logs as intended.

## Sources

- modelcontextprotocol/python-sdk issue 420: Option to not rewrite the logging configuration (workarounds: re-apply dictConfig, remove added handler) (issue): https://github.com/modelcontextprotocol/python-sdk/issues/420

## Workarounds

- Add a FastMCP logger entry to your dictConfig and re-apply it after building the server.

## Anti-patterns

- Configuring global logging before constructing FastMCP and assuming it survives.
- Monkey-patching configure_logging to a no-op as a permanent solution.

