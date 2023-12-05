

<template>
  <div>
    <h2>Button</h2>
    <div>
      <ifx-button theme='default' @click="handleClick" disabled="true" @mouseover="handleMouseOver">
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

 
 