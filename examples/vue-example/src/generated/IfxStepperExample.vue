<script setup lang="ts">
import { computed, ref } from 'vue';

import { IfxButton, IfxStep, IfxStepper, IfxTextField } from '@infineon/infineon-design-system-vue';

const activeStep = ref(2);
const completeStep = ref(false);
const disabled = ref(false);
const error = ref(false);
const indicatorPositionOptions = ["left","right"];
const indicatorPositionIndex = ref(0);
const showStepNumber = ref(false);
const variantOptions = ["default","compact","vertical"];
const variantIndex = ref(0);
const ariaLabelText = ref("");
const ariaCurrentText = ref("");

const handleActiveStepChange = (nextValue: string) => { activeStep.value = Number(nextValue); };
const handleCompleteStepChange = () => { completeStep.value = !completeStep.value; };
const handleDisabledChange = () => { disabled.value = !disabled.value; };
const handleErrorChange = () => { error.value = !error.value; };
const handleIndicatorPositionChange = () => { indicatorPositionIndex.value = (indicatorPositionIndex.value + 1) % indicatorPositionOptions.length; };
const handleShowStepNumberChange = () => { showStepNumber.value = !showStepNumber.value; };
const handleVariantChange = () => { variantIndex.value = (variantIndex.value + 1) % variantOptions.length; };
const handleAriaLabelTextChange = (nextValue: string) => { ariaLabelText.value = nextValue; };
const handleAriaCurrentTextChange = (nextValue: string) => { ariaCurrentText.value = nextValue; };

const controlledProps = computed<Record<string, unknown>>(() => ({
  "activeStep": activeStep.value,
  "completeStep": completeStep.value,
  "disabled": disabled.value,
  "error": error.value,
  "indicatorPosition": indicatorPositionOptions[indicatorPositionIndex.value],
  "showStepNumber": showStepNumber.value,
  "variant": variantOptions[variantIndex.value],
  "ariaLabelText": ariaLabelText.value,
  "ariaCurrentText": ariaCurrentText.value,
}));

const handleChange = (event: CustomEvent) => {
  console.log('ifxChange:', event);
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
  ["activeStep", activeStep.value],
  ["completeStep", completeStep.value],
  ["disabled", disabled.value],
  ["error", error.value],
  ["indicatorPosition", indicatorPositionOptions[indicatorPositionIndex.value]],
  ["showStepNumber", showStepNumber.value],
  ["variant", variantOptions[variantIndex.value]],
  ["ariaLabelText", ariaLabelText.value],
  ["ariaCurrentText", ariaCurrentText.value],
]
  .map(([name, value]) => '        ' + formatPropValueForCode(String(name), value))
  .join('\n'));

const codeTemplate = computed(() => `<script setup lang="ts">
import { IfxStep, IfxStepper } from '@infineon/infineon-design-system-vue';

const handleChange = (event: CustomEvent) => {
  console.log('ifxChange:', event);
  // Add your handler logic here
};
${'</'}script>

<template>
  <div>
    <ifx-stepper
      @ifxChange="handleChange"
      __CONTROLLED_PROPS__>
      <ifx-step>
        Step Label 1
      </ifx-step>
      <ifx-step>
        Step Label 2
      </ifx-step>
      <ifx-step>
        Step Label 3
      </ifx-step>
      <ifx-step>
        Step Label 4
      </ifx-step>
      <ifx-step>
        Step Label 5
      </ifx-step>
    </ifx-stepper>
  </div>
${'</'}template>`.replace("__CONTROLLED_PROPS__", controlledPropsCode.value));

const codeString = codeTemplate;
</script>

<template>
  <div>
    <ifx-stepper
      @ifxChange="handleChange"
      v-bind="controlledProps">
      <ifx-step>
        Step Label 1
      </ifx-step>
      <ifx-step>
        Step Label 2
      </ifx-step>
      <ifx-step>
        Step Label 3
      </ifx-step>
      <ifx-step>
        Step Label 4
      </ifx-step>
      <ifx-step>
        Step Label 5
      </ifx-step>
    </ifx-stepper>
    <h3 class="controls-title">Controls</h3>
    <div class="controls controls-toggle">
        <ifx-button variant="secondary" @click="handleCompleteStepChange">Toggle CompleteStep</ifx-button>
        <ifx-button variant="secondary" @click="handleDisabledChange">Toggle Disabled</ifx-button>
        <ifx-button variant="secondary" @click="handleErrorChange">Toggle Error</ifx-button>
        <ifx-button variant="secondary" @click="handleIndicatorPositionChange">Toggle IndicatorPosition</ifx-button>
        <ifx-button variant="secondary" @click="handleShowStepNumberChange">Toggle ShowStepNumber</ifx-button>
        <ifx-button variant="secondary" @click="handleVariantChange">Toggle Variant</ifx-button>
    </div>
    <div class="controls controls-input">
        <ifx-text-field label="activeStep" type="text" :value="String(activeStep)" @input="handleActiveStepChange(getInputValue($event))" />
        <ifx-text-field label="ariaLabelText" type="text" :value="String(ariaLabelText)" @input="handleAriaLabelTextChange(getInputValue($event))" />
        <ifx-text-field label="ariaCurrentText" type="text" :value="String(ariaCurrentText)" @input="handleAriaCurrentTextChange(getInputValue($event))" />
    </div>

    <div class="state">
      <div><b>activeStep:</b> {{ String(activeStep) }}</div>
      <div><b>completeStep:</b> {{ String(completeStep) }}</div>
      <div><b>disabled:</b> {{ String(disabled) }}</div>
      <div><b>error:</b> {{ String(error) }}</div>
      <div><b>indicatorPosition:</b> {{ String(indicatorPositionOptions[indicatorPositionIndex]) }}</div>
      <div><b>showStepNumber:</b> {{ String(showStepNumber) }}</div>
      <div><b>variant:</b> {{ String(variantOptions[variantIndex]) }}</div>
      <div><b>ariaLabelText:</b> {{ String(ariaLabelText) }}</div>
      <div><b>ariaCurrentText:</b> {{ String(ariaCurrentText) }}</div>
    </div>
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
