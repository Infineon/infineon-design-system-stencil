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

const handleFocus = (event: CustomEvent) => {
  console.log('ifxFocus:', event);
  // Add your handler logic here
};

const handleBlur = (event: CustomEvent) => {
  console.log('ifxBlur:', event);
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
  ["showDeleteIcon", controlledProps.value["showDeleteIcon"]],
  ["disabled", controlledProps.value["disabled"]],
  ["size", controlledProps.value["size"]],
  ["placeholder", controlledProps.value["placeholder"]],
  ["maxlength", controlledProps.value["maxlength"]],
  ["value", controlledProps.value["value"]],
  ["autocomplete", controlledProps.value["autocomplete"]],
  ["showSuggestions", controlledProps.value["showSuggestions"]],
  ["enableHistory", controlledProps.value["enableHistory"]],
  ["maxSuggestions", controlledProps.value["maxSuggestions"]],
  ["maxHistoryItems", controlledProps.value["maxHistoryItems"]],
  ["historyKey", controlledProps.value["historyKey"]],
  ["historyHeaderText", controlledProps.value["historyHeaderText"]],
  ["ariaLabel", controlledProps.value["ariaLabel"]],
  ["ariaLabelledBy", controlledProps.value["ariaLabelledBy"]],
  ["ariaDescribedBy", controlledProps.value["ariaDescribedBy"]],
  ["ariaControls", controlledProps.value["ariaControls"]],
  ["ariaExpanded", controlledProps.value["ariaExpanded"]],
  ["deleteIconAriaLabel", controlledProps.value["deleteIconAriaLabel"]],
  ["historyDeleteAriaLabel", controlledProps.value["historyDeleteAriaLabel"]],
  ["dropdownAriaLabel", controlledProps.value["dropdownAriaLabel"]],
  ["suggestionAriaLabel", controlledProps.value["suggestionAriaLabel"]],
  ["historyItemAriaLabel", controlledProps.value["historyItemAriaLabel"]],
]
	.map(([name, value]) => '      ' + String(name) + '="' + formatAttrValueForCode(value) + '"')
  .join("\n");

const codeStringWithAttrs = `<script setup lang="ts">
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

const handleFocus = (event: CustomEvent) => {
  console.log('ifxFocus:', event);
  // Add your handler logic here
};

const handleBlur = (event: CustomEvent) => {
  console.log('ifxBlur:', event);
  // Add your handler logic here
};
${'</'}script>

<template>
  <div>
    <ifx-search-field
      @ifxInput="handleInput"
      @ifxSuggestionRequested="handleSuggestionRequested"
      @ifxSuggestionSelected="handleSuggestionSelected"
      @ifxFocus="handleFocus"
      @ifxBlur="handleBlur"
      __CONTROLLED_ATTRS__ />
  </div>
${'</'}template>`.replace("__CONTROLLED_ATTRS__", controlledAttrsCode);

const codeString = codeStringWithAttrs;

</script>

