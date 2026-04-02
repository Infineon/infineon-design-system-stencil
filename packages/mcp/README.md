# Infineon Design System MCP Server

MCP server for the Infineon Design System (DDS). Provides AI assistants with intelligent access to component documentation, usage examples, and design system foundations.

**What makes this special:** The AI automatically recognizes when you need design system components and suggests the right Infineon components with proper usage patterns.

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
    "design-system": {
      "command": "npx",
      "args": ["--no", "@infineon/design-system-mcp"]
    }
  }
}
```

## Usage Examples

Once configured, your AI assistant will automatically recognize when to use Infineon Design System components:

**Example 1: Adding a button**
```
👤 User: "Add a primary button that submits the form"

🤖 Assistant: [Calls infineon_get_component_docs with component="ifx-button"]

Here's the Infineon button component:

```tsx
import { IfxButton } from '@infineon/infineon-design-system-react';

<IfxButton variant="primary" type="submit">
  Submit Form
</IfxButton>
```
```

**Example 2: Browsing components**
```
👤 User: "What input components are available?"

🤖 Assistant: [Calls infineon_list_components with framework="react"]

Here are the available Infineon input components:
- ifx-text-field
- ifx-select
- ifx-checkbox
- ifx-radio-button
...
```

**Example 3: Design tokens**
```
👤 User: "What spacing values should I use?"

🤖 Assistant: [Calls infineon_get_foundation_docs with story="foundations/spacing"]

Infineon Design System spacing scale:
- xs: 4px
- sm: 8px
- md: 16px
...
```

### Natural Language Triggers

The AI will automatically use these tools when you mention:
- **Components**: "add a button", "create an input field", "infineon card component"
- **Styling**: "what colors should I use?", "spacing guidelines", "typography scale"
- **Setup**: "how do I install DDS?", "getting started with infineon design system"
- **Discovery**: "list all components", "what UI elements are available?"

## Available Tools

### Component Tools

- **`infineon_list_components`** - List all available Infineon DDS components
  - Input: `framework` (html, react, vue, angular) - defaults to `react`
  - Returns: Markdown table with component names and descriptions
  - **When to use**: Browsing available components, don't know exact component name

- **`infineon_get_component_docs`** - Get comprehensive component documentation ⭐ **Primary Tool**
  - Input: 
    - `component` (string): Component name (e.g., "ifx-button", "ifx-text-field")
    - `framework` (html, react, vue, angular) - defaults to `react`
    - `include` (optional array): Limit sections - properties, events, slots, css, examples
  - Returns: Complete documentation with props, events, slots, styling, code examples, framework-specific notes
  - **When to use**: ANY component implementation question - this is the default tool for components

### Foundation Tools

- **`infineon_list_foundations`** - List design foundations and setup guides
  - Returns: Categorized list of foundation stories (colors, typography, spacing, icons, etc.)
  - **When to use**: Design tokens, setup questions, browsing guidelines

- **`infineon_get_foundation_docs`** - Get detailed foundation documentation
  - Input: `story` (string): Story slug (e.g., "foundations/color", "setup/gettingstarted")
  - Returns: Detailed content for colors, spacing, typography, or setup guides
  - **When to use**: Specific design token questions, getting started guides

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
