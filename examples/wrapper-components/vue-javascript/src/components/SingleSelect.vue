<template>
  <div>
    <h2>SingleSelect</h2>
    <ifx-select type="single" value="undefined" ifx-size="medium (40px)" placeholder="true" search-enabled="true"
      search-placeholder-value="Search..." :ifx-disabled="disabled" :ifx-error="error" :ifx-error-message="errorMessage"
      ifx-label="" ifx-placeholder-value="Placeholder" :ifx-options="JSON.stringify(options)"></ifx-select>
    <div>
      <ifx-button variant="secondary" theme="default" @click="toggleDisabled">Toggle Disabled</ifx-button>

      <ifx-button variant="secondary" theme="default" @click="toggleError">Toggle Error</ifx-button>
    </div>
    <br />

    <ifx-select type="single" value="undefined" ifx-size="medium (40px)" placeholder="true" search-enabled="true"
      search-placeholder-value="Search..." :ifx-disabled="disabled2" :ifx-error="error" :ifx-error-message="errorMessage"
      ifx-label="" ifx-placeholder-value="Placeholder" :ifx-options="JSON.stringify(options)"></ifx-select>

    <br />
    <br />
  </div>
</template>



<script setup>
import { ref } from 'vue';

let disabled = ref(false);
let disabled2 = ref(false);

let error = ref(false);
let errorMessage = ref("Some error");

let options = ref([{
  value: "a",
  label: "option a",
  selected: false
},
{
  value: "b",
  label: "option b",
  selected: false
},
{
  value: "c",
  label: "option c",
  selected: false
}]);



const toggleDisabled = () => {
  disabled.value = !disabled.value;
};

const toggleError = () => {
  error.value = !error.value;
};

</script>


 



 
 