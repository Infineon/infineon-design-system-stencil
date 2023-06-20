<template>
  <div class="app">
    <h2>Radio Button</h2>
    <h3>Using v-model</h3>

    <form @submit.prevent="handleSubmit">
      <ifx-radio-button :disabled="state.disabled" v-model="state.value" :error="state.error"
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
    <span>Disabled: {{ state.disabled }} </span>
    <span>Error: {{ state.error }} </span>
    <span>Value: {{ state.value }}</span>
    <br />
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const state = reactive({
  disabled: false,
  value: false,
  error: false,
});

const handleSubmit = () => {
  console.log('Form submitted. Radio Button value:', state.value);
};

const toggleDisabled = () => {
  state.disabled = !state.disabled;
};

const toggleError = () => {
  state.error = !state.error;
};

const toggleValue = () => {
  state.value = !state.value;
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
