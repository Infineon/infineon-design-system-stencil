<script setup lang="ts">

import { IfxIconButton } from '@infineon/infineon-design-system-vue';

const codeString = `<script setup lang="ts">
${'</'}script>

<template>
  <div>
    <ifx-icon-button
      shape="round"
      variant="primary"
      icon="c-info-16"
      href=""
      target="_blank"
      size="m"
      aria-label="Icon Button" />
  </div>
${'</'}template>`;

</script>

<template>
  <div>
    <ifx-icon-button
      shape="round"
      variant="primary"
      icon="c-info-16"
      href=""
      target="_blank"
      size="m"
      aria-label="Icon Button" />
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
