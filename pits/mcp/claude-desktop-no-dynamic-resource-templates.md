---
id: claude-desktop-no-dynamic-resource-templates
title: Claude Desktop does not list dynamic MCP resource templates (only static resources)
status: verified
confidence: high
created_at: 2026-06-21
updated_at: 2026-06-21
last_verified: 2026-06-21
tags: [mcp, claude-desktop, resources, resource-templates, client-capability, fastmcp]
affected_tools: [claude-desktop, mcp-server]
---

# Claude Desktop does not list dynamic MCP resource templates (only static resources)

## Summary

A dynamic MCP resource defined with a URI template (e.g. `@mcp.resource("greeting://{name}")`) does not appear in Claude Desktop, while a static resource (`config://app`) does. This is a Claude Desktop client limitation: it calls `resources/list` (static) but not `resources/templates/list` (dynamic), so templated resources are never surfaced.

## Symptoms

- A static resource works in Claude Desktop, but a parameterized/templated resource does not show.
- The server is correct and the template appears under the Inspector's Resources tab.
- Time lost assuming the server code is wrong.

## Root Cause

Dynamic resources are exposed via `resources/templates/list`; static resources via `resources/list`. Claude Desktop calls `resources/list` only, so it never discovers resource templates. The server is fine; the client does not request templates.

## Fix

1. Do not rely on dynamic resource templates in Claude Desktop. Confirm support for your client before designing around resource templates.
2. Expose the same capability as a tool (which Claude Desktop fully supports) when you need parameterized access.
3. Verify what the server actually offers with MCP Inspector (Resources tab shows templates) to separate a client gap from a server bug.

## Verification

MCP Inspector lists the resource template (proving the server is correct), confirming the gap is Claude Desktop not calling `resources/templates/list`.

## Anti-Patterns

- Assuming a missing resource in Claude Desktop means the server is misconfigured.
- Designing a server around resource templates without checking client support.

<!-- pit-record
{
  "id": "claude-desktop-no-dynamic-resource-templates",
  "title": "Claude Desktop does not list dynamic MCP resource templates (only static resources)",
  "summary": "A dynamic MCP resource with a URI template (e.g. greeting://{name}) does not appear in Claude Desktop while static resources do. Claude Desktop calls resources/list but not resources/templates/list, so templated resources are never surfaced. Expose the capability as a tool, or verify support per client; the server is fine.",
  "status": "verified",
  "confidence": "high",
  "created_at": "2026-06-21",
  "updated_at": "2026-06-21",
  "last_verified": "2026-06-21",
  "tags": ["mcp", "claude-desktop", "resources", "resource-templates", "client-capability", "fastmcp"],
  "affected_tools": ["claude-desktop", "mcp-server"],
  "symptoms": [
    "a static resource works in Claude Desktop but a parameterized/templated resource does not show",
    "the server is correct and the template appears under the Inspector Resources tab",
    "time lost assuming the server code is wrong"
  ],
  "environment": {
    "framework": "FastMCP / MCP Python SDK",
    "agent": "claude-desktop",
    "constraints": ["client must call resources/templates/list to discover dynamic resources"]
  },
  "root_cause": [
    "Dynamic resources are exposed via resources/templates/list; static resources via resources/list.",
    "Claude Desktop calls resources/list only, so it never discovers resource templates.",
    "The server is fine; the client does not request templates."
  ],
  "fix": [
    {
      "step": "Do not rely on dynamic resource templates in Claude Desktop; confirm client support before designing around them."
    },
    {
      "step": "Expose the parameterized capability as a tool, which Claude Desktop fully supports."
    },
    {
      "step": "Verify what the server offers with MCP Inspector (Resources tab shows templates) to separate a client gap from a server bug."
    }
  ],
  "verification": [
    {
      "method": "Open the server in MCP Inspector and check the Resources tab.",
      "expected": "The resource template is listed, proving the server is correct and the gap is Claude Desktop not calling resources/templates/list."
    }
  ],
  "workarounds": [
    "Model parameterized data as tools instead of resource templates for Claude Desktop."
  ],
  "anti_patterns": [
    "Assuming a missing resource in Claude Desktop means the server is misconfigured.",
    "Designing a server around resource templates without checking client support."
  ],
  "source_links": [
    {
      "title": "modelcontextprotocol/python-sdk issue 263: dynamic resource not working in Claude desktop (maintainer confirms Desktop does not support dynamic resources; client calls resources/list not resources/templates/list)",
      "type": "issue",
      "url": "https://github.com/modelcontextprotocol/python-sdk/issues/263",
      "accessed_at": "2026-06-21"
    }
  ],
  "related": [],
  "safety": {
    "external_text_trusted": false,
    "requires_confirmation": false,
    "notes": ["Client capabilities change over time; re-verify whether Claude Desktop supports resource templates in your version."]
  }
}
-->
