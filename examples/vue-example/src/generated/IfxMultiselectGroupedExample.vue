<script setup lang="ts">

import { IfxMultiselect, IfxMultiselectGroup, IfxMultiselectOption } from '@infineon/infineon-design-system-vue';

const handleOpen = (event: CustomEvent) => {
  console.log('ifxOpen:', event);
  // Add your handler logic here
};

const handleSelect = (event: CustomEvent) => {
  console.log('ifxSelect:', event);
  // Add your handler logic here
};

const codeString = `<script setup lang="ts">
const handleOpen = (event: CustomEvent) => {
  console.log('ifxOpen:', event);
  // Add your handler logic here
};

const handleSelect = (event: CustomEvent) => {
  console.log('ifxSelect:', event);
  // Add your handler logic here
};
${'</'}script>

<template>
  <div>
    <ifx-multiselect
      label="KPIs"
      placeholder="Select KPIs..."
      name="multiselect"
      :disabled="false"
      :read-only="false"
      :required="true"
      :show-search="true"
      :show-select-all="true"
      :show-expand-collapse="true"
      :error="false"
      caption=""
      :show-clear-button="true"
      no-results-message="No results found."
      :show-no-results-message="true"
      search-placeholder="Search"
      select-all-label="Select all"
      expand-label="Expand"
      collapse-label="Collapse"
      aria-multi-select-label="Multi-select dropdown"
      aria-multi-select-labelled-by=""
      aria-multi-select-described-by=""
      aria-search-label="Search options"
      aria-clear-label="Clear all selections"
      aria-toggle-label="Toggle dropdown"
      aria-select-all-label="Select all options"
      aria-expand-all-label="Expand all categories"
      aria-collapse-all-label="Collapse all categories"
      @ifxOpen="handleOpen"
      @ifxSelect="handleSelect">
      <ifx-multiselect-group label="Revenue">
        <ifx-multiselect-option value="revenue-total">
          Total revenue
        </ifx-multiselect-option>
        <ifx-multiselect-option value="revenue-region">
          Revenue by region
        </ifx-multiselect-option>
      </ifx-multiselect-group>
      <ifx-multiselect-group label="Costs">
        <ifx-multiselect-option value="costs-total">
          Total costs
        </ifx-multiselect-option>
        <ifx-multiselect-option value="costs-category">
          Costs by category
        </ifx-multiselect-option>
      </ifx-multiselect-group>
    </ifx-multiselect>
  </div>
${'</'}template>`;

</script>

<template>
  <div>
    <ifx-multiselect
      label="KPIs"
      placeholder="Select KPIs..."
      name="multiselect"
      :disabled="false"
      :read-only="false"
      :required="true"
      :show-search="true"
      :show-select-all="true"
      :show-expand-collapse="true"
      :error="false"
      caption=""
      :show-clear-button="true"
      no-results-message="No results found."
      :show-no-results-message="true"
      search-placeholder="Search"
      select-all-label="Select all"
      expand-label="Expand"
      collapse-label="Collapse"
      aria-multi-select-label="Multi-select dropdown"
      aria-multi-select-labelled-by=""
      aria-multi-select-described-by=""
      aria-search-label="Search options"
      aria-clear-label="Clear all selections"
      aria-toggle-label="Toggle dropdown"
      aria-select-all-label="Select all options"
      aria-expand-all-label="Expand all categories"
      aria-collapse-all-label="Collapse all categories"
      @ifxOpen="handleOpen"
      @ifxSelect="handleSelect">
      <ifx-multiselect-group label="Revenue">
        <ifx-multiselect-option value="revenue-total">
          Total revenue
        </ifx-multiselect-option>
        <ifx-multiselect-option value="revenue-region">
          Revenue by region
        </ifx-multiselect-option>
      </ifx-multiselect-group>
      <ifx-multiselect-group label="Costs">
        <ifx-multiselect-option value="costs-total">
          Total costs
        </ifx-multiselect-option>
        <ifx-multiselect-option value="costs-category">
          Costs by category
        </ifx-multiselect-option>
      </ifx-multiselect-group>
    </ifx-multiselect>
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
