

<template>
  <div>
    <h2>Button</h2>
    <div>
      <ifx-button variant="secondary" position="left" href="" target="_blank" theme="default" size="m" disabled="false"
        @click="handleClick" @mouseover="handleMouseOver">
        Click me
      </ifx-button>
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

 