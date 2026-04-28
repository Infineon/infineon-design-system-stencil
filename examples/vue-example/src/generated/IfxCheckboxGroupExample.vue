<script setup lang="ts">
import { computed, ref } from 'vue';

import { IfxButton, IfxCheckbox, IfxCheckboxGroup, IfxTextField } from '@infineon/infineon-design-system-vue';

const alignmentOptions = ["vertical","horizontal"];
const alignmentIndex = ref(0);
const sizeOptions = ["s","m"];
const sizeIndex = ref(1);
const checked = ref(false);
const disabled = ref(false);
const error = ref(false);
const indeterminate = ref(false);
const showGroupLabel = ref(false);
const groupLabelText = ref("Group Label");
const showCaption = ref(false);
const captionText = ref("Caption text, description, error notification");
const showCaptionIcon = ref(false);
const required = ref(false);

const toggleAlignment = () => { alignmentIndex.value = (alignmentIndex.value + 1) % alignmentOptions.length; };
const toggleSize = () => { sizeIndex.value = (sizeIndex.value + 1) % sizeOptions.length; };
const toggleChecked = () => { checked.value = !checked.value; };
const toggleDisabled = () => { disabled.value = !disabled.value; };
const toggleError = () => { error.value = !error.value; };
const toggleIndeterminate = () => { indeterminate.value = !indeterminate.value; };
const toggleShowGroupLabel = () => { showGroupLabel.value = !showGroupLabel.value; };
const toggleGroupLabelText = (nextValue: string) => { groupLabelText.value = nextValue; };
const toggleShowCaption = () => { showCaption.value = !showCaption.value; };
const toggleCaptionText = (nextValue: string) => { captionText.value = nextValue; };
const toggleShowCaptionIcon = () => { showCaptionIcon.value = !showCaptionIcon.value; };
const toggleRequired = () => { required.value = !required.value; };

const controlledProps = computed<Record<string, unknown>>(() => ({
  "alignment": alignmentOptions[alignmentIndex.value],
  "size": sizeOptions[sizeIndex.value],
  "checked": checked.value,
  "disabled": disabled.value,
  "error": error.value,
  "indeterminate": indeterminate.value,
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
  ["checked", checked.value],
  ["disabled", disabled.value],
  ["error", error.value],
  ["indeterminate", indeterminate.value],
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
import { IfxCheckbox, IfxCheckboxGroup } from '@infineon/infineon-design-system-vue';

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
    <ifx-checkbox-group __CONTROLLED_PROPS__>
      <ifx-checkbox
        :value="0"
        size="m"
        @ifxChange="handleChange"
        @ifxError="handleError">
        Option 0
      </ifx-checkbox>
      <ifx-checkbox
        :value="1"
        size="m">
        Option 1
      </ifx-checkbox>
      <ifx-checkbox
        :value="2"
        size="m">
        Option 2
      </ifx-checkbox>
    </ifx-checkbox-group>
  </div>
${'</'}template>`.replace("__CONTROLLED_PROPS__", controlledPropsCode.value));

const codeString = codeTemplate;
</script>

<template>
  <div>
    <ifx-checkbox-group v-bind="controlledProps">
      <ifx-checkbox
        :value="0"
        size="m"
        @ifxChange="handleChange"
        @ifxError="handleError">
        Option 0
      </ifx-checkbox>
      <ifx-checkbox
        :value="1"
        size="m">
        Option 1
      </ifx-checkbox>
      <ifx-checkbox
        :value="2"
        size="m">
        Option 2
      </ifx-checkbox>
    </ifx-checkbox-group>
    <h3 class="controls-title">Controls</h3>
    <div class="controls controls-toggle">
        <ifx-button variant="secondary" @click="toggleAlignment">Toggle Alignment</ifx-button>
        <ifx-button variant="secondary" @click="toggleSize">Toggle Size</ifx-button>
        <ifx-button variant="secondary" @click="toggleChecked">Toggle Checked</ifx-button>
        <ifx-button variant="secondary" @click="toggleDisabled">Toggle Disabled</ifx-button>
        <ifx-button variant="secondary" @click="toggleError">Toggle Error</ifx-button>
        <ifx-button variant="secondary" @click="toggleIndeterminate">Toggle Indeterminate</ifx-button>
        <ifx-button variant="secondary" @click="toggleShowGroupLabel">Toggle ShowGroupLabel</ifx-button>
        <ifx-button variant="secondary" @click="toggleShowCaption">Toggle ShowCaption</ifx-button>
        <ifx-button variant="secondary" @click="toggleShowCaptionIcon">Toggle ShowCaptionIcon</ifx-button>
        <ifx-button variant="secondary" @click="toggleRequired">Toggle Required</ifx-button>
    </div>
    <div class="controls controls-input">
        <ifx-text-field label="groupLabelText" type="text" :value="String(groupLabelText)" @input="toggleGroupLabelText(getInputValue($event))" />
        <ifx-text-field label="captionText" type="text" :value="String(captionText)" @input="toggleCaptionText(getInputValue($event))" />
    </div>

    <div class="state">
      <div><b>alignment:</b> {{ String(alignmentOptions[alignmentIndex]) }}</div>
      <div><b>size:</b> {{ String(sizeOptions[sizeIndex]) }}</div>
      <div><b>checked:</b> {{ String(checked) }}</div>
      <div><b>disabled:</b> {{ String(disabled) }}</div>
      <div><b>error:</b> {{ String(error) }}</div>
      <div><b>indeterminate:</b> {{ String(indeterminate) }}</div>
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
