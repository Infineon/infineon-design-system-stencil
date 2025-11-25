const{action:c}=__STORYBOOK_MODULE_ACTIONS__,l={title:"Components/Switch",tags:["autodocs"],args:{label:"Switch",checked:!1,name:"switch",value:"switch",disabled:!1},argTypes:{label:{name:"Label of Switch",description:"Set the label of *<ifx-switch>*.",table:{category:"story controls"}},name:{description:"Name of the element, that is used as reference when a form is submitted.",table:{category:"ifx-switch props",type:{summary:"string"}}},checked:{name:"checked",description:"Set the checked state of the switch.",table:{category:"ifx-switch props",defaultValue:{summary:"false"},type:{summary:"boolean"}}},value:{description:"The value that gets submitted, when the radio button is checked.",table:{category:"ifx-switch props",type:{summary:"string"}}},disabled:{description:"The value that gets submitted, when the radio button is checked.",table:{category:"ifx-switch props",defaultValue:{summary:"false"},type:{summary:"boolean"}}},ifxChange:{description:"Custom event emitted on change.",table:{category:"custom events",type:{summary:"Framework integration",detail:`React: onIfxChange={handleChange}
Vue:@ifxChange="handleChange"
Angular:(ifxChange)="handleChange()"
VanillaJs:.addEventListener("ifxChange", (event) => {//handle change});`}},action:"ifxChange"}}},r=t=>{const e=document.createElement("ifx-switch");e.setAttribute("checked",t.checked),e.setAttribute("name",t.name),e.setAttribute("value",t.value),e.setAttribute("disabled",t.disabled),e.addEventListener("ifxChange",i=>{const a=i,o=a.detail;c("ifxChange")(a),t.value=o});const s=document.createTextNode(t.label);return e.appendChild(s),e},n=r.bind({});n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => {
  const element = document.createElement('ifx-switch') as HTMLIfxSwitchElement;

  // Set the attributes
  element.setAttribute('checked', args.checked);
  element.setAttribute('name', args.name);
  element.setAttribute('value', args.value);
  element.setAttribute('disabled', args.disabled);

  // Add the event listener
  // element.addEventListener('ifxChange', action('ifxChange'));
  // Inside your story, add an event listener for the custom event
  element.addEventListener('ifxChange', (event: Event) => {
    const customEvent = event as CustomEvent;
    const newValue = customEvent.detail;
    action('ifxChange')(customEvent);
    args.value = newValue;
  });
  const slotContent = document.createTextNode(args.label);
  element.appendChild(slotContent);
  return element;
}`,...n.parameters?.docs?.source}}};const d=["Default"],u=Object.freeze(Object.defineProperty({__proto__:null,Default:n,__namedExportsOrder:d,default:l},Symbol.toStringTag,{value:"Module"}));export{u as S};
