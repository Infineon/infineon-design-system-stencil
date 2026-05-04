<script setup lang="ts">
import { computed, ref } from 'vue';

import { IfxButton, IfxRadioButton, IfxRadioButtonGroup, IfxTextField } from '@infineon/infineon-design-system-vue';

const alignmentOptions = ["vertical","horizontal"];
const alignmentIndex = ref(0);
const sizeOptions = ["s","m"];
const sizeIndex = ref(1);
const showGroupLabel = ref(false);
const groupLabelText = ref("Group Label");
const showCaption = ref(false);
const captionText = ref("Caption text, description, error notification");
const showCaptionIcon = ref(false);
const required = ref(false);

const handleAlignmentChange = () => { alignmentIndex.value = (alignmentIndex.value + 1) % alignmentOptions.length; };
const handleSizeChange = () => { sizeIndex.value = (sizeIndex.value + 1) % sizeOptions.length; };
const handleShowGroupLabelChange = () => { showGroupLabel.value = !showGroupLabel.value; };
const handleGroupLabelTextChange = (nextValue: string) => { groupLabelText.value = nextValue; };
const handleShowCaptionChange = () => { showCaption.value = !showCaption.value; };
const handleCaptionTextChange = (nextValue: string) => { captionText.value = nextValue; };
const handleShowCaptionIconChange = () => { showCaptionIcon.value = !showCaptionIcon.value; };
const handleRequiredChange = () => { required.value = !required.value; };

const controlledProps = computed<Record<string, unknown>>(() => ({
  "alignment": alignmentOptions[alignmentIndex.value],
  "size": sizeOptions[sizeIndex.value],
  "showGroupLabel": showGroupLabel.value,
  "groupLabelText": groupLabelText.value,
  "showCaption": showCaption.value,
  "captionText": captionText.value,
  "showCaptionIcon": showCaptionIcon.value,
  "required": required.value,
}));

const handleChange = (event: CustomEvent) => {
  console.log('ifxChange:', event);
  // Add your handler logic here
};

const handleError = (event: CustomEvent) => {
  console.log('ifxError:', event);
  // Add your handler logic here
};

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
  ["alignment", alignmentOptions[alignmentIndex.value]],
  ["size", sizeOptions[sizeIndex.value]],
  ["showGroupLabel", showGroupLabel.value],
  ["groupLabelText", groupLabelText.value],
  ["showCaption", showCaption.value],
  ["captionText", captionText.value],
  ["showCaptionIcon", showCaptionIcon.value],
  ["required", required.value],
]
  .map(([name, value]) => '        ' + formatPropValueForCode(String(name), value))
  .join('\n'));

const codeTemplate = computed(() => `<script setup lang="ts">
import { IfxRadioButton, IfxRadioButtonGroup } from '@infineon/infineon-design-system-vue';

const handleChange = (event: CustomEvent) => {
  console.log('ifxChange:', event);
  // Add your handler logic here
};

const handleError = (event: CustomEvent) => {
  console.log('ifxError:', event);
  // Add your handler logic here
};
${'</'}script>

<template>
  <div>
    <ifx-radio-button-group __CONTROLLED_PROPS__>
      <ifx-radio-button
        :value="0"
        size="m"
        @ifxChange="handleChange"
        @ifxError="handleError">
        Option 0
      </ifx-radio-button>
      <ifx-radio-button
        :value="1"
        size="m">
        Option 1
      </ifx-radio-button>
      <ifx-radio-button
        :value="2"
        size="m">
        Option 2
      </ifx-radio-button>
    </ifx-radio-button-group>
  </div>
${'</'}template>`.replace("__CONTROLLED_PROPS__", controlledPropsCode.value));

const codeString = codeTemplate;
</script>

<template>
  <div>
    <ifx-radio-button-group v-bind="controlledProps">
      <ifx-radio-button
        :value="0"
        size="m"
        @ifxChange="handleChange"
        @ifxError="handleError">
        Option 0
      </ifx-radio-button>
      <ifx-radio-button
        :value="1"
        size="m">
        Option 1
      </ifx-radio-button>
      <ifx-radio-button
        :value="2"
        size="m">
        Option 2
      </ifx-radio-button>
    </ifx-radio-button-group>
    <h3 class="controls-title">Controls</h3>
    <div class="controls controls-toggle">
        <ifx-button variant="secondary" @click="handleAlignmentChange">Toggle Alignment</ifx-button>
        <ifx-button variant="secondary" @click="handleSizeChange">Toggle Size</ifx-button>
        <ifx-button variant="secondary" @click="handleShowGroupLabelChange">Toggle ShowGroupLabel</ifx-button>
        <ifx-button variant="secondary" @click="handleShowCaptionChange">Toggle ShowCaption</ifx-button>
        <ifx-button variant="secondary" @click="handleShowCaptionIconChange">Toggle ShowCaptionIcon</ifx-button>
        <ifx-button variant="secondary" @click="handleRequiredChange">Toggle Required</ifx-button>
    </div>
    <div class="controls controls-input">
        <ifx-text-field label="groupLabelText" type="text" :value="String(groupLabelText)" @input="handleGroupLabelTextChange(getInputValue($event))" />
        <ifx-text-field label="captionText" type="text" :value="String(captionText)" @input="handleCaptionTextChange(getInputValue($event))" />
    </div>

    <div class="state">
      <div><b>alignment:</b> {{ String(alignmentOptions[alignmentIndex]) }}</div>
      <div><b>size:</b> {{ String(sizeOptions[sizeIndex]) }}</div>
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
