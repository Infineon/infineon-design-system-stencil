<template>
  <div class="app">
    <h2>Checkbox</h2>
    <h3>Using v-model</h3>

    <form @submit.prevent="handleSubmit">
      <ifx-checkbox :disabled="disabled" v-model="checked" :error="error" name="name">label</ifx-checkbox>
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
    <span>Error: {{ error }} </span>
    <span>Value: {{ value }}</span>
    <br />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

let disabled = ref(false);
let value = ref(false);
let error = ref(false);


// Computed property to retrieve the query value
const checked = computed({
  get: () => value.value,
  set: (newValue) => handleCheckboxChange(newValue)
});

function handleCheckboxChange(event) {
  console.log("updating checkbox value: ", event)
  value.value = event;
};

const handleSubmit = () => {
  console.log('Form submitted. Checkbox value:', value.value);
};

const toggleDisabled = () => {
  disabled.value = !disabled.value;
};

const toggleError = () => {
  error.value = !error.value;
};

const toggleValue = () => {
  value.value = !value.value;
};
</script>

<style scoped>
.app {
  text-align: center;
  flex-direction: column;
  display: flex;
  align-items: center;
}
</style>
