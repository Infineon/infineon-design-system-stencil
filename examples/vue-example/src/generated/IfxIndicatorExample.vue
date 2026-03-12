<script setup lang="ts">

import { IfxButton, IfxIndicator, IfxTextField } from '@infineon/infineon-design-system-vue';

import { computed, ref } from 'vue';

const variantOptions = ["number","dot"];
const variantIndex = ref(0);
const number = ref("1");
const inverted = ref(false);

const toggleVariant = () => (variantIndex.value = (variantIndex.value + 1) % variantOptions.length);
const toggleNumber = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; number.value = String(raw); };
const toggleInverted = () => (inverted.value = !inverted.value);

const controlledProps = computed(() => ({
  "variant": variantOptions[variantIndex.value],
  "number": number.value,
  "inverted": inverted.value,
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
  ["variant", controlledProps.value["variant"]],
  ["number", controlledProps.value["number"]],
  ["inverted", controlledProps.value["inverted"]],
]
	.map(([name, value]) => '      ' + String(name) + '="' + formatAttrValueForCode(value) + '"')
  .join("\n");

const codeStringWithAttrs = `<script setup lang="ts">
${'</'}script>

<template>
  <div>
    <ifx-indicator __CONTROLLED_ATTRS__ />
  </div>
${'</'}template>`.replace("__CONTROLLED_ATTRS__", controlledAttrsCode);

const codeString = codeStringWithAttrs;

</script>

<template>
  <div>
    <ifx-indicator v-bind="controlledProps" />
    <h3 class="controls-title">Controls</h3>
	<div class="controls controls-toggle">
      <IfxButton variant="secondary" @click="toggleVariant">Toggle Variant</IfxButton>
      <IfxButton variant="secondary" @click="toggleInverted">Toggle Inverted</IfxButton>
    </div>
	<div class="controls controls-input">
      <IfxTextField label="number" type="text" :value="String(number)" @input="toggleNumber" @ifxInput="toggleNumber" />
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
