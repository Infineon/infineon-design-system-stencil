import{i as l}from"./icons-C_9-zI1i.js";const p={title:"Components/Tooltip",tags:["autodocs"],args:{header:"Tooltip headline",text:"Hi, I'm a tooltip",position:"auto",variant:"compact",icon:"c-info-16",ariaLabel:"Tooltip with important information"},argTypes:{text:{description:"Defines the main content of the tooltip.",control:"text",table:{category:"ifx-tooltip props",type:{summary:"string"}}},icon:{description:"The icon to be displayed. This control is only applicable when the variant is set to ***extended***.",options:Object.keys(l),control:"select",table:{category:"ifx-tooltip props",type:{summary:"string",defaultValue:{summary:"c-info-16"}}}},position:{description:"Determines the position of the tooltip relative to the reference element.",options:["auto","bottom-start","top-start","left","bottom-end","top-end","right","bottom","top"],control:"radio",table:{category:"ifx-tooltip props",defaultValue:{summary:"auto"}}},variant:{description:"Sets the style variant of the tooltip.",control:"radio",options:["compact","dismissible","extended"],table:{category:"ifx-tooltip props",defaultValue:{summary:"compact"}}},header:{description:"Specifies the header or title of the tooltip. This field is only applicable when the variant is set to ***dismissible*** or ***extended***.",control:"text",if:{arg:"variant",neq:"compact"},table:{category:"ifx-tooltip props",type:{summary:"string"}}},ariaLabel:{description:"Defines the aria-label for the tooltip, providing a text alternative for screen readers.",control:"text",table:{category:"ifx-tooltip props",type:{summary:"string | null"},defaultValue:{summary:"null"}}}}},c=({header:i,text:n,variant:e,position:r,icon:a,ariaLabel:s})=>{const t=document.createElement("ifx-tooltip");return(e==="dismissible"||e==="extended")&&t.setAttribute("header",i),t.setAttribute("text",n),t.setAttribute("variant",e==="extended"?"extended":e),t.setAttribute("position",r),t.setAttribute("icon",a),t.setAttribute("aria-label",s),t.textContent=`I'm the tooltip reference element - Please ${e==="dismissible"?"click":"hover"} me`,t},o=c.bind({});o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
  header,
  text,
  variant,
  position,
  icon,
  ariaLabel
}) => {
  const element = document.createElement("ifx-tooltip");
  if (variant === "dismissible" || variant === "extended") {
    element.setAttribute("header", header);
  }
  element.setAttribute("text", text);
  element.setAttribute("variant", variant === "extended" ? "extended" : variant);
  element.setAttribute("position", position);
  element.setAttribute("icon", icon);
  element.setAttribute("aria-label", ariaLabel);
  element.textContent = \`I'm the tooltip reference element - Please \${variant === "dismissible" ? "click" : "hover"} me\`; // Set content for the reference element

  return element;
}`,...o.parameters?.docs?.source}}};const m=["Default"],u=Object.freeze(Object.defineProperty({__proto__:null,Default:o,__namedExportsOrder:m,default:p},Symbol.toStringTag,{value:"Module"}));export{u as T};
