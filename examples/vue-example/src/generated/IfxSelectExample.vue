<script setup lang="ts">
import { computed, ref } from 'vue';

import { IfxButton, IfxSelect, IfxTextField } from '@infineon/infineon-design-system-vue';

const sizeOptions = ["s","m"];
const sizeIndex = ref(1);
const placeholder = ref(true);
const placeholderValue = ref("Placeholder");
const error = ref(false);
const label = ref("");
const disabled = ref(false);
const caption = ref("");
const required = ref(true);
const showSearch = ref(true);
const showClearButton = ref(true);
const searchPlaceholderValue = ref("Search...");
const options = ref("[{\"value\":\"a\",\"label\":\"option a\",\"selected\":false},{\"value\":\"b\",\"label\":\"option b\",\"selected\":false},{\"value\":\"c\",\"label\":\"option c\",\"selected\":false}]");
const clearSelection = ref("");

const toggleSize = () => { sizeIndex.value = (sizeIndex.value + 1) % sizeOptions.length; };
const togglePlaceholder = () => { placeholder.value = !placeholder.value; };
const togglePlaceholderValue = (nextValue: string) => { placeholderValue.value = nextValue; };
const toggleError = () => { error.value = !error.value; };
const toggleLabel = (nextValue: string) => { label.value = nextValue; };
const toggleDisabled = () => { disabled.value = !disabled.value; };
const toggleCaption = (nextValue: string) => { caption.value = nextValue; };
const toggleRequired = () => { required.value = !required.value; };
const toggleShowSearch = () => { showSearch.value = !showSearch.value; };
const toggleShowClearButton = () => { showClearButton.value = !showClearButton.value; };
const toggleSearchPlaceholderValue = (nextValue: string) => { searchPlaceholderValue.value = nextValue; };
const toggleOptions = (nextValue: string) => { options.value = nextValue; };
const toggleClearSelection = (nextValue: string) => { clearSelection.value = nextValue; };

const controlledProps = computed<Record<string, unknown>>(() => ({
  "size": sizeOptions[sizeIndex.value],
  "placeholder": placeholder.value,
  "placeholderValue": placeholderValue.value,
  "error": error.value,
  "label": label.value,
  "disabled": disabled.value,
  "caption": caption.value,
  "required": required.value,
  "showSearch": showSearch.value,
  "showClearButton": showClearButton.value,
  "searchPlaceholderValue": searchPlaceholderValue.value,
  "options": options.value,
  "clearSelection": clearSelection.value,
}));

const handleInput = (event: CustomEvent) => {
  console.log('ifxInput:', event);
  // Add your handler logic here
};

const handleSelect = (event: CustomEvent) => {
  console.log('ifxSelect:', event);
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
  ["size", sizeOptions[sizeIndex.value]],
  ["placeholder", placeholder.value],
  ["placeholderValue", placeholderValue.value],
  ["error", error.value],
  ["label", label.value],
  ["disabled", disabled.value],
  ["caption", caption.value],
  ["required", required.value],
  ["showSearch", showSearch.value],
  ["showClearButton", showClearButton.value],
  ["searchPlaceholderValue", searchPlaceholderValue.value],
  ["options", options.value],
  ["clearSelection", clearSelection.value],
]
  .map(([name, value]) => '        ' + formatPropValueForCode(String(name), value))
  .join('\n'));

const codeTemplate = computed(() => `<script setup lang="ts">
import { IfxSelect } from '@infineon/infineon-design-system-vue';

const handleInput = (event: CustomEvent) => {
  console.log('ifxInput:', event);
  // Add your handler logic here
};

const handleSelect = (event: CustomEvent) => {
  console.log('ifxSelect:', event);
  // Add your handler logic here
};
${'</'}script>

<template>
  <div>
    <ifx-select
      @ifxInput="handleInput"
      @ifxSelect="handleSelect"
      __CONTROLLED_PROPS__ />
  </div>
${'</'}template>`.replace("__CONTROLLED_PROPS__", controlledPropsCode.value));

const codeString = codeTemplate;
</script>

<template>
  <div>
    <ifx-select
      @ifxInput="handleInput"
      @ifxSelect="handleSelect"
      v-bind="controlledProps" />
    <h3 class="controls-title">Controls</h3>
    <div class="controls controls-toggle">
        <ifx-button variant="secondary" @click="toggleSize">Toggle Size</ifx-button>
        <ifx-button variant="secondary" @click="togglePlaceholder">Toggle Placeholder</ifx-button>
        <ifx-button variant="secondary" @click="toggleError">Toggle Error</ifx-button>
        <ifx-button variant="secondary" @click="toggleDisabled">Toggle Disabled</ifx-button>
        <ifx-button variant="secondary" @click="toggleRequired">Toggle Required</ifx-button>
        <ifx-button variant="secondary" @click="toggleShowSearch">Toggle ShowSearch</ifx-button>
        <ifx-button variant="secondary" @click="toggleShowClearButton">Toggle ShowClearButton</ifx-button>
    </div>
    <div class="controls controls-input">
        <ifx-text-field label="placeholderValue" type="text" :value="String(placeholderValue)" @input="togglePlaceholderValue(getInputValue($event))" />
        <ifx-text-field label="label" type="text" :value="String(label)" @input="toggleLabel(getInputValue($event))" />
        <ifx-text-field label="caption" type="text" :value="String(caption)" @input="toggleCaption(getInputValue($event))" />
        <ifx-text-field label="searchPlaceholderValue" type="text" :value="String(searchPlaceholderValue)" @input="toggleSearchPlaceholderValue(getInputValue($event))" />
        <ifx-text-field label="options" type="text" :value="String(options)" @input="toggleOptions(getInputValue($event))" />
        <ifx-text-field label="clearSelection" type="text" :value="String(clearSelection)" @input="toggleClearSelection(getInputValue($event))" />
    </div>

    <div class="state">
      <div><b>size:</b> {{ String(sizeOptions[sizeIndex]) }}</div>
      <div><b>placeholder:</b> {{ String(placeholder) }}</div>
      <div><b>placeholderValue:</b> {{ String(placeholderValue) }}</div>
      <div><b>error:</b> {{ String(error) }}</div>
      <div><b>label:</b> {{ String(label) }}</div>
      <div><b>disabled:</b> {{ String(disabled) }}</div>
      <div><b>caption:</b> {{ String(caption) }}</div>
      <div><b>required:</b> {{ String(required) }}</div>
      <div><b>showSearch:</b> {{ String(showSearch) }}</div>
      <div><b>showClearButton:</b> {{ String(showClearButton) }}</div>
      <div><b>searchPlaceholderValue:</b> {{ String(searchPlaceholderValue) }}</div>
      <div><b>options:</b> {{ String(options) }}</div>
      <div><b>clearSelection:</b> {{ String(clearSelection) }}</div>
    </div>
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
