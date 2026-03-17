<script setup lang="ts">

import { IfxButton, IfxDatePicker, IfxTextField } from '@infineon/infineon-design-system-vue';

import { computed, ref } from 'vue';

const label = ref("Label Text");
const caption = ref("Caption text, description, error notification.");
const min = ref("");
const max = ref("");
const disabled = ref(false);
const success = ref(false);
const error = ref(false);
const sizeOptions = ["s","l"];
const sizeIndex = ref(0);
const name = ref("date-picker");
const value = ref("");
const ariaLabelText = ref("Date Picker");
const required = ref(false);
const autocomplete = ref("on");
const typeOptions = ["date","datetime-local"];
const typeIndex = ref(0);
const clearSelection = ref("");

const toggleLabel = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; label.value = String(raw); };
const toggleCaption = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; caption.value = String(raw); };
const toggleMin = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; min.value = String(raw); };
const toggleMax = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; max.value = String(raw); };
const toggleDisabled = () => (disabled.value = !disabled.value);
const toggleSuccess = () => (success.value = !success.value);
const toggleError = () => (error.value = !error.value);
const toggleSize = () => (sizeIndex.value = (sizeIndex.value + 1) % sizeOptions.length);
const toggleName = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; name.value = String(raw); };
const toggleValue = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; value.value = String(raw); };
const toggleAriaLabelText = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; ariaLabelText.value = String(raw); };
const toggleRequired = () => (required.value = !required.value);
const toggleAutocomplete = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; autocomplete.value = String(raw); };
const toggleType = () => (typeIndex.value = (typeIndex.value + 1) % typeOptions.length);
const toggleClearSelection = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; clearSelection.value = String(raw); };

const controlledProps = computed(() => ({
  "label": label.value,
  "caption": caption.value,
  "min": min.value,
  "max": max.value,
  "disabled": disabled.value,
  "success": success.value,
  "error": error.value,
  "size": sizeOptions[sizeIndex.value],
  "name": name.value,
  "value": value.value,
  "ariaLabelText": ariaLabelText.value,
  "required": required.value,
  "autocomplete": autocomplete.value,
  "type": typeOptions[typeIndex.value],
  "clearSelection": clearSelection.value,
}));
const boundProps = controlledProps;

const handleDate = (event: CustomEvent) => {
  console.log('ifxDate:', event);
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
  ["label", controlledProps.value["label"]],
  ["caption", controlledProps.value["caption"]],
  ["min", controlledProps.value["min"]],
  ["max", controlledProps.value["max"]],
  ["disabled", controlledProps.value["disabled"]],
  ["success", controlledProps.value["success"]],
  ["error", controlledProps.value["error"]],
  ["size", controlledProps.value["size"]],
  ["name", controlledProps.value["name"]],
  ["value", controlledProps.value["value"]],
  ["ariaLabelText", controlledProps.value["ariaLabelText"]],
  ["required", controlledProps.value["required"]],
  ["autocomplete", controlledProps.value["autocomplete"]],
  ["type", controlledProps.value["type"]],
  ["clearSelection", controlledProps.value["clearSelection"]],
]
	.map(([name, value]) => '      ' + String(name) + '="' + formatAttrValueForCode(value) + '"')
  .join("\n");

const codeStringWithAttrs = `<script setup lang="ts">
const handleDate = (event: CustomEvent) => {
  console.log('ifxDate:', event);
  // Add your handler logic here
};
${'</'}script>

<template>
  <div>
    <ifx-date-picker
      @ifxDate="handleDate"
      __CONTROLLED_ATTRS__ />
  </div>
${'</'}template>`.replace("__CONTROLLED_ATTRS__", controlledAttrsCode);

const codeString = codeStringWithAttrs;

</script>

<template>
  <div>
    <ifx-date-picker
      @ifxDate="handleDate"
      v-bind="controlledProps" />
    <h3 class="controls-title">Controls</h3>
	<div class="controls controls-toggle">
      <IfxButton variant="secondary" @click="toggleDisabled">Toggle Disabled</IfxButton>
      <IfxButton variant="secondary" @click="toggleSuccess">Toggle Success</IfxButton>
      <IfxButton variant="secondary" @click="toggleError">Toggle Error</IfxButton>
      <IfxButton variant="secondary" @click="toggleSize">Toggle Size</IfxButton>
      <IfxButton variant="secondary" @click="toggleRequired">Toggle Required</IfxButton>
      <IfxButton variant="secondary" @click="toggleType">Toggle Type</IfxButton>
    </div>
	<div class="controls controls-input">
      <IfxTextField label="label" type="text" :value="String(label)" @input="toggleLabel" @ifxInput="toggleLabel" />
      <IfxTextField label="caption" type="text" :value="String(caption)" @input="toggleCaption" @ifxInput="toggleCaption" />
      <IfxTextField label="min" type="text" :value="String(min)" @input="toggleMin" @ifxInput="toggleMin" />
      <IfxTextField label="max" type="text" :value="String(max)" @input="toggleMax" @ifxInput="toggleMax" />
      <IfxTextField label="name" type="text" :value="String(name)" @input="toggleName" @ifxInput="toggleName" />
      <IfxTextField label="value" type="text" :value="String(value)" @input="toggleValue" @ifxInput="toggleValue" />
      <IfxTextField label="ariaLabelText" type="text" :value="String(ariaLabelText)" @input="toggleAriaLabelText" @ifxInput="toggleAriaLabelText" />
      <IfxTextField label="autocomplete" type="text" :value="String(autocomplete)" @input="toggleAutocomplete" @ifxInput="toggleAutocomplete" />
      <IfxTextField label="clearSelection" type="text" :value="String(clearSelection)" @input="toggleClearSelection" @ifxInput="toggleClearSelection" />
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
        <div><b>name:</b> {{ String(name) }}</div>
        <div><b>value:</b> {{ String(value) }}</div>
        <div><b>ariaLabelText:</b> {{ String(ariaLabelText) }}</div>
        <div><b>required:</b> {{ String(required) }}</div>
        <div><b>autocomplete:</b> {{ String(autocomplete) }}</div>
        <div><b>type:</b> {{ String(typeOptions[typeIndex]) }}</div>
        <div><b>clearSelection:</b> {{ String(clearSelection) }}</div>
    </div>

    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
