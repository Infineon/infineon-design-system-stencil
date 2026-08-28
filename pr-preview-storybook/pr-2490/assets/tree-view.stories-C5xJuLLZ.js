const{action:r}=__STORYBOOK_MODULE_ACTIONS__,o=l=>{const e=["label","disableAllItems","expandAllItems","ariaLabelText","value"],t={};for(const a of e)l.includes(a)||(t[a]={table:{disable:!0}});return t},f={ifxTreeViewExpandAllChange:{table:{disable:!0}},ifxTreeViewDisableAllChange:{table:{disable:!0}},ifxTreeViewItemExpandChange:{table:{disable:!0}},ifxTreeViewItemCheckChange:{table:{disable:!0}},ifxTreeViewItemDisableChange:{table:{disable:!0}}},x={title:"Components/Tree View",tags:["autodocs"],parameters:{controls:{expanded:!0},docs:{description:{component:"Tree View component with nested items, checkboxes, keyboard navigation, and accessibility."}}},argTypes:{disableAllItems:{control:"boolean",description:"Disables all tree items.",table:{category:"Function",defaultValue:{summary:"false"}}},expandAllItems:{control:"boolean",description:"Expands all tree items.",table:{category:"Function",defaultValue:{summary:"false"}}},initiallyExpanded:{table:{category:"Function",type:{summary:"boolean"},defaultValue:{summary:"false"}},description:"Expands this tree item initially (set as attribute on the item). No interactive control.",control:!1},initiallySelected:{table:{category:"Function",type:{summary:"boolean"},defaultValue:{summary:"false"}},description:"Selects this tree item initially (set as attribute on the item). No interactive control.",control:!1},disableItem:{table:{category:"Function",type:{summary:"boolean"},defaultValue:{summary:"false"}},description:"Disables this tree item (set as attribute on the item). No interactive control.",control:!1},value:{control:!1,table:{category:"Function",type:{summary:"string"},defaultValue:{summary:"undefined"}},description:"Optional value for each tree item (set as attribute on the item). No interactive control."},label:{control:"text",description:"Label / Heading for tree view.",table:{category:"Label",defaultValue:{summary:"false"}}},ariaLabelText:{control:"text",description:"ARIA label text for the tree view.",table:{category:"Aria Labels",defaultValue:{summary:"Tree View"}}},ariaLabelItem:{control:"text",description:"ARIA label for all tree view items.",table:{category:"Aria Labels",defaultValue:{summary:"Tree Item"}}},ifxTreeViewExpandAllChange:{action:"ifxTreeViewExpandAllChange",table:{category:"Custom Events"},description:"Fired when expandAllItems changes."},ifxTreeViewDisableAllChange:{action:"ifxTreeViewDisableAllChange",table:{category:"Custom Events"},description:"Fired when disableAllItems changes."},ifxTreeViewItemExpandChange:{action:"ifxTreeViewItemExpandChange",table:{category:"Custom Events"},description:"Fired when a tree item is expanded/collapsed. For parent items, includes affectedItems array with all affected parent descendants."},ifxTreeViewItemCheckChange:{action:"ifxTreeViewItemCheckChange",table:{category:"Custom Events"},description:"Fired when a tree item is checked/unchecked. For parent items, includes affectedChildItems array with all affected descendants."},ifxTreeViewItemDisableChange:{action:"ifxTreeViewItemDisableChange",table:{category:"Custom Events"},description:"Fired when a tree item is disabled/enabled."}}},v=l=>{const e=document.createElement("ifx-tree-view");l.label&&e.setAttribute("label",l.label),e.setAttribute("aria-label-text",l.ariaLabelText),l.disableAllItems?e.setAttribute("disable-all-items","true"):e.removeAttribute("disable-all-items"),l.expandAllItems?e.setAttribute("expand-all-items","true"):e.removeAttribute("expand-all-items");const t=l.ariaLabelItem?`aria-label="${l.ariaLabelItem}"`:"";return e.innerHTML=`
    <ifx-tree-view-item initially-expanded="true" value="root-folder" ${t}>
      Root Folder
      <ifx-tree-view-item slot="children" initially-expanded="true" value="subfolder-1" ${t}>
        Subfolder 1
        <ifx-tree-view-item slot="children" value="file-1-1" ${t}>File 1-1.txt</ifx-tree-view-item>
        <ifx-tree-view-item slot="children" value="file-1-2" ${t}>File 1-2.txt</ifx-tree-view-item>
        <ifx-tree-view-item slot="children" value="subfolder-1-1" ${t}>
          Subfolder 1-1
          <ifx-tree-view-item slot="children" value="file-1-1-1" ${t}>File 1-1-1.txt</ifx-tree-view-item>
          <ifx-tree-view-item slot="children" value="file-1-1-2" ${t}>File 1-1-2.txt</ifx-tree-view-item>
        </ifx-tree-view-item>
      </ifx-tree-view-item>
      <ifx-tree-view-item slot="children" value="subfolder-2" ${t}>
        Subfolder 2
        <ifx-tree-view-item slot="children" value="file-2-1" ${t}>File 2-1.txt</ifx-tree-view-item>
        <ifx-tree-view-item slot="children" value="subfolder-2-1" ${t}>
          Subfolder 2-1
          <ifx-tree-view-item slot="children" value="file-2-1-1" ${t}>File 2-1-1.txt</ifx-tree-view-item>
          <ifx-tree-view-item slot="children" value="subfolder-2-1-1" ${t}>
            Subfolder 2-1-1
            <ifx-tree-view-item slot="children" value="file-2-1-1-1" ${t}>File 2-1-1-1.txt</ifx-tree-view-item>
          </ifx-tree-view-item>
        </ifx-tree-view-item>
      </ifx-tree-view-item>
      <ifx-tree-view-item slot="children" value="file-at-root" ${t}>File at root.txt</ifx-tree-view-item>
    </ifx-tree-view-item>
    <ifx-tree-view-item value="another-root" ${t}>
      Another Root Folder
      <ifx-tree-view-item slot="children" value="file-a" ${t}>File A.txt</ifx-tree-view-item>
      <ifx-tree-view-item slot="children" value="file-b" ${t}>File B.txt</ifx-tree-view-item>
    </ifx-tree-view-item>
    <ifx-tree-view-item value="single-file" ${t}>Single File</ifx-tree-view-item>
  `,e.addEventListener("ifxTreeViewExpandAllChange",r("ifxTreeViewExpandAllChange")),e.addEventListener("ifxTreeViewDisableAllChange",r("ifxTreeViewDisableAllChange")),e.addEventListener("ifxTreeViewItemExpandChange",a=>{const i=a;r("ifxTreeViewItemExpandChange")({expanded:i.detail.expanded,value:i.detail.value,affectedItems:i.detail.affectedItems||[]})}),e.addEventListener("ifxTreeViewItemCheckChange",a=>{const i=a;r("ifxTreeViewItemCheckChange")({checked:i.detail.checked,indeterminate:i.detail.indeterminate,value:i.detail.value,affectedChildItems:i.detail.affectedChildItems||[],level:i.detail.level,disabled:i.detail.disabled})}),e.addEventListener("ifxTreeViewItemDisableChange",r("ifxTreeViewItemDisableChange")),e},m=v.bind({});m.args={disableAllItems:!1,expandAllItems:!1,label:"Tree Example",ariaLabelText:"Tree View",ariaLabelItem:"Tree Item"};m.argTypes={...o(["label","disableAllItems","expandAllItems","ariaLabelText","value"]),...f,ifxTreeViewExpandAllChange:{action:"ifxTreeViewExpandAllChange",table:{category:"Custom Events"},description:"Fired when expandAllItems changes."},ifxTreeViewDisableAllChange:{action:"ifxTreeViewDisableAllChange",table:{category:"Custom Events"},description:"Fired when disableAllItems changes."},ifxTreeViewItemExpandChange:{action:"ifxTreeViewItemExpandChange",table:{category:"Custom Events"},description:"Fired when a tree item is expanded/collapsed. For parent items, includes affectedItems array with all affected parent descendants."},ifxTreeViewItemCheckChange:{action:"ifxTreeViewItemCheckChange",table:{category:"Custom Events"},description:"Fired when a tree item is checked/unchecked. For parent items, includes affectedChildItems array with all affected descendants."},ifxTreeViewItemDisableChange:{action:"ifxTreeViewItemDisableChange",table:{category:"Custom Events"},description:"Fired when a tree item is disabled/enabled."}};const d=l=>{const e=l.ariaLabelItem?`aria-label="${l.ariaLabelItem}"`:"",t=document.createElement("div");t.style.maxWidth="225px",t.style.border="1px solid #ccc",t.style.padding="8px",t.style.overflow="auto";const a=document.createElement("ifx-tree-view");return a.setAttribute("label",l.label),a.setAttribute("aria-label-text",l.ariaLabelText),l.disableAllItems&&a.setAttribute("disable-all-items","true"),l.expandAllItems&&a.setAttribute("expand-all-items","true"),a.innerHTML=`
    <ifx-tree-view-item initially-expanded="true" value="root-folder" ${e}>
      Root Folder
      <ifx-tree-view-item slot="children" initially-expanded="true" value="subfolder-1" ${e}>
        Subfolder 1
        <ifx-tree-view-item slot="children" value="file-1-1" ${e}>File 1-1.txt</ifx-tree-view-item>
        <ifx-tree-view-item slot="children" value="file-1-2" ${e}>File 1-2.txt</ifx-tree-view-item>
        <ifx-tree-view-item slot="children" value="subfolder-1-1" ${e}>
          Subfolder 1-1
          <ifx-tree-view-item slot="children" value="file-1-1-1" ${e}>File 1-1-1.txt</ifx-tree-view-item>
          <ifx-tree-view-item slot="children" value="file-1-1-2" ${e}>File 1-1-2.txt</ifx-tree-view-item>
        </ifx-tree-view-item>
      </ifx-tree-view-item>
      <ifx-tree-view-item slot="children" value="subfolder-2" ${e}>
        Subfolder 2
        <ifx-tree-view-item slot="children" value="file-2-1" ${e}>File 2-1.txt</ifx-tree-view-item>
        <ifx-tree-view-item slot="children" value="subfolder-2-1" ${e}>
          Subfolder 2-1
          <ifx-tree-view-item slot="children" value="file-2-1-1" ${e}>File 2-1-1.txt</ifx-tree-view-item>
          <ifx-tree-view-item slot="children" value="subfolder-2-1-1" ${e}>
            Subfolder 2-1-1
            <ifx-tree-view-item slot="children" value="file-2-1-1-1" ${e}>File 2-1-1-1.txt</ifx-tree-view-item>
          </ifx-tree-view-item>
        </ifx-tree-view-item>
      </ifx-tree-view-item>
      <ifx-tree-view-item slot="children" value="file-at-root" ${e}>File at root.txt</ifx-tree-view-item>
    </ifx-tree-view-item>
    <ifx-tree-view-item value="another-root" ${e}>
      Another Root Folder
      <ifx-tree-view-item slot="children" value="file-a" ${e}>File A.txt</ifx-tree-view-item>
      <ifx-tree-view-item slot="children" value="file-b" ${e}>File B.txt</ifx-tree-view-item>
    </ifx-tree-view-item>
    <ifx-tree-view-item value="single-file" ${e}>Single File</ifx-tree-view-item>
  `,a.addEventListener("ifxTreeViewExpandAllChange",r("ifxTreeViewExpandAllChange")),a.addEventListener("ifxTreeViewDisableAllChange",r("ifxTreeViewDisableAllChange")),a.addEventListener("ifxTreeViewItemExpandChange",i=>{const n=i;r("ifxTreeViewItemExpandChange")({expanded:n.detail.expanded,value:n.detail.value,affectedItems:n.detail.affectedItems||[]})}),a.addEventListener("ifxTreeViewItemCheckChange",i=>{const n=i;r("ifxTreeViewItemCheckChange")({checked:n.detail.checked,indeterminate:n.detail.indeterminate,value:n.detail.value,affectedChildItems:n.detail.affectedChildItems||[],level:n.detail.level,disabled:n.detail.disabled})}),a.addEventListener("ifxTreeViewItemDisableChange",r("ifxTreeViewItemDisableChange")),t.appendChild(a),t};d.args={disableAllItems:!1,expandAllItems:!1,label:"Tree Example",ariaLabelText:"Tree View",ariaLabelItem:"Tree Item"};d.storyName="TreeView with scrollbar";d.parameters={controls:{disable:!0}};const s=l=>{const e=document.createElement("ifx-tree-view");l.label&&e.setAttribute("label",l.label),e.setAttribute("aria-label-text",l.ariaLabelText);const t=l.ariaLabelItem?`aria-label="${l.ariaLabelItem}"`:"";return e.innerHTML=`
    <ifx-tree-view-item value="file-1" ${t}>File</ifx-tree-view-item>
    <ifx-tree-view-item value="file-disabled" ${t} disable-item="true">File disabled</ifx-tree-view-item>
    <ifx-tree-view-item initially-expanded="true" value="folder-expanded" ${t}>
      Folder initially expanded
      <ifx-tree-view-item slot="children" initially-selected="true" value="file-selected" ${t}>File</ifx-tree-view-item>
      <ifx-tree-view-item slot="children" value="file-normal" ${t}>File</ifx-tree-view-item>
    </ifx-tree-view-item>
    <ifx-tree-view-item value="item-1" ${t}>Normal Item</ifx-tree-view-item>
    <ifx-tree-view-item value="item-2" ${t}>Normal Item</ifx-tree-view-item>
  `,e.addEventListener("ifxTreeViewExpandAllChange",r("ifxTreeViewExpandAllChange")),e.addEventListener("ifxTreeViewDisableAllChange",r("ifxTreeViewDisableAllChange")),e.addEventListener("ifxTreeViewItemExpandChange",a=>{const i=a;r("ifxTreeViewItemExpandChange")({expanded:i.detail.expanded,value:i.detail.value,affectedItems:i.detail.affectedItems||[]})}),e.addEventListener("ifxTreeViewItemCheckChange",a=>{const i=a;r("ifxTreeViewItemCheckChange")({checked:i.detail.checked,indeterminate:i.detail.indeterminate,value:i.detail.value,affectedChildItems:i.detail.affectedChildItems||[],level:i.detail.level,disabled:i.detail.disabled})}),e.addEventListener("ifxTreeViewItemDisableChange",r("ifxTreeViewItemDisableChange")),e};s.args={disableAllItems:!1,expandAllItems:!1,label:"Tree Example",ariaLabelText:"Tree View",ariaLabelItem:"Tree Item"};s.storyName="Single Item Expanded & disabled";s.parameters={controls:{disable:!0}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => {
  const el = document.createElement("ifx-tree-view");
  if (args.label) el.setAttribute("label", args.label);
  el.setAttribute("aria-label-text", args.ariaLabelText);
  if (args.disableAllItems) el.setAttribute("disable-all-items", "true");else el.removeAttribute("disable-all-items");
  if (args.expandAllItems) el.setAttribute("expand-all-items", "true");else el.removeAttribute("expand-all-items");
  const ariaLabelItemAttr = args.ariaLabelItem ? \`aria-label="\${args.ariaLabelItem}"\` : "";
  el.innerHTML = \`
    <ifx-tree-view-item initially-expanded="true" value="root-folder" \${ariaLabelItemAttr}>
      Root Folder
      <ifx-tree-view-item slot="children" initially-expanded="true" value="subfolder-1" \${ariaLabelItemAttr}>
        Subfolder 1
        <ifx-tree-view-item slot="children" value="file-1-1" \${ariaLabelItemAttr}>File 1-1.txt</ifx-tree-view-item>
        <ifx-tree-view-item slot="children" value="file-1-2" \${ariaLabelItemAttr}>File 1-2.txt</ifx-tree-view-item>
        <ifx-tree-view-item slot="children" value="subfolder-1-1" \${ariaLabelItemAttr}>
          Subfolder 1-1
          <ifx-tree-view-item slot="children" value="file-1-1-1" \${ariaLabelItemAttr}>File 1-1-1.txt</ifx-tree-view-item>
          <ifx-tree-view-item slot="children" value="file-1-1-2" \${ariaLabelItemAttr}>File 1-1-2.txt</ifx-tree-view-item>
        </ifx-tree-view-item>
      </ifx-tree-view-item>
      <ifx-tree-view-item slot="children" value="subfolder-2" \${ariaLabelItemAttr}>
        Subfolder 2
        <ifx-tree-view-item slot="children" value="file-2-1" \${ariaLabelItemAttr}>File 2-1.txt</ifx-tree-view-item>
        <ifx-tree-view-item slot="children" value="subfolder-2-1" \${ariaLabelItemAttr}>
          Subfolder 2-1
          <ifx-tree-view-item slot="children" value="file-2-1-1" \${ariaLabelItemAttr}>File 2-1-1.txt</ifx-tree-view-item>
          <ifx-tree-view-item slot="children" value="subfolder-2-1-1" \${ariaLabelItemAttr}>
            Subfolder 2-1-1
            <ifx-tree-view-item slot="children" value="file-2-1-1-1" \${ariaLabelItemAttr}>File 2-1-1-1.txt</ifx-tree-view-item>
          </ifx-tree-view-item>
        </ifx-tree-view-item>
      </ifx-tree-view-item>
      <ifx-tree-view-item slot="children" value="file-at-root" \${ariaLabelItemAttr}>File at root.txt</ifx-tree-view-item>
    </ifx-tree-view-item>
    <ifx-tree-view-item value="another-root" \${ariaLabelItemAttr}>
      Another Root Folder
      <ifx-tree-view-item slot="children" value="file-a" \${ariaLabelItemAttr}>File A.txt</ifx-tree-view-item>
      <ifx-tree-view-item slot="children" value="file-b" \${ariaLabelItemAttr}>File B.txt</ifx-tree-view-item>
    </ifx-tree-view-item>
    <ifx-tree-view-item value="single-file" \${ariaLabelItemAttr}>Single File</ifx-tree-view-item>
  \`;
  el.addEventListener("ifxTreeViewExpandAllChange", action("ifxTreeViewExpandAllChange"));
  el.addEventListener("ifxTreeViewDisableAllChange", action("ifxTreeViewDisableAllChange"));
  el.addEventListener("ifxTreeViewItemExpandChange", event => {
    const customEvent = event as CustomEvent;
    action("ifxTreeViewItemExpandChange")({
      expanded: customEvent.detail.expanded,
      value: customEvent.detail.value,
      affectedItems: customEvent.detail.affectedItems || []
    });
  });
  el.addEventListener("ifxTreeViewItemCheckChange", event => {
    const customEvent = event as CustomEvent;
    action("ifxTreeViewItemCheckChange")({
      checked: customEvent.detail.checked,
      indeterminate: customEvent.detail.indeterminate,
      value: customEvent.detail.value,
      affectedChildItems: customEvent.detail.affectedChildItems || [],
      level: customEvent.detail.level,
      disabled: customEvent.detail.disabled
    });
  });
  el.addEventListener("ifxTreeViewItemDisableChange", action("ifxTreeViewItemDisableChange"));
  return el;
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => {
  const ariaLabelItemAttr = args.ariaLabelItem ? \`aria-label="\${args.ariaLabelItem}"\` : "";
  const wrapper = document.createElement("div");
  wrapper.style.maxWidth = "225px";
  wrapper.style.border = "1px solid #ccc";
  wrapper.style.padding = "8px";
  wrapper.style.overflow = "auto";
  const el = document.createElement("ifx-tree-view");
  el.setAttribute("label", args.label);
  el.setAttribute("aria-label-text", args.ariaLabelText);
  if (args.disableAllItems) el.setAttribute("disable-all-items", "true");
  if (args.expandAllItems) el.setAttribute("expand-all-items", "true");
  el.innerHTML = \`
    <ifx-tree-view-item initially-expanded="true" value="root-folder" \${ariaLabelItemAttr}>
      Root Folder
      <ifx-tree-view-item slot="children" initially-expanded="true" value="subfolder-1" \${ariaLabelItemAttr}>
        Subfolder 1
        <ifx-tree-view-item slot="children" value="file-1-1" \${ariaLabelItemAttr}>File 1-1.txt</ifx-tree-view-item>
        <ifx-tree-view-item slot="children" value="file-1-2" \${ariaLabelItemAttr}>File 1-2.txt</ifx-tree-view-item>
        <ifx-tree-view-item slot="children" value="subfolder-1-1" \${ariaLabelItemAttr}>
          Subfolder 1-1
          <ifx-tree-view-item slot="children" value="file-1-1-1" \${ariaLabelItemAttr}>File 1-1-1.txt</ifx-tree-view-item>
          <ifx-tree-view-item slot="children" value="file-1-1-2" \${ariaLabelItemAttr}>File 1-1-2.txt</ifx-tree-view-item>
        </ifx-tree-view-item>
      </ifx-tree-view-item>
      <ifx-tree-view-item slot="children" value="subfolder-2" \${ariaLabelItemAttr}>
        Subfolder 2
        <ifx-tree-view-item slot="children" value="file-2-1" \${ariaLabelItemAttr}>File 2-1.txt</ifx-tree-view-item>
        <ifx-tree-view-item slot="children" value="subfolder-2-1" \${ariaLabelItemAttr}>
          Subfolder 2-1
          <ifx-tree-view-item slot="children" value="file-2-1-1" \${ariaLabelItemAttr}>File 2-1-1.txt</ifx-tree-view-item>
          <ifx-tree-view-item slot="children" value="subfolder-2-1-1" \${ariaLabelItemAttr}>
            Subfolder 2-1-1
            <ifx-tree-view-item slot="children" value="file-2-1-1-1" \${ariaLabelItemAttr}>File 2-1-1-1.txt</ifx-tree-view-item>
          </ifx-tree-view-item>
        </ifx-tree-view-item>
      </ifx-tree-view-item>
      <ifx-tree-view-item slot="children" value="file-at-root" \${ariaLabelItemAttr}>File at root.txt</ifx-tree-view-item>
    </ifx-tree-view-item>
    <ifx-tree-view-item value="another-root" \${ariaLabelItemAttr}>
      Another Root Folder
      <ifx-tree-view-item slot="children" value="file-a" \${ariaLabelItemAttr}>File A.txt</ifx-tree-view-item>
      <ifx-tree-view-item slot="children" value="file-b" \${ariaLabelItemAttr}>File B.txt</ifx-tree-view-item>
    </ifx-tree-view-item>
    <ifx-tree-view-item value="single-file" \${ariaLabelItemAttr}>Single File</ifx-tree-view-item>
  \`;
  el.addEventListener("ifxTreeViewExpandAllChange", action("ifxTreeViewExpandAllChange"));
  el.addEventListener("ifxTreeViewDisableAllChange", action("ifxTreeViewDisableAllChange"));
  el.addEventListener("ifxTreeViewItemExpandChange", event => {
    const customEvent = event as CustomEvent;
    action("ifxTreeViewItemExpandChange")({
      expanded: customEvent.detail.expanded,
      value: customEvent.detail.value,
      affectedItems: customEvent.detail.affectedItems || []
    });
  });
  el.addEventListener("ifxTreeViewItemCheckChange", event => {
    const customEvent = event as CustomEvent;
    action("ifxTreeViewItemCheckChange")({
      checked: customEvent.detail.checked,
      indeterminate: customEvent.detail.indeterminate,
      value: customEvent.detail.value,
      affectedChildItems: customEvent.detail.affectedChildItems || [],
      level: customEvent.detail.level,
      disabled: customEvent.detail.disabled
    });
  });
  el.addEventListener("ifxTreeViewItemDisableChange", action("ifxTreeViewItemDisableChange"));
  wrapper.appendChild(el);
  return wrapper;
}`,...d.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => {
  const el = document.createElement("ifx-tree-view");
  if (args.label) el.setAttribute("label", args.label);
  el.setAttribute("aria-label-text", args.ariaLabelText);
  const ariaLabelItemAttr = args.ariaLabelItem ? \`aria-label="\${args.ariaLabelItem}"\` : "";
  el.innerHTML = \`
    <ifx-tree-view-item value="file-1" \${ariaLabelItemAttr}>File</ifx-tree-view-item>
    <ifx-tree-view-item value="file-disabled" \${ariaLabelItemAttr} disable-item="true">File disabled</ifx-tree-view-item>
    <ifx-tree-view-item initially-expanded="true" value="folder-expanded" \${ariaLabelItemAttr}>
      Folder initially expanded
      <ifx-tree-view-item slot="children" initially-selected="true" value="file-selected" \${ariaLabelItemAttr}>File</ifx-tree-view-item>
      <ifx-tree-view-item slot="children" value="file-normal" \${ariaLabelItemAttr}>File</ifx-tree-view-item>
    </ifx-tree-view-item>
    <ifx-tree-view-item value="item-1" \${ariaLabelItemAttr}>Normal Item</ifx-tree-view-item>
    <ifx-tree-view-item value="item-2" \${ariaLabelItemAttr}>Normal Item</ifx-tree-view-item>
  \`;
  el.addEventListener("ifxTreeViewExpandAllChange", action("ifxTreeViewExpandAllChange"));
  el.addEventListener("ifxTreeViewDisableAllChange", action("ifxTreeViewDisableAllChange"));
  el.addEventListener("ifxTreeViewItemExpandChange", event => {
    const customEvent = event as CustomEvent;
    action("ifxTreeViewItemExpandChange")({
      expanded: customEvent.detail.expanded,
      value: customEvent.detail.value,
      affectedItems: customEvent.detail.affectedItems || []
    });
  });
  el.addEventListener("ifxTreeViewItemCheckChange", event => {
    const customEvent = event as CustomEvent;
    action("ifxTreeViewItemCheckChange")({
      checked: customEvent.detail.checked,
      indeterminate: customEvent.detail.indeterminate,
      value: customEvent.detail.value,
      affectedChildItems: customEvent.detail.affectedChildItems || [],
      level: customEvent.detail.level,
      disabled: customEvent.detail.disabled
    });
  });
  el.addEventListener("ifxTreeViewItemDisableChange", action("ifxTreeViewItemDisableChange"));
  return el;
}`,...s.parameters?.docs?.source}}};const c=["Default","ContainerDemo","SingleItemStates"],u=Object.freeze(Object.defineProperty({__proto__:null,ContainerDemo:d,Default:m,SingleItemStates:s,__namedExportsOrder:c,default:x},Symbol.toStringTag,{value:"Module"}));export{u as T};
