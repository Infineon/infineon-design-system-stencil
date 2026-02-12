<script setup lang="ts">
import { computed, ref } from "vue";

const variants = ["default", "compact", "vertical"];
const variantIndex = ref(0);
const variant = computed(() => variants[variantIndex.value]);

const stepNumber = ref(false);
const stepError = ref(false);
const stepDisable = ref(false);
const stepComplete = ref(false);

function toggleVariant() {
  variantIndex.value = (variantIndex.value + 1) % variants.length;
}

function toggleStepNumber() {
  stepNumber.value = !stepNumber.value;
}

function toggleStepError() {
  stepError.value = !stepError.value;
}

function toggleStepDisable() {
  stepDisable.value = !stepDisable.value;
}

function toggleStepComplete() {
  stepComplete.value = !stepComplete.value;
}

</script>

<template>
  <div class="component">
    <h2>Stepper</h2>
    <ifx-stepper active-step="3" aria-label="" aria-current="" :showStepNumber="stepNumber" :variant="variant">
      <ifx-step :disabled="stepDisable">Step Label 1</ifx-step>
      <ifx-step :error="stepError">Step Label 2</ifx-step>
      <ifx-step>Step Label 3</ifx-step>
      <ifx-step :complete="stepComplete">Step Label 4</ifx-step>
      <ifx-step>Step Label 5</ifx-step>
    </ifx-stepper>
    <br>
    <br>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" @click="toggleStepNumber">Toggle Step Number</ifx-button>
      <ifx-button variant="secondary" @click="toggleVariant">Toggle Variant</ifx-button>
      <ifx-button variant="secondary" @click="toggleStepError">Toggle Error for Step 2</ifx-button>
      <ifx-button variant="secondary" @click="toggleStepDisable">Toggle Disable for Step 1</ifx-button>
      <ifx-button variant="secondary" @click="toggleStepComplete">Toggle Complete for Step 4</ifx-button>
    </div>
    <br>

    <div class="state">
      <div><b>Step Number:</b> {{ stepNumber }} </div>
      <div><b>Variant:</b> {{ variant }} </div>
      <div><b>Step Error:</b> {{ stepError }} </div>
      <div><b>Step Disable:</b> {{ stepDisable }} </div>
      <div><b>Step Complete:</b> {{ stepComplete }} </div>
    </div>
  </div>
</template>