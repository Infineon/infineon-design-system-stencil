import{i}from"./icons-C_9-zI1i.js";const{action:m}=__STORYBOOK_MODULE_ACTIONS__,d={title:"Components/Breadcrumb",tags:["autodocs"],args:{icon:"",iconArialLabel:"",href:"http://yahoo.com",hrefOfDropdownItem:"http://google.com",target:"_self"},argTypes:{icon:{control:{type:"select"},options:Object.keys(i),description:'Set the icon of the tab. Choose "none" to display no icon.',table:{category:"ifx-breadcrumb-item-label props",defaultValue:{summary:""},type:{summary:"string"}}},target:{control:{type:"text"},description:"Set the target of the link.",table:{category:"ifx-breadcrumb-item-label props",defaultValue:{summary:"_self"},type:{summary:"string"}}},iconArialLabel:{control:{type:"text"},description:"Set the aria label of the icon.",table:{category:"ifx-breadcrumb-item-label props",defaultValue:{summary:""},type:{summary:"string"}}},href:{control:{type:"text"},description:"Set the href of the breadcrumb item.",table:{category:"ifx-breadcrumb-item-label props",defaultValue:{summary:""},type:{summary:"string"}}},hrefOfDropdownItem:{name:"href",control:{type:"text"},description:"Set the href of the dropdown item.",table:{category:"ifx-dropdown-item props",defaultValue:{summary:""},type:{summary:"string"}}},ifxDropdownMenuItem:{action:"ifxDropdownMenuItem",description:"Custom event emitted by ifx-dropdown-menu when an item is selected.",table:{category:"custom events",type:{summary:"Framework integration",detail:`React: onIfxDropdownMenuItem={handleChange}
Vue:@ifxDropdownMenuItem="handleChange"
Angular:(ifxDropdownMenuItem)="handleChange()"
VanillaJs:.addEventListener("ifxDropdownMenuItem", (event) => {//handle change});`}}}}},a=e=>{const o=e.icon==="none"?"":e.icon,t=document.createElement("div");return t.innerHTML=`<ifx-breadcrumb>
  <ifx-breadcrumb-item>
    <ifx-breadcrumb-item-label slot="label" icon="${e.icon?o:""}" href="${e.href}"">Breadcrumb 1</ifx-breadcrumb-item-label>
    <ifx-dropdown-menu>
      <ifx-dropdown-item href=${e.hrefOfDropdownItem}>Google</ifx-dropdown-item>
      <ifx-dropdown-item href="http://bing.com">Bing</ifx-dropdown-item>
      <ifx-dropdown-item href="http://yahoo.com">Yahoo</ifx-dropdown-item>
      <ifx-dropdown-item href="http://naver.com">Naver</ifx-dropdown-item>
    </ifx-dropdown-menu>
  </ifx-breadcrumb-item>

  <ifx-breadcrumb-item>
    <ifx-breadcrumb-item-label slot="label" icon="${e.icon?o:""}">Breadcrumb 2</ifx-breadcrumb-item-label>
    <ifx-dropdown-menu>
    <ifx-dropdown-item href=${e.href}>Google</ifx-dropdown-item>
    <ifx-dropdown-item href="http://bing.com">Bing</ifx-dropdown-item>
    <ifx-dropdown-item href="http://yahoo.com">Yahoo</ifx-dropdown-item>
    <ifx-dropdown-item href="http://naver.com">Naver</ifx-dropdown-item>
    </ifx-dropdown-menu>
  </ifx-breadcrumb-item>

  <ifx-breadcrumb-item>
    <ifx-breadcrumb-item-label slot="label" icon="${e.icon?o:""}" href="http://google.com">Breadcrumb 3</ifx-breadcrumb-item-label>
  </ifx-breadcrumb-item>
</ifx-breadcrumb>`,t.querySelector("ifx-breadcrumb").querySelectorAll("ifx-breadcrumb-item").forEach(n=>{n.querySelector("ifx-dropdown-menu")?.addEventListener("ifxDropdownMenuItem",m("ifxDropdownMenuItem"))}),t},r=a.bind({});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
  const icon = args.icon === "none" ? "" : args.icon;
  const wrapper = document.createElement("div");
  wrapper.innerHTML = \`<ifx-breadcrumb>
  <ifx-breadcrumb-item>
    <ifx-breadcrumb-item-label slot="label" icon="\${args.icon ? icon : ""}" href="\${args.href}"">Breadcrumb 1</ifx-breadcrumb-item-label>
    <ifx-dropdown-menu>
      <ifx-dropdown-item href=\${args.hrefOfDropdownItem}>Google</ifx-dropdown-item>
      <ifx-dropdown-item href="http://bing.com">Bing</ifx-dropdown-item>
      <ifx-dropdown-item href="http://yahoo.com">Yahoo</ifx-dropdown-item>
      <ifx-dropdown-item href="http://naver.com">Naver</ifx-dropdown-item>
    </ifx-dropdown-menu>
  </ifx-breadcrumb-item>

  <ifx-breadcrumb-item>
    <ifx-breadcrumb-item-label slot="label" icon="\${args.icon ? icon : ""}">Breadcrumb 2</ifx-breadcrumb-item-label>
    <ifx-dropdown-menu>
    <ifx-dropdown-item href=\${args.href}>Google</ifx-dropdown-item>
    <ifx-dropdown-item href="http://bing.com">Bing</ifx-dropdown-item>
    <ifx-dropdown-item href="http://yahoo.com">Yahoo</ifx-dropdown-item>
    <ifx-dropdown-item href="http://naver.com">Naver</ifx-dropdown-item>
    </ifx-dropdown-menu>
  </ifx-breadcrumb-item>

  <ifx-breadcrumb-item>
    <ifx-breadcrumb-item-label slot="label" icon="\${args.icon ? icon : ""}" href="http://google.com">Breadcrumb 3</ifx-breadcrumb-item-label>
  </ifx-breadcrumb-item>
</ifx-breadcrumb>\`;
  const breadcrumb = wrapper.querySelector("ifx-breadcrumb") as HTMLElement;
  // Loop through each breadcrumb item and attach event listeners to its dropdown menu
  const breadcrumbItems = breadcrumb.querySelectorAll("ifx-breadcrumb-item");
  breadcrumbItems.forEach(breadcrumbItem => {
    const dropdownMenu = breadcrumbItem.querySelector("ifx-dropdown-menu");
    dropdownMenu?.addEventListener("ifxDropdownMenuItem", action("ifxDropdownMenuItem"));
  });
  return wrapper;
}`,...r.parameters?.docs?.source}}};const c=["Default"],l=Object.freeze(Object.defineProperty({__proto__:null,Default:r,__namedExportsOrder:c,default:d},Symbol.toStringTag,{value:"Module"}));export{l as B};
