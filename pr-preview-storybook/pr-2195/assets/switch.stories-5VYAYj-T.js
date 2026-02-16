import{x as o}from"./iframe-DQE2zg3a.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,r={title:"Components/Switch",tags:["autodocs"],args:{label:"Switch",checked:!1,name:"switch",value:"on",disabled:!1},argTypes:{label:{name:"Label of Switch",description:"Set the label of *<ifx-switch>*.",table:{category:"story controls"}},name:{description:"Name of the element, that is used as reference when a form is submitted.",table:{category:"ifx-switch props",type:{summary:"string"}}},checked:{name:"checked",description:"Set the checked state of the switch.",table:{category:"ifx-switch props",defaultValue:{summary:"false"},type:{summary:"boolean"}}},value:{description:"The value that gets submitted when the switch is checked.",table:{category:"ifx-switch props",defaultValue:{summary:"on"},type:{summary:"string"}}},disabled:{description:"Disables the switch and prevents user interaction.",table:{category:"ifx-switch props",defaultValue:{summary:"false"},type:{summary:"boolean"}}},ifxChange:{description:"Custom event emitted when the checked state changes.",action:"ifxChange",table:{category:"custom events",type:{summary:"CustomEvent<boolean>",detail:`React: onIfxChange={handleChange}
Vue: @ifxChange="handleChange"
Angular: (ifxChange)="handleChange($event)"
Vanilla: element.addEventListener("ifxChange", (e) => console.log(e.detail));`}}}}},e={render:({label:t,checked:a,name:n,value:s,disabled:i})=>o`
            <ifx-switch
                ?checked=${a}
                name=${n}
                value=${s}
                ?disabled=${i}
                @ifxChange=${l=>c("ifxChange")(l.detail)}
            >
                ${t}
            </ifx-switch>
        `};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: ({
    label,
    checked,
    name,
    value,
    disabled
  }) => html\`
            <ifx-switch
                ?checked=\${checked}
                name=\${name}
                value=\${value}
                ?disabled=\${disabled}
                @ifxChange=\${(e: CustomEvent) => action("ifxChange")(e.detail)}
            >
                \${label}
            </ifx-switch>
        \`
}`,...e.parameters?.docs?.source},description:{story:"Lit Template Syntax\n-------------------\nLit provides declarative HTML templates with special bindings:\n- `?checked=${value}` - Boolean attribute (added when truthy, removed when falsy)\n- `name=${value}` - Regular attribute\n- `@ifxChange=${handler}` - Event listener\n- `${expression}` - Text content or child elements\n\n@see https://lit.dev/docs/templates/overview/",...e.parameters?.docs?.description}}};const d=["Default"],m=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:d,default:r},Symbol.toStringTag,{value:"Module"}));export{m as S};
