<script setup lang="ts">

import { IfxButton, IfxIndicator } from '@infineon/infineon-design-system-vue';

import { computed, ref } from 'vue';

const variantOptions = ["number","dot"];
const variantIndex = ref(0);
const inverted = ref(false);

const toggleVariant = () => (variantIndex.value = (variantIndex.value + 1) % variantOptions.length);
const toggleInverted = () => (inverted.value = !inverted.value);

const controlledProps = computed(() => ({
  "variant": variantOptions[variantIndex.value],
  "inverted": inverted.value,
}));

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
  ["variant", controlledProps.value["variant"]],
  ["inverted", controlledProps.value["inverted"]],
]
	.map(([name, value]) => '      ' + String(name) + '="' + formatAttrValueForCode(value) + '"')
  .join("\n");

const codeString = `<script setup lang="ts">
${'</'}script>

<template>
  <div>
    <ifx-indicator
      :number=1
      __CONTROLLED_ATTRS__ />
  </div>
${'</'}template>`.replace("__CONTROLLED_ATTRS__", controlledAttrsCode);

</script>

<template>
  <div>
    <ifx-indicator
      :number=1
      v-bind="controlledProps" />
    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <IfxButton variant="secondary" @click="toggleVariant">Toggle Variant</IfxButton>
      <IfxButton variant="secondary" @click="toggleInverted">Toggle Inverted</IfxButton>
    </div>

    <div class="state">
        <div><b>variant:</b> {{ String(variantOptions[variantIndex.value]) }}</div>
        <div><b>inverted:</b> {{ String(inverted.value) }}</div>
    </div>

    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
