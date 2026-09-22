import{b as o}from"./iframe-DH2WJQEq.js";import"./preload-helper-PPVm8Dsz.js";const{action:s}=__STORYBOOK_MODULE_ACTIONS__,{useArgs:i}=__STORYBOOK_MODULE_PREVIEW_API__,d={title:"Components/Counter",tags:["autodocs"],args:{name:"",value:0},argTypes:{name:{description:"Form field name used when the counter is in a form.",table:{category:"IFX-Counter-Unit Props"},control:"text"},value:{description:"Initial value of the counter.",table:{category:"IFX-Counter-Unit Props"},control:{type:"number",min:0}},ifxChange:{description:"Custom event emitted when the counter value changes.",action:"ifxChange",table:{category:"custom events",type:{summary:"Framework integration",detail:`React: onIfxChange={handleChange}
Vue: @ifxChange="handleChange"
Angular: (ifxChange)="handleChange()"
VanillaJs: .addEventListener("ifxChange", (event) => {/*handle change*/});`}}}}},e={render:({name:a,value:t})=>{const[,r]=i();return o`
            <ifx-counter
                name=${a}
                value=${t}
                @ifxChange=${n=>{s("ifxChange")(n.detail),r({value:n.detail})}}></ifx-counter>
        `}},g=["Default"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: ({
    name,
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
            <ifx-counter
                name=\${name}
                value=\${value}
                @ifxChange=\${handleChange}></ifx-counter>
        \`;
  }
}`,...e.parameters?.docs?.source}}};export{e as Default,g as __namedExportsOrder,d as default};
