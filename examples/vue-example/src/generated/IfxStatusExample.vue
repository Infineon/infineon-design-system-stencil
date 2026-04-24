<script setup lang="ts">
import { computed, ref } from 'vue';

import { IfxButton, IfxStatus, IfxTextField } from '@infineon/infineon-design-system-vue';

const label = ref("text");
const border = ref(true);
const colorOptions = ["engineering-100","engineering-200","engineering-300","engineering-400","engineering-500","engineering-600","ocean-100","ocean-200","ocean-300","ocean-400","ocean-500","ocean-600","ocean-700","red-500","red-600","red-700","orange-500","green-500","lawn-400","lawn-500","lawn-700","berry-400","berry-500","sun-400","sun-500","sand-400","sand-500"];
const colorIndex = ref(16);

const toggleLabel = (nextValue: string) => { label.value = nextValue; };
const toggleBorder = () => { border.value = !border.value; };
const toggleColor = () => { colorIndex.value = (colorIndex.value + 1) % colorOptions.length; };

const controlledProps = computed<Record<string, unknown>>(() => ({
  "label": label.value,
  "border": border.value,
  "color": colorOptions[colorIndex.value],
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
  ["label", label.value],
  ["border", border.value],
  ["color", colorOptions[colorIndex.value]],
]
  .map(([name, value]) => '        ' + formatPropValueForCode(String(name), value))
  .join('\n'));

const codeTemplate = computed(() => `<script setup lang="ts">
import { IfxStatus } from '@infineon/infineon-design-system-vue';
${'</'}script>

<template>
  <div>
    <ifx-status __CONTROLLED_PROPS__ />
  </div>
${'</'}template>`.replace("__CONTROLLED_PROPS__", controlledPropsCode.value));

const codeString = codeTemplate;
</script>

<template>
  <div>
    <ifx-status v-bind="controlledProps" />
    <h3 class="controls-title">Controls</h3>
    <div class="controls controls-toggle">
        <ifx-button variant="secondary" @click="toggleBorder">Toggle Border</ifx-button>
        <ifx-button variant="secondary" @click="toggleColor">Toggle Color</ifx-button>
    </div>
    <div class="controls controls-input">
        <ifx-text-field label="label" type="text" :value="String(label)" @input="toggleLabel(getInputValue($event))" />
    </div>

    <div class="state">
      <div><b>label:</b> {{ String(label) }}</div>
      <div><b>border:</b> {{ String(border) }}</div>
      <div><b>color:</b> {{ String(colorOptions[colorIndex]) }}</div>
    </div>
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
