import{b as r}from"./iframe-BBpZ9UKU.js";import"./preload-helper-PPVm8Dsz.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,{useArgs:s}=__STORYBOOK_MODULE_PREVIEW_API__,c={title:"Components/Counter",tags:["autodocs"],args:{value:0},argTypes:{value:{description:"Initial value of the counter.",table:{category:"IFX-Counter-Unit Props"},control:{type:"number",min:0}},ifxChange:{description:"Custom event emitted when the counter value changes.",action:"ifxChange",table:{category:"custom events",type:{summary:"Framework integration",detail:`React: onIfxChange={handleChange}
Vue: @ifxChange="handleChange"
Angular: (ifxChange)="handleChange()"
VanillaJs: .addEventListener("ifxChange", (event) => {/*handle change*/});`}}}}},e={render:({value:a})=>{const[,t]=s();return r`
            <ifx-counter value=${a} @ifxChange=${n=>{o("ifxChange")(n.detail),t({value:n.detail})}}></ifx-counter>
        `}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: ({
    value
  }) => {
    const [, updateArgs] = useArgs();
    const handleChange = (event: CustomEvent<number>) => {
      action("ifxChange")(event.detail);
      updateArgs({
        value: event.detail
      });
    };
    return html\`
            <ifx-counter value=\${value} @ifxChange=\${handleChange}></ifx-counter>
        \`;
  }
}`,...e.parameters?.docs?.source}}};const g=["Default"];export{e as Default,g as __namedExportsOrder,c as default};
