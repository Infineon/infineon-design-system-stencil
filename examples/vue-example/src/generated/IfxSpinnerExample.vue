<script setup lang="ts">

import { IfxSpinner } from '@infineon/infineon-design-system-vue';

const codeString = `<script setup lang="ts">
${'</'}script>

<template>
  <div>
    <ifx-spinner
      aria-label=""
      variant="default"
      size="m"
      :inverted="false" />
  </div>
${'</'}template>`;

</script>

<template>
  <div>
    <ifx-spinner
      aria-label=""
      variant="default"
      size="m"
      :inverted="false" />
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
