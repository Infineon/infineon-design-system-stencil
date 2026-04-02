<script setup lang="ts">

import { IfxSelect } from '@infineon/infineon-design-system-vue';

const codeString = `<script setup lang="ts">
${'</'}script>

<template>
  <div>
    <ifx-select
      size="m"
      :placeholder="true"
      show-clear-button=""
      show-search=""
      search-placeholder-value="Search..."
      required=""
      label=""
      caption=""
      placeholder-value="Placeholder"
      options='[{"value":"a","label":"option a","selected":false},{"value":"b","label":"option b","selected":false},{"value":"c","label":"option c","selected":false}]' />
  </div>
${'</'}template>`;

</script>

<template>
  <div>
    <ifx-select
      size="m"
      :placeholder="true"
      show-clear-button=""
      show-search=""
      search-placeholder-value="Search..."
      required=""
      label=""
      caption=""
      placeholder-value="Placeholder"
      options='[{"value":"a","label":"option a","selected":false},{"value":"b","label":"option b","selected":false},{"value":"c","label":"option c","selected":false}]' />
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
