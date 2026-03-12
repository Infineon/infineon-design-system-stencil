<script setup lang="ts">

import { IfxButton, IfxTable, IfxTextField } from '@infineon/infineon-design-system-vue';

import { computed, ref } from 'vue';

const tableHeight = ref("auto");
const pagination = ref(false);
const serverSidePagination = ref(false);
const paginationItemsPerPage = ref("[{\"value\":\"10\",\"selected\":true}, {\"value\":\"20\",\"selected\":false}, {\"value\":\"30\",\"selected\":false}]");
const showLoading = ref(false);
const rowHeightOptions = ["compact","default"];
const rowHeightIndex = ref(1);
const enableSelection = ref(false);
const filterOrientationOptions = ["sidebar","topbar","none"];
const filterOrientationIndex = ref(2);
const cols = ref("[{\"headerName\":\"ID\",\"field\":\"id\",\"sortable\":true,\"sort\":\"desc\",\"unSortIcon\":true},{\"headerName\":\"Item\",\"field\":\"item\",\"sortable\":true,\"unSortIcon\":true},{\"headerName\":\"Price\",\"field\":\"price\"},{\"headerName\":\"Date\",\"field\":\"date\"}]");
const fitColumns = ref(false);
const columnMinWidth = ref("200");
const columnWidth = ref("100");
const rows = ref("[{\"id\":\"1\",\"item\":\"Item 1\",\"price\":356,\"date\":\"2025-06-25\"},{\"id\":\"2\",\"item\":\"Item 2\",\"price\":55,\"date\":\"2025-03-26\"},{\"id\":\"3\",\"item\":\"Item 3\",\"price\":24},{\"id\":\"4\",\"item\":\"x\",\"price\":874},{\"id\":\"5\",\"item\":\"x\",\"price\":689},{\"id\":\"6\",\"item\":\"x\",\"price\":46},{\"id\":\"7\",\"item\":\"Item 7\",\"price\":421},{\"id\":\"8\",\"item\":\"Item 8\",\"price\":17},{\"id\":\"9\",\"item\":\"x\",\"price\":752},{\"id\":\"10\",\"item\":\"Item 10\",\"price\":73},{\"id\":\"11\",\"item\":\"x\",\"price\":94}]");
const variantOptions = ["default","zebra"];
const variantIndex = ref(0);
const headline = ref("Matching results");
const headlineNumber = ref("0");

const toggleTableHeight = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; tableHeight.value = String(raw); };
const togglePagination = () => (pagination.value = !pagination.value);
const toggleServerSidePagination = () => (serverSidePagination.value = !serverSidePagination.value);
const togglePaginationItemsPerPage = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; paginationItemsPerPage.value = String(raw); };
const toggleShowLoading = () => (showLoading.value = !showLoading.value);
const toggleRowHeight = () => (rowHeightIndex.value = (rowHeightIndex.value + 1) % rowHeightOptions.length);
const toggleEnableSelection = () => (enableSelection.value = !enableSelection.value);
const toggleFilterOrientation = () => (filterOrientationIndex.value = (filterOrientationIndex.value + 1) % filterOrientationOptions.length);
const toggleCols = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; cols.value = String(raw); };
const toggleFitColumns = () => (fitColumns.value = !fitColumns.value);
const toggleColumnMinWidth = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; columnMinWidth.value = String(raw); };
const toggleColumnWidth = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; columnWidth.value = String(raw); };
const toggleRows = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; rows.value = String(raw); };
const toggleVariant = () => (variantIndex.value = (variantIndex.value + 1) % variantOptions.length);
const toggleHeadline = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; headline.value = String(raw); };
const toggleHeadlineNumber = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; headlineNumber.value = String(raw); };

const controlledProps = computed(() => ({
  "tableHeight": tableHeight.value,
  "pagination": pagination.value,
  "serverSidePagination": serverSidePagination.value,
  "paginationItemsPerPage": paginationItemsPerPage.value,
  "showLoading": showLoading.value,
  "rowHeight": rowHeightOptions[rowHeightIndex.value],
  "enableSelection": enableSelection.value,
  "filterOrientation": filterOrientationOptions[filterOrientationIndex.value],
  "cols": cols.value,
  "fitColumns": fitColumns.value,
  "columnMinWidth": columnMinWidth.value,
  "columnWidth": columnWidth.value,
  "rows": rows.value,
  "variant": variantOptions[variantIndex.value],
  "headline": headline.value,
  "headlineNumber": headlineNumber.value,
}));
const boundProps = controlledProps;

const handleSelectionChange = (event: CustomEvent) => {
  console.log('ifxSelectionChange:', event);
  // Add your handler logic here
};

