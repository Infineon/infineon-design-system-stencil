<script setup lang="ts">
import { computed, ref } from 'vue';

import { IfxButton, IfxTextField, IfxTextarea } from '@infineon/infineon-design-system-vue';

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

const handleCaptionChange = (nextValue: string) => { caption.value = nextValue; };
const handleColsChange = (nextValue: string) => { cols.value = Number(nextValue); };
const handleDisabledChange = () => { disabled.value = !disabled.value; };
const handleErrorChange = () => { error.value = !error.value; };
const handleLabelChange = (nextValue: string) => { label.value = nextValue; };
const handleMaxlengthChange = (nextValue: string) => { maxlength.value = nextValue; };
const handleNameChange = (nextValue: string) => { name.value = nextValue; };
const handlePlaceholderChange = (nextValue: string) => { placeholder.value = nextValue; };
const handleRequiredChange = () => { required.value = !required.value; };
const handleReadOnlyChange = () => { readOnly.value = !readOnly.value; };
const handleResizeChange = () => { resizeIndex.value = (resizeIndex.value + 1) % resizeOptions.length; };
const handleRowsChange = (nextValue: string) => { rows.value = nextValue; };
const handleValueChange = (nextValue: string) => { value.value = nextValue; };
const handleWrapChange = () => { wrapIndex.value = (wrapIndex.value + 1) % wrapOptions.length; };
const handleFullWidthChange = () => { fullWidth.value = !fullWidth.value; };

const controlledProps = computed<Record<string, unknown>>(() => ({
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
}));

const handleInput = (event: CustomEvent) => {
  console.log('ifxInput:', event);
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
  ["caption", caption.value],
  ["cols", cols.value],
  ["disabled", disabled.value],
  ["error", error.value],
  ["label", label.value],
  ["maxlength", maxlength.value],
  ["name", name.value],
  ["placeholder", placeholder.value],
  ["required", required.value],
  ["readOnly", readOnly.value],
  ["resize", resizeOptions[resizeIndex.value]],
  ["rows", rows.value],
  ["value", value.value],
  ["wrap", wrapOptions[wrapIndex.value]],
  ["fullWidth", fullWidth.value],
]
  .map(([name, value]) => '        ' + formatPropValueForCode(String(name), value))
  .join('\n'));

const codeTemplate = computed(() => `<script setup lang="ts">
import { IfxTextarea } from '@infineon/infineon-design-system-vue';

const handleInput = (event: CustomEvent) => {
  console.log('ifxInput:', event);
  // Add your handler logic here
};
${'</'}script>

<template>
  <div>
    <ifx-textarea
      @ifxInput="handleInput"
      :caption="String(controlledProps.caption ?? "Caption text, description, error notification")"
      :cols="String(controlledProps.cols ?? "43")"
      :disabled="String(controlledProps.disabled ?? "false")"
      :error="String(controlledProps.error ?? "false")"
      :label="String(controlledProps.label ?? "Label Text")"
      :maxlength="String(controlledProps.maxlength ?? "")"
      :name="String(controlledProps.name ?? "textarea")"
      :placeholder="String(controlledProps.placeholder ?? "Placeholder")"
      :required="String(controlledProps.required ?? "true")"
      :read-only="String(controlledProps.readOnly ?? "false")"
      :resize="String(controlledProps.resize ?? "both")"
      :rows="String(controlledProps.rows ?? "5")"
      :value="String(controlledProps.value ?? "")"
      :wrap="String(controlledProps.wrap ?? "soft")"
      :full-width="String(controlledProps.fullWidth ?? "false")"
      __CONTROLLED_PROPS__ />
  </div>
${'</'}template>`.replace("__CONTROLLED_PROPS__", controlledPropsCode.value));

const codeString = codeTemplate;
</script>

<template>
  <div>
    <ifx-textarea
      @ifxInput="handleInput"
      :caption="String(controlledProps.caption ?? "Caption text, description, error notification")"
      :cols="String(controlledProps.cols ?? "43")"
      :disabled="String(controlledProps.disabled ?? "false")"
      :error="String(controlledProps.error ?? "false")"
      :label="String(controlledProps.label ?? "Label Text")"
      :maxlength="String(controlledProps.maxlength ?? "")"
      :name="String(controlledProps.name ?? "textarea")"
      :placeholder="String(controlledProps.placeholder ?? "Placeholder")"
      :required="String(controlledProps.required ?? "true")"
      :read-only="String(controlledProps.readOnly ?? "false")"
      :resize="String(controlledProps.resize ?? "both")"
      :rows="String(controlledProps.rows ?? "5")"
      :value="String(controlledProps.value ?? "")"
      :wrap="String(controlledProps.wrap ?? "soft")"
      :full-width="String(controlledProps.fullWidth ?? "false")"
      v-bind="controlledProps" />
    <h3 class="controls-title">Controls</h3>
    <div class="controls controls-toggle">
        <ifx-button variant="secondary" @click="handleDisabledChange">Toggle Disabled</ifx-button>
        <ifx-button variant="secondary" @click="handleErrorChange">Toggle Error</ifx-button>
        <ifx-button variant="secondary" @click="handleRequiredChange">Toggle Required</ifx-button>
        <ifx-button variant="secondary" @click="handleReadOnlyChange">Toggle ReadOnly</ifx-button>
        <ifx-button variant="secondary" @click="handleResizeChange">Toggle Resize</ifx-button>
        <ifx-button variant="secondary" @click="handleWrapChange">Toggle Wrap</ifx-button>
        <ifx-button variant="secondary" @click="handleFullWidthChange">Toggle FullWidth</ifx-button>
    </div>
    <div class="controls controls-input">
        <ifx-text-field label="caption" type="text" :value="String(caption)" @input="handleCaptionChange(getInputValue($event))" />
        <ifx-text-field label="cols" type="text" :value="String(cols)" @input="handleColsChange(getInputValue($event))" />
        <ifx-text-field label="label" type="text" :value="String(label)" @input="handleLabelChange(getInputValue($event))" />
        <ifx-text-field label="maxlength" type="text" :value="String(maxlength)" @input="handleMaxlengthChange(getInputValue($event))" />
        <ifx-text-field label="name" type="text" :value="String(name)" @input="handleNameChange(getInputValue($event))" />
        <ifx-text-field label="placeholder" type="text" :value="String(placeholder)" @input="handlePlaceholderChange(getInputValue($event))" />
        <ifx-text-field label="rows" type="text" :value="String(rows)" @input="handleRowsChange(getInputValue($event))" />
        <ifx-text-field label="value" type="text" :value="String(value)" @input="handleValueChange(getInputValue($event))" />
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
    </div>
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
