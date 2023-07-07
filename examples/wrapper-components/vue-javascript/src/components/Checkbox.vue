<template>
  <div>
    <h2>Checkbox</h2>
    <!-- <h3>Using v-model</h3> -->

    <form @submit.prevent="handleSubmit">
      <!-- <ifx-checkbox :disabled="disabled" v-model="checked" :error="error" name="name">label</ifx-checkbox> -->

      <h3>Using v-bind/v-on</h3>
      <ifx-checkbox :disabled="disabled" @ifxChange="handleCheckboxChange" :value="checkboxValue" :error="error"
        name="name">label</ifx-checkbox>
      <br />
      <ifx-button color="primary" type="submit">Submit</ifx-button>
    </form>
    <br />
    <div>
      <ifx-button variant="outline" color="primary" @click="toggleDisabled">Toggle Disabled</ifx-button>

      <ifx-button variant="outline" color="primary" @click="toggleError">Toggle Error</ifx-button>

      <ifx-button variant="outline" color="primary" @click="toggleValue">Toggle Value</ifx-button>

    </div>
    <br />
    <span>Disabled: {{ disabled }} </span>
    <br />
    <span>Error: {{ error }} </span>
    <br />
    <span>Value: {{ checkboxValue }}</span>
    <br />
    <br />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

let disabled = ref(false);
let checkboxValue = ref(false);
let error = ref(false);


function handleCheckboxChange(event) {
  console.log("updating checkbox value: ", event.detail)
  checkboxValue.value = event.detail;
};

const handleSubmit = () => {
  console.log('Form submitted. Checkbox value:', checkboxValue.value);
};

const toggleDisabled = () => {
  disabled.value = !disabled.value;
};

const toggleError = () => {
  error.value = !error.value;
};

const toggleValue = () => {
  checkboxValue.value = !checkboxValue.value;
};
</script>