const handleSortChange = (event: CustomEvent) => {
  console.log('ifxSortChange:', event);
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
  ["tableHeight", controlledProps.value["tableHeight"]],
  ["pagination", controlledProps.value["pagination"]],
  ["serverSidePagination", controlledProps.value["serverSidePagination"]],
  ["paginationItemsPerPage", controlledProps.value["paginationItemsPerPage"]],
  ["showLoading", controlledProps.value["showLoading"]],
  ["rowHeight", controlledProps.value["rowHeight"]],
  ["enableSelection", controlledProps.value["enableSelection"]],
  ["filterOrientation", controlledProps.value["filterOrientation"]],
  ["cols", controlledProps.value["cols"]],
  ["fitColumns", controlledProps.value["fitColumns"]],
  ["columnMinWidth", controlledProps.value["columnMinWidth"]],
  ["columnWidth", controlledProps.value["columnWidth"]],
  ["rows", controlledProps.value["rows"]],
  ["variant", controlledProps.value["variant"]],
  ["headline", controlledProps.value["headline"]],
  ["headlineNumber", controlledProps.value["headlineNumber"]],
]
	.map(([name, value]) => '      ' + String(name) + '="' + formatAttrValueForCode(value) + '"')
  .join("\n");

const codeStringWithAttrs = `<script setup lang="ts">
const handleSelectionChange = (event: CustomEvent) => {
  console.log('ifxSelectionChange:', event);
  // Add your handler logic here
};

const handleSortChange = (event: CustomEvent) => {
  console.log('ifxSortChange:', event);
  // Add your handler logic here
};
${'</'}script>

<template>
  <div>
    <ifx-table
      :fit-column="false"
      @ifxSelectionChange="handleSelectionChange"
      @ifxSortChange="handleSortChange"
      __CONTROLLED_ATTRS__ />
  </div>
${'</'}template>`.replace("__CONTROLLED_ATTRS__", controlledAttrsCode);

const codeString = codeStringWithAttrs;

</script>

<template>
  <div>
    <ifx-table
      :fit-column="false"
      @ifxSelectionChange="handleSelectionChange"
      @ifxSortChange="handleSortChange"
      v-bind="controlledProps" />
    <h3 class="controls-title">Controls</h3>
	<div class="controls controls-toggle">
      <IfxButton variant="secondary" @click="togglePagination">Toggle Pagination</IfxButton>
      <IfxButton variant="secondary" @click="toggleServerSidePagination">Toggle ServerSidePagination</IfxButton>
      <IfxButton variant="secondary" @click="toggleShowLoading">Toggle ShowLoading</IfxButton>
      <IfxButton variant="secondary" @click="toggleRowHeight">Toggle RowHeight</IfxButton>
      <IfxButton variant="secondary" @click="toggleEnableSelection">Toggle EnableSelection</IfxButton>
      <IfxButton variant="secondary" @click="toggleFilterOrientation">Toggle FilterOrientation</IfxButton>
      <IfxButton variant="secondary" @click="toggleFitColumns">Toggle FitColumns</IfxButton>
      <IfxButton variant="secondary" @click="toggleVariant">Toggle Variant</IfxButton>
    </div>
	<div class="controls controls-input">
      <IfxTextField label="tableHeight" type="text" :value="String(tableHeight)" @input="toggleTableHeight" @ifxInput="toggleTableHeight" />
      <IfxTextField label="paginationItemsPerPage" type="text" :value="String(paginationItemsPerPage)" @input="togglePaginationItemsPerPage" @ifxInput="togglePaginationItemsPerPage" />
      <IfxTextField label="cols" type="text" :value="String(cols)" @input="toggleCols" @ifxInput="toggleCols" />
      <IfxTextField label="columnMinWidth" type="text" :value="String(columnMinWidth)" @input="toggleColumnMinWidth" @ifxInput="toggleColumnMinWidth" />
      <IfxTextField label="columnWidth" type="text" :value="String(columnWidth)" @input="toggleColumnWidth" @ifxInput="toggleColumnWidth" />
      <IfxTextField label="rows" type="text" :value="String(rows)" @input="toggleRows" @ifxInput="toggleRows" />
      <IfxTextField label="headline" type="text" :value="String(headline)" @input="toggleHeadline" @ifxInput="toggleHeadline" />
      <IfxTextField label="headlineNumber" type="text" :value="String(headlineNumber)" @input="toggleHeadlineNumber" @ifxInput="toggleHeadlineNumber" />
    </div>

    <div class="state">
        <div><b>tableHeight:</b> {{ String(tableHeight) }}</div>
        <div><b>pagination:</b> {{ String(pagination) }}</div>
        <div><b>serverSidePagination:</b> {{ String(serverSidePagination) }}</div>
        <div><b>paginationItemsPerPage:</b> {{ String(paginationItemsPerPage) }}</div>
        <div><b>showLoading:</b> {{ String(showLoading) }}</div>
        <div><b>rowHeight:</b> {{ String(rowHeightOptions[rowHeightIndex]) }}</div>
        <div><b>enableSelection:</b> {{ String(enableSelection) }}</div>
        <div><b>filterOrientation:</b> {{ String(filterOrientationOptions[filterOrientationIndex]) }}</div>
        <div><b>cols:</b> {{ String(cols) }}</div>
        <div><b>fitColumns:</b> {{ String(fitColumns) }}</div>
        <div><b>columnMinWidth:</b> {{ String(columnMinWidth) }}</div>
        <div><b>columnWidth:</b> {{ String(columnWidth) }}</div>
        <div><b>rows:</b> {{ String(rows) }}</div>
        <div><b>variant:</b> {{ String(variantOptions[variantIndex]) }}</div>
        <div><b>headline:</b> {{ String(headline) }}</div>
        <div><b>headlineNumber:</b> {{ String(headlineNumber) }}</div>
    </div>

    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
