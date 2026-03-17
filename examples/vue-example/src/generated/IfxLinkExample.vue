<script setup lang="ts">

import { IfxButton, IfxLink, IfxTextField } from '@infineon/infineon-design-system-vue';

import { computed, ref } from 'vue';

const label = ref("Link");
const ariaLabel = ref("Link");
const href = ref("");
const targetOptions = ["_blank","_self","_parent"];
const targetIndex = ref(0);
const disabled = ref(false);
const download = ref("");
const sizeOptions = ["s","m","l","xl"];
const sizeIndex = ref(1);
const variantOptions = ["bold","underlined","title","menu"];
const variantIndex = ref(0);

const toggleLabel = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; label.value = String(raw); };
const toggleAriaLabel = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; ariaLabel.value = String(raw); };
const toggleHref = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; href.value = String(raw); };
const toggleTarget = () => (targetIndex.value = (targetIndex.value + 1) % targetOptions.length);
const toggleDisabled = () => (disabled.value = !disabled.value);
const toggleDownload = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; download.value = String(raw); };
const toggleSize = () => (sizeIndex.value = (sizeIndex.value + 1) % sizeOptions.length);
const toggleVariant = () => (variantIndex.value = (variantIndex.value + 1) % variantOptions.length);

const controlledProps = computed(() => ({
  "label": label.value,
  "ariaLabel": ariaLabel.value,
  "href": href.value,
  "target": targetOptions[targetIndex.value],
  "disabled": disabled.value,
  "download": download.value,
  "size": sizeOptions[sizeIndex.value],
  "variant": variantOptions[variantIndex.value],
}));
const boundProps = computed(() => {
  const source = controlledProps.value as Record<string, unknown>;
  const { "label": _ignored, ...rest } = source;
  return rest;
});

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
  ["ariaLabel", controlledProps.value["ariaLabel"]],
  ["href", controlledProps.value["href"]],
  ["target", controlledProps.value["target"]],
  ["disabled", controlledProps.value["disabled"]],
  ["download", controlledProps.value["download"]],
  ["size", controlledProps.value["size"]],
  ["variant", controlledProps.value["variant"]],
]
	.map(([name, value]) => '      ' + String(name) + '="' + formatAttrValueForCode(value) + '"')
  .join("\n");

const codeStringWithAttrs = `<script setup lang="ts">
${'</'}script>

<template>
  <div>
    <ifx-link v-bind="boundProps">
      __CONTROLLED_TEXT_LABEL__
    </ifx-link>
  </div>
${'</'}template>`.replace("__CONTROLLED_ATTRS__", controlledAttrsCode);

const escapedText = String(controlledProps.value["label"] ?? "")
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;');

const codeString = codeStringWithAttrs.replace("__CONTROLLED_TEXT_LABEL__", escapedText);

</script>

<template>
  <div>
    <ifx-link v-bind="boundProps">
      {{ String(label) }}
    </ifx-link>
    <h3 class="controls-title">Controls</h3>
	<div class="controls controls-toggle">
      <IfxButton variant="secondary" @click="toggleTarget">Toggle Target</IfxButton>
      <IfxButton variant="secondary" @click="toggleDisabled">Toggle Disabled</IfxButton>
      <IfxButton variant="secondary" @click="toggleSize">Toggle Size</IfxButton>
      <IfxButton variant="secondary" @click="toggleVariant">Toggle Variant</IfxButton>
    </div>
	<div class="controls controls-input">
      <IfxTextField label="label" type="text" :value="String(label)" @input="toggleLabel" @ifxInput="toggleLabel" />
      <IfxTextField label="ariaLabel" type="text" :value="String(ariaLabel)" @input="toggleAriaLabel" @ifxInput="toggleAriaLabel" />
      <IfxTextField label="href" type="text" :value="String(href)" @input="toggleHref" @ifxInput="toggleHref" />
      <IfxTextField label="download" type="text" :value="String(download)" @input="toggleDownload" @ifxInput="toggleDownload" />
    </div>

    <div class="state">
        <div><b>label:</b> {{ String(label) }}</div>
        <div><b>ariaLabel:</b> {{ String(ariaLabel) }}</div>
        <div><b>href:</b> {{ String(href) }}</div>
        <div><b>target:</b> {{ String(targetOptions[targetIndex]) }}</div>
        <div><b>disabled:</b> {{ String(disabled) }}</div>
        <div><b>download:</b> {{ String(download) }}</div>
        <div><b>size:</b> {{ String(sizeOptions[sizeIndex]) }}</div>
        <div><b>variant:</b> {{ String(variantOptions[variantIndex]) }}</div>
    </div>

    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
