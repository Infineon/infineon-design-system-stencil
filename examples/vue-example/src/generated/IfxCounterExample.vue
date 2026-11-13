<script setup lang="ts">

import { IfxCounter } from '@infineon/design-system-vue';

const handleChange = (event: CustomEvent) => {
  console.log('ifxChange:', event);
  // Add your handler logic here
};

const codeString = `<script setup lang="ts">
const handleChange = (event: CustomEvent) => {
  console.log('ifxChange:', event);
  // Add your handler logic here
};
${'</'}script>

<template>
  <div>
    <ifx-counter
      name=""
      :value=0
      @ifxChange="handleChange" />
  </div>
${'</'}template>`;

</script>

<template>
  <div>
    <ifx-counter
      name=""
      :value=0
      @ifxChange="handleChange" />
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
