<script setup lang="ts">
import { onMounted, nextTick } from 'vue';
import Prism from 'prismjs';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import { IfxSearchField } from '@infineon/infineon-design-system-vue';

const handleInput = (event: CustomEvent) => {
  console.log('ifxInput:', event);
  // Add your handler logic here
};

const handleSuggestionRequested = (event: CustomEvent) => {
  console.log('ifxSuggestionRequested:', event);
  // Add your handler logic here
};

const handleSuggestionSelected = (event: CustomEvent) => {
  console.log('ifxSuggestionSelected:', event);
  // Add your handler logic here
};

const handleFocus = (event: CustomEvent) => {
  console.log('ifxFocus:', event);
  // Add your handler logic here
};

const handleBlur = (event: CustomEvent) => {
  console.log('ifxBlur:', event);
  // Add your handler logic here
};

const codeString = `<script setup lang="ts">
const handleInput = (event: CustomEvent) => {
  console.log('ifxInput:', event);
  // Add your handler logic here
};

const handleSuggestionRequested = (event: CustomEvent) => {
  console.log('ifxSuggestionRequested:', event);
  // Add your handler logic here
};

const handleSuggestionSelected = (event: CustomEvent) => {
  console.log('ifxSuggestionSelected:', event);
  // Add your handler logic here
};

const handleFocus = (event: CustomEvent) => {
  console.log('ifxFocus:', event);
  // Add your handler logic here
};

const handleBlur = (event: CustomEvent) => {
  console.log('ifxBlur:', event);
  // Add your handler logic here
};
${'</'}script>

<template>
  <div>
    <ifx-search-field
      size="m"
      disabled="false"
      show-delete-icon="true"
      show-suggestions="false"
      enable-history="true"
      max-suggestions="10"
      max-history-items="5"
      history-key="ifx-search-history"
      history-header-text="Recent Searches"
      value=""
      autocomplete="on"
      placeholder="Search..."
      aria-label="Search field"
      delete-icon-aria-label="Clear search"
      history-delete-aria-label="Remove from history"
      dropdown-aria-label="Search suggestions and history"
      suggestion-aria-label="Search suggestion"
      history-item-aria-label="Search history item"
      @ifxInput="handleInput"
      @ifxSuggestionRequested="handleSuggestionRequested"
      @ifxSuggestionSelected="handleSuggestionSelected"
      @ifxFocus="handleFocus"
      @ifxBlur="handleBlur" />
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
    <ifx-search-field
      size="m"
      disabled="false"
      show-delete-icon="true"
      show-suggestions="false"
      enable-history="true"
      max-suggestions="10"
      max-history-items="5"
      history-key="ifx-search-history"
      history-header-text="Recent Searches"
      value=""
      autocomplete="on"
      placeholder="Search..."
      aria-label="Search field"
      delete-icon-aria-label="Clear search"
      history-delete-aria-label="Remove from history"
      dropdown-aria-label="Search suggestions and history"
      suggestion-aria-label="Search suggestion"
      history-item-aria-label="Search history item"
      @ifxInput="handleInput"
      @ifxSuggestionRequested="handleSuggestionRequested"
      @ifxSuggestionSelected="handleSuggestionSelected"
      @ifxFocus="handleFocus"
      @ifxBlur="handleBlur" />
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
