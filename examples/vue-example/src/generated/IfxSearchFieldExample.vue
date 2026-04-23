<script setup lang="ts">

import { IfxButton, IfxSearchField, IfxTextField } from '@infineon/infineon-design-system-vue';

import { computed, ref } from 'vue';

const showDeleteIcon = ref(true);
const disabled = ref(false);
const sizeOptions = ["s","m"];
const sizeIndex = ref(1);
const placeholder = ref("Search...");
const maxlength = ref(0);
const value = ref("");
const autocomplete = ref("on");
const showSuggestions = ref(false);
const enableHistory = ref(true);
const maxSuggestions = ref(10);
const maxHistoryItems = ref(5);
const historyKey = ref("ifx-search-history");
const historyHeaderText = ref("Recent Searches");
const ariaLabel = ref("Search field");
const ariaLabelledBy = ref("");
const ariaDescribedBy = ref("");
const ariaControls = ref("");
const ariaExpanded = ref("");
const deleteIconAriaLabel = ref("Clear search");
const historyDeleteAriaLabel = ref("Remove from history");
const dropdownAriaLabel = ref("Search suggestions and history");
const suggestionAriaLabel = ref("Search suggestion");
const historyItemAriaLabel = ref("Search history item");

const toggleShowDeleteIcon = () => (showDeleteIcon.value = !showDeleteIcon.value);
const toggleDisabled = () => (disabled.value = !disabled.value);
const toggleSize = () => (sizeIndex.value = (sizeIndex.value + 1) % sizeOptions.length);
const togglePlaceholder = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; placeholder.value = String(raw); };
const toggleMaxlength = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; maxlength.value = Number(raw); };
const toggleValue = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; value.value = String(raw); };
const toggleAutocomplete = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; autocomplete.value = String(raw); };
const toggleShowSuggestions = () => (showSuggestions.value = !showSuggestions.value);
const toggleEnableHistory = () => (enableHistory.value = !enableHistory.value);
const toggleMaxSuggestions = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; maxSuggestions.value = Number(raw); };
const toggleMaxHistoryItems = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; maxHistoryItems.value = Number(raw); };
const toggleHistoryKey = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; historyKey.value = String(raw); };
const toggleHistoryHeaderText = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; historyHeaderText.value = String(raw); };
const toggleAriaLabel = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; ariaLabel.value = String(raw); };
const toggleAriaLabelledBy = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; ariaLabelledBy.value = String(raw); };
const toggleAriaDescribedBy = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; ariaDescribedBy.value = String(raw); };
const toggleAriaControls = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; ariaControls.value = String(raw); };
const toggleAriaExpanded = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; ariaExpanded.value = String(raw); };
const toggleDeleteIconAriaLabel = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; deleteIconAriaLabel.value = String(raw); };
const toggleHistoryDeleteAriaLabel = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; historyDeleteAriaLabel.value = String(raw); };
const toggleDropdownAriaLabel = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; dropdownAriaLabel.value = String(raw); };
const toggleSuggestionAriaLabel = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; suggestionAriaLabel.value = String(raw); };
const toggleHistoryItemAriaLabel = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; historyItemAriaLabel.value = String(raw); };

const controlledProps = computed(() => ({
  "showDeleteIcon": showDeleteIcon.value,
  "disabled": disabled.value,
  "size": sizeOptions[sizeIndex.value],
  "placeholder": placeholder.value,
  "maxlength": maxlength.value,
  "value": value.value,
  "autocomplete": autocomplete.value,
  "showSuggestions": showSuggestions.value,
  "enableHistory": enableHistory.value,
  "maxSuggestions": maxSuggestions.value,
  "maxHistoryItems": maxHistoryItems.value,
  "historyKey": historyKey.value,
  "historyHeaderText": historyHeaderText.value,
  "ariaLabel": ariaLabel.value,
  "ariaLabelledBy": ariaLabelledBy.value,
  "ariaDescribedBy": ariaDescribedBy.value,
  "ariaControls": ariaControls.value,
  "ariaExpanded": ariaExpanded.value,
  "deleteIconAriaLabel": deleteIconAriaLabel.value,
  "historyDeleteAriaLabel": historyDeleteAriaLabel.value,
  "dropdownAriaLabel": dropdownAriaLabel.value,
  "suggestionAriaLabel": suggestionAriaLabel.value,
  "historyItemAriaLabel": historyItemAriaLabel.value,
}));
const boundProps = controlledProps;

