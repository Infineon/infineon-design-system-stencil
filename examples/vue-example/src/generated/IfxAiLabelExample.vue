<script setup lang="ts">

import { IfxAiLabel, IfxButton } from '@infineon/infineon-design-system-vue';

import { computed, ref } from 'vue';

const divider = ref(true);
const variantOptions = ["label","icon"];
const variantIndex = ref(0);

const toggleDivider = () => (divider.value = !divider.value);
const toggleVariant = () => (variantIndex.value = (variantIndex.value + 1) % variantOptions.length);

const controlledProps = computed(() => ({
  "divider": divider.value,
  "variant": variantOptions[variantIndex.value],
}));
const boundProps = controlledProps;

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
  ["divider", controlledProps.value["divider"]],
  ["variant", controlledProps.value["variant"]],
]
	.map(([name, value]) => '      ' + String(name) + '="' + formatAttrValueForCode(value) + '"')
  .join("\n");

const codeStringWithAttrs = `<script setup lang="ts">
${'</'}script>

<template>
  <div>
    <ifx-ai-label __CONTROLLED_ATTRS__ />
  </div>
${'</'}template>`.replace("__CONTROLLED_ATTRS__", controlledAttrsCode);

const codeString = codeStringWithAttrs;

</script>

<template>
  <div>
    <ifx-ai-label v-bind="controlledProps" />
    <h3 class="controls-title">Controls</h3>
	<div class="controls controls-toggle">
      <IfxButton variant="secondary" @click="toggleDivider">Toggle Divider</IfxButton>
      <IfxButton variant="secondary" @click="toggleVariant">Toggle Variant</IfxButton>
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
