<template>
  <div class="app">
    <h2>Checkbox</h2>

    <form @submit.prevent="handleSubmit">
      TestText <ifx-checkbox :disabled="disabled" :value="checked" :error="error" name="name"
        @ifxChange="toggleValue">label</ifx-checkbox> TestText
      <br />

      <ifx-button type="submit">Submit</ifx-button>
    </form>


    <ifx-button @click="toggleDisabled">Toggle Disabled</ifx-button>
    <ifx-button @click="toggleError">Toggle Error</ifx-button>
    <ifx-button @click="toggleValue">Toggle Value</ifx-button>

    <span>Disabled: {{ disabled }} </span>
    <span>Error: {{ error }} </span>
    <span>Value: {{ checked }}</span>

  </div>
</template>


<script setup>
import { ref } from 'vue'

const disabled = ref(false);
const checked = ref(false);
const error = ref(false);


function handleSubmit() {
  console.log('Form submitted. Checkbox value:', checked.value);
}
function toggleDisabled() {
  disabled.value = !disabled.value;
}
function toggleError() {
  error.value = !error.value;
}
function toggleValue() {
  console.log("checked value change")
  checked.value = !checked.value;
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