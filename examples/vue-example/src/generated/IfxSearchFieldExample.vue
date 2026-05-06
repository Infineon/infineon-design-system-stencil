<script setup lang="ts">
import { computed, ref } from 'vue';

import { IfxButton, IfxSearchField, IfxTextField } from '@infineon/infineon-design-system-vue';

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
const ariaLabelText = ref("Search field");
const ariaLabelledBy = ref("");
const ariaDescribedBy = ref("");
const deleteIconAriaLabel = ref("Clear search");
const historyDeleteAriaLabel = ref("Remove from history");
const dropdownAriaLabel = ref("Search suggestions and history");
const suggestionAriaLabel = ref("Search suggestion");
const historyItemAriaLabel = ref("Search history item");

const handleShowDeleteIconChange = () => { showDeleteIcon.value = !showDeleteIcon.value; };
const handleDisabledChange = () => { disabled.value = !disabled.value; };
const handleSizeChange = () => { sizeIndex.value = (sizeIndex.value + 1) % sizeOptions.length; };
const handlePlaceholderChange = (nextValue: string) => { placeholder.value = nextValue; };
const handleMaxlengthChange = (nextValue: string) => { maxlength.value = Number(nextValue); };
const handleValueChange = (nextValue: string) => { value.value = nextValue; };
const handleAutocompleteChange = (nextValue: string) => { autocomplete.value = nextValue; };
const handleShowSuggestionsChange = () => { showSuggestions.value = !showSuggestions.value; };
const handleEnableHistoryChange = () => { enableHistory.value = !enableHistory.value; };
const handleMaxSuggestionsChange = (nextValue: string) => { maxSuggestions.value = Number(nextValue); };
const handleMaxHistoryItemsChange = (nextValue: string) => { maxHistoryItems.value = Number(nextValue); };
const handleHistoryKeyChange = (nextValue: string) => { historyKey.value = nextValue; };
const handleHistoryHeaderTextChange = (nextValue: string) => { historyHeaderText.value = nextValue; };
const handleAriaLabelTextChange = (nextValue: string) => { ariaLabelText.value = nextValue; };
const handleAriaLabelledByChange = (nextValue: string) => { ariaLabelledBy.value = nextValue; };
const handleAriaDescribedByChange = (nextValue: string) => { ariaDescribedBy.value = nextValue; };
const handleDeleteIconAriaLabelChange = (nextValue: string) => { deleteIconAriaLabel.value = nextValue; };
const handleHistoryDeleteAriaLabelChange = (nextValue: string) => { historyDeleteAriaLabel.value = nextValue; };
const handleDropdownAriaLabelChange = (nextValue: string) => { dropdownAriaLabel.value = nextValue; };
const handleSuggestionAriaLabelChange = (nextValue: string) => { suggestionAriaLabel.value = nextValue; };
const handleHistoryItemAriaLabelChange = (nextValue: string) => { historyItemAriaLabel.value = nextValue; };

const controlledProps = computed<Record<string, unknown>>(() => ({
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
  "ariaLabelText": ariaLabelText.value,
  "ariaLabelledBy": ariaLabelledBy.value,
  "ariaDescribedBy": ariaDescribedBy.value,
  "deleteIconAriaLabel": deleteIconAriaLabel.value,
  "historyDeleteAriaLabel": historyDeleteAriaLabel.value,
  "dropdownAriaLabel": dropdownAriaLabel.value,
  "suggestionAriaLabel": suggestionAriaLabel.value,
  "historyItemAriaLabel": historyItemAriaLabel.value,
}));

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
  ["showDeleteIcon", showDeleteIcon.value],
  ["disabled", disabled.value],
  ["size", sizeOptions[sizeIndex.value]],
  ["placeholder", placeholder.value],
  ["maxlength", maxlength.value],
  ["value", value.value],
  ["autocomplete", autocomplete.value],
  ["showSuggestions", showSuggestions.value],
  ["enableHistory", enableHistory.value],
  ["maxSuggestions", maxSuggestions.value],
  ["maxHistoryItems", maxHistoryItems.value],
  ["historyKey", historyKey.value],
  ["historyHeaderText", historyHeaderText.value],
  ["ariaLabelText", ariaLabelText.value],
  ["ariaLabelledBy", ariaLabelledBy.value],
  ["ariaDescribedBy", ariaDescribedBy.value],
  ["deleteIconAriaLabel", deleteIconAriaLabel.value],
  ["historyDeleteAriaLabel", historyDeleteAriaLabel.value],
  ["dropdownAriaLabel", dropdownAriaLabel.value],
  ["suggestionAriaLabel", suggestionAriaLabel.value],
  ["historyItemAriaLabel", historyItemAriaLabel.value],
]
  .map(([name, value]) => '        ' + formatPropValueForCode(String(name), value))
  .join('\n'));

