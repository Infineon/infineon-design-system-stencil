<script setup lang="ts">
import { computed, ref } from 'vue';

import { IfxButton, IfxLink, IfxTextField } from '@infineon/infineon-design-system-vue';

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

const toggleAriaLabel = (nextValue: string) => { ariaLabel.value = nextValue; };
const toggleHref = (nextValue: string) => { href.value = nextValue; };
const toggleTarget = () => { targetIndex.value = (targetIndex.value + 1) % targetOptions.length; };
const toggleDisabled = () => { disabled.value = !disabled.value; };
const toggleDownload = (nextValue: string) => { download.value = nextValue; };
const toggleSize = () => { sizeIndex.value = (sizeIndex.value + 1) % sizeOptions.length; };
const toggleVariant = () => { variantIndex.value = (variantIndex.value + 1) % variantOptions.length; };

const controlledProps = computed<Record<string, unknown>>(() => ({
  "ariaLabel": ariaLabel.value,
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
  ["ariaLabel", ariaLabel.value],
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
    <ifx-link __CONTROLLED_PROPS__>
      Link
    </ifx-link>
  </div>
${'</'}template>`.replace("__CONTROLLED_PROPS__", controlledPropsCode.value));

const codeString = codeTemplate;
</script>

<template>
  <div>
    <ifx-link v-bind="controlledProps">
      Link
    </ifx-link>
    <h3 class="controls-title">Controls</h3>
    <div class="controls controls-toggle">
        <ifx-button variant="secondary" @click="toggleTarget">Toggle Target</ifx-button>
        <ifx-button variant="secondary" @click="toggleDisabled">Toggle Disabled</ifx-button>
        <ifx-button variant="secondary" @click="toggleSize">Toggle Size</ifx-button>
        <ifx-button variant="secondary" @click="toggleVariant">Toggle Variant</ifx-button>
    </div>
    <div class="controls controls-input">
        <ifx-text-field label="ariaLabel" type="text" :value="String(ariaLabel)" @input="toggleAriaLabel(getInputValue($event))" />
        <ifx-text-field label="href" type="text" :value="String(href)" @input="toggleHref(getInputValue($event))" />
        <ifx-text-field label="download" type="text" :value="String(download)" @input="toggleDownload(getInputValue($event))" />
    </div>

    <div class="state">
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
