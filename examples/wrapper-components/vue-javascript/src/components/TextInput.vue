<template>
  <div>
    <h2>Text Input</h2>
    <div>
      <ifx-text-input v-model="inputValue" error="false" disabled="false" success="false" placeholder="Placeholder"
        errorMessage="">Label</ifx-text-input>
    </div>
    <p>Text field value: {{ inputValue }}</p>
    <br />
    <br />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

let inputValue = ref("");

onMounted(() => {
  updateTextInput();
  setInterval(updateTextInput, 10000);
})

function updateTextInput() {
  console.log("updating text input from parent component")
  inputValue.value = inputValue.value + "+1";

}

</script>


