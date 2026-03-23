<script setup lang="ts">

import { IfxPagination } from '@infineon/infineon-design-system-vue';

const handleItemsPerPageChange = (event: CustomEvent) => {
  console.log('ifxItemsPerPageChange:', event);
  // Add your handler logic here
};

const handlePageChange = (event: CustomEvent) => {
  console.log('ifxPageChange:', event);
  // Add your handler logic here
};

const codeString = `<script setup lang="ts">
const handleItemsPerPageChange = (event: CustomEvent) => {
  console.log('ifxItemsPerPageChange:', event);
  // Add your handler logic here
};

const handlePageChange = (event: CustomEvent) => {
  console.log('ifxPageChange:', event);
  // Add your handler logic here
};
${'</'}script>

<template>
  <div>
    <ifx-pagination
      :total=50
      :current-page=1
      show-items-per-page=""
      items-per-page='[{"value":"10","selected":true}, {"value":"20","selected":false}, {"value":"30","selected":false}, {"value":"all","selected":false}]'
      @ifxItemsPerPageChange="handleItemsPerPageChange"
      @ifxPageChange="handlePageChange" />
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
      @ifxItemsPerPageChange="handleItemsPerPageChange"
      @ifxPageChange="handlePageChange" />
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
