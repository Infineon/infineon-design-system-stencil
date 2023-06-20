

<template>
    <div class="app">
      <h2>Accordion</h2>
      <div>
        <ifx-accordion auto-collapse="true" @ifxItemOpen="handleChange">
      <ifx-accordion-item caption="Caption1">
        text1 text1 text1 
      </ifx-accordion-item>
      <ifx-accordion-item caption="Caption2">
        text2 text2 text2 
      </ifx-accordion-item>
      <ifx-accordion-item caption="Caption3">
        text3 text3 text3 
      </ifx-accordion-item>
    </ifx-accordion>
      </div>
  
      <br />
  
      <br />
    </div>
  </template>
  
  <script setup>
  
  function handleChange(event) {
  console.log("Item opened", event)
  }
  
  </script>
  
  <style scoped>
  .app {
    text-align: center;
    flex-direction: column;
    display: block;
    align-items: center;
  }
  </style>