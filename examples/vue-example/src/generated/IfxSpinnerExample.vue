<script setup lang="ts">

import { IfxSpinner } from '@infineon/infineon-design-system-vue';

const codeString = `<script setup lang="ts">
${'</'}script>

<template>
  <div>
    <ifx-spinner
      aria-label-text=""
      variant="default"
      size="m" />
  </div>
${'</'}template>`;

</script>

<template>
  <div>
    <ifx-spinner
      aria-label-text=""
      variant="default"
      size="m" />
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
