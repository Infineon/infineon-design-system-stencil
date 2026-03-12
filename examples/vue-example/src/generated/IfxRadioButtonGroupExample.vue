<script setup lang="ts">

import { IfxButton, IfxRadioButton, IfxRadioButtonGroup, IfxTextField } from '@infineon/infineon-design-system-vue';

import { computed, ref } from 'vue';

const amountOfItems = ref(3);
const alignmentOptions = ["vertical","horizontal"];
const alignmentIndex = ref(0);
const sizeOptions = ["s","m"];
const sizeIndex = ref(1);
const checked = ref(false);
const disabled = ref(false);
const error = ref(false);
const showGroupLabel = ref(false);
const groupLabelText = ref("Group Label");
const showCaption = ref(false);
const captionText = ref("Caption text, description, error notification");
const showCaptionIcon = ref(false);
const required = ref(false);

const toggleAmountOfItems = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; amountOfItems.value = Number(raw); };
const toggleAlignment = () => (alignmentIndex.value = (alignmentIndex.value + 1) % alignmentOptions.length);
const toggleSize = () => (sizeIndex.value = (sizeIndex.value + 1) % sizeOptions.length);
const toggleChecked = () => (checked.value = !checked.value);
const toggleDisabled = () => (disabled.value = !disabled.value);
const toggleError = () => (error.value = !error.value);
const toggleShowGroupLabel = () => (showGroupLabel.value = !showGroupLabel.value);
const toggleGroupLabelText = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; groupLabelText.value = String(raw); };
const toggleShowCaption = () => (showCaption.value = !showCaption.value);
const toggleCaptionText = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; captionText.value = String(raw); };
const toggleShowCaptionIcon = () => (showCaptionIcon.value = !showCaptionIcon.value);
const toggleRequired = () => (required.value = !required.value);

const controlledProps = computed(() => ({
  "amountOfItems": amountOfItems.value,
  "alignment": alignmentOptions[alignmentIndex.value],
  "size": sizeOptions[sizeIndex.value],
  "checked": checked.value,
  "disabled": disabled.value,
  "error": error.value,
  "showGroupLabel": showGroupLabel.value,
  "groupLabelText": groupLabelText.value,
  "showCaption": showCaption.value,
  "captionText": captionText.value,
  "showCaptionIcon": showCaptionIcon.value,
  "required": required.value,
}));
const boundProps = controlledProps;

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
  ["amountOfItems", controlledProps.value["amountOfItems"]],
  ["alignment", controlledProps.value["alignment"]],
  ["size", controlledProps.value["size"]],
  ["checked", controlledProps.value["checked"]],
  ["disabled", controlledProps.value["disabled"]],
  ["error", controlledProps.value["error"]],
  ["showGroupLabel", controlledProps.value["showGroupLabel"]],
  ["groupLabelText", controlledProps.value["groupLabelText"]],
  ["showCaption", controlledProps.value["showCaption"]],
  ["captionText", controlledProps.value["captionText"]],
  ["showCaptionIcon", controlledProps.value["showCaptionIcon"]],
  ["required", controlledProps.value["required"]],
]
	.map(([name, value]) => '      ' + String(name) + '="' + formatAttrValueForCode(value) + '"')
  .join("\n");

const codeStringWithAttrs = `<script setup lang="ts">
const handleSetGroupError = (event: CustomEvent) => {
  console.log('setGroupError:', event);
  // Add your handler logic here
};
${'</'}script>

<template>
  <div>
    <ifx-radio-button-group __CONTROLLED_ATTRS__>
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

const codeString = codeStringWithAttrs;

</script>

<template>
  <div>
    <ifx-radio-button-group v-bind="controlledProps">
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
	<div class="controls controls-toggle">
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
	<div class="controls controls-input">
      <IfxTextField label="amountOfItems" type="number" :value="String(amountOfItems)" @input="toggleAmountOfItems" @ifxInput="toggleAmountOfItems" />
      <IfxTextField label="groupLabelText" type="text" :value="String(groupLabelText)" @input="toggleGroupLabelText" @ifxInput="toggleGroupLabelText" />
      <IfxTextField label="captionText" type="text" :value="String(captionText)" @input="toggleCaptionText" @ifxInput="toggleCaptionText" />
    </div>

    <div class="state">
        <div><b>amountOfItems:</b> {{ String(amountOfItems) }}</div>
        <div><b>alignment:</b> {{ String(alignmentOptions[alignmentIndex]) }}</div>
        <div><b>size:</b> {{ String(sizeOptions[sizeIndex]) }}</div>
        <div><b>checked:</b> {{ String(checked) }}</div>
        <div><b>disabled:</b> {{ String(disabled) }}</div>
        <div><b>error:</b> {{ String(error) }}</div>
        <div><b>showGroupLabel:</b> {{ String(showGroupLabel) }}</div>
        <div><b>groupLabelText:</b> {{ String(groupLabelText) }}</div>
        <div><b>showCaption:</b> {{ String(showCaption) }}</div>
        <div><b>captionText:</b> {{ String(captionText) }}</div>
        <div><b>showCaptionIcon:</b> {{ String(showCaptionIcon) }}</div>
        <div><b>required:</b> {{ String(required) }}</div>
    </div>

    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
