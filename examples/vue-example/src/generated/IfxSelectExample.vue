<script setup lang="ts">
import { onMounted, nextTick } from 'vue';
import Prism from 'prismjs';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';

const handleSelect = (event: CustomEvent) => {
  console.log('ifxSelect:', event.detail);
  // Add your handler logic here
};

const handleInput = (event: CustomEvent) => {
  console.log('ifxInput:', event.detail);
  // Add your handler logic here
};

const codeString = `<script setup lang="ts">
const handleSelect = (event: CustomEvent) => {
  console.log('ifxSelect:', event.detail);
  // Add your handler logic here
};

const handleInput = (event: CustomEvent) => {
  console.log('ifxInput:', event.detail);
  // Add your handler logic here
};
</script>

<template>
  <div>
    <ifx-select
      size="m"
      placeholder="true"
      show-clear-button="true"
      show-search="true"
      search-placeholder-value="Search..."
      disabled="false"
      required="true"
      error="false"
      label=""
      caption=""
      placeholder-value="Placeholder"
      options='[{"value":"a","label":"option a","selected":false},{"value":"b","label":"option b","selected":false},{"value":"c","label":"option c","selected":false}]'
      @ifxSelect="handleSelect"
      @ifxInput="handleInput" />
  </div>
</template>`;

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
      show-clear-button="true"
      show-search="true"
      search-placeholder-value="Search..."
      disabled="false"
      required="true"
      error="false"
      label=""
      caption=""
      placeholder-value="Placeholder"
      options='[{"value":"a","label":"option a","selected":false},{"value":"b","label":"option b","selected":false},{"value":"c","label":"option c","selected":false}]'
      @ifxSelect="handleSelect"
      @ifxInput="handleInput" />
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
