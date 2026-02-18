import{j as e,M as r}from"./blocks-0XVbBOJF.js";import{useMDXComponents as i}from"./index-uTsNSzx6.js";import{S as a}from"./search-field.stories-BCewQxge.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DZqETd7E.js";const c=""+new URL("search-field-anatomy-BN_vy2dc.png",import.meta.url).href,h=""+new URL("search-field-states-CFRg9iug.png",import.meta.url).href,o=""+new URL("search-field-sizes-5_CdVZCG.png",import.meta.url).href,l=""+new URL("search-suggest-truncating-De7P5LN5.png",import.meta.url).href,d=""+new URL("search-recent-suggest-CsHq57qA.png",import.meta.url).href;function t(s){const n={a:"a",br:"br",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
`,e.jsx(n.h1,{id:"search-field",children:"Search Field"}),`
`,e.jsx(n.p,{children:"The search field component is a fundamental element of our design system that allows users to enter search queries to retrieve relevant information from a dataset or database. It enables users to find and filter content efficiently."}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsx(n.tr,{children:e.jsx(n.th,{children:"Resources"})})}),e.jsx(n.tbody,{children:e.jsx(n.tr,{children:e.jsx(n.td,{children:e.jsx(n.a,{href:"https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=38242-6618",rel:"nofollow",children:"Figma search field component →"})})})})]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h3,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"When your application contains a large amount of content, such as products, articles, or data, and users may need to find specific items quickly."}),`
`,e.jsx(n.li,{children:"When navigation within your application involves multiple layers or categories, a search field can act as a time-saving alternative to browsing."}),`
`]}),`
`,e.jsx(n.h3,{id:"when-not-to-use",children:"When not to use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"When your content or data is minimal and easily navigable."}),`
`]}),`
`,e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsx("img",{src:c,alt:"Search Field Anatomy"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Field (1)"}),e.jsx(n.br,{}),`
`,"The input field allows users to enter search queries."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Search Icon (2)"}),e.jsx(n.br,{}),`
`,"The search icon signifies the search action."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Search Label (3)"}),e.jsx(n.br,{}),`
`,"A label provides clarity about what the search field is for. It tells users explicitly that this is a search input, reducing any potential confusion."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Clear Icon (4)"}),e.jsx(n.br,{}),`
`,"The clear icon lets users quickly clear the search input field."]}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsx("img",{src:h,alt:"Search Field States"}),`
`,e.jsx(n.h2,{id:"size",children:"Size"}),`
`,e.jsx(n.p,{children:"There are two search field sizes: 36px and 40px. This will give you more flexibility in structuring layouts due to e.g. different button heights. It's important to maintain uniform field height while combining form elements on a single page."}),`
`,e.jsx("img",{src:o,alt:"Search Field Sizes"}),`
`,e.jsx(n.h2,{id:"search-extension",children:"Search Extension"}),`
`,e.jsx(n.p,{children:"The DDS shows recent searches and search suggestions. When users click in the search field, it can display their recent queries and/or trending keywords. As they start typing, suggestions appear. Recent searches use a history icon, while suggestions and results use a search icon, making them easy to tell apart. Users can remove recent searches and suggestions with a close icon. You can also show the search scope and the number of entries."}),`
`,e.jsx(n.h3,{id:"recent--and-search-suggestions",children:"Recent- and Search Suggestions"}),`
`,e.jsx("img",{src:d,alt:"Search Field Recent Suggest"}),`
`,e.jsx(n.h3,{id:"truncating",children:"Truncating"}),`
`,e.jsx(n.p,{children:"If the text exceeds the available space, it is truncated and an elipsis is shown."}),`
`,e.jsx("img",{src:l,alt:"Search Field Suggest Truncating"})]})}function j(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{j as default};
