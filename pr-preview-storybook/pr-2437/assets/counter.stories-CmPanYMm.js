import{b as r}from"./iframe-CHfFRbc_.js";import"./preload-helper-PPVm8Dsz.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,{useArgs:s}=__STORYBOOK_MODULE_PREVIEW_API__,l={title:"Components/Counter",tags:["autodocs"],args:{value:0},argTypes:{value:{description:"Initial value of the counter.",table:{category:"IFX-Counter-Unit Props"},control:{type:"number",min:0}},ifxChange:{description:"Custom event emitted when the counter value changes.",action:"ifxChange",table:{category:"custom events",type:{summary:"CustomEvent<number>"}}}}},e={render:({value:t})=>{const[,a]=s();return r`
            <ifx-counter
                .value=${t}
                @ifxChange=${n=>{o("ifxChange")(n.detail),a({value:n.detail})}}
            ></ifx-counter>
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
            <ifx-counter
                .value=\${value}
                @ifxChange=\${handleChange}
            ></ifx-counter>
        \`;
  }
}`,...e.parameters?.docs?.source}}};const d=["Default"];export{e as Default,d as __namedExportsOrder,l as default};
