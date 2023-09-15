<template>
  <div>
    <h2>Text field</h2>
    <div>
      <ifx-text-field v-model="input" error="true" disabled="false" success="false" placeholder="Placeholder"
        caption="some error message">Label</ifx-text-field>

    </div>
    <p>Text field value: {{ inputValue }}</p>
    <br />
    <br />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

let inputValue = ref("");
// Computed property to retrieve the query value
const input = computed({
  get: () => inputValue.value,
  set: (newValue) => handleInput(newValue)
});

function handleInput(event: string) {
  console.log("updating  input: ", event)
  inputValue.value = event; //v-model automatically accesses event.detail
};
</script>

 

