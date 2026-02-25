const{action:y}=__STORYBOOK_MODULE_ACTIONS__,x={title:"Components/Date Picker",tags:["autodocs"],args:{disabled:!1,size:"s",success:!1,error:!1,name:"date-picker",value:"",max:"",min:"",label:"Label Text",caption:"Caption text, description, error notification.",ariaLabelText:"Date Picker",required:!1,autocomplete:"on",type:"date"},argTypes:{label:{description:"Label of Date Picker.",table:{category:"ifx-date-picker props"}},caption:{description:"Caption text, description, error notification.",table:{category:"ifx-date-picker props"}},min:{description:"Minimum date that can be selected. The parsed value is always formatted as yyyy-mm-dd.",table:{category:"ifx-date-picker props"}},max:{description:"The latest date that can be selected. The parsed value is always formatted as yyyy-mm-dd.",table:{category:"ifx-date-picker props"}},disabled:{description:"Disables the date picker",control:"boolean",table:{category:"ifx-date-picker props",defaultValue:{summary:!1}}},success:{description:"Indicates success in the date picker.",control:"boolean",table:{category:"ifx-date-picker props",defaultValue:{summary:!1}}},error:{description:"Indicates error in the date picker.",control:"boolean",table:{category:"ifx-date-picker props",defaultValue:{summary:!1}}},size:{description:"Sets the size of the date picker. Options: Height small  (36px) and Height large (40px).S",control:"radio",options:["s","l"],table:{category:"ifx-date-picker props",defaultValue:{summary:"s"}}},name:{description:"Name of the element, that is used as reference when a form is submitted.",control:"text",table:{category:"ifx-date-picker props"}},value:{description:'Displayed date is formatted based on the locale of the user`s browser, but the parsed value is always formatted as yyyy-mm-dd. For "datetime-local" type, it is yyyy-mm-ddTHH:MM. Example: "2018-06-12T19:30"',table:{category:"ifx-date-picker props"}},ariaLabelText:{control:{type:"text"},description:"Set the aria label of the date picker. Enhances accessibility.",table:{category:"ifx-date-picker props"}},required:{description:"Set the required attribute to true to make the date picker mandatory.",control:"boolean",table:{category:"ifx-date-picker props",defaultValue:{summary:!1}}},autocomplete:{description:'Sets the autocomplete attribute. "on" by default.',table:{category:"ifx-date-picker props"}},type:{description:'Sets the type of the date-picker. "Date" by default.',control:"radio",options:["date","datetime-local"],defaultValue:{summary:"date"},table:{category:"ifx-date-picker props"}},ifxDate:{action:"ifxDate",description:"A custom event emitted when a date in the calendar is being selected.",table:{category:"custom events",type:{summary:"Framework integration",detail:`React: onIfxDate={handleInput}
Vue:@ifxDate="handleInput"
Angular:(ifxDate)="handleInput()"
VanillaJs:.addEventListener("ifxDate", (event) => {//handle input});`}}},clearSelection:{description:"Public method for clearing the date",table:{category:"ifx-date-picker public methods"}}}},h=({error:a,disabled:r,success:i,size:s,value:n,max:o,min:l,caption:c,label:d,ariaLabelText:p,required:u,name:m,autocomplete:b,type:f})=>{const e=document.createElement("ifx-date-picker");return e.setAttribute("name",m),e.setAttribute("error",a),e.setAttribute("disabled",r),e.setAttribute("size",s),e.setAttribute("success",i),e.setAttribute("value",n),e.setAttribute("max",o),e.setAttribute("min",l),e.setAttribute("label",d),e.setAttribute("caption",c),e.setAttribute("aria-label-text",p),e.setAttribute("required",u),e.setAttribute("autocomplete",b),e.setAttribute("type",f),e.addEventListener("ifxDate",y("ifxDate")),e},t=h.bind({});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
  error,
  disabled,
  success,
  size,
  value,
  max,
  min,
  caption,
  label,
  ariaLabelText,
  required,
  name,
  autocomplete,
  type
}) => {
  const element = document.createElement("ifx-date-picker");
  element.setAttribute("name", name);
  element.setAttribute("error", error);
  element.setAttribute("disabled", disabled);
  element.setAttribute("size", size);
  element.setAttribute("success", success);
  element.setAttribute("value", value);
  element.setAttribute("max", max);
  element.setAttribute("min", min);
  element.setAttribute("label", label);
  element.setAttribute("caption", caption);
  element.setAttribute("aria-label-text", ariaLabelText);
  element.setAttribute("required", required);
  element.setAttribute("autocomplete", autocomplete);
  element.setAttribute("type", type);
  element.addEventListener("ifxDate", action("ifxDate"));
  return element;
}`,...t.parameters?.docs?.source}}};const k=["Default"],A=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:k,default:x},Symbol.toStringTag,{value:"Module"}));export{A as D};
