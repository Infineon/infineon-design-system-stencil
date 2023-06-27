<template>
  <div>
    <h2>Text Input</h2>
    <div>
      <ifx-text-input v-model="input" error="false" disabled="false" success="false" placeholder="Placeholder"
        errorMessage="">Label</ifx-text-input>
    </div>
    <p>Text field value: {{ inputValue }}</p>
    <br />
    <br />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

let inputValue = ref("");
// Computed property to retrieve the query value
const input = computed({
  get: () => inputValue.value,
  set: (newValue) => handleInput(newValue)
});

function handleInput(event) {
  console.log("updating  input: ", event)
  inputValue.value = event; //v-model automatically accesses event.detail
};
</script>


