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

const handleItemsPerPageChange = (event: CustomEvent) => {
  console.log('ifxItemsPerPageChange:', event);
  // Add your handler logic here
};

const handlePageChange = (event: CustomEvent) => {
  console.log('ifxPageChange:', event);
  // Add your handler logic here
};

const codeString = `<script setup lang="ts">
const handleItemsPerPageChange = (event: CustomEvent) => {
  console.log('ifxItemsPerPageChange:', event);
  // Add your handler logic here
};

const handlePageChange = (event: CustomEvent) => {
  console.log('ifxPageChange:', event);
  // Add your handler logic here
};
${'</'}script>

<template>
  <div>
    <ifx-pagination
      :total=50
      :current-page=1
      show-items-per-page=""
      items-per-page='[{"value":"10","selected":true}, {"value":"20","selected":false}, {"value":"30","selected":false}, {"value":"all","selected":false}]'
      items-per-page-label="Result per Pages"
      @ifxItemsPerPageChange="handleItemsPerPageChange"
      @ifxPageChange="handlePageChange" />
  </div>
${'</'}template>`.replace("__CONTROLLED_ATTRS__", controlledAttrsCode);

const codeString = codeStringWithAttrs;

</script>

<template>
  <div>
    <ifx-pagination
      :total=50
      :current-page=1
      show-items-per-page=""
      items-per-page='[{"value":"10","selected":true}, {"value":"20","selected":false}, {"value":"30","selected":false}, {"value":"all","selected":false}]'
      items-per-page-label="Result per Pages"
      @ifxItemsPerPageChange="handleItemsPerPageChange"
      @ifxPageChange="handlePageChange" />
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
