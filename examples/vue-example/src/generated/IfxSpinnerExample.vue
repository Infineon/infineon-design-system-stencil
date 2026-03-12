<script setup lang="ts">

import { IfxButton, IfxSpinner, IfxTextField } from '@infineon/infineon-design-system-vue';

import { computed, ref } from 'vue';

const sizeOptions = ["s","m"];
const sizeIndex = ref(1);
const variantOptions = ["default","brand"];
const variantIndex = ref(0);
const inverted = ref(false);
const ariaLabel = ref("");

const toggleSize = () => (sizeIndex.value = (sizeIndex.value + 1) % sizeOptions.length);
const toggleVariant = () => (variantIndex.value = (variantIndex.value + 1) % variantOptions.length);
const toggleInverted = () => (inverted.value = !inverted.value);
const toggleAriaLabel = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; ariaLabel.value = String(raw); };

const controlledProps = computed(() => ({
  "size": sizeOptions[sizeIndex.value],
  "variant": variantOptions[variantIndex.value],
  "inverted": inverted.value,
  "ariaLabel": ariaLabel.value,
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
  ["size", controlledProps.value["size"]],
  ["variant", controlledProps.value["variant"]],
  ["inverted", controlledProps.value["inverted"]],
  ["ariaLabel", controlledProps.value["ariaLabel"]],
]
	.map(([name, value]) => '      ' + String(name) + '="' + formatAttrValueForCode(value) + '"')
  .join("\n");

const codeStringWithAttrs = `<script setup lang="ts">
${'</'}script>

<template>
  <div>
    <ifx-spinner __CONTROLLED_ATTRS__ />
  </div>
${'</'}template>`.replace("__CONTROLLED_ATTRS__", controlledAttrsCode);

const codeString = codeStringWithAttrs;

</script>

<template>
  <div>
    <ifx-spinner v-bind="controlledProps" />
    <h3 class="controls-title">Controls</h3>
	<div class="controls controls-toggle">
      <IfxButton variant="secondary" @click="toggleSize">Toggle Size</IfxButton>
      <IfxButton variant="secondary" @click="toggleVariant">Toggle Variant</IfxButton>
      <IfxButton variant="secondary" @click="toggleInverted">Toggle Inverted</IfxButton>
    </div>
	<div class="controls controls-input">
      <IfxTextField label="ariaLabel" type="text" :value="String(ariaLabel)" @input="toggleAriaLabel" @ifxInput="toggleAriaLabel" />
    </div>

    <div class="state">
        <div><b>size:</b> {{ String(sizeOptions[sizeIndex]) }}</div>
        <div><b>variant:</b> {{ String(variantOptions[variantIndex]) }}</div>
        <div><b>inverted:</b> {{ String(inverted) }}</div>
        <div><b>ariaLabel:</b> {{ String(ariaLabel) }}</div>
    </div>

    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
