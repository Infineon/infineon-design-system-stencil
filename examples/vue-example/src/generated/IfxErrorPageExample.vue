<script setup lang="ts">

import { IfxErrorPage } from '@infineon/infineon-design-system-vue';

const codeString = `<script setup lang="ts">
${'</'}script>

<template>
  <div>
    <ifx-error-page
      illustration-url=""
      :alt=403
      :type=403
      headline=""
      description="" />
  </div>
${'</'}template>`;

</script>

<template>
  <div>
    <ifx-error-page
      illustration-url=""
      :alt=403
      :type=403
      headline=""
      description="" />
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