const handleBlur = (event: CustomEvent) => {
  console.log('ifxBlur:', event);
  // Add your handler logic here
};

const handleFocus = (event: CustomEvent) => {
  console.log('ifxFocus:', event);
  // Add your handler logic here
};

const handleInput = (event: CustomEvent) => {
  console.log('ifxInput:', event);
  // Add your handler logic here
};

const handleSuggestionRequested = (event: CustomEvent) => {
  console.log('ifxSuggestionRequested:', event);
  // Add your handler logic here
};

const handleSuggestionSelected = (event: CustomEvent) => {
  console.log('ifxSuggestionSelected:', event);
  // Add your handler logic here
};

const codeString = `<script setup lang="ts">
const handleBlur = (event: CustomEvent) => {
  console.log('ifxBlur:', event);
  // Add your handler logic here
};

const handleFocus = (event: CustomEvent) => {
  console.log('ifxFocus:', event);
  // Add your handler logic here
};

const handleInput = (event: CustomEvent) => {
  console.log('ifxInput:', event);
  // Add your handler logic here
};

const handleSuggestionRequested = (event: CustomEvent) => {
  console.log('ifxSuggestionRequested:', event);
  // Add your handler logic here
};

const handleSuggestionSelected = (event: CustomEvent) => {
  console.log('ifxSuggestionSelected:', event);
  // Add your handler logic here
};
${'</'}script>

<template>
  <div>
    <ifx-search-field
      size="m"
      :show-delete-icon="true"
      :show-suggestions="false"
      :enable-history="true"
      :max-suggestions=10
      :max-history-items=5
      history-key="ifx-search-history"
      history-header-text="Recent Searches"
      value=""
      autocomplete="on"
      placeholder="Search..."
      aria-label-text="Search field"
      delete-icon-aria-label="Clear search"
      history-delete-aria-label="Remove from history"
      dropdown-aria-label="Search suggestions and history"
      suggestion-aria-label="Search suggestion"
      history-item-aria-label="Search history item"
      :disabled="false"
      @ifxBlur="handleBlur"
      @ifxFocus="handleFocus"
      @ifxInput="handleInput"
      @ifxSuggestionRequested="handleSuggestionRequested"
      @ifxSuggestionSelected="handleSuggestionSelected" />
  </div>
${'</'}template>`.replace("__CONTROLLED_ATTRS__", controlledAttrsCode);

const codeString = codeStringWithAttrs;

</script>

<template>
  <div>
    <ifx-search-field
      size="m"
      :show-delete-icon="true"
      :show-suggestions="false"
      :enable-history="true"
      :max-suggestions=10
      :max-history-items=5
      history-key="ifx-search-history"
      history-header-text="Recent Searches"
      value=""
      autocomplete="on"
      placeholder="Search..."
      aria-label-text="Search field"
      delete-icon-aria-label="Clear search"
      history-delete-aria-label="Remove from history"
      dropdown-aria-label="Search suggestions and history"
      suggestion-aria-label="Search suggestion"
      history-item-aria-label="Search history item"
      :disabled="false"
      @ifxBlur="handleBlur"
      @ifxFocus="handleFocus"
      @ifxInput="handleInput"
      @ifxSuggestionRequested="handleSuggestionRequested"
      @ifxSuggestionSelected="handleSuggestionSelected" />
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
