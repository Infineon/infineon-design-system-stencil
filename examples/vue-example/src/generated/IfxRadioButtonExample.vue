<script setup lang="ts">
import { computed, ref } from 'vue';

import { IfxButton, IfxRadioButton, IfxTextField } from '@infineon/infineon-design-system-vue';

const error = ref(false);
const disabled = ref(false);
const checked = ref(false);
const label = ref("Text");
const sizeOptions = ["s","m"];
const sizeIndex = ref(0);
const name = ref("radio-button");
const value = ref("radio");

const toggleError = () => { error.value = !error.value; };
const toggleDisabled = () => { disabled.value = !disabled.value; };
const toggleChecked = () => { checked.value = !checked.value; };
const toggleLabel = (nextValue: string) => { label.value = nextValue; };
const toggleSize = () => { sizeIndex.value = (sizeIndex.value + 1) % sizeOptions.length; };
const toggleName = (nextValue: string) => { name.value = nextValue; };
const toggleValue = (nextValue: string) => { value.value = nextValue; };

const controlledProps = computed<Record<string, unknown>>(() => ({
  "error": error.value,
  "disabled": disabled.value,
  "checked": checked.value,
  "label": label.value,
  "size": sizeOptions[sizeIndex.value],
  "name": name.value,
  "value": value.value,
}));

const handleChange = (event: CustomEvent) => {
  console.log('ifxChange:', event);
  // Add your handler logic here
};

const handleError = (event: CustomEvent) => {
  console.log('ifxError:', event);
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
  ["error", error.value],
  ["disabled", disabled.value],
  ["checked", checked.value],
  ["size", sizeOptions[sizeIndex.value]],
  ["name", name.value],
  ["value", value.value],
]
  .map(([name, value]) => '        ' + formatPropValueForCode(String(name), value))
  .join('\n'));

const codeTemplate = computed(() => `<script setup lang="ts">
import { IfxRadioButton } from '@infineon/infineon-design-system-vue';

const handleChange = (event: CustomEvent) => {
  console.log('ifxChange:', event);
  // Add your handler logic here
};

const handleError = (event: CustomEvent) => {
  console.log('ifxError:', event);
  // Add your handler logic here
};
${'</'}script>

<template>
  <div>
    <ifx-radio-button
      @ifxChange="handleChange"
      @ifxError="handleError"
      __CONTROLLED_PROPS__>
      __CONTROLLED_TEXT_LABEL__
    </ifx-radio-button>
  </div>
${'</'}template>`.replace("__CONTROLLED_PROPS__", controlledPropsCode.value));

const escapeTextForCode = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const codeString = computed(() => codeTemplate.value.replace("__CONTROLLED_TEXT_LABEL__", escapeTextForCode(String(label.value ?? ''))));
</script>

<template>
  <div>
    <ifx-radio-button
      @ifxChange="handleChange"
      @ifxError="handleError"
      v-bind="controlledProps">
      {{ String(label) }}
    </ifx-radio-button>
    <h3 class="controls-title">Controls</h3>
    <div class="controls controls-toggle">
        <ifx-button variant="secondary" @click="toggleError">Toggle Error</ifx-button>
        <ifx-button variant="secondary" @click="toggleDisabled">Toggle Disabled</ifx-button>
        <ifx-button variant="secondary" @click="toggleChecked">Toggle Checked</ifx-button>
        <ifx-button variant="secondary" @click="toggleSize">Toggle Size</ifx-button>
    </div>
    <div class="controls controls-input">
        <ifx-text-field label="label" type="text" :value="String(label)" @input="toggleLabel(getInputValue($event))" />
        <ifx-text-field label="name" type="text" :value="String(name)" @input="toggleName(getInputValue($event))" />
        <ifx-text-field label="value" type="text" :value="String(value)" @input="toggleValue(getInputValue($event))" />
    </div>

    <div class="state">
      <div><b>error:</b> {{ String(error) }}</div>
      <div><b>disabled:</b> {{ String(disabled) }}</div>
      <div><b>checked:</b> {{ String(checked) }}</div>
      <div><b>label:</b> {{ String(label) }}</div>
      <div><b>size:</b> {{ String(sizeOptions[sizeIndex]) }}</div>
      <div><b>name:</b> {{ String(name) }}</div>
      <div><b>value:</b> {{ String(value) }}</div>
    </div>
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
