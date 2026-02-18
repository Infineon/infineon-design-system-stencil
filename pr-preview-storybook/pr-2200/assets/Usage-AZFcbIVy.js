import{j as t,M as i}from"./blocks-BoFVtf_Y.js";import{useMDXComponents as r}from"./index-DPw7gB8J.js";import{B as s}from"./button.stories-iboFB2UR.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-D_ica_UD.js";import"./icons-DyNdhNdc.js";const a=""+new URL("button-variant-primary-CwE_cAy9.png",import.meta.url).href,c=""+new URL("primary-button-states-Dcuy0oTv.png",import.meta.url).href,h=""+new URL("button-variant-secondary-D7xF8nyX.png",import.meta.url).href,l=""+new URL("secondary-button-states-BS9hgyml.png",import.meta.url).href,d=""+new URL("button-variant-tertiary-DJ5cFroa.png",import.meta.url).href,u=""+new URL("tertiary-button-states-CxcUxHd0.png",import.meta.url).href,m=""+new URL("button-variant-error-B49eYbbt.png",import.meta.url).href,p=""+new URL("error-button-states-C5tk_xtP.png",import.meta.url).href,g=""+new URL("button-icon-left-Bx5SFvIO.png",import.meta.url).href,x=""+new URL("button-icon-right-D0AZW9Yt.png",import.meta.url).href,b=""+new URL("button-sizes-f7i8O8FL.png",import.meta.url).href,j=""+new URL("button-grouping-by-importance-D4nNPC4l.png",import.meta.url).href;function o(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(i,{of:s}),`
`,t.jsx(n.h1,{id:"button",children:"Button"}),`
`,t.jsx(n.p,{children:"Buttons provide a clear visual call-to-action for users, guiding them towards completing a desired task or goal."}),`
`,t.jsxs(n.table,{children:[t.jsx(n.thead,{children:t.jsx(n.tr,{children:t.jsx(n.th,{children:"Resources"})})}),t.jsx(n.tbody,{children:t.jsx(n.tr,{children:t.jsxs(n.td,{children:[t.jsx(n.a,{href:"https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=2389-2466",rel:"nofollow",children:"Figma button component →"}),t.jsx("br",{}),t.jsx(n.a,{href:"https://www.figma.com/design/ojJZvk4cyAizP9Lr984CEe/Infineon-DDS-%7C-Design-patterns?node-id=350-2180",rel:"nofollow",children:"Button pattern →"})]})})})]}),`
`,t.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,t.jsx(n.h3,{id:"when-to-use",children:"When to use"}),`
`,t.jsxs(n.ul,{children:[`
`,t.jsx(n.li,{children:'To trigger an action like "Add to cart", "Submit", "Download"'}),`
`,t.jsx(n.li,{children:'To guide the user to an important page "Learn more"'}),`
`,t.jsx(n.li,{children:"To cancel an action"}),`
`]}),`
`,t.jsx(n.h3,{id:"when-not-to-use",children:"When not to use"}),`
`,t.jsxs(n.ul,{children:[`
`,t.jsx(n.li,{children:"Avoid using buttons as navigational items. Instead use a text link."}),`
`,t.jsx(n.li,{children:"When there are too many buttons on the screen it can be overwhelming for the user to find the button they need. In this case it is better to group related buttons and display all other actions inside a dropdown."}),`
`,t.jsx(n.li,{children:'If the action cannot be undone like "Delete", "Cancel an order", "Unsubscribing a form". Instead, it is better to use a confirmation modal to ensure that the users are aware of the consequences of their action.'}),`
`]}),`
`,t.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,t.jsx(n.h3,{id:"primary",children:"Primary"}),`
`,t.jsx(n.p,{children:"Should be used for the primary action on a page or form, such as submitting a form. Try to limit its use per page as much as possible."}),`
`,t.jsx("img",{src:a,alt:"Button Variant Primary"}),`
`,t.jsx(n.h4,{id:"states",children:"States"}),`
`,t.jsx("img",{src:c,alt:"Primary Button States"}),`
`,t.jsx(n.h3,{id:"secondary",children:"Secondary"}),`
`,t.jsx(n.p,{children:"Should be used for all other actions. It is possible to use this button alone or in combination with the primary button or links."}),`
`,t.jsx("img",{src:h,alt:"Button Variant Secondary"}),`
`,t.jsx(n.h4,{id:"states-1",children:"States"}),`
`,t.jsx("img",{src:l,alt:"Secondary Button States"}),`
`,t.jsx(n.h3,{id:"tertiary",children:"Tertiary"}),`
`,t.jsx(n.p,{children:"Use for actions that are not as important as the primary or secondary actions. The tertiary button is a low-contrast button that provides a subtle visual cue to the user."}),`
`,t.jsx("img",{src:d,alt:"Button Variant Tertiary"}),`
`,t.jsx(n.h4,{id:"states-2",children:"States"}),`
`,t.jsx("img",{src:u,alt:"Tertiary Button States"}),`
`,t.jsx(n.h3,{id:"danger",children:"Danger"}),`
`,t.jsx(n.p,{children:`Should be used for actions that result in a destructive action, such as deleting a record. The danger button has a high-contrast, attention-grabbing style — try to limit its use per page as much as possible.
To make it easier for users to cancel a destructive action, it is recommended to include a secondary button alongside the danger button on modal components. For instance, if a table is being deleted, users can use the "Cancel" button to close the modal.`}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsx(n.p,{children:"A tertiary button variant for danger does not exist in our DDS."}),`
`]}),`
`,t.jsx("img",{src:m,alt:"Button Variant Error"}),`
`,t.jsx(n.h4,{id:"states-3",children:"States"}),`
`,t.jsx("img",{src:p,alt:"Error Button States"}),`
`,t.jsx(n.h2,{id:"icon-placement",children:"Icon placement"}),`
`,t.jsx(n.h3,{id:"icon-left",children:"Icon left"}),`
`,t.jsx("img",{src:g,alt:"Button With Left Icon",width:"50%"}),`
`,t.jsx(n.p,{children:'Use it to enhance the meaning of the action like "Add to cart", "Share" or "Show more".'}),`
`,t.jsx(n.h3,{id:"icon-right",children:"Icon right"}),`
`,t.jsx("img",{src:x,alt:"Button With Right Icon",width:"50%"}),`
`,t.jsx(n.p,{children:"Use it to trigger a specific action, such as navigating to the next page."}),`
`,t.jsx(n.h2,{id:"size",children:"Size"}),`
`,t.jsx("img",{src:b,alt:"Button Sizes"}),`
`,t.jsx(n.h3,{id:"xs",children:"XS"}),`
`,t.jsx(n.p,{children:"Use in information dense scenarios when there is not enough vertical space."}),`
`,t.jsx(n.h3,{id:"s",children:"S"}),`
`,t.jsx(n.p,{children:"Compact, default size for compact layouts or when content other than buttons and input should be in focus."}),`
`,t.jsx(n.h3,{id:"m",children:"M"}),`
`,t.jsx(n.p,{children:"This is our default button size."}),`
`,t.jsx(n.h3,{id:"l",children:"L"}),`
`,t.jsx(n.p,{children:"Our call-to-action button. Primarily used at the top/bottom of a page to highlight an action."}),`
`,t.jsx(n.h2,{id:"inverse-version",children:"Inverse version"}),`
`,t.jsxs(n.p,{children:["To work on ",t.jsx(n.code,{children:"ocean-500"})," backgrounds there are also inverted versions of the primary, secondary and tertiary buttons available. Do not a destructive button on ",t.jsx(n.code,{children:"ocean-500"})," backgrounds."]}),`
`,t.jsx(n.h2,{id:"grouping-buttons",children:"Grouping buttons"}),`
`,t.jsx(n.p,{children:"Button grouping is used to organize related actions or tasks. It helps users to identify and differentiate between the actions they can perform on a page or screen. Grouping buttons also improves the visual hierarchy of a design, making it more scannable and user-friendly."}),`
`,t.jsx(n.h3,{id:"group-by-importance",children:"Group by importance"}),`
`,t.jsx(n.p,{children:`Group buttons by importance if you want to help users quickly identify the primary action they should take. You can use a primary button for an important action like "Add to cart" and a secondary button for "Contact sales". If it fits it is also possible to place a tertiary button like "View distributors' inventory" to improve the user flow.`}),`
`,t.jsx("img",{src:j,alt:"Button Group By Importance"}),`
`,t.jsx(n.p,{children:"There are several ways to group buttons in your layout:"}),`
`,t.jsxs(n.ul,{children:[`
`,t.jsx(n.li,{children:"Left (important) to right (less important) for a large amount of horizontal space."}),`
`,t.jsx(n.li,{children:"Top (important) to bottom (less important) for less horizontal space."}),`
`,t.jsx(n.li,{children:"Try to limit the number of buttons for vertical grouping by three. Instead group them horizontally."}),`
`,t.jsx(n.li,{children:"In a modal dialog it is important to align button groups on the bottom right corner. In addition switch the importance left (less important) and right (important) to show a progress."}),`
`]})]})}function k(e={}){const{wrapper:n}={...r(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(o,{...e})}):o(e)}export{k as default};
