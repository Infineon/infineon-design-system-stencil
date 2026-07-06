import{i as v}from"./icons-CBa5BGDq.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,E={title:"Components/Modal",component:"ifx-modal",args:{opened:!1,cancelButtonLabel:"Cancel",okButtonLabel:"OK",closeButtonAriaLabel:"Close modal",captionAriaLabel:"Modal title"},argTypes:{caption:{control:"text",description:"Title for the modal.",table:{category:"ifx-modal props"}},opened:{control:{disable:!0},description:"Default state of the modal.",table:{category:"ifx-modal props",defaultValue:{summary:"false"},type:{summary:"Example (in VanillaJs)",detail:`const modal = document.getElementById('modal'); 
const openButton = document.getElementById('open'); 
//add DOM event listeners (e.g. click and/or keypress)

function openModal() { 
modal.opened=true;

function closeModal() { 
modal.opened = false; 
}`}}},closeOnOverlayClick:{control:"boolean",description:"Close the modal when clicking outside the window.",table:{category:"ifx-modal props",defaultValue:{summary:"false"}}},showCloseButton:{control:"boolean",description:"Show or hide close button in the modal's header.",table:{category:"ifx-modal props",defaultValue:{summary:"true"}}},alertIcon:{options:Object.keys(v),control:{type:"select"},description:"Icon to be displayed in the alert modal.",table:{category:"ifx-modal props",type:{summary:"string"}}},size:{options:["s","m","l"],control:{type:"radio"},description:"Usable only when screen width is more than 1024px.",table:{category:"ifx-modal props",defaultValue:{summary:"s"},type:{summary:"s | m | l"}}},variant:{options:["default","alert-brand","alert-danger"],control:{type:"radio"},description:"Variant of the modal.",table:{category:"ifx-modal props",defaultValue:{summary:"default"},type:{summary:"default | alert-brand | alert-danger"}}},cancelButtonLabel:{control:"text",description:"Label for the cancel button.",table:{category:"ifx-modal props",defaultValue:{summary:"Cancel"},type:{summary:"string"}}},okButtonLabel:{control:"text",description:"Label for the OK button.",table:{category:"ifx-modal props",defaultValue:{summary:"OK"},type:{summary:"string"}}},closeButtonAriaLabel:{control:"text",description:"Aria label for the close button.",table:{category:"ifx-modal props",defaultValue:{summary:"Close modal"},type:{summary:"string"}}},captionAriaLabel:{control:"text",description:"Aria label for the modal title.",table:{category:"ifx-modal props",defaultValue:{summary:"Modal title"},type:{summary:"string"}}},ifxOpen:{action:"ifxOpen",description:"Custom event emitted when modal opens.",table:{category:"custom events",type:{summary:"Framework integration",detail:`React: onIfxOpen={handleChange}
Vue:@ifxOpen="handleChange"
Angular:(ifxOpen)="handleChange()"
VanillaJs:.addEventListener("ifxOpen", (event) => {//handle change});`}}},ifxClose:{action:"ifxClose",description:"Custom event emitted when modal closes.",table:{category:"custom events",type:{summary:"Framework integration",detail:`React: onIfxClose={handleChange}
Vue:@ifxClose="handleChange"
Angular:(ifxClose)="handleChange()"
VanillaJs:.addEventListener("ifxClose", (event) => {//handle change});`}}},ifxOpenedChange:{action:"ifxOpenedChange",description:"Custom event emitted when the opened state changes.",table:{category:"custom events",type:{summary:"Framework integration",detail:`React: onIfxOpenedChange={handleChange}
Vue:@ifxOpenedChange="handleChange"
Angular:(ifxOpenedChange)="handleChange()"
VanillaJs:.addEventListener("ifxOpenedChange", (event) => {//handle change});`}}}}},u=({caption:p,captionAriaLabel:m,closeButtonAriaLabel:b,showCloseButton:f,closeOnOverlayClick:y,variant:h,size:C,alertIcon:d,cancelButtonLabel:x,okButtonLabel:B})=>{const e=document.createElement("ifx-modal");e.setAttribute("caption",p),e.setAttribute("caption-aria-label",m),e.setAttribute("close-button-aria-label",b),e.setAttribute("variant",h),d&&e.setAttribute("alert-icon",d),e.setAttribute("close-on-overlay-click",y),e.setAttribute("show-close-button",f),e.setAttribute("size",C),e.addEventListener("ifxOpen",c("ifxOpen")),e.addEventListener("ifxClose",c("ifxClose")),e.addEventListener("ifxOpenedChange",c("ifxOpenedChange"));const i=document.createElement("div");i.setAttribute("slot","content"),i.innerHTML=`
    <span>Modal content</span>
  `,e.appendChild(i);const a=document.createElement("div");a.setAttribute("slot","buttons");const l=document.createElement("ifx-button");l.setAttribute("variant","secondary"),l.textContent=x,l.addEventListener("click",()=>{console.log("Button 1 clicked")});const r=document.createElement("ifx-button");r.textContent=B,r.addEventListener("click",()=>{console.log("Button 2 clicked")}),a.appendChild(l),a.appendChild(r),e.appendChild(a);const o=document.createElement("ifx-button");o.id="open",o.textContent="Open Modal",o.addEventListener("click",()=>{e.opened=!0}),o.addEventListener("keydown",g=>{g.key==="Enter"&&(e.opened=!0)});const s=document.createElement("div");return s.appendChild(e),s.appendChild(o),s},t=u.bind({});t.args={caption:"Modal Title",captionAriaLabel:"Additional information for caption",closeButtonAriaLabel:"Close modal",showCloseButton:!0,closeOnOverlayClick:!1,size:"s",variant:"default"};const n=u.bind({});n.args={caption:"Alert-Brand Modal Title",captionAriaLabel:"Additional information for caption",closeButtonAriaLabel:"Close alert modal",closeOnOverlayClick:!0,alertIcon:"arrowdoen16",size:"s",variant:"alert-brand",cancelButtonLabel:"Cancel",okButtonLabel:"OK",showCloseButton:!1};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
  caption,
  captionAriaLabel,
  closeButtonAriaLabel,
  showCloseButton,
  closeOnOverlayClick,
  variant,
  size,
  alertIcon,
  cancelButtonLabel,
  okButtonLabel
}: Record<string, any>) => {
  const modal: any = document.createElement("ifx-modal");
  modal.setAttribute("caption", caption);
  modal.setAttribute("caption-aria-label", captionAriaLabel);
  modal.setAttribute("close-button-aria-label", closeButtonAriaLabel);
  modal.setAttribute("variant", variant);
  if (alertIcon) {
    modal.setAttribute("alert-icon", alertIcon);
  }
  modal.setAttribute("close-on-overlay-click", closeOnOverlayClick);
  modal.setAttribute("show-close-button", showCloseButton);
  modal.setAttribute("size", size);
  modal.addEventListener("ifxOpen", action("ifxOpen"));
  modal.addEventListener("ifxClose", action("ifxClose"));
  modal.addEventListener("ifxOpenedChange", action("ifxOpenedChange"));
  const content = document.createElement("div");
  content.setAttribute("slot", "content");
  content.innerHTML = \`
    <span>Modal content</span>
  \`;
  modal.appendChild(content);
  const buttons = document.createElement("div");
  buttons.setAttribute("slot", "buttons");
  const cancelButton = document.createElement("ifx-button");
  cancelButton.setAttribute("variant", "secondary");
  cancelButton.textContent = cancelButtonLabel;
  cancelButton.addEventListener("click", () => {
    console.log("Button 1 clicked");
  });
  const primaryButton = document.createElement("ifx-button");
  primaryButton.textContent = okButtonLabel;
  primaryButton.addEventListener("click", () => {
    console.log("Button 2 clicked");
  });
  buttons.appendChild(cancelButton);
  buttons.appendChild(primaryButton);
  modal.appendChild(buttons);
  const openButton = document.createElement("ifx-button");
  openButton.id = "open";
  openButton.textContent = "Open Modal";
  openButton.addEventListener("click", () => {
    modal.opened = true;
  });
  openButton.addEventListener("keydown", event => {
    if (event.key === "Enter") {
      modal.opened = true;
    }
  });
  const storyElement = document.createElement("div");
  storyElement.appendChild(modal);
  storyElement.appendChild(openButton);
  return storyElement;
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`({
  caption,
  captionAriaLabel,
  closeButtonAriaLabel,
  showCloseButton,
  closeOnOverlayClick,
  variant,
  size,
  alertIcon,
  cancelButtonLabel,
  okButtonLabel
}: Record<string, any>) => {
  const modal: any = document.createElement("ifx-modal");
  modal.setAttribute("caption", caption);
  modal.setAttribute("caption-aria-label", captionAriaLabel);
  modal.setAttribute("close-button-aria-label", closeButtonAriaLabel);
  modal.setAttribute("variant", variant);
  if (alertIcon) {
    modal.setAttribute("alert-icon", alertIcon);
  }
  modal.setAttribute("close-on-overlay-click", closeOnOverlayClick);
  modal.setAttribute("show-close-button", showCloseButton);
  modal.setAttribute("size", size);
  modal.addEventListener("ifxOpen", action("ifxOpen"));
  modal.addEventListener("ifxClose", action("ifxClose"));
  modal.addEventListener("ifxOpenedChange", action("ifxOpenedChange"));
  const content = document.createElement("div");
  content.setAttribute("slot", "content");
  content.innerHTML = \`
    <span>Modal content</span>
  \`;
  modal.appendChild(content);
  const buttons = document.createElement("div");
  buttons.setAttribute("slot", "buttons");
  const cancelButton = document.createElement("ifx-button");
  cancelButton.setAttribute("variant", "secondary");
  cancelButton.textContent = cancelButtonLabel;
  cancelButton.addEventListener("click", () => {
    console.log("Button 1 clicked");
  });
  const primaryButton = document.createElement("ifx-button");
  primaryButton.textContent = okButtonLabel;
  primaryButton.addEventListener("click", () => {
    console.log("Button 2 clicked");
  });
  buttons.appendChild(cancelButton);
  buttons.appendChild(primaryButton);
  modal.appendChild(buttons);
  const openButton = document.createElement("ifx-button");
  openButton.id = "open";
  openButton.textContent = "Open Modal";
  openButton.addEventListener("click", () => {
    modal.opened = true;
  });
  openButton.addEventListener("keydown", event => {
    if (event.key === "Enter") {
      modal.opened = true;
    }
  });
  const storyElement = document.createElement("div");
  storyElement.appendChild(modal);
  storyElement.appendChild(openButton);
  return storyElement;
}`,...n.parameters?.docs?.source}}};const A=["Default","Alert"],O=Object.freeze(Object.defineProperty({__proto__:null,Alert:n,Default:t,__namedExportsOrder:A,default:E},Symbol.toStringTag,{value:"Module"}));export{n as A,t as D,O as M};
