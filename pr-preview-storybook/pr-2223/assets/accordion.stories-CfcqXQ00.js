const{action:o}=__STORYBOOK_MODULE_ACTIONS__,r={title:"Components/Accordion",component:"ifx-accordion",args:{amountOfItems:3,AriaLevel:3,autoCollapse:!1},argTypes:{amountOfItems:{control:"number",name:"Amount of Items",description:"Control the number of *<ifx-accordion-item>*.",table:{category:"story controls",type:{summary:"number"}}},AriaLevel:{control:"number",min:1,max:6,description:"The aria-level attribute for the accordion item header.",table:{defaultValue:{summary:"3"},category:"ifx-accordion-item props",type:{summary:"number"}}},mutable:{control:"boolean",description:"Set the mutable attribute to allow or not allow the accordion item to be opened and closed.",table:{category:"ifx-accordion-item props",defaultValue:{summary:"true"},type:{summary:"boolean"}}},autoCollapse:{control:"boolean",description:"Collapse the other items when one item is opened.",table:{category:"ifx-accordion props",defaultValue:{summary:"false"},type:{summary:"boolean"}}},ifxOpen:{action:"ifxOpen",description:"Event emitted when an accordion item is opened.",table:{category:"custom events",type:{summary:"Framework integration",detail:`React: onIfxOpen={handleOpen}
            Vue: @ifxOpen="handleOpen"
            Angular: (ifxOpen)="handleOpen()"
            VanillaJs: .addEventListener("ifxOpen", (event) => {/*handle open*/});`}}},ifxClose:{action:"ifxClose",description:"Event emitted when an accordion item is closed.",table:{category:"custom events",type:{summary:"Framework integration",detail:`React: onIfxClose={handleClose}
          Vue: @ifxClose="handleClose"
          Angular: (ifxClose)="handleClose()"
          VanillaJs: .addEventListener("ifxClose", (event) => {/*handle close*/});`}}}}},l=i=>{const a=document.createElement("ifx-accordion"),e=document.createElement("ifx-accordion-item");e.setAttribute("caption","Label"),e.setAttribute("open","true"),e.setAttribute("aria-level",i.AriaLevel),e.setAttribute("mutable",i.mutable),e.addEventListener("ifxOpen",o("ifxOpen")),e.addEventListener("ifxClose",o("ifxClose")),e.innerHTML=`
  Content for Initial Item. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
`,e.setAttribute("caption","Label"),a.append(e),a.setAttribute("auto-collapse",i.autoCollapse);for(let s=1;s<i.amountOfItems;s++){const t=document.createElement("ifx-accordion-item");t.setAttribute("caption","Label"),t.setAttribute("open","false"),t.setAttribute("aria-level",i.AriaLevel),t.setAttribute("mutable",i.mutable),t.innerHTML=`
        Content for Item #${s+1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
    `,t.addEventListener("ifxOpen",o("ifxOpen")),t.addEventListener("ifxClose",o("ifxClose")),a.append(t)}return a},n=l.bind({});n.args={amountOfItems:3,mutable:!0};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => {
  const accordionElement = document.createElement("ifx-accordion");
  const initialItem = document.createElement("ifx-accordion-item");
  initialItem.setAttribute("caption", \`Label\`);
  initialItem.setAttribute("open", \`true\`);
  initialItem.setAttribute("aria-level", args.AriaLevel);
  initialItem.setAttribute("mutable", args.mutable);
  initialItem.addEventListener("ifxOpen", action("ifxOpen"));
  initialItem.addEventListener("ifxClose", action("ifxClose"));
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
    item.setAttribute("aria-level", args.AriaLevel);
    item.setAttribute("mutable", args.mutable);
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
}`,...n.parameters?.docs?.source}}};const u=["Default"],c=Object.freeze(Object.defineProperty({__proto__:null,Default:n,__namedExportsOrder:u,default:r},Symbol.toStringTag,{value:"Module"}));export{c as A,n as D};
