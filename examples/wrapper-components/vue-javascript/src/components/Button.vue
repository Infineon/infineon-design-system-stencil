

<template>
  <div>
    <h2>Button</h2>
    <div>
      <ifx-button variant="solid" icon="" position="left" href="" target="_blank" color="primary" size="m"
        disabled="false" @click="handleClick" @mouseover="handleMouseOver">
        Click me
      </ifx-button>
    </div>
    <br />
  </div>
</template>

<script setup>


function handleClick() {
  console.log("Button clicked")
}

function handleMouseOver() {
  console.log('Mouse over event detected');
};
</script>

<style scoped>
.app {
  text-align: center;
  flex-direction: column;
  display: flex;
  align-items: center;
}
</style>

 