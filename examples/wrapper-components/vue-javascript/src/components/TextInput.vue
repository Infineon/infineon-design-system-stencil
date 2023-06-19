<template>
  <div class="app">
    <h2>Text Input</h2>
    <div>
      <ifx-text-input @ifxInput="handleIfxInput" error="false" disabled="false" success="false" placeholder="Placeholder"
        errorMessage="">Label</ifx-text-input>
    </div>
    <p>Text field value: {{ input }}</p>
    <br />
  </div>
</template>

<script setup>
import { ref } from 'vue';

let input = ref("");

const handleIfxInput = (e) => {
  console.log('ifxInput event emitted with value:', e.detail);
  input.value = e.detail;
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
