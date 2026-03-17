<script setup lang="ts">

import { IfxButton, IfxStep, IfxStepper, IfxTextField } from '@infineon/infineon-design-system-vue';

import { computed, ref } from 'vue';

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
const ariaLabel = ref("");
const ariaCurrent = ref("");

const toggleActiveStep = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; activeStep.value = Number(raw); };
const toggleAmountOfSteps = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; amountOfSteps.value = Number(raw); };
const toggleCompleteStep = () => (completeStep.value = !completeStep.value);
const toggleDisabled = () => (disabled.value = !disabled.value);
const toggleError = () => (error.value = !error.value);
const toggleIndicatorPosition = () => (indicatorPositionIndex.value = (indicatorPositionIndex.value + 1) % indicatorPositionOptions.length);
const toggleShowStepNumber = () => (showStepNumber.value = !showStepNumber.value);
const toggleVariant = () => (variantIndex.value = (variantIndex.value + 1) % variantOptions.length);
const toggleAriaLabel = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; ariaLabel.value = String(raw); };
const toggleAriaCurrent = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; ariaCurrent.value = String(raw); };

const controlledProps = computed(() => ({
  "activeStep": activeStep.value,
  "amountOfSteps": amountOfSteps.value,
  "completeStep": completeStep.value,
  "disabled": disabled.value,
  "error": error.value,
  "indicatorPosition": indicatorPositionOptions[indicatorPositionIndex.value],
  "showStepNumber": showStepNumber.value,
  "variant": variantOptions[variantIndex.value],
  "ariaLabel": ariaLabel.value,
  "ariaCurrent": ariaCurrent.value,
}));
const boundProps = controlledProps;

const handleChange = (event: CustomEvent) => {
  console.log('ifxChange:', event);
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
  ["activeStep", controlledProps.value["activeStep"]],
  ["amountOfSteps", controlledProps.value["amountOfSteps"]],
  ["completeStep", controlledProps.value["completeStep"]],
  ["disabled", controlledProps.value["disabled"]],
  ["error", controlledProps.value["error"]],
  ["indicatorPosition", controlledProps.value["indicatorPosition"]],
  ["showStepNumber", controlledProps.value["showStepNumber"]],
  ["variant", controlledProps.value["variant"]],
  ["ariaLabel", controlledProps.value["ariaLabel"]],
  ["ariaCurrent", controlledProps.value["ariaCurrent"]],
]
	.map(([name, value]) => '      ' + String(name) + '="' + formatAttrValueForCode(value) + '"')
  .join("\n");

const codeStringWithAttrs = `<script setup lang="ts">
const handleChange = (event: CustomEvent) => {
  console.log('ifxChange:', event);
  // Add your handler logic here
};
${'</'}script>

<template>
  <div>
    <ifx-stepper __CONTROLLED_ATTRS__>
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
${'</'}template>`.replace("__CONTROLLED_ATTRS__", controlledAttrsCode);

const codeString = codeStringWithAttrs;

</script>

<template>
  <div>
    <ifx-stepper v-bind="controlledProps">
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
      <IfxButton variant="secondary" @click="toggleCompleteStep">Toggle CompleteStep</IfxButton>
      <IfxButton variant="secondary" @click="toggleDisabled">Toggle Disabled</IfxButton>
      <IfxButton variant="secondary" @click="toggleError">Toggle Error</IfxButton>
      <IfxButton variant="secondary" @click="toggleIndicatorPosition">Toggle IndicatorPosition</IfxButton>
      <IfxButton variant="secondary" @click="toggleShowStepNumber">Toggle ShowStepNumber</IfxButton>
      <IfxButton variant="secondary" @click="toggleVariant">Toggle Variant</IfxButton>
    </div>
	<div class="controls controls-input">
      <IfxTextField label="activeStep" type="number" :value="String(activeStep)" @input="toggleActiveStep" @ifxInput="toggleActiveStep" />
      <IfxTextField label="amountOfSteps" type="number" :value="String(amountOfSteps)" @input="toggleAmountOfSteps" @ifxInput="toggleAmountOfSteps" />
      <IfxTextField label="ariaLabel" type="text" :value="String(ariaLabel)" @input="toggleAriaLabel" @ifxInput="toggleAriaLabel" />
      <IfxTextField label="ariaCurrent" type="text" :value="String(ariaCurrent)" @input="toggleAriaCurrent" @ifxInput="toggleAriaCurrent" />
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
        <div><b>ariaLabel:</b> {{ String(ariaLabel) }}</div>
        <div><b>ariaCurrent:</b> {{ String(ariaCurrent) }}</div>
    </div>

    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
