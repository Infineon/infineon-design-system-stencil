import{i as h}from"./icons-B3WZ8sqF.js";const{action:m}=__STORYBOOK_MODULE_ACTIONS__,u={title:"Components/Chip",tags:["autodocs"],parameters:{docs:{story:{height:"100px"}}},args:{amountOfChipItems:4,chipItemLabel:"Item Label",placeholder:"Label",size:"medium",variant:"single",href:"",target:"_blank",readOnly:!1,selected:!1,value:"Item Value",ariaLabel:"Chip",disabled:!1,theme:"outlined",icon:"",hideDropdownIcon:!1,selectable:!0},argTypes:{amountOfChipItems:{name:"Amount of Chip Items",control:"number",if:{arg:"hideDropdownIcon",eq:!1},description:"Control the number of *<ifx-chip-item>* in a Chip.",table:{category:"story controls",type:{summary:null}}},chipItemLabel:{name:"Label of Chip Item",if:{arg:"hideDropdownIcon",eq:!1},description:"Set the label of *<ifx-chip-item>*.",table:{category:"story controls"}},placeholder:{description:"Set the placeholder string.",table:{category:"ifx-chip props"}},size:{description:"Switch the size of Chip.",control:"radio",options:["small","medium","large"],table:{category:"ifx-chip props",defaultValue:{summary:"medium"},type:{summary:"small | medium | large"}}},variant:{description:"Switch the variant of Chip.",control:"radio",options:["single","multi"],table:{category:"ifx-chip props",defaultValue:{summary:"single"},type:{summary:"single | multi"}}},theme:{description:"Specifies the theme style of the Chip.",control:"radio",options:["outlined","filled-light","filled-dark"],table:{category:"ifx-chip props",defaultValue:{summary:"outlined"},type:{summary:"outlined | filled-light | filled-dark"}}},readOnly:{name:"read-only",description:"No dropdown menu. The chip component is read-only.",control:"boolean",table:{category:"ifx-chip props",defaultValue:{summary:!1}}},icon:{options:Object.keys(h),control:{type:"select"},description:"Set the icon of the Chip.",table:{category:"ifx-chip props",type:{summary:"string"}}},hideDropdownIcon:{name:"hide-dropdown-icon",description:"Hide the trailing chevron-down icon on the Single variant. When enabled, href and target configure navigation.",control:"boolean",if:{arg:"variant",neq:"multi"},table:{category:"ifx-chip props",defaultValue:{summary:!1}}},disabled:{name:"disabled",description:"No dropdown menu. The chip component is disabled.",control:"boolean",table:{category:"ifx-chip props",defaultValue:{summary:!1}}},ariaLabel:{control:{type:"text"},description:"Set the aria label of the chip item. Enhances accessibility.",table:{category:"ifx-chip props"}},selected:{if:{arg:"hideDropdownIcon",eq:!1},description:"Set the *selected* prop to pre-select the chip item.",table:{category:"ifx-chip-item props",defaultValue:{summary:"false"}}},value:{if:{arg:"hideDropdownIcon",eq:!1},description:"Set the value of chip item.",table:{category:"ifx-chip-item props"}},href:{description:"Specifies the URL of the link.",control:"text",table:{category:"ifx-chip props",type:{summary:"string"}}},target:{description:"Determines where to open the linked URL when the link is clicked.",control:"radio",options:["_blank","_self","_parent"],table:{category:"ifx-chip props",defaultValue:{summary:"_blank"}}},selectable:{description:"Set the selectable prop to make the chip selectable.",control:"boolean",table:{category:"ifx-chip props",defaultValue:{summary:!1}}},ifxChange:{action:"ifxChange",description:"A custom event emitted when the selection in a *<ifx-chip>* is updated.",table:{category:"custom events",type:{summary:"Framework integration",detail:`
React: onIfxChange={handleChange}
Vue: @ifxChange="handleChange"
Angular: (ifxChange)="handleChange()"
VanillaJs: .addEventListener("ifxChange", (event) => {/*handle change*/});`}}}}},d=e=>{const t=document.createElement("div");t.innerHTML=`
<ifx-chip
placeholder="${e.placeholder}"
size="${e.size}"
variant="${e.variant}"
theme="${e.theme}"
icon="${e.icon}"
aria-label="${e.ariaLabel}"
${e.hideDropdownIcon||e.href?`href="${e.href||""}" target="${e.target||"_blank"}"`:""}
${e.disabled?"disabled":""}
${e.readOnly?"read-only":""}
    ${e.hideDropdownIcon?'hide-dropdown-icon="true"':""}>${e.href||e.hideDropdownIcon?"":Array.from({length:e.amountOfChipItems},(I,c)=>{const o=document.createElement("ifx-chip-item");return o.innerHTML=e.chipItemLabel+" "+(c+1),o.setAttribute("value",e.value+" "+(c+1)),e.selected&&c===1&&o.setAttribute("selected","true"),e.readOnly&&(e.variant==="multi"||c===0)&&o.setAttribute("selected","true"),o.outerHTML}).join(`
    `)}</ifx-chip>`;const p=t.querySelector("ifx-chip");return p.addEventListener("ifxChange",m("ifxChange")),p},s=d.bind({});s.tags=["!dev","!autodocs"];const a=d.bind({});a.args={variant:"single"};a.argTypes={variant:{table:{disable:!0}},href:{if:{arg:"hideDropdownIcon",eq:!0}},target:{if:{arg:"hideDropdownIcon",eq:!0}},selectable:{control:!1,table:{disable:!0}}};const r=d.bind({});r.args={variant:"multi"};r.argTypes={variant:{table:{disable:!0}},href:{control:!1,table:{disable:!0}},target:{control:!1,table:{disable:!0}},hideDropdownIcon:{control:!1,table:{disable:!0}},selectable:{control:!1,table:{disable:!0}}};const n=d.bind({});n.args={readOnly:!0,variant:"multi"};n.argTypes={readOnly:{table:{disable:!0}},href:{control:!1,table:{disable:!0}},target:{control:!1,table:{disable:!0}},selectable:{control:!1,table:{disable:!0}}};const f=e=>{const t=document.createElement("div");return t.innerHTML=`
<ifx-chip
placeholder="${e.placeholder}"
size="${e.size}"
variant="single"
theme="${e.theme}"
icon="${e.icon}"
aria-label="${e.ariaLabel}"
href="${e.href||""}"
target="${e.target||"_blank"}"
${e.disabled?"disabled":""}></ifx-chip>`,t.querySelector("ifx-chip")},i=f.bind({});i.args={href:"",target:"_blank"};i.argTypes={variant:{table:{disable:!0}},readOnly:{table:{disable:!0}},amountOfChipItems:{control:!1,table:{disable:!0}},chipItemLabel:{control:!1,table:{disable:!0}},selected:{control:!1,table:{disable:!0}},value:{control:!1,table:{disable:!0}},hideDropdownIcon:{control:!1,table:{disable:!0}},selectable:{control:!1,table:{disable:!0}}};const b=e=>{const t=document.createElement("div");return t.innerHTML=`
        <ifx-chip
            placeholder="${e.placeholder}"
            size="${e.size}"
            read-only="${e.readOnly}"
            variant="${e.variant}"
            theme="${e.theme}"
            aria-label="${e.ariaLabel}"
            ${e.selectable?'selectable="true"':""}
            ${e.disabled?"disabled":""}>
        </ifx-chip>`,t.querySelector("ifx-chip")},l=b.bind({});l.args={selectable:!0};l.argTypes={variant:{control:!1,table:{disable:!0}},href:{control:!1,table:{disable:!0}},target:{control:!1,table:{disable:!0}},hideDropdownIcon:{control:!1,table:{disable:!0}},amountOfChipItems:{control:!1,table:{disable:!0}},chipItemLabel:{control:!1,table:{disable:!0}},selected:{control:!1,table:{disable:!0}},value:{control:!1,table:{disable:!0}}};const g=["Default","Single","Multi","ReadOnly","Action","SelectableAction"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: any) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = \`
<ifx-chip
placeholder="\${args.placeholder}"
size="\${args.size}"
variant="\${args.variant}"
theme="\${args.theme}"
icon="\${args.icon}"
aria-label="\${args.ariaLabel}"
\${args.hideDropdownIcon || args.href ? \`href="\${args.href || ""}" target="\${args.target || "_blank"}"\` : ""}
\${args.disabled ? "disabled" : ""}
\${args.readOnly ? "read-only" : ""}
    \${args.hideDropdownIcon ? 'hide-dropdown-icon="true"' : ""}>\${args.href || args.hideDropdownIcon ? "" : (() => {
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
  })()}</ifx-chip>\`;
  const chip: any = wrapper.querySelector("ifx-chip");
  chip.addEventListener("ifxChange", action("ifxChange"));
  return chip;
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(args: any) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = \`
<ifx-chip
placeholder="\${args.placeholder}"
size="\${args.size}"
variant="\${args.variant}"
theme="\${args.theme}"
icon="\${args.icon}"
aria-label="\${args.ariaLabel}"
\${args.hideDropdownIcon || args.href ? \`href="\${args.href || ""}" target="\${args.target || "_blank"}"\` : ""}
\${args.disabled ? "disabled" : ""}
\${args.readOnly ? "read-only" : ""}
    \${args.hideDropdownIcon ? 'hide-dropdown-icon="true"' : ""}>\${args.href || args.hideDropdownIcon ? "" : (() => {
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
  })()}</ifx-chip>\`;
  const chip: any = wrapper.querySelector("ifx-chip");
  chip.addEventListener("ifxChange", action("ifxChange"));
  return chip;
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args: any) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = \`
<ifx-chip
placeholder="\${args.placeholder}"
size="\${args.size}"
variant="\${args.variant}"
theme="\${args.theme}"
icon="\${args.icon}"
aria-label="\${args.ariaLabel}"
\${args.hideDropdownIcon || args.href ? \`href="\${args.href || ""}" target="\${args.target || "_blank"}"\` : ""}
\${args.disabled ? "disabled" : ""}
\${args.readOnly ? "read-only" : ""}
    \${args.hideDropdownIcon ? 'hide-dropdown-icon="true"' : ""}>\${args.href || args.hideDropdownIcon ? "" : (() => {
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
  })()}</ifx-chip>\`;
  const chip: any = wrapper.querySelector("ifx-chip");
  chip.addEventListener("ifxChange", action("ifxChange"));
  return chip;
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(args: any) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = \`
<ifx-chip
placeholder="\${args.placeholder}"
size="\${args.size}"
variant="\${args.variant}"
theme="\${args.theme}"
icon="\${args.icon}"
aria-label="\${args.ariaLabel}"
\${args.hideDropdownIcon || args.href ? \`href="\${args.href || ""}" target="\${args.target || "_blank"}"\` : ""}
\${args.disabled ? "disabled" : ""}
\${args.readOnly ? "read-only" : ""}
    \${args.hideDropdownIcon ? 'hide-dropdown-icon="true"' : ""}>\${args.href || args.hideDropdownIcon ? "" : (() => {
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
  })()}</ifx-chip>\`;
  const chip: any = wrapper.querySelector("ifx-chip");
  chip.addEventListener("ifxChange", action("ifxChange"));
  return chip;
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`(args: any) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = \`
<ifx-chip
placeholder="\${args.placeholder}"
size="\${args.size}"
variant="single"
theme="\${args.theme}"
icon="\${args.icon}"
aria-label="\${args.ariaLabel}"
href="\${args.href || ""}"
target="\${args.target || "_blank"}"
\${args.disabled ? "disabled" : ""}></ifx-chip>\`;
  return wrapper.querySelector("ifx-chip");
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`(args: any) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = \`
        <ifx-chip
            placeholder="\${args.placeholder}"
            size="\${args.size}"
            read-only="\${args.readOnly}"
            variant="\${args.variant}"
            theme="\${args.theme}"
            aria-label="\${args.ariaLabel}"
            \${args.selectable ? 'selectable="true"' : ""}
            \${args.disabled ? "disabled" : ""}>
        </ifx-chip>\`;
  return wrapper.querySelector("ifx-chip");
}`,...l.parameters?.docs?.source}}};const $=Object.freeze(Object.defineProperty({__proto__:null,Action:i,Default:s,Multi:r,ReadOnly:n,SelectableAction:l,Single:a,__namedExportsOrder:g,default:u},Symbol.toStringTag,{value:"Module"}));export{$ as C};
