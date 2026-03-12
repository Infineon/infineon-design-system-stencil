<script setup lang="ts">

import { IfxButton, IfxPagination, IfxTextField } from '@infineon/infineon-design-system-vue';

import { computed, ref } from 'vue';

const currentPage = ref("1");
const total = ref("50");
const itemsPerPage = ref("[{\"value\":\"10\",\"selected\":true}, {\"value\":\"20\",\"selected\":false}, {\"value\":\"30\",\"selected\":false}]");
const showItemsPerPage = ref(true);

const toggleCurrentPage = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; currentPage.value = String(raw); };
const toggleTotal = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; total.value = String(raw); };
const toggleItemsPerPage = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; itemsPerPage.value = String(raw); };
const toggleShowItemsPerPage = () => (showItemsPerPage.value = !showItemsPerPage.value);

const controlledProps = computed(() => ({
  "currentPage": currentPage.value,
  "total": total.value,
  "itemsPerPage": itemsPerPage.value,
  "showItemsPerPage": showItemsPerPage.value,
}));
const boundProps = controlledProps;

const handlePageChange = (event: CustomEvent) => {
  console.log('ifxPageChange:', event);
  // Add your handler logic here
};

const handleItemsPerPageChange = (event: CustomEvent) => {
  console.log('ifxItemsPerPageChange:', event);
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
  ["currentPage", controlledProps.value["currentPage"]],
  ["total", controlledProps.value["total"]],
  ["itemsPerPage", controlledProps.value["itemsPerPage"]],
  ["showItemsPerPage", controlledProps.value["showItemsPerPage"]],
]
	.map(([name, value]) => '      ' + String(name) + '="' + formatAttrValueForCode(value) + '"')
  .join("\n");

const codeStringWithAttrs = `<script setup lang="ts">
const handlePageChange = (event: CustomEvent) => {
  console.log('ifxPageChange:', event);
  // Add your handler logic here
};

const handleItemsPerPageChange = (event: CustomEvent) => {
  console.log('ifxItemsPerPageChange:', event);
  // Add your handler logic here
};
${'</'}script>

<template>
  <div>
    <ifx-pagination
      @ifxPageChange="handlePageChange"
      @ifxItemsPerPageChange="handleItemsPerPageChange"
      __CONTROLLED_ATTRS__ />
  </div>
${'</'}template>`.replace("__CONTROLLED_ATTRS__", controlledAttrsCode);

const codeString = codeStringWithAttrs;

</script>

<template>
  <div>
    <ifx-pagination
      @ifxPageChange="handlePageChange"
      @ifxItemsPerPageChange="handleItemsPerPageChange"
      v-bind="controlledProps" />
    <h3 class="controls-title">Controls</h3>
	<div class="controls controls-toggle">
      <IfxButton variant="secondary" @click="toggleShowItemsPerPage">Toggle ShowItemsPerPage</IfxButton>
    </div>
	<div class="controls controls-input">
      <IfxTextField label="currentPage" type="text" :value="String(currentPage)" @input="toggleCurrentPage" @ifxInput="toggleCurrentPage" />
      <IfxTextField label="total" type="text" :value="String(total)" @input="toggleTotal" @ifxInput="toggleTotal" />
      <IfxTextField label="itemsPerPage" type="text" :value="String(itemsPerPage)" @input="toggleItemsPerPage" @ifxInput="toggleItemsPerPage" />
    </div>

    <div class="state">
        <div><b>currentPage:</b> {{ String(currentPage) }}</div>
        <div><b>total:</b> {{ String(total) }}</div>
        <div><b>itemsPerPage:</b> {{ String(itemsPerPage) }}</div>
        <div><b>showItemsPerPage:</b> {{ String(showItemsPerPage) }}</div>
    </div>

    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
