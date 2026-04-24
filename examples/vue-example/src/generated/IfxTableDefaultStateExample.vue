<script setup lang="ts">
import { computed, ref } from 'vue';

import { IfxButton, IfxTable, IfxTextField } from '@infineon/infineon-design-system-vue';

const tableHeight = ref("auto");
const pagination = ref(false);
const serverSidePagination = ref(false);
const paginationItemsPerPage = ref("[{\"value\":\"10\",\"selected\":true}, {\"value\":\"20\",\"selected\":false}, {\"value\":\"30\",\"selected\":false}, {\"value\":\"all\",\"selected\":false}]");
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
const showMoreFilters = ref("");

const toggleTableHeight = (nextValue: string) => { tableHeight.value = nextValue; };
const togglePagination = () => { pagination.value = !pagination.value; };
const toggleServerSidePagination = () => { serverSidePagination.value = !serverSidePagination.value; };
const togglePaginationItemsPerPage = (nextValue: string) => { paginationItemsPerPage.value = nextValue; };
const toggleShowLoading = () => { showLoading.value = !showLoading.value; };
const toggleRowHeight = () => { rowHeightIndex.value = (rowHeightIndex.value + 1) % rowHeightOptions.length; };
const toggleEnableSelection = () => { enableSelection.value = !enableSelection.value; };
const toggleFilterOrientation = () => { filterOrientationIndex.value = (filterOrientationIndex.value + 1) % filterOrientationOptions.length; };
const toggleCols = (nextValue: string) => { cols.value = nextValue; };
const toggleFitColumns = () => { fitColumns.value = !fitColumns.value; };
const toggleColumnMinWidth = (nextValue: string) => { columnMinWidth.value = nextValue; };
const toggleColumnWidth = (nextValue: string) => { columnWidth.value = nextValue; };
const toggleRows = (nextValue: string) => { rows.value = nextValue; };
const toggleVariant = () => { variantIndex.value = (variantIndex.value + 1) % variantOptions.length; };
const toggleHeadline = (nextValue: string) => { headline.value = nextValue; };
const toggleHeadlineNumber = (nextValue: string) => { headlineNumber.value = nextValue; };
const toggleShowMoreFilters = (nextValue: string) => { showMoreFilters.value = nextValue; };

const controlledProps = computed<Record<string, unknown>>(() => ({
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
  "showMoreFilters": showMoreFilters.value,
}));

const handleSortChange = (event: CustomEvent) => {
  console.log('ifxSortChange:', event);
  // Add your handler logic here
};

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
  ["pagination", pagination.value],
  ["serverSidePagination", serverSidePagination.value],
  ["paginationItemsPerPage", paginationItemsPerPage.value],
  ["showLoading", showLoading.value],
  ["rowHeight", rowHeightOptions[rowHeightIndex.value]],
  ["enableSelection", enableSelection.value],
  ["filterOrientation", filterOrientationOptions[filterOrientationIndex.value]],
  ["cols", cols.value],
  ["fitColumns", fitColumns.value],
  ["columnMinWidth", columnMinWidth.value],
  ["columnWidth", columnWidth.value],
  ["rows", rows.value],
  ["variant", variantOptions[variantIndex.value]],
  ["headline", headline.value],
  ["headlineNumber", headlineNumber.value],
  ["showMoreFilters", showMoreFilters.value],
]
  .map(([name, value]) => '        ' + formatPropValueForCode(String(name), value))
  .join('\n'));

const codeTemplate = computed(() => `<script setup lang="ts">
import { IfxTable } from '@infineon/infineon-design-system-vue';

const handleSortChange = (event: CustomEvent) => {
  console.log('ifxSortChange:', event);
  // Add your handler logic here
};
${'</'}script>

<template>
  <div>
    <ifx-table
      :fit-column="false"
      @ifxSortChange="handleSortChange"
      __CONTROLLED_PROPS__ />
  </div>
${'</'}template>`.replace("__CONTROLLED_PROPS__", controlledPropsCode.value));

const codeString = codeTemplate;
</script>

<template>
  <div>
    <ifx-table
      :fit-column="false"
      @ifxSortChange="handleSortChange"
      v-bind="controlledProps" />
    <h3 class="controls-title">Controls</h3>
    <div class="controls controls-toggle">
        <ifx-button variant="secondary" @click="togglePagination">Toggle Pagination</ifx-button>
        <ifx-button variant="secondary" @click="toggleServerSidePagination">Toggle ServerSidePagination</ifx-button>
        <ifx-button variant="secondary" @click="toggleShowLoading">Toggle ShowLoading</ifx-button>
        <ifx-button variant="secondary" @click="toggleRowHeight">Toggle RowHeight</ifx-button>
        <ifx-button variant="secondary" @click="toggleEnableSelection">Toggle EnableSelection</ifx-button>
        <ifx-button variant="secondary" @click="toggleFilterOrientation">Toggle FilterOrientation</ifx-button>
        <ifx-button variant="secondary" @click="toggleFitColumns">Toggle FitColumns</ifx-button>
        <ifx-button variant="secondary" @click="toggleVariant">Toggle Variant</ifx-button>
    </div>
    <div class="controls controls-input">
        <ifx-text-field label="tableHeight" type="text" :value="String(tableHeight)" @input="toggleTableHeight(getInputValue($event))" />
        <ifx-text-field label="paginationItemsPerPage" type="text" :value="String(paginationItemsPerPage)" @input="togglePaginationItemsPerPage(getInputValue($event))" />
        <ifx-text-field label="cols" type="text" :value="String(cols)" @input="toggleCols(getInputValue($event))" />
        <ifx-text-field label="columnMinWidth" type="text" :value="String(columnMinWidth)" @input="toggleColumnMinWidth(getInputValue($event))" />
        <ifx-text-field label="columnWidth" type="text" :value="String(columnWidth)" @input="toggleColumnWidth(getInputValue($event))" />
        <ifx-text-field label="rows" type="text" :value="String(rows)" @input="toggleRows(getInputValue($event))" />
        <ifx-text-field label="headline" type="text" :value="String(headline)" @input="toggleHeadline(getInputValue($event))" />
        <ifx-text-field label="headlineNumber" type="text" :value="String(headlineNumber)" @input="toggleHeadlineNumber(getInputValue($event))" />
        <ifx-text-field label="showMoreFilters" type="text" :value="String(showMoreFilters)" @input="toggleShowMoreFilters(getInputValue($event))" />
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
      <div><b>showMoreFilters:</b> {{ String(showMoreFilters) }}</div>
    </div>
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
