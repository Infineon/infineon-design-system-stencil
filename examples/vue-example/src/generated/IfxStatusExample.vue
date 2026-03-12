<script setup lang="ts">

import { IfxButton, IfxStatus, IfxTextField } from '@infineon/infineon-design-system-vue';

import { computed, ref } from 'vue';

const label = ref("text");
const border = ref(true);
const colorOptions = ["engineering-100","engineering-200","engineering-300","engineering-400","engineering-500","engineering-600","ocean-100","ocean-200","ocean-300","ocean-400","ocean-500","ocean-600","ocean-700","red-500","red-600","red-700","orange-500","green-500","lawn-400","lawn-500","lawn-700","berry-400","berry-500","sun-400","sun-500","sand-400","sand-500"];
const colorIndex = ref(16);

const toggleLabel = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; label.value = String(raw); };
const toggleBorder = () => (border.value = !border.value);
const toggleColor = () => (colorIndex.value = (colorIndex.value + 1) % colorOptions.length);

const controlledProps = computed(() => ({
  "label": label.value,
  "border": border.value,
  "color": colorOptions[colorIndex.value],
}));
const boundProps = controlledProps;

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
  ["label", controlledProps.value["label"]],
  ["border", controlledProps.value["border"]],
  ["color", controlledProps.value["color"]],
]
	.map(([name, value]) => '      ' + String(name) + '="' + formatAttrValueForCode(value) + '"')
  .join("\n");

const codeStringWithAttrs = `<script setup lang="ts">
${'</'}script>

<template>
  <div>
    <ifx-status __CONTROLLED_ATTRS__ />
  </div>
${'</'}template>`.replace("__CONTROLLED_ATTRS__", controlledAttrsCode);

const codeString = codeStringWithAttrs;

</script>

<template>
  <div>
    <ifx-status v-bind="controlledProps" />
    <h3 class="controls-title">Controls</h3>
	<div class="controls controls-toggle">
      <IfxButton variant="secondary" @click="toggleBorder">Toggle Border</IfxButton>
      <IfxButton variant="secondary" @click="toggleColor">Toggle Color</IfxButton>
    </div>
	<div class="controls controls-input">
      <IfxTextField label="label" type="text" :value="String(label)" @input="toggleLabel" @ifxInput="toggleLabel" />
    </div>

    <div class="state">
        <div><b>label:</b> {{ String(label) }}</div>
        <div><b>border:</b> {{ String(border) }}</div>
        <div><b>color:</b> {{ String(colorOptions[colorIndex]) }}</div>
    </div>

    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
