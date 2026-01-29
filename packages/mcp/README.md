# DDS MCP Server

MCP server for the Infineon Design System (DDS).

- Tools: `dds.listComponents`, `dds.getComponent`
- Output: Markdown only
- Data source: Stencil `dist/docs.json` (from the monorepo build output or the installed Stencil package).

## Build

From repo root:

- `npm -w packages/mcp run build`

## Run (stdio)

From repo root:

- `node packages/mcp/dist/cli.js`
