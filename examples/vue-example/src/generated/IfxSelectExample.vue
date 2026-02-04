<script setup lang="ts">
import { onMounted, nextTick } from 'vue';
import Prism from 'prismjs';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import { IfxSelect } from '@infineon/infineon-design-system-vue';

const handleSelect = (event: CustomEvent) => {
  console.log('ifxSelect:', event);
  // Add your handler logic here
};

const handleInput = (event: CustomEvent) => {
  console.log('ifxInput:', event);
  // Add your handler logic here
};

const codeString = `<script setup lang="ts">
const handleSelect = (event: CustomEvent) => {
  console.log('ifxSelect:', event);
  // Add your handler logic here
};

const handleInput = (event: CustomEvent) => {
  console.log('ifxInput:', event);
  // Add your handler logic here
};
${'</'}script>

<template>
  <div>
    <ifx-select
      size="m"
      placeholder="true"
      show-clear-button=""
      show-search=""
      search-placeholder-value="Search..."
      required=""
      label=""
      caption=""
      placeholder-value="Placeholder"
      :options="JSON.parse('[{&quot;value&quot;:&quot;a&quot;,&quot;label&quot;:&quot;option a&quot;,&quot;selected&quot;:false},{&quot;value&quot;:&quot;b&quot;,&quot;label&quot;:&quot;option b&quot;,&quot;selected&quot;:false},{&quot;value&quot;:&quot;c&quot;,&quot;label&quot;:&quot;option c&quot;,&quot;selected&quot;:false}]')"
      @ifxSelect="handleSelect"
      @ifxInput="handleInput" />
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
    <ifx-select
      size="m"
      placeholder="true"
      show-clear-button=""
      show-search=""
      search-placeholder-value="Search..."
      required=""
      label=""
      caption=""
      placeholder-value="Placeholder"
      :options="JSON.parse('[{&quot;value&quot;:&quot;a&quot;,&quot;label&quot;:&quot;option a&quot;,&quot;selected&quot;:false},{&quot;value&quot;:&quot;b&quot;,&quot;label&quot;:&quot;option b&quot;,&quot;selected&quot;:false},{&quot;value&quot;:&quot;c&quot;,&quot;label&quot;:&quot;option c&quot;,&quot;selected&quot;:false}]')"
      @ifxSelect="handleSelect"
      @ifxInput="handleInput" />
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
