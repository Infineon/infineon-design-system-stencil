import{i as u}from"./icons-CBa5BGDq.js";const{action:a}=__STORYBOOK_MODULE_ACTIONS__,l={title:"Components/Accordion",component:"ifx-accordion",args:{amountOfItems:3,ariaLevelNumber:3,autoCollapse:!1,icon:""},argTypes:{amountOfItems:{control:"number",name:"Amount of Items",description:"Control the number of *<ifx-accordion-item>*.",table:{category:"story controls",type:{summary:"number"}}},ariaLevelNumber:{control:"number",min:1,max:6,description:"The aria-level attribute for the accordion item header.",table:{defaultValue:{summary:"3"},category:"ifx-accordion-item props",type:{summary:"number"}}},autoCollapse:{control:"boolean",description:"Collapse the other items when one item is opened.",table:{category:"ifx-accordion props",defaultValue:{summary:"false"},type:{summary:"boolean"}}},ifxOpen:{action:"ifxOpen",description:"Event emitted when an accordion item is opened.",table:{category:"custom events",type:{summary:"Framework integration",detail:`React: onIfxOpen={handleOpen}
            Vue: @ifxOpen="handleOpen"
            Angular: (ifxOpen)="handleOpen()"
            VanillaJs: .addEventListener("ifxOpen", (event) => {/*handle open*/});`}}},ifxClose:{action:"ifxClose",description:"Event emitted when an accordion item is closed.",table:{category:"custom events",type:{summary:"Framework integration",detail:`React: onIfxClose={handleClose}
          Vue: @ifxClose="handleClose"
          Angular: (ifxClose)="handleClose()"
          VanillaJs: .addEventListener("ifxClose", (event) => {/*handle close*/});`}}},icon:{name:"icon",control:{type:"select"},options:Object.keys(u),description:"Set the icon of the accordion. Use an empty string to remove the icon.",table:{category:"ifx-accordion props",defaultValue:{summary:""}}}}},c=t=>{const o=document.createElement("ifx-accordion"),e=document.createElement("ifx-accordion-item");e.setAttribute("caption","Label"),e.setAttribute("open","true"),e.setAttribute("aria-level-number",t.ariaLevelNumber),e.addEventListener("ifxOpen",a("ifxOpen")),e.addEventListener("ifxClose",a("ifxClose"));var s=t.icon==="none"?"":t.icon;e.setAttribute("icon",s),e.innerHTML=`
  Content for Initial Item. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
`,e.setAttribute("caption","Label"),o.append(e),o.setAttribute("auto-collapse",t.autoCollapse);for(let r=1;r<t.amountOfItems;r++){const i=document.createElement("ifx-accordion-item");i.setAttribute("caption","Label"),i.setAttribute("open","false"),i.setAttribute("aria-level-number",t.ariaLevelNumber);var s=t.icon==="none"?"":t.icon;i.setAttribute("icon",s),i.innerHTML=`
        Content for Item #${r+1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
    `,i.addEventListener("ifxOpen",a("ifxOpen")),i.addEventListener("ifxClose",a("ifxClose")),o.append(i)}return o},n=c.bind({});n.args={amountOfItems:3,icon:"",ariaLevelNumber:3};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(args: any) => {
  const accordionElement = document.createElement("ifx-accordion");
  const initialItem = document.createElement("ifx-accordion-item");
  initialItem.setAttribute("caption", \`Label\`);
  initialItem.setAttribute("open", \`true\`);
  initialItem.setAttribute("aria-level-number", args.ariaLevelNumber);
  initialItem.addEventListener("ifxOpen", action("ifxOpen"));
  initialItem.addEventListener("ifxClose", action("ifxClose"));
  var icon = args.icon === "none" ? "" : args.icon;
  initialItem.setAttribute("icon", icon);
  initialItem.innerHTML = \`
  Content for Initial Item. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
\`;
  initialItem.setAttribute("caption", \`Label\`);
  accordionElement.append(initialItem);
  accordionElement.setAttribute("auto-collapse", args.autoCollapse);
  for (let i = 1; i < args.amountOfItems; i++) {
    const item = document.createElement("ifx-accordion-item");
    item.setAttribute("caption", \`Label\`);
    item.setAttribute("open", \`false\`);
    item.setAttribute("aria-level-number", args.ariaLevelNumber);
    var icon = args.icon === "none" ? "" : args.icon;
    item.setAttribute("icon", icon);
    item.innerHTML = \`
        Content for Item #\${i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
    \`;
    item.addEventListener("ifxOpen", action("ifxOpen"));
    item.addEventListener("ifxClose", action("ifxClose"));
    accordionElement.append(item);
  }
  return accordionElement;
}`,...n.parameters?.docs?.source}}};const m=["Default"],d=Object.freeze(Object.defineProperty({__proto__:null,Default:n,__namedExportsOrder:m,default:l},Symbol.toStringTag,{value:"Module"}));export{d as A,n as D};
