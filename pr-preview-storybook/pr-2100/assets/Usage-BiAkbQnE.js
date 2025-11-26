import{j as e,M as o}from"./blocks-Ce55-waZ.js";import{useMDXComponents as a}from"./index-BNaeAJxb.js";import{C as s}from"./card.stories-CPMzhP9U.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DWlMgzeF.js";const l=""+new URL("card-anatomy-B_6IPe6h.png",import.meta.url).href,c=""+new URL("card-first-action-area-DUKH3yMW.png",import.meta.url).href,d=""+new URL("card-horizontal-alignment-CKO4Fhrx.png",import.meta.url).href,h=""+new URL("card-horizontal-first-action-area-0W7-K4ku.png",import.meta.url).href,m=""+new URL("card-horizontal-mobile-CV9Mqo1G.png",import.meta.url).href,p=""+new URL("card-horizontal-second-action-area-BmbZ0-83.png",import.meta.url).href,u=""+new URL("card-horizontal-states-DGlltZrd.png",import.meta.url).href,x=""+new URL("card-second-action-area-7BMKMsYq.png",import.meta.url).href,i=""+new URL("card-simple-DCw8SAdt.png",import.meta.url).href,g=""+new URL("card-states-BrjvnL46.png",import.meta.url).href,f=""+new URL("card-with-button-DT3fmQsK.png",import.meta.url).href,j=""+new URL("card-with-link-By-tBmEg.png",import.meta.url).href,b=""+new URL("card-with-redirect-link-C9aRnXyt.png",import.meta.url).href;function r(t){const n={a:"a",br:"br",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:s}),`
`,e.jsx(n.h1,{id:"card",children:"Card"}),`
`,e.jsx(n.p,{children:"The card component provides users with a flexible layout for displaying various types of content. Cards can accommodate different functionalities, content types, and sizes, allowing designers to create visually appealing and informative card-based interfaces."}),`
`,e.jsxs(n.p,{children:[`| Resources                                                                                                             |
|-----------------------------------------------------------------------------------------------------------------------|
| `,e.jsx(n.a,{href:"https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=2420-2421",rel:"nofollow",children:"Figma card component →"})," |"]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h3,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"To present information or content in a visually appealing and organized manner."}),`
`,e.jsx(n.li,{children:"To showcase a combination of image, text, and a button for user interaction."}),`
`,e.jsx(n.li,{children:"To incorporate various content elements instead of a button and allow for more flexibility."}),`
`,e.jsx(n.li,{children:"To represent a hierarchical flow of information."}),`
`,e.jsx(n.li,{children:"To display content elements side by side, with equal importance like products or news."}),`
`]}),`
`,e.jsx(n.h3,{id:"when-not-to-use",children:"When not to use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"If the content you need to display is minimal or doesn't require any specific visual organization."}),`
`,e.jsx(n.li,{children:"If the content doesn't align with the available card variants (default card, text card, or additional functions card)."}),`
`,e.jsx(n.li,{children:"If the visual hierarchy of the content doesn't align with the vertical or horizontal layout."}),`
`]}),`
`,e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsx("img",{src:l,alt:"Card Anatomy"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Card Image (1)"}),e.jsx(n.br,{}),`
`,"A linked image which corresponds to the cards' content."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Card Overline (2)"}),e.jsx(n.br,{}),`
`,"An overline appears above the card title to provide additional context."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Card Title (3)"}),e.jsx(n.br,{}),`
`,"A core text element that briefly summarises the theme of the card."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Card Body (4)"}),e.jsx(n.br,{}),`
`,"The main content area of the card where the text copy is placed. The text should not be longer than ",e.jsx(n.strong,{children:"three lines"}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Additional interactive elements (5)"}),e.jsx(n.br,{}),`
`,"Another optional elements that can contain additional actions like buttons or links related to the card content."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Card Container (6)"}),e.jsx(n.br,{}),`
`,"The outermost container that wraps the entire card. It is surrounded with a border."]}),`
`,e.jsx(n.h2,{id:"layouts",children:"Layouts"}),`
`,e.jsx(n.h3,{id:"vertical",children:"Vertical"}),`
`,e.jsx(n.p,{children:"The vertical card Layout is the default and most commonly used layout. It consists of a single column of content and is ideal for presenting a compact summary of information."}),`
`,e.jsx("img",{src:i,alt:"Card Simple"}),`
`,e.jsx(n.h3,{id:"horizontal",children:"Horizontal"}),`
`,e.jsx(n.p,{children:'The horizontal layout is an alternative style of the card component, optimized for displaying content in a horizontal arrangement. It is particularly useful for showcasing images and brief descriptions. It is also possible to switch the image- and textual area. Note that some functionalities available in the vertical layout may not be applicable to the horizontal layout. For example, there is no "Button" and "Text Link" available.'}),`
`,e.jsx("img",{src:d,alt:"Card Horizontal Align"}),`
`,e.jsx(n.h2,{id:"mouse-interactions",children:"Mouse interactions"}),`
`,e.jsx(n.p,{children:"The card without buttons or links is completely clickable and leads the user to its corresponding detail page. It is also possible to add another action area to the card where you can insert buttons or links. The action area itself is not hoverable/clickable, so that the buttons and links have enough interactive space."}),`
`,e.jsx(n.h3,{id:"no-buttonlink",children:"No Button/Link"}),`
`,e.jsx(n.p,{children:"Simple card which is linked to a specific internal page."}),`
`,e.jsx("img",{src:i,alt:"Card Simple"}),`
`,e.jsx(n.h3,{id:"bold-link",children:"Bold Link"}),`
`,e.jsxs(n.p,{children:['The card may contain "text" links that offer additional actions to the user. For example, "Quick view" or "Data sheet" links provide quick access to specific actions related to the card content before clicking on the card itself. A ',e.jsx(n.strong,{children:"maximum of three"})," links are allowed."]}),`
`,e.jsx("img",{src:j,alt:"Card With Link"}),`
`,e.jsx(n.h4,{id:"icon-right",children:"Icon right"}),`
`,e.jsxs(n.p,{children:["A link can be also combined with a right aligned arrow icon. This link variant could be used to redirect the user to a new page and not the corresponding one. A ",e.jsx(n.strong,{children:"maximum of three"})," links are allowed."]}),`
`,e.jsx("img",{src:b,alt:"Card With Redirect Link"}),`
`,e.jsx(n.h3,{id:"button",children:"Button"}),`
`,e.jsxs(n.p,{children:["Buttons can be included, which serves as a direct action to improve or modify the content presented in the card. The primary, secondary and tertiary button can be used. Consider to place the ",e.jsx(n.strong,{children:e.jsx(n.a,{href:"https://infineon.github.io/infineon-design-system-stencil/?path=/docs/components-button--usage",rel:"nofollow",children:"buttons by importance"})}),`.
Use cases can be showing a CTA inside a card (e.g. sign-up process) or if you want to differentiate the CTAs being shown (e.g., Sign-up (Primary Button), Remind me later (Secondary Button) , Don’t ask me again (Tertiary)). A `,e.jsx(n.strong,{children:"maximum of three"})," buttons are allowed."]}),`
`,e.jsx("img",{src:f,alt:"Card with button"}),`
`,e.jsx(n.h2,{id:"action-areas",children:"Action areas"}),`
`,e.jsx(n.h3,{id:"first-action-area",children:"First action area"}),`
`,e.jsx(n.p,{children:"The fist action area is fully hoverable/clickable."}),`
`,e.jsx("img",{src:c,alt:"Card First Action Area",width:"50%"}),`
`,e.jsx("img",{src:h,alt:"Card HorizontalFirst Action Area"}),`
`,e.jsx(n.h3,{id:"second-action-area",children:"Second action area"}),`
`,e.jsx(n.p,{children:"If the second action area with buttons or links is activated, only these bring their native interactivity."}),`
`,e.jsx("img",{src:x,alt:"Card Second First Action Area",width:"50%"}),`
`,e.jsx("img",{src:p,alt:"Card Horizontal Second First Action Area"}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsx(n.p,{children:"The card has two different states: default and hover. While hovering over a card the card-border and the card-title is colored in ocean-500. While hovering over the buttons and links, the respective states become active and the whole card keeps its default state."}),`
`,e.jsx(n.h3,{id:"vertical-1",children:"Vertical"}),`
`,e.jsx("img",{src:g,alt:"Card States"}),`
`,e.jsx(n.h3,{id:"horizontal-1",children:"Horizontal"}),`
`,e.jsx("img",{src:u,alt:"Card Horizontal States"}),`
`,e.jsx(n.h2,{id:"mobile",children:"Mobile"}),`
`,e.jsx(n.h3,{id:"vertical-2",children:"Vertical"}),`
`,e.jsx(n.p,{children:"The layout of the vertical card remains the same in all viewports. Only the font size of the title changes slightly."}),`
`,e.jsx(n.h3,{id:"horizontal-2",children:"Horizontal"}),`
`,e.jsx(n.p,{children:"While the title, description and interactive elements are retained in desktop viewports, the description is deactivated in mobile viewports."}),`
`,e.jsx("img",{src:m,alt:"Card Horizontal Mobile"})]})}function z(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{z as default};
