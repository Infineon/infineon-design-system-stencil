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
const ifxInput = ref("");

const toggleCaption = (nextValue: string) => { caption.value = nextValue; };
const toggleCols = (nextValue: string) => { cols.value = Number(nextValue); };
const toggleDisabled = () => { disabled.value = !disabled.value; };
const toggleError = () => { error.value = !error.value; };
const toggleLabel = (nextValue: string) => { label.value = nextValue; };
const toggleMaxlength = (nextValue: string) => { maxlength.value = nextValue; };
const toggleName = (nextValue: string) => { name.value = nextValue; };
const togglePlaceholder = (nextValue: string) => { placeholder.value = nextValue; };
const toggleRequired = () => { required.value = !required.value; };
const toggleReadOnly = () => { readOnly.value = !readOnly.value; };
const toggleResize = () => { resizeIndex.value = (resizeIndex.value + 1) % resizeOptions.length; };
const toggleRows = (nextValue: string) => { rows.value = nextValue; };
const toggleValue = (nextValue: string) => { value.value = nextValue; };
const toggleWrap = () => { wrapIndex.value = (wrapIndex.value + 1) % wrapOptions.length; };
const toggleFullWidth = () => { fullWidth.value = !fullWidth.value; };
const toggleIfxInput = (nextValue: string) => { ifxInput.value = nextValue; };

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
  "ifxInput": ifxInput.value,
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
  ["ifxInput", ifxInput.value],
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
      __CONTROLLED_PROPS__ />
  </div>
${'</'}template>`.replace("__CONTROLLED_PROPS__", controlledPropsCode.value));

const codeString = codeTemplate;
</script>

<template>
  <div>
    <ifx-textarea
      @ifxInput="handleInput"
      v-bind="controlledProps" />
    <h3 class="controls-title">Controls</h3>
    <div class="controls controls-toggle">
        <ifx-button variant="secondary" @click="toggleDisabled">Toggle Disabled</ifx-button>
        <ifx-button variant="secondary" @click="toggleError">Toggle Error</ifx-button>
        <ifx-button variant="secondary" @click="toggleRequired">Toggle Required</ifx-button>
        <ifx-button variant="secondary" @click="toggleReadOnly">Toggle ReadOnly</ifx-button>
        <ifx-button variant="secondary" @click="toggleResize">Toggle Resize</ifx-button>
        <ifx-button variant="secondary" @click="toggleWrap">Toggle Wrap</ifx-button>
        <ifx-button variant="secondary" @click="toggleFullWidth">Toggle FullWidth</ifx-button>
    </div>
    <div class="controls controls-input">
        <ifx-text-field label="caption" type="text" :value="String(caption)" @input="toggleCaption(getInputValue($event))" />
        <ifx-text-field label="cols" type="text" :value="String(cols)" @input="toggleCols(getInputValue($event))" />
        <ifx-text-field label="label" type="text" :value="String(label)" @input="toggleLabel(getInputValue($event))" />
        <ifx-text-field label="maxlength" type="text" :value="String(maxlength)" @input="toggleMaxlength(getInputValue($event))" />
        <ifx-text-field label="name" type="text" :value="String(name)" @input="toggleName(getInputValue($event))" />
        <ifx-text-field label="placeholder" type="text" :value="String(placeholder)" @input="togglePlaceholder(getInputValue($event))" />
        <ifx-text-field label="rows" type="text" :value="String(rows)" @input="toggleRows(getInputValue($event))" />
        <ifx-text-field label="value" type="text" :value="String(value)" @input="toggleValue(getInputValue($event))" />
        <ifx-text-field label="ifxInput" type="text" :value="String(ifxInput)" @input="toggleIfxInput(getInputValue($event))" />
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
