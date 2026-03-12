# DDS MCP Server

MCP server for the Infineon Design System (DDS). Provides AI assistants with access to component documentation, usage examples, and design system foundations.

## Available Tools

### Component Tools

- **`dds.listComponents`** - List all available DDS components
  - Input: `framework` (html, react, vue, angular)
  - Returns: Markdown table of component tags

- **`dds.getComponent`** - Get detailed component documentation
  - Input: 
    - `component` (string): Component name/tag (e.g., "ifx-button")
    - `framework` (html, react, vue, angular)
    - `include` (optional array): Sections to include - properties, events, slots, css, examples
  - Returns: Comprehensive markdown documentation with properties, events, slots, CSS customization, usage examples, and framework-specific notes

### Foundation & Setup Tools

- **`dds.listFoundations`** - List all design foundation stories and setup guides
  - Returns: Categorized list of available foundation stories (colors, typography, spacing, etc.) and setup documentation

- **`dds.getFoundation`** - Get specific foundation/setup documentation
  - Input: `story` (string): Story slug (e.g., "foundations/color", "setup/gettingstarted")
  - Returns: Detailed markdown content for the requested foundation or guide

## Data Sources

- **Component docs**: Stencil `docs.json` (generated from component source code)
- **Examples**: Rendered HTML from Storybook stories (`assets/examples/`)
- **Foundations**: Markdown documentation (`assets/foundations/`)

## Build

The build process has three steps:
1. TypeScript compilation
2. Render Storybook stories to static HTML
3. Copy assets to dist folder

From the monorepo root:
```bash
pnpm -w --filter @infineon/infineon-design-system-mcp run build
```

Or from `packages/mcp`:
```bash
pnpm build
```

Individual steps:
```bash
pnpm run tsc              # Compile TypeScript
pnpm run render-stories   # Render stories to HTML
pnpm run copy-assets      # Copy assets to dist/
```

## Run

### Standard (stdio)

From the monorepo root:
```bash
node packages/mcp/dist/index.js
```

From `packages/mcp`:
```bash
node dist/index.js
```

### Development with Inspector

Use the [@modelcontextprotocol/inspector](https://github.com/modelcontextprotocol/inspector) to test and debug the MCP server interactively:

```bash
npx @modelcontextprotocol/inspector node dist/index.js
```

This opens a web UI where you can:
- Browse available tools
- Test tool invocations with different parameters
- View request/response payloads
- Debug server behavior

## Usage in AI Clients

Configure your MCP client (Claude Desktop, Cline, etc.) with:

```json
{
  "mcpServers": {
    "dds": {
      "command": "node",
      "args": ["/path/to/dds/packages/mcp/dist/index.js"]
    }
  }
}
```
