<script setup lang="ts">

import { IfxButton, IfxDatePicker } from '@infineon/infineon-design-system-vue';

import { computed, ref } from 'vue';

const disabled = ref(false);
const success = ref(false);
const error = ref(false);
const sizeOptions = ["s","l"];
const sizeIndex = ref(0);
const required = ref(false);
const typeOptions = ["date","datetime-local"];
const typeIndex = ref(0);

const toggleDisabled = () => (disabled.value = !disabled.value);
const toggleSuccess = () => (success.value = !success.value);
const toggleError = () => (error.value = !error.value);
const toggleSize = () => (sizeIndex.value = (sizeIndex.value + 1) % sizeOptions.length);
const toggleRequired = () => (required.value = !required.value);
const toggleType = () => (typeIndex.value = (typeIndex.value + 1) % typeOptions.length);

const controlledProps = computed(() => ({
  "disabled": disabled.value,
  "success": success.value,
  "error": error.value,
  "size": sizeOptions[sizeIndex.value],
  "required": required.value,
  "type": typeOptions[typeIndex.value],
}));

const handleDate = (event: CustomEvent) => {
  console.log('ifxDate:', event);
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
  ["disabled", controlledProps.value["disabled"]],
  ["success", controlledProps.value["success"]],
  ["error", controlledProps.value["error"]],
  ["size", controlledProps.value["size"]],
  ["required", controlledProps.value["required"]],
  ["type", controlledProps.value["type"]],
]
	.map(([name, value]) => '      ' + String(name) + '="' + formatAttrValueForCode(value) + '"')
  .join("\n");

const codeString = `<script setup lang="ts">
const handleDate = (event: CustomEvent) => {
  console.log('ifxDate:', event);
  // Add your handler logic here
};
${'</'}script>

<template>
  <div>
    <ifx-date-picker
      name="date-picker"
      value=""
      max=""
      min=""
      label="Label Text"
      caption="Caption text, description, error notification."
      aria-label-text="Date Picker"
      autocomplete="on"
      @ifxDate="handleDate"
      __CONTROLLED_ATTRS__ />
  </div>
${'</'}template>`.replace("__CONTROLLED_ATTRS__", controlledAttrsCode);

</script>

<template>
  <div>
    <ifx-date-picker
      name="date-picker"
      value=""
      max=""
      min=""
      label="Label Text"
      caption="Caption text, description, error notification."
      aria-label-text="Date Picker"
      autocomplete="on"
      @ifxDate="handleDate"
      v-bind="controlledProps" />
    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <IfxButton variant="secondary" @click="toggleDisabled">Toggle Disabled</IfxButton>
      <IfxButton variant="secondary" @click="toggleSuccess">Toggle Success</IfxButton>
      <IfxButton variant="secondary" @click="toggleError">Toggle Error</IfxButton>
      <IfxButton variant="secondary" @click="toggleSize">Toggle Size</IfxButton>
      <IfxButton variant="secondary" @click="toggleRequired">Toggle Required</IfxButton>
      <IfxButton variant="secondary" @click="toggleType">Toggle Type</IfxButton>
    </div>

    <div class="state">
        <div><b>disabled:</b> {{ String(disabled.value) }}</div>
        <div><b>success:</b> {{ String(success.value) }}</div>
        <div><b>error:</b> {{ String(error.value) }}</div>
        <div><b>size:</b> {{ String(sizeOptions[sizeIndex.value]) }}</div>
        <div><b>required:</b> {{ String(required.value) }}</div>
        <div><b>type:</b> {{ String(typeOptions[typeIndex.value]) }}</div>
    </div>

    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
