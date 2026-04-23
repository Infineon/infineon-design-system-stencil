<script setup lang="ts">

import { IfxIndicator } from '@infineon/infineon-design-system-vue';

const codeString = `<script setup lang="ts">
${'</'}script>

<template>
  <div>
    <ifx-indicator
      variant="number"
      :number=1
      :inverted="false" />
  </div>
${'</'}template>`;

</script>

<template>
  <div>
    <ifx-indicator
      variant="number"
      :number=1
      :inverted="false" />
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
