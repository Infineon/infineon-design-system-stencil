<template>
    <div>
      <h2>Segmented Controls</h2>
      <ifx-segmented-control-group :selected-value='selectedValue' @ifxChange="handleIfxChange">
        <ifx-segmented-control icon='star-16' value='value1'> Label </ifx-segmented-control>
        <ifx-segmented-control icon='star-16' value='value2'> Label </ifx-segmented-control>
        <ifx-segmented-control icon='star-16' value='value3'> Label </ifx-segmented-control>
        <ifx-segmented-control icon='star-16' value='value4'> Label </ifx-segmented-control>
      </ifx-segmented-control-group>
      <br />
      <br />
    </div>
  </template>
  
  <script  setup>
  import { ref } from 'vue'
  let selectedValue = ref('value1');
  
  
  function handleIfxChange(event) {
    selectedValue.value = event.detail.selectedValue;
  }
  
  </script>
  
  <style scoped></style>