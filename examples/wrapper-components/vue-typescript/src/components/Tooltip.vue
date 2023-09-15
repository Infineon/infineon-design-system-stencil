<template>
  <div>

    <h2>Tooltip</h2>
    <div>
      <ifx-tooltip text="Hi, I'm a compact tooltip" variant="compact" position="left">I'm the compact tooltip reference
        element -
        Please hover me</ifx-tooltip>
      <br />

      <ifx-tooltip header="Dismissible tooltip header 1" text="Hi, I'm a dismissible tooltip" variant="dismissible"
        position="auto">I'm the dismissible tooltip reference 1
        element - Please click me</ifx-tooltip>
      <br />

      <ifx-tooltip header="Dismissible tooltip header 2" text="Hi, I'm a dismissible tooltip" variant="dismissible"
        position="bottom">I'm the dismissible tooltip reference 2
        element - Please click me</ifx-tooltip>
      <br />

      <ifx-tooltip header="Text + icon tooltip header" text="Hi, I'm a tooltip with text and an icon" icon="c-info-24"
        variant="extended" position="auto">I'm the text+icon tooltip reference
        element - Please hover me</ifx-tooltip>

    </div>
    <br />
    <br />
  </div>
</template>

<script setup>

</script>


