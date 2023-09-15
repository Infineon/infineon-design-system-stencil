

<template>
  <div>
    <h2>Button</h2>
    <div>
      <ifx-button theme='default' @click="handleClick" @mouseover="handleMouseOver">Click me</ifx-button>
    </div>
    <br />
    <br />
  </div>
</template>

<script lang="ts" setup>


function handleClick() {
  console.log("Button clicked")
}

function handleMouseOver() {
  console.log('Mouse over event detected');
};
</script>

 