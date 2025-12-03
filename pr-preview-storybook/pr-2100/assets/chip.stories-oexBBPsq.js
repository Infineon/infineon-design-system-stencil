import{i as p}from"./icons-C_9-zI1i.js";const{action:m}=__STORYBOOK_MODULE_ACTIONS__,d={title:"Components/Chip",tags:["autodocs"],parameters:{docs:{story:{height:"100px"}}},args:{amountOfChipItems:4,chipItemLabel:"Item Label",placeholder:"Label",size:"medium",variant:"single",readOnly:!1,selected:!1,value:"Item Value",ariaLabel:"Chip",disabled:!1,theme:"outlined",icon:""},argTypes:{amountOfChipItems:{name:"Amount of Chip Items",control:"number",description:"Control the number of *<ifx-chip-item>* in a Chip.",table:{category:"story controls",type:{summary:null}}},chipItemLabel:{name:"Label of Chip Item",description:"Set the label of *<ifx-chip-item>*.",table:{category:"story controls"}},placeholder:{description:"Set the placeholder string.",table:{category:"ifx-chip props"}},size:{description:"Switch the size of Chip.",control:"radio",options:["small","medium","large"],table:{category:"ifx-chip props",defaultValue:{summary:"medium"},type:{summary:"small | medium | large"}}},variant:{description:"Switch the variant of Chip.",control:"radio",options:["single","multi"],table:{category:"ifx-chip props",defaultValue:{summary:"single"},type:{summary:"single | multi"}}},theme:{description:"Specifies the theme style of the Chip.",control:"radio",options:["outlined","filled-light","filled-dark"],table:{category:"ifx-chip props",defaultValue:{summary:"outlined"},type:{summary:"outlined | filled-light | filled-dark"}}},readOnly:{name:"read-only",description:"No dropdown menu. The chip component is read-only.",control:"boolean",table:{category:"ifx-chip props",defaultValue:{summary:!1}}},icon:{options:Object.keys(p),control:{type:"select"},description:"Set the icon of the Chip.",table:{category:"ifx-chip props",type:{summary:"string"}}},disabled:{name:"disabled",description:"No dropdown menu. The chip component is disabled.",control:"boolean",table:{category:"ifx-chip props",defaultValue:{summary:!1}}},ariaLabel:{control:{type:"text"},description:"Set the aria label of the chip item. Enhances accessibility.",table:{category:"ifx-chip props"}},selected:{description:"Set the *selected* prop to pre-select the chip item.",table:{category:"ifx-chip-item props",defaultValue:{summary:"false"}}},value:{description:"Set the value of chip item.",table:{category:"ifx-chip-item props"}},ifxChange:{action:"ifxChange",description:"A custom event emitted when the selection in a *<ifx-chip>* is updated.",table:{category:"custom events",type:{summary:"Framework integration",detail:`
React: onIfxChange={handleChange}
Vue: @ifxChange="handleChange"
Angular: (ifxChange)="handleChange()"
VanillaJs: .addEventListener("ifxChange", (event) => {/*handle change*/});`}}}}},c=e=>{const l=document.createElement("div");l.innerHTML=`
<ifx-chip
placeholder="${e.placeholder}"
size="${e.size}"
variant="${e.variant}"
theme="${e.theme}"
icon="${e.icon}"
read-only="${e.readOnly}"
aria-label="${e.ariaLabel}"
disabled="${e.disabled}"
>
  ${Array.from({length:e.amountOfChipItems},(u,s)=>{const a=document.createElement("ifx-chip-item");return a.innerHTML=e.chipItemLabel+" "+(s+1),a.setAttribute("value",e.value+" "+(s+1)),e.selected&&s===1&&a.setAttribute("selected","true"),e.readOnly&&(e.variant==="multi"||s===0)&&a.setAttribute("selected","true"),a.outerHTML}).join(`
    `)}
</ifx-chip>`;const o=l.querySelector("ifx-chip");return o.addEventListener("ifxChange",m("ifxChange")),o},r=c.bind({});r.tags=["!dev","!autodocs"];const t=c.bind({});t.args={variant:"single"};t.argTypes={variant:{table:{disable:!0}}};const i=c.bind({});i.args={variant:"multi"};i.argTypes={variant:{table:{disable:!0}}};const n=c.bind({});n.args={readOnly:!0,variant:"multi"};n.argTypes={readOnly:{table:{disable:!0}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = \`
<ifx-chip
placeholder="\${args.placeholder}"
size="\${args.size}"
variant="\${args.variant}"
theme="\${args.theme}"
icon="\${args.icon}"
read-only="\${args.readOnly}"
aria-label="\${args.ariaLabel}"
disabled="\${args.disabled}"
>
  \${(() => {
    return Array.from({
      length: args.amountOfChipItems
    }, (_, chipItemId) => {
      const chipItem: HTMLIfxChipItemElement = document.createElement("ifx-chip-item");
      chipItem.innerHTML = args.chipItemLabel + " " + (chipItemId + 1);
      chipItem.setAttribute("value", args.value + " " + (chipItemId + 1));
      if (args.selected && chipItemId === 1) {
        chipItem.setAttribute("selected", "true");
      }
      if (args.readOnly) {
        if (args.variant === "multi") {
          chipItem.setAttribute("selected", "true");
        } else if (chipItemId === 0) {
          chipItem.setAttribute("selected", "true");
        }
      }
      return chipItem.outerHTML;
    }).join(\`\\n    \`);
  })()}
</ifx-chip>\`;
  const chip = wrapper.querySelector("ifx-chip");
  chip.addEventListener("ifxChange", action("ifxChange"));
  return chip;
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = \`
<ifx-chip
placeholder="\${args.placeholder}"
size="\${args.size}"
variant="\${args.variant}"
theme="\${args.theme}"
icon="\${args.icon}"
read-only="\${args.readOnly}"
aria-label="\${args.ariaLabel}"
disabled="\${args.disabled}"
>
  \${(() => {
    return Array.from({
      length: args.amountOfChipItems
    }, (_, chipItemId) => {
      const chipItem: HTMLIfxChipItemElement = document.createElement("ifx-chip-item");
      chipItem.innerHTML = args.chipItemLabel + " " + (chipItemId + 1);
      chipItem.setAttribute("value", args.value + " " + (chipItemId + 1));
      if (args.selected && chipItemId === 1) {
        chipItem.setAttribute("selected", "true");
      }
      if (args.readOnly) {
        if (args.variant === "multi") {
          chipItem.setAttribute("selected", "true");
        } else if (chipItemId === 0) {
          chipItem.setAttribute("selected", "true");
        }
      }
      return chipItem.outerHTML;
    }).join(\`\\n    \`);
  })()}
</ifx-chip>\`;
  const chip = wrapper.querySelector("ifx-chip");
  chip.addEventListener("ifxChange", action("ifxChange"));
  return chip;
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = \`
<ifx-chip
placeholder="\${args.placeholder}"
size="\${args.size}"
variant="\${args.variant}"
theme="\${args.theme}"
icon="\${args.icon}"
read-only="\${args.readOnly}"
aria-label="\${args.ariaLabel}"
disabled="\${args.disabled}"
>
  \${(() => {
    return Array.from({
      length: args.amountOfChipItems
    }, (_, chipItemId) => {
      const chipItem: HTMLIfxChipItemElement = document.createElement("ifx-chip-item");
      chipItem.innerHTML = args.chipItemLabel + " " + (chipItemId + 1);
      chipItem.setAttribute("value", args.value + " " + (chipItemId + 1));
      if (args.selected && chipItemId === 1) {
        chipItem.setAttribute("selected", "true");
      }
      if (args.readOnly) {
        if (args.variant === "multi") {
          chipItem.setAttribute("selected", "true");
        } else if (chipItemId === 0) {
          chipItem.setAttribute("selected", "true");
        }
      }
      return chipItem.outerHTML;
    }).join(\`\\n    \`);
  })()}
</ifx-chip>\`;
  const chip = wrapper.querySelector("ifx-chip");
  chip.addEventListener("ifxChange", action("ifxChange"));
  return chip;
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = \`
<ifx-chip
placeholder="\${args.placeholder}"
size="\${args.size}"
variant="\${args.variant}"
theme="\${args.theme}"
icon="\${args.icon}"
read-only="\${args.readOnly}"
aria-label="\${args.ariaLabel}"
disabled="\${args.disabled}"
>
  \${(() => {
    return Array.from({
      length: args.amountOfChipItems
    }, (_, chipItemId) => {
      const chipItem: HTMLIfxChipItemElement = document.createElement("ifx-chip-item");
      chipItem.innerHTML = args.chipItemLabel + " " + (chipItemId + 1);
      chipItem.setAttribute("value", args.value + " " + (chipItemId + 1));
      if (args.selected && chipItemId === 1) {
        chipItem.setAttribute("selected", "true");
      }
      if (args.readOnly) {
        if (args.variant === "multi") {
          chipItem.setAttribute("selected", "true");
        } else if (chipItemId === 0) {
          chipItem.setAttribute("selected", "true");
        }
      }
      return chipItem.outerHTML;
    }).join(\`\\n    \`);
  })()}
</ifx-chip>\`;
  const chip = wrapper.querySelector("ifx-chip");
  chip.addEventListener("ifxChange", action("ifxChange"));
  return chip;
}`,...n.parameters?.docs?.source}}};const h=["Default","Single","Multi","ReadOnly"],g=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Multi:i,ReadOnly:n,Single:t,__namedExportsOrder:h,default:d},Symbol.toStringTag,{value:"Module"}));export{g as C};
