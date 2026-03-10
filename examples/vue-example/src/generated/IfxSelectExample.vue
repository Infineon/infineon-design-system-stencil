<script setup lang="ts">

import { IfxButton, IfxSelect } from '@infineon/infineon-design-system-vue';

import { computed, ref } from 'vue';

const sizeOptions = ["s","m"];
const sizeIndex = ref(1);
const placeholder = ref(true);
const error = ref(false);
const disabled = ref(false);
const required = ref(true);
const showSearch = ref(true);
const showClearButton = ref(true);

const toggleSize = () => (sizeIndex.value = (sizeIndex.value + 1) % sizeOptions.length);
const togglePlaceholder = () => (placeholder.value = !placeholder.value);
const toggleError = () => (error.value = !error.value);
const toggleDisabled = () => (disabled.value = !disabled.value);
const toggleRequired = () => (required.value = !required.value);
const toggleShowSearch = () => (showSearch.value = !showSearch.value);
const toggleShowClearButton = () => (showClearButton.value = !showClearButton.value);

const controlledProps = computed(() => ({
  "size": sizeOptions[sizeIndex.value],
  "placeholder": placeholder.value,
  "error": error.value,
  "disabled": disabled.value,
  "required": required.value,
  "showSearch": showSearch.value,
  "showClearButton": showClearButton.value,
}));

const handleSelect = (event: CustomEvent) => {
  console.log('ifxSelect:', event);
  // Add your handler logic here
};

const handleInput = (event: CustomEvent) => {
  console.log('ifxInput:', event);
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
  ["size", controlledProps.value["size"]],
  ["placeholder", controlledProps.value["placeholder"]],
  ["error", controlledProps.value["error"]],
  ["disabled", controlledProps.value["disabled"]],
  ["required", controlledProps.value["required"]],
  ["showSearch", controlledProps.value["showSearch"]],
  ["showClearButton", controlledProps.value["showClearButton"]],
]
	.map(([name, value]) => '      ' + String(name) + '="' + formatAttrValueForCode(value) + '"')
  .join("\n");

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
      search-placeholder-value="Search..."
      label=""
      caption=""
      placeholder-value="Placeholder"
      options='[{"value":"a","label":"option a","selected":false},{"value":"b","label":"option b","selected":false},{"value":"c","label":"option c","selected":false}]'
      @ifxSelect="handleSelect"
      @ifxInput="handleInput"
      __CONTROLLED_ATTRS__ />
  </div>
${'</'}template>`.replace("__CONTROLLED_ATTRS__", controlledAttrsCode);

</script>

<template>
  <div>
    <ifx-select
      search-placeholder-value="Search..."
      label=""
      caption=""
      placeholder-value="Placeholder"
      options='[{"value":"a","label":"option a","selected":false},{"value":"b","label":"option b","selected":false},{"value":"c","label":"option c","selected":false}]'
      @ifxSelect="handleSelect"
      @ifxInput="handleInput"
      v-bind="controlledProps" />
    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <IfxButton variant="secondary" @click="toggleSize">Toggle Size</IfxButton>
      <IfxButton variant="secondary" @click="togglePlaceholder">Toggle Placeholder</IfxButton>
      <IfxButton variant="secondary" @click="toggleError">Toggle Error</IfxButton>
      <IfxButton variant="secondary" @click="toggleDisabled">Toggle Disabled</IfxButton>
      <IfxButton variant="secondary" @click="toggleRequired">Toggle Required</IfxButton>
      <IfxButton variant="secondary" @click="toggleShowSearch">Toggle ShowSearch</IfxButton>
      <IfxButton variant="secondary" @click="toggleShowClearButton">Toggle ShowClearButton</IfxButton>
    </div>

    <div class="state">
        <div><b>size:</b> {{ String(sizeOptions[sizeIndex.value]) }}</div>
        <div><b>placeholder:</b> {{ String(placeholder.value) }}</div>
        <div><b>error:</b> {{ String(error.value) }}</div>
        <div><b>disabled:</b> {{ String(disabled.value) }}</div>
        <div><b>required:</b> {{ String(required.value) }}</div>
        <div><b>showSearch:</b> {{ String(showSearch.value) }}</div>
        <div><b>showClearButton:</b> {{ String(showClearButton.value) }}</div>
    </div>

    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
