

<template>
  <div>
    <h2>MultiSelect</h2>
    <ifx-multiselect :options="options" size="medium (40px)" error="false" error-message="Some error" label=""
      :disabled="disabled"></ifx-multiselect>
    <br />
    <br />
  </div>
</template>



<script setup>
import { ref } from 'vue';

let disabled = ref(false);
let error = ref(false);

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

console.log("options ", options);

function handleCheckboxChange(event) {
  console.log("updating checkbox value: ", event.detail)
  checkboxValue.value = event.detail;
};



const toggleDisabled = () => {
  disabled.value = !disabled.value;
};

const toggleError = () => {
  error.value = !error.value;
};

const toggleValue = () => {
  checkboxValue.value = !checkboxValue.value;
};
</script>


 



 