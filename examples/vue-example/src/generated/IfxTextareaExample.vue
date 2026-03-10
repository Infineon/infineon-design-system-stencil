<script setup lang="ts">

import { IfxButton, IfxTextarea } from '@infineon/infineon-design-system-vue';

import { computed, ref } from 'vue';

const disabled = ref(false);
const error = ref(false);
const required = ref(true);
const readOnly = ref(false);
const resizeOptions = ["both","vertical","horizontal","none"];
const resizeIndex = ref(0);
const wrapOptions = ["soft","hard","off"];
const wrapIndex = ref(0);
const fullWidth = ref(false);

const toggleDisabled = () => (disabled.value = !disabled.value);
const toggleError = () => (error.value = !error.value);
const toggleRequired = () => (required.value = !required.value);
const toggleReadOnly = () => (readOnly.value = !readOnly.value);
const toggleResize = () => (resizeIndex.value = (resizeIndex.value + 1) % resizeOptions.length);
const toggleWrap = () => (wrapIndex.value = (wrapIndex.value + 1) % wrapOptions.length);
const toggleFullWidth = () => (fullWidth.value = !fullWidth.value);

const controlledProps = computed(() => ({
  "disabled": disabled.value,
  "error": error.value,
  "required": required.value,
  "readOnly": readOnly.value,
  "resize": resizeOptions[resizeIndex.value],
  "wrap": wrapOptions[wrapIndex.value],
  "fullWidth": fullWidth.value,
}));

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
  ["error", controlledProps.value["error"]],
  ["required", controlledProps.value["required"]],
  ["readOnly", controlledProps.value["readOnly"]],
  ["resize", controlledProps.value["resize"]],
  ["wrap", controlledProps.value["wrap"]],
  ["fullWidth", controlledProps.value["fullWidth"]],
]
	.map(([name, value]) => '      ' + String(name) + '="' + formatAttrValueForCode(value) + '"')
  .join("\n");

const codeString = `<script setup lang="ts">
${'</'}script>

<template>
  <div>
    <ifx-textarea
      caption="Caption text, description, error notification"
      :cols=43
      label="Label Text"
      name="textarea"
      placeholder="Placeholder"
      :rows=5
      value=""
      __CONTROLLED_ATTRS__ />
  </div>
${'</'}template>`.replace("__CONTROLLED_ATTRS__", controlledAttrsCode);

</script>

<template>
  <div>
    <ifx-textarea
      caption="Caption text, description, error notification"
      :cols=43
      label="Label Text"
      name="textarea"
      placeholder="Placeholder"
      :rows=5
      value=""
      v-bind="controlledProps" />
    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <IfxButton variant="secondary" @click="toggleDisabled">Toggle Disabled</IfxButton>
      <IfxButton variant="secondary" @click="toggleError">Toggle Error</IfxButton>
      <IfxButton variant="secondary" @click="toggleRequired">Toggle Required</IfxButton>
      <IfxButton variant="secondary" @click="toggleReadOnly">Toggle ReadOnly</IfxButton>
      <IfxButton variant="secondary" @click="toggleResize">Toggle Resize</IfxButton>
      <IfxButton variant="secondary" @click="toggleWrap">Toggle Wrap</IfxButton>
      <IfxButton variant="secondary" @click="toggleFullWidth">Toggle FullWidth</IfxButton>
    </div>

    <div class="state">
        <div><b>disabled:</b> {{ String(disabled.value) }}</div>
        <div><b>error:</b> {{ String(error.value) }}</div>
        <div><b>required:</b> {{ String(required.value) }}</div>
        <div><b>readOnly:</b> {{ String(readOnly.value) }}</div>
        <div><b>resize:</b> {{ String(resizeOptions[resizeIndex.value]) }}</div>
        <div><b>wrap:</b> {{ String(wrapOptions[wrapIndex.value]) }}</div>
        <div><b>fullWidth:</b> {{ String(fullWidth.value) }}</div>
    </div>

    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
