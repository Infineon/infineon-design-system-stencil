<script setup lang="ts">

import { IfxSearchBar } from '@infineon/infineon-design-system-vue';

const handleInput = (event: CustomEvent) => {
  console.log('ifxInput:', event);
  // Add your handler logic here
};

const handleOpen = (event: CustomEvent) => {
  console.log('ifxOpen:', event);
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
${'</'}script>

<template>
  <div>
    <ifx-search-bar
      :is-open="true"
      :disabled="false"
      value=""
      autocomplete="on"
      @ifxInput="handleInput"
      @ifxOpen="handleOpen" />
  </div>
${'</'}template>`;

</script>

<template>
  <div>
    <ifx-search-bar
      :is-open="true"
      :disabled="false"
      value=""
      autocomplete="on"
      @ifxInput="handleInput"
      @ifxOpen="handleOpen" />
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
