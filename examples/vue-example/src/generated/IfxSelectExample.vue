<script setup lang="ts">

import { IfxSelect } from '@infineon/infineon-design-system-vue';

const handleInput = (event: CustomEvent) => {
  console.log('ifxInput:', event);
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

const handleSelect = (event: CustomEvent) => {
  console.log('ifxSelect:', event);
  // Add your handler logic here
};
${'</'}script>

<template>
  <div>
    <ifx-select
      size="m"
      :placeholder="true"
      show-clear-button=""
      show-search=""
      search-placeholder-value="Search..."
      required=""
      label=""
      caption=""
      placeholder-value="Placeholder"
      options='[{"value":"a","label":"option a","selected":false},{"separator":false},{"value":"b","label":"option b","selected":false},{"value":"c","label":"option c","selected":false}]'
      :error="false"
      :disabled="false"
      @ifxInput="handleInput"
      @ifxSelect="handleSelect" />
  </div>
${'</'}template>`;

</script>

<template>
  <div>
    <ifx-select
      size="m"
      :placeholder="true"
      show-clear-button=""
      show-search=""
      search-placeholder-value="Search..."
      required=""
      label=""
      caption=""
      placeholder-value="Placeholder"
      options='[{"value":"a","label":"option a","selected":false},{"separator":false},{"value":"b","label":"option b","selected":false},{"value":"c","label":"option c","selected":false}]'
      :error="false"
      :disabled="false"
      @ifxInput="handleInput"
      @ifxSelect="handleSelect" />
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
