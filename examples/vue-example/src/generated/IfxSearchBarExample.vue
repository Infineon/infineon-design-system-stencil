<script setup lang="ts">

import { IfxSearchBar } from '@infineon/infineon-design-system-vue';

const codeString = `<script setup lang="ts">
${'</'}script>

<template>
  <div>
    <ifx-search-bar
      :is-open="true"
      :disabled="false"
      value=""
      autocomplete="on" />
  </div>
${'</'}template>`;

</script>

<template>
  <div>
    <ifx-search-bar
      :is-open="true"
      :disabled="false"
      value=""
      autocomplete="on" />
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
