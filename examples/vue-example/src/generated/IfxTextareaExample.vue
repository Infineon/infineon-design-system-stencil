<script setup lang="ts">

import { IfxButton, IfxTextField, IfxTextarea } from '@infineon/infineon-design-system-vue';

import { computed, ref } from 'vue';

const caption = ref("Caption text, description, error notification");
const cols = ref(43);
const disabled = ref(false);
const error = ref(false);
const label = ref("Label Text");
const maxlength = ref("");
const name = ref("textarea");
const placeholder = ref("Placeholder");
const required = ref(true);
const readOnly = ref(false);
const resizeOptions = ["both","vertical","horizontal","none"];
const resizeIndex = ref(0);
const rows = ref("5");
const value = ref("");
const wrapOptions = ["soft","hard","off"];
const wrapIndex = ref(0);
const fullWidth = ref(false);
const ifxInput = ref("");

const toggleCaption = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; caption.value = String(raw); };
const toggleCols = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; cols.value = Number(raw); };
const toggleDisabled = () => (disabled.value = !disabled.value);
const toggleError = () => (error.value = !error.value);
const toggleLabel = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; label.value = String(raw); };
const toggleMaxlength = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; maxlength.value = String(raw); };
const toggleName = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; name.value = String(raw); };
const togglePlaceholder = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; placeholder.value = String(raw); };
const toggleRequired = () => (required.value = !required.value);
const toggleReadOnly = () => (readOnly.value = !readOnly.value);
const toggleResize = () => (resizeIndex.value = (resizeIndex.value + 1) % resizeOptions.length);
const toggleRows = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; rows.value = String(raw); };
const toggleValue = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; value.value = String(raw); };
const toggleWrap = () => (wrapIndex.value = (wrapIndex.value + 1) % wrapOptions.length);
const toggleFullWidth = () => (fullWidth.value = !fullWidth.value);
const toggleIfxInput = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; ifxInput.value = String(raw); };

const controlledProps = computed(() => ({
  "caption": caption.value,
  "cols": cols.value,
  "disabled": disabled.value,
  "error": error.value,
  "label": label.value,
  "maxlength": maxlength.value,
  "name": name.value,
  "placeholder": placeholder.value,
  "required": required.value,
  "readOnly": readOnly.value,
  "resize": resizeOptions[resizeIndex.value],
  "rows": rows.value,
  "value": value.value,
  "wrap": wrapOptions[wrapIndex.value],
  "fullWidth": fullWidth.value,
  "ifxInput": ifxInput.value,
}));
const boundProps = controlledProps;

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
  ["caption", controlledProps.value["caption"]],
  ["cols", controlledProps.value["cols"]],
  ["disabled", controlledProps.value["disabled"]],
  ["error", controlledProps.value["error"]],
  ["label", controlledProps.value["label"]],
  ["maxlength", controlledProps.value["maxlength"]],
  ["name", controlledProps.value["name"]],
  ["placeholder", controlledProps.value["placeholder"]],
  ["required", controlledProps.value["required"]],
  ["readOnly", controlledProps.value["readOnly"]],
  ["resize", controlledProps.value["resize"]],
  ["rows", controlledProps.value["rows"]],
  ["value", controlledProps.value["value"]],
  ["wrap", controlledProps.value["wrap"]],
  ["fullWidth", controlledProps.value["fullWidth"]],
  ["ifxInput", controlledProps.value["ifxInput"]],
]
	.map(([name, value]) => '      ' + String(name) + '="' + formatAttrValueForCode(value) + '"')
  .join("\n");

const codeStringWithAttrs = `<script setup lang="ts">
${'</'}script>

<template>
  <div>
    <ifx-textarea __CONTROLLED_ATTRS__ />
  </div>
${'</'}template>`.replace("__CONTROLLED_ATTRS__", controlledAttrsCode);

const codeString = codeStringWithAttrs;

</script>

<template>
  <div>
    <ifx-textarea v-bind="controlledProps" />
    <h3 class="controls-title">Controls</h3>
	<div class="controls controls-toggle">
      <IfxButton variant="secondary" @click="toggleDisabled">Toggle Disabled</IfxButton>
      <IfxButton variant="secondary" @click="toggleError">Toggle Error</IfxButton>
      <IfxButton variant="secondary" @click="toggleRequired">Toggle Required</IfxButton>
      <IfxButton variant="secondary" @click="toggleReadOnly">Toggle ReadOnly</IfxButton>
      <IfxButton variant="secondary" @click="toggleResize">Toggle Resize</IfxButton>
      <IfxButton variant="secondary" @click="toggleWrap">Toggle Wrap</IfxButton>
      <IfxButton variant="secondary" @click="toggleFullWidth">Toggle FullWidth</IfxButton>
    </div>
	<div class="controls controls-input">
      <IfxTextField label="caption" type="text" :value="String(caption)" @input="toggleCaption" @ifxInput="toggleCaption" />
      <IfxTextField label="cols" type="number" :value="String(cols)" @input="toggleCols" @ifxInput="toggleCols" />
      <IfxTextField label="label" type="text" :value="String(label)" @input="toggleLabel" @ifxInput="toggleLabel" />
      <IfxTextField label="maxlength" type="text" :value="String(maxlength)" @input="toggleMaxlength" @ifxInput="toggleMaxlength" />
      <IfxTextField label="name" type="text" :value="String(name)" @input="toggleName" @ifxInput="toggleName" />
      <IfxTextField label="placeholder" type="text" :value="String(placeholder)" @input="togglePlaceholder" @ifxInput="togglePlaceholder" />
      <IfxTextField label="rows" type="text" :value="String(rows)" @input="toggleRows" @ifxInput="toggleRows" />
      <IfxTextField label="value" type="text" :value="String(value)" @input="toggleValue" @ifxInput="toggleValue" />
      <IfxTextField label="ifxInput" type="text" :value="String(ifxInput)" @input="toggleIfxInput" @ifxInput="toggleIfxInput" />
    </div>

    <div class="state">
        <div><b>caption:</b> {{ String(caption) }}</div>
        <div><b>cols:</b> {{ String(cols) }}</div>
        <div><b>disabled:</b> {{ String(disabled) }}</div>
        <div><b>error:</b> {{ String(error) }}</div>
        <div><b>label:</b> {{ String(label) }}</div>
        <div><b>maxlength:</b> {{ String(maxlength) }}</div>
        <div><b>name:</b> {{ String(name) }}</div>
        <div><b>placeholder:</b> {{ String(placeholder) }}</div>
        <div><b>required:</b> {{ String(required) }}</div>
        <div><b>readOnly:</b> {{ String(readOnly) }}</div>
        <div><b>resize:</b> {{ String(resizeOptions[resizeIndex]) }}</div>
        <div><b>rows:</b> {{ String(rows) }}</div>
        <div><b>value:</b> {{ String(value) }}</div>
        <div><b>wrap:</b> {{ String(wrapOptions[wrapIndex]) }}</div>
        <div><b>fullWidth:</b> {{ String(fullWidth) }}</div>
        <div><b>ifxInput:</b> {{ String(ifxInput) }}</div>
    </div>

    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
