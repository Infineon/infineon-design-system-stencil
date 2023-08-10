

<template>
  <div>
    <h2>SingleSelect</h2>
    <ifx-choices type="single" value="undefined" ifx-size="medium (40px)" placeholder="true" search-enabled="true"
      search-placeholder-value="Search..." :ifx-disabled="disabled" :ifx-error="error" :ifx-error-message="errorMessage"
      ifx-label="" ifx-placeholder-value="Placeholder" :ifx-choices="JSON.stringify(options)"></ifx-choices>
    <div>
      <ifx-button variant="outline" color="primary" @click="toggleDisabled">Toggle Disabled</ifx-button>

      <ifx-button variant="outline" color="primary" @click="toggleError">Toggle Error</ifx-button>
    </div>
    <br />
    <br />
  </div>
</template>

 




<script setup>
import { ref } from 'vue';

let disabled = ref(false);
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


function handleMultiSelectChange(event) {
  console.log("emitting multiselect selected options: ", event.detail)
};



const toggleDisabled = () => {
  disabled.value = !disabled.value;
};

const toggleError = () => {
  error.value = !error.value;
};

</script>


 



 
 