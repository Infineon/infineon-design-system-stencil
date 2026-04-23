<script setup lang="ts">

import { IfxStatus } from '@infineon/infineon-design-system-vue';

const codeString = `<script setup lang="ts">
${'</'}script>

<template>
  <div>
    <ifx-status
      label="text"
      color="orange-500"
      :border="true" />
  </div>
${'</'}template>`;

</script>

<template>
  <div>
    <ifx-status
      label="text"
      color="orange-500"
      :border="true" />
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
