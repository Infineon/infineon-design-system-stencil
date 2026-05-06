<script setup lang="ts">
import { computed, ref } from 'vue';

import { IfxButton, IfxLink, IfxTextField } from '@infineon/infineon-design-system-vue';

const href = ref("");
const targetOptions = ["_blank","_self","_parent"];
const targetIndex = ref(0);
const disabled = ref(false);
const download = ref("");
const sizeOptions = ["s","m","l","xl"];
const sizeIndex = ref(1);
const variantOptions = ["bold","underlined","title","menu"];
const variantIndex = ref(0);

const handleHrefChange = (nextValue: string) => { href.value = nextValue; };
const handleTargetChange = () => { targetIndex.value = (targetIndex.value + 1) % targetOptions.length; };
const handleDisabledChange = () => { disabled.value = !disabled.value; };
const handleDownloadChange = (nextValue: string) => { download.value = nextValue; };
const handleSizeChange = () => { sizeIndex.value = (sizeIndex.value + 1) % sizeOptions.length; };
const handleVariantChange = () => { variantIndex.value = (variantIndex.value + 1) % variantOptions.length; };

const controlledProps = computed<Record<string, unknown>>(() => ({
  "href": href.value,
  "target": targetOptions[targetIndex.value],
  "disabled": disabled.value,
  "download": download.value,
  "size": sizeOptions[sizeIndex.value],
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
  ["href", href.value],
  ["target", targetOptions[targetIndex.value]],
  ["disabled", disabled.value],
  ["download", download.value],
  ["size", sizeOptions[sizeIndex.value]],
  ["variant", variantOptions[variantIndex.value]],
]
  .map(([name, value]) => '        ' + formatPropValueForCode(String(name), value))
  .join('\n'));

const codeTemplate = computed(() => `<script setup lang="ts">
import { IfxLink } from '@infineon/infineon-design-system-vue';
${'</'}script>

<template>
  <div>
    <ifx-link
      aria-label="Link"
      __CONTROLLED_PROPS__>
      Link
    </ifx-link>
  </div>
${'</'}template>`.replace("__CONTROLLED_PROPS__", controlledPropsCode.value));

const codeString = codeTemplate;
</script>

<template>
  <div>
    <ifx-link
      aria-label="Link"
      v-bind="controlledProps">
      Link
    </ifx-link>
    <h3 class="controls-title">Controls</h3>
    <div class="controls controls-toggle">
        <ifx-button variant="secondary" @click="handleTargetChange">Toggle Target</ifx-button>
        <ifx-button variant="secondary" @click="handleDisabledChange">Toggle Disabled</ifx-button>
        <ifx-button variant="secondary" @click="handleSizeChange">Toggle Size</ifx-button>
        <ifx-button variant="secondary" @click="handleVariantChange">Toggle Variant</ifx-button>
    </div>
    <div class="controls controls-input">
        <ifx-text-field label="href" type="text" :value="String(href)" @input="handleHrefChange(getInputValue($event))" />
        <ifx-text-field label="download" type="text" :value="String(download)" @input="handleDownloadChange(getInputValue($event))" />
    </div>

    <div class="state">
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
