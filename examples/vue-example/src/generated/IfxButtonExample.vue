<script setup lang="ts">
import { computed, ref } from 'vue';

import { IfxButton, IfxIcon, IfxTextField } from '@infineon/infineon-design-system-vue';

const variantOptions = ["primary","secondary","tertiary"];
const variantIndex = ref(0);
const ariaLabelText = ref("Button");
const themeOptions = ["default","danger","inverse"];
const themeIndex = ref(0);
const typeOptions = ["button","submit","reset"];
const typeIndex = ref(0);
const sizeOptions = ["xs","s","m","l"];
const sizeIndex = ref(2);
const fullWidth = ref(false);
const disabled = ref(false);
const href = ref(false);
const targetOptions = ["_blank","_self","_parent"];
const targetIndex = ref(0);

const handleVariantChange = () => { variantIndex.value = (variantIndex.value + 1) % variantOptions.length; };
const handleAriaLabelTextChange = (nextValue: string) => { ariaLabelText.value = nextValue; };
const handleThemeChange = () => { themeIndex.value = (themeIndex.value + 1) % themeOptions.length; };
const handleTypeChange = () => { typeIndex.value = (typeIndex.value + 1) % typeOptions.length; };
const handleSizeChange = () => { sizeIndex.value = (sizeIndex.value + 1) % sizeOptions.length; };
const handleFullWidthChange = () => { fullWidth.value = !fullWidth.value; };
const handleDisabledChange = () => { disabled.value = !disabled.value; };
const handleHrefChange = () => { href.value = !href.value; };
const handleTargetChange = () => { targetIndex.value = (targetIndex.value + 1) % targetOptions.length; };

const controlledProps = computed<Record<string, unknown>>(() => ({
  "variant": variantOptions[variantIndex.value],
  "ariaLabelText": ariaLabelText.value,
  "theme": themeOptions[themeIndex.value],
  "type": typeOptions[typeIndex.value],
  "size": sizeOptions[sizeIndex.value],
  "fullWidth": fullWidth.value,
  "disabled": disabled.value,
  "href": href.value,
  "target": targetOptions[targetIndex.value],
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
  ["variant", variantOptions[variantIndex.value]],
  ["ariaLabelText", ariaLabelText.value],
  ["theme", themeOptions[themeIndex.value]],
  ["type", typeOptions[typeIndex.value]],
  ["size", sizeOptions[sizeIndex.value]],
  ["fullWidth", fullWidth.value],
  ["disabled", disabled.value],
  ["href", href.value],
  ["target", targetOptions[targetIndex.value]],
]
  .map(([name, value]) => '        ' + formatPropValueForCode(String(name), value))
  .join('\n'));

const codeTemplate = computed(() => `<script setup lang="ts">
import { IfxButton, IfxIcon } from '@infineon/infineon-design-system-vue';
${'</'}script>

<template>
  <div>
    <ifx-button
      :variant="String(controlledProps.variant ?? "primary")"
      :aria-label-text="String(controlledProps.ariaLabelText ?? "Button")"
      :theme="String(controlledProps.theme ?? "default")"
      :type="String(controlledProps.type ?? "button")"
      :size="String(controlledProps.size ?? "m")"
      :full-width="String(controlledProps.fullWidth ?? "false")"
      :disabled="String(controlledProps.disabled ?? "false")"
      :href="String(controlledProps.href ?? "false")"
      :target="String(controlledProps.target ?? "_blank")"
      __CONTROLLED_PROPS__>
      <IfxIcon v-if="controlledProps.icon && String(controlledProps.iconPosition ?? 'left') === 'left'" :icon="String(controlledProps.icon)" />
      Button
      <IfxIcon v-if="controlledProps.icon && String(controlledProps.iconPosition ?? 'left') === 'right'" :icon="String(controlledProps.icon)" />
    </ifx-button>
  </div>
${'</'}template>`.replace("__CONTROLLED_PROPS__", controlledPropsCode.value));

const codeString = codeTemplate;
</script>

<template>
  <div>
    <ifx-button
      :variant="String(controlledProps.variant ?? "primary")"
      :aria-label-text="String(controlledProps.ariaLabelText ?? "Button")"
      :theme="String(controlledProps.theme ?? "default")"
      :type="String(controlledProps.type ?? "button")"
      :size="String(controlledProps.size ?? "m")"
      :full-width="String(controlledProps.fullWidth ?? "false")"
      :disabled="String(controlledProps.disabled ?? "false")"
      :href="String(controlledProps.href ?? "false")"
      :target="String(controlledProps.target ?? "_blank")"
      v-bind="controlledProps">
      <IfxIcon v-if="controlledProps.icon && String(controlledProps.iconPosition ?? 'left') === 'left'" :icon="String(controlledProps.icon)" />
      Button
      <IfxIcon v-if="controlledProps.icon && String(controlledProps.iconPosition ?? 'left') === 'right'" :icon="String(controlledProps.icon)" />
    </ifx-button>
    <h3 class="controls-title">Controls</h3>
    <div class="controls controls-toggle">
        <ifx-button variant="secondary" @click="handleVariantChange">Toggle Variant</ifx-button>
        <ifx-button variant="secondary" @click="handleThemeChange">Toggle Theme</ifx-button>
        <ifx-button variant="secondary" @click="handleTypeChange">Toggle Type</ifx-button>
        <ifx-button variant="secondary" @click="handleSizeChange">Toggle Size</ifx-button>
        <ifx-button variant="secondary" @click="handleFullWidthChange">Toggle FullWidth</ifx-button>
        <ifx-button variant="secondary" @click="handleDisabledChange">Toggle Disabled</ifx-button>
        <ifx-button variant="secondary" @click="handleHrefChange">Toggle Href</ifx-button>
        <ifx-button variant="secondary" @click="handleTargetChange">Toggle Target</ifx-button>
    </div>
    <div class="controls controls-input">
        <ifx-text-field label="ariaLabelText" type="text" :value="String(ariaLabelText)" @input="handleAriaLabelTextChange(getInputValue($event))" />
    </div>

    <div class="state">
      <div><b>variant:</b> {{ String(variantOptions[variantIndex]) }}</div>
      <div><b>ariaLabelText:</b> {{ String(ariaLabelText) }}</div>
      <div><b>theme:</b> {{ String(themeOptions[themeIndex]) }}</div>
      <div><b>type:</b> {{ String(typeOptions[typeIndex]) }}</div>
      <div><b>size:</b> {{ String(sizeOptions[sizeIndex]) }}</div>
      <div><b>fullWidth:</b> {{ String(fullWidth) }}</div>
      <div><b>disabled:</b> {{ String(disabled) }}</div>
      <div><b>href:</b> {{ String(href) }}</div>
      <div><b>target:</b> {{ String(targetOptions[targetIndex]) }}</div>
    </div>
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
