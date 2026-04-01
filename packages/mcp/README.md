# DDS MCP Server

MCP server for the Infineon Design System (DDS). Provides AI assistants with access to component documentation, usage examples, and design system foundations.

## Installation & Setup

Install as a dev dependency in your project:

```bash
pnpm add -D @infineon/infineon-design-system-mcp
```

Run the setup command from your project root:

```bash
dds-mcp setup
```

This will create `.vscode/mcp.json` with the DDS MCP server configuration. Restart VS Code or GitHub Copilot to activate.

**Benefits:**
- Version matches your DDS package
- Team shares same setup via git
- No global installation conflicts

### Manual Configuration

If you prefer manual setup, create `.vscode/mcp.json`:

```json
{
  "servers": {
    "dds": {
      "command": "npx",
      "args": ["--no", "@infineon/infineon-design-system-mcp"]
    }
  }
}
```

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
  - Returns: Comprehensive markdown documentation with properties, events, slots, CSS customization, framework-specific code examples, and framework-specific notes

### Foundation Tools

- **`dds.listFoundations`** - List all design foundation stories and setup guides
  - Returns: Categorized list of available foundation stories (colors, typography, spacing, etc.)

- **`dds.getFoundation`** - Get specific foundation/setup documentation
  - Input: `story` (string): Story slug (e.g., "foundations/color", "setup/gettingstarted")
  - Returns: Detailed markdown content for the requested foundation or guide

## Development

### Build

```bash
# From monorepo root
pnpm -w --filter @infineon/infineon-design-system-mcp run build

# From packages/mcp
pnpm build
```

### Debug with Inspector

```bash
pnpm run inspect
```

Opens a web UI to browse tools, test invocations, and debug server behavior.

## Data Sources

- **Component docs**: Stencil `docs.json`
- **Examples**: ComponentInfo JSON (extracted from Storybook stories via dds-tooling)
- **Foundations**: Markdown documentation (`assets/foundations/`)
