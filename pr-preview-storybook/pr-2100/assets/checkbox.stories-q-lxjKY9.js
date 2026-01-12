const{action:r}=__STORYBOOK_MODULE_ACTIONS__,d={title:"Components/Checkbox",tags:["autodocs"],args:{label:"Text",error:!1,disabled:!1,checked:!1,size:"s",indeterminate:!1,name:"checkbox"},argTypes:{label:{name:"Label of Checkbox",description:"Set the label displayed next to *<ifx-checkbox>*.",table:{category:"story controls"}},error:{description:"Toggles the error state for the checkbox.",control:"boolean",table:{category:"ifx-checkbox props",defaultValue:{summary:!1}}},disabled:{description:"Disables the checkbox when set to true.",control:"boolean",table:{category:"ifx-checkbox props",defaultValue:{summary:!1}}},checked:{description:"Controls whether the checkbox is checked.",control:"boolean",table:{category:"ifx-checkbox props",defaultValue:{summary:!1}}},indeterminate:{description:"Activates the indeterminate state for the checkbox when set to true.",control:"boolean",table:{category:"ifx-checkbox props",defaultValue:{summary:!1}}},size:{description:"Sets the size of the checkbox. Options: s (21px) and m (25px).",control:"radio",options:["s","m"],table:{category:"ifx-checkbox props",defaultValue:{summary:"s"},type:{summary:"s | m"}}},name:{description:"Name of the element, that is used as reference when a form is submitted.",table:{category:"ifx-checkbox props"}},ifxChange:{action:"ifxChange",description:"Custom event that is triggered when the checkbox is clicked.",table:{category:"custom events",type:{summary:"Framework integration",detail:`React: onIfxChange={handleChange}
Vue:@ifxChange="handleChange"
Angular:(ifxChange)="handleChange()"
VanillaJs:.addEventListener("ifxChange", (event) => {//handle change});`}}},ifxError:{action:"ifxError",description:"Custom event emitted when an checkbox has an error.",table:{type:{summary:"Framework integration",detail:`React: onIfxError={handleError}
Vue:@ifxError="handleError"
Angular:(ifxError)="handleError()"
VanillaJs:.addEventListener("ifxError", (event) => {//handle error});`}}}}},h=({error:n,disabled:o,checked:a,indeterminate:c,size:i,label:s,name:l})=>{const e=document.createElement("ifx-checkbox");return e.setAttribute("error",n),e.setAttribute("disabled",o),e.setAttribute("checked",a),e.setAttribute("size",i),e.setAttribute("indeterminate",c),e.setAttribute("name",l),e.addEventListener("ifxChange",r("ifxChange")),e.addEventListener("ifxError",r("ifxError")),e.innerHTML=`${s}`,e},t=h.bind({});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
  error,
  disabled,
  checked,
  indeterminate,
  size,
  label,
  name
}) => {
  const checkbox = document.createElement("ifx-checkbox");
  checkbox.setAttribute("error", error);
  checkbox.setAttribute("disabled", disabled);
  checkbox.setAttribute("checked", checked);
  checkbox.setAttribute("size", size);
  checkbox.setAttribute("indeterminate", indeterminate);
  checkbox.setAttribute("name", name);
  checkbox.addEventListener("ifxChange", action("ifxChange"));
  checkbox.addEventListener("ifxError", action("ifxError"));
  checkbox.innerHTML = \`\${label}\`;
  return checkbox;
}`,...t.parameters?.docs?.source}}};const b=["Default"],x=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:b,default:d},Symbol.toStringTag,{value:"Module"}));export{x as C};
