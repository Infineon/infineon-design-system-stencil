<script setup lang="ts">
import { computed, ref } from 'vue';

import { IfxButton, IfxPagination, IfxTextField } from '@infineon/infineon-design-system-vue';

const currentPage = ref("1");
const total = ref("50");
const itemsPerPage = ref("[{\"value\":\"10\",\"selected\":true}, {\"value\":\"20\",\"selected\":false}, {\"value\":\"30\",\"selected\":false}, {\"value\":\"all\",\"selected\":false}]");
const showItemsPerPage = ref(true);
const itemsPerPageLabel = ref("Result per Pages");

const handleCurrentPageChange = (nextValue: string) => { currentPage.value = nextValue; };
const handleTotalChange = (nextValue: string) => { total.value = nextValue; };
const handleItemsPerPageChange = (nextValue: string) => { itemsPerPage.value = nextValue; };
const handleShowItemsPerPageChange = () => { showItemsPerPage.value = !showItemsPerPage.value; };
const handleItemsPerPageLabelChange = (nextValue: string) => { itemsPerPageLabel.value = nextValue; };

const controlledProps = computed<Record<string, unknown>>(() => ({
  "currentPage": currentPage.value,
  "total": total.value,
  "itemsPerPage": itemsPerPage.value,
  "showItemsPerPage": showItemsPerPage.value,
  "itemsPerPageLabel": itemsPerPageLabel.value,
}));

const handlePageChange = (event: CustomEvent) => {
  console.log('ifxPageChange:', event);
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
  ["currentPage", currentPage.value],
  ["total", total.value],
  ["itemsPerPage", itemsPerPage.value],
  ["showItemsPerPage", showItemsPerPage.value],
  ["itemsPerPageLabel", itemsPerPageLabel.value],
]
  .map(([name, value]) => '        ' + formatPropValueForCode(String(name), value))
  .join('\n'));

const codeTemplate = computed(() => `<script setup lang="ts">
import { IfxPagination } from '@infineon/infineon-design-system-vue';

const handlePageChange = (event: CustomEvent) => {
  console.log('ifxPageChange:', event);
  // Add your handler logic here
};
${'</'}script>

<template>
  <div>
    <ifx-pagination
      @ifxItemsPerPageChange="handleItemsPerPageChange"
      @ifxPageChange="handlePageChange"
      :current-page="String(controlledProps.currentPage ?? "1")"
      :total="String(controlledProps.total ?? "50")"
      :items-per-page="String(controlledProps.itemsPerPage ?? "[{\\"value\\":\\"10\\",\\"selected\\":true}, {\\"value\\":\\"20\\",\\"selected\\":false}, {\\"value\\":\\"30\\",\\"selected\\":false}, {\\"value\\":\\"all\\",\\"selected\\":false}]")"
      :show-items-per-page="String(controlledProps.showItemsPerPage ?? "true")"
      :items-per-page-label="String(controlledProps.itemsPerPageLabel ?? "Result per Pages")"
      __CONTROLLED_PROPS__ />
  </div>
${'</'}template>`.replace("__CONTROLLED_PROPS__", controlledPropsCode.value));

const codeString = codeTemplate;
</script>

<template>
  <div>
    <ifx-pagination
      @ifxItemsPerPageChange="handleItemsPerPageChange"
      @ifxPageChange="handlePageChange"
      :current-page="String(controlledProps.currentPage ?? "1")"
      :total="String(controlledProps.total ?? "50")"
      :items-per-page="String(controlledProps.itemsPerPage ?? "[{\"value\":\"10\",\"selected\":true}, {\"value\":\"20\",\"selected\":false}, {\"value\":\"30\",\"selected\":false}, {\"value\":\"all\",\"selected\":false}]")"
      :show-items-per-page="String(controlledProps.showItemsPerPage ?? "true")"
      :items-per-page-label="String(controlledProps.itemsPerPageLabel ?? "Result per Pages")"
      v-bind="controlledProps" />
    <h3 class="controls-title">Controls</h3>
    <div class="controls controls-toggle">
        <ifx-button variant="secondary" @click="handleShowItemsPerPageChange">Toggle ShowItemsPerPage</ifx-button>
    </div>
    <div class="controls controls-input">
        <ifx-text-field label="currentPage" type="text" :value="String(currentPage)" @input="handleCurrentPageChange(getInputValue($event))" />
        <ifx-text-field label="total" type="text" :value="String(total)" @input="handleTotalChange(getInputValue($event))" />
        <ifx-text-field label="itemsPerPage" type="text" :value="String(itemsPerPage)" @input="handleItemsPerPageChange(getInputValue($event))" />
        <ifx-text-field label="itemsPerPageLabel" type="text" :value="String(itemsPerPageLabel)" @input="handleItemsPerPageLabelChange(getInputValue($event))" />
    </div>

    <div class="state">
      <div><b>currentPage:</b> {{ String(currentPage) }}</div>
      <div><b>total:</b> {{ String(total) }}</div>
      <div><b>itemsPerPage:</b> {{ String(itemsPerPage) }}</div>
      <div><b>showItemsPerPage:</b> {{ String(showItemsPerPage) }}</div>
      <div><b>itemsPerPageLabel:</b> {{ String(itemsPerPageLabel) }}</div>
    </div>
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
