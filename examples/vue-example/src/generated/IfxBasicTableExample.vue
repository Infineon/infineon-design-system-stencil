<script setup lang="ts">

import { IfxBasicTable, IfxButton } from '@infineon/infineon-design-system-vue';

import { computed, ref } from 'vue';

const rowHeightOptions = ["compact","default"];
const rowHeightIndex = ref(1);
const variantOptions = ["default","zebra"];
const variantIndex = ref(0);

const toggleRowHeight = () => (rowHeightIndex.value = (rowHeightIndex.value + 1) % rowHeightOptions.length);
const toggleVariant = () => (variantIndex.value = (variantIndex.value + 1) % variantOptions.length);

const controlledProps = computed(() => ({
  "rowHeight": rowHeightOptions[rowHeightIndex.value],
  "variant": variantOptions[variantIndex.value],
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
  ["rowHeight", controlledProps.value["rowHeight"]],
  ["variant", controlledProps.value["variant"]],
]
	.map(([name, value]) => '      ' + String(name) + '="' + formatAttrValueForCode(value) + '"')
  .join("\n");

const codeString = `<script setup lang="ts">
${'</'}script>

<template>
  <div>
    <ifx-basic-table
      table-height="auto"
      __CONTROLLED_ATTRS__ />
  </div>
${'</'}template>`.replace("__CONTROLLED_ATTRS__", controlledAttrsCode);

</script>

<template>
  <div>
    <ifx-basic-table
      table-height="auto"
      v-bind="controlledProps" />
    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <IfxButton variant="secondary" @click="toggleRowHeight">Toggle RowHeight</IfxButton>
      <IfxButton variant="secondary" @click="toggleVariant">Toggle Variant</IfxButton>
    </div>

    <div class="state">
        <div><b>rowHeight:</b> {{ String(rowHeightOptions[rowHeightIndex.value]) }}</div>
        <div><b>variant:</b> {{ String(variantOptions[variantIndex.value]) }}</div>
    </div>

    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
