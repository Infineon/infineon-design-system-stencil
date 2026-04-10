<script setup lang="ts">

import { IfxCheckbox } from '@infineon/infineon-design-system-vue';

const codeString = `<script setup lang="ts">
${'</'}script>

<template>
  <div>
    <ifx-checkbox
      :error="false"
      :disabled="false"
      :checked="false"
      size="s"
      :indeterminate="false"
      name="checkbox">
      Text
    </ifx-checkbox>
  </div>
${'</'}template>`;

</script>

<template>
  <div>
    <ifx-checkbox
      :error="false"
      :disabled="false"
      :checked="false"
      size="s"
      :indeterminate="false"
      name="checkbox">
      Text
    </ifx-checkbox>
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
