<script setup lang="ts">
import { computed, ref } from 'vue';

import { IfxButton, IfxStep, IfxStepper, IfxTextField } from '@infineon/infineon-design-system-vue';

const activeStep = ref(2);
const amountOfSteps = ref(5);
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

const toggleActiveStep = (nextValue: string) => { activeStep.value = Number(nextValue); };
const toggleAmountOfSteps = (nextValue: string) => { amountOfSteps.value = Number(nextValue); };
const toggleCompleteStep = () => { completeStep.value = !completeStep.value; };
const toggleDisabled = () => { disabled.value = !disabled.value; };
const toggleError = () => { error.value = !error.value; };
const toggleIndicatorPosition = () => { indicatorPositionIndex.value = (indicatorPositionIndex.value + 1) % indicatorPositionOptions.length; };
const toggleShowStepNumber = () => { showStepNumber.value = !showStepNumber.value; };
const toggleVariant = () => { variantIndex.value = (variantIndex.value + 1) % variantOptions.length; };
const toggleAriaLabelText = (nextValue: string) => { ariaLabelText.value = nextValue; };
const toggleAriaCurrentText = (nextValue: string) => { ariaCurrentText.value = nextValue; };

const controlledProps = computed<Record<string, unknown>>(() => ({
  "activeStep": activeStep.value,
  "amountOfSteps": amountOfSteps.value,
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
  ["amountOfSteps", amountOfSteps.value],
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
        <ifx-button variant="secondary" @click="toggleCompleteStep">Toggle CompleteStep</ifx-button>
        <ifx-button variant="secondary" @click="toggleDisabled">Toggle Disabled</ifx-button>
        <ifx-button variant="secondary" @click="toggleError">Toggle Error</ifx-button>
        <ifx-button variant="secondary" @click="toggleIndicatorPosition">Toggle IndicatorPosition</ifx-button>
        <ifx-button variant="secondary" @click="toggleShowStepNumber">Toggle ShowStepNumber</ifx-button>
        <ifx-button variant="secondary" @click="toggleVariant">Toggle Variant</ifx-button>
    </div>
    <div class="controls controls-input">
        <ifx-text-field label="activeStep" type="text" :value="String(activeStep)" @input="toggleActiveStep(getInputValue($event))" />
        <ifx-text-field label="amountOfSteps" type="text" :value="String(amountOfSteps)" @input="toggleAmountOfSteps(getInputValue($event))" />
        <ifx-text-field label="ariaLabelText" type="text" :value="String(ariaLabelText)" @input="toggleAriaLabelText(getInputValue($event))" />
        <ifx-text-field label="ariaCurrentText" type="text" :value="String(ariaCurrentText)" @input="toggleAriaCurrentText(getInputValue($event))" />
    </div>

    <div class="state">
      <div><b>activeStep:</b> {{ String(activeStep) }}</div>
      <div><b>amountOfSteps:</b> {{ String(amountOfSteps) }}</div>
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
