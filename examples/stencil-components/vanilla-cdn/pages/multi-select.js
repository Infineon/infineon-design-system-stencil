export function render(container) {

    container.innerHTML = `
    <h2>Multi Select</h2>

    <ifx-multiselect
      name='multiselect'
      disabled='false'
      required='true'
      error='false'
      caption=''
      label='Generic Multi-Level Selection'
      placeholder='Select options...'
      show-search='true'
      show-select-all='true'
      show-expand-collapse='true'
      show-clear-button='true'
      no-results-message='No results found.'
      show-no-results-message='true'
      search-placeholder='Search'
      select-all-label='Select all'
      expand-label='Expand'
      collapse-label='Collapse'
      aria-multi-select-label='Multi-select dropdown'
      aria-multi-select-labelled-by=''
      aria-multi-select-described-by=''
      aria-search-label='Search options'
      aria-clear-label='Clear all selections'
      aria-toggle-label='Toggle dropdown'
      aria-select-all-label='Select all options'
      aria-expand-all-label='Expand all categories'
      aria-collapse-all-label='Collapse all categories'>
    
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
    </ifx-multiselect>

    <br><br>

    <h3 style="text-decoration: underline;">Controls</h3>
    <ifx-button variant="secondary" id="toggle-disabled">Toggle Disabled</ifx-button>
    <ifx-button variant="secondary" id="toggle-required">Toggle Required</ifx-button>
    <ifx-button variant="secondary" id="toggle-error">Toggle Error</ifx-button>
    <ifx-button variant="secondary" id="toggle-search">Toggle Search</ifx-button>
    <ifx-button variant="secondary" id="toggle-selectAll">Toggle Select All</ifx-button>
    <ifx-button variant="secondary" id="toggle-expandCollapse">Toggle Expand/Collapse</ifx-button>
    <ifx-button variant="secondary" id="toggle-clear">Toggle Clear Button</ifx-button>
    <ifx-button variant="secondary" id="toggle-noResults">Toggle No Results Message</ifx-button>

    <br><br>

    <span><b>Disabled:</b> <span id="state-disabled"></span></span><br>
    <span><b>Required:</b> <span id="state-required"></span></span><br>
    <span><b>Error:</b> <span id="state-error"></span></span><br>
    <span><b>Show Search:</b> <span id="state-search"></span></span><br>
    <span><b>Show Select All:</b> <span id="state-selectAll"></span></span><br>
    <span><b>Show Expand/Collapse:</b> <span id="state-expandCollapse"></span></span><br>
    <span><b>Show Clear Button:</b> <span id="state-clear"></span></span><br>
    <span><b>Show No Results Message:</b> <span id="state-noResults"></span></span><br>
  `;

    const multiSelect = container.querySelector('ifx-multiselect');
    const disabledState = container.querySelector('#state-disabled');
    const requiredState = container.querySelector('#state-required');
    const errorState = container.querySelector('#state-error');
    const searchState = container.querySelector('#state-search');
    const selectAllState = container.querySelector('#state-selectAll');
    const expandCollapseState = container.querySelector('#state-expandCollapse');
    const clearState = container.querySelector('#state-clear');
    const noResultsState = container.querySelector('#state-noResults');

    disabledState.textContent = String(multiSelect.disabled);
    requiredState.textContent = String(multiSelect.required);
    errorState.textContent = String(multiSelect.error);
    searchState.textContent = String(multiSelect.showSearch);
    selectAllState.textContent = String(multiSelect.showSelectAll);
    expandCollapseState.textContent = String(multiSelect.showExpandCollapse);
    clearState.textContent = String(multiSelect.showClearButton);
    noResultsState.textContent = String(multiSelect.showNoResultsMessage);

    container.querySelector('#toggle-disabled').onclick = () => {
      multiSelect.disabled = !multiSelect.disabled;
      disabledState.textContent = String(multiSelect.disabled);
    }

    container.querySelector('#toggle-required').onclick = () => {
      multiSelect.required = !multiSelect.required;
      requiredState.textContent = String(multiSelect.required);
    }

    container.querySelector('#toggle-error').onclick = () => {
      multiSelect.error = !multiSelect.error;
      errorState.textContent = String(multiSelect.error);
    }

    container.querySelector('#toggle-search').onclick = () => {
      multiSelect.showSearch = !multiSelect.showSearch;
      searchState.textContent = String(multiSelect.showSearch);
    }

    container.querySelector('#toggle-selectAll').onclick = () => {
      multiSelect.showSelectAll = !multiSelect.showSelectAll;
      selectAllState.textContent = String(multiSelect.showSelectAll);
    }

    container.querySelector('#toggle-expandCollapse').onclick = () => {
      multiSelect.showExpandCollapse = !multiSelect.showExpandCollapse;
      expandCollapseState.textContent = String(multiSelect.showExpandCollapse);
    }

    container.querySelector('#toggle-clear').onclick = () => {
      multiSelect.showClearButton = !multiSelect.showClearButton;
      clearState.textContent = String(multiSelect.showClearButton);
    }

    container.querySelector('#toggle-noResults').onclick = () => {
      multiSelect.showNoResultsMessage = !multiSelect.showNoResultsMessage;
      noResultsState.textContent = String(multiSelect.showNoResultsMessage);
    }
}