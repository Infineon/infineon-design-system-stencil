<script setup lang="ts">

import { IfxButton, IfxSearchField } from '@infineon/infineon-design-system-vue';

import { computed, ref } from 'vue';

const showDeleteIcon = ref(true);
const disabled = ref(false);
const sizeOptions = ["s","m"];
const sizeIndex = ref(1);
const showSuggestions = ref(false);
const enableHistory = ref(true);

const toggleShowDeleteIcon = () => (showDeleteIcon.value = !showDeleteIcon.value);
const toggleDisabled = () => (disabled.value = !disabled.value);
const toggleSize = () => (sizeIndex.value = (sizeIndex.value + 1) % sizeOptions.length);
const toggleShowSuggestions = () => (showSuggestions.value = !showSuggestions.value);
const toggleEnableHistory = () => (enableHistory.value = !enableHistory.value);

const controlledProps = computed(() => ({
  "showDeleteIcon": showDeleteIcon.value,
  "disabled": disabled.value,
  "size": sizeOptions[sizeIndex.value],
  "showSuggestions": showSuggestions.value,
  "enableHistory": enableHistory.value,
}));

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

const formatAttrValueForCode = (value: unknown): string => {
  if (typeof value === "boolean") return String(value);
  if (typeof value === "number") return String(value);
  if (value === null) return "null";
  if (Array.isArray(value) || (typeof value === "object" && value !== null)) {
    return JSON.stringify(value);
  }
  return String(value).replace(/"/g, '&quot;');
};

const controlledAttrsCode = [
  ["showDeleteIcon", controlledProps.value["showDeleteIcon"]],
  ["disabled", controlledProps.value["disabled"]],
  ["size", controlledProps.value["size"]],
  ["showSuggestions", controlledProps.value["showSuggestions"]],
  ["enableHistory", controlledProps.value["enableHistory"]],
]
	.map(([name, value]) => '      ' + String(name) + '="' + formatAttrValueForCode(value) + '"')
  .join("\n");

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
      :max-suggestions=10
      :max-history-items=5
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
      @ifxBlur="handleBlur"
      __CONTROLLED_ATTRS__ />
  </div>
${'</'}template>`.replace("__CONTROLLED_ATTRS__", controlledAttrsCode);

</script>

<template>
  <div>
    <ifx-search-field
      :max-suggestions=10
      :max-history-items=5
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
      @ifxBlur="handleBlur"
      v-bind="controlledProps" />
    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <IfxButton variant="secondary" @click="toggleShowDeleteIcon">Toggle ShowDeleteIcon</IfxButton>
      <IfxButton variant="secondary" @click="toggleDisabled">Toggle Disabled</IfxButton>
      <IfxButton variant="secondary" @click="toggleSize">Toggle Size</IfxButton>
      <IfxButton variant="secondary" @click="toggleShowSuggestions">Toggle ShowSuggestions</IfxButton>
      <IfxButton variant="secondary" @click="toggleEnableHistory">Toggle EnableHistory</IfxButton>
    </div>

    <div class="state">
        <div><b>showDeleteIcon:</b> {{ String(showDeleteIcon.value) }}</div>
        <div><b>disabled:</b> {{ String(disabled.value) }}</div>
        <div><b>size:</b> {{ String(sizeOptions[sizeIndex.value]) }}</div>
        <div><b>showSuggestions:</b> {{ String(showSuggestions.value) }}</div>
        <div><b>enableHistory:</b> {{ String(enableHistory.value) }}</div>
    </div>

    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
