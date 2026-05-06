<script setup lang="ts">
import { computed, ref } from 'vue';

import { IfxButton, IfxDatePicker, IfxTextField } from '@infineon/infineon-design-system-vue';

const label = ref("Label Text");
const caption = ref("Caption text, description, error notification.");
const min = ref("");
const max = ref("");
const disabled = ref(false);
const success = ref(false);
const error = ref(false);
const sizeOptions = ["s","l"];
const sizeIndex = ref(0);
const value = ref("");
const ariaLabelText = ref("Date Picker");
const required = ref(false);
const autocomplete = ref("on");
const typeOptions = ["date","datetime-local"];
const typeIndex = ref(0);

const handleLabelChange = (nextValue: string) => { label.value = nextValue; };
const handleCaptionChange = (nextValue: string) => { caption.value = nextValue; };
const handleMinChange = (nextValue: string) => { min.value = nextValue; };
const handleMaxChange = (nextValue: string) => { max.value = nextValue; };
const handleDisabledChange = () => { disabled.value = !disabled.value; };
const handleSuccessChange = () => { success.value = !success.value; };
const handleErrorChange = () => { error.value = !error.value; };
const handleSizeChange = () => { sizeIndex.value = (sizeIndex.value + 1) % sizeOptions.length; };
const handleValueChange = (nextValue: string) => { value.value = nextValue; };
const handleAriaLabelTextChange = (nextValue: string) => { ariaLabelText.value = nextValue; };
const handleRequiredChange = () => { required.value = !required.value; };
const handleAutocompleteChange = (nextValue: string) => { autocomplete.value = nextValue; };
const handleTypeChange = () => { typeIndex.value = (typeIndex.value + 1) % typeOptions.length; };

const controlledProps = computed<Record<string, unknown>>(() => ({
  "label": label.value,
  "caption": caption.value,
  "min": min.value,
  "max": max.value,
  "disabled": disabled.value,
  "success": success.value,
  "error": error.value,
  "size": sizeOptions[sizeIndex.value],
  "value": value.value,
  "ariaLabelText": ariaLabelText.value,
  "required": required.value,
  "autocomplete": autocomplete.value,
  "type": typeOptions[typeIndex.value],
}));

const handleDate = (event: CustomEvent) => {
  console.log('ifxDate:', event);
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
  ["label", label.value],
  ["caption", caption.value],
  ["min", min.value],
  ["max", max.value],
  ["disabled", disabled.value],
  ["success", success.value],
  ["error", error.value],
  ["size", sizeOptions[sizeIndex.value]],
  ["value", value.value],
  ["ariaLabelText", ariaLabelText.value],
  ["required", required.value],
  ["autocomplete", autocomplete.value],
  ["type", typeOptions[typeIndex.value]],
]
  .map(([name, value]) => '        ' + formatPropValueForCode(String(name), value))
  .join('\n'));

const codeTemplate = computed(() => `<script setup lang="ts">
import { IfxDatePicker } from '@infineon/infineon-design-system-vue';

const handleDate = (event: CustomEvent) => {
  console.log('ifxDate:', event);
  // Add your handler logic here
};
${'</'}script>

<template>
  <div>
    <ifx-date-picker
      name="date-picker"
      @ifxDate="handleDate"
      __CONTROLLED_PROPS__ />
  </div>
${'</'}template>`.replace("__CONTROLLED_PROPS__", controlledPropsCode.value));

const codeString = codeTemplate;
</script>

<template>
  <div>
    <ifx-date-picker
      name="date-picker"
      @ifxDate="handleDate"
      v-bind="controlledProps" />
    <h3 class="controls-title">Controls</h3>
    <div class="controls controls-toggle">
        <ifx-button variant="secondary" @click="handleDisabledChange">Toggle Disabled</ifx-button>
        <ifx-button variant="secondary" @click="handleSuccessChange">Toggle Success</ifx-button>
        <ifx-button variant="secondary" @click="handleErrorChange">Toggle Error</ifx-button>
        <ifx-button variant="secondary" @click="handleSizeChange">Toggle Size</ifx-button>
        <ifx-button variant="secondary" @click="handleRequiredChange">Toggle Required</ifx-button>
        <ifx-button variant="secondary" @click="handleTypeChange">Toggle Type</ifx-button>
    </div>
    <div class="controls controls-input">
        <ifx-text-field label="label" type="text" :value="String(label)" @input="handleLabelChange(getInputValue($event))" />
        <ifx-text-field label="caption" type="text" :value="String(caption)" @input="handleCaptionChange(getInputValue($event))" />
        <ifx-text-field label="min" type="text" :value="String(min)" @input="handleMinChange(getInputValue($event))" />
        <ifx-text-field label="max" type="text" :value="String(max)" @input="handleMaxChange(getInputValue($event))" />
        <ifx-text-field label="value" type="text" :value="String(value)" @input="handleValueChange(getInputValue($event))" />
        <ifx-text-field label="ariaLabelText" type="text" :value="String(ariaLabelText)" @input="handleAriaLabelTextChange(getInputValue($event))" />
        <ifx-text-field label="autocomplete" type="text" :value="String(autocomplete)" @input="handleAutocompleteChange(getInputValue($event))" />
    </div>

    <div class="state">
      <div><b>label:</b> {{ String(label) }}</div>
      <div><b>caption:</b> {{ String(caption) }}</div>
      <div><b>min:</b> {{ String(min) }}</div>
      <div><b>max:</b> {{ String(max) }}</div>
      <div><b>disabled:</b> {{ String(disabled) }}</div>
      <div><b>success:</b> {{ String(success) }}</div>
      <div><b>error:</b> {{ String(error) }}</div>
      <div><b>size:</b> {{ String(sizeOptions[sizeIndex]) }}</div>
      <div><b>value:</b> {{ String(value) }}</div>
      <div><b>ariaLabelText:</b> {{ String(ariaLabelText) }}</div>
      <div><b>required:</b> {{ String(required) }}</div>
      <div><b>autocomplete:</b> {{ String(autocomplete) }}</div>
      <div><b>type:</b> {{ String(typeOptions[typeIndex]) }}</div>
    </div>
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
