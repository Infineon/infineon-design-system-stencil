<template>
  <div>
    <h2>Text Input</h2>
    <div>
      <ifx-text-input v-model="input" error="false" disabled="false" success="false" placeholder="Placeholder"
        errorMessage="">Label</ifx-text-input>
    </div>
    <p>Text field value: {{ input }}</p>
    <br />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

let input = ref("");


</script>


<style scoped>
.app {
  text-align: center;
  flex-direction: column;
  display: flex;
  align-items: center;
}
</style>
