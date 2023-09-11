<template>
  <div>
    <h2>MultiSelect</h2>
    <ifx-multiselect :options="JSON.stringify(options)" @ifxSelect="handleMultiSelectChange" size="medium (40px)"
      :error="error" :erroMessage="errorMessage" error-message="Some error" label=""
      :disabled="disabled"></ifx-multiselect>
    <div>
      <ifx-button variant="secondary" theme="default" @click="toggleDisabled">Toggle Disabled</ifx-button>

      <ifx-button variant="secondary" theme="default" @click="toggleError">Toggle Error</ifx-button>
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
  selected: false,
  children: [
    {
      value: "c1",
      label: "option c1",
      selected: false
    },
    {
      value: "c2",
      label: "option c2",
      selected: false
    }
  ]
}]);

console.log("options", options)


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


 



 