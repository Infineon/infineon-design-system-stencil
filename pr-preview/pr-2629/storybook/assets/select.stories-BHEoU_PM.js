import{b as r}from"./iframe-Dbc5tbI1.js";const{action:i}=__STORYBOOK_MODULE_ACTIONS__,p=()=>{setTimeout(()=>{const e=document.querySelector("ifx-select");e?.addEventListener("ifxSelect",i("ifxSelect")),e?.addEventListener("ifxInput",i("ifxInput")),e?.addEventListener("ifxOpen",i("ifxOpen"))},0)},d={title:"Components/Select/Single Select",args:{label:"",caption:"",size:"m",showSearch:!0,searchPlaceholderValue:"Search...",placeholder:!0,placeholderValue:"Placeholder",error:!1,disabled:!1,readOnly:!1,required:!1,showClearButton:!0,ariaSelectLabel:"Select",ariaSearchLabel:"Search options",ariaClearLabel:"Clear selection",ariaSelectLabelledBy:"",ariaSelectDescribedBy:"",appendToBody:!1},argTypes:{size:{description:"Size of the field: small `s` (36px) or medium `m` (40px).",control:"radio",options:["s","m"],table:{category:"ifx-select props",defaultValue:{summary:"m"}}},placeholder:{description:"Whether the placeholder is displayed when nothing is selected.",control:"boolean",table:{category:"ifx-select props",defaultValue:{summary:!0}}},placeholderValue:{description:"Placeholder text shown when nothing is selected.",table:{category:"ifx-select props"}},error:{description:"Displays an error state.",control:"boolean",table:{category:"ifx-select props",defaultValue:{summary:!1}}},label:{description:"Label shown above the select.",table:{category:"ifx-select props"}},disabled:{description:"Disables the select.",control:"boolean",table:{category:"ifx-select props",defaultValue:{summary:!1}}},readOnly:{name:"read-only",description:"Sets the select to read-only mode.",control:"boolean",table:{category:"ifx-select props",defaultValue:{summary:!1}}},caption:{description:"Helper text shown below the select.",table:{category:"ifx-select props"}},required:{description:"Marks the field as required with an asterisk.",control:"boolean",table:{category:"ifx-select props",defaultValue:{summary:!1}}},showSearch:{description:"Enables a search bar inside the dropdown to filter options.",control:"boolean",table:{category:"ifx-select props",defaultValue:{summary:!1}}},showClearButton:{description:"Shows the clear icon button when a value is selected.",control:"boolean",table:{category:"ifx-select props",defaultValue:{summary:!0}}},searchPlaceholderValue:{description:"Placeholder text for the search input.",table:{category:"ifx-select props"}},appendToBody:{name:"append-to-body",description:"Renders the dropdown in the top layer so parent clipping (overflow hidden, transform) can't cut it off.",control:"boolean",table:{category:"ifx-select props",defaultValue:{summary:!1}}},ariaSelectLabel:{description:"ARIA label for the select (fallback when no visible label is set).",table:{category:"ARIA Labels"}},ariaSearchLabel:{description:"ARIA label for the search input.",table:{category:"ARIA Labels"}},ariaClearLabel:{description:"ARIA label for the clear button.",table:{category:"ARIA Labels"}},ariaSelectLabelledBy:{description:"ID of an external element that labels the select (aria-labelledby).",table:{category:"ARIA Labels"}},ariaSelectDescribedBy:{description:"ID of an external element that describes the select (aria-describedby).",table:{category:"ARIA Labels"}},ifxSelect:{action:"ifxSelect",description:"Emitted when the selection changes (`{ value, label }` or `null`).",table:{category:"custom events"}},ifxInput:{action:"ifxInput",description:"Emitted when the search value changes.",table:{category:"custom events"}},ifxOpen:{action:"ifxOpen",description:"Emitted when the dropdown opens or closes.",table:{category:"custom events"}}}},s=(e,n)=>(p(),r`<ifx-select
        size="${e.size}"
        placeholder="${e.placeholder}"
        ?show-clear-button="${e.showClearButton}"
        ?show-search="${e.showSearch}"
        ?append-to-body="${e.appendToBody}"
        search-placeholder-value="${e.searchPlaceholderValue}"
        ?disabled="${e.disabled}"
        ?read-only="${e.readOnly}"
        ?required="${e.required}"
        ?error="${e.error}"
        label="${e.label}"
        caption="${e.caption}"
        placeholder-value="${e.placeholderValue}"
        aria-select-label="${e.ariaSelectLabel}"
        aria-search-label="${e.ariaSearchLabel}"
        aria-clear-label="${e.ariaClearLabel}"
        aria-select-labelled-by="${e.ariaSelectLabelledBy}"
        aria-select-described-by="${e.ariaSelectDescribedBy}"
    >
        ${n}
    </ifx-select>`),c=r`
    <ifx-select-option value="a">Option A</ifx-select-option>
    <ifx-select-option value="b">Option B</ifx-select-option>
    <ifx-select-option value="c">Option C</ifx-select-option>
    <ifx-select-option value="d" disabled>Option D (disabled)</ifx-select-option>
`,u=r`
    <ifx-select-option value="all">All KPIs</ifx-select-option>
    <ifx-select-group label="Revenue">
        <ifx-select-option value="rev-total">Total revenue</ifx-select-option>
        <ifx-select-option value="rev-region">Revenue by region</ifx-select-option>
    </ifx-select-group>
    <ifx-select-group label="Costs">
        <ifx-select-option value="cost-op">Operating costs</ifx-select-option>
        <ifx-select-option value="cost-cap">Capital expenditure</ifx-select-option>
    </ifx-select-group>
`,b=r`
    <ifx-select-option value="a">Option A</ifx-select-option>
    <ifx-select-separator></ifx-select-separator>
    <ifx-select-option value="b">Option B</ifx-select-option>
    <ifx-select-option value="c">Option C</ifx-select-option>
    <ifx-select-option value="d" disabled>Option D (disabled)</ifx-select-option>
`,o=e=>s(e,c),t=e=>s(e,u);t.args={label:"KPI",showSearch:!0};const l=e=>s(e,b),a=e=>r`<div style="height: 80px; overflow: hidden; border: 1px dashed red;">
        ${s(e,c)}
    </div>`;a.args={label:"Inside overflow: hidden",appendToBody:!0};const f=["Default","WithGroups","Separator","AppendToBody"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"(args: any) => baseTemplate(args, flatOptions)",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"(args: any) => baseTemplate(args, groupedOptions)",...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"(args: any) => baseTemplate(args, separatorOptions)",...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:'(args: any) => html`<div style="height: 80px; overflow: hidden; border: 1px dashed red;">\n        ${baseTemplate(args, flatOptions)}\n    </div>`',...a.parameters?.docs?.source}}};const x=Object.freeze(Object.defineProperty({__proto__:null,AppendToBody:a,Default:o,Separator:l,WithGroups:t,__namedExportsOrder:f,default:d},Symbol.toStringTag,{value:"Module"}));export{o as D,x as S,t as W,l as a};
