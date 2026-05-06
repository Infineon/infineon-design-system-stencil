<script setup lang="ts">
import { computed, ref } from 'vue';

import { IfxButton, IfxProgressBar, IfxTextField } from '@infineon/infineon-design-system-vue';

const value = ref(50);
const showLabel = ref(false);
const sizeOptions = ["s","m"];
const sizeIndex = ref(1);

const handleValueChange = (nextValue: string) => { value.value = Number(nextValue); };
const handleShowLabelChange = () => { showLabel.value = !showLabel.value; };
const handleSizeChange = () => { sizeIndex.value = (sizeIndex.value + 1) % sizeOptions.length; };

const controlledProps = computed<Record<string, unknown>>(() => ({
  "value": value.value,
  "showLabel": showLabel.value,
  "size": sizeOptions[sizeIndex.value],
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
  ["value", value.value],
  ["showLabel", showLabel.value],
  ["size", sizeOptions[sizeIndex.value]],
]
  .map(([name, value]) => '        ' + formatPropValueForCode(String(name), value))
  .join('\n'));

const codeTemplate = computed(() => `<script setup lang="ts">
import { IfxProgressBar } from '@infineon/infineon-design-system-vue';
${'</'}script>

<template>
  <div>
    <ifx-progress-bar
      :value="String(controlledProps.value ?? "50")"
      :show-label="String(controlledProps.showLabel ?? "false")"
      :size="String(controlledProps.size ?? "m")"
      __CONTROLLED_PROPS__ />
  </div>
${'</'}template>`.replace("__CONTROLLED_PROPS__", controlledPropsCode.value));

const codeString = codeTemplate;
</script>

<template>
  <div>
    <ifx-progress-bar
      :value="String(controlledProps.value ?? "50")"
      :show-label="String(controlledProps.showLabel ?? "false")"
      :size="String(controlledProps.size ?? "m")"
      v-bind="controlledProps" />
    <h3 class="controls-title">Controls</h3>
    <div class="controls controls-toggle">
        <ifx-button variant="secondary" @click="handleShowLabelChange">Toggle ShowLabel</ifx-button>
        <ifx-button variant="secondary" @click="handleSizeChange">Toggle Size</ifx-button>
    </div>
    <div class="controls controls-input">
        <ifx-text-field label="value" type="text" :value="String(value)" @input="handleValueChange(getInputValue($event))" />
    </div>

    <div class="state">
      <div><b>value:</b> {{ String(value) }}</div>
      <div><b>showLabel:</b> {{ String(showLabel) }}</div>
      <div><b>size:</b> {{ String(sizeOptions[sizeIndex]) }}</div>
    </div>
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
