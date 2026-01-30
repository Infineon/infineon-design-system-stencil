import{i as s}from"./icons-C_9-zI1i.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,i={title:"Components/Segmented Control",tags:["autodocs"],args:{amountOfSegments:5,labelOfSegment:"Label",caption:"Caption text to describe the controls",label:"Group Label",size:"regular",icon:"star-16",selected:"false",value:"Value",error:!1,required:!1},argTypes:{amountOfSegments:{name:"Amount of Segments",control:{type:"number",min:2},description:"Control the number of *<ifx-segment>* in component.",table:{category:"story controls",type:{summary:null}}},labelOfSegment:{name:"Label of Segment",description:"Set the label of *<ifx-segmented-control>*.",table:{category:"story controls"}},caption:{description:"Set the caption text of segmented control group.",table:{category:"ifx-segmented-control props"}},label:{name:"label",description:"Set the label of control group.",table:{category:"ifx-segmented-control props"}},size:{description:"Switch between the size of Segmented Control.",control:"radio",options:["regular","small"],table:{category:"ifx-segmented-control props",defaultValue:{summary:"regular"},type:{summary:"regular | small"}}},icon:{description:"Set icon of a segment.",options:Object.keys(s),control:{type:"select"},table:{category:"ifx-segment props"}},selected:{description:`Selects the segment when set true.

See the 2nd *<ifx-segment>* for effects`,control:"boolean",table:{category:"ifx-segment props",defaultValue:{summary:!1},type:{summary:"boolean"}}},value:{description:"Set the value of *<ifx-segment>*. Required.",table:{category:"ifx-segment props",type:{summary:"string"}},type:{required:!0}},error:{description:"Set the component to error state.",table:{category:"ifx-segmented-control props",defaultValue:{summary:!1}}},required:{description:"Marks the component as required by displaying an asterisk next to the label.",table:{category:"ifx-segmented-control props",defaultValue:{summary:!1}}},ifxChange:{description:"Custom event emitted when the segment is changed.",table:{category:"custom events",type:{summary:"Framework integration",detail:`
React: onIfxChange={handleChange}
Vue: @ifxChange="handleChange"
Angular: (ifxChange)="handleChange()"
VanillaJs: .addEventListener("ifxChange", (event) => {/*handle change*/});`}}}}},c=e=>{const r=document.createElement("div");r.innerHTML=`
<ifx-segmented-control
caption = '${e.caption}'
label = '${e.label}'
size = '${e.size}'
error = '${e.error}'
required = '${e.required}'>
    ${Array.from({length:e.amountOfSegments},(g,a)=>{const t=document.createElement("ifx-segment");return t.innerText=e.labelOfSegment,t.setAttribute("value",`${e.value}${a+1}`),t.setAttribute("icon",`${e.icon}`),e.selected===!0&&a===1&&t.setAttribute("selected","true"),t.outerHTML}).join(`
    `)}
</ifx-segmented-control>  
`;const o=r.querySelector("ifx-segmented-control");return o.addEventListener("ifxChange",l("ifxChange")),o},n=c.bind({});n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = \`
<ifx-segmented-control
caption = '\${args.caption}'
label = '\${args.label}'
size = '\${args.size}'
error = '\${args.error}'
required = '\${args.required}'>
    \${(() => {
    return Array.from({
      length: args.amountOfSegments
    }, (_, segmentId) => {
      const segment = document.createElement("ifx-segment");
      segment.innerText = args.labelOfSegment;
      segment.setAttribute("value", \`\${args.value}\${segmentId + 1}\`);
      segment.setAttribute("icon", \`\${args.icon}\`);
      if (args.selected === true && segmentId === 1) segment.setAttribute("selected", "true");
      return segment.outerHTML;
    }).join(\`\\n    \`);
  })()}
</ifx-segmented-control>  
\`;
  const segmentedControl = wrapper.querySelector("ifx-segmented-control");
  segmentedControl.addEventListener("ifxChange", action("ifxChange"));
  return segmentedControl;
}`,...n.parameters?.docs?.source}}};const m=["Default"],d=Object.freeze(Object.defineProperty({__proto__:null,Default:n,__namedExportsOrder:m,default:i},Symbol.toStringTag,{value:"Module"}));export{d as S};
