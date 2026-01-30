import{i as s}from"./icons-C_9-zI1i.js";const{action:r}=__STORYBOOK_MODULE_ACTIONS__,l={title:"Components/Tabs",tags:["autodocs"],component:"ifx-tabs",args:{amountOfTabs:3,orientation:"horizontal",icon:"",header:"Tab",disabled:!1,fullWidth:!1},argTypes:{amountOfTabs:{name:"Amount of Tabs",control:"number",description:"Set the number of tabs.",table:{category:"story controls",type:{summary:"number"}}},orientation:{options:["horizontal","vertical"],control:{type:"radio"},description:"Set the orientation of the tabs.",table:{category:"ifx-tabs props",defaultValue:{summary:"horizontal"},type:{summary:"horizontal | vertical"}}},icon:{name:"icon",control:{type:"select"},options:Object.keys(s),description:'Set the icon of the tab. Choose "none" to display no icon.',table:{category:"ifx-tab props",defaultValue:{summary:""},type:{summary:"string"}}},fullWidth:{control:{type:"boolean"},description:"Adds flex: 1 to the ifx-tab child components, thus making them occupy the full width of their parent",table:{category:"ifx-tabs props",defaultValue:{summary:"false"},type:{summary:"boolean"}}},iconPosition:{options:["left","right"],control:{type:"radio"},description:"Set the position of the icon.",table:{category:"ifx-tab props",defaultValue:{summary:"left"},type:{summary:"left | right"}}},activeTabIndex:{description:"Set the tab as active by providing the index (tab can not be disabled).",table:{category:"ifx-tabs props",defaultValue:{summary:"0"},type:{summary:"number"}}},header:{control:"text",description:"Set the header of the tab.",table:{defaultValue:{summary:"Tab"},category:"ifx-tab props",type:{summary:"string"}}},disabled:{control:"boolean",description:"Set the tab to disabled. In the storybook, the second tab will be disabled.",table:{category:"ifx-tab props",defaultValue:{summary:"false"}}},ifxChange:{action:"ifxChange",description:"Custom event that is emitted when the active tab changes.",table:{category:"custom events",type:{summary:"Framework integration",detail:`React: onIfxChange={handleChange}
Vue:@ifxChange="handleChange"
Angular:(ifxChange)="handleChange()"
VanillaJs:.addEventListener("ifxChange", (event) => {//handle change});`}}}}},u=e=>{const t=document.createElement("ifx-tabs");t.setAttribute("orientation",e.orientation),t.setAttribute("active-tab-index",e.activeTabIndex),t.setAttribute("full-width",e.fullWidth),t.addEventListener("ifxChange",r("ifxChange"));for(let i=0;i<e.amountOfTabs;i++){const a=document.createElement("ifx-tab");a.setAttribute("header",`${e.header} ${i+1}`),i==1&&a.setAttribute("disabled",e.disabled);var o=e.icon==="none"?"":e.icon;a.setAttribute("icon",o),a.setAttribute("icon-position",e.iconPosition),a.innerHTML=`
        Content for Tab #${i+1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
    `,t.append(a)}return t},n=u.bind({});n.args={amountOfTabs:3,orientation:"horizontal",activeTabIndex:0,icon:"",iconPosition:"left",header:"Tab",disabled:!1};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => {
  const tabsElement = document.createElement("ifx-tabs") as HTMLIfxTabsElement;
  tabsElement.setAttribute("orientation", args.orientation);
  tabsElement.setAttribute("active-tab-index", args.activeTabIndex);
  tabsElement.setAttribute("full-width", args.fullWidth);
  tabsElement.addEventListener("ifxChange", action(\`ifxChange\`));
  for (let i = 0; i < args.amountOfTabs; i++) {
    const tabContent = document.createElement("ifx-tab");
    tabContent.setAttribute("header", \`\${args.header} \${i + 1}\`);
    if (i == 1) {
      tabContent.setAttribute("disabled", args.disabled);
    }
    var icon = args.icon === "none" ? "" : args.icon;
    tabContent.setAttribute("icon", icon);
    tabContent.setAttribute("icon-position", args.iconPosition);
    tabContent.innerHTML = \`
        Content for Tab #\${i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
    \`;
    tabsElement.append(tabContent);
  }
  return tabsElement;
}`,...n.parameters?.docs?.source}}};const c=["Default"],d=Object.freeze(Object.defineProperty({__proto__:null,Default:n,__namedExportsOrder:c,default:l},Symbol.toStringTag,{value:"Module"}));export{d as T};
