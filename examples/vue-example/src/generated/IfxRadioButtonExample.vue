<script setup lang="ts">

import { IfxButton, IfxRadioButton } from '@infineon/infineon-design-system-vue';

import { computed, ref } from 'vue';

const error = ref(false);
const disabled = ref(false);
const checked = ref(false);
const sizeOptions = ["s","m"];
const sizeIndex = ref(0);

const toggleError = () => (error.value = !error.value);
const toggleDisabled = () => (disabled.value = !disabled.value);
const toggleChecked = () => (checked.value = !checked.value);
const toggleSize = () => (sizeIndex.value = (sizeIndex.value + 1) % sizeOptions.length);

const controlledProps = computed(() => ({
  "error": error.value,
  "disabled": disabled.value,
  "checked": checked.value,
  "size": sizeOptions[sizeIndex.value],
}));

const handleChange = (event: CustomEvent) => {
  console.log('ifxChange:', event);
  // Add your handler logic here
};

const handleError = (event: CustomEvent) => {
  console.log('ifxError:', event);
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
  ["error", controlledProps.value["error"]],
  ["disabled", controlledProps.value["disabled"]],
  ["checked", controlledProps.value["checked"]],
  ["size", controlledProps.value["size"]],
]
	.map(([name, value]) => '      ' + String(name) + '="' + formatAttrValueForCode(value) + '"')
  .join("\n");

const codeString = `<script setup lang="ts">
const handleChange = (event: CustomEvent) => {
  console.log('ifxChange:', event);
  // Add your handler logic here
};

const handleError = (event: CustomEvent) => {
  console.log('ifxError:', event);
  // Add your handler logic here
};
${'</'}script>

<template>
  <div>
    <ifx-radio-button
      name="radio-button"
      value="radio"
      @ifxChange="handleChange"
      @ifxError="handleError"
      __CONTROLLED_ATTRS__>
      Text
    </ifx-radio-button>
  </div>
${'</'}template>`.replace("__CONTROLLED_ATTRS__", controlledAttrsCode);

</script>

<template>
  <div>
    <ifx-radio-button
      name="radio-button"
      value="radio"
      @ifxChange="handleChange"
      @ifxError="handleError"
      v-bind="controlledProps">
      Text
    </ifx-radio-button>
    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <IfxButton variant="secondary" @click="toggleError">Toggle Error</IfxButton>
      <IfxButton variant="secondary" @click="toggleDisabled">Toggle Disabled</IfxButton>
      <IfxButton variant="secondary" @click="toggleChecked">Toggle Checked</IfxButton>
      <IfxButton variant="secondary" @click="toggleSize">Toggle Size</IfxButton>
    </div>

    <div class="state">
        <div><b>error:</b> {{ String(error.value) }}</div>
        <div><b>disabled:</b> {{ String(disabled.value) }}</div>
        <div><b>checked:</b> {{ String(checked.value) }}</div>
        <div><b>size:</b> {{ String(sizeOptions[sizeIndex.value]) }}</div>
    </div>

    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
