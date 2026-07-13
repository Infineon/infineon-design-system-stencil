import{i as o}from"./icons-CBa5BGDq.js";const{action:m}=__STORYBOOK_MODULE_ACTIONS__,u={title:"Components/Slider",component:"ifx-slider",tags:["autodocs"],argTypes:{min:{control:"number",description:"The minimum value of the slider.",table:{category:"ifx-slider props",defaultValue:{summary:"0"},type:{summary:"number"}}},max:{control:"number",description:"The maximum value of the slider.",table:{category:"ifx-slider props",defaultValue:{summary:"100"},type:{summary:"number"}}},step:{control:"number",description:"The step value of the slider.",table:{category:"ifx-slider props",defaultValue:{summary:"1"},type:{summary:"number"}}},type:{control:"radio",options:["single","double"],description:"The type of the slider.",table:{category:"ifx-slider props",defaultValue:{summary:"single"},type:{summary:"single | double"}}},value:{control:"number",if:{arg:"type",eq:"single"},description:"The current value of the slider.",table:{category:"ifx-slider props",type:{summary:"number "}}},minValueHandle:{control:"number",if:{arg:"type",eq:"double"},description:"The minimum value of the handle in double slider.",table:{category:"ifx-slider props",type:{summary:"number"}}},maxValueHandle:{control:"number",if:{arg:"type",eq:"double"},description:"The maximum value of the handle in double slider.",table:{category:"ifx-slider props",type:{summary:"number"}}},showPercentage:{control:"boolean",if:{arg:"type",eq:"single"},description:"Show the percentage of the slider value.",table:{category:"ifx-slider props",defaultValue:{summary:"false"},type:{summary:"boolean"}}},disabled:{control:"boolean",description:"Disable the slider.",table:{category:"ifx-slider props",defaultValue:{summary:"false"},type:{summary:"boolean"}}},readOnly:{name:"read-only",control:"boolean",description:"Set the slider to read-only. Takes priority over disabled.",table:{category:"ifx-slider props",defaultValue:{summary:"false"},type:{summary:"boolean"}}},leftIcon:{options:Object.keys(o),control:{type:"select"},description:"The icon on the left of the slider.",table:{category:"ifx-slider props",type:{summary:"string"}}},rightIcon:{options:Object.keys(o),control:{type:"select"},description:"The icon on the right of the slider.",table:{category:"ifx-slider props",type:{summary:"string"}}},leftText:{control:"text",description:"The text on the left side.",table:{category:"ifx-slider props",type:{summary:"string"}}},rightText:{control:"text",description:"The text on the right side.",table:{category:"ifx-slider props",type:{summary:"string"}}},ariaLabelText:{description:"Aria label text of the Slider.",control:"text",table:{category:"ARIA Labels",defaultValue:{summary:""},type:{summary:"string"}}},ifxChange:{action:"ifxChange",description:"Custom event emitted on input change.",table:{category:"custom events",type:{summary:"Framework integration",detail:`React: onIfxChange={handleChange}
Vue:@ifxChange="handleChange"
Angular:(ifxChange)="handleChange()"
VanillaJs:.addEventListener("ifxChange", (event) => {//handle change});`}}}}},d=e=>{const t=document.createElement("ifx-slider");return t.setAttribute("value",e.value),t.setAttribute("min",e.min),t.setAttribute("max",e.max),t.setAttribute("step",e.step),t.setAttribute("min-value-handle",e.minValueHandle),t.setAttribute("max-value-handle",e.maxValueHandle),t.setAttribute("type",e.type),t.setAttribute("aria-label-text",e.ariaLabelText),e.showPercentage&&t.setAttribute("show-percentage","true"),e.disabled&&t.setAttribute("disabled","true"),e.readOnly&&t.setAttribute("read-only","true"),e.leftIcon&&t.setAttribute("left-icon",e.leftIcon),e.rightIcon&&t.setAttribute("right-icon",e.rightIcon),e.leftText&&t.setAttribute("left-text",e.leftText),e.rightText&&t.setAttribute("right-text",e.rightText),t.addEventListener("ifxChange",m("ifxChange")),t},r=d.bind({});r.args={min:0,max:100,step:1,value:50,minValueHandle:20,maxValueHandle:80,showPercentage:!1,disabled:!1,readOnly:!1,type:"single"};const n=d.bind({});n.args={...r.args,showPercentage:!0,disabled:!1,readOnly:!1};const s=d.bind({});s.args={...r.args,leftIcon:"cogwheel-16",rightIcon:"cogwheel-16"};const i=d.bind({});i.args={...r.args,leftText:"LeftText",rightText:"RightText"};const a=d.bind({});a.args={...r.args,disabled:!0};const l=d.bind({});l.args={...r.args,readOnly:!0};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args: any) => {
  const sliderElement = document.createElement("ifx-slider");
  sliderElement.setAttribute("value", args.value);
  sliderElement.setAttribute("min", args.min);
  sliderElement.setAttribute("max", args.max);
  sliderElement.setAttribute("step", args.step);
  sliderElement.setAttribute("min-value-handle", args.minValueHandle);
  sliderElement.setAttribute("max-value-handle", args.maxValueHandle);
  sliderElement.setAttribute("type", args.type);
  sliderElement.setAttribute("aria-label-text", args.ariaLabelText);
  if (args.showPercentage) {
    sliderElement.setAttribute("show-percentage", "true");
  }
  if (args.disabled) {
    sliderElement.setAttribute("disabled", "true");
  }
  if (args.readOnly) {
    sliderElement.setAttribute("read-only", "true");
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
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(args: any) => {
  const sliderElement = document.createElement("ifx-slider");
  sliderElement.setAttribute("value", args.value);
  sliderElement.setAttribute("min", args.min);
  sliderElement.setAttribute("max", args.max);
  sliderElement.setAttribute("step", args.step);
  sliderElement.setAttribute("min-value-handle", args.minValueHandle);
  sliderElement.setAttribute("max-value-handle", args.maxValueHandle);
  sliderElement.setAttribute("type", args.type);
  sliderElement.setAttribute("aria-label-text", args.ariaLabelText);
  if (args.showPercentage) {
    sliderElement.setAttribute("show-percentage", "true");
  }
  if (args.disabled) {
    sliderElement.setAttribute("disabled", "true");
  }
  if (args.readOnly) {
    sliderElement.setAttribute("read-only", "true");
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
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: any) => {
  const sliderElement = document.createElement("ifx-slider");
  sliderElement.setAttribute("value", args.value);
  sliderElement.setAttribute("min", args.min);
  sliderElement.setAttribute("max", args.max);
  sliderElement.setAttribute("step", args.step);
  sliderElement.setAttribute("min-value-handle", args.minValueHandle);
  sliderElement.setAttribute("max-value-handle", args.maxValueHandle);
  sliderElement.setAttribute("type", args.type);
  sliderElement.setAttribute("aria-label-text", args.ariaLabelText);
  if (args.showPercentage) {
    sliderElement.setAttribute("show-percentage", "true");
  }
  if (args.disabled) {
    sliderElement.setAttribute("disabled", "true");
  }
  if (args.readOnly) {
    sliderElement.setAttribute("read-only", "true");
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
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`(args: any) => {
  const sliderElement = document.createElement("ifx-slider");
  sliderElement.setAttribute("value", args.value);
  sliderElement.setAttribute("min", args.min);
  sliderElement.setAttribute("max", args.max);
  sliderElement.setAttribute("step", args.step);
  sliderElement.setAttribute("min-value-handle", args.minValueHandle);
  sliderElement.setAttribute("max-value-handle", args.maxValueHandle);
  sliderElement.setAttribute("type", args.type);
  sliderElement.setAttribute("aria-label-text", args.ariaLabelText);
  if (args.showPercentage) {
    sliderElement.setAttribute("show-percentage", "true");
  }
  if (args.disabled) {
    sliderElement.setAttribute("disabled", "true");
  }
  if (args.readOnly) {
    sliderElement.setAttribute("read-only", "true");
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
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(args: any) => {
  const sliderElement = document.createElement("ifx-slider");
  sliderElement.setAttribute("value", args.value);
  sliderElement.setAttribute("min", args.min);
  sliderElement.setAttribute("max", args.max);
  sliderElement.setAttribute("step", args.step);
  sliderElement.setAttribute("min-value-handle", args.minValueHandle);
  sliderElement.setAttribute("max-value-handle", args.maxValueHandle);
  sliderElement.setAttribute("type", args.type);
  sliderElement.setAttribute("aria-label-text", args.ariaLabelText);
  if (args.showPercentage) {
    sliderElement.setAttribute("show-percentage", "true");
  }
  if (args.disabled) {
    sliderElement.setAttribute("disabled", "true");
  }
  if (args.readOnly) {
    sliderElement.setAttribute("read-only", "true");
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
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`(args: any) => {
  const sliderElement = document.createElement("ifx-slider");
  sliderElement.setAttribute("value", args.value);
  sliderElement.setAttribute("min", args.min);
  sliderElement.setAttribute("max", args.max);
  sliderElement.setAttribute("step", args.step);
  sliderElement.setAttribute("min-value-handle", args.minValueHandle);
  sliderElement.setAttribute("max-value-handle", args.maxValueHandle);
  sliderElement.setAttribute("type", args.type);
  sliderElement.setAttribute("aria-label-text", args.ariaLabelText);
  if (args.showPercentage) {
    sliderElement.setAttribute("show-percentage", "true");
  }
  if (args.disabled) {
    sliderElement.setAttribute("disabled", "true");
  }
  if (args.readOnly) {
    sliderElement.setAttribute("read-only", "true");
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
}`,...l.parameters?.docs?.source}}};const g=["Default","WithPercentageDisplay","WithIcons","WithTexts","Disabled","ReadOnly"],b=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Disabled:a,ReadOnly:l,WithIcons:s,WithPercentageDisplay:n,WithTexts:i,__namedExportsOrder:g,default:u},Symbol.toStringTag,{value:"Module"}));export{b as S};
