import{b as o}from"./iframe-D_ica_UD.js";const{action:a}=__STORYBOOK_MODULE_ACTIONS__,r=[{value:"a",label:"option a",selected:!1},{value:"b",label:"option b",selected:!1},{value:"c",label:"option c",selected:!1}],s={title:"Components/Select/Single Select",args:{label:"",caption:"",size:"m",showSearch:!0,searchPlaceholderValue:"Search...",placeholder:!0,placeholderValue:"Placeholder",error:!1,disabled:!1,required:!0,showClearButton:!0},argTypes:{size:{description:"Specifies the size. Options: small - s (36px) medium - m (40px).",control:"radio",options:["s","m"],table:{category:"ifx-select props",defaultValue:{summary:"m"}}},placeholder:{description:"Determines whether a placeholder is displayed or not.",control:"boolean",table:{category:"ifx-select props",defaultValue:{summary:!0}}},placeholderValue:{description:"Sets the text displayed as the placeholder when placeholder is set to true.",table:{category:"ifx-select props"}},error:{description:"Displays an error state.",control:"boolean",table:{category:"ifx-select props",defaultValue:{summary:!1}}},label:{description:"Sets the label.",table:{category:"ifx-select props"}},disabled:{description:"Disables the dropdown.",control:"boolean",table:{category:"ifx-select props",defaultValue:{summary:!1}}},caption:{description:"Text displayed below the select component to provide additional information.",table:{category:"ifx-select props"}},required:{description:"Marks the Single Selection as required with an asterik for form submission.",table:{category:"ifx-select props",defaultValue:{summary:!0}}},showSearch:{description:"Enables a search bar inside the dropdown to filter options.",control:"boolean",table:{category:"ifx-select props",defaultValue:{summary:!0}}},showClearButton:{description:"Shows the clear icon button.",control:"boolean",table:{category:"ifx-select props",defaultValue:{summary:!0}}},searchPlaceholderValue:{description:"Placeholder text for the search input field.",table:{category:"ifx-select props"}},options:{description:"Takes an array of objects in the following format.",table:{category:"ifx-select props"}},ifxSelect:{action:"ifxSelect",description:"Custom event emitted when item is selected.",table:{category:"custom events",type:{summary:"Framework integration",detail:`React: onIfxSelect={handleInput}
Vue:@ifxSelect="handleInput"
Angular:(ifxSelect)="handleInput()"
VanillaJs:.addEventListener("ifxSelect", (event) => {//handle input});`}}},ifxInput:{action:"ifxInput",description:"A custom event *ifxInput* is emitted immediately after the value of *Search* changes.",table:{category:"custom events",type:{summary:"Framework integration",detail:`React: onIfxInput={handleInput}
Vue:@ifxInput="handleInput"
Angular:(ifxInput)="handleInput()"
VanillaJs:.addEventListener("ifxInput", (event) => {//handle input});`}}},clearSelection:{description:"Public method for clearing the selected options",table:{category:"ifx-select public methods"}}}},n=e=>{const l=o`<ifx-select 
  size='${e.size}'
  placeholder='${e.placeholder}'
  ?show-clear-button='${e.showClearButton}'
  ?show-search='${e.showSearch}'
  search-placeholder-value='${e.searchPlaceholderValue}'
  ?disabled='${e.disabled}'
  ?required='${e.required}'
  ?error='${e.error}'
  label='${e.label}'
  caption='${e.caption}'
  placeholder-value='${e.placeholderValue}'
  options='${JSON.stringify(e.options)}' >
 </ifx-select>`;return setTimeout(()=>{document.querySelector("ifx-select")?.addEventListener("ifxSelect",a("ifxSelect")),document.querySelector("ifx-select")?.addEventListener("ifxInput",a("ifxInput"))},0),l},t=n.bind({});t.args={options:r};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: any) => {
  const template = html\`<ifx-select 
  size='\${args.size}'
  placeholder='\${args.placeholder}'
  ?show-clear-button='\${args.showClearButton}'
  ?show-search='\${args.showSearch}'
  search-placeholder-value='\${args.searchPlaceholderValue}'
  ?disabled='\${args.disabled}'
  ?required='\${args.required}'
  ?error='\${args.error}'
  label='\${args.label}'
  caption='\${args.caption}'
  placeholder-value='\${args.placeholderValue}'
  options='\${JSON.stringify(args.options)}' >
 </ifx-select>\`;
  setTimeout(() => {
    document.querySelector("ifx-select")?.addEventListener("ifxSelect", action("ifxSelect"));
    document.querySelector("ifx-select")?.addEventListener("ifxInput", action("ifxInput"));
  }, 0);
  return template;
}`,...t.parameters?.docs?.source}}};const i=["Default"],d=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:i,default:s},Symbol.toStringTag,{value:"Module"}));export{t as D,d as S};
