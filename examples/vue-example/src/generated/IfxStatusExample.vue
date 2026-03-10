<script setup lang="ts">

import { IfxButton, IfxStatus } from '@infineon/infineon-design-system-vue';

import { computed, ref } from 'vue';

const border = ref(true);
const colorOptions = ["engineering-100","engineering-200","engineering-300","engineering-400","engineering-500","engineering-600","ocean-100","ocean-200","ocean-300","ocean-400","ocean-500","ocean-600","ocean-700","red-500","red-600","red-700","orange-500","green-500","lawn-400","lawn-500","lawn-700","berry-400","berry-500","sun-400","sun-500","sand-400","sand-500"];
const colorIndex = ref(16);

const toggleBorder = () => (border.value = !border.value);
const toggleColor = () => (colorIndex.value = (colorIndex.value + 1) % colorOptions.length);

const controlledProps = computed(() => ({
  "border": border.value,
  "color": colorOptions[colorIndex.value],
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
  ["border", controlledProps.value["border"]],
  ["color", controlledProps.value["color"]],
]
	.map(([name, value]) => '      ' + String(name) + '="' + formatAttrValueForCode(value) + '"')
  .join("\n");

const codeString = `<script setup lang="ts">
${'</'}script>

<template>
  <div>
    <ifx-status
      label="text"
      __CONTROLLED_ATTRS__ />
  </div>
${'</'}template>`.replace("__CONTROLLED_ATTRS__", controlledAttrsCode);

</script>

<template>
  <div>
    <ifx-status
      label="text"
      v-bind="controlledProps" />
    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <IfxButton variant="secondary" @click="toggleBorder">Toggle Border</IfxButton>
      <IfxButton variant="secondary" @click="toggleColor">Toggle Color</IfxButton>
    </div>

    <div class="state">
        <div><b>border:</b> {{ String(border.value) }}</div>
        <div><b>color:</b> {{ String(colorOptions[colorIndex.value]) }}</div>
    </div>

    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
