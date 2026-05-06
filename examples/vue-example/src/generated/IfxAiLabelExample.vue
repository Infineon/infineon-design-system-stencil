<script setup lang="ts">
import { computed, ref } from 'vue';

import { IfxAiLabel, IfxButton } from '@infineon/infineon-design-system-vue';

const divider = ref(true);
const variantOptions = ["label","icon"];
const variantIndex = ref(0);

const handleDividerChange = () => { divider.value = !divider.value; };
const handleVariantChange = () => { variantIndex.value = (variantIndex.value + 1) % variantOptions.length; };

const controlledProps = computed<Record<string, unknown>>(() => ({
  "divider": divider.value,
  "variant": variantOptions[variantIndex.value],
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
  ["divider", divider.value],
  ["variant", variantOptions[variantIndex.value]],
]
  .map(([name, value]) => '        ' + formatPropValueForCode(String(name), value))
  .join('\n'));

const codeTemplate = computed(() => `<script setup lang="ts">
import { IfxAiLabel } from '@infineon/infineon-design-system-vue';
${'</'}script>

<template>
  <div>
    <ifx-ai-label
      :divider="String(controlledProps.divider ?? "true")"
      :variant="String(controlledProps.variant ?? "label")"
      __CONTROLLED_PROPS__ />
  </div>
${'</'}template>`.replace("__CONTROLLED_PROPS__", controlledPropsCode.value));

const codeString = codeTemplate;
</script>

<template>
  <div>
    <ifx-ai-label
      :divider="String(controlledProps.divider ?? "true")"
      :variant="String(controlledProps.variant ?? "label")"
      v-bind="controlledProps" />
    <h3 class="controls-title">Controls</h3>
    <div class="controls controls-toggle">
        <ifx-button variant="secondary" @click="handleDividerChange">Toggle Divider</ifx-button>
        <ifx-button variant="secondary" @click="handleVariantChange">Toggle Variant</ifx-button>
    </div>
    

    <div class="state">
      <div><b>divider:</b> {{ String(divider) }}</div>
      <div><b>variant:</b> {{ String(variantOptions[variantIndex]) }}</div>
    </div>
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
