<script setup lang="ts">

import { IfxRadioButton } from '@infineon/infineon-design-system-vue';

const codeString = `<script setup lang="ts">
${'</'}script>

<template>
  <div>
    <ifx-radio-button
      size="s"
      name="radio-button"
      value="radio">
      Text
    </ifx-radio-button>
  </div>
${'</'}template>`;

</script>

<template>
  <div>
    <ifx-radio-button
      size="s"
      name="radio-button"
      value="radio">
      Text
    </ifx-radio-button>
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
