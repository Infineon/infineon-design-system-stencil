<script setup lang="ts">

import { IfxBasicTable, IfxButton, IfxTextField } from '@infineon/infineon-design-system-vue';

import { computed, ref } from 'vue';

const tableHeight = ref("auto");
const rowHeightOptions = ["compact","default"];
const rowHeightIndex = ref(1);
const cols = ref("[{\"headerName\":\"ID\",\"field\":\"id\",\"sortable\":true,\"sort\":\"desc\",\"unSortIcon\":true},{\"headerName\":\"Item\",\"field\":\"item\",\"sortable\":true,\"unSortIcon\":true},{\"headerName\":\"Price\",\"field\":\"price\"},{\"headerName\":\"Date\",\"field\":\"date\"}]");
const rows = ref("[{\"id\":1,\"item\":\"Item 1\",\"price\":356,\"date\":\"2025-05-11\"},{\"id\":2,\"item\":\"Item 2\",\"price\":55,\"date\":\"2025-03-26\"},{\"id\":3,\"item\":\"Item 3\",\"price\":24},{\"id\":4,\"item\":\"Item 4\",\"price\":874,\"date\":\"2025-04-30\"},{\"id\":5,\"item\":\"Item 5\",\"price\":689,\"date\":\"2025-09-14\"},{\"id\":6,\"item\":\"Item 6\",\"price\":46},{\"id\":7,\"item\":\"Item 7\",\"price\":421,\"date\":\"2026-07-25\"},{\"id\":8,\"item\":\"Item 8\",\"price\":17,\"date\":\"2026-06-28\"},{\"id\":9,\"item\":\"Item 9\",\"price\":752},{\"id\":10,\"item\":\"Item 10\",\"price\":73,\"date\":\"2026-01-27\"},{\"id\":11,\"item\":\"Item 11\",\"price\":94,\"date\":\"2026-10-31\"},{\"id\":12,\"item\":\"Item 12\",\"price\":846}]");
const variantOptions = ["default","zebra"];
const variantIndex = ref(0);

const toggleTableHeight = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; tableHeight.value = String(raw); };
const toggleRowHeight = () => (rowHeightIndex.value = (rowHeightIndex.value + 1) % rowHeightOptions.length);
const toggleCols = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; cols.value = String(raw); };
const toggleRows = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; rows.value = String(raw); };
const toggleVariant = () => (variantIndex.value = (variantIndex.value + 1) % variantOptions.length);

const controlledProps = computed(() => ({
  "tableHeight": tableHeight.value,
  "rowHeight": rowHeightOptions[rowHeightIndex.value],
  "cols": cols.value,
  "rows": rows.value,
  "variant": variantOptions[variantIndex.value],
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
  ["tableHeight", controlledProps.value["tableHeight"]],
  ["rowHeight", controlledProps.value["rowHeight"]],
  ["cols", controlledProps.value["cols"]],
  ["rows", controlledProps.value["rows"]],
  ["variant", controlledProps.value["variant"]],
]
	.map(([name, value]) => '      ' + String(name) + '="' + formatAttrValueForCode(value) + '"')
  .join("\n");

const codeStringWithAttrs = `<script setup lang="ts">
${'</'}script>

<template>
  <div>
    <ifx-basic-table __CONTROLLED_ATTRS__ />
  </div>
${'</'}template>`.replace("__CONTROLLED_ATTRS__", controlledAttrsCode);

const codeString = codeStringWithAttrs;

</script>

<template>
  <div>
    <ifx-basic-table v-bind="controlledProps" />
    <h3 class="controls-title">Controls</h3>
	<div class="controls controls-toggle">
      <IfxButton variant="secondary" @click="toggleRowHeight">Toggle RowHeight</IfxButton>
      <IfxButton variant="secondary" @click="toggleVariant">Toggle Variant</IfxButton>
    </div>
	<div class="controls controls-input">
      <IfxTextField label="tableHeight" type="text" :value="String(tableHeight)" @input="toggleTableHeight" @ifxInput="toggleTableHeight" />
      <IfxTextField label="cols" type="text" :value="String(cols)" @input="toggleCols" @ifxInput="toggleCols" />
      <IfxTextField label="rows" type="text" :value="String(rows)" @input="toggleRows" @ifxInput="toggleRows" />
    </div>

    <div class="state">
        <div><b>tableHeight:</b> {{ String(tableHeight) }}</div>
        <div><b>rowHeight:</b> {{ String(rowHeightOptions[rowHeightIndex]) }}</div>
        <div><b>cols:</b> {{ String(cols) }}</div>
        <div><b>rows:</b> {{ String(rows) }}</div>
        <div><b>variant:</b> {{ String(variantOptions[variantIndex]) }}</div>
    </div>

    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
