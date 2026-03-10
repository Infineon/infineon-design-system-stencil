<script setup lang="ts">

import { IfxButton, IfxStep, IfxStepper } from '@infineon/infineon-design-system-vue';

import { computed, ref } from 'vue';

const completeStep = ref(false);
const disabled = ref(false);
const error = ref(false);
const indicatorPositionOptions = ["left","right"];
const indicatorPositionIndex = ref(0);
const showStepNumber = ref(false);
const variantOptions = ["default","compact","vertical"];
const variantIndex = ref(0);

const toggleCompleteStep = () => (completeStep.value = !completeStep.value);
const toggleDisabled = () => (disabled.value = !disabled.value);
const toggleError = () => (error.value = !error.value);
const toggleIndicatorPosition = () => (indicatorPositionIndex.value = (indicatorPositionIndex.value + 1) % indicatorPositionOptions.length);
const toggleShowStepNumber = () => (showStepNumber.value = !showStepNumber.value);
const toggleVariant = () => (variantIndex.value = (variantIndex.value + 1) % variantOptions.length);

const controlledProps = computed(() => ({
  "completeStep": completeStep.value,
  "disabled": disabled.value,
  "error": error.value,
  "indicatorPosition": indicatorPositionOptions[indicatorPositionIndex.value],
  "showStepNumber": showStepNumber.value,
  "variant": variantOptions[variantIndex.value],
}));

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
  ["completeStep", controlledProps.value["completeStep"]],
  ["disabled", controlledProps.value["disabled"]],
  ["error", controlledProps.value["error"]],
  ["indicatorPosition", controlledProps.value["indicatorPosition"]],
  ["showStepNumber", controlledProps.value["showStepNumber"]],
  ["variant", controlledProps.value["variant"]],
]
	.map(([name, value]) => '      ' + String(name) + '="' + formatAttrValueForCode(value) + '"')
  .join("\n");

const codeString = `<script setup lang="ts">
const handleChange = (event: CustomEvent) => {
  console.log('ifxChange:', event);
  // Add your handler logic here
};
${'</'}script>

<template>
  <div>
    <ifx-stepper
      :active-step=2
      aria-label=""
      aria-current=""
      __CONTROLLED_ATTRS__>
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

</script>

<template>
  <div>
    <ifx-stepper
      :active-step=2
      aria-label=""
      aria-current=""
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
    <div class="controls">
      <IfxButton variant="secondary" @click="toggleCompleteStep">Toggle CompleteStep</IfxButton>
      <IfxButton variant="secondary" @click="toggleDisabled">Toggle Disabled</IfxButton>
      <IfxButton variant="secondary" @click="toggleError">Toggle Error</IfxButton>
      <IfxButton variant="secondary" @click="toggleIndicatorPosition">Toggle IndicatorPosition</IfxButton>
      <IfxButton variant="secondary" @click="toggleShowStepNumber">Toggle ShowStepNumber</IfxButton>
      <IfxButton variant="secondary" @click="toggleVariant">Toggle Variant</IfxButton>
    </div>

    <div class="state">
        <div><b>completeStep:</b> {{ String(completeStep.value) }}</div>
        <div><b>disabled:</b> {{ String(disabled.value) }}</div>
        <div><b>error:</b> {{ String(error.value) }}</div>
        <div><b>indicatorPosition:</b> {{ String(indicatorPositionOptions[indicatorPositionIndex.value]) }}</div>
        <div><b>showStepNumber:</b> {{ String(showStepNumber.value) }}</div>
        <div><b>variant:</b> {{ String(variantOptions[variantIndex.value]) }}</div>
    </div>

    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
