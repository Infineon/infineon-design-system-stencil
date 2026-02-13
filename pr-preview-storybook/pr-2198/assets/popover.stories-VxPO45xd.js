const{action:d}=__STORYBOOK_MODULE_ACTIONS__,x={title:"Components/Popover",tags:["autodocs"],args:{popoverTitle:"Popover Title",text:"This is the popover content. It can contain multiple lines of text.",position:"auto",disabled:!1,ariaLabel:"Popover with additional information"},argTypes:{popoverTitle:{description:"Title text displayed in the popover header.",control:"text",table:{category:"ifx-popover props",type:{summary:"string"}}},text:{description:"Body text displayed in the popover content.",control:"text",table:{category:"ifx-popover props",type:{summary:"string"}}},position:{description:"Position of the popover relative to the trigger element.",options:["auto","top","top-start","top-end","bottom","bottom-start","bottom-end","left","right"],control:"select",table:{category:"ifx-popover props",defaultValue:{summary:"auto"}}},disabled:{description:"Whether the popover is disabled.",control:"boolean",table:{category:"ifx-popover props",defaultValue:{summary:"false"}}},ariaLabel:{description:"Accessible label for the popover.",control:"text",table:{category:"ifx-popover props",type:{summary:"string | null"},defaultValue:{summary:"null"}}},ifxOpen:{action:"ifxOpen",description:"Event emitted when an popover is opened.",table:{category:"custom events",type:{summary:"Framework integration",detail:`React: onIfxOpen={handleOpen}
            Vue: @ifxOpen="handleOpen"
            Angular: (ifxOpen)="handleOpen()"
            VanillaJs: .addEventListener("ifxOpen", (event) => {/*handle open*/});`}}},ifxClose:{action:"ifxClose",description:"Event emitted when an popover is closed.",table:{category:"custom events",type:{summary:"Framework integration",detail:`React: onIfxClose={handleClose}
          Vue: @ifxClose="handleClose"
          Angular: (ifxClose)="handleClose()"
          VanillaJs: .addEventListener("ifxClose", (event) => {/*handle close*/});`}}},show:{description:"Public method for programatically opening the popover component",table:{category:"ifx-popover public methods"}},hide:{description:"Public method for programatically hiding the popover component",table:{category:"ifx-popover public methods"}}}},f=({popoverTitle:o,text:p,position:i,disabled:t,ariaLabel:n})=>{const e=document.createElement("ifx-popover");e.setAttribute("popover-title",o),e.setAttribute("text",p),e.setAttribute("position",i),t&&e.setAttribute("disabled","true"),n&&e.setAttribute("aria-label",n),e.addEventListener("ifxOpen",d("ifxOpen")),e.addEventListener("ifxClose",d("ifxClose"));const c=document.createElement("ifx-button");c.textContent="Click me",e.appendChild(c);const r=document.createElement("div");return r.style.padding="100px",r.style.textAlign="center",r.appendChild(e),r},m=f.bind({}),v=({popoverTitle:o,text:p,position:i})=>{const t=document.createElement("ifx-popover");t.setAttribute("popover-title",o),t.setAttribute("text",p),t.setAttribute("position",i),t.addEventListener("ifxOpen",d("ifxOpen")),t.addEventListener("ifxClose",d("ifxClose"));const n=document.createElement("ifx-button");n.textContent="Delete Item",t.appendChild(n);const e=document.createElement("div");e.setAttribute("slot","content"),e.style.display="flex",e.style.gap="8px";const c=document.createElement("ifx-button");c.textContent="Confirm",e.appendChild(c);const r=document.createElement("ifx-button");r.setAttribute("variant","secondary"),r.textContent="Cancel",e.appendChild(r),t.appendChild(e);const b=document.createElement("div");return b.style.padding="100px",b.style.textAlign="center",b.appendChild(t),b},a=v.bind({});a.args={popoverTitle:"Confirm Action",text:"Are you sure you want to proceed with this action?",position:"bottom"};const C=()=>{const o=document.createElement("div");return o.style.padding="200px",o.style.display="grid",o.style.gridTemplateColumns="repeat(3, 1fr)",o.style.gap="50px",o.style.placeItems="center",[{position:"top-start",label:"Top Start"},{position:"top",label:"Top"},{position:"top-end",label:"Top End"},{position:"left",label:"Left"},{position:"auto",label:"Auto (Center)"},{position:"right",label:"Right"},{position:"bottom-start",label:"Bottom Start"},{position:"bottom",label:"Bottom"},{position:"bottom-end",label:"Bottom End"}].forEach(({position:i,label:t})=>{const n=document.createElement("ifx-popover");n.setAttribute("popover-title",t),n.setAttribute("text",`Positioned at ${i}`),n.setAttribute("position",i),n.addEventListener("ifxOpen",d("ifxOpen")),n.addEventListener("ifxClose",d("ifxClose"));const e=document.createElement("ifx-button");e.setAttribute("size","small"),e.textContent=t,n.appendChild(e),o.appendChild(n)}),o},u=C.bind({}),h=({popoverTitle:o,text:p,position:i})=>{const t=document.createElement("ifx-popover");t.setAttribute("popover-title",o),t.setAttribute("text",p),t.setAttribute("position",i),t.style.setProperty("--ifx-popover-width","320px");const n=document.createElement("ifx-button");n.textContent="Custom Width",t.appendChild(n);const e=document.createElement("div");return e.style.padding="100px",e.style.textAlign="center",e.appendChild(t),e},s=h.bind({});s.args={popoverTitle:"Custom Width Popover",text:"This popover uses --ifx-popover-width: 320px.",position:"bottom"};const y=({popoverTitle:o,text:p,position:i})=>{const t=document.createElement("ifx-popover");t.setAttribute("popover-title",o),t.setAttribute("text",p),t.setAttribute("position",i),t.setAttribute("open","true");const n=document.createElement("ifx-button");n.textContent="Opened on load",t.appendChild(n);const e=document.createElement("div");return e.style.padding="100px",e.style.textAlign="center",e.appendChild(t),e},l=y.bind({});l.args={popoverTitle:"Initially Open",text:"This popover starts open via the open prop.",position:"bottom"};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`({
  popoverTitle,
  text,
  position,
  disabled,
  ariaLabel
}) => {
  const element = document.createElement('ifx-popover');
  element.setAttribute('popover-title', popoverTitle);
  element.setAttribute('text', text);
  element.setAttribute('position', position);
  if (disabled) {
    element.setAttribute('disabled', 'true');
  }
  if (ariaLabel) {
    element.setAttribute('aria-label', ariaLabel);
  }
  element.addEventListener('ifxOpen', action('ifxOpen'));
  element.addEventListener('ifxClose', action('ifxClose'));
  const button = document.createElement('ifx-button');
  button.textContent = 'Click me';
  element.appendChild(button);
  const wrapper = document.createElement('div');
  wrapper.style.padding = '100px';
  wrapper.style.textAlign = 'center';
  wrapper.appendChild(element);
  return wrapper;
}`,...m.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
  popoverTitle,
  text,
  position
}) => {
  const element = document.createElement('ifx-popover');
  element.setAttribute('popover-title', popoverTitle);
  element.setAttribute('text', text);
  element.setAttribute('position', position);
  element.addEventListener('ifxOpen', action('ifxOpen'));
  element.addEventListener('ifxClose', action('ifxClose'));
  const button = document.createElement('ifx-button');
  button.textContent = 'Delete Item';
  element.appendChild(button);
  const actionContainer = document.createElement('div');
  actionContainer.setAttribute('slot', 'content');
  actionContainer.style.display = 'flex';
  actionContainer.style.gap = '8px';
  const confirmButton = document.createElement('ifx-button');
  confirmButton.textContent = 'Confirm';
  actionContainer.appendChild(confirmButton);
  const cancelButton = document.createElement('ifx-button');
  cancelButton.setAttribute('variant', 'secondary');
  cancelButton.textContent = 'Cancel';
  actionContainer.appendChild(cancelButton);
  element.appendChild(actionContainer);
  const wrapper = document.createElement('div');
  wrapper.style.padding = '100px';
  wrapper.style.textAlign = 'center';
  wrapper.appendChild(element);
  return wrapper;
}`,...a.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const wrapper = document.createElement('div');
  wrapper.style.padding = '200px';
  wrapper.style.display = 'grid';
  wrapper.style.gridTemplateColumns = 'repeat(3, 1fr)';
  wrapper.style.gap = '50px';
  wrapper.style.placeItems = 'center';
  const positions = [{
    position: 'top-start',
    label: 'Top Start'
  }, {
    position: 'top',
    label: 'Top'
  }, {
    position: 'top-end',
    label: 'Top End'
  }, {
    position: 'left',
    label: 'Left'
  }, {
    position: 'auto',
    label: 'Auto (Center)'
  }, {
    position: 'right',
    label: 'Right'
  }, {
    position: 'bottom-start',
    label: 'Bottom Start'
  }, {
    position: 'bottom',
    label: 'Bottom'
  }, {
    position: 'bottom-end',
    label: 'Bottom End'
  }];
  positions.forEach(({
    position,
    label
  }) => {
    const popover = document.createElement('ifx-popover');
    popover.setAttribute('popover-title', label);
    popover.setAttribute('text', \`Positioned at \${position}\`);
    popover.setAttribute('position', position);
    popover.addEventListener('ifxOpen', action('ifxOpen'));
    popover.addEventListener('ifxClose', action('ifxClose'));
    const button = document.createElement('ifx-button');
    button.setAttribute('size', 'small');
    button.textContent = label;
    popover.appendChild(button);
    wrapper.appendChild(popover);
  });
  return wrapper;
}`,...u.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`({
  popoverTitle,
  text,
  position
}) => {
  const element = document.createElement('ifx-popover');
  element.setAttribute('popover-title', popoverTitle);
  element.setAttribute('text', text);
  element.setAttribute('position', position);
  element.style.setProperty('--ifx-popover-width', '320px');
  const button = document.createElement('ifx-button');
  button.textContent = 'Custom Width';
  element.appendChild(button);
  const wrapper = document.createElement('div');
  wrapper.style.padding = '100px';
  wrapper.style.textAlign = 'center';
  wrapper.appendChild(element);
  return wrapper;
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`({
  popoverTitle,
  text,
  position
}) => {
  const element = document.createElement('ifx-popover');
  element.setAttribute('popover-title', popoverTitle);
  element.setAttribute('text', text);
  element.setAttribute('position', position);
  element.setAttribute('open', 'true');
  const button = document.createElement('ifx-button');
  button.textContent = 'Opened on load';
  element.appendChild(button);
  const wrapper = document.createElement('div');
  wrapper.style.padding = '100px';
  wrapper.style.textAlign = 'center';
  wrapper.appendChild(element);
  return wrapper;
}`,...l.parameters?.docs?.source}}};const g=["Default","WithActions","AllPositions","CustomWidth","InitiallyOpen"],A=Object.freeze(Object.defineProperty({__proto__:null,AllPositions:u,CustomWidth:s,Default:m,InitiallyOpen:l,WithActions:a,__namedExportsOrder:g,default:x},Symbol.toStringTag,{value:"Module"}));export{A as P};
