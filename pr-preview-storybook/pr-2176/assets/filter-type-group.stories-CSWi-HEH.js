const{action:l}=__STORYBOOK_MODULE_ACTIONS__,a={title:"Components/Filter Type Group",tags:["dev"]},n=[{filterName:"Filter 1",value:!0},{filterName:"Filter 2",value:!1},{filterName:"Filter 3",value:!1},{filterName:"Filter 4",value:!1},{filterName:"Filter 5",value:!0},{filterName:"Filter 6",value:!1},{filterName:"Filter 7",value:!1},{filterName:"Filter 8",value:!1}],i=()=>n.map((e,r)=>r===0?`
          <ifx-list-entry slot="slot${r}" label="${e.filterName}" value="${e.value?"true":"false"}"></ifx-list-entry>`:`
          <ifx-list-entry slot="slot${r}" label="${e.filterName}" value="${e.value?"true":"false"}"></ifx-list-entry>`).join(""),t=()=>{const e=document.createElement("div");return e.innerHTML=`
  <ifx-filter-type-group>
    <div slot="filter-search">
      <ifx-filter-search filter-orientation="sidebar" filter-name="Your filter name"></ifx-filter-search>
    </div>
    <div slot="filter-accordion">
      <ifx-filter-accordion filter-group-name="Filter group 1">
        <ifx-list slot="list" type="checkbox" name="Filter group 1" max-visible-items="10">${i()}
        </ifx-list>
      </ifx-filter-accordion>
      <ifx-filter-accordion filter-group-name="Filter group 2">
        <ifx-list slot="list" type="radio-button" name="Filter group 2" max-visible-items="6">${i()}
        </ifx-list>
      </ifx-filter-accordion>
    </div>
  </ifx-filter-type-group>
`,e.querySelector("ifx-filter-type-group").addEventListener("ifxSidebarFilterChange",l("ifxSidebarFilterChange")),e};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = \`
  <ifx-filter-type-group>
    <div slot="filter-search">
      <ifx-filter-search filter-orientation="sidebar" filter-name="Your filter name"></ifx-filter-search>
    </div>
    <div slot="filter-accordion">
      <ifx-filter-accordion filter-group-name="Filter group 1">
        <ifx-list slot="list" type="checkbox" name="Filter group 1" max-visible-items="10">\${generateFilterEntries()}
        </ifx-list>
      </ifx-filter-accordion>
      <ifx-filter-accordion filter-group-name="Filter group 2">
        <ifx-list slot="list" type="radio-button" name="Filter group 2" max-visible-items="6">\${generateFilterEntries()}
        </ifx-list>
      </ifx-filter-accordion>
    </div>
  </ifx-filter-type-group>
\`;
  const element = wrapper.querySelector("ifx-filter-type-group") as HTMLElement;
  element.addEventListener("ifxSidebarFilterChange", action("ifxSidebarFilterChange"));
  return wrapper;
}`,...t.parameters?.docs?.source}}};const o=["Default"],f=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:o,default:a},Symbol.toStringTag,{value:"Module"}));export{t as D,f as F};
