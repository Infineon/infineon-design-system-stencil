<script setup lang="ts">

import { IfxProgressBar } from '@infineon/infineon-design-system-vue';

const codeString = `<script setup lang="ts">
${'</'}script>

<template>
  <div>
    <ifx-progress-bar
      :value=50
      size="m"
      :show-label="false" />
  </div>
${'</'}template>`;

</script>

<template>
  <div>
    <ifx-progress-bar
      :value=50
      size="m"
      :show-label="false" />
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