<template>
  <div>
    <ifx-search-field
      @ifxInput="handleInput"
      @ifxSuggestionRequested="handleSuggestionRequested"
      @ifxSuggestionSelected="handleSuggestionSelected"
      @ifxFocus="handleFocus"
      @ifxBlur="handleBlur"
      v-bind="controlledProps" />
    <h3 class="controls-title">Controls</h3>
	<div class="controls controls-toggle">
      <IfxButton variant="secondary" @click="toggleShowDeleteIcon">Toggle ShowDeleteIcon</IfxButton>
      <IfxButton variant="secondary" @click="toggleDisabled">Toggle Disabled</IfxButton>
      <IfxButton variant="secondary" @click="toggleSize">Toggle Size</IfxButton>
      <IfxButton variant="secondary" @click="toggleShowSuggestions">Toggle ShowSuggestions</IfxButton>
      <IfxButton variant="secondary" @click="toggleEnableHistory">Toggle EnableHistory</IfxButton>
    </div>
	<div class="controls controls-input">
      <IfxTextField label="placeholder" type="text" :value="String(placeholder)" @input="togglePlaceholder" @ifxInput="togglePlaceholder" />
      <IfxTextField label="maxlength" type="number" :value="String(maxlength)" @input="toggleMaxlength" @ifxInput="toggleMaxlength" />
      <IfxTextField label="value" type="text" :value="String(value)" @input="toggleValue" @ifxInput="toggleValue" />
      <IfxTextField label="autocomplete" type="text" :value="String(autocomplete)" @input="toggleAutocomplete" @ifxInput="toggleAutocomplete" />
      <IfxTextField label="maxSuggestions" type="number" :value="String(maxSuggestions)" @input="toggleMaxSuggestions" @ifxInput="toggleMaxSuggestions" />
      <IfxTextField label="maxHistoryItems" type="number" :value="String(maxHistoryItems)" @input="toggleMaxHistoryItems" @ifxInput="toggleMaxHistoryItems" />
      <IfxTextField label="historyKey" type="text" :value="String(historyKey)" @input="toggleHistoryKey" @ifxInput="toggleHistoryKey" />
      <IfxTextField label="historyHeaderText" type="text" :value="String(historyHeaderText)" @input="toggleHistoryHeaderText" @ifxInput="toggleHistoryHeaderText" />
      <IfxTextField label="ariaLabel" type="text" :value="String(ariaLabel)" @input="toggleAriaLabel" @ifxInput="toggleAriaLabel" />
      <IfxTextField label="ariaLabelledBy" type="text" :value="String(ariaLabelledBy)" @input="toggleAriaLabelledBy" @ifxInput="toggleAriaLabelledBy" />
      <IfxTextField label="ariaDescribedBy" type="text" :value="String(ariaDescribedBy)" @input="toggleAriaDescribedBy" @ifxInput="toggleAriaDescribedBy" />
      <IfxTextField label="ariaControls" type="text" :value="String(ariaControls)" @input="toggleAriaControls" @ifxInput="toggleAriaControls" />
      <IfxTextField label="ariaExpanded" type="text" :value="String(ariaExpanded)" @input="toggleAriaExpanded" @ifxInput="toggleAriaExpanded" />
      <IfxTextField label="deleteIconAriaLabel" type="text" :value="String(deleteIconAriaLabel)" @input="toggleDeleteIconAriaLabel" @ifxInput="toggleDeleteIconAriaLabel" />
      <IfxTextField label="historyDeleteAriaLabel" type="text" :value="String(historyDeleteAriaLabel)" @input="toggleHistoryDeleteAriaLabel" @ifxInput="toggleHistoryDeleteAriaLabel" />
      <IfxTextField label="dropdownAriaLabel" type="text" :value="String(dropdownAriaLabel)" @input="toggleDropdownAriaLabel" @ifxInput="toggleDropdownAriaLabel" />
      <IfxTextField label="suggestionAriaLabel" type="text" :value="String(suggestionAriaLabel)" @input="toggleSuggestionAriaLabel" @ifxInput="toggleSuggestionAriaLabel" />
      <IfxTextField label="historyItemAriaLabel" type="text" :value="String(historyItemAriaLabel)" @input="toggleHistoryItemAriaLabel" @ifxInput="toggleHistoryItemAriaLabel" />
    </div>

    <div class="state">
        <div><b>showDeleteIcon:</b> {{ String(showDeleteIcon) }}</div>
        <div><b>disabled:</b> {{ String(disabled) }}</div>
        <div><b>size:</b> {{ String(sizeOptions[sizeIndex]) }}</div>
        <div><b>placeholder:</b> {{ String(placeholder) }}</div>
        <div><b>maxlength:</b> {{ String(maxlength) }}</div>
        <div><b>value:</b> {{ String(value) }}</div>
        <div><b>autocomplete:</b> {{ String(autocomplete) }}</div>
        <div><b>showSuggestions:</b> {{ String(showSuggestions) }}</div>
        <div><b>enableHistory:</b> {{ String(enableHistory) }}</div>
        <div><b>maxSuggestions:</b> {{ String(maxSuggestions) }}</div>
        <div><b>maxHistoryItems:</b> {{ String(maxHistoryItems) }}</div>
        <div><b>historyKey:</b> {{ String(historyKey) }}</div>
        <div><b>historyHeaderText:</b> {{ String(historyHeaderText) }}</div>
        <div><b>ariaLabel:</b> {{ String(ariaLabel) }}</div>
        <div><b>ariaLabelledBy:</b> {{ String(ariaLabelledBy) }}</div>
        <div><b>ariaDescribedBy:</b> {{ String(ariaDescribedBy) }}</div>
        <div><b>ariaControls:</b> {{ String(ariaControls) }}</div>
        <div><b>ariaExpanded:</b> {{ String(ariaExpanded) }}</div>
        <div><b>deleteIconAriaLabel:</b> {{ String(deleteIconAriaLabel) }}</div>
        <div><b>historyDeleteAriaLabel:</b> {{ String(historyDeleteAriaLabel) }}</div>
        <div><b>dropdownAriaLabel:</b> {{ String(dropdownAriaLabel) }}</div>
        <div><b>suggestionAriaLabel:</b> {{ String(suggestionAriaLabel) }}</div>
        <div><b>historyItemAriaLabel:</b> {{ String(historyItemAriaLabel) }}</div>
    </div>

    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
