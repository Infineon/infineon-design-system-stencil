<script setup lang="ts">

import { IfxBasicTable } from '@infineon/infineon-design-system-vue';

const codeString = `<script setup lang="ts">
${'</'}script>

<template>
  <div>
    <ifx-basic-table
      table-height="auto"
      row-height="default"
      variant="default" />
  </div>
${'</'}template>`;

</script>

<template>
  <div>
    <ifx-basic-table
      table-height="auto"
      row-height="default"
      variant="default" />
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
