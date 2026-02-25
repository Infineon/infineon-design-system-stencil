import{j as e,M as r}from"./blocks-Bht2ZrXC.js";import{useMDXComponents as t}from"./index-BpbRR6oJ.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CeSR5tSk.js";const d=""+new URL("grid-4px-example-oAebkAhy.png",import.meta.url).href,l=""+new URL("grid-placement-CKKDADJE.png",import.meta.url).href,c=""+new URL("grid-sizes-B4s6x0Gx.png",import.meta.url).href;function s(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Foundations/Grid"}),`
`,e.jsx(n.h1,{id:"grid",children:"Grid"}),`
`,e.jsx(n.p,{children:"Our grid system is built upon a robust foundation of design tokens, which establish consistent values for essential layout parameters such as breakpoints, spacing, and layout. These tokens serve as a guiding framework for constructing responsive layouts that seamlessly adapt across our diverse range of products. Notably, we leverage Tailwind CSS for utility-based styling, but the design tokens themselves remain versatile and independent, allowing for flexible usage with or without Tailwind's classes or custom media queries."}),`
`,e.jsx(n.h2,{id:"base-grid-unit",children:"Base grid unit"}),`
`,e.jsx(n.p,{children:"The base grid unit for our design system is 4px. The recommended spacing between each element, both horizontally and vertically, should be in increments of 4 pixels."}),`
`,e.jsx("img",{src:d,alt:"Grid Basics"}),`
`,e.jsx(n.h2,{id:"breakpoint-system",children:"Breakpoint system"}),`
`,e.jsx(n.p,{children:"The responsive layout grid is primarily used to arrange elements in a websites content area. When scaling a layout for different screen sizes, the responsive grid adjusts margin and content widths as well as the number of columns in the layout."}),`
`,e.jsx("img",{src:c,alt:"Grid Sizes"}),`
`,e.jsx(n.h3,{id:"media-queries",children:"Media queries"}),`
`,e.jsx(n.p,{children:"We’ve defined key breakpoints to support responsive design across all screen sizes, using responsive classes in combination with media queries for custom layouts."}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"size"}),e.jsx(n.th,{children:"token"}),e.jsx(n.th,{children:"media queries"}),e.jsx(n.th,{children:"container (width)"}),e.jsx(n.th,{children:"margin"}),e.jsx(n.th,{children:"columns"}),e.jsx(n.th,{children:"gutter"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"xs"}),e.jsx(n.td,{children:e.jsx("code",{children:"$ifxBreakpointXs"})}),e.jsx(n.td,{children:"min-width: 360px"}),e.jsx(n.td,{children:"scaling"}),e.jsx(n.td,{children:"16px"}),e.jsx(n.td,{children:"4"}),e.jsx(n.td,{children:"16px"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"s"}),e.jsx(n.td,{children:e.jsx("code",{children:"$ifxBreakpointS"})}),e.jsx(n.td,{children:"min-width: 576px"}),e.jsx(n.td,{children:"scaling"}),e.jsx(n.td,{children:"16px"}),e.jsx(n.td,{children:"8"}),e.jsx(n.td,{children:"16px"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"m"}),e.jsx(n.td,{children:e.jsx("code",{children:"$ifxBreakpointM"})}),e.jsx(n.td,{children:"min-width: 768px"}),e.jsx(n.td,{children:"scaling"}),e.jsx(n.td,{children:"24px"}),e.jsx(n.td,{children:"8"}),e.jsx(n.td,{children:"24px"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"l"}),e.jsx(n.td,{children:e.jsx("code",{children:"$ifxBreakpointL"})}),e.jsx(n.td,{children:"min-width: 992px"}),e.jsx(n.td,{children:"scaling"}),e.jsx(n.td,{children:"32px"}),e.jsx(n.td,{children:"12"}),e.jsx(n.td,{children:"24px"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"xl"}),e.jsx(n.td,{children:e.jsx("code",{children:"$ifxBreakpointXl"})}),e.jsx(n.td,{children:"min-width: 1200px"}),e.jsx(n.td,{children:"scaling"}),e.jsx(n.td,{children:"56px"}),e.jsx(n.td,{children:"12"}),e.jsx(n.td,{children:"32px"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"2xl"}),e.jsx(n.td,{children:e.jsx("code",{children:"$ifxBreakpoint2Xl"})}),e.jsx(n.td,{children:"min-width: 1400px"}),e.jsx(n.td,{children:"scaling"}),e.jsx(n.td,{children:"56px"}),e.jsx(n.td,{children:"12"}),e.jsx(n.td,{children:"32px"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"3xl"}),e.jsx(n.td,{children:e.jsx("code",{children:"$ifxBreakpoint3Xl"})}),e.jsx(n.td,{children:"min-width: 1920px"}),e.jsx(n.td,{children:"scaling"}),e.jsx(n.td,{children:"56px"}),e.jsx(n.td,{children:"16"}),e.jsx(n.td,{children:"32px"})]})]})]}),`
`,e.jsx(n.h4,{id:"behaviour",children:"Behaviour"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"container (width)"})," in the given table is described as ",e.jsx(n.strong,{children:"scaling"})," for all breakpoints, which means it does not have a fixed maximum width. Instead, it adapts fluidly to the viewport size, constrained by the specified breakpoints and margins. Here's how it behaves:"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Responsive scaling"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["At each breakpoint (e.g., ",e.jsx(n.code,{children:"xs"}),", ",e.jsx(n.code,{children:"s"}),", ",e.jsx(n.code,{children:"m"}),"), the container's width scales proportionally with the size of the viewport, ensuring that the layout adjusts smoothly without hard limits on its size."]}),`
`,e.jsx(n.li,{children:"This approach allows content to expand or contract while maintaining consistent spacing (margins, columns, and gutters)."}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Margins provide padding"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.strong,{children:"margin"})," value (e.g., 16px, 24px, 32px) acts as a buffer between the container and the edges of the viewport."]}),`
`,e.jsx(n.li,{children:"As the viewport grows, the scaling container respects these margins, ensuring the content does not touch the screen edges."}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Breakpoint-triggered adjustments"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The container adapts its ",e.jsx(n.strong,{children:"number of columns"})," and ",e.jsx(n.strong,{children:"gutter sizes"})," at different breakpoints. For example:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["At ",e.jsx(n.code,{children:"xs"}),", there are 4 columns with 16px gutters."]}),`
`,e.jsxs(n.li,{children:["At ",e.jsx(n.code,{children:"m"}),", there are 8 columns with 24px gutters."]}),`
`,e.jsxs(n.li,{children:["At ",e.jsx(n.code,{children:"l"})," and beyond, there are 12 columns with increasing gutters."]}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:"This ensures a logical and visually appealing layout progression as screen sizes increase."}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"No maximum width constraint"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:'Since the container is described as scaling, it does not lock its width at a certain size (like "fixed" containers might).'}),`
`,e.jsxs(n.li,{children:["However, starting from ",e.jsx(n.code,{children:"3xl"}),", there are 16 columns. This could indicate a design strategy to manage extra-large screens, ensuring a harmonious layout even on ultra-wide displays."]}),`
`]}),`
`,e.jsx(n.h2,{id:"grid-placement",children:"Grid placement"}),`
`,e.jsx(n.p,{children:"A website or application can contain different areas where content is displayed. Typical areas are, for example, header navigation, sidebar navigation, and side panel. These are mainly used for the navigation elements. Finally, there is of course the content area, where the actual informative content can be found. Our grid is always placed on the content area."}),`
`,e.jsx("img",{src:l,alt:"Grid Placement"})]})}function p(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{p as default};
