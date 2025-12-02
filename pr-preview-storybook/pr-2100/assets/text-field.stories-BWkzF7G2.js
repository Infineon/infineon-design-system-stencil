import{i as g}from"./icons-C_9-zI1i.js";const{action:I}=__STORYBOOK_MODULE_ACTIONS__,v={title:"Components/Text Field",args:{label:"Label",error:!1,disabled:!1,size:"m",icon:"",success:!1,placeholder:"Placeholder",readOnly:!1,caption:"Caption",required:!0,name:"text-field",showDeleteIcon:!1,maxlength:"",value:"",autocomplete:"on",type:"text",internalId:"text-field",ariaLabel:"text field for user input"},argTypes:{label:{name:"Label of Text Field",description:"The text label displayed above the *<ifx-text-field>*.",table:{category:"ifx-text-field props"}},error:{description:"Indicates an error state for the text field.",table:{category:"ifx-text-field props",defaultValue:{summary:!1}}},disabled:{description:"Disables the text field.",table:{category:"ifx-text-field props",defaultValue:{summary:!1}}},size:{description:"Size options: s (36px) and m (40px) - default: m",options:["s","m"],control:"radio",table:{category:"ifx-text-field props",defaultValue:{summary:"m"}}},icon:{description:"Specifies an icon to display within the text field.",options:Object.keys(g),control:"select",table:{category:"ifx-text-field props",defaultValue:{summary:""}}},success:{description:"Indicates a successful state for the text field.",table:{category:"ifx-text-field props",defaultValue:{summary:!1}}},placeholder:{description:"Displays a placeholder text inside the text field when it is empty.",table:{category:"ifx-text-field props"}},readOnly:{name:"read-only",description:`Text cannot be edited when set to true.
 
*Note: It is different from disabled prop, control is focusable in readOnly mode unlike disabled.*`,table:{category:"ifx-text-field props",defaultValue:{summary:"false"}}},caption:{description:"Text displayed below the text field to provide additional information.",table:{category:"ifx-text-field props"}},required:{description:"Marks the text field as required for form submission. Displays an asterisk next to the label when set to **true**.",table:{category:"ifx-text-field props",defaultValue:{summary:!0}}},name:{description:"Name of the element, that is used as reference when a form is submitted.",table:{category:"ifx-text-field props"}},showDeleteIcon:{description:"Displays a delete icon inside the text field when set to **true**, allowing user to clear the input content.",table:{category:"ifx-text-field props",defaultValue:{summary:!1}}},maxlength:{description:"Specifies the maximum number of characters that can be entered into the text field.",control:"number",table:{category:"ifx-text-field props"}},value:{description:"The value of the text field. It is used for the form submission.",control:"text",table:{category:"ifx-text-field props",type:{summary:"string"}}},internalId:{description:"Sets the ID of the internal input and the value of htmlFor for the label element",control:"text",table:{category:"ifx-text-field props",defaultValue:{summary:"text-field"},type:{summary:"string"}}},autocomplete:{description:'Sets the autocomplete attribute. "on" by default.',control:"text",table:{category:"ifx-text-field props",type:{summary:"string"}}},type:{description:'Sets the type attribute. "Text" by default.',options:["text","password"],control:"radio",table:{category:"ifx-text-field props",type:{summary:"string"},defaultValue:{summary:"text"}}},ariaLabel:{description:"Aria label of the Tag.",control:"text",table:{category:"ARIA Labels",defaultValue:{summary:""},type:{summary:"string"}}},ifxInput:{action:"ifxInput",description:"Custom event emitted on input change.",table:{category:"custom events",type:{summary:"Framework integration",detail:`React: onIfxInput={handleInput}
Vue:@ifxInput="handleInput"
Angular:(ifxInput)="handleInput()"
VanillaJs:.addEventListener("ifxInput", (event) => {//handle input});`}}}}},w=({error:a,disabled:r,success:n,size:l,placeholder:s,readOnly:o,label:d,caption:u,icon:c,required:p,name:f,maxlength:i,showDeleteIcon:m,value:b,autocomplete:x,type:y,internalId:h,ariaLabel:A})=>{const e=document.createElement("ifx-text-field");return e.setAttribute("error",a),e.setAttribute("disabled",r),e.setAttribute("size",l),e.setAttribute("icon",c),e.setAttribute("success",n),e.setAttribute("placeholder",s),e.setAttribute("read-only",o),e.setAttribute("caption",u),e.setAttribute("label",d),e.setAttribute("required",p),e.setAttribute("name",f),e.setAttribute("show-delete-icon",m),e.setAttribute("value",b),e.setAttribute("autocomplete",x),e.setAttribute("type",y),e.setAttribute("internal-id",h),e.setAttribute("aria-label",A),i&&e.setAttribute("maxlength",i),e.addEventListener("ifxInput",I("ifxInput")),e},t=w.bind({});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
  error,
  disabled,
  success,
  size,
  placeholder,
  readOnly,
  label,
  caption,
  icon,
  required,
  name,
  maxlength,
  showDeleteIcon,
  value,
  autocomplete,
  type,
  internalId,
  ariaLabel
}) => {
  const element = document.createElement("ifx-text-field");
  element.setAttribute("error", error);
  element.setAttribute("disabled", disabled);
  element.setAttribute("size", size);
  element.setAttribute("icon", icon);
  element.setAttribute("success", success);
  element.setAttribute("placeholder", placeholder);
  element.setAttribute("read-only", readOnly);
  element.setAttribute("caption", caption);
  element.setAttribute("label", label);
  element.setAttribute("required", required);
  element.setAttribute("name", name);
  element.setAttribute("show-delete-icon", showDeleteIcon);
  element.setAttribute("value", value);
  element.setAttribute("autocomplete", autocomplete);
  element.setAttribute("type", type);
  element.setAttribute("internal-id", internalId);
  element.setAttribute("aria-label", ariaLabel);
  if (maxlength) element.setAttribute("maxlength", maxlength);
  element.addEventListener("ifxInput", action("ifxInput"));
  return element;
}`,...t.parameters?.docs?.source}}};const T=["Default"],O=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:T,default:v},Symbol.toStringTag,{value:"Module"}));export{t as D,O as T};
