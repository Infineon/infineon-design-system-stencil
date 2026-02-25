import{b as s}from"./iframe-CeSR5tSk.js";const{action:i}=__STORYBOOK_MODULE_ACTIONS__,n={title:"Components/Select/Multi Select",parameters:{controls:{expanded:!0,sort:"alpha"}},args:{name:"multiselect",disabled:!1,required:!0,showSearch:!0,showSelectAll:!0,showExpandCollapse:!0,error:!1,caption:"",label:"",placeholder:"Placeholder",showClearButton:!0,noResultsMessage:"No results found.",showNoResultsMessage:!0,searchPlaceholder:"Search",selectAllLabel:"Select all",expandLabel:"Expand",collapseLabel:"Collapse",ariaMultiSelectLabel:"Multi-select dropdown",ariaMultiSelectLabelledBy:"",ariaMultiSelectDescribedBy:"",ariaSearchLabel:"Search options",ariaClearLabel:"Clear all selections",ariaToggleLabel:"Toggle dropdown",ariaSelectAllLabel:"Select all options",ariaExpandAllLabel:"Expand all categories",ariaCollapseAllLabel:"Collapse all categories"},argTypes:{disabled:{description:"Disable the input field.",options:[!0,!1],control:{type:"boolean"},table:{category:"ifx-multiselect props",defaultValue:{summary:"false"},type:{summary:"boolean"}}},required:{description:"Marks the Generic Multi-Level Selection as required with an asterik for form submission.",table:{category:"ifx-multiselect props",defaultValue:{summary:!0}}},name:{description:"For a <*form*> element, the name attribute is  used as a reference when the data is submitted.",control:"text",table:{category:"ifx-multiselect props",defaultValue:{summary:"undefined"},type:{summary:"string"}}},showSearch:{description:"Show a search input.",options:[!0,!1],control:{type:"boolean"},table:{category:"ifx-multiselect props",defaultValue:{summary:"true"},type:{summary:"boolean"}}},showSelectAll:{description:"Show a checkbox to select all options.",options:[!0,!1],control:{type:"boolean"},table:{category:"ifx-multiselect props",defaultValue:{summary:"true"},type:{summary:"boolean"}}},showExpandCollapse:{description:"Show expand/collapse controls for nested options.",options:[!0,!1],control:{type:"boolean"},table:{category:"ifx-multiselect props",defaultValue:{summary:"true"},type:{summary:"boolean"}}},showClearButton:{description:"Shows the clear icon button.",control:"boolean",table:{category:"ifx-multiselect props",defaultValue:{summary:"true"},type:{summary:"boolean"}}},showNoResultsMessage:{description:"Show/hide the no results message when search has no matches.",options:[!0,!1],control:{type:"boolean"},table:{category:"ifx-multiselect props",defaultValue:{summary:"true"},type:{summary:"boolean"}}},error:{description:"Show error state.",options:[!0,!1],control:{type:"boolean"},table:{category:"ifx-multiselect props",defaultValue:{summary:"false"},type:{summary:"boolean"}}},label:{description:"Label over the input field.",control:"text",table:{category:"ifx-multiselect props",defaultValue:{summary:'""'},type:{summary:"string"}}},placeholder:{description:"Label inside the input field.",control:"text",table:{category:"ifx-multiselect props",defaultValue:{summary:'""'},type:{summary:"string"}}},caption:{description:"Text displayed below the select component to provide additional information.",table:{category:"ifx-multiselect props",type:{summary:"string"}}},noResultsMessage:{description:"Custom message to display when search has no results.",control:"text",table:{category:"ifx-multiselect props",defaultValue:{summary:"No results found."},type:{summary:"string"}}},searchPlaceholder:{description:"Placeholder text for the search input field.",control:"text",table:{category:"ifx-multiselect props",defaultValue:{summary:"Search"},type:{summary:"string"}}},selectAllLabel:{description:"Label text for the select all checkbox.",control:"text",table:{category:"ifx-multiselect props",defaultValue:{summary:"Select all"},type:{summary:"string"}}},expandLabel:{description:"Label text for the expand all control.",control:"text",table:{category:"ifx-multiselect props",defaultValue:{summary:"Expand"},type:{summary:"string"}}},collapseLabel:{description:"Label text for the collapse all control.",control:"text",table:{category:"ifx-multiselect props",defaultValue:{summary:"Collapse"},type:{summary:"string"}}},ariaMultiSelectLabel:{description:"ARIA label for the multiselect component.",control:"text",table:{category:"ARIA Labels",defaultValue:{summary:"Multi-select dropdown"},type:{summary:"string"}}},ariaMultiSelectLabelledBy:{description:"ID of element that labels the multiselect.",control:"text",table:{category:"ARIA Labels",defaultValue:{summary:'""'},type:{summary:"string"}}},ariaMultiSelectDescribedBy:{description:"ID of element that describes the multiselect.",control:"text",table:{category:"ARIA Labels",defaultValue:{summary:'""'},type:{summary:"string"}}},ariaSearchLabel:{description:"ARIA label for the search input field.",control:"text",table:{category:"ARIA Labels",defaultValue:{summary:"Search options"},type:{summary:"string"}}},ariaClearLabel:{description:"ARIA label for the clear all button.",control:"text",table:{category:"ARIA Labels",defaultValue:{summary:"Clear all selections"},type:{summary:"string"}}},ariaToggleLabel:{description:"ARIA label for the dropdown toggle button.",control:"text",table:{category:"ARIA Labels",defaultValue:{summary:"Toggle dropdown"},type:{summary:"string"}}},ariaSelectAllLabel:{description:"ARIA label for the select all checkbox.",control:"text",table:{category:"ARIA Labels",defaultValue:{summary:"Select all options"},type:{summary:"string"}}},ariaExpandAllLabel:{description:"ARIA label for the expand all control.",control:"text",table:{category:"ARIA Labels",defaultValue:{summary:"Expand all categories"},type:{summary:"string"}}},ariaCollapseAllLabel:{description:"ARIA label for the collapse all control.",control:"text",table:{category:"ARIA Labels",defaultValue:{summary:"Collapse all categories"},type:{summary:"string"}}},ifxSelect:{action:"ifxSelect",description:"Custom event emitted when item is selected or unselected.",table:{category:"Custom Events",type:{summary:"Framework integration",detail:`React: onIfxSelect={handleInput}
Vue:@ifxSelect="handleInput"
Angular:(ifxSelect)="handleInput()"
VanillaJs:.addEventListener("ifxSelect", (event) => {//handle input});`}}},ifxOpen:{action:"ifxOpen",description:"Custom event emitted when multiselect is opened.",table:{category:"Custom Events",type:{summary:"Framework integration",detail:`React: onIfxOpen={handleChange}
Vue:@ifxOpen="handleChange"
Angular:(ifxOpen)="handleChange()"
VanillaJs:.addEventListener("ifxOpen", (event) => {//handle change});`}}}}},c=e=>{const o=s`<ifx-multiselect
  name='${e.name}'
  ?disabled='${e.disabled}'
  ?required='${e.required}'
  ?error='${e.error}'
  caption='${e.caption}'
  label='${e.label}'
  placeholder='${e.placeholder}'
  ?show-search='${e.showSearch}'
  ?show-select-all='${e.showSelectAll}'
  ?show-expand-collapse='${e.showExpandCollapse}'
  ?show-clear-button='${e.showClearButton}'
  no-results-message='${e.noResultsMessage}'
  ?show-no-results-message='${e.showNoResultsMessage}'
  search-placeholder='${e.searchPlaceholder}'
  select-all-label='${e.selectAllLabel}'
  expand-label='${e.expandLabel}'
  collapse-label='${e.collapseLabel}'
  aria-multi-select-label='${e.ariaMultiSelectLabel}'
  aria-multi-select-labelled-by='${e.ariaMultiSelectLabelledBy}'
  aria-multi-select-described-by='${e.ariaMultiSelectDescribedBy}'
  aria-search-label='${e.ariaSearchLabel}'
  aria-clear-label='${e.ariaClearLabel}'
  aria-toggle-label='${e.ariaToggleLabel}'
  aria-select-all-label='${e.ariaSelectAllLabel}'
  aria-expand-all-label='${e.ariaExpandAllLabel}'
  aria-collapse-all-label='${e.ariaCollapseAllLabel}'>

  <ifx-multiselect-option value="category-a">
    Category A - Main Section

    <ifx-multiselect-option value="category-a-1" slot="children">
      Category A.1 - First Subsection
      <ifx-multiselect-option value="option-a-1-1" slot="children">Option A.1.1 - Basic Item</ifx-multiselect-option>
      <ifx-multiselect-option value="option-a-1-2" selected slot="children">Option A.1.2 - Preselected Item</ifx-multiselect-option>
      <ifx-multiselect-option value="option-a-1-3" slot="children">Option A.1.3 - Another Item</ifx-multiselect-option>
    </ifx-multiselect-option>

    <ifx-multiselect-option value="category-a-2" slot="children">
      Category A.2 - Second Subsection
      <ifx-multiselect-option value="option-a-2-1" slot="children">Option A.2.1 - Nested Item</ifx-multiselect-option>
      <ifx-multiselect-option value="option-a-2-2" slot="children">
        Option A.2.2 - Deep Nested Parent
        <ifx-multiselect-option value="option-a-2-2-1" slot="children">Option A.2.2.1 - Level 4 Item</ifx-multiselect-option>
        <ifx-multiselect-option value="option-a-2-2-2" slot="children">Option A.2.2.2 - Level 4 Item</ifx-multiselect-option>
        <ifx-multiselect-option value="option-a-2-2-3" slot="children">
          Option A.2.2.3 - Even Deeper
          <ifx-multiselect-option value="option-a-2-2-3-1" slot="children">Option A.2.2.3.1 - Level 5 Item</ifx-multiselect-option>
          <ifx-multiselect-option value="option-a-2-2-3-2" slot="children">Option A.2.2.3.2 - Level 5 Item</ifx-multiselect-option>
        </ifx-multiselect-option>
      </ifx-multiselect-option>
      <ifx-multiselect-option value="option-a-2-3" slot="children">Option A.2.3 - Final Nested</ifx-multiselect-option>
    </ifx-multiselect-option>

    <ifx-multiselect-option value="option-a-3" slot="children">Option A.3 - Direct Child</ifx-multiselect-option>
    <ifx-multiselect-option value="option-a-4" slot="children">Option A.4 - Another Direct Child</ifx-multiselect-option>
  </ifx-multiselect-option>

  <ifx-multiselect-option value="category-b">
    Category B - Secondary Section

    <ifx-multiselect-option value="category-b-1" slot="children">
      Category B.1 - Mixed Content
      <ifx-multiselect-option value="option-b-1-1" slot="children">Option B.1.1 - Standard Item</ifx-multiselect-option>
      <ifx-multiselect-option value="category-b-1-2" slot="children">
        Category B.1.2 - Sub-Category
        <ifx-multiselect-option value="option-b-1-2-1" slot="children">Option B.1.2.1 - Nested Choice</ifx-multiselect-option>
        <ifx-multiselect-option value="option-b-1-2-2" slot="children">Option B.1.2.2 - Nested Choice</ifx-multiselect-option>
        <ifx-multiselect-option value="option-b-1-2-3" slot="children">Option B.1.2.3 - Nested Choice</ifx-multiselect-option>
      </ifx-multiselect-option>
      <ifx-multiselect-option value="option-b-1-3" slot="children">Option B.1.3 - Standard Item</ifx-multiselect-option>
    </ifx-multiselect-option>

    <ifx-multiselect-option value="option-b-2" slot="children">Option B.2 - Standalone Item</ifx-multiselect-option>
    <ifx-multiselect-option value="option-b-3" slot="children">Option B.3 - Standalone Item</ifx-multiselect-option>
  </ifx-multiselect-option>

  <ifx-multiselect-option value="category-c">
    Category C - Complex Structure

    <ifx-multiselect-option value="category-c-1" slot="children">
      Category C.1 - Multi-Level Group
      <ifx-multiselect-option value="category-c-1-1" slot="children">
        Category C.1.1 - Sub-Group Alpha
        <ifx-multiselect-option value="option-c-1-1-1" slot="children">Option C.1.1.1 - Alpha Item 1</ifx-multiselect-option>
        <ifx-multiselect-option value="option-c-1-1-2" slot="children">Option C.1.1.2 - Alpha Item 2</ifx-multiselect-option>
      </ifx-multiselect-option>
      <ifx-multiselect-option value="category-c-1-2" slot="children">
        Category C.1.2 - Sub-Group Beta
        <ifx-multiselect-option value="option-c-1-2-1" slot="children">Option C.1.2.1 - Beta Item 1</ifx-multiselect-option>
        <ifx-multiselect-option value="option-c-1-2-2" slot="children">Option C.1.2.2 - Beta Item 2</ifx-multiselect-option>
        <ifx-multiselect-option value="option-c-1-2-3" slot="children">Option C.1.2.3 - Beta Item 3</ifx-multiselect-option>
      </ifx-multiselect-option>
      <ifx-multiselect-option value="option-c-1-3" slot="children">Option C.1.3 - Direct Item</ifx-multiselect-option>
    </ifx-multiselect-option>

    <ifx-multiselect-option value="category-c-2" slot="children">
      Category C.2 - Another Group
      <ifx-multiselect-option value="option-c-2-1" slot="children">Option C.2.1 - Group Item</ifx-multiselect-option>
      <ifx-multiselect-option value="option-c-2-2" slot="children">Option C.2.2 - Group Item</ifx-multiselect-option>
    </ifx-multiselect-option>
  </ifx-multiselect-option>

  <ifx-multiselect-option value="option-d">Option D - Top-Level Standalone</ifx-multiselect-option>

  <ifx-multiselect-option value="option-e">Option E - Top-Level Standalone</ifx-multiselect-option>

  <ifx-multiselect-option value="category-f">
    Category F - Final Section

    <ifx-multiselect-option value="option-f-1" slot="children">Option F.1 - Simple Item</ifx-multiselect-option>
    <ifx-multiselect-option value="option-f-2" slot="children">Option F.2 - Simple Item</ifx-multiselect-option>
    <ifx-multiselect-option value="category-f-3" slot="children">
      Category F.3 - Last Group
      <ifx-multiselect-option value="option-f-3-1" slot="children">Option F.3.1 - Final Nested</ifx-multiselect-option>
      <ifx-multiselect-option value="option-f-3-2" slot="children">Option F.3.2 - Final Nested</ifx-multiselect-option>
      <ifx-multiselect-option value="option-f-3-3" slot="children">Option F.3.3 - Final Nested</ifx-multiselect-option>
    </ifx-multiselect-option>
  </ifx-multiselect-option>
</ifx-multiselect>`;return setTimeout(()=>{document.querySelector("ifx-multiselect").addEventListener("ifxSelect",i("ifxSelect")),document.querySelector("ifx-multiselect").addEventListener("ifxOpen",i("ifxOpen"))},0),o},t=c.bind({});t.args={label:"Generic Multi-Level Selection",placeholder:"Select options..."};t.parameters={docs:{description:{story:"The multiselect component supports nested hierarchical options with search, select all, and expand/collapse functionality. Use slot-based syntax for defining options and their nested structure."}}};const r=e=>{const o=`<ifx-multiselect
  name='${e.name}'
  ?disabled='${e.disabled}'
  ?error='${e.error}'
  caption='${e.caption}'
  label='${e.label}'
  placeholder='${e.placeholder}'
  ?show-search='${e.showSearch}'
  ?show-select-all='${e.showSelectAll}'
  ?show-expand-collapse='${e.showExpandCollapse}'
  ?show-clear-button='${e.showClearButton}'
  no-results-message='${e.noResultsMessage}'
  ?show-no-results-message='${e.showNoResultsMessage}'
  search-placeholder='${e.searchPlaceholder}'
  select-all-label='${e.selectAllLabel}'
  expand-label='${e.expandLabel}'
  collapse-label='${e.collapseLabel}'
  aria-multi-select-label='${e.ariaMultiSelectLabel}'
  aria-multi-select-labelled-by='${e.ariaMultiSelectLabelledBy}'
  aria-multi-select-described-by='${e.ariaMultiSelectDescribedBy}'
  aria-search-label='${e.ariaSearchLabel}'
  aria-clear-label='${e.ariaClearLabel}'
  aria-toggle-label='${e.ariaToggleLabel}'
  aria-select-all-label='${e.ariaSelectAllLabel}'
  aria-expand-all-label='${e.ariaExpandAllLabel}'
  aria-collapse-all-label='${e.ariaCollapseAllLabel}'>

  <ifx-multiselect-option value="option-1">Option 1</ifx-multiselect-option>
  <ifx-multiselect-option value="option-2">Option 2</ifx-multiselect-option>
  <ifx-multiselect-option value="option-3">Option 3</ifx-multiselect-option>
  <ifx-multiselect-option value="option-4">Option 4</ifx-multiselect-option>
  <ifx-multiselect-option value="option-5">Option 5</ifx-multiselect-option>
  <ifx-multiselect-option value="option-6">Option 6</ifx-multiselect-option>
  <ifx-multiselect-option value="option-7">Option 7</ifx-multiselect-option>
  <ifx-multiselect-option value="option-8">Option 8</ifx-multiselect-option>
  <ifx-multiselect-option value="option-9">Option 9</ifx-multiselect-option>
  <ifx-multiselect-option value="option-10">Option 10</ifx-multiselect-option>
</ifx-multiselect>`;return setTimeout(()=>{const a=document.querySelectorAll("ifx-multiselect")[document.querySelectorAll("ifx-multiselect").length-1];a.addEventListener("ifxSelect",i("ifxSelect")),a.addEventListener("ifxOpen",i("ifxOpen"))},0),o},l=r.bind({});l.args={label:"Single Level Selection",placeholder:"Select options..."};l.parameters={docs:{description:{story:"A simple multiselect with single-level options - no nesting or hierarchical structure. Expand/Collapse controls are automatically hidden for single-level option lists."}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
  const template = html\`<ifx-multiselect
  name='\${args.name}'
  ?disabled='\${args.disabled}'
  ?required='\${args.required}'
  ?error='\${args.error}'
  caption='\${args.caption}'
  label='\${args.label}'
  placeholder='\${args.placeholder}'
  ?show-search='\${args.showSearch}'
  ?show-select-all='\${args.showSelectAll}'
  ?show-expand-collapse='\${args.showExpandCollapse}'
  ?show-clear-button='\${args.showClearButton}'
  no-results-message='\${args.noResultsMessage}'
  ?show-no-results-message='\${args.showNoResultsMessage}'
  search-placeholder='\${args.searchPlaceholder}'
  select-all-label='\${args.selectAllLabel}'
  expand-label='\${args.expandLabel}'
  collapse-label='\${args.collapseLabel}'
  aria-multi-select-label='\${args.ariaMultiSelectLabel}'
  aria-multi-select-labelled-by='\${args.ariaMultiSelectLabelledBy}'
  aria-multi-select-described-by='\${args.ariaMultiSelectDescribedBy}'
  aria-search-label='\${args.ariaSearchLabel}'
  aria-clear-label='\${args.ariaClearLabel}'
  aria-toggle-label='\${args.ariaToggleLabel}'
  aria-select-all-label='\${args.ariaSelectAllLabel}'
  aria-expand-all-label='\${args.ariaExpandAllLabel}'
  aria-collapse-all-label='\${args.ariaCollapseAllLabel}'>

  <ifx-multiselect-option value="category-a">
    Category A - Main Section

    <ifx-multiselect-option value="category-a-1" slot="children">
      Category A.1 - First Subsection
      <ifx-multiselect-option value="option-a-1-1" slot="children">Option A.1.1 - Basic Item</ifx-multiselect-option>
      <ifx-multiselect-option value="option-a-1-2" selected slot="children">Option A.1.2 - Preselected Item</ifx-multiselect-option>
      <ifx-multiselect-option value="option-a-1-3" slot="children">Option A.1.3 - Another Item</ifx-multiselect-option>
    </ifx-multiselect-option>

    <ifx-multiselect-option value="category-a-2" slot="children">
      Category A.2 - Second Subsection
      <ifx-multiselect-option value="option-a-2-1" slot="children">Option A.2.1 - Nested Item</ifx-multiselect-option>
      <ifx-multiselect-option value="option-a-2-2" slot="children">
        Option A.2.2 - Deep Nested Parent
        <ifx-multiselect-option value="option-a-2-2-1" slot="children">Option A.2.2.1 - Level 4 Item</ifx-multiselect-option>
        <ifx-multiselect-option value="option-a-2-2-2" slot="children">Option A.2.2.2 - Level 4 Item</ifx-multiselect-option>
        <ifx-multiselect-option value="option-a-2-2-3" slot="children">
          Option A.2.2.3 - Even Deeper
          <ifx-multiselect-option value="option-a-2-2-3-1" slot="children">Option A.2.2.3.1 - Level 5 Item</ifx-multiselect-option>
          <ifx-multiselect-option value="option-a-2-2-3-2" slot="children">Option A.2.2.3.2 - Level 5 Item</ifx-multiselect-option>
        </ifx-multiselect-option>
      </ifx-multiselect-option>
      <ifx-multiselect-option value="option-a-2-3" slot="children">Option A.2.3 - Final Nested</ifx-multiselect-option>
    </ifx-multiselect-option>

    <ifx-multiselect-option value="option-a-3" slot="children">Option A.3 - Direct Child</ifx-multiselect-option>
    <ifx-multiselect-option value="option-a-4" slot="children">Option A.4 - Another Direct Child</ifx-multiselect-option>
  </ifx-multiselect-option>

  <ifx-multiselect-option value="category-b">
    Category B - Secondary Section

    <ifx-multiselect-option value="category-b-1" slot="children">
      Category B.1 - Mixed Content
      <ifx-multiselect-option value="option-b-1-1" slot="children">Option B.1.1 - Standard Item</ifx-multiselect-option>
      <ifx-multiselect-option value="category-b-1-2" slot="children">
        Category B.1.2 - Sub-Category
        <ifx-multiselect-option value="option-b-1-2-1" slot="children">Option B.1.2.1 - Nested Choice</ifx-multiselect-option>
        <ifx-multiselect-option value="option-b-1-2-2" slot="children">Option B.1.2.2 - Nested Choice</ifx-multiselect-option>
        <ifx-multiselect-option value="option-b-1-2-3" slot="children">Option B.1.2.3 - Nested Choice</ifx-multiselect-option>
      </ifx-multiselect-option>
      <ifx-multiselect-option value="option-b-1-3" slot="children">Option B.1.3 - Standard Item</ifx-multiselect-option>
    </ifx-multiselect-option>

    <ifx-multiselect-option value="option-b-2" slot="children">Option B.2 - Standalone Item</ifx-multiselect-option>
    <ifx-multiselect-option value="option-b-3" slot="children">Option B.3 - Standalone Item</ifx-multiselect-option>
  </ifx-multiselect-option>

  <ifx-multiselect-option value="category-c">
    Category C - Complex Structure

    <ifx-multiselect-option value="category-c-1" slot="children">
      Category C.1 - Multi-Level Group
      <ifx-multiselect-option value="category-c-1-1" slot="children">
        Category C.1.1 - Sub-Group Alpha
        <ifx-multiselect-option value="option-c-1-1-1" slot="children">Option C.1.1.1 - Alpha Item 1</ifx-multiselect-option>
        <ifx-multiselect-option value="option-c-1-1-2" slot="children">Option C.1.1.2 - Alpha Item 2</ifx-multiselect-option>
      </ifx-multiselect-option>
      <ifx-multiselect-option value="category-c-1-2" slot="children">
        Category C.1.2 - Sub-Group Beta
        <ifx-multiselect-option value="option-c-1-2-1" slot="children">Option C.1.2.1 - Beta Item 1</ifx-multiselect-option>
        <ifx-multiselect-option value="option-c-1-2-2" slot="children">Option C.1.2.2 - Beta Item 2</ifx-multiselect-option>
        <ifx-multiselect-option value="option-c-1-2-3" slot="children">Option C.1.2.3 - Beta Item 3</ifx-multiselect-option>
      </ifx-multiselect-option>
      <ifx-multiselect-option value="option-c-1-3" slot="children">Option C.1.3 - Direct Item</ifx-multiselect-option>
    </ifx-multiselect-option>

    <ifx-multiselect-option value="category-c-2" slot="children">
      Category C.2 - Another Group
      <ifx-multiselect-option value="option-c-2-1" slot="children">Option C.2.1 - Group Item</ifx-multiselect-option>
      <ifx-multiselect-option value="option-c-2-2" slot="children">Option C.2.2 - Group Item</ifx-multiselect-option>
    </ifx-multiselect-option>
  </ifx-multiselect-option>

  <ifx-multiselect-option value="option-d">Option D - Top-Level Standalone</ifx-multiselect-option>

  <ifx-multiselect-option value="option-e">Option E - Top-Level Standalone</ifx-multiselect-option>

  <ifx-multiselect-option value="category-f">
    Category F - Final Section

    <ifx-multiselect-option value="option-f-1" slot="children">Option F.1 - Simple Item</ifx-multiselect-option>
    <ifx-multiselect-option value="option-f-2" slot="children">Option F.2 - Simple Item</ifx-multiselect-option>
    <ifx-multiselect-option value="category-f-3" slot="children">
      Category F.3 - Last Group
      <ifx-multiselect-option value="option-f-3-1" slot="children">Option F.3.1 - Final Nested</ifx-multiselect-option>
      <ifx-multiselect-option value="option-f-3-2" slot="children">Option F.3.2 - Final Nested</ifx-multiselect-option>
      <ifx-multiselect-option value="option-f-3-3" slot="children">Option F.3.3 - Final Nested</ifx-multiselect-option>
    </ifx-multiselect-option>
  </ifx-multiselect-option>
</ifx-multiselect>\`;
  setTimeout(() => {
    document.querySelector("ifx-multiselect").addEventListener("ifxSelect", action("ifxSelect"));
    document.querySelector("ifx-multiselect").addEventListener("ifxOpen", action("ifxOpen"));
  }, 0);
  return template;
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => {
  const template = \`<ifx-multiselect
  name='\${args.name}'
  ?disabled='\${args.disabled}'
  ?error='\${args.error}'
  caption='\${args.caption}'
  label='\${args.label}'
  placeholder='\${args.placeholder}'
  ?show-search='\${args.showSearch}'
  ?show-select-all='\${args.showSelectAll}'
  ?show-expand-collapse='\${args.showExpandCollapse}'
  ?show-clear-button='\${args.showClearButton}'
  no-results-message='\${args.noResultsMessage}'
  ?show-no-results-message='\${args.showNoResultsMessage}'
  search-placeholder='\${args.searchPlaceholder}'
  select-all-label='\${args.selectAllLabel}'
  expand-label='\${args.expandLabel}'
  collapse-label='\${args.collapseLabel}'
  aria-multi-select-label='\${args.ariaMultiSelectLabel}'
  aria-multi-select-labelled-by='\${args.ariaMultiSelectLabelledBy}'
  aria-multi-select-described-by='\${args.ariaMultiSelectDescribedBy}'
  aria-search-label='\${args.ariaSearchLabel}'
  aria-clear-label='\${args.ariaClearLabel}'
  aria-toggle-label='\${args.ariaToggleLabel}'
  aria-select-all-label='\${args.ariaSelectAllLabel}'
  aria-expand-all-label='\${args.ariaExpandAllLabel}'
  aria-collapse-all-label='\${args.ariaCollapseAllLabel}'>

  <ifx-multiselect-option value="option-1">Option 1</ifx-multiselect-option>
  <ifx-multiselect-option value="option-2">Option 2</ifx-multiselect-option>
  <ifx-multiselect-option value="option-3">Option 3</ifx-multiselect-option>
  <ifx-multiselect-option value="option-4">Option 4</ifx-multiselect-option>
  <ifx-multiselect-option value="option-5">Option 5</ifx-multiselect-option>
  <ifx-multiselect-option value="option-6">Option 6</ifx-multiselect-option>
  <ifx-multiselect-option value="option-7">Option 7</ifx-multiselect-option>
  <ifx-multiselect-option value="option-8">Option 8</ifx-multiselect-option>
  <ifx-multiselect-option value="option-9">Option 9</ifx-multiselect-option>
  <ifx-multiselect-option value="option-10">Option 10</ifx-multiselect-option>
</ifx-multiselect>\`;
  setTimeout(() => {
    const multiselect = document.querySelectorAll("ifx-multiselect")[document.querySelectorAll("ifx-multiselect").length - 1];
    multiselect.addEventListener("ifxSelect", action("ifxSelect"));
    multiselect.addEventListener("ifxOpen", action("ifxOpen"));
  }, 0);
  return template;
}`,...l.parameters?.docs?.source}}};const p=["Default","SingleLevel"],m=Object.freeze(Object.defineProperty({__proto__:null,Default:t,SingleLevel:l,__namedExportsOrder:p,default:n},Symbol.toStringTag,{value:"Module"}));export{t as D,m as S};
