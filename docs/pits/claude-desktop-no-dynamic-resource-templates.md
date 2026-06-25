# Claude Desktop does not list dynamic MCP resource templates (only static resources)

Pit ID: claude-desktop-no-dynamic-resource-templates
Status: verified
Confidence: high
Updated: 2026-06-21
Canonical source: https://github.com/laozhangzzz/agent-pitbook/blob/main/pits/mcp/claude-desktop-no-dynamic-resource-templates.md

## Summary

A dynamic MCP resource with a URI template (e.g. greeting://{name}) does not appear in Claude Desktop while static resources do. Claude Desktop calls resources/list but not resources/templates/list, so templated resources are never surfaced. Expose the capability as a tool, or verify support per client; the server is fine.

## Fast Answer

- Problem: a static resource works in Claude Desktop but a parameterized/templated resource does not show
- Root cause: Dynamic resources are exposed via resources/templates/list; static resources via resources/list.
- Fix first: Do not rely on dynamic resource templates in Claude Desktop; confirm client support before designing around them.
- Verify: Open the server in MCP Inspector and check the Resources tab.

## Queries This Answers

- dynamic resource not working in Claude desktop
- dynamic resource not working in Claude desktop fix
- dynamic resource not working in Claude desktop root cause
- Claude Desktop does not list dynamic MCP resource templates only static resources
- Claude Desktop does not list dynamic MCP resource templates (only static resources) fix
- Claude Desktop does not list dynamic MCP resource templates (only static resources) root cause
- how to fix Claude Desktop does not list dynamic MCP resource templates only static resources
- claude-desktop list dynamic mcp resource templates static resources

## Common Search Queries

- claude-desktop-no-dynamic-resource-templates
- claude desktop no dynamic resource templates
- Claude Desktop does not list dynamic MCP resource templates only static resources
- Claude Desktop does not list dynamic MCP resource templates (only static resources) fix
- Claude Desktop does not list dynamic MCP resource templates (only static resources) root cause
- claude-desktop
- resources
- resource-templates
- client-capability
- fastmcp
- mcp-server
- a static resource works in Claude Desktop but a parameterized/templated resource does not show

## Affected Tools

- claude-desktop
- mcp-server

## Tags

- mcp
- claude-desktop
- resources
- resource-templates
- client-capability
- fastmcp

## Symptoms

- a static resource works in Claude Desktop but a parameterized/templated resource does not show
- the server is correct and the template appears under the Inspector Resources tab
- time lost assuming the server code is wrong

## Environment

- framework: FastMCP / MCP Python SDK
- agent: claude-desktop
- constraints: client must call resources/templates/list to discover dynamic resources

## Root Cause

- Dynamic resources are exposed via resources/templates/list; static resources via resources/list.
- Claude Desktop calls resources/list only, so it never discovers resource templates.
- The server is fine; the client does not request templates.

## Fix

1. Do not rely on dynamic resource templates in Claude Desktop; confirm client support before designing around them.
2. Expose the parameterized capability as a tool, which Claude Desktop fully supports.
3. Verify what the server offers with MCP Inspector (Resources tab shows templates) to separate a client gap from a server bug.

## Verification

- Open the server in MCP Inspector and check the Resources tab. Expected: The resource template is listed, proving the server is correct and the gap is Claude Desktop not calling resources/templates/list.

## Sources

- modelcontextprotocol/python-sdk issue 263: dynamic resource not working in Claude desktop (maintainer confirms Desktop does not support dynamic resources; client calls resources/list not resources/templates/list) (issue): https://github.com/modelcontextprotocol/python-sdk/issues/263

## Workarounds

- Model parameterized data as tools instead of resource templates for Claude Desktop.

## Anti-patterns

- Assuming a missing resource in Claude Desktop means the server is misconfigured.
- Designing a server around resource templates without checking client support.

