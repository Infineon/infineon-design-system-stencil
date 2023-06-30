<template>
  <div class="app">
    <h2>Checkbox</h2>
    <h3>Using v-model</h3>

    <form @submit.prevent="handleSubmit">
      <ifx-checkbox :disabled="disabled" v-model="value" :error="error" name="name"
        @ifxChange="handleIfxChange">label</ifx-checkbox>
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
import { ref } from 'vue'

const disabled = ref(false)
const value = ref(false)
const error = ref(false)

const handleIfxChange = (e) => {
  console.log('ifxChange event emitted with value:', e.detail);
  value.value = e.detail;
}

const handleSubmit = () => {
  console.log('Form submitted. Checkbox value:', value.value);
}

const toggleDisabled = () => {
  disabled.value = !disabled.value;
}

const toggleError = () => {
  error.value = !error.value;
}

const toggleValue = () => {
  value.value = !value.value;
}
</script>

<style scoped>
.app {
  text-align: center;
  flex-direction: column;
  display: flex;
  align-items: center;
}
</style>
