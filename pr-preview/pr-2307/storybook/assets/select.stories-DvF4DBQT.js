import{b as o}from"./iframe-BM2LuXiY.js";const{action:r}=__STORYBOOK_MODULE_ACTIONS__,c=()=>{setTimeout(()=>{const e=document.querySelector("ifx-select");e?.addEventListener("ifxSelect",r("ifxSelect")),e?.addEventListener("ifxInput",r("ifxInput")),e?.addEventListener("ifxOpen",r("ifxOpen"))},0)},n={title:"Components/Select/Single Select",args:{label:"",caption:"",size:"m",showSearch:!0,searchPlaceholderValue:"Search...",placeholder:!0,placeholderValue:"Placeholder",error:!1,disabled:!1,readOnly:!1,required:!1,showClearButton:!0,ariaSelectLabel:"Select",ariaSearchLabel:"Search options",ariaClearLabel:"Clear selection",ariaSelectLabelledBy:"",ariaSelectDescribedBy:""},argTypes:{size:{description:"Size of the field: small `s` (36px) or medium `m` (40px).",control:"radio",options:["s","m"],table:{category:"ifx-select props",defaultValue:{summary:"m"}}},placeholder:{description:"Whether the placeholder is displayed when nothing is selected.",control:"boolean",table:{category:"ifx-select props",defaultValue:{summary:!0}}},placeholderValue:{description:"Placeholder text shown when nothing is selected.",table:{category:"ifx-select props"}},error:{description:"Displays an error state.",control:"boolean",table:{category:"ifx-select props",defaultValue:{summary:!1}}},label:{description:"Label shown above the select.",table:{category:"ifx-select props"}},disabled:{description:"Disables the select.",control:"boolean",table:{category:"ifx-select props",defaultValue:{summary:!1}}},readOnly:{name:"read-only",description:"Sets the select to read-only mode.",control:"boolean",table:{category:"ifx-select props",defaultValue:{summary:!1}}},caption:{description:"Helper text shown below the select.",table:{category:"ifx-select props"}},required:{description:"Marks the field as required with an asterisk.",control:"boolean",table:{category:"ifx-select props",defaultValue:{summary:!1}}},showSearch:{description:"Enables a search bar inside the dropdown to filter options.",control:"boolean",table:{category:"ifx-select props",defaultValue:{summary:!1}}},showClearButton:{description:"Shows the clear icon button when a value is selected.",control:"boolean",table:{category:"ifx-select props",defaultValue:{summary:!0}}},searchPlaceholderValue:{description:"Placeholder text for the search input.",table:{category:"ifx-select props"}},ariaSelectLabel:{description:"ARIA label for the select (fallback when no visible label is set).",table:{category:"ARIA Labels"}},ariaSearchLabel:{description:"ARIA label for the search input.",table:{category:"ARIA Labels"}},ariaClearLabel:{description:"ARIA label for the clear button.",table:{category:"ARIA Labels"}},ariaSelectLabelledBy:{description:"ID of an external element that labels the select (aria-labelledby).",table:{category:"ARIA Labels"}},ariaSelectDescribedBy:{description:"ID of an external element that describes the select (aria-describedby).",table:{category:"ARIA Labels"}},ifxSelect:{action:"ifxSelect",description:"Emitted when the selection changes (`{ value, label }` or `null`).",table:{category:"custom events"}},ifxInput:{action:"ifxInput",description:"Emitted when the search value changes.",table:{category:"custom events"}},ifxOpen:{action:"ifxOpen",description:"Emitted when the dropdown opens or closes.",table:{category:"custom events"}}}},s=(e,i)=>(c(),o`<ifx-select
        size="${e.size}"
        ?placeholder="${e.placeholder}"
        ?show-clear-button="${e.showClearButton}"
        ?show-search="${e.showSearch}"
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
        ${i}
    </ifx-select>`),p=o`
    <ifx-select-option value="a">Option A</ifx-select-option>
    <ifx-select-option value="b">Option B</ifx-select-option>
    <ifx-select-option value="c">Option C</ifx-select-option>
    <ifx-select-option value="d" disabled>Option D (disabled)</ifx-select-option>
`,d=o`
    <ifx-select-option value="all">All KPIs</ifx-select-option>
    <ifx-select-group label="Revenue">
        <ifx-select-option value="rev-total">Total revenue</ifx-select-option>
        <ifx-select-option value="rev-region">Revenue by region</ifx-select-option>
    </ifx-select-group>
    <ifx-select-group label="Costs">
        <ifx-select-option value="cost-op">Operating costs</ifx-select-option>
        <ifx-select-option value="cost-cap">Capital expenditure</ifx-select-option>
    </ifx-select-group>
`,u=o`
    <ifx-select-option value="a">Option A</ifx-select-option>
    <ifx-select-separator></ifx-select-separator>
    <ifx-select-option value="b">Option B</ifx-select-option>
    <ifx-select-option value="c">Option C</ifx-select-option>
    <ifx-select-option value="d" disabled>Option D (disabled)</ifx-select-option>
`,a=e=>s(e,p),t=e=>s(e,d);t.args={label:"KPI",showSearch:!0};const l=e=>s(e,u),b=["Default","WithGroups","Separator"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"(args: any) => baseTemplate(args, flatOptions)",...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"(args: any) => baseTemplate(args, groupedOptions)",...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"(args: any) => baseTemplate(args, separatorOptions)",...l.parameters?.docs?.source}}};const h=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Separator:l,WithGroups:t,__namedExportsOrder:b,default:n},Symbol.toStringTag,{value:"Module"}));export{a as D,h as S,t as W,l as a};
