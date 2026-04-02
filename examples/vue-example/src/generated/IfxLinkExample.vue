<script setup lang="ts">

import { IfxLink } from '@infineon/infineon-design-system-vue';

const codeString = `<script setup lang="ts">
${'</'}script>

<template>
  <div>
    <ifx-link
      href=""
      aria-label="Link"
      target="_blank"
      size="m"
      variant="bold"
      download="">
      Link
    </ifx-link>
  </div>
${'</'}template>`;

</script>

<template>
  <div>
    <ifx-link
      href=""
      aria-label="Link"
      target="_blank"
      size="m"
      variant="bold"
      download="">
      Link
    </ifx-link>
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
