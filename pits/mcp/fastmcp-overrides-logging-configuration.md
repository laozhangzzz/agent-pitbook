---
id: fastmcp-overrides-logging-configuration
title: FastMCP overrides your app's logging configuration on init (duplicate or lost logs)
status: candidate
confidence: medium
created_at: 2026-06-21
updated_at: 2026-06-21
last_verified: 2026-06-21
tags: [mcp, fastmcp, python-sdk, logging, configuration, side-effects]
affected_tools: [mcp-server, python-sdk, fastmcp]
---

# FastMCP overrides your app's logging configuration on init (duplicate or lost logs)

## Summary

When you embed FastMCP in a larger Python process, constructing the `FastMCP` server reconfigures the `logging` library: it calls `configure_logging`, which can add a handler and disturb the handlers your application already set up. The result is duplicated log lines or your custom handler being bypassed. Re-apply your logging config after constructing FastMCP.

## Symptoms

- Log messages become duplicated after the FastMCP server is created.
- A custom/structured logging handler you configured globally stops taking effect.
- The change appears precisely when `FastMCP(...)` is instantiated.

## Root Cause

FastMCP performs global logging configuration at startup (a `configure_logging` call) rather than confining itself to its own logger. Because logging config is process-global, this mutates handlers the host application already installed, so messages duplicate or route through the wrong handler. There is no built-in opt-out flag at time of writing.

## Fix

1. Re-apply your logging configuration after constructing the FastMCP object, e.g. call `logging.config.dictConfig(YOUR_LOGGING_CONFIG)` once the server exists, so your handlers win.
2. Alternatively, after instantiation, enumerate and remove the handler FastMCP added from the affected logger.
3. Track the upstream request for an option to disable FastMCP's logging reconfiguration and adopt it when released.

## Verification

After re-applying your config, log lines are no longer duplicated and your custom/structured handler formats MCP server logs as intended.

## Anti-Patterns

- Configuring global logging before constructing FastMCP and assuming it survives.
- Monkey-patching `configure_logging` to a no-op as a permanent solution (fragile across SDK versions).

<!-- pit-record
{
  "id": "fastmcp-overrides-logging-configuration",
  "title": "FastMCP overrides your app's logging configuration on init (duplicate or lost logs)",
  "summary": "Constructing a FastMCP server reconfigures Python's global logging (a configure_logging call), disturbing handlers your app already set up, so logs duplicate or your custom handler is bypassed. There is no opt-out flag yet; re-apply your logging config (logging.config.dictConfig) after building FastMCP, or remove the handler it added.",
  "status": "candidate",
  "confidence": "medium",
  "created_at": "2026-06-21",
  "updated_at": "2026-06-21",
  "last_verified": "2026-06-21",
  "tags": ["mcp", "fastmcp", "python-sdk", "logging", "configuration", "side-effects"],
  "affected_tools": ["mcp-server", "python-sdk", "fastmcp"],
  "symptoms": [
    "log messages become duplicated after the FastMCP server is created",
    "a custom/structured global logging handler stops taking effect",
    "the change appears exactly when FastMCP(...) is instantiated"
  ],
  "environment": {
    "language": "Python",
    "framework": "FastMCP / MCP Python SDK",
    "constraints": ["FastMCP embedded in a larger process with its own logging config"]
  },
  "root_cause": [
    "FastMCP performs global logging configuration at startup (configure_logging) instead of confining itself to its own logger.",
    "Logging config is process-global, so this mutates handlers the host app already installed, duplicating messages or routing through the wrong handler.",
    "There is no built-in opt-out flag at time of writing."
  ],
  "fix": [
    {
      "step": "Re-apply your logging configuration after constructing FastMCP so your handlers win.",
      "command": "logging.config.dictConfig(YOUR_LOGGING_CONFIG)"
    },
    {
      "step": "Or enumerate and remove the handler FastMCP added from the affected logger after instantiation."
    },
    {
      "step": "Track the upstream request for an option to disable FastMCP's logging reconfiguration and adopt it when released."
    }
  ],
  "verification": [
    {
      "method": "Emit logs after re-applying your config.",
      "expected": "No duplicate lines; your custom/structured handler formats MCP server logs as intended."
    }
  ],
  "workarounds": [
    "Add a FastMCP logger entry to your dictConfig and re-apply it after building the server."
  ],
  "anti_patterns": [
    "Configuring global logging before constructing FastMCP and assuming it survives.",
    "Monkey-patching configure_logging to a no-op as a permanent solution."
  ],
  "source_links": [
    {
      "title": "modelcontextprotocol/python-sdk issue 420: Option to not rewrite the logging configuration (workarounds: re-apply dictConfig, remove added handler)",
      "type": "issue",
      "url": "https://github.com/modelcontextprotocol/python-sdk/issues/420",
      "accessed_at": "2026-06-21"
    }
  ],
  "related": [],
  "safety": {
    "external_text_trusted": false,
    "requires_confirmation": false,
    "notes": ["Status candidate: behavior is reported as a side effect with no official opt-out at time of writing; verify against your SDK version."]
  }
}
-->
