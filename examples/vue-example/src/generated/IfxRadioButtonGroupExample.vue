<script setup lang="ts">

import { IfxButton, IfxRadioButton, IfxRadioButtonGroup } from '@infineon/infineon-design-system-vue';

import { computed, ref } from 'vue';

const alignmentOptions = ["vertical","horizontal"];
const alignmentIndex = ref(0);
const sizeOptions = ["s","m"];
const sizeIndex = ref(1);
const checked = ref(false);
const disabled = ref(false);
const error = ref(false);
const showGroupLabel = ref(false);
const showCaption = ref(false);
const showCaptionIcon = ref(false);
const required = ref(false);

const toggleAlignment = () => (alignmentIndex.value = (alignmentIndex.value + 1) % alignmentOptions.length);
const toggleSize = () => (sizeIndex.value = (sizeIndex.value + 1) % sizeOptions.length);
const toggleChecked = () => (checked.value = !checked.value);
const toggleDisabled = () => (disabled.value = !disabled.value);
const toggleError = () => (error.value = !error.value);
const toggleShowGroupLabel = () => (showGroupLabel.value = !showGroupLabel.value);
const toggleShowCaption = () => (showCaption.value = !showCaption.value);
const toggleShowCaptionIcon = () => (showCaptionIcon.value = !showCaptionIcon.value);
const toggleRequired = () => (required.value = !required.value);

const controlledProps = computed(() => ({
  "alignment": alignmentOptions[alignmentIndex.value],
  "size": sizeOptions[sizeIndex.value],
  "checked": checked.value,
  "disabled": disabled.value,
  "error": error.value,
  "showGroupLabel": showGroupLabel.value,
  "showCaption": showCaption.value,
  "showCaptionIcon": showCaptionIcon.value,
  "required": required.value,
}));

const handleSetGroupError = (event: CustomEvent) => {
  console.log('setGroupError:', event);
  // Add your handler logic here
};

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
  ["alignment", controlledProps.value["alignment"]],
  ["size", controlledProps.value["size"]],
  ["checked", controlledProps.value["checked"]],
  ["disabled", controlledProps.value["disabled"]],
  ["error", controlledProps.value["error"]],
  ["showGroupLabel", controlledProps.value["showGroupLabel"]],
  ["showCaption", controlledProps.value["showCaption"]],
  ["showCaptionIcon", controlledProps.value["showCaptionIcon"]],
  ["required", controlledProps.value["required"]],
]
	.map(([name, value]) => '      ' + String(name) + '="' + formatAttrValueForCode(value) + '"')
  .join("\n");

const codeString = `<script setup lang="ts">
const handleSetGroupError = (event: CustomEvent) => {
  console.log('setGroupError:', event);
  // Add your handler logic here
};
${'</'}script>

<template>
  <div>
    <ifx-radio-button-group
      group-label-text="Group Label"
      caption-text="Caption text, description, error notification"
      __CONTROLLED_ATTRS__>
      <ifx-radio-button
        :value=0
        size="m">
        Option 0
      </ifx-radio-button>
      <ifx-radio-button
        :value=1
        size="m">
        Option 1
      </ifx-radio-button>
      <ifx-radio-button
        :value=2
        size="m">
        Option 2
      </ifx-radio-button>
    </ifx-radio-button-group>
  </div>
${'</'}template>`.replace("__CONTROLLED_ATTRS__", controlledAttrsCode);

</script>

<template>
  <div>
    <ifx-radio-button-group
      group-label-text="Group Label"
      caption-text="Caption text, description, error notification"
      v-bind="controlledProps">
      <ifx-radio-button
        :value=0
        size="m">
        Option 0
      </ifx-radio-button>
      <ifx-radio-button
        :value=1
        size="m">
        Option 1
      </ifx-radio-button>
      <ifx-radio-button
        :value=2
        size="m">
        Option 2
      </ifx-radio-button>
    </ifx-radio-button-group>
    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <IfxButton variant="secondary" @click="toggleAlignment">Toggle Alignment</IfxButton>
      <IfxButton variant="secondary" @click="toggleSize">Toggle Size</IfxButton>
      <IfxButton variant="secondary" @click="toggleChecked">Toggle Checked</IfxButton>
      <IfxButton variant="secondary" @click="toggleDisabled">Toggle Disabled</IfxButton>
      <IfxButton variant="secondary" @click="toggleError">Toggle Error</IfxButton>
      <IfxButton variant="secondary" @click="toggleShowGroupLabel">Toggle ShowGroupLabel</IfxButton>
      <IfxButton variant="secondary" @click="toggleShowCaption">Toggle ShowCaption</IfxButton>
      <IfxButton variant="secondary" @click="toggleShowCaptionIcon">Toggle ShowCaptionIcon</IfxButton>
      <IfxButton variant="secondary" @click="toggleRequired">Toggle Required</IfxButton>
    </div>

    <div class="state">
        <div><b>alignment:</b> {{ String(alignmentOptions[alignmentIndex.value]) }}</div>
        <div><b>size:</b> {{ String(sizeOptions[sizeIndex.value]) }}</div>
        <div><b>checked:</b> {{ String(checked.value) }}</div>
        <div><b>disabled:</b> {{ String(disabled.value) }}</div>
        <div><b>error:</b> {{ String(error.value) }}</div>
        <div><b>showGroupLabel:</b> {{ String(showGroupLabel.value) }}</div>
        <div><b>showCaption:</b> {{ String(showCaption.value) }}</div>
        <div><b>showCaptionIcon:</b> {{ String(showCaptionIcon.value) }}</div>
        <div><b>required:</b> {{ String(required.value) }}</div>
    </div>

    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
