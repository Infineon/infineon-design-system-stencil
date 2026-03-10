<script setup lang="ts">

import { IfxButton, IfxTable } from '@infineon/infineon-design-system-vue';

import { computed, ref } from 'vue';

const pagination = ref(false);
const serverSidePagination = ref(false);
const showLoadingOptions = [true,false];
const showLoadingIndex = ref(1);
const rowHeightOptions = ["compact","default"];
const rowHeightIndex = ref(1);
const enableSelectionOptions = [true,false];
const enableSelectionIndex = ref(1);
const filterOrientationOptions = ["sidebar","topbar","none"];
const filterOrientationIndex = ref(2);
const fitColumns = ref(false);
const variantOptions = ["default","zebra"];
const variantIndex = ref(0);

const togglePagination = () => (pagination.value = !pagination.value);
const toggleServerSidePagination = () => (serverSidePagination.value = !serverSidePagination.value);
const toggleShowLoading = () => (showLoadingIndex.value = (showLoadingIndex.value + 1) % showLoadingOptions.length);
const toggleRowHeight = () => (rowHeightIndex.value = (rowHeightIndex.value + 1) % rowHeightOptions.length);
const toggleEnableSelection = () => (enableSelectionIndex.value = (enableSelectionIndex.value + 1) % enableSelectionOptions.length);
const toggleFilterOrientation = () => (filterOrientationIndex.value = (filterOrientationIndex.value + 1) % filterOrientationOptions.length);
const toggleFitColumns = () => (fitColumns.value = !fitColumns.value);
const toggleVariant = () => (variantIndex.value = (variantIndex.value + 1) % variantOptions.length);

const controlledProps = computed(() => ({
  "pagination": pagination.value,
  "serverSidePagination": serverSidePagination.value,
  "showLoading": showLoadingOptions[showLoadingIndex.value],
  "rowHeight": rowHeightOptions[rowHeightIndex.value],
  "enableSelection": enableSelectionOptions[enableSelectionIndex.value],
  "filterOrientation": filterOrientationOptions[filterOrientationIndex.value],
  "fitColumns": fitColumns.value,
  "variant": variantOptions[variantIndex.value],
}));

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
  ["pagination", controlledProps.value["pagination"]],
  ["serverSidePagination", controlledProps.value["serverSidePagination"]],
  ["showLoading", controlledProps.value["showLoading"]],
  ["rowHeight", controlledProps.value["rowHeight"]],
  ["enableSelection", controlledProps.value["enableSelection"]],
  ["filterOrientation", controlledProps.value["filterOrientation"]],
  ["fitColumns", controlledProps.value["fitColumns"]],
  ["variant", controlledProps.value["variant"]],
]
	.map(([name, value]) => '      ' + String(name) + '="' + formatAttrValueForCode(value) + '"')
  .join("\n");

const codeString = `<script setup lang="ts">
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
      table-height="auto"
      :fit-column="false"
      :column-min-width=200
      :column-width=100
      headline="Matching results"
      :headline-number=0
      pagination-items-per-page='[{"value":"10","selected":true}, {"value":"20","selected":false}, {"value":"30","selected":false}]'
      :cols='[{"headerName":"ID","field":"id","sortable":true,"sort":"desc","unSortIcon":true},{"headerName":"Item","field":"item","sortable":true,"unSortIcon":true},{"headerName":"Price","field":"price"},{"headerName":"Date","field":"date"}]'
      :rows='[{"id":"1","item":"Item 1","price":356,"date":"2025-06-25"},{"id":"2","item":"Item 2","price":55,"date":"2025-03-26"},{"id":"3","item":"Item 3","price":24},{"id":"4","item":"x","price":874},{"id":"5","item":"x","price":689},{"id":"6","item":"x","price":46},{"id":"7","item":"Item 7","price":421},{"id":"8","item":"Item 8","price":17},{"id":"9","item":"x","price":752},{"id":"10","item":"Item 10","price":73},{"id":"11","item":"x","price":94}]'
      @ifxSelectionChange="handleSelectionChange"
      @ifxSortChange="handleSortChange"
      __CONTROLLED_ATTRS__ />
  </div>
${'</'}template>`.replace("__CONTROLLED_ATTRS__", controlledAttrsCode);

</script>

<template>
  <div>
    <ifx-table
      table-height="auto"
      :fit-column="false"
      :column-min-width=200
      :column-width=100
      headline="Matching results"
      :headline-number=0
      pagination-items-per-page='[{"value":"10","selected":true}, {"value":"20","selected":false}, {"value":"30","selected":false}]'
      :cols='[{"headerName":"ID","field":"id","sortable":true,"sort":"desc","unSortIcon":true},{"headerName":"Item","field":"item","sortable":true,"unSortIcon":true},{"headerName":"Price","field":"price"},{"headerName":"Date","field":"date"}]'
      :rows='[{"id":"1","item":"Item 1","price":356,"date":"2025-06-25"},{"id":"2","item":"Item 2","price":55,"date":"2025-03-26"},{"id":"3","item":"Item 3","price":24},{"id":"4","item":"x","price":874},{"id":"5","item":"x","price":689},{"id":"6","item":"x","price":46},{"id":"7","item":"Item 7","price":421},{"id":"8","item":"Item 8","price":17},{"id":"9","item":"x","price":752},{"id":"10","item":"Item 10","price":73},{"id":"11","item":"x","price":94}]'
      @ifxSelectionChange="handleSelectionChange"
      @ifxSortChange="handleSortChange"
      v-bind="controlledProps" />
    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <IfxButton variant="secondary" @click="togglePagination">Toggle Pagination</IfxButton>
      <IfxButton variant="secondary" @click="toggleServerSidePagination">Toggle ServerSidePagination</IfxButton>
      <IfxButton variant="secondary" @click="toggleShowLoading">Toggle ShowLoading</IfxButton>
      <IfxButton variant="secondary" @click="toggleRowHeight">Toggle RowHeight</IfxButton>
      <IfxButton variant="secondary" @click="toggleEnableSelection">Toggle EnableSelection</IfxButton>
      <IfxButton variant="secondary" @click="toggleFilterOrientation">Toggle FilterOrientation</IfxButton>
      <IfxButton variant="secondary" @click="toggleFitColumns">Toggle FitColumns</IfxButton>
      <IfxButton variant="secondary" @click="toggleVariant">Toggle Variant</IfxButton>
    </div>

    <div class="state">
        <div><b>pagination:</b> {{ String(pagination.value) }}</div>
        <div><b>serverSidePagination:</b> {{ String(serverSidePagination.value) }}</div>
        <div><b>showLoading:</b> {{ String(showLoadingOptions[showLoadingIndex.value]) }}</div>
        <div><b>rowHeight:</b> {{ String(rowHeightOptions[rowHeightIndex.value]) }}</div>
        <div><b>enableSelection:</b> {{ String(enableSelectionOptions[enableSelectionIndex.value]) }}</div>
        <div><b>filterOrientation:</b> {{ String(filterOrientationOptions[filterOrientationIndex.value]) }}</div>
        <div><b>fitColumns:</b> {{ String(fitColumns.value) }}</div>
        <div><b>variant:</b> {{ String(variantOptions[variantIndex.value]) }}</div>
    </div>

    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
