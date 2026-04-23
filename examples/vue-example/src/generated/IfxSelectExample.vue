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

const handleInput = (event: CustomEvent) => {
  console.log('ifxInput:', event);
  // Add your handler logic here
};

const handleSelect = (event: CustomEvent) => {
  console.log('ifxSelect:', event);
  // Add your handler logic here
};

const codeString = `<script setup lang="ts">
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
      size="m"
      :placeholder="true"
      show-clear-button=""
      show-search=""
      search-placeholder-value="Search..."
      required=""
      label=""
      caption=""
      placeholder-value="Placeholder"
      options='[{"value":"a","label":"option a","selected":false},{"value":"b","label":"option b","selected":false},{"value":"c","label":"option c","selected":false}]'
      :error="false"
      :disabled="false"
      @ifxInput="handleInput"
      @ifxSelect="handleSelect" />
  </div>
${'</'}template>`.replace("__CONTROLLED_ATTRS__", controlledAttrsCode);

const codeString = codeStringWithAttrs;

</script>

<template>
  <div>
    <ifx-select
      size="m"
      :placeholder="true"
      show-clear-button=""
      show-search=""
      search-placeholder-value="Search..."
      required=""
      label=""
      caption=""
      placeholder-value="Placeholder"
      options='[{"value":"a","label":"option a","selected":false},{"value":"b","label":"option b","selected":false},{"value":"c","label":"option c","selected":false}]'
      :error="false"
      :disabled="false"
      @ifxInput="handleInput"
      @ifxSelect="handleSelect" />
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
