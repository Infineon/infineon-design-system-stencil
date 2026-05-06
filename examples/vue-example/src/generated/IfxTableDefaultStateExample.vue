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

const handleTableHeightChange = (nextValue: string) => { tableHeight.value = nextValue; };
const handlePaginationChange = () => { pagination.value = !pagination.value; };
const handleServerSidePaginationChange = () => { serverSidePagination.value = !serverSidePagination.value; };
const handlePaginationItemsPerPageChange = (nextValue: string) => { paginationItemsPerPage.value = nextValue; };
const handleShowLoadingChange = () => { showLoading.value = !showLoading.value; };
const handleRowHeightChange = () => { rowHeightIndex.value = (rowHeightIndex.value + 1) % rowHeightOptions.length; };
const handleEnableSelectionChange = () => { enableSelection.value = !enableSelection.value; };
const handleFilterOrientationChange = () => { filterOrientationIndex.value = (filterOrientationIndex.value + 1) % filterOrientationOptions.length; };
const handleColsChange = (nextValue: string) => { cols.value = nextValue; };
const handleFitColumnsChange = () => { fitColumns.value = !fitColumns.value; };
const handleColumnMinWidthChange = (nextValue: string) => { columnMinWidth.value = nextValue; };
const handleColumnWidthChange = (nextValue: string) => { columnWidth.value = nextValue; };
const handleRowsChange = (nextValue: string) => { rows.value = nextValue; };
const handleVariantChange = () => { variantIndex.value = (variantIndex.value + 1) % variantOptions.length; };
const handleHeadlineChange = (nextValue: string) => { headline.value = nextValue; };
const handleHeadlineNumberChange = (nextValue: string) => { headlineNumber.value = nextValue; };

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
        <ifx-button variant="secondary" @click="handlePaginationChange">Toggle Pagination</ifx-button>
        <ifx-button variant="secondary" @click="handleServerSidePaginationChange">Toggle ServerSidePagination</ifx-button>
        <ifx-button variant="secondary" @click="handleShowLoadingChange">Toggle ShowLoading</ifx-button>
        <ifx-button variant="secondary" @click="handleRowHeightChange">Toggle RowHeight</ifx-button>
        <ifx-button variant="secondary" @click="handleEnableSelectionChange">Toggle EnableSelection</ifx-button>
        <ifx-button variant="secondary" @click="handleFilterOrientationChange">Toggle FilterOrientation</ifx-button>
        <ifx-button variant="secondary" @click="handleFitColumnsChange">Toggle FitColumns</ifx-button>
        <ifx-button variant="secondary" @click="handleVariantChange">Toggle Variant</ifx-button>
    </div>
    <div class="controls controls-input">
        <ifx-text-field label="tableHeight" type="text" :value="String(tableHeight)" @input="handleTableHeightChange(getInputValue($event))" />
        <ifx-text-field label="paginationItemsPerPage" type="text" :value="String(paginationItemsPerPage)" @input="handlePaginationItemsPerPageChange(getInputValue($event))" />
        <ifx-text-field label="cols" type="text" :value="String(cols)" @input="handleColsChange(getInputValue($event))" />
        <ifx-text-field label="columnMinWidth" type="text" :value="String(columnMinWidth)" @input="handleColumnMinWidthChange(getInputValue($event))" />
        <ifx-text-field label="columnWidth" type="text" :value="String(columnWidth)" @input="handleColumnWidthChange(getInputValue($event))" />
        <ifx-text-field label="rows" type="text" :value="String(rows)" @input="handleRowsChange(getInputValue($event))" />
        <ifx-text-field label="headline" type="text" :value="String(headline)" @input="handleHeadlineChange(getInputValue($event))" />
        <ifx-text-field label="headlineNumber" type="text" :value="String(headlineNumber)" @input="handleHeadlineNumberChange(getInputValue($event))" />
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
