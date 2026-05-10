import{u as i,j as e,M as o}from"./blocks-D936I3mT.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-STsZKZKx.js";function t(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Setup & installation/AI Integration"}),`
`,e.jsx(n.h1,{id:"ai-integration",children:"AI Integration"}),`
`,e.jsx(n.p,{children:"The Infineon Design System integrates with AI-powered development tools to help you build faster with accurate, context-aware suggestions."}),`
`,e.jsx(n.h2,{id:"dds-mcp-server",children:"DDS MCP Server"}),`
`,e.jsx(n.p,{children:"The DDS MCP (Model Context Protocol) Server provides AI assistants direct access to component documentation, usage examples, and design system foundations."}),`
`,e.jsx(n.h3,{id:"what-is-the-dds-mcp-server",children:"What is the DDS MCP Server?"}),`
`,e.jsx(n.p,{children:"The DDS MCP Server is a local tool that gives AI assistants like GitHub Copilot real-time access to:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Complete component documentation (properties, events, slots, CSS customization)"}),`
`,e.jsx(n.li,{children:"Framework-specific code examples (HTML, React, Vue, Angular)"}),`
`,e.jsx(n.li,{children:"Design foundations (colors, typography, spacing, etc.)"}),`
`,e.jsx(n.li,{children:"Setup guides and best practices"}),`
`]}),`
`,e.jsx(n.p,{children:"When you ask questions about DDS components, AI can query the server directly instead of relying on generic knowledge or outdated training data."}),`
`,e.jsx(n.h3,{id:"setting-up-the-dds-mcp-server",children:"Setting Up the DDS MCP Server"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Install as a dev dependency in your project:"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`pnpm add -D @infineon/design-system-mcp@<your-dds-version>
`})}),`
`,e.jsxs(n.ol,{start:"2",children:[`
`,e.jsx(n.li,{children:"Run the setup command from your project root:"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`dds-mcp setup
`})}),`
`,e.jsxs(n.ol,{start:"3",children:[`
`,e.jsx(n.li,{children:"Restart VS Code or GitHub Copilot"}),`
`]}),`
`,e.jsxs(n.p,{children:["The setup creates ",e.jsx(n.code,{children:".vscode/mcp.json"})," in your workspace and configures the DDS server using your local installation."]}),`
`,e.jsx(n.h3,{id:"using-the-dds-mcp-server",children:"Using the DDS MCP Server"}),`
`,e.jsx(n.p,{children:"Once configured, AI assistants automatically recognize when you need DDS components and provide accurate suggestions:"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Natural language prompts that work:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:'"Add a primary button to my form"'})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:'"Show me how to use the Infineon card component"'})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:'"What spacing values should I use?"'})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:'"List all available input components"'})}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Example interaction:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`You: "Add an Infineon button that submits the form"

AI uses infineon_get_component_docs → Gets official docs

AI responds with accurate code:
\`\`\`tsx
import { IfxButton } from '@infineon/design-system-react';

<IfxButton variant="primary" type="submit">
  Submit Form
</IfxButton>
`})}),`
`,e.jsx(n.p,{children:"The AI knows:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Correct import paths"}),`
`,e.jsx(n.li,{children:"Real property names and types"}),`
`,e.jsx(n.li,{children:"Working code examples from your DDS version"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`
### Benefits

- **Always Up to Date** - Reads directly from your installed DDS version
- **Framework-Specific** - Get examples for your exact framework (React, Vue, Angular, HTML)
- **Complete Documentation** - All properties, events, slots, and CSS variables
- **Team Consistency** - Everyone uses the same version via git-committed config
- **Faster Development** - No need to search Storybook manually

### Requirements

- VS Code with GitHub Copilot enabled
- Node.js 18+ (for running the MCP server)

### Learn More

See the [DDS MCP Server README](https://github.com/Infineon/infineon-design-system-stencil/tree/master/packages/mcp) for advanced configuration and development details.

## Code Connect

Figma's Code Connect links design components to their code implementations, enabling AI tools to provide accurate suggestions that match your actual design system.

### What is Code Connect?

Code Connect connects Figma components to your codebase via the [Figma MCP server](https://developers.figma.com/docs/figma-mcp-server). When you or an AI references a design component, you get:

- Real component paths and names from your codebase
- Actual code snippets showing usage
- Property mappings from design to code

### Using Code Connect

#### In Figma Dev Mode
- View real code snippets for each component
- See how design properties map to code props

#### With AI Assistants (GitHub Copilot, etc.)
- Share Figma URLs when implementing designs
- Get suggestions using actual DDS components (\`ifx-button\`, \`ifx-card\`, etc.)

**Sample prompts to try:**
- \`"Implement this Figma design: [paste Figma URL]"\`
- \`"What component should I use for this button design? [paste Figma URL]"\`

**Example:**
\`\`\`jsx
// With Code Connect, AI suggests your real components
import { IfxButton } from '@infineon/infineon-design-system-react';

<IfxButton variant="primary" size="m">Click me</IfxButton>
`})}),`
`,e.jsx(n.p,{children:"Instead of generic code:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`// Without Code Connect
<button className="primary-button">Click me</button>
`})}),`
`,e.jsx(n.h3,{id:"benefits",children:"Benefits"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"No More Guessing"})," - AI knows which component to use from our actual design system"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Less Context Switching"})," - Get design details without leaving your editor"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Accurate from the Start"})," - Real prop names and types, not generic placeholders"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Speed Up Implementation"})," - From Figma URL to working code in seconds"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Consistency"})," - Everyone builds with the same components and patterns"]}),`
`]}),`
`,e.jsx(n.h3,{id:"requirements",children:"Requirements"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Dev or Full seat on Figma's Organization or Enterprise plan"}),`
`,e.jsx(n.li,{children:"VS Code with GitHub Copilot enabled"}),`
`]}),`
`,e.jsx(n.h3,{id:"setting-up-the-figma-mcp-server-in-vs-code",children:"Setting Up the Figma MCP Server in VS Code"}),`
`,e.jsx(n.p,{children:"To use Code Connect with GitHub Copilot in VS Code:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Open the command palette (",e.jsx(n.code,{children:"Cmd/Ctrl + Shift + P"}),")"]}),`
`,e.jsxs(n.li,{children:["Search for and select ",e.jsx(n.strong,{children:"MCP: Open User Configuration"})]}),`
`,e.jsxs(n.li,{children:["In the ",e.jsx(n.code,{children:"mcp.json"})," file that opens, paste this code:"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "inputs": [],
  "servers": {
    "figma": {
      "url": "https://mcp.figma.com/mcp",
      "type": "http"
    }
  }
}
`})}),`
`,e.jsxs(n.ol,{start:"4",children:[`
`,e.jsxs(n.li,{children:["Save the file (",e.jsx(n.code,{children:"Cmd/Ctrl + S"}),")"]}),`
`,e.jsxs(n.li,{children:["Click ",e.jsx(n.strong,{children:"Start"})," above the Figma server name"]}),`
`,e.jsxs(n.li,{children:["Click ",e.jsx(n.strong,{children:"Allow Access"})," to authenticate with your Figma account"]}),`
`,e.jsx(n.li,{children:"The Figma MCP server should now show as running in VS Code"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"How to use it:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:'In Figma, right-click a layer/frame and select "Copy link to selection"'}),`
`,e.jsx(n.li,{children:"In VS Code, paste the URL in your prompt to GitHub Copilot"}),`
`,e.jsx(n.li,{children:"AI will use the design context to provide accurate component suggestions"}),`
`]}),`
`,e.jsx(n.h3,{id:"learn-more",children:"Learn More"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://help.figma.com/hc/en-us/articles/35281350665623",rel:"nofollow",children:"Complete Setup Guide"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://developers.figma.com/docs/figma-mcp-server",rel:"nofollow",children:"Figma MCP Server"})}),`
`]})]})}function d(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{d as default};
