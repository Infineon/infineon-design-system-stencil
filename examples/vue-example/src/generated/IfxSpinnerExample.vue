<script setup lang="ts">
import { computed, ref } from 'vue';

import { IfxButton, IfxSpinner, IfxTextField } from '@infineon/infineon-design-system-vue';

const sizeOptions = ["s","m"];
const sizeIndex = ref(1);
const variantOptions = ["default","brand"];
const variantIndex = ref(0);
const inverted = ref(false);
const ariaLabelText = ref("");

const handleSizeChange = () => { sizeIndex.value = (sizeIndex.value + 1) % sizeOptions.length; };
const handleVariantChange = () => { variantIndex.value = (variantIndex.value + 1) % variantOptions.length; };
const handleInvertedChange = () => { inverted.value = !inverted.value; };
const handleAriaLabelTextChange = (nextValue: string) => { ariaLabelText.value = nextValue; };

const controlledProps = computed<Record<string, unknown>>(() => ({
  "size": sizeOptions[sizeIndex.value],
  "variant": variantOptions[variantIndex.value],
  "inverted": inverted.value,
  "ariaLabelText": ariaLabelText.value,
}));

const getControlInputValue = (event: Event & {
  detail?: unknown;
  target?: { value?: unknown } | null;
}) => {
  const detail = event.detail;

  if (typeof detail === 'string' || typeof detail === 'number') {
    return String(detail);
  }

  if (detail && typeof detail === 'object' && 'value' in detail) {
    return String((detail as { value?: unknown }).value ?? '');
  }

  return String(event.target?.value ?? '');
};

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
  ["aria-label-text", ariaLabelText.value],
]
  .map(([name, value]) => '        ' + formatPropValueForCode(String(name), value))
  .join('\n'));

const codeTemplate = computed(() => `<script setup lang="ts">
import { IfxSpinner } from '@infineon/infineon-design-system-vue';
${'</'}script>

<template>
  <div>
    <ifx-spinner
      :size="String(controlledProps.size ?? 'm')"
      :variant="String(controlledProps.variant ?? 'default')"
      :inverted="String(controlledProps.inverted ?? 'false')"
      __CONTROLLED_PROPS__ />
  </div>
${'</'}template>`.replace("__CONTROLLED_PROPS__", controlledPropsCode.value));

const codeString = codeTemplate;
</script>

<template>
  <div>
    <ifx-spinner
      :size="String(controlledProps.size ?? 'm')"
      :variant="String(controlledProps.variant ?? 'default')"
      :inverted="String(controlledProps.inverted ?? 'false')"
      v-bind="controlledProps" />
    <h3 class="controls-title">Controls</h3>
    <div class="controls controls-toggle">
        <ifx-button variant="secondary" @click="handleSizeChange">Toggle Size</ifx-button>
        <ifx-button variant="secondary" @click="handleVariantChange">Toggle Variant</ifx-button>
        <ifx-button variant="secondary" @click="handleInvertedChange">Toggle Inverted</ifx-button>
    </div>
    <div class="controls controls-input">
        <ifx-text-field label="ariaLabelText" type="text" :value="String(ariaLabelText)" @ifxInput="handleAriaLabelTextChange(getControlInputValue($event))" />
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
