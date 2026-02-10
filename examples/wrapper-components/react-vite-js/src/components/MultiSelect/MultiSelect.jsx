import { useState } from 'react';
import { IfxButton } from '@infineon/infineon-design-system-react';

function MultiSelect() {
  const [disabled, setDisabled] = useState(false);
  const [required, setRequired] = useState(true);
  const [error, setError] = useState(false);
  const [showSearch, setShowSearch] = useState(true);
  const [showSelectAll, setShowSelectAll] = useState(true);
  const [showExpandCollapse, setShowExpandCollapse] = useState(true);
  const [showClearButton, setShowClearButton] = useState(true);
  const [showNoResultsMessage, setShowNoResultsMessage] = useState(true);

  const toggleDisabled = () => {
    setDisabled(prev => !prev);
  };

  const toggleRequired = () => {
    setRequired(prev => !prev);
  };

  const toggleError = () => {
    setError(prev => !prev);
  };

  const toggleShowSearch = () => {
    setShowSearch(prev => !prev);
  };

  const toggleShowSelectAll = () => {
    setShowSelectAll(prev => !prev);
  };

  const toggleShowExpandCollapse = () => {
    setShowExpandCollapse(prev => !prev);
  };

  const toggleShowClearButton = () => {
    setShowClearButton(prev => !prev);
  };

  const toggleShowNoResultsMessage = () => {
    setShowNoResultsMessage(prev => !prev);
  };

  return (
    <div className="component">
      <h2>Multi Select</h2>

      <ifx-multiselect
        name='multiselect'
        disabled={disabled}
        required={required}
        error={error}
        caption='Caption for multi select component'
        label='Generic Multi-Level Selection'
        placeholder='Select options...'
        show-search={showSearch}
        show-select-all={showSelectAll}
        show-expand-collapse={showExpandCollapse}
        show-clear-button={showClearButton}
        no-results-message='No results found.'
        show-no-results-message={showNoResultsMessage}
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
      <br />
      <br />

      <h3 class="controls-title">Controls</h3>
      <div class="controls">
        <IfxButton variant="secondary" onClick={toggleDisabled}>Toggle Disabled</IfxButton>
        <IfxButton variant="secondary" onClick={toggleRequired}>Toggle Required</IfxButton>
        <IfxButton variant="secondary" onClick={toggleError}>Toggle Error</IfxButton>
        <IfxButton variant="secondary" onClick={toggleShowSearch}>Toggle Search</IfxButton>
        <IfxButton variant="secondary" onClick={toggleShowSelectAll}>Toggle Select All</IfxButton>
        <IfxButton variant="secondary" onClick={toggleShowExpandCollapse}>Toggle Expand / Collapse</IfxButton>
        <IfxButton variant="secondary" onClick={toggleShowClearButton}>Toggle Clear Button</IfxButton>
        <IfxButton variant="secondary" onClick={toggleShowNoResultsMessage}>Toggle No Results Message</IfxButton>
      </div>
      <br />
      
      <div class="state">
        <div><b>Disabled:</b> {String(disabled)}</div>
        <div><b>Required:</b> {String(required)}</div>
        <div><b>Error:</b> {String(error)}</div>
        <div><b>Show Search:</b> {String(showSearch)}</div>
        <div><b>Show Select All:</b> {String(showSelectAll)}</div>
        <div><b>Show Expand / Collapse:</b> {String(showExpandCollapse)}</div>
        <div><b>Show Clear Button:</b> {String(showClearButton)}</div>
        <div><b>Show No Results Message:</b> {String(showNoResultsMessage)}</div>
      </div>
    </div>
  );
}

export default MultiSelect;