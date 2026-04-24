<script setup lang="ts">
import { computed, ref } from 'vue';

import { IfxBasicTable, IfxButton, IfxTextField } from '@infineon/infineon-design-system-vue';

const tableHeight = ref("auto");
const rowHeightOptions = ["compact","default"];
const rowHeightIndex = ref(1);
const cols = ref("[{\"headerName\":\"ID\",\"field\":\"id\",\"sortable\":true,\"sort\":\"desc\",\"unSortIcon\":true},{\"headerName\":\"Item\",\"field\":\"item\",\"sortable\":true,\"unSortIcon\":true},{\"headerName\":\"Price\",\"field\":\"price\"},{\"headerName\":\"Date\",\"field\":\"date\"}]");
const rows = ref("[{\"id\":1,\"item\":\"Item 1\",\"price\":356,\"date\":\"2025-05-11\"},{\"id\":2,\"item\":\"Item 2\",\"price\":55,\"date\":\"2025-03-26\"},{\"id\":3,\"item\":\"Item 3\",\"price\":24},{\"id\":4,\"item\":\"Item 4\",\"price\":874,\"date\":\"2025-04-30\"},{\"id\":5,\"item\":\"Item 5\",\"price\":689,\"date\":\"2025-09-14\"},{\"id\":6,\"item\":\"Item 6\",\"price\":46},{\"id\":7,\"item\":\"Item 7\",\"price\":421,\"date\":\"2026-07-25\"},{\"id\":8,\"item\":\"Item 8\",\"price\":17,\"date\":\"2026-06-28\"},{\"id\":9,\"item\":\"Item 9\",\"price\":752},{\"id\":10,\"item\":\"Item 10\",\"price\":73,\"date\":\"2026-01-27\"},{\"id\":11,\"item\":\"Item 11\",\"price\":94,\"date\":\"2026-10-31\"},{\"id\":12,\"item\":\"Item 12\",\"price\":846}]");
const variantOptions = ["default","zebra"];
const variantIndex = ref(0);

const toggleTableHeight = (nextValue: string) => { tableHeight.value = nextValue; };
const toggleRowHeight = () => { rowHeightIndex.value = (rowHeightIndex.value + 1) % rowHeightOptions.length; };
const toggleCols = (nextValue: string) => { cols.value = nextValue; };
const toggleRows = (nextValue: string) => { rows.value = nextValue; };
const toggleVariant = () => { variantIndex.value = (variantIndex.value + 1) % variantOptions.length; };

const controlledProps = computed<Record<string, unknown>>(() => ({
  "tableHeight": tableHeight.value,
  "rowHeight": rowHeightOptions[rowHeightIndex.value],
  "cols": cols.value,
  "rows": rows.value,
  "variant": variantOptions[variantIndex.value],
}));

const getInputValue = (event: Event) => String((event.target as HTMLInputElement | null)?.value ?? "");

const formatPropValueForCode = (name: string, value: unknown): string => {
  if (typeof value === 'boolean') return ':' + name + '="' + String(value) + '"';
  if (typeof value === 'number') return ':' + name + '="' + String(value) + '"';
  if (value === null) return ':' + name + '="null"';
  if (Array.isArray(value) || (typeof value === 'object' && value !== null)) {
    const escaped = JSON.stringify(value).replace(/'/g, "\\'");
    return ":" + name + "='" + escaped + "'";
  }
  const escaped = String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
  return name + '="' + escaped + '"';
};

const controlledPropsCode = computed(() => [
  ["tableHeight", tableHeight.value],
  ["rowHeight", rowHeightOptions[rowHeightIndex.value]],
  ["cols", cols.value],
  ["rows", rows.value],
  ["variant", variantOptions[variantIndex.value]],
]
  .map(([name, value]) => '        ' + formatPropValueForCode(String(name), value))
  .join('\n'));

const codeTemplate = computed(() => `<script setup lang="ts">
import { IfxBasicTable } from '@infineon/infineon-design-system-vue';
${'</'}script>

<template>
  <div>
    <ifx-basic-table __CONTROLLED_PROPS__ />
  </div>
${'</'}template>`.replace("__CONTROLLED_PROPS__", controlledPropsCode.value));

const codeString = codeTemplate;
</script>

<template>
  <div>
    <ifx-basic-table v-bind="controlledProps" />
    <h3 class="controls-title">Controls</h3>
    <div class="controls controls-toggle">
        <ifx-button variant="secondary" @click="toggleRowHeight">Toggle RowHeight</ifx-button>
        <ifx-button variant="secondary" @click="toggleVariant">Toggle Variant</ifx-button>
    </div>
    <div class="controls controls-input">
        <ifx-text-field label="tableHeight" type="text" :value="String(tableHeight)" @input="toggleTableHeight(getInputValue($event))" />
        <ifx-text-field label="cols" type="text" :value="String(cols)" @input="toggleCols(getInputValue($event))" />
        <ifx-text-field label="rows" type="text" :value="String(rows)" @input="toggleRows(getInputValue($event))" />
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
