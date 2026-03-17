<script setup lang="ts">

import { IfxButton, IfxProgressBar, IfxTextField } from '@infineon/infineon-design-system-vue';

import { computed, ref } from 'vue';

const value = ref(50);
const showLabel = ref(false);
const sizeOptions = ["s","m"];
const sizeIndex = ref(1);

const toggleValue = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; value.value = Number(raw); };
const toggleShowLabel = () => (showLabel.value = !showLabel.value);
const toggleSize = () => (sizeIndex.value = (sizeIndex.value + 1) % sizeOptions.length);

const controlledProps = computed(() => ({
  "value": value.value,
  "showLabel": showLabel.value,
  "size": sizeOptions[sizeIndex.value],
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
  ["value", controlledProps.value["value"]],
  ["showLabel", controlledProps.value["showLabel"]],
  ["size", controlledProps.value["size"]],
]
	.map(([name, value]) => '      ' + String(name) + '="' + formatAttrValueForCode(value) + '"')
  .join("\n");

const codeStringWithAttrs = `<script setup lang="ts">
${'</'}script>

<template>
  <div>
    <ifx-progress-bar __CONTROLLED_ATTRS__ />
  </div>
${'</'}template>`.replace("__CONTROLLED_ATTRS__", controlledAttrsCode);

const codeString = codeStringWithAttrs;

</script>

<template>
  <div>
    <ifx-progress-bar v-bind="controlledProps" />
    <h3 class="controls-title">Controls</h3>
	<div class="controls controls-toggle">
      <IfxButton variant="secondary" @click="toggleShowLabel">Toggle ShowLabel</IfxButton>
      <IfxButton variant="secondary" @click="toggleSize">Toggle Size</IfxButton>
    </div>
	<div class="controls controls-input">
      <IfxTextField label="value" type="number" :value="String(value)" @input="toggleValue" @ifxInput="toggleValue" />
    </div>

    <div class="state">
        <div><b>value:</b> {{ String(value) }}</div>
        <div><b>showLabel:</b> {{ String(showLabel) }}</div>
        <div><b>size:</b> {{ String(sizeOptions[sizeIndex]) }}</div>
    </div>

    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
