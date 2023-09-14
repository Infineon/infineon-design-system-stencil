<template>
  <div>
    <h2>Radio Button</h2>
    <form @submit.prevent="handleSubmit">
      <ifx-radio-button :disabled="disabled" @ifxChange="handleChange" :value="radioBtnValue" :error="error"
        name="name">label</ifx-radio-button>
      <br />

      <ifx-button type="submit">Submit</ifx-button>
    </form>
    <br />
    <div>
      <ifx-button variant="outline" @click="toggleDisabled">Toggle Disabled</ifx-button>

      <ifx-button variant="outline" @click="toggleError">Toggle Error</ifx-button>

      <ifx-button variant="outline" @click="toggleValue">Toggle Value</ifx-button>

    </div>
    <br />
    <span>Disabled: {{ disabled }} </span>
    <br />
    <span>Error: {{ error }} </span>
    <br />
    <span>Value: {{ radioBtnValue }}</span>
    <br />
    <br />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const disabled = ref(false);
const radioBtnValue = ref(false);
const error = ref(false);

const handleSubmit = () => {
  console.log('Form submitted. Radio Button value:', radioBtnValue.value);
};

function handleChange(event) {
  console.log("updating radio btn value: ", event.detail)
  radioBtnValue.value = event.detail;
};

const toggleDisabled = () => {
  disabled.value = !disabled.value;
};

const toggleError = () => {
  error.value = !error.value;
};

const toggleValue = () => {
  radioBtnValue.value = !radioBtnValue.value;
};
</script>

 