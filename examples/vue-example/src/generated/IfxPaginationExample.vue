<script setup lang="ts">
import { onMounted, nextTick } from 'vue';
import Prism from 'prismjs';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import { IfxPagination } from '@infineon/infineon-design-system-vue';

const handlePageChange = (event: CustomEvent) => {
  console.log('ifxPageChange:', event);
  // Add your handler logic here
};

const handleItemsPerPageChange = (event: CustomEvent) => {
  console.log('ifxItemsPerPageChange:', event);
  // Add your handler logic here
};

const codeString = `<script setup lang="ts">
const handlePageChange = (event: CustomEvent) => {
  console.log('ifxPageChange:', event);
  // Add your handler logic here
};

const handleItemsPerPageChange = (event: CustomEvent) => {
  console.log('ifxItemsPerPageChange:', event);
  // Add your handler logic here
};
${'</'}script>

<template>
  <div>
    <ifx-pagination
      total="50"
      current-page="1"
      show-items-per-page=""
      :items-per-page="JSON.parse('[{&quot;value&quot;:&quot;10&quot;,&quot;selected&quot;:true}, {&quot;value&quot;:&quot;20&quot;,&quot;selected&quot;:false}, {&quot;value&quot;:&quot;30&quot;,&quot;selected&quot;:false}]')"
      @ifxPageChange="handlePageChange"
      @ifxItemsPerPageChange="handleItemsPerPageChange" />
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
    <ifx-pagination
      total="50"
      current-page="1"
      show-items-per-page=""
      :items-per-page="JSON.parse('[{&quot;value&quot;:&quot;10&quot;,&quot;selected&quot;:true}, {&quot;value&quot;:&quot;20&quot;,&quot;selected&quot;:false}, {&quot;value&quot;:&quot;30&quot;,&quot;selected&quot;:false}]')"
      @ifxPageChange="handlePageChange"
      @ifxItemsPerPageChange="handleItemsPerPageChange" />
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
