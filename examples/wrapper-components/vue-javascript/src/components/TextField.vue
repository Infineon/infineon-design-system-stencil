<template>
  <div>

    <h2>Text field</h2>
    <div>
      <ifx-text-field v-model="inputValue" error="false" disabled="false" success="false" placeholder="Placeholder"
        caption="">Label</ifx-text-field>
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
  console.log("updating Text field from parent component")
  inputValue.value = inputValue.value + "+1";

}

</script>


