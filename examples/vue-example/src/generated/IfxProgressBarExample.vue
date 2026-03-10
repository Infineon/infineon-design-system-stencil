<script setup lang="ts">

import { IfxButton, IfxProgressBar } from '@infineon/infineon-design-system-vue';

import { computed, ref } from 'vue';

const showLabel = ref(false);
const sizeOptions = ["s","m"];
const sizeIndex = ref(1);

const toggleShowLabel = () => (showLabel.value = !showLabel.value);
const toggleSize = () => (sizeIndex.value = (sizeIndex.value + 1) % sizeOptions.length);

const controlledProps = computed(() => ({
  "showLabel": showLabel.value,
  "size": sizeOptions[sizeIndex.value],
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
  ["showLabel", controlledProps.value["showLabel"]],
  ["size", controlledProps.value["size"]],
]
	.map(([name, value]) => '      ' + String(name) + '="' + formatAttrValueForCode(value) + '"')
  .join("\n");

const codeString = `<script setup lang="ts">
${'</'}script>

<template>
  <div>
    <ifx-progress-bar
      :value=50
      __CONTROLLED_ATTRS__ />
  </div>
${'</'}template>`.replace("__CONTROLLED_ATTRS__", controlledAttrsCode);

</script>

<template>
  <div>
    <ifx-progress-bar
      :value=50
      v-bind="controlledProps" />
    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <IfxButton variant="secondary" @click="toggleShowLabel">Toggle ShowLabel</IfxButton>
      <IfxButton variant="secondary" @click="toggleSize">Toggle Size</IfxButton>
    </div>

    <div class="state">
        <div><b>showLabel:</b> {{ String(showLabel.value) }}</div>
        <div><b>size:</b> {{ String(sizeOptions[sizeIndex.value]) }}</div>
    </div>

    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
