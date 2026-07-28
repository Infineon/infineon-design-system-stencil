<script setup lang="ts">

import { IfxSelect, IfxSelectOption } from '@infineon/infineon-design-system-vue';

const handleInput = (event: CustomEvent) => {
  console.log('ifxInput:', event);
  // Add your handler logic here
};

const handleOpen = (event: CustomEvent) => {
  console.log('ifxOpen:', event);
  // Add your handler logic here
};

const handleSelect = (event: CustomEvent) => {
  console.log('ifxSelect:', event);
  // Add your handler logic here
};

const codeString = `<script setup lang="ts">
const handleInput = (event: CustomEvent) => {
  console.log('ifxInput:', event);
  // Add your handler logic here
};

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
    <ifx-select
      size="m"
      placeholder=""
      show-clear-button=""
      show-search=""
      search-placeholder-value="Search..."
      label=""
      caption=""
      placeholder-value="Placeholder"
      aria-select-label="Select"
      aria-search-label="Search options"
      aria-clear-label="Clear selection"
      aria-select-labelled-by=""
      aria-select-described-by=""
      :error="false"
      :disabled="false"
      :read-only="false"
      :required="false">
      <ifx-select-option
        value="a"
        @ifxInput="handleInput"
        @ifxOpen="handleOpen"
        @ifxSelect="handleSelect">
        Option A
      </ifx-select-option>
      <ifx-select-option value="b">
        Option B
      </ifx-select-option>
      <ifx-select-option value="c">
        Option C
      </ifx-select-option>
      <ifx-select-option
        value="d"
        disabled="">
        Option D (disabled)
      </ifx-select-option>
    </ifx-select>
  </div>
${'</'}template>`;

</script>

<template>
  <div>
    <ifx-select
      size="m"
      placeholder=""
      show-clear-button=""
      show-search=""
      search-placeholder-value="Search..."
      label=""
      caption=""
      placeholder-value="Placeholder"
      aria-select-label="Select"
      aria-search-label="Search options"
      aria-clear-label="Clear selection"
      aria-select-labelled-by=""
      aria-select-described-by=""
      :error="false"
      :disabled="false"
      :read-only="false"
      :required="false">
      <ifx-select-option
        value="a"
        @ifxInput="handleInput"
        @ifxOpen="handleOpen"
        @ifxSelect="handleSelect">
        Option A
      </ifx-select-option>
      <ifx-select-option value="b">
        Option B
      </ifx-select-option>
      <ifx-select-option value="c">
        Option C
      </ifx-select-option>
      <ifx-select-option
        value="d"
        disabled="">
        Option D (disabled)
      </ifx-select-option>
    </ifx-select>
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
