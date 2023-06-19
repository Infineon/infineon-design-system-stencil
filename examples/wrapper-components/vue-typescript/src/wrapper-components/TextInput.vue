<template>
  <div class="app">
    <h2>Text Input</h2>
    <div>
      <ifx-text-input @ifxInput="handleIfxInput" error="true" disabled="false" success="false" placeholder="Placeholder"
        errorMessage="some error message">Label</ifx-text-input>
    </div>
    <p>Text field value: {{ input }}</p>
    <br />
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue';

let input: Ref<string> = ref("");

const handleIfxInput = (e: CustomEvent) => {
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
