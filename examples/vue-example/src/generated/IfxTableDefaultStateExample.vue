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

const handleSortChange = (event: CustomEvent) => {
  console.log('ifxSortChange:', event);
  // Add your handler logic here
};

const codeString = `<script setup lang="ts">
const handleSortChange = (event: CustomEvent) => {
  console.log('ifxSortChange:', event);
  // Add your handler logic here
};
${'</'}script>

<template>
  <div>
    <ifx-table
      row-height="default"
      cols='[{"headerName":"ID","field":"id","sortable":true,"sort":"desc","unSortIcon":true},{"headerName":"Item","field":"item","sortable":true,"unSortIcon":true},{"headerName":"Price","field":"price"},{"headerName":"Date","field":"date"}]'
      rows='[{"id":"1","item":"Item 1","price":356,"date":"2025-06-25"},{"id":"2","item":"Item 2","price":55,"date":"2025-03-26"},{"id":"3","item":"Item 3","price":24},{"id":"4","item":"x","price":874},{"id":"5","item":"x","price":689},{"id":"6","item":"x","price":46},{"id":"7","item":"Item 7","price":421},{"id":"8","item":"Item 8","price":17},{"id":"9","item":"x","price":752},{"id":"10","item":"Item 10","price":73},{"id":"11","item":"x","price":94}]'
      table-height="auto"
      pagination-items-per-page='[{"value":"10","selected":true}, {"value":"20","selected":false}, {"value":"30","selected":false}, {"value":"all","selected":false}]'
      filter-orientation="none"
      variant="default"
      :fit-column="false"
      :column-min-width=200
      :column-width=100
      headline="Matching results"
      :headline-number=0
      :pagination="false"
      :server-side-pagination="false"
      :show-loading="false"
      :enable-selection="false"
      :fit-columns="false"
      @ifxSortChange="handleSortChange" />
  </div>
${'</'}template>`.replace("__CONTROLLED_ATTRS__", controlledAttrsCode);

const codeString = codeStringWithAttrs;

</script>

<template>
  <div>
    <ifx-table
      row-height="default"
      cols='[{"headerName":"ID","field":"id","sortable":true,"sort":"desc","unSortIcon":true},{"headerName":"Item","field":"item","sortable":true,"unSortIcon":true},{"headerName":"Price","field":"price"},{"headerName":"Date","field":"date"}]'
      rows='[{"id":"1","item":"Item 1","price":356,"date":"2025-06-25"},{"id":"2","item":"Item 2","price":55,"date":"2025-03-26"},{"id":"3","item":"Item 3","price":24},{"id":"4","item":"x","price":874},{"id":"5","item":"x","price":689},{"id":"6","item":"x","price":46},{"id":"7","item":"Item 7","price":421},{"id":"8","item":"Item 8","price":17},{"id":"9","item":"x","price":752},{"id":"10","item":"Item 10","price":73},{"id":"11","item":"x","price":94}]'
      table-height="auto"
      pagination-items-per-page='[{"value":"10","selected":true}, {"value":"20","selected":false}, {"value":"30","selected":false}, {"value":"all","selected":false}]'
      filter-orientation="none"
      variant="default"
      :fit-column="false"
      :column-min-width=200
      :column-width=100
      headline="Matching results"
      :headline-number=0
      :pagination="false"
      :server-side-pagination="false"
      :show-loading="false"
      :enable-selection="false"
      :fit-columns="false"
      @ifxSortChange="handleSortChange" />
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
