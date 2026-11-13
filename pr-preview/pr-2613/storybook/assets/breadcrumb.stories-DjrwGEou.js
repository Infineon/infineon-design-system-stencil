import{i as o}from"./icons-B3WZ8sqF.js";import{b as t}from"./iframe-CrOy0bQW.js";const i={title:"Components/Breadcrumb",tags:["autodocs"],args:{icon:"",iconArialLabel:"",href:"http://yahoo.com",hrefOfDropdownItem:"http://google.com",target:"_self"},argTypes:{icon:{control:{type:"select"},options:Object.keys(o),description:'Set the icon of the tab. Choose "none" to display no icon.',table:{category:"ifx-breadcrumb-item-label props",defaultValue:{summary:""},type:{summary:"string"}}},target:{control:{type:"text"},description:"Set the target of the link.",table:{category:"ifx-breadcrumb-item-label props",defaultValue:{summary:"_self"},type:{summary:"string"}}},iconArialLabel:{control:{type:"text"},description:"Set the aria label of the icon.",table:{category:"ifx-breadcrumb-item-label props",defaultValue:{summary:""},type:{summary:"string"}}},href:{control:{type:"text"},description:"Set the href of the breadcrumb item.",table:{category:"ifx-breadcrumb-item-label props",defaultValue:{summary:""},type:{summary:"string"}}},hrefOfDropdownItem:{name:"href",control:{type:"text"},description:"Set the href of the dropdown item.",table:{category:"ifx-dropdown-item props",defaultValue:{summary:""},type:{summary:"string"}}},ifxDropdownMenuItem:{action:"ifxDropdownMenuItem",description:"Custom event emitted by ifx-dropdown-menu when an item is selected.",table:{category:"custom events",type:{summary:"Framework integration",detail:`React: onIfxDropdownMenuItem={handleChange}
Vue:@ifxDropdownMenuItem="handleChange"
Angular:(ifxDropdownMenuItem)="handleChange()"
VanillaJs:.addEventListener("ifxDropdownMenuItem", (event) => {//handle change});`}}}}},n=e=>t`
    <ifx-breadcrumb>
        <ifx-breadcrumb-item>
            <ifx-breadcrumb-item-label slot="label" icon="${e.icon==="none"?"":e.icon}" target="${e.target}">Breadcrumb 1</ifx-breadcrumb-item-label>
            <ifx-dropdown-menu>
                <ifx-dropdown-item href="${e.hrefOfDropdownItem}">Google</ifx-dropdown-item>
                <ifx-dropdown-item href="http://bing.com">Bing</ifx-dropdown-item>
                <ifx-dropdown-item href="http://yahoo.com">Yahoo</ifx-dropdown-item>
                <ifx-dropdown-item href="http://naver.com">Naver</ifx-dropdown-item>
            </ifx-dropdown-menu>
        </ifx-breadcrumb-item>
        <ifx-breadcrumb-item>
            <ifx-breadcrumb-item-label slot="label" icon="${e.icon==="none"?"":e.icon}" target="${e.target}">Breadcrumb 2</ifx-breadcrumb-item-label>
            <ifx-dropdown-menu>
                <ifx-dropdown-item href="${e.hrefOfDropdownItem}">Google</ifx-dropdown-item>
                <ifx-dropdown-item href="http://bing.com">Bing</ifx-dropdown-item>
                <ifx-dropdown-item href="http://yahoo.com">Yahoo</ifx-dropdown-item>
                <ifx-dropdown-item href="http://naver.com">Naver</ifx-dropdown-item>
            </ifx-dropdown-menu>
        </ifx-breadcrumb-item>
        <ifx-breadcrumb-item>
            <ifx-breadcrumb-item-label slot="label" icon="${e.icon==="none"?"":e.icon}" href="${e.href}" target="${e.target}">Breadcrumb 3</ifx-breadcrumb-item-label>
        </ifx-breadcrumb-item>
    </ifx-breadcrumb>`,r=n.bind({}),a=["Default"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args: any) => html\`
    <ifx-breadcrumb>
        <ifx-breadcrumb-item>
            <ifx-breadcrumb-item-label slot="label" icon="\${args.icon === "none" ? "" : args.icon}" target="\${args.target}">Breadcrumb 1</ifx-breadcrumb-item-label>
            <ifx-dropdown-menu>
                <ifx-dropdown-item href="\${args.hrefOfDropdownItem}">Google</ifx-dropdown-item>
                <ifx-dropdown-item href="http://bing.com">Bing</ifx-dropdown-item>
                <ifx-dropdown-item href="http://yahoo.com">Yahoo</ifx-dropdown-item>
                <ifx-dropdown-item href="http://naver.com">Naver</ifx-dropdown-item>
            </ifx-dropdown-menu>
        </ifx-breadcrumb-item>
        <ifx-breadcrumb-item>
            <ifx-breadcrumb-item-label slot="label" icon="\${args.icon === "none" ? "" : args.icon}" target="\${args.target}">Breadcrumb 2</ifx-breadcrumb-item-label>
            <ifx-dropdown-menu>
                <ifx-dropdown-item href="\${args.hrefOfDropdownItem}">Google</ifx-dropdown-item>
                <ifx-dropdown-item href="http://bing.com">Bing</ifx-dropdown-item>
                <ifx-dropdown-item href="http://yahoo.com">Yahoo</ifx-dropdown-item>
                <ifx-dropdown-item href="http://naver.com">Naver</ifx-dropdown-item>
            </ifx-dropdown-menu>
        </ifx-breadcrumb-item>
        <ifx-breadcrumb-item>
            <ifx-breadcrumb-item-label slot="label" icon="\${args.icon === "none" ? "" : args.icon}" href="\${args.href}" target="\${args.target}">Breadcrumb 3</ifx-breadcrumb-item-label>
        </ifx-breadcrumb-item>
    </ifx-breadcrumb>\``,...r.parameters?.docs?.source}}};const f=Object.freeze(Object.defineProperty({__proto__:null,Default:r,__namedExportsOrder:a,default:i},Symbol.toStringTag,{value:"Module"}));export{f as B};
