import{b as n}from"./iframe-Bx4OTbul.js";import"./preload-helper-PPVm8Dsz.js";const s={title:"Components/Counter",tags:["autodocs"],args:{name:"",value:0},argTypes:{name:{description:"Form field name used when the counter is in a form.",table:{category:"IFX-Counter-Unit Props"},control:"text"},value:{description:"Initial value of the counter.",table:{category:"IFX-Counter-Unit Props"},control:{type:"number",min:0}},ifxChange:{description:"Custom event emitted when the counter value changes.",action:"ifxChange",table:{category:"custom events",type:{summary:"Framework integration",detail:`React: onIfxChange={handleChange}
Vue: @ifxChange="handleChange"
Angular: (ifxChange)="handleChange()"
VanillaJs: .addEventListener("ifxChange", (event) => {/*handle change*/});`}}}}},t=a=>n`
    <ifx-counter
        name="${a.name}"
        value="${a.value}"
    ></ifx-counter>`,e=t.bind({}),i=["Default"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:'(args: any) => html`\n    <ifx-counter\n        name="${args.name}"\n        value="${args.value}"\n    ></ifx-counter>`',...e.parameters?.docs?.source}}};export{e as Default,i as __namedExportsOrder,s as default};
