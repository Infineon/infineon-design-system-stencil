<script setup lang="ts">

import { IfxButton, IfxCheckbox, IfxTextField } from '@infineon/infineon-design-system-vue';

import { computed, ref } from 'vue';

const label = ref("Text");
const error = ref(false);
const disabled = ref(false);
const checked = ref(false);
const indeterminate = ref(false);
const sizeOptions = ["s","m"];
const sizeIndex = ref(0);
const name = ref("checkbox");

const toggleLabel = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; label.value = String(raw); };
const toggleError = () => (error.value = !error.value);
const toggleDisabled = () => (disabled.value = !disabled.value);
const toggleChecked = () => (checked.value = !checked.value);
const toggleIndeterminate = () => (indeterminate.value = !indeterminate.value);
const toggleSize = () => (sizeIndex.value = (sizeIndex.value + 1) % sizeOptions.length);
const toggleName = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; name.value = String(raw); };

const controlledProps = computed(() => ({
  "label": label.value,
  "error": error.value,
  "disabled": disabled.value,
  "checked": checked.value,
  "indeterminate": indeterminate.value,
  "size": sizeOptions[sizeIndex.value],
  "name": name.value,
}));
const boundProps = computed(() => {
  const source = controlledProps.value as Record<string, unknown>;
  const { "label": _ignored, ...rest } = source;
  return rest;
});

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
  ["indeterminate", controlledProps.value["indeterminate"]],
  ["size", controlledProps.value["size"]],
  ["name", controlledProps.value["name"]],
]
	.map(([name, value]) => '      ' + String(name) + '="' + formatAttrValueForCode(value) + '"')
  .join("\n");

const codeStringWithAttrs = `<script setup lang="ts">
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
    <ifx-checkbox
      @ifxChange="handleChange"
      @ifxError="handleError"
      v-bind="boundProps">
      __CONTROLLED_TEXT_LABEL__
    </ifx-checkbox>
  </div>
${'</'}template>`.replace("__CONTROLLED_ATTRS__", controlledAttrsCode);

const escapedText = String(controlledProps.value["label"] ?? "")
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;');

const codeString = codeStringWithAttrs.replace("__CONTROLLED_TEXT_LABEL__", escapedText);

</script>

<template>
  <div>
    <ifx-checkbox
      @ifxChange="handleChange"
      @ifxError="handleError"
      v-bind="boundProps">
      {{ String(label) }}
    </ifx-checkbox>
    <h3 class="controls-title">Controls</h3>
	<div class="controls controls-toggle">
      <IfxButton variant="secondary" @click="toggleError">Toggle Error</IfxButton>
      <IfxButton variant="secondary" @click="toggleDisabled">Toggle Disabled</IfxButton>
      <IfxButton variant="secondary" @click="toggleChecked">Toggle Checked</IfxButton>
      <IfxButton variant="secondary" @click="toggleIndeterminate">Toggle Indeterminate</IfxButton>
      <IfxButton variant="secondary" @click="toggleSize">Toggle Size</IfxButton>
    </div>
	<div class="controls controls-input">
      <IfxTextField label="label" type="text" :value="String(label)" @input="toggleLabel" @ifxInput="toggleLabel" />
      <IfxTextField label="name" type="text" :value="String(name)" @input="toggleName" @ifxInput="toggleName" />
    </div>

    <div class="state">
        <div><b>label:</b> {{ String(label) }}</div>
        <div><b>error:</b> {{ String(error) }}</div>
        <div><b>disabled:</b> {{ String(disabled) }}</div>
        <div><b>checked:</b> {{ String(checked) }}</div>
        <div><b>indeterminate:</b> {{ String(indeterminate) }}</div>
        <div><b>size:</b> {{ String(sizeOptions[sizeIndex]) }}</div>
        <div><b>name:</b> {{ String(name) }}</div>
    </div>

    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
