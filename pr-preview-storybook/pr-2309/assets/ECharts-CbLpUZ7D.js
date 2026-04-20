import{u as r,j as e,M as a}from"./blocks-CFDEZ05C.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-A3HwJ4O3.js";const h=""+new URL("echarts-examples-CocZdcGd.png",import.meta.url).href;function n(s){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Setup & installation/ ECharts"}),`
`,e.jsx(t.h1,{id:"using-apache-echarts-with-our-design-system",children:"Using Apache ECharts with our Design System"}),`
`,e.jsx(t.h2,{id:"what-is-apache-echarts",children:"What is Apache ECharts?"}),`
`,e.jsx(t.p,{children:"Apache ECharts is a open source, free charting library that supports rich visualizations (bar, line, pie, maps, heatmaps, and more). It’s highly configurable, responsive and themeable, making it a great fit for building consistent data visuals."}),`
`,e.jsx(t.h2,{id:"why-are-we-offering-echarts-with-our-design-system",children:"Why are we offering ECharts with our Design System?"}),`
`,e.jsx(t.p,{children:"To ensure consistent look and feel across applications, we provide a custom ECharts theme that applies our design tokens. Using this theme lets teams build charts quickly while staying aligned with our DDS visual identity."}),`
`,e.jsx(t.h2,{id:"examples-of-basic-charts",children:"Examples of Basic Charts"}),`
`,e.jsx(t.p,{children:"Here are some examples of what your Charts with the custom DDS theme could look like:"}),`
`,e.jsx("img",{src:h,alt:"some Examples of ECharts with the DDS theme"}),`
`,e.jsx(t.h2,{id:"how-to-use-echarts-with-our-design-system",children:"How to use ECharts with our Design System"}),`
`,e.jsx(t.p,{children:"To get started with ECharts and our custom theme file, follow these steps:"}),`
`,e.jsx(t.h3,{id:"1-install-echarts",children:"1. Install ECharts"}),`
`,e.jsxs(t.p,{children:["Use the default ",e.jsx(t.a,{href:"https://echarts.apache.org/handbook/en/basics/download/",rel:"nofollow",children:"ECharts instructions"})," to install ECharts in your project."]}),`
`,e.jsx(t.h3,{id:"2-download-our-custom-theme",children:"2. Download our custom Theme"}),`
`,e.jsxs(t.p,{children:["Save either the dds-echarts-theme.json or dds-echarts-theme.js from our ",e.jsx(t.a,{href:"https://infineon.github.io/infineon-design-system-stencil/storybook/?path=/docs/foundations-tokens--development",rel:"nofollow",children:"Tokens Page"})," into your project."]}),`
`,e.jsx(t.h3,{id:"3-register-the-theme-and-create-a-chart",children:"3. Register the theme and create a chart"}),`
`,e.jsx(t.h3,{id:"option-1--json-theme",children:"Option 1 — JSON theme"}),`
`,e.jsx(t.h4,{id:"react--vue-javascript",children:"React & Vue (JavaScript)"}),`
`,e.jsxs(t.p,{children:["Place the JSON under ",e.jsx(t.code,{children:"src"})," (e.g., ",e.jsx(t.code,{children:"src/assets/dds-echarts-theme.json"}),")."]}),`
`,e.jsxs(t.p,{children:["for React: If using TypeScript, enable ",e.jsx(t.code,{children:'"resolveJsonModule": true'}),"."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`// register-theme.ts (import once, e.g., in App or a setup file)
import * as echarts from 'echarts';
import theme from './assets/dds-echarts-theme.json';

echarts.registerTheme('dds-echarts-theme', theme);

// Later, when you create a chart elsewhere:
// const chart = echarts.init(dom, 'dds-echarts-theme');
`})}),`
`,e.jsx(t.h4,{id:"angular",children:"Angular"}),`
`,e.jsxs(t.p,{children:["Place the JSON under  ",e.jsx(t.code,{children:"src"}),"  (e.g.,  ",e.jsx(t.code,{children:"src/assets/dds-echarts-theme.json"}),")."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`// main.ts

import * as echarts from 'echarts';
import theme from './assets/dds-echarts-theme.json';

echarts.registerTheme('dds-echarts-theme', theme as unknown as object);

// Later in a component:
// const chart = echarts.init(dom, 'dds-echarts-theme');
`})}),`
`,e.jsx(t.h4,{id:"vanilla-html",children:"Vanilla (HTML)"}),`
`,e.jsxs(t.p,{children:["Ensure the JSON file is public (e.g., in ",e.jsx(t.code,{children:"/public"}),")."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<script src="https://cdn.jsdelivr.net/npm/echarts@5/dist/echarts.min.js">
<\/script> 

<script>
// Register DDS theme once; create charts later
fetch('/dds-echarts-theme.json')
.then(r => r.json())
.then(t => echarts.registerTheme('dds-echarts-theme', t));

// Later:
// const chart = echarts.init(dom, 'dds-echarts-theme');
<\/script>
`})}),`
`,e.jsx(t.h3,{id:"option-2---javascript-theme",children:"Option 2 - JavaScript theme"}),`
`,e.jsx(t.h4,{id:"react--vue--angular",children:"React & Vue & Angular"}),`
`,e.jsx(t.p,{children:"Import once at app startup."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`// register-theme.ts
import 'echarts';
import './assets/dds-echarts-theme.js';

// Later:
// const chart = echarts.init(dom, 'dds-echarts-theme');
`})}),`
`,e.jsxs(t.p,{children:["Angular users can alternatively register the scripts globally via ",e.jsx(t.code,{children:"angular.json"}),":"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-json",children:`{
"scripts": [
"node_modules/echarts/dist/echarts.min.js",
"src/assets/dds-echarts-theme.js"
]}
`})}),`
`,e.jsx(t.h4,{id:"vanilla-html-1",children:"Vanilla (HTML)"}),`
`,e.jsx(t.p,{children:"Load ECharts first, then the theme JS."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<script src="https://cdn.jsdelivr.net/npm/echarts@5/dist/echarts.min.js"><\/script>
<script src="/dds-echarts-theme.js"><\/script>

<!-- Later:
const chart = echarts.init(dom, 'dds-echarts-theme');
-->
`})}),`
`,e.jsx(t.h3,{id:"4-adding-echarts-to-your-projects",children:"4. Adding ECharts to your projects"}),`
`,e.jsxs(t.p,{children:["To add a chart to your project, visit the  ",e.jsx(t.a,{href:"https://echarts.apache.org/examples/en/",rel:"nofollow",children:"Examples section"})," on the Apache ECharts website and choose one of the many charts available. They provide complete code snippets that you can copy into your project and adjust as needed. After that, apply our theming to the chart as explained above. You can also find a lot of helpful information in the ",e.jsx(t.a,{href:"https://echarts.apache.org/handbook/en/get-started/",rel:"nofollow",children:"ECharts Handbook"})," and ",e.jsx(t.a,{href:"https://echarts.apache.org/en/option.html#title",rel:"nofollow",children:"Chart Configuration"})," sections. Always make sure, that your chart container has an explicit height and width."]}),`
`,e.jsx(t.h3,{id:"5-adjusting-colors-individually",children:"5. Adjusting Colors individually"}),`
`,e.jsx(t.p,{children:"You can customize colors for specific data items in your charts. The approach varies depending on the chart type. For chart types where each series represents a distinct dataset, apply the color property directly to the series:"}),`
`,e.jsx(t.p,{children:e.jsxs(t.strong,{children:["Please always take the ",e.jsx(t.a,{href:"https://www.figma.com/design/ojJZvk4cyAizP9Lr984CEe/Infineon-DDS-%7C-Design-patterns?node-id=4679-1393&m=dev",rel:"nofollow",children:"Design Pattern for Diagrams & Charts"})," into consideration, as it ensures that the colors used in your visuals remain consistent and accessible."]})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`series: [
{ name: 'Item 1', 
	type: 'line', 
	stack: '2025', 
	data: [120, 132, 101, 134, 90, 230, 210], 
	color: '#DFF4F3'
},]
`})}),`
`,e.jsx(t.p,{children:"For chart types, where each data point has its own color, use itemStyle.color within the data object:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`data: [
{ value: 300, 
	name: 'Item 1', 
	itemStyle: {color: '#BE3283'} 
}],
`})})]})}function l(s={}){const{wrapper:t}={...r(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(n,{...s})}):n(s)}export{l as default};
