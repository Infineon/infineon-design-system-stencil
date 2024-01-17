


<template>
  <div>
    <form id="another-form">
      <h2>Text field</h2>
      <div>
        <ifx-text-field v-model="inputValue" error="false" disabled="false" success="false" placeholder="Placeholder"
          caption="">Label</ifx-text-field>
        <br />
        <ifx-button type="submit" theme="default" size="s" disabled="false" icon="false">
          Submit form
        </ifx-button>
        <ifx-button type="reset" variant="secondary" theme="default" size="s" disabled="false" icon="false">
          Reset form
        </ifx-button>
      </div>
      <p>Text field value: {{ inputValue }}</p>
      <br />
      <br />
    </form>
  </div>
</template>



<script setup>
import { ref, onMounted } from 'vue';


let inputValue = ref("");


onMounted(() => {
  updateTextInput();
  setInterval(updateTextInput, 100000);
})

function updateTextInput() {
  console.log("updating Text field from parent component")
  inputValue.value = inputValue.value + "+1";

}

</script>


