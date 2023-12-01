<template>
  <div>
    <h2>MultiSelect</h2>
    <ifx-multiselect batchSize="10" :options="JSON.stringify(options)" @ifxSelect="handleMultiSelectChange"
      size="medium (40px)" :error="error" :erroMessage="errorMessage" error-message="Some error" label=""
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
  selected: false
},
{
  value: "d",
  label: "option d",
  selected: false
},
{
  value: "b",
  label: "option b",
  selected: false
},
{
  value: "e",
  label: "option e",
  selected: false
},
{
  value: "f",
  label: "option f",
  selected: false
},
{
  value: "g",
  label: "option g",
  selected: false
},
{
  value: "h",
  label: "option h",
  selected: false
},
{
  value: "i",
  label: "option i",
  selected: false
},
{
  value: "j",
  label: "option j",
  selected: false
},
{
  value: "k",
  label: "option k",
  selected: false
},
{
  value: "l",
  label: "option l",
  selected: false
},
{
  value: "m",
  label: "option m",
  selected: false
},
{
  value: "n",
  label: "option n",
  selected: false
},
{
  value: "o",
  label: "option o",
  selected: false
},
{
  value: "p",
  label: "option p",
  selected: false
},
{
  value: "q",
  label: "option q",
  selected: false
},
{
  value: "r",
  label: "option r",
  selected: false
},
{
  value: "s",
  label: "option s",
  selected: false
},
{
  value: "t",
  label: "option t",
  selected: false
},
{
  value: "u",
  label: "option u",
  selected: false
},
{
  value: "v",
  label: "option v",
  selected: false
},
{
  value: "w",
  label: "option w",
  selected: false
},
{
  value: "x",
  label: "option x",
  selected: false
},
{
  value: "y",
  label: "option y",
  selected: false
},
{
  value: "z",
  label: "option z",
  selected: false,
  children: [
    {
      value: "z1",
      label: "option z1",
      selected: false
    },
    {
      value: "z2",
      label: "option z2",
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


 



 