

<template>
  <div>
    <h2>Button</h2>
    <div>
      <ifx-button variant="primary" href="" target="_blank" theme="default" size="m" disabled="false" @click="handleClick"
        @mouseover="handleMouseOver">
        Click me
      </ifx-button>
      <div style="background-color:grey">
        <ifx-button variant="tertiary" href="" target="_blank" theme="inverse" size="m" disabled="false"
          @click="handleClick" @mouseover="handleMouseOver">
          I'm a button in a div
        </ifx-button>
      </div>
    </div>
    <br />
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

 
 