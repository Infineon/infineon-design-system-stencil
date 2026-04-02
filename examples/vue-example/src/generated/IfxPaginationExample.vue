<script setup lang="ts">

import { IfxPagination } from '@infineon/infineon-design-system-vue';

const codeString = `<script setup lang="ts">
${'</'}script>

<template>
  <div>
    <ifx-pagination
      :total=50
      :current-page=1
      show-items-per-page=""
      items-per-page='[{"value":"10","selected":true}, {"value":"20","selected":false}, {"value":"30","selected":false}, {"value":"all","selected":false}]'
      items-per-page-label="Result per Pages" />
  </div>
${'</'}template>`;

</script>

<template>
  <div>
    <ifx-pagination
      :total=50
      :current-page=1
      show-items-per-page=""
      items-per-page='[{"value":"10","selected":true}, {"value":"20","selected":false}, {"value":"30","selected":false}, {"value":"all","selected":false}]'
      items-per-page-label="Result per Pages" />
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
