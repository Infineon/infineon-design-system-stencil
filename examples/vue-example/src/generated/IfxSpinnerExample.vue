<script setup lang="ts">
import { computed, ref } from 'vue';

import { IfxButton, IfxSpinner, IfxTextField } from '@infineon/infineon-design-system-vue';

const sizeOptions = ["s","m"];
const sizeIndex = ref(1);
const variantOptions = ["default","brand"];
const variantIndex = ref(0);
const inverted = ref(false);
const ariaLabelText = ref("");

const toggleSize = () => { sizeIndex.value = (sizeIndex.value + 1) % sizeOptions.length; };
const toggleVariant = () => { variantIndex.value = (variantIndex.value + 1) % variantOptions.length; };
const toggleInverted = () => { inverted.value = !inverted.value; };
const toggleAriaLabelText = (nextValue: string) => { ariaLabelText.value = nextValue; };

const controlledProps = computed<Record<string, unknown>>(() => ({
  "size": sizeOptions[sizeIndex.value],
  "variant": variantOptions[variantIndex.value],
  "inverted": inverted.value,
  "ariaLabelText": ariaLabelText.value,
}));

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
  ["size", sizeOptions[sizeIndex.value]],
  ["variant", variantOptions[variantIndex.value]],
  ["inverted", inverted.value],
  ["ariaLabelText", ariaLabelText.value],
]
  .map(([name, value]) => '        ' + formatPropValueForCode(String(name), value))
  .join('\n'));

const codeTemplate = computed(() => `<script setup lang="ts">
import { IfxSpinner } from '@infineon/infineon-design-system-vue';
${'</'}script>

<template>
  <div>
    <ifx-spinner __CONTROLLED_PROPS__ />
  </div>
${'</'}template>`.replace("__CONTROLLED_PROPS__", controlledPropsCode.value));

const codeString = codeTemplate;
</script>

<template>
  <div>
    <ifx-spinner v-bind="controlledProps" />
    <h3 class="controls-title">Controls</h3>
    <div class="controls controls-toggle">
        <ifx-button variant="secondary" @click="toggleSize">Toggle Size</ifx-button>
        <ifx-button variant="secondary" @click="toggleVariant">Toggle Variant</ifx-button>
        <ifx-button variant="secondary" @click="toggleInverted">Toggle Inverted</ifx-button>
    </div>
    <div class="controls controls-input">
        <ifx-text-field label="ariaLabelText" type="text" :value="String(ariaLabelText)" @input="toggleAriaLabelText(getInputValue($event))" />
    </div>

    <div class="state">
      <div><b>size:</b> {{ String(sizeOptions[sizeIndex]) }}</div>
      <div><b>variant:</b> {{ String(variantOptions[variantIndex]) }}</div>
      <div><b>inverted:</b> {{ String(inverted) }}</div>
      <div><b>ariaLabelText:</b> {{ String(ariaLabelText) }}</div>
    </div>
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
