<script setup lang="ts">

import { IfxAlert } from '@infineon/infineon-design-system-vue';

const codeString = `<script setup lang="ts">
${'</'}script>

<template>
  <div>
    <ifx-alert
      aria-live-text="assertive"
      variant="primary"
      icon="c-info-16"
      :closable="true">
      Attention! This is an alert message — check it out!
    </ifx-alert>
  </div>
${'</'}template>`;

</script>

<template>
  <div>
    <ifx-alert
      aria-live-text="assertive"
      variant="primary"
      icon="c-info-16"
      :closable="true">
      Attention! This is an alert message — check it out!
    </ifx-alert>
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
