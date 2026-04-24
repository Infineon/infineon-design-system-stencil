<script setup lang="ts">
import { computed, ref } from 'vue';

import { IfxButton, IfxIndicator, IfxTextField } from '@infineon/infineon-design-system-vue';

const variantOptions = ["number","dot"];
const variantIndex = ref(0);
const number = ref("1");
const inverted = ref(false);

const toggleVariant = () => { variantIndex.value = (variantIndex.value + 1) % variantOptions.length; };
const toggleNumber = (nextValue: string) => { number.value = nextValue; };
const toggleInverted = () => { inverted.value = !inverted.value; };

const controlledProps = computed<Record<string, unknown>>(() => ({
  "variant": variantOptions[variantIndex.value],
  "number": number.value,
  "inverted": inverted.value,
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
  ["variant", variantOptions[variantIndex.value]],
  ["number", number.value],
  ["inverted", inverted.value],
]
  .map(([name, value]) => '        ' + formatPropValueForCode(String(name), value))
  .join('\n'));

const codeTemplate = computed(() => `<script setup lang="ts">
import { IfxIndicator } from '@infineon/infineon-design-system-vue';
${'</'}script>

<template>
  <div>
    <ifx-indicator __CONTROLLED_PROPS__ />
  </div>
${'</'}template>`.replace("__CONTROLLED_PROPS__", controlledPropsCode.value));

const codeString = codeTemplate;
</script>

<template>
  <div>
    <ifx-indicator v-bind="controlledProps" />
    <h3 class="controls-title">Controls</h3>
    <div class="controls controls-toggle">
        <ifx-button variant="secondary" @click="toggleVariant">Toggle Variant</ifx-button>
        <ifx-button variant="secondary" @click="toggleInverted">Toggle Inverted</ifx-button>
    </div>
    <div class="controls controls-input">
        <ifx-text-field label="number" type="text" :value="String(number)" @input="toggleNumber(getInputValue($event))" />
    </div>

    <div class="state">
      <div><b>variant:</b> {{ String(variantOptions[variantIndex]) }}</div>
      <div><b>number:</b> {{ String(number) }}</div>
      <div><b>inverted:</b> {{ String(inverted) }}</div>
    </div>
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
