<script setup lang="ts">

import { IfxButton, IfxSelect, IfxTextField } from '@infineon/infineon-design-system-vue';

import { computed, ref } from 'vue';

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

const toggleSize = () => (sizeIndex.value = (sizeIndex.value + 1) % sizeOptions.length);
const togglePlaceholder = () => (placeholder.value = !placeholder.value);
const togglePlaceholderValue = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; placeholderValue.value = String(raw); };
const toggleError = () => (error.value = !error.value);
const toggleLabel = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; label.value = String(raw); };
const toggleDisabled = () => (disabled.value = !disabled.value);
const toggleCaption = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; caption.value = String(raw); };
const toggleRequired = () => (required.value = !required.value);
const toggleShowSearch = () => (showSearch.value = !showSearch.value);
const toggleShowClearButton = () => (showClearButton.value = !showClearButton.value);
const toggleSearchPlaceholderValue = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; searchPlaceholderValue.value = String(raw); };
const toggleOptions = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; options.value = String(raw); };
const toggleClearSelection = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; clearSelection.value = String(raw); };

const controlledProps = computed(() => ({
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
const boundProps = controlledProps;

const handleSelect = (event: CustomEvent) => {
  console.log('ifxSelect:', event);
  // Add your handler logic here
};

const handleInput = (event: CustomEvent) => {
  console.log('ifxInput:', event);
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
  ["size", controlledProps.value["size"]],
  ["placeholder", controlledProps.value["placeholder"]],
  ["placeholderValue", controlledProps.value["placeholderValue"]],
  ["error", controlledProps.value["error"]],
  ["label", controlledProps.value["label"]],
  ["disabled", controlledProps.value["disabled"]],
  ["caption", controlledProps.value["caption"]],
  ["required", controlledProps.value["required"]],
  ["showSearch", controlledProps.value["showSearch"]],
  ["showClearButton", controlledProps.value["showClearButton"]],
  ["searchPlaceholderValue", controlledProps.value["searchPlaceholderValue"]],
  ["options", controlledProps.value["options"]],
  ["clearSelection", controlledProps.value["clearSelection"]],
]
	.map(([name, value]) => '      ' + String(name) + '="' + formatAttrValueForCode(value) + '"')
  .join("\n");

const codeStringWithAttrs = `<script setup lang="ts">
const handleSelect = (event: CustomEvent) => {
  console.log('ifxSelect:', event);
  // Add your handler logic here
};

const handleInput = (event: CustomEvent) => {
  console.log('ifxInput:', event);
  // Add your handler logic here
};
${'</'}script>

<template>
  <div>
    <ifx-select
      @ifxSelect="handleSelect"
      @ifxInput="handleInput"
      __CONTROLLED_ATTRS__ />
  </div>
${'</'}template>`.replace("__CONTROLLED_ATTRS__", controlledAttrsCode);

const codeString = codeStringWithAttrs;

</script>

<template>
  <div>
    <ifx-select
      @ifxSelect="handleSelect"
      @ifxInput="handleInput"
      v-bind="controlledProps" />
    <h3 class="controls-title">Controls</h3>
	<div class="controls controls-toggle">
      <IfxButton variant="secondary" @click="toggleSize">Toggle Size</IfxButton>
      <IfxButton variant="secondary" @click="togglePlaceholder">Toggle Placeholder</IfxButton>
      <IfxButton variant="secondary" @click="toggleError">Toggle Error</IfxButton>
      <IfxButton variant="secondary" @click="toggleDisabled">Toggle Disabled</IfxButton>
      <IfxButton variant="secondary" @click="toggleRequired">Toggle Required</IfxButton>
      <IfxButton variant="secondary" @click="toggleShowSearch">Toggle ShowSearch</IfxButton>
      <IfxButton variant="secondary" @click="toggleShowClearButton">Toggle ShowClearButton</IfxButton>
    </div>
	<div class="controls controls-input">
      <IfxTextField label="placeholderValue" type="text" :value="String(placeholderValue)" @input="togglePlaceholderValue" @ifxInput="togglePlaceholderValue" />
      <IfxTextField label="label" type="text" :value="String(label)" @input="toggleLabel" @ifxInput="toggleLabel" />
      <IfxTextField label="caption" type="text" :value="String(caption)" @input="toggleCaption" @ifxInput="toggleCaption" />
      <IfxTextField label="searchPlaceholderValue" type="text" :value="String(searchPlaceholderValue)" @input="toggleSearchPlaceholderValue" @ifxInput="toggleSearchPlaceholderValue" />
      <IfxTextField label="options" type="text" :value="String(options)" @input="toggleOptions" @ifxInput="toggleOptions" />
      <IfxTextField label="clearSelection" type="text" :value="String(clearSelection)" @input="toggleClearSelection" @ifxInput="toggleClearSelection" />
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
