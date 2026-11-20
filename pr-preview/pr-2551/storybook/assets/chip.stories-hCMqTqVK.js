import{i as h}from"./icons-B3WZ8sqF.js";const{action:m}=__STORYBOOK_MODULE_ACTIONS__,b={title:"Components/Chip",parameters:{docs:{story:{height:"100px"}}},args:{amountOfChipItems:4,chipItemLabel:"Item Label",placeholder:"Label",actionLabel:"",size:"medium",variant:"single",href:"",target:"_blank",readOnly:!1,selected:!1,value:"Item Value",ariaLabel:"Chip",disabled:!1,theme:"outlined",icon:"",selectable:!0},argTypes:{amountOfChipItems:{name:"Amount of Chip Items",control:"number",if:{arg:"variant",neq:"action"},description:"Control the number of *<ifx-chip-item>* in a Chip.",table:{category:"story controls",type:{summary:null}}},chipItemLabel:{name:"Label of Chip Item",if:{arg:"variant",neq:"action"},description:"Set the label of *<ifx-chip-item>*.",table:{category:"story controls"}},placeholder:{description:"Set the placeholder string.",table:{category:"ifx-chip props"}},actionLabel:{name:"action-label",description:'Set the visible label for an action chip (variant="action"). Falls back to placeholder when not set.',if:{arg:"variant",eq:"action"},control:"text",table:{category:"ifx-chip props"}},size:{description:"Switch the size of Chip.",control:"radio",options:["small","medium","large"],table:{category:"ifx-chip props",defaultValue:{summary:"medium"},type:{summary:"small | medium | large"}}},variant:{description:"Switch the variant of Chip.",control:"radio",options:["single","multi","action"],table:{category:"ifx-chip props",defaultValue:{summary:"single"},type:{summary:"single | multi | action"}}},theme:{description:"Specifies the theme style of the Chip.",control:"radio",options:["outlined","filled-light","filled-dark"],table:{category:"ifx-chip props",defaultValue:{summary:"outlined"},type:{summary:"outlined | filled-light | filled-dark"}}},readOnly:{name:"read-only",description:"No dropdown menu. The chip component is read-only.",control:"boolean",table:{category:"ifx-chip props",defaultValue:{summary:!1}}},icon:{options:Object.keys(h),control:{type:"select"},description:"Set the icon of the Chip.",table:{category:"ifx-chip props",type:{summary:"string"}}},disabled:{name:"disabled",description:"No dropdown menu. The chip component is disabled.",control:"boolean",table:{category:"ifx-chip props",defaultValue:{summary:!1}}},ariaLabel:{control:{type:"text"},description:"Set the aria label of the chip item. Enhances accessibility.",table:{category:"ifx-chip props"}},selected:{if:{arg:"variant",neq:"action"},description:"Set the *selected* prop to pre-select the chip item.",table:{category:"ifx-chip-item props",defaultValue:{summary:"false"}}},value:{if:{arg:"variant",neq:"action"},description:"Set the value of chip item.",table:{category:"ifx-chip-item props"}},href:{if:{arg:"variant",eq:"action"},description:"Specifies the URL of the link.",control:"text",table:{category:"ifx-chip props",type:{summary:"string"}}},target:{if:{arg:"variant",eq:"action"},description:"Determines where to open the linked URL when the link is clicked.",control:"radio",options:["_blank","_self","_parent"],table:{category:"ifx-chip props",defaultValue:{summary:"_blank"}}},selectable:{description:"When enabled, the action chip toggles its selected state instead of navigating. href and target are only applicable when selectable is false.",control:"boolean",if:{arg:"variant",eq:"action"},table:{category:"ifx-chip props",defaultValue:{summary:!0}}},ifxChange:{action:"ifxChange",description:"A custom event emitted when the selection in a *<ifx-chip>* is updated.",table:{category:"custom events",type:{summary:"Framework integration",detail:`
React: onIfxChange={handleChange}
Vue: @ifxChange="handleChange"
Angular: (ifxChange)="handleChange()"
VanillaJs: .addEventListener("ifxChange", (event) => {/*handle change*/});`}}}}},p=e=>{const a=document.createElement("div");a.innerHTML=`
<ifx-chip
placeholder="${e.placeholder}"
action-label="${e.actionLabel}"
size="${e.size}"
variant="${e.variant}"
theme="${e.theme}"
icon="${e.icon}"
aria-label="${e.ariaLabel}"
${e.variant==="action"&&!e.readOnly&&!e.selectable?`href="${e.href||""}" target="${e.target||"_blank"}"`:""}
${e.variant==="action"&&e.selectable?'selectable="true"':""}
${e.disabled?"disabled":""}
${e.readOnly?"read-only":""}
    >${e.href||e.variant==="action"?"":Array.from({length:e.amountOfChipItems},(y,o)=>{const c=document.createElement("ifx-chip-item");return c.innerHTML=e.chipItemLabel+" "+(o+1),c.setAttribute("value",e.value+" "+(o+1)),e.selected&&o===1&&c.setAttribute("selected","true"),e.readOnly&&(e.variant==="multi"||o===0)&&c.setAttribute("selected","true"),c.outerHTML}).join(`
    `)}</ifx-chip>`;const d=a.querySelector("ifx-chip");return d.addEventListener("ifxChange",m("ifxChange")),d},s=p.bind({});s.tags=["!dev","!autodocs"];const t=p.bind({});t.args={variant:"single"};t.argTypes={variant:{table:{disable:!0}},href:{control:!1,table:{disable:!0}},target:{control:!1,table:{disable:!0}},selectable:{control:!1,table:{disable:!0}}};const r=p.bind({});r.args={variant:"multi"};r.argTypes={variant:{table:{disable:!0}},href:{control:!1,table:{disable:!0}},target:{control:!1,table:{disable:!0}},selectable:{control:!1,table:{disable:!0}}};const n=p.bind({});n.args={readOnly:!0,variant:"multi"};n.argTypes={variant:{control:"radio",options:["single","multi","action"]},readOnly:{table:{disable:!0}},href:{control:!1,table:{disable:!0}},target:{control:!1,table:{disable:!0}},selectable:{control:"boolean",if:{arg:"variant",eq:"action"},table:{category:"ifx-chip props"}}};const u=e=>{const a=document.createElement("div");return a.innerHTML=`
<ifx-chip
placeholder="${e.placeholder}"
action-label="${e.actionLabel}"
size="${e.size}"
variant="action"
theme="${e.theme}"
icon="${e.icon}"
aria-label="${e.ariaLabel}"
href="${e.href||""}"
target="${e.target||"_blank"}"
${e.disabled?"disabled":""}></ifx-chip>`,a.querySelector("ifx-chip")},i=u.bind({});i.args={variant:"action",actionLabel:"Label",href:"",target:"_blank"};i.argTypes={variant:{table:{disable:!0}},readOnly:{table:{disable:!0}},amountOfChipItems:{control:!1,table:{disable:!0}},chipItemLabel:{control:!1,table:{disable:!0}},selected:{control:!1,table:{disable:!0}},value:{control:!1,table:{disable:!0}},selectable:{control:!1,table:{disable:!0}}};const f=e=>{const a=document.createElement("div");return a.innerHTML=`
        <ifx-chip
            placeholder="${e.placeholder}"
            action-label="${e.actionLabel}"
            size="${e.size}"
            ${e.readOnly?'read-only="true"':""}
            variant="action"
            theme="${e.theme}"
            aria-label="${e.ariaLabel}"
            ${e.selectable?'selectable="true"':""}
            ${e.disabled?"disabled":""}>
        </ifx-chip>`,a.querySelector("ifx-chip")},l=f.bind({});l.args={variant:"action",actionLabel:"Label",selectable:!0};l.argTypes={variant:{control:!1,table:{disable:!0}},readOnly:{name:"read-only",description:"Prevents activating the selectable action chip.",control:"boolean",table:{category:"ifx-chip props"}},href:{control:!1,table:{disable:!0}},target:{control:!1,table:{disable:!0}},amountOfChipItems:{control:!1,table:{disable:!0}},chipItemLabel:{control:!1,table:{disable:!0}},selected:{control:!1,table:{disable:!0}},value:{control:!1,table:{disable:!0}}};const g=["Default","Single","Multi","ReadOnly","Action","SelectableAction"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: any) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = \`
<ifx-chip
placeholder="\${args.placeholder}"
action-label="\${args.actionLabel}"
size="\${args.size}"
variant="\${args.variant}"
theme="\${args.theme}"
icon="\${args.icon}"
aria-label="\${args.ariaLabel}"
\${args.variant === "action" && !args.readOnly && !args.selectable ? \`href="\${args.href || ""}" target="\${args.target || "_blank"}"\` : ""}
\${args.variant === "action" && args.selectable ? 'selectable="true"' : ""}
\${args.disabled ? "disabled" : ""}
\${args.readOnly ? "read-only" : ""}
    >\${args.href || args.variant === "action" ? "" : (() => {
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
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: any) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = \`
<ifx-chip
placeholder="\${args.placeholder}"
action-label="\${args.actionLabel}"
size="\${args.size}"
variant="\${args.variant}"
theme="\${args.theme}"
icon="\${args.icon}"
aria-label="\${args.ariaLabel}"
\${args.variant === "action" && !args.readOnly && !args.selectable ? \`href="\${args.href || ""}" target="\${args.target || "_blank"}"\` : ""}
\${args.variant === "action" && args.selectable ? 'selectable="true"' : ""}
\${args.disabled ? "disabled" : ""}
\${args.readOnly ? "read-only" : ""}
    >\${args.href || args.variant === "action" ? "" : (() => {
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
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args: any) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = \`
<ifx-chip
placeholder="\${args.placeholder}"
action-label="\${args.actionLabel}"
size="\${args.size}"
variant="\${args.variant}"
theme="\${args.theme}"
icon="\${args.icon}"
aria-label="\${args.ariaLabel}"
\${args.variant === "action" && !args.readOnly && !args.selectable ? \`href="\${args.href || ""}" target="\${args.target || "_blank"}"\` : ""}
\${args.variant === "action" && args.selectable ? 'selectable="true"' : ""}
\${args.disabled ? "disabled" : ""}
\${args.readOnly ? "read-only" : ""}
    >\${args.href || args.variant === "action" ? "" : (() => {
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
action-label="\${args.actionLabel}"
size="\${args.size}"
variant="\${args.variant}"
theme="\${args.theme}"
icon="\${args.icon}"
aria-label="\${args.ariaLabel}"
\${args.variant === "action" && !args.readOnly && !args.selectable ? \`href="\${args.href || ""}" target="\${args.target || "_blank"}"\` : ""}
\${args.variant === "action" && args.selectable ? 'selectable="true"' : ""}
\${args.disabled ? "disabled" : ""}
\${args.readOnly ? "read-only" : ""}
    >\${args.href || args.variant === "action" ? "" : (() => {
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
action-label="\${args.actionLabel}"
size="\${args.size}"
variant="action"
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
            action-label="\${args.actionLabel}"
            size="\${args.size}"
            \${args.readOnly ? 'read-only="true"' : ""}
            variant="action"
            theme="\${args.theme}"
            aria-label="\${args.ariaLabel}"
            \${args.selectable ? 'selectable="true"' : ""}
            \${args.disabled ? "disabled" : ""}>
        </ifx-chip>\`;
  return wrapper.querySelector("ifx-chip");
}`,...l.parameters?.docs?.source}}};const v=Object.freeze(Object.defineProperty({__proto__:null,Action:i,Default:s,Multi:r,ReadOnly:n,SelectableAction:l,Single:t,__namedExportsOrder:g,default:b},Symbol.toStringTag,{value:"Module"}));export{v as C,s as D};
