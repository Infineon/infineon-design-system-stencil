<template>
  <div>
    <h2>MultiSelect</h2>
      <ifx-multiselect
      name='multiselect'
      @ifxSelect="handleMultiSelectChange"
      :disabled="disabled"
      :error="error"
      :errorMessage="errorMessage"
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
    <div>
      <ifx-button variant="secondary" theme="default" @click="toggleDisabled">Toggle Disabled</ifx-button>

      <ifx-button variant="secondary" theme="default" @click="toggleError">Toggle Error</ifx-button>
    </div>
    <br />
    <br />
  </div>
</template>



<script setup>
import { ref } from 'vue';

let disabled = ref(false);
let error = ref(false);
let errorMessage = ref("Some error");

function handleMultiSelectChange(event) {
  console.log("emitting multiselect selected options: ", event.detail)
};



const toggleDisabled = () => {
  disabled.value = !disabled.value;
};

const toggleError = () => {
  error.value = !error.value;
};

</script>


 



 