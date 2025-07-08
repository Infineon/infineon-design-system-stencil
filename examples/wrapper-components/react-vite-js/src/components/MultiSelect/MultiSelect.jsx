import  { useState } from 'react';
import { IfxMultiselect, IfxMultiselectOption } from '@infineon/infineon-design-system-react';


function App() {
  const [disabled] = useState(false);
  const [error] = useState(false);

  const handleIfxSelect = (e) => {
    console.log('ifxSelect event emitted with value:', e.detail);
  }

  return (
    <div>
      <IfxMultiselect
        onIfxSelect={handleIfxSelect}
        name='multiselect'
        disabled={disabled}
        error={error}
        error-message='Some error'
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

      <IfxMultiselectOption value="category-a">
        Category A - Main Section

        <IfxMultiselectOption value="category-a-1" slot="children">
          Category A.1 - First Subsection
          <IfxMultiselectOption value="option-a-1-1" slot="children">Option A.1.1 - Basic Item</IfxMultiselectOption>
          <IfxMultiselectOption value="option-a-1-2" selected slot="children">Option A.1.2 - Preselected Item</IfxMultiselectOption>
          <IfxMultiselectOption value="option-a-1-3" slot="children">Option A.1.3 - Another Item</IfxMultiselectOption>
        </IfxMultiselectOption>

        <IfxMultiselectOption value="category-a-2" slot="children">
          Category A.2 - Second Subsection
          <IfxMultiselectOption value="option-a-2-1" slot="children">Option A.2.1 - Nested Item</IfxMultiselectOption>
          <IfxMultiselectOption value="option-a-2-2" slot="children">
            Option A.2.2 - Deep Nested Parent
            <IfxMultiselectOption value="option-a-2-2-1" slot="children">Option A.2.2.1 - Level 4 Item</IfxMultiselectOption>
            <IfxMultiselectOption value="option-a-2-2-2" slot="children">Option A.2.2.2 - Level 4 Item</IfxMultiselectOption>
            <IfxMultiselectOption value="option-a-2-2-3" slot="children">
              Option A.2.2.3 - Even Deeper
              <IfxMultiselectOption value="option-a-2-2-3-1" slot="children">Option A.2.2.3.1 - Level 5 Item</IfxMultiselectOption>
              <IfxMultiselectOption value="option-a-2-2-3-2" slot="children">Option A.2.2.3.2 - Level 5 Item</IfxMultiselectOption>
            </IfxMultiselectOption>
          </IfxMultiselectOption>
          <IfxMultiselectOption value="option-a-2-3" slot="children">Option A.2.3 - Final Nested</IfxMultiselectOption>
        </IfxMultiselectOption>

        <IfxMultiselectOption value="option-a-3" slot="children">Option A.3 - Direct Child</IfxMultiselectOption>
        <IfxMultiselectOption value="option-a-4" slot="children">Option A.4 - Another Direct Child</IfxMultiselectOption>
      </IfxMultiselectOption>

      <IfxMultiselectOption value="category-b">
        Category B - Secondary Section

        <IfxMultiselectOption value="category-b-1" slot="children">
          Category B.1 - Mixed Content
          <IfxMultiselectOption value="option-b-1-1" slot="children">Option B.1.1 - Standard Item</IfxMultiselectOption>
          <IfxMultiselectOption value="category-b-1-2" slot="children">
            Category B.1.2 - Sub-Category
            <IfxMultiselectOption value="option-b-1-2-1" slot="children">Option B.1.2.1 - Nested Choice</IfxMultiselectOption>
            <IfxMultiselectOption value="option-b-1-2-2" slot="children">Option B.1.2.2 - Nested Choice</IfxMultiselectOption>
            <IfxMultiselectOption value="option-b-1-2-3" slot="children">Option B.1.2.3 - Nested Choice</IfxMultiselectOption>
          </IfxMultiselectOption>
          <IfxMultiselectOption value="option-b-1-3" slot="children">Option B.1.3 - Standard Item</IfxMultiselectOption>
        </IfxMultiselectOption>

        <IfxMultiselectOption value="option-b-2" slot="children">Option B.2 - Standalone Item</IfxMultiselectOption>
        <IfxMultiselectOption value="option-b-3" slot="children">Option B.3 - Standalone Item</IfxMultiselectOption>
      </IfxMultiselectOption>

      <IfxMultiselectOption value="category-c">
        Category C - Complex Structure

        <IfxMultiselectOption value="category-c-1" slot="children">
          Category C.1 - Multi-Level Group
          <IfxMultiselectOption value="category-c-1-1" slot="children">
            Category C.1.1 - Sub-Group Alpha
            <IfxMultiselectOption value="option-c-1-1-1" slot="children">Option C.1.1.1 - Alpha Item 1</IfxMultiselectOption>
            <IfxMultiselectOption value="option-c-1-1-2" slot="children">Option C.1.1.2 - Alpha Item 2</IfxMultiselectOption>
          </IfxMultiselectOption>
          <IfxMultiselectOption value="category-c-1-2" slot="children">
            Category C.1.2 - Sub-Group Beta
            <IfxMultiselectOption value="option-c-1-2-1" slot="children">Option C.1.2.1 - Beta Item 1</IfxMultiselectOption>
            <IfxMultiselectOption value="option-c-1-2-2" slot="children">Option C.1.2.2 - Beta Item 2</IfxMultiselectOption>
            <IfxMultiselectOption value="option-c-1-2-3" slot="children">Option C.1.2.3 - Beta Item 3</IfxMultiselectOption>
          </IfxMultiselectOption>
          <IfxMultiselectOption value="option-c-1-3" slot="children">Option C.1.3 - Direct Item</IfxMultiselectOption>
        </IfxMultiselectOption>


      </IfxMultiselectOption>

        <IfxMultiselectOption value="option-d">Option D - Top-Level Standalone</IfxMultiselectOption>

        <IfxMultiselectOption value="option-e">Option E - Top-Level Standalone</IfxMultiselectOption>

        <IfxMultiselectOption value="category-f">
          Category F - Final Section

          <IfxMultiselectOption value="option-f-1" slot="children">Option F.1 - Simple Item</IfxMultiselectOption>
          <IfxMultiselectOption value="option-f-2" slot="children">Option F.2 - Simple Item</IfxMultiselectOption>
          <IfxMultiselectOption value="category-f-3" slot="children">
            Category F.3 - Last Group
            <IfxMultiselectOption value="option-f-3-1" slot="children">Option F.3.1 - Final Nested</IfxMultiselectOption>
            <IfxMultiselectOption value="option-f-3-2" slot="children">Option F.3.2 - Final Nested</IfxMultiselectOption>
            <IfxMultiselectOption value="option-f-3-3" slot="children">Option F.3.3 - Final Nested</IfxMultiselectOption>
          </IfxMultiselectOption>
        </IfxMultiselectOption>
      </IfxMultiselect>
      <br />
    </div>
  );
}

export default App;



