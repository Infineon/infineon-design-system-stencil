<script setup lang="ts">

import { IfxButton, IfxPagination } from '@infineon/infineon-design-system-vue';

import { computed, ref } from 'vue';

const showItemsPerPage = ref(true);

const toggleShowItemsPerPage = () => (showItemsPerPage.value = !showItemsPerPage.value);

const controlledProps = computed(() => ({
  "showItemsPerPage": showItemsPerPage.value,
}));

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
  ["showItemsPerPage", controlledProps.value["showItemsPerPage"]],
]
	.map(([name, value]) => '      ' + String(name) + '="' + formatAttrValueForCode(value) + '"')
  .join("\n");

const codeString = `<script setup lang="ts">
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
      :total=50
      :current-page=1
      items-per-page='[{"value":"10","selected":true}, {"value":"20","selected":false}, {"value":"30","selected":false}]'
      @ifxPageChange="handlePageChange"
      @ifxItemsPerPageChange="handleItemsPerPageChange"
      __CONTROLLED_ATTRS__ />
  </div>
${'</'}template>`.replace("__CONTROLLED_ATTRS__", controlledAttrsCode);

</script>

<template>
  <div>
    <ifx-pagination
      :total=50
      :current-page=1
      items-per-page='[{"value":"10","selected":true}, {"value":"20","selected":false}, {"value":"30","selected":false}]'
      @ifxPageChange="handlePageChange"
      @ifxItemsPerPageChange="handleItemsPerPageChange"
      v-bind="controlledProps" />
    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <IfxButton variant="secondary" @click="toggleShowItemsPerPage">Toggle ShowItemsPerPage</IfxButton>
    </div>

    <div class="state">
        <div><b>showItemsPerPage:</b> {{ String(showItemsPerPage.value) }}</div>
    </div>

    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
