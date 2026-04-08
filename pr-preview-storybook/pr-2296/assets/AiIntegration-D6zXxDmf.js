import{u as t,j as e,M as o}from"./blocks-D8kmrDbx.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BEcngRi7.js";function i(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Setup & installation/AI Integration"}),`
`,e.jsx(n.h1,{id:"ai-integration",children:"AI Integration"}),`
`,e.jsx(n.p,{children:"The Infineon Design System integrates with AI-powered development tools to help you build faster with accurate, context-aware suggestions."}),`
`,e.jsx(n.h2,{id:"code-connect",children:"Code Connect"}),`
`,e.jsx(n.p,{children:"Figma's Code Connect links design components to their code implementations, enabling AI tools to provide accurate suggestions that match your actual design system."}),`
`,e.jsx(n.h3,{id:"what-is-code-connect",children:"What is Code Connect?"}),`
`,e.jsxs(n.p,{children:["Code Connect connects Figma components to your codebase via the ",e.jsx(n.a,{href:"https://developers.figma.com/docs/figma-mcp-server",rel:"nofollow",children:"Figma MCP server"}),". When you or an AI references a design component, you get:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Real component paths and names from your codebase"}),`
`,e.jsx(n.li,{children:"Actual code snippets showing usage"}),`
`,e.jsx(n.li,{children:"Property mappings from design to code"}),`
`]}),`
`,e.jsx(n.h3,{id:"using-code-connect",children:"Using Code Connect"}),`
`,e.jsx(n.h4,{id:"in-figma-dev-mode",children:"In Figma Dev Mode"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"View real code snippets for each component"}),`
`,e.jsx(n.li,{children:"See how design properties map to code props"}),`
`]}),`
`,e.jsx(n.h4,{id:"with-ai-assistants-github-copilot-etc",children:"With AI Assistants (GitHub Copilot, etc.)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Share Figma URLs when implementing designs"}),`
`,e.jsxs(n.li,{children:["Get suggestions using actual DDS components (",e.jsx(n.code,{children:"ifx-button"}),", ",e.jsx(n.code,{children:"ifx-card"}),", etc.)"]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Sample prompts to try:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:'"Implement this Figma design: [paste Figma URL]"'})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:'"What component should I use for this button design? [paste Figma URL]"'})}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Example:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`// With Code Connect, AI suggests your real components
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
`]})]})}function h(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{h as default};
