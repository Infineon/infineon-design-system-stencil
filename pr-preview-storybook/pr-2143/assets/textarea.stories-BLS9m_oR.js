const{action:o}=__STORYBOOK_MODULE_ACTIONS__,l={title:"Components/Textarea",tags:["autodocs"],args:{caption:"Caption text, description, error notification",cols:43,disabled:!1,error:!1,label:"Label Text",maxlength:void 0,name:"textarea",placeholder:"Placeholder",readOnly:!1,resize:"both",rows:5,value:"",wrap:"soft",fullWidth:!1,required:!0},argTypes:{caption:{description:"Set the caption text of textarea.",table:{category:"ifx-textarea props"}},cols:{description:"Set the visible width of the textarea control.",control:{type:"number",min:0},table:{category:"ifx-textarea props",defaultValue:{summary:2}}},disabled:{description:"Disables the user interaction when set to true.",table:{category:"ifx-textarea props",defaultValue:{summary:!1}}},error:{description:"Set the component to error state.",table:{category:"ifx-textarea props",defaultValue:{summary:!1}}},label:{description:"Set the label of textarea component.",table:{category:"ifx-textarea props"}},maxlength:{description:"Set the maximum string length user can enter.",type:"number",table:{category:"ifx-textarea props"}},name:{description:"The name of the control. Useful for form handling.",table:{category:"ifx-textarea props",defaultValue:{summary:"ifx-textarea-[n]"}}},placeholder:{description:"Set the placeholder text of textarea.",table:{category:"ifx-textarea props"}},required:{description:"Marks the text area as required for form submission. Displays an asterisk next to the label when set to **true**.",table:{category:"ifx-textarea props",defaultValue:{summary:!0}}},readOnly:{name:"read-only",description:`Text cannot be edited when set to true.
 
*Note: It is different from disabled prop, control is focusable in readOnly mode unlike disabled.*`,table:{category:"ifx-textarea props",defaultValue:{summary:"false"}}},resize:{description:"Sets whether the textarea is resizable, and if so, in which directions.",control:"radio",options:["both","vertical","horizontal","none"],table:{category:"ifx-textarea props",defaultValue:{summary:"none"}}},rows:{description:"Set the number of visible text lines for the textrarea control.",table:{category:"ifx-textarea props",defaultValue:{summary:2}}},value:{description:"Current value of the textarea.",table:{category:"ifx-textarea props"}},wrap:{description:"Indicates how the control should wrap the value for form submission.",control:"radio",options:["soft","hard","off"],table:{category:"ifx-textarea props",defaultValue:{summary:"soft"}}},fullWidth:{description:"When set to **true**, expands the textarea to take the full width of its container.",control:"boolean",table:{category:"ifx-textarea props",defaultValue:{summary:"false"}}},ifxInput:{description:"A custom event *ifxInput* is emitted immediately after the value of *<ifx-textarea>* changes.",table:{category:"custom events",type:{summary:"Framework integration",detail:`
React: onIfxInput={handleInput}
Vue: @ifxInput="handleInput"
Angular: (ifxInput)="handleInput()"
VanillaJs: .addEventListener("ifxInput", (event) => {/*handle input*/});`}}}}},n=e=>{const a=document.createElement("div");a.innerHTML=`
<ifx-textarea 
    caption="${e.caption}"
    cols="${e.cols}"
    disabled="${e.disabled}"
    error="${e.error}"
    label="${e.label}"
    maxlength="${e.maxlength}"
    name="${e.name}"
    placeholder="${e.placeholder}"
    required="${e.required}"
    read-only="${e.readOnly}"
    resize="${e.resize}"
    rows="${e.rows}"
    value="${e.value}"
    wrap="${e.wrap}"
    full-width="${e.fullWidth}"
/>
`;const r=a.querySelector("ifx-textarea");return r.addEventListener("ifxInput",o("ifxInput")),r},t=n.bind({});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = \`
<ifx-textarea 
    caption="\${args.caption}"
    cols="\${args.cols}"
    disabled="\${args.disabled}"
    error="\${args.error}"
    label="\${args.label}"
    maxlength="\${args.maxlength}"
    name="\${args.name}"
    placeholder="\${args.placeholder}"
    required="\${args.required}"
    read-only="\${args.readOnly}"
    resize="\${args.resize}"
    rows="\${args.rows}"
    value="\${args.value}"
    wrap="\${args.wrap}"
    full-width="\${args.fullWidth}"
/>
\`;
  const textarea = wrapper.querySelector("ifx-textarea");
  textarea.addEventListener("ifxInput", action("ifxInput"));
  return textarea;
}`,...t.parameters?.docs?.source}}};const i=["Default"];export{t as Default,i as __namedExportsOrder,l as default};
