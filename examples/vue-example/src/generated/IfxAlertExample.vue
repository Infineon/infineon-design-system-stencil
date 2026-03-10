<script setup lang="ts">

import { IfxAlert } from '@infineon/infineon-design-system-vue';

const handleClose = (event: CustomEvent) => {
  console.log('ifxClose:', event);
  // Add your handler logic here
};

const codeString = `<script setup lang="ts">
const handleClose = (event: CustomEvent) => {
  console.log('ifxClose:', event);
  // Add your handler logic here
};
${'</'}script>

<template>
  <div>
    <ifx-alert
      aria-live="assertive"
      variant="primary"
      icon="c-info-16"
      :closable="true"
      @ifxClose="handleClose">
      Attention! This is an alert message — check it out!
    </ifx-alert>
  </div>
${'</'}template>`;

</script>

<template>
  <div>
    <ifx-alert
      aria-live="assertive"
      variant="primary"
      icon="c-info-16"
      :closable="true"
      @ifxClose="handleClose">
      Attention! This is an alert message — check it out!
    </ifx-alert>
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
