const t={title:"Components/Progress Bar",tags:["autodocs"],args:{size:"m",value:50,showLabel:!1},argTypes:{value:{description:"The percentage of the progress bar.",control:{type:"range",min:0,max:100},table:{category:"ifx-progress-bar props",defaultValue:{summary:50}}},showLabel:{description:"Shows the percentage of the progress bar. Does not fit in size ***s***.",control:"boolean",table:{category:"ifx-progress-bar props",defaultValue:{summary:!1}}},size:{description:"Sets the size of the progress bar. Options: s (36px) and m (40px).",control:"radio",options:["s","m"],table:{category:"ifx-progress-bar props",defaultValue:{summary:"m"}}}}},o=a=>{const n=document.createElement("div");return n.innerHTML=`
    <ifx-progress-bar
      value="${a.value}"
      size="${a.size}"
      show-label="${a.showLabel}"
    ></ifx-progress-bar>
  `,n.innerHTML},e=o.bind({});e.args={size:"m",value:50,showLabel:!1};const r=o.bind({});r.args={value:75,size:"s"};const s=o.bind({});s.args={value:25,showLabel:!0};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = \`
    <ifx-progress-bar
      value="\${args.value}"
      size="\${args.size}"
      show-label="\${args.showLabel}"
    ></ifx-progress-bar>
  \`;
  return wrapper.innerHTML;
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = \`
    <ifx-progress-bar
      value="\${args.value}"
      size="\${args.size}"
      show-label="\${args.showLabel}"
    ></ifx-progress-bar>
  \`;
  return wrapper.innerHTML;
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = \`
    <ifx-progress-bar
      value="\${args.value}"
      size="\${args.size}"
      show-label="\${args.showLabel}"
    ></ifx-progress-bar>
  \`;
  return wrapper.innerHTML;
}`,...s.parameters?.docs?.source}}};const p=["Default","Small","WithLabel"],l=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Small:r,WithLabel:s,__namedExportsOrder:p,default:t},Symbol.toStringTag,{value:"Module"}));export{l as P};
