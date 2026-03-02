import{a as r}from"./icons-DyNdhNdc.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,c={title:"Components/Icon",tags:["autodocs"],args:{icon:"c-check-16"},argTypes:{icon:{description:"Set the icon.",options:Object.keys(r),control:{type:"select"},table:{category:"ifx-icon props"}},consoleError:{action:"consoleError",description:"Custom event emitted when icon is invalid.",table:{category:"custom events",type:{summary:"Framework integration",detail:`React: onConsoleError={handleError}
Vue:@consoleError="handleError"
Angular:(consoleError)="handleError()"
VanillaJs:.addEventListener("consoleError", (event) => {//handle error});`}}}}},s=({icon:n})=>{const o=document.createElement("ifx-icon");return o.setAttribute("icon",n),o.addEventListener("consoleError",t("consoleError")),o},e=s.bind({});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`({
  icon
}) => {
  const ifxIcon = document.createElement("ifx-icon");
  ifxIcon.setAttribute("icon", icon);
  ifxIcon.addEventListener("consoleError", action("consoleError"));
  return ifxIcon;
}`,...e.parameters?.docs?.source}}};const i=["Default"],l=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:i,default:c},Symbol.toStringTag,{value:"Module"}));export{l as I};
