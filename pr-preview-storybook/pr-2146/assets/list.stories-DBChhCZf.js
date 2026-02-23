const{action:r}=__STORYBOOK_MODULE_ACTIONS__,u={title:"Components/List",tags:["autodocs"],parameters:{docs:{page:null}},args:{name:"checkbox-list",maxVisibleItems:5,type:"checkbox"},argTypes:{type:{description:"Type options currently available: Checkbox and Radio button",options:["checkbox","radio-button"],control:{type:"radio"}},ifxListUpdate:{action:"ifxListUpdate",description:"Custom event emitted when the selected items in the list change",table:{type:{summary:"Framework integration",detail:`React: onIfxListUpdate={handleChange}
Vue:@ifxListUpdate="handleChange"
Angular:(ifxListUpdate)="handleChange()"
VanillaJs:.addEventListener("ifxListUpdate", (event) => {//handle change});`}}}}},l=s=>{const e=document.createElement("ifx-list");e.setAttribute("name",s.name),e.setAttribute("max-visible-items",s.maxVisibleItems),e.setAttribute("type",s.type);for(let t=1;t<=7;t++){const i=document.createElement("ifx-list-entry");i.setAttribute("type",s.type),i.setAttribute("label",`Checkbox ${t}`),i.setAttribute("value","false"),i.setAttribute("slot",`slot${t}`),i.textContent=`Checkbox ${t}`,e.appendChild(i)}return e.addEventListener("ifxListUpdate",r("ifxListUpdate")),setTimeout(()=>{const t=document.createElement("ifx-list-entry");t.setAttribute("type",s.type),t.setAttribute("label","Checkbox 8"),t.setAttribute("value","false"),t.setAttribute("slot","slot8"),t.textContent="Checkbox 8",e.appendChild(t)},3e3),e},n=l.bind({});n.args={name:"checkbox-list",type:"checkbox"};const o=s=>{s.type="radio-button";const e=document.createElement("ifx-list");e.setAttribute("name",s.name),e.setAttribute("max-visible-items",s.maxVisibleItems),e.setAttribute("type",s.type);for(let t=1;t<=7;t++){const i=document.createElement("ifx-list-entry");i.setAttribute("type",s.type),i.setAttribute("label",`Radio Button ${t}`),i.setAttribute("value","false"),i.setAttribute("slot",`slot${t}`),i.textContent=`Radio Button ${t}`,e.appendChild(i)}return e.addEventListener("ifxListUpdate",r("ifxListUpdate")),e},a=o.bind({});a.args={name:"radio-button-list",type:"radio-button"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => {
  const list = document.createElement("ifx-list");
  list.setAttribute("name", args.name);
  list.setAttribute("max-visible-items", args.maxVisibleItems);
  list.setAttribute("type", args.type);
  for (let i = 1; i <= 7; i++) {
    const listEntry = document.createElement("ifx-list-entry");
    listEntry.setAttribute("type", args.type);
    listEntry.setAttribute("label", \`Checkbox \${i}\`);
    listEntry.setAttribute("value", "false");
    listEntry.setAttribute("slot", \`slot\${i}\`); // Assign a unique slot name to each entry
    listEntry.textContent = \`Checkbox \${i}\`;
    list.appendChild(listEntry);
  }
  list.addEventListener("ifxListUpdate", action("ifxListUpdate"));

  // Add a new list entry after 3 seconds
  setTimeout(() => {
    const listEntry = document.createElement("ifx-list-entry");
    listEntry.setAttribute("type", args.type);
    listEntry.setAttribute("label", \`Checkbox 8\`);
    listEntry.setAttribute("value", "false");
    listEntry.setAttribute("slot", \`slot8\`); // Assign a unique slot name to the new entry
    listEntry.textContent = \`Checkbox 8\`;
    list.appendChild(listEntry);
  }, 3000);
  return list;
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => {
  args.type = "radio-button";
  const list = document.createElement("ifx-list");
  list.setAttribute("name", args.name);
  list.setAttribute("max-visible-items", args.maxVisibleItems);
  list.setAttribute("type", args.type);
  for (let i = 1; i <= 7; i++) {
    const listEntry = document.createElement("ifx-list-entry");
    listEntry.setAttribute("type", args.type);
    listEntry.setAttribute("label", \`Radio Button \${i}\`);
    listEntry.setAttribute("value", "false");
    listEntry.setAttribute("slot", \`slot\${i}\`); // Assign a unique slot name to each entry
    listEntry.textContent = \`Radio Button \${i}\`;
    list.appendChild(listEntry);
  }
  list.addEventListener("ifxListUpdate", action("ifxListUpdate"));
  return list;
}`,...a.parameters?.docs?.source}}};const c=["CheckboxList","RadioButtonList"];export{n as CheckboxList,a as RadioButtonList,c as __namedExportsOrder,u as default};
