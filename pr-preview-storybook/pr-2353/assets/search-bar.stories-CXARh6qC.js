const{action:a}=__STORYBOOK_MODULE_ACTIONS__,u={title:"Components/Search Bar",args:{disabled:!1,isOpen:!0,value:"",autocomplete:"on",showCloseButton:!0},argTypes:{isOpen:{description:"Controls the display of the search bar.",control:{type:"boolean"},table:{defaultValue:{summary:"true"},category:"ifx-search-bar props",type:{summary:"boolean"}}},disabled:{description:"Disables the search bar.",control:{type:"boolean"},table:{defaultValue:{summary:"false"},category:"ifx-search-bar props",type:{summary:"boolean"}}},value:{description:"The value is used to handle the search bar input.",control:{type:"text"},table:{category:"ifx-search-bar props",type:{summary:"string"}}},autocomplete:{description:"The value of the search field. It is used for the form submission.",control:{type:"text"},table:{category:"ifx-search-bar props",type:{summary:"string"}}},maxlength:{description:"Maximum input length.",control:{type:"number"},table:{category:"ifx-search-bar props",type:{summary:"number"}}},showCloseButton:{description:"Shows or hides the close button.",control:{type:"boolean"},table:{defaultValue:{summary:"false"},category:"ifx-search-bar props",type:{summary:"boolean"}}},ifxInput:{action:"ifxInput",description:"Custom event emitted on input.",table:{category:"custom events",type:{summary:"Framework integration",detail:`React: onIfxInput={handleInput}
Vue:@ifxInput="handleInput"
Angular:(ifxInput)="handleInput()"
VanillaJs:.addEventListener("ifxInput", (event) => {//handle input});`}}},ifxOpen:{action:"ifxOpen",description:"Custom event emitted when the state of *isOpen* changes.",table:{category:"custom events",type:{summary:"Framework integration",detail:`React: onIfxOpen={handleOpen}
Vue:@ifxOpen="handleOpen"
Angular:(ifxOpen)="handleOpen()"
VanillaJs:.addEventListener("ifxOpen", (event) => {//handle open});`}}},open:{description:"Public method for opening the search bar programatically",table:{category:"ifx-search-bar public methods"}},close:{description:"Public method for closing the search bar programatically",table:{category:"ifx-search-bar public methods"}}}},p=({isOpen:r,disabled:o,maxlength:n,value:s,autocomplete:i,showCloseButton:l})=>{const e=document.createElement("ifx-search-bar");return e.setAttribute("is-open",r),e.setAttribute("disabled",o),e.setAttribute("value",s),e.setAttribute("show-close-button",l),e.setAttribute("autocomplete",i),e.addEventListener("ifxInput",a("ifxInput")),e.addEventListener("ifxOpen",a("ifxOpen")),n!==void 0&&e.setAttribute("maxlength",n),e},t=p.bind({});t.args={};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
  isOpen,
  disabled,
  maxlength,
  value,
  autocomplete,
  showCloseButton
}: Record<string, any>) => {
  const element = document.createElement("ifx-search-bar");
  element.setAttribute("is-open", isOpen);
  element.setAttribute("disabled", disabled);
  element.setAttribute("value", value);
  element.setAttribute("show-close-button", showCloseButton);
  element.setAttribute("autocomplete", autocomplete);
  element.addEventListener("ifxInput", action("ifxInput"));
  element.addEventListener("ifxOpen", action("ifxOpen"));
  if (maxlength !== undefined) element.setAttribute("maxlength", maxlength);
  return element;
}`,...t.parameters?.docs?.source}}};const c=["Default"],m=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:c,default:u},Symbol.toStringTag,{value:"Module"}));export{t as D,m as S};
