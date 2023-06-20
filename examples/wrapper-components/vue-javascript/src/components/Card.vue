<template>
    <div class="app">
      <h2>Card</h2>
      <div>
        <ifx-card>
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg" alt="" slot="img">
          <ifx-card-overline slot="overline">
            Overline Card1
          </ifx-card-overline>
          <ifx-card-headline slot="headline">
            Card1
          </ifx-card-headline>
          <ifx-card-text slot="text">
            Example text for Card1.
          </ifx-card-text>
    
          <ifx-link href="" target="_blank" icon="true" slot="btn" underline="false" position="right">Link</ifx-link>
        </ifx-card>

        <br> <br />

        <ifx-card direction="horizontal" alignment="left" imgage="true">
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg" alt="" slot="img">
          <ifx-card-overline slot="overline">
            Overline Card2
          </ifx-card-overline>
          <ifx-card-headline slot="headline">
            Card2
          </ifx-card-headline>
          <ifx-card-text slot="text">
            Example text for Card2.
          </ifx-card-text>
          <ifx-link href="=" target="_blank" icon="true" slot="btn" underline="false" position="right">Link</ifx-link>
        </ifx-card> 
      </div>
  
      <br />
  
      <br />
    </div>
  </template>
  
  <script setup>
  
  
  </script>
  
  <style scoped>
  .app {
    text-align: center;
    flex-direction: column;
    display: block;
    align-items: center;
  }
  </style>