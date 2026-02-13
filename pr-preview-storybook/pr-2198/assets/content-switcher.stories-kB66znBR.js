import{i as l}from"./icons-C_9-zI1i.js";const{action:m}=__STORYBOOK_MODULE_ACTIONS__,h={title:"Components/Content Switcher",tags:["autodocs"],args:{amountOfItems:4,label:"Item",value:"item",selected:!1,icon:"applications-16"},argTypes:{amountOfItems:{name:"Amount of Items",control:{type:"number"},description:"Set the number of content-switcher-items to be rendered.",table:{category:"story controls",type:{summary:"number"}}},label:{name:"Label of Content Switcher Item",control:{type:"text"},description:"Set the label of the *<ifx-content-switcher-item>*.",table:{category:"story controls",type:{summary:"string"}}},value:{control:{type:"text"},description:"Set the value of the content-switcher-item.",table:{category:"content-switcher-item props",type:{summary:"string"}}},selected:{control:{type:"boolean"},description:"Set the selected state of the content-switcher-item. Only one item can be selected at the time. If there initially exists more than one selected item, then only the first item will be selected.",table:{category:"content-switcher-item props",defaultValue:{summary:"false"},type:{summary:"boolean"}}},icon:{description:"The icon of the content-switcher-item.",options:Object.keys(l),control:{type:"select"},table:{category:"ifx-icon props",type:{summary:"string"}}},ifxChange:{action:"ifxChange",description:"Custom event emitted when a different content-switcher-item gets selected. Contains the value of the previous and the new selected item.",table:{category:"custom events",type:{summary:"Framework integration",detail:`React: onIfxChange={handleChange}
Vue:@ifxChange="handleChange"
Angular:(ifxChange)="handleChange()"
VanillaJs:.addEventListener("ifxChange", (event) => {//handle change});`}}}}},d=({amountOfItems:o,label:a,value:r,icon:c,selected:s})=>{const i=document.createElement("ifx-content-switcher");for(let e=0;e<o;e++){const n=document.createElement("ifx-content-switcher-item");n.setAttribute("value",`${r} ${e+1}`),n.innerHTML=`
      <ifx-icon icon="${c}"></ifx-icon> ${a} ${e+1}
    `,e===1&&s&&n.setAttribute("selected","true"),i.appendChild(n)}return i.addEventListener("ifxChange",m("ifxChange")),i},t=d.bind({});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
  amountOfItems,
  label,
  value,
  icon,
  selected
}) => {
  const element = document.createElement("ifx-content-switcher");
  for (let i = 0; i < amountOfItems; i++) {
    const item = document.createElement("ifx-content-switcher-item");
    item.setAttribute("value", \`\${value} \${i + 1}\`);
    item.innerHTML = \`
      <ifx-icon icon="\${icon}"></ifx-icon> \${label} \${i + 1}
    \`;
    if (i === 1 && selected) {
      item.setAttribute("selected", "true");
    }
    element.appendChild(item);
  }
  element.addEventListener("ifxChange", action("ifxChange"));
  return element;
}`,...t.parameters?.docs?.source}}};const u=["Default"],p=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:u,default:h},Symbol.toStringTag,{value:"Module"}));export{p as C};
