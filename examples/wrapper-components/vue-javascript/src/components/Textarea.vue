<template>
  <div class="component">
    <form id="form-for-textarea">
      <h2>Textarea</h2>
      <div>
        <ifx-textarea name="textarea" v-model="inputValue" error="false" disabled="false" placeholder="Placeholder"
          caption="" />
        <br />
        <ifx-button type="submit" theme="default" size="s" disabled="false">
          Submit form
        </ifx-button>
        <ifx-button type="reset" variant="secondary" theme="default" size="s" disabled="false">
          Reset form
        </ifx-button>
      </div>
      <p>Textarea value: {{ inputValue }}</p>
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
  console.log("updating Textarea from parent component")
  inputValue.value = inputValue.value + "+1";

}

</script>


