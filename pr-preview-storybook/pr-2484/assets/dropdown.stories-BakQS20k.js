import{i as u}from"./icons-CdnviRe7.js";const{action:d}=__STORYBOOK_MODULE_ACTIONS__,f={title:"Components/Dropdown",tags:["autodocs"],args:{label:"Dropdown",disabled:!1,defaultOpen:!1,noCloseOnOutsideClick:!1,noCloseOnMenuClick:!1,noAppendToBody:!0,variant:"primary",placement:"bottom-start",size:"m",href:"",target:"_self",icon:"c-info-16",error:!1,itemDisabled:!1},argTypes:{placement:{description:"Specifies the position of the dropdown relative to its trigger element.",options:["auto","auto-start","auto-end","top","top-start","top-end","bottom","bottom-start","bottom-end","right","right-start","right-end","left","left-start","left-end"],control:"select",table:{category:"ifx-dropdown props",defaultValue:{summary:"bottom-start"}}},label:{name:"Label of Dropdown Trigger Button",description:"Set the label displayed on the *<ifx-dropdown-trigger-button>*.",table:{category:"story controls",defaultValue:{summary:"Dropdown"}}},size:{description:"Font Size options for menu items: s (14px) and m (16px) - default: m.",options:["s","m"],control:"radio",table:{category:"ifx-dropdown-menu props",defaultValue:{summary:"m"}}},disabled:{description:"Determines if the dropdown button should be disabled.",control:"boolean",table:{category:"ifx-dropdown props",defaultValue:{summary:!1}}},variant:{description:'The visual style of the dropdown button. Accepted values are "primary", "secondary", "tertiary".',options:["primary","secondary","tertiary"],control:"radio",table:{category:"ifx-dropdown-trigger-button props",defaultValue:{summary:"primary"}}},target:{description:"Determines where to open the linked document when the dropdown item is clicked.",options:["_self","_blank"],control:"radio",if:{arg:"href",truthy:!0},table:{category:"ifx-dropdown-item props",defaultValue:{summary:"_self"}}},href:{description:"href link to menu item.",table:{category:"ifx-dropdown-item props"}},icon:{description:"The icon to be displayed on the dropdown items.",options:Object.keys(u),control:"select",table:{category:"ifx-dropdown-item props",defaultValue:{summary:"c-info-16"}}},error:{description:"Changes Item to error/remove variant",control:"boolean",table:{category:"ifx-dropdown-item props",defaultValue:{summary:!1}}},itemDisabled:{name:"disabled",description:"Disables the dropdown item, making it non-interactive.",control:"boolean",table:{category:"ifx-dropdown-item props",defaultValue:{summary:!1}}},defaultOpen:{description:"Determines if the dropdown should be open by default.",control:"boolean",table:{category:"ifx-dropdown props",defaultValue:{summary:!1}}},noCloseOnOutsideClick:{description:"Determines if the dropdown should not close when a click outside the dropdown happens.",control:"boolean",table:{category:"ifx-dropdown props",defaultValue:{summary:!1}}},noCloseOnMenuClick:{description:"Determines if the dropdown should not close when a click inside the dropdown menu happens.",control:"boolean",table:{category:"ifx-dropdown props",defaultValue:{summary:!1}}},noAppendToBody:{description:"Determines if the dropdown should not be appended to the body.",control:"boolean",table:{category:"ifx-dropdown props",defaultValue:{summary:!1}}},ifxOpen:{action:"ifxOpen",description:"Custom event that is emitted when the dropdown opens.",table:{category:"custom events",type:{summary:"Framework integration",detail:`React: onIfxOpen={handleChange}
Vue:@ifxOpen="handleChange"
Angular:(ifxOpen)="handleChange()"
VanillaJs:.addEventListener("ifxOpen", (event) => {//handle change});`}}},ifxClose:{action:"ifxClose",description:"Custom event emitted when dropdown closes.",table:{category:"custom events",type:{summary:"Framework integration",detail:`React: onIfxClose={handleChange}
Vue:@ifxClose="handleChange"
Angular:(ifxClose)="handleChange()"
VanillaJs:.addEventListener("ifxClose", (event) => {//handle change});`}}},ifxDropdownMenuItem:{action:"ifxDropdownMenuItem",description:"Custom event emitted by ifx-dropdown-menu when an item is selected.",table:{category:"custom events",type:{summary:"Framework integration",detail:`React: onIfxDropdownMenuItem={handleChange}
Vue:@ifxDropdownMenuItem="handleChange"
Angular:(ifxDropdownMenuItem)="handleChange()"
VanillaJs:.addEventListener("ifxDropdownMenuItem", (event) => {//handle change});`}}}}},o=(e,n=!1)=>{const t=e.icon==="none"?"":e.icon,r=e.href?` href="${e.href}" target="${e.target}"`:"",m=n&&e.itemDisabled?" disabled":"";return`icon="${t}" error="${e.error}"${r}${m}`},w=e=>{const n=document.createElement("div");n.innerHTML=`<ifx-dropdown placement="${e.placement}" 
  ${e.disabled?"disabled":""}
  default-open="${e.defaultOpen}"
  no-close-on-outside-click="${e.noCloseOnOutsideClick}"
  no-close-on-menu-click="${e.noCloseOnOutsideClick}"
  no-append-to-body="${e.noAppendToBody}">

    <ifx-dropdown-trigger-button variant="${e.variant}">
      ${e.label}
    </ifx-dropdown-trigger-button>

  <ifx-dropdown-menu size="${e.size}">
    <ifx-dropdown-item ${o(e,!0)}>Menu Item</ifx-dropdown-item>
    <ifx-dropdown-item ${o(e,!0)}>Menu Item</ifx-dropdown-item>
    <ifx-dropdown-item ${o(e,!0)}>Menu Item</ifx-dropdown-item>
    <ifx-dropdown-item ${o(e,!0)}>Menu Item</ifx-dropdown-item>
    <ifx-dropdown-item ${o(e,!0)}>Menu Item</ifx-dropdown-item>
  </ifx-dropdown-menu>
</ifx-dropdown>`;const t=n.querySelector("ifx-dropdown"),r=t.querySelector("ifx-dropdown-menu");return t.addEventListener("ifxOpen",d("ifxOpen")),t.addEventListener("ifxClose",d("ifxClose")),r?.addEventListener("ifxDropdownMenuItem",d("ifxDropdownMenuItem")),n},a=w.bind({}),c=e=>{const n=document.createElement("div");n.innerHTML=`<ifx-dropdown
    placement="${e.placement}"
    default-open="${e.defaultOpen}"
    no-close-on-outside-click="${e.noCloseOnOutsideClick}"
    no-close-on-menu-click="${e.noCloseOnOutsideClick}"
    disabled="${e.disabled}"
    no-append-to-body="${e.noAppendToBody}"
  >
    Hello World! Click on the text to open the dropdown
    <ifx-dropdown-trigger>
      <ifx-icon icon="c-check-16"></ifx-icon>
    </ifx-dropdown-trigger>
    Some more text
  <ifx-dropdown-menu size="${e.size}">
    <ifx-dropdown-item ${o(e)}>Menu Item</ifx-dropdown-item>
    <ifx-dropdown-item ${o(e)}>Menu Item</ifx-dropdown-item>
    <ifx-dropdown-item ${o(e)}>Menu Item</ifx-dropdown-item>
    <ifx-dropdown-item ${o(e)}>Menu Item</ifx-dropdown-item>
    <ifx-dropdown-item ${o(e)}>Menu Item</ifx-dropdown-item>
  </ifx-dropdown-menu>
</ifx-dropdown>`;const t=n.querySelector("ifx-dropdown"),r=t.querySelector("ifx-dropdown-menu");return t.addEventListener("ifxOpen",d("ifxOpen")),t.addEventListener("ifxClose",d("ifxClose")),r?.addEventListener("ifxDropdownMenuItem",d("ifxDropdownMenuItem")),n},i=c.bind({});i.argTypes={label:{table:{disable:!0}},variant:{table:{disable:!0}}};const x=e=>{const n=document.createElement("div");n.innerHTML=`<ifx-dropdown
  placement="${e.placement}"
  default-open="${e.defaultOpen}"
  no-close-on-outside-click="${e.noCloseOnOutsideClick}"
  no-close-on-menu-click="${e.noCloseOnOutsideClick}"
  no-append-to-body="${e.noAppendToBody}">
  <ifx-dropdown-header>Dropdown Header</ifx-dropdown-header>
   <ifx-dropdown-trigger-button variant="${e.variant}">
      ${e.label}
    </ifx-dropdown-trigger-button>
     <ifx-dropdown-menu size="${e.size}">
    <ifx-dropdown-header>Header Text</ifx-dropdown-header>
    <ifx-dropdown-item ${o(e)}>Menu Item</ifx-dropdown-item>
    <ifx-dropdown-item ${o(e)}>Menu Item</ifx-dropdown-item>
    <ifx-dropdown-item ${o(e)}>Menu Item</ifx-dropdown-item>
    <ifx-dropdown-item ${o(e)}>Menu Item</ifx-dropdown-item>
    <ifx-dropdown-item ${o(e)}>Menu Item</ifx-dropdown-item>
  </ifx-dropdown-menu>
</ifx-dropdown>`;const t=n.querySelector("ifx-dropdown"),r=t.querySelector("ifx-dropdown-menu");return t.addEventListener("ifxOpen",d("ifxOpen")),t.addEventListener("ifxClose",d("ifxClose")),r?.addEventListener("ifxDropdownMenuItem",d("ifxDropdownMenuItem")),n},p=x.bind({});p.argTypes={label:{table:{disable:!0}},variant:{table:{disable:!0}}};const b=e=>{const n=document.createElement("div");n.innerHTML=`<ifx-dropdown
  placement="${e.placement}"
  default-open="${e.defaultOpen}"
  no-close-on-outside-click="${e.noCloseOnOutsideClick}"
  no-close-on-menu-click="${e.noCloseOnOutsideClick}"
  no-append-to-body="${e.noAppendToBody}">
   <ifx-dropdown-trigger-button variant="${e.variant}">
      ${e.label}
    </ifx-dropdown-trigger-button>
     <ifx-dropdown-menu size="${e.size}">
    <ifx-search-field show-delete-icon="false"></ifx-search-field>
    <ifx-dropdown-item ${o(e)}>Menu Item</ifx-dropdown-item>
    <ifx-dropdown-item ${o(e)}>Menu Item</ifx-dropdown-item>
    <ifx-dropdown-item ${o(e)}>Menu Item</ifx-dropdown-item>
    <ifx-dropdown-item ${o(e)}>Menu Item</ifx-dropdown-item>
    <ifx-dropdown-item ${o(e)}>Menu Item</ifx-dropdown-item>
  </ifx-dropdown-menu>
</ifx-dropdown>`;const t=n.querySelector("ifx-dropdown"),r=t.querySelector("ifx-dropdown-menu");return t.addEventListener("ifxOpen",d("ifxOpen")),t.addEventListener("ifxClose",d("ifxClose")),r?.addEventListener("ifxDropdownMenuItem",d("ifxDropdownMenuItem")),n},s=b.bind({}),$=e=>{const n=document.createElement("div");n.innerHTML=`<ifx-dropdown
  placement="${e.placement}"
  default-open="${e.defaultOpen}"
   no-close-on-outside-click="${e.noCloseOnOutsideClick}"
  no-close-on-menu-click="${e.noCloseOnOutsideClick}"
  no-append-to-body="${e.noAppendToBody}">
   <ifx-dropdown-trigger-button variant="${e.variant}">
      ${e.label}
    </ifx-dropdown-trigger-button>
     <ifx-dropdown-menu size="${e.size}">
    <ifx-dropdown-item ${o(e)}>Menu Item</ifx-dropdown-item>
    <ifx-dropdown-item ${o(e)}>Menu Item</ifx-dropdown-item>
    <ifx-dropdown-item ${o(e)}>Menu Item</ifx-dropdown-item>
    <ifx-dropdown-item ${o(e)}>Menu Item</ifx-dropdown-item>
    <ifx-dropdown-separator></ifx-dropdown-separator>
    <ifx-dropdown-item ${o(e)}>Menu Item</ifx-dropdown-item>
  </ifx-dropdown-menu>
</ifx-dropdown>`;const t=n.querySelector("ifx-dropdown"),r=t.querySelector("ifx-dropdown-menu");return t.addEventListener("ifxOpen",d("ifxOpen")),t.addEventListener("ifxClose",d("ifxClose")),r?.addEventListener("ifxDropdownMenuItem",d("ifxDropdownMenuItem")),n},l=$.bind({});a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(args: any) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = \`<ifx-dropdown placement="\${args.placement}" 
  \${args.disabled ? "disabled" : ""}
  default-open="\${args.defaultOpen}"
  no-close-on-outside-click="\${args.noCloseOnOutsideClick}"
  no-close-on-menu-click="\${args.noCloseOnOutsideClick}"
  no-append-to-body="\${args.noAppendToBody}">

    <ifx-dropdown-trigger-button variant="\${args.variant}">
      \${args.label}
    </ifx-dropdown-trigger-button>

  <ifx-dropdown-menu size="\${args.size}">
    <ifx-dropdown-item \${dropdownItemAttributes(args, true)}>Menu Item</ifx-dropdown-item>
    <ifx-dropdown-item \${dropdownItemAttributes(args, true)}>Menu Item</ifx-dropdown-item>
    <ifx-dropdown-item \${dropdownItemAttributes(args, true)}>Menu Item</ifx-dropdown-item>
    <ifx-dropdown-item \${dropdownItemAttributes(args, true)}>Menu Item</ifx-dropdown-item>
    <ifx-dropdown-item \${dropdownItemAttributes(args, true)}>Menu Item</ifx-dropdown-item>
  </ifx-dropdown-menu>
</ifx-dropdown>\`;
  const dropdown = wrapper.querySelector("ifx-dropdown") as HTMLElement;
  const dropdownMenu = dropdown.querySelector("ifx-dropdown-menu");
  dropdown.addEventListener("ifxOpen", action("ifxOpen"));
  dropdown.addEventListener("ifxClose", action("ifxClose"));
  dropdownMenu?.addEventListener("ifxDropdownMenuItem", action("ifxDropdownMenuItem"));
  return wrapper;
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`(args: any) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = \`<ifx-dropdown
    placement="\${args.placement}"
    default-open="\${args.defaultOpen}"
    no-close-on-outside-click="\${args.noCloseOnOutsideClick}"
    no-close-on-menu-click="\${args.noCloseOnOutsideClick}"
    disabled="\${args.disabled}"
    no-append-to-body="\${args.noAppendToBody}"
  >
    Hello World! Click on the text to open the dropdown
    <ifx-dropdown-trigger>
      <ifx-icon icon="\${"c-check-16"}"></ifx-icon>
    </ifx-dropdown-trigger>
    Some more text
  <ifx-dropdown-menu size="\${args.size}">
    <ifx-dropdown-item \${dropdownItemAttributes(args)}>Menu Item</ifx-dropdown-item>
    <ifx-dropdown-item \${dropdownItemAttributes(args)}>Menu Item</ifx-dropdown-item>
    <ifx-dropdown-item \${dropdownItemAttributes(args)}>Menu Item</ifx-dropdown-item>
    <ifx-dropdown-item \${dropdownItemAttributes(args)}>Menu Item</ifx-dropdown-item>
    <ifx-dropdown-item \${dropdownItemAttributes(args)}>Menu Item</ifx-dropdown-item>
  </ifx-dropdown-menu>
</ifx-dropdown>\`;
  const dropdown = wrapper.querySelector("ifx-dropdown") as HTMLElement;
  const dropdownMenu = dropdown.querySelector("ifx-dropdown-menu");
  dropdown.addEventListener("ifxOpen", action("ifxOpen"));
  dropdown.addEventListener("ifxClose", action("ifxClose"));
  dropdownMenu?.addEventListener("ifxDropdownMenuItem", action("ifxDropdownMenuItem"));
  return wrapper;
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`(args: any) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = \`<ifx-dropdown
  placement="\${args.placement}"
  default-open="\${args.defaultOpen}"
  no-close-on-outside-click="\${args.noCloseOnOutsideClick}"
  no-close-on-menu-click="\${args.noCloseOnOutsideClick}"
  no-append-to-body="\${args.noAppendToBody}">
  <ifx-dropdown-header>Dropdown Header</ifx-dropdown-header>
   <ifx-dropdown-trigger-button variant="\${args.variant}">
      \${args.label}
    </ifx-dropdown-trigger-button>
     <ifx-dropdown-menu size="\${args.size}">
    <ifx-dropdown-header>Header Text</ifx-dropdown-header>
    <ifx-dropdown-item \${dropdownItemAttributes(args)}>Menu Item</ifx-dropdown-item>
    <ifx-dropdown-item \${dropdownItemAttributes(args)}>Menu Item</ifx-dropdown-item>
    <ifx-dropdown-item \${dropdownItemAttributes(args)}>Menu Item</ifx-dropdown-item>
    <ifx-dropdown-item \${dropdownItemAttributes(args)}>Menu Item</ifx-dropdown-item>
    <ifx-dropdown-item \${dropdownItemAttributes(args)}>Menu Item</ifx-dropdown-item>
  </ifx-dropdown-menu>
</ifx-dropdown>\`;
  const dropdown = wrapper.querySelector("ifx-dropdown") as HTMLElement;
  const dropdownMenu = dropdown.querySelector("ifx-dropdown-menu");
  dropdown.addEventListener("ifxOpen", action("ifxOpen"));
  dropdown.addEventListener("ifxClose", action("ifxClose"));
  dropdownMenu?.addEventListener("ifxDropdownMenuItem", action("ifxDropdownMenuItem"));
  return wrapper;
}`,...p.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: any) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = \`<ifx-dropdown
  placement="\${args.placement}"
  default-open="\${args.defaultOpen}"
  no-close-on-outside-click="\${args.noCloseOnOutsideClick}"
  no-close-on-menu-click="\${args.noCloseOnOutsideClick}"
  no-append-to-body="\${args.noAppendToBody}">
   <ifx-dropdown-trigger-button variant="\${args.variant}">
      \${args.label}
    </ifx-dropdown-trigger-button>
     <ifx-dropdown-menu size="\${args.size}">
    <ifx-search-field show-delete-icon="false"></ifx-search-field>
    <ifx-dropdown-item \${dropdownItemAttributes(args)}>Menu Item</ifx-dropdown-item>
    <ifx-dropdown-item \${dropdownItemAttributes(args)}>Menu Item</ifx-dropdown-item>
    <ifx-dropdown-item \${dropdownItemAttributes(args)}>Menu Item</ifx-dropdown-item>
    <ifx-dropdown-item \${dropdownItemAttributes(args)}>Menu Item</ifx-dropdown-item>
    <ifx-dropdown-item \${dropdownItemAttributes(args)}>Menu Item</ifx-dropdown-item>
  </ifx-dropdown-menu>
</ifx-dropdown>\`;
  const dropdown = wrapper.querySelector("ifx-dropdown") as HTMLElement;
  const dropdownMenu = dropdown.querySelector("ifx-dropdown-menu");
  dropdown.addEventListener("ifxOpen", action("ifxOpen"));
  dropdown.addEventListener("ifxClose", action("ifxClose"));
  dropdownMenu?.addEventListener("ifxDropdownMenuItem", action("ifxDropdownMenuItem"));
  return wrapper;
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`(args: any) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = \`<ifx-dropdown
  placement="\${args.placement}"
  default-open="\${args.defaultOpen}"
   no-close-on-outside-click="\${args.noCloseOnOutsideClick}"
  no-close-on-menu-click="\${args.noCloseOnOutsideClick}"
  no-append-to-body="\${args.noAppendToBody}">
   <ifx-dropdown-trigger-button variant="\${args.variant}">
      \${args.label}
    </ifx-dropdown-trigger-button>
     <ifx-dropdown-menu size="\${args.size}">
    <ifx-dropdown-item \${dropdownItemAttributes(args)}>Menu Item</ifx-dropdown-item>
    <ifx-dropdown-item \${dropdownItemAttributes(args)}>Menu Item</ifx-dropdown-item>
    <ifx-dropdown-item \${dropdownItemAttributes(args)}>Menu Item</ifx-dropdown-item>
    <ifx-dropdown-item \${dropdownItemAttributes(args)}>Menu Item</ifx-dropdown-item>
    <ifx-dropdown-separator></ifx-dropdown-separator>
    <ifx-dropdown-item \${dropdownItemAttributes(args)}>Menu Item</ifx-dropdown-item>
  </ifx-dropdown-menu>
</ifx-dropdown>\`;
  const dropdown = wrapper.querySelector("ifx-dropdown") as HTMLElement;
  const dropdownMenu = dropdown.querySelector("ifx-dropdown-menu");
  dropdown.addEventListener("ifxOpen", action("ifxOpen"));
  dropdown.addEventListener("ifxClose", action("ifxClose"));
  dropdownMenu?.addEventListener("ifxDropdownMenuItem", action("ifxDropdownMenuItem"));
  return wrapper;
}`,...l.parameters?.docs?.source}}};const g=["Default","LabelTrigger","Header","SearchField","Separator"],I=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Header:p,LabelTrigger:i,SearchField:s,Separator:l,__namedExportsOrder:g,default:f},Symbol.toStringTag,{value:"Module"}));export{I as D};
