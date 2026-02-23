<script setup lang="ts">
import { onMounted, nextTick } from 'vue';
import Prism from 'prismjs';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import { IfxTable } from '@infineon/infineon-design-system-vue';

const handleSelectionChange = (event: CustomEvent) => {
  console.log('ifxSelectionChange:', event);
  // Add your handler logic here
};

const handleSortChange = (event: CustomEvent) => {
  console.log('ifxSortChange:', event);
  // Add your handler logic here
};

const codeString = `<script setup lang="ts">
const handleSelectionChange = (event: CustomEvent) => {
  console.log('ifxSelectionChange:', event);
  // Add your handler logic here
};

const handleSortChange = (event: CustomEvent) => {
  console.log('ifxSortChange:', event);
  // Add your handler logic here
};
${'</'}script>

<template>
  <div>
    <ifx-table
      row-height="default"
      table-height="auto"
      filter-orientation="none"
      variant="default"
      fit-column="false"
      column-min-width="200"
      column-width="100"
      headline="Matching results"
      headline-number="0"
      @ifxSelectionChange="handleSelectionChange"
      @ifxSortChange="handleSortChange" />
  </div>
${'</'}template>`;

onMounted(() => {
  nextTick(() => {
    Prism.highlightAll();
  });
});
</script>

<template>
  <div>
    <ifx-table
      row-height="default"
      table-height="auto"
      filter-orientation="none"
      variant="default"
      fit-column="false"
      column-min-width="200"
      column-width="100"
      headline="Matching results"
      headline-number="0"
      @ifxSelectionChange="handleSelectionChange"
      @ifxSortChange="handleSortChange" />
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
