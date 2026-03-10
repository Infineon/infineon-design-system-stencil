<script setup lang="ts">

import { IfxButton, IfxLink } from '@infineon/infineon-design-system-vue';

import { computed, ref } from 'vue';

const targetOptions = ["_blank","_self","_parent"];
const targetIndex = ref(0);
const disabled = ref(false);
const sizeOptions = ["s","m","l","xl"];
const sizeIndex = ref(1);
const variantOptions = ["bold","underlined","title","menu"];
const variantIndex = ref(0);

const toggleTarget = () => (targetIndex.value = (targetIndex.value + 1) % targetOptions.length);
const toggleDisabled = () => (disabled.value = !disabled.value);
const toggleSize = () => (sizeIndex.value = (sizeIndex.value + 1) % sizeOptions.length);
const toggleVariant = () => (variantIndex.value = (variantIndex.value + 1) % variantOptions.length);

const controlledProps = computed(() => ({
  "target": targetOptions[targetIndex.value],
  "disabled": disabled.value,
  "size": sizeOptions[sizeIndex.value],
  "variant": variantOptions[variantIndex.value],
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
  ["target", controlledProps.value["target"]],
  ["disabled", controlledProps.value["disabled"]],
  ["size", controlledProps.value["size"]],
  ["variant", controlledProps.value["variant"]],
]
	.map(([name, value]) => '      ' + String(name) + '="' + formatAttrValueForCode(value) + '"')
  .join("\n");

const codeString = `<script setup lang="ts">
${'</'}script>

<template>
  <div>
    <ifx-link
      href=""
      aria-label="Link"
      download=""
      __CONTROLLED_ATTRS__>
      Link
    </ifx-link>
  </div>
${'</'}template>`.replace("__CONTROLLED_ATTRS__", controlledAttrsCode);

</script>

<template>
  <div>
    <ifx-link
      href=""
      aria-label="Link"
      download=""
      v-bind="controlledProps">
      Link
    </ifx-link>
    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <IfxButton variant="secondary" @click="toggleTarget">Toggle Target</IfxButton>
      <IfxButton variant="secondary" @click="toggleDisabled">Toggle Disabled</IfxButton>
      <IfxButton variant="secondary" @click="toggleSize">Toggle Size</IfxButton>
      <IfxButton variant="secondary" @click="toggleVariant">Toggle Variant</IfxButton>
    </div>

    <div class="state">
        <div><b>target:</b> {{ String(targetOptions[targetIndex.value]) }}</div>
        <div><b>disabled:</b> {{ String(disabled.value) }}</div>
        <div><b>size:</b> {{ String(sizeOptions[sizeIndex.value]) }}</div>
        <div><b>variant:</b> {{ String(variantOptions[variantIndex.value]) }}</div>
    </div>

    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
