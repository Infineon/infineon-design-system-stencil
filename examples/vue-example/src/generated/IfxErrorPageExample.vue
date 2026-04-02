<script setup lang="ts">

import { IfxErrorPage } from '@infineon/infineon-design-system-vue';

const codeString = `<script setup lang="ts">
${'</'}script>

<template>
  <div>
    <ifx-error-page
      alt=""
      :type=403
      headline=""
      description=""
      illustration-url="" />
  </div>
${'</'}template>`;

</script>

<template>
  <div>
    <ifx-error-page
      alt=""
      :type=403
      headline=""
      description=""
      illustration-url="" />
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
