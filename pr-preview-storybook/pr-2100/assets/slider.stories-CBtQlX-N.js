import{i as d}from"./icons-C_9-zI1i.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,m={title:"Components/Slider",component:"ifx-slider",tags:["autodocs"],argTypes:{min:{control:"number",description:"The minimum value of the slider.",table:{category:"ifx-slider props",defaultValue:{summary:"0"},type:{summary:"number"}}},max:{control:"number",description:"The maximum value of the slider.",table:{category:"ifx-slider props",defaultValue:{summary:"100"},type:{summary:"number"}}},step:{control:"number",description:"The step value of the slider.",table:{category:"ifx-slider props",defaultValue:{summary:"1"},type:{summary:"number"}}},type:{control:"radio",options:["single","double"],description:"The type of the slider.",table:{category:"ifx-slider props",defaultValue:{summary:"single"},type:{summary:"single | double"}}},value:{control:"number",if:{arg:"type",eq:"single"},description:"The current value of the slider.",table:{category:"ifx-slider props",type:{summary:"number "}}},minValueHandle:{control:"number",if:{arg:"type",eq:"double"},description:"The minimum value of the handle in double slider.",table:{category:"ifx-slider props",type:{summary:"number"}}},maxValueHandle:{control:"number",if:{arg:"type",eq:"double"},description:"The maximum value of the handle in double slider.",table:{category:"ifx-slider props",type:{summary:"number"}}},showPercentage:{control:"boolean",if:{arg:"type",eq:"single"},description:"Show the percentage of the slider value.",table:{category:"ifx-slider props",defaultValue:{summary:"false"},type:{summary:"boolean"}}},disabled:{control:"boolean",description:"Disable the slider.",table:{category:"ifx-slider props",defaultValue:{summary:"false"},type:{summary:"boolean"}}},leftIcon:{options:Object.keys(d),control:{type:"select"},description:"The icon on the left of the slider.",table:{category:"ifx-slider props",type:{summary:"string"}}},rightIcon:{options:Object.keys(d),control:{type:"select"},description:"The icon on the right of the slider.",table:{category:"ifx-slider props",type:{summary:"string"}}},leftText:{control:"text",description:"The text on the left side.",table:{category:"ifx-slider props",type:{summary:"string"}}},rightText:{control:"text",description:"The text on the right side.",table:{category:"ifx-slider props",type:{summary:"string"}}},ariaLabel:{description:"Aria label of the Slider.",control:"text",table:{category:"ARIA Labels",defaultValue:{summary:""},type:{summary:"string"}}},ifxChange:{action:"ifxChange",description:"Custom event emitted on input change.",table:{category:"custom events",type:{summary:"Framework integration",detail:`React: onIfxChange={handleChange}
Vue:@ifxChange="handleChange"
Angular:(ifxChange)="handleChange()"
VanillaJs:.addEventListener("ifxChange", (event) => {//handle change});`}}}}},l=e=>{const t=document.createElement("ifx-slider");return t.setAttribute("value",e.value),t.setAttribute("min",e.min),t.setAttribute("max",e.max),t.setAttribute("step",e.step),t.setAttribute("min-value-handle",e.minValueHandle),t.setAttribute("max-value-handle",e.maxValueHandle),t.setAttribute("type",e.type),t.setAttribute("aria-label",e.ariaLabel),e.showPercentage&&t.setAttribute("show-percentage","true"),e.disabled&&t.setAttribute("disabled","true"),e.leftIcon&&t.setAttribute("left-icon",e.leftIcon),e.rightIcon&&t.setAttribute("right-icon",e.rightIcon),e.leftText&&t.setAttribute("left-text",e.leftText),e.rightText&&t.setAttribute("right-text",e.rightText),t.addEventListener("ifxChange",o("ifxChange")),t},r=l.bind({});r.args={min:0,max:100,step:1,value:50,minValueHandle:20,maxValueHandle:80,showPercentage:!1,disabled:!1,type:"single"};const n=l.bind({});n.args={...r.args,showPercentage:!0,disabled:!1};const i=l.bind({});i.args={...r.args,leftIcon:"cogwheel-16",rightIcon:"cogwheel-16"};const s=l.bind({});s.args={...r.args,leftText:"LeftText",rightText:"RightText"};const a=l.bind({});a.args={...r.args,disabled:!0};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
  const sliderElement = document.createElement("ifx-slider");
  sliderElement.setAttribute("value", args.value);
  sliderElement.setAttribute("min", args.min);
  sliderElement.setAttribute("max", args.max);
  sliderElement.setAttribute("step", args.step);
  sliderElement.setAttribute("min-value-handle", args.minValueHandle);
  sliderElement.setAttribute("max-value-handle", args.maxValueHandle);
  sliderElement.setAttribute("type", args.type);
  sliderElement.setAttribute("aria-label", args.ariaLabel);
  if (args.showPercentage) {
    sliderElement.setAttribute("show-percentage", "true");
  }
  if (args.disabled) {
    sliderElement.setAttribute("disabled", "true"); // Set disabled attribute
  }
  if (args.leftIcon) {
    sliderElement.setAttribute("left-icon", args.leftIcon);
  }
  if (args.rightIcon) {
    sliderElement.setAttribute("right-icon", args.rightIcon);
  }
  if (args.leftText) {
    sliderElement.setAttribute("left-text", args.leftText);
  }
  if (args.rightText) {
    sliderElement.setAttribute("right-text", args.rightText);
  }
  sliderElement.addEventListener("ifxChange", action("ifxChange"));
  return sliderElement;
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => {
  const sliderElement = document.createElement("ifx-slider");
  sliderElement.setAttribute("value", args.value);
  sliderElement.setAttribute("min", args.min);
  sliderElement.setAttribute("max", args.max);
  sliderElement.setAttribute("step", args.step);
  sliderElement.setAttribute("min-value-handle", args.minValueHandle);
  sliderElement.setAttribute("max-value-handle", args.maxValueHandle);
  sliderElement.setAttribute("type", args.type);
  sliderElement.setAttribute("aria-label", args.ariaLabel);
  if (args.showPercentage) {
    sliderElement.setAttribute("show-percentage", "true");
  }
  if (args.disabled) {
    sliderElement.setAttribute("disabled", "true"); // Set disabled attribute
  }
  if (args.leftIcon) {
    sliderElement.setAttribute("left-icon", args.leftIcon);
  }
  if (args.rightIcon) {
    sliderElement.setAttribute("right-icon", args.rightIcon);
  }
  if (args.leftText) {
    sliderElement.setAttribute("left-text", args.leftText);
  }
  if (args.rightText) {
    sliderElement.setAttribute("right-text", args.rightText);
  }
  sliderElement.addEventListener("ifxChange", action("ifxChange"));
  return sliderElement;
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => {
  const sliderElement = document.createElement("ifx-slider");
  sliderElement.setAttribute("value", args.value);
  sliderElement.setAttribute("min", args.min);
  sliderElement.setAttribute("max", args.max);
  sliderElement.setAttribute("step", args.step);
  sliderElement.setAttribute("min-value-handle", args.minValueHandle);
  sliderElement.setAttribute("max-value-handle", args.maxValueHandle);
  sliderElement.setAttribute("type", args.type);
  sliderElement.setAttribute("aria-label", args.ariaLabel);
  if (args.showPercentage) {
    sliderElement.setAttribute("show-percentage", "true");
  }
  if (args.disabled) {
    sliderElement.setAttribute("disabled", "true"); // Set disabled attribute
  }
  if (args.leftIcon) {
    sliderElement.setAttribute("left-icon", args.leftIcon);
  }
  if (args.rightIcon) {
    sliderElement.setAttribute("right-icon", args.rightIcon);
  }
  if (args.leftText) {
    sliderElement.setAttribute("left-text", args.leftText);
  }
  if (args.rightText) {
    sliderElement.setAttribute("right-text", args.rightText);
  }
  sliderElement.addEventListener("ifxChange", action("ifxChange"));
  return sliderElement;
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => {
  const sliderElement = document.createElement("ifx-slider");
  sliderElement.setAttribute("value", args.value);
  sliderElement.setAttribute("min", args.min);
  sliderElement.setAttribute("max", args.max);
  sliderElement.setAttribute("step", args.step);
  sliderElement.setAttribute("min-value-handle", args.minValueHandle);
  sliderElement.setAttribute("max-value-handle", args.maxValueHandle);
  sliderElement.setAttribute("type", args.type);
  sliderElement.setAttribute("aria-label", args.ariaLabel);
  if (args.showPercentage) {
    sliderElement.setAttribute("show-percentage", "true");
  }
  if (args.disabled) {
    sliderElement.setAttribute("disabled", "true"); // Set disabled attribute
  }
  if (args.leftIcon) {
    sliderElement.setAttribute("left-icon", args.leftIcon);
  }
  if (args.rightIcon) {
    sliderElement.setAttribute("right-icon", args.rightIcon);
  }
  if (args.leftText) {
    sliderElement.setAttribute("left-text", args.leftText);
  }
  if (args.rightText) {
    sliderElement.setAttribute("right-text", args.rightText);
  }
  sliderElement.addEventListener("ifxChange", action("ifxChange"));
  return sliderElement;
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => {
  const sliderElement = document.createElement("ifx-slider");
  sliderElement.setAttribute("value", args.value);
  sliderElement.setAttribute("min", args.min);
  sliderElement.setAttribute("max", args.max);
  sliderElement.setAttribute("step", args.step);
  sliderElement.setAttribute("min-value-handle", args.minValueHandle);
  sliderElement.setAttribute("max-value-handle", args.maxValueHandle);
  sliderElement.setAttribute("type", args.type);
  sliderElement.setAttribute("aria-label", args.ariaLabel);
  if (args.showPercentage) {
    sliderElement.setAttribute("show-percentage", "true");
  }
  if (args.disabled) {
    sliderElement.setAttribute("disabled", "true"); // Set disabled attribute
  }
  if (args.leftIcon) {
    sliderElement.setAttribute("left-icon", args.leftIcon);
  }
  if (args.rightIcon) {
    sliderElement.setAttribute("right-icon", args.rightIcon);
  }
  if (args.leftText) {
    sliderElement.setAttribute("left-text", args.leftText);
  }
  if (args.rightText) {
    sliderElement.setAttribute("right-text", args.rightText);
  }
  sliderElement.addEventListener("ifxChange", action("ifxChange"));
  return sliderElement;
}`,...a.parameters?.docs?.source}}};const u=["Default","WithPercentageDisplay","WithIcons","WithTexts","Disabled"],c=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Disabled:a,WithIcons:i,WithPercentageDisplay:n,WithTexts:s,__namedExportsOrder:u,default:m},Symbol.toStringTag,{value:"Module"}));export{c as S};
