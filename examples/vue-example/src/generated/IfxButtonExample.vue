<script setup lang="ts">

import { IfxButton } from '@infineon/infineon-design-system-vue';

const codeString = `<script setup lang="ts">
${'</'}script>

<template>
  <div>
    <ifx-button
      type="button"
      aria-label-text="Button"
      variant="primary"
      size="m"
      target="_blank"
      theme="default">
      Button
    </ifx-button>
  </div>
${'</'}template>`;

</script>

<template>
  <div>
    <ifx-button
      type="button"
      aria-label-text="Button"
      variant="primary"
      size="m"
      target="_blank"
      theme="default">
      Button
    </ifx-button>
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
