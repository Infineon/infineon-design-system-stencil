<script setup lang="ts">

import { IfxAiLabel } from '@infineon/infineon-design-system-vue';

const codeString = `<script setup lang="ts">
${'</'}script>

<template>
  <div>
    <ifx-ai-label
      :divider="true"
      variant="label" />
  </div>
${'</'}template>`;

</script>

<template>
  <div>
    <ifx-ai-label
      :divider="true"
      variant="label" />
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
