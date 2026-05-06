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

const handleSizeChange = () => { sizeIndex.value = (sizeIndex.value + 1) % sizeOptions.length; };
const handlePlaceholderChange = () => { placeholder.value = !placeholder.value; };
const handlePlaceholderValueChange = (nextValue: string) => { placeholderValue.value = nextValue; };
const handleErrorChange = () => { error.value = !error.value; };
const handleLabelChange = (nextValue: string) => { label.value = nextValue; };
const handleDisabledChange = () => { disabled.value = !disabled.value; };
const handleCaptionChange = (nextValue: string) => { caption.value = nextValue; };
const handleRequiredChange = () => { required.value = !required.value; };
const handleShowSearchChange = () => { showSearch.value = !showSearch.value; };
const handleShowClearButtonChange = () => { showClearButton.value = !showClearButton.value; };
const handleSearchPlaceholderValueChange = (nextValue: string) => { searchPlaceholderValue.value = nextValue; };
const handleOptionsChange = (nextValue: string) => { options.value = nextValue; };

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
        <ifx-button variant="secondary" @click="handleSizeChange">Toggle Size</ifx-button>
        <ifx-button variant="secondary" @click="handlePlaceholderChange">Toggle Placeholder</ifx-button>
        <ifx-button variant="secondary" @click="handleErrorChange">Toggle Error</ifx-button>
        <ifx-button variant="secondary" @click="handleDisabledChange">Toggle Disabled</ifx-button>
        <ifx-button variant="secondary" @click="handleRequiredChange">Toggle Required</ifx-button>
        <ifx-button variant="secondary" @click="handleShowSearchChange">Toggle ShowSearch</ifx-button>
        <ifx-button variant="secondary" @click="handleShowClearButtonChange">Toggle ShowClearButton</ifx-button>
    </div>
    <div class="controls controls-input">
        <ifx-text-field label="placeholderValue" type="text" :value="String(placeholderValue)" @input="handlePlaceholderValueChange(getInputValue($event))" />
        <ifx-text-field label="label" type="text" :value="String(label)" @input="handleLabelChange(getInputValue($event))" />
        <ifx-text-field label="caption" type="text" :value="String(caption)" @input="handleCaptionChange(getInputValue($event))" />
        <ifx-text-field label="searchPlaceholderValue" type="text" :value="String(searchPlaceholderValue)" @input="handleSearchPlaceholderValueChange(getInputValue($event))" />
        <ifx-text-field label="options" type="text" :value="String(options)" @input="handleOptionsChange(getInputValue($event))" />
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
    </div>
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
