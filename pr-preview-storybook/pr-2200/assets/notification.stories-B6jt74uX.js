import{i as e}from"./icons-DyNdhNdc.js";import{b as o}from"./iframe-D_ica_UD.js";import"./preload-helper-PPVm8Dsz.js";const l={title:"Components/Notification",tags:["autodocs"],args:{label:"Sample Notification",variant:"success",icon:"c-check-16",linkText:"Link",linkHref:"https://www.example.com",linkTarget:"_blank"},argTypes:{label:{name:"Label of Notification",description:"Set the text label of the *<ifx-notification>*.",table:{category:"story controls",type:{summary:"string"}}},variant:{description:"Variant of the notification.",options:["success","locked","error","neutral"],control:{type:"radio"},table:{category:"ifx-notification props",defaultValue:{summary:"success"},type:{summary:"success | warning | error"}}},icon:{description:'The icon to be displayed in the notification. Choose "none" to display no icon.',options:Object.keys(e),control:{type:"select"},table:{category:"ifx-notification props",type:{summary:"string"}}},linkText:{description:"Text for the link.",table:{category:"ifx-notification props",type:{summary:"string"}}},linkHref:{description:"URL for the link.",table:{category:"ifx-notification props",type:{summary:"string"}}},linkTarget:{options:["_blank","_self","_parent"],control:{type:"radio"},description:"Specifies where to open the linked document.",table:{category:"ifx-notification props",defaultValue:{summary:"_blank"},type:{summary:"_blank | _self | _parent"}}}}},a=t=>{const n=t.icon==="none"?"":t.icon;return o`<ifx-notification 
  icon = "${n}"
  variant="${t.variant}" 
  link-text="${t.linkText}" 
  link-href="${t.linkHref}"
  link-target="${t.linkTarget}">
  ${t.label}
</ifx-notification>`},i=a.bind({});i.argTypes={};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => {
  const icon = args.icon === "none" ? "" : args.icon;
  return html\`<ifx-notification 
  icon = "\${icon}"
  variant="\${args.variant}" 
  link-text="\${args.linkText}" 
  link-href="\${args.linkHref}"
  link-target="\${args.linkTarget}">
  \${args.label}
</ifx-notification>\`;
}`,...i.parameters?.docs?.source}}};const p=["Default"];export{i as Default,p as __namedExportsOrder,l as default};