const codeTemplate = computed(() => `<script setup lang="ts">
import { IfxSearchField } from '@infineon/infineon-design-system-vue';

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
      @ifxBlur="handleBlur"
      @ifxFocus="handleFocus"
      @ifxInput="handleInput"
      @ifxSuggestionRequested="handleSuggestionRequested"
      @ifxSuggestionSelected="handleSuggestionSelected"
      :show-delete-icon="String(controlledProps.showDeleteIcon ?? "true")"
      :disabled="String(controlledProps.disabled ?? "false")"
      :size="String(controlledProps.size ?? "m")"
      :placeholder="String(controlledProps.placeholder ?? "Search...")"
      :maxlength="String(controlledProps.maxlength ?? "")"
      :value="String(controlledProps.value ?? "")"
      :autocomplete="String(controlledProps.autocomplete ?? "on")"
      __CONTROLLED_PROPS__ />
  </div>
${'</'}template>`.replace("__CONTROLLED_PROPS__", controlledPropsCode.value));

const codeString = codeTemplate;
</script>

<template>
  <div>
    <ifx-search-field
      @ifxBlur="handleBlur"
      @ifxFocus="handleFocus"
      @ifxInput="handleInput"
      @ifxSuggestionRequested="handleSuggestionRequested"
      @ifxSuggestionSelected="handleSuggestionSelected"
      :show-delete-icon="String(controlledProps.showDeleteIcon ?? "true")"
      :disabled="String(controlledProps.disabled ?? "false")"
      :size="String(controlledProps.size ?? "m")"
      :placeholder="String(controlledProps.placeholder ?? "Search...")"
      :maxlength="String(controlledProps.maxlength ?? "")"
      :value="String(controlledProps.value ?? "")"
      :autocomplete="String(controlledProps.autocomplete ?? "on")"
      v-bind="controlledProps" />
    <h3 class="controls-title">Controls</h3>
    <div class="controls controls-toggle">
        <ifx-button variant="secondary" @click="handleShowDeleteIconChange">Toggle ShowDeleteIcon</ifx-button>
        <ifx-button variant="secondary" @click="handleDisabledChange">Toggle Disabled</ifx-button>
        <ifx-button variant="secondary" @click="handleSizeChange">Toggle Size</ifx-button>
        <ifx-button variant="secondary" @click="handleShowSuggestionsChange">Toggle ShowSuggestions</ifx-button>
        <ifx-button variant="secondary" @click="handleEnableHistoryChange">Toggle EnableHistory</ifx-button>
    </div>
    <div class="controls controls-input">
        <ifx-text-field label="placeholder" type="text" :value="String(placeholder)" @input="handlePlaceholderChange(getInputValue($event))" />
        <ifx-text-field label="maxlength" type="text" :value="String(maxlength)" @input="handleMaxlengthChange(getInputValue($event))" />
        <ifx-text-field label="value" type="text" :value="String(value)" @input="handleValueChange(getInputValue($event))" />
        <ifx-text-field label="autocomplete" type="text" :value="String(autocomplete)" @input="handleAutocompleteChange(getInputValue($event))" />
        <ifx-text-field label="maxSuggestions" type="text" :value="String(maxSuggestions)" @input="handleMaxSuggestionsChange(getInputValue($event))" />
        <ifx-text-field label="maxHistoryItems" type="text" :value="String(maxHistoryItems)" @input="handleMaxHistoryItemsChange(getInputValue($event))" />
        <ifx-text-field label="historyKey" type="text" :value="String(historyKey)" @input="handleHistoryKeyChange(getInputValue($event))" />
        <ifx-text-field label="historyHeaderText" type="text" :value="String(historyHeaderText)" @input="handleHistoryHeaderTextChange(getInputValue($event))" />
        <ifx-text-field label="ariaLabelText" type="text" :value="String(ariaLabelText)" @input="handleAriaLabelTextChange(getInputValue($event))" />
        <ifx-text-field label="ariaLabelledBy" type="text" :value="String(ariaLabelledBy)" @input="handleAriaLabelledByChange(getInputValue($event))" />
        <ifx-text-field label="ariaDescribedBy" type="text" :value="String(ariaDescribedBy)" @input="handleAriaDescribedByChange(getInputValue($event))" />
        <ifx-text-field label="deleteIconAriaLabel" type="text" :value="String(deleteIconAriaLabel)" @input="handleDeleteIconAriaLabelChange(getInputValue($event))" />
        <ifx-text-field label="historyDeleteAriaLabel" type="text" :value="String(historyDeleteAriaLabel)" @input="handleHistoryDeleteAriaLabelChange(getInputValue($event))" />
        <ifx-text-field label="dropdownAriaLabel" type="text" :value="String(dropdownAriaLabel)" @input="handleDropdownAriaLabelChange(getInputValue($event))" />
        <ifx-text-field label="suggestionAriaLabel" type="text" :value="String(suggestionAriaLabel)" @input="handleSuggestionAriaLabelChange(getInputValue($event))" />
        <ifx-text-field label="historyItemAriaLabel" type="text" :value="String(historyItemAriaLabel)" @input="handleHistoryItemAriaLabelChange(getInputValue($event))" />
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
      <div><b>ariaLabelText:</b> {{ String(ariaLabelText) }}</div>
      <div><b>ariaLabelledBy:</b> {{ String(ariaLabelledBy) }}</div>
      <div><b>ariaDescribedBy:</b> {{ String(ariaDescribedBy) }}</div>
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
