<template>
  <div>

    <h2>Tooltip</h2>
    <div>
      <ifx-tooltip text="Hi, I'm a compact tooltip" variant="compact" position="right">I'm the compact tooltip reference
        element -
        Please hover me</ifx-tooltip>
      <br />

      <ifx-tooltip header="Dismissable tooltip header" text="Hi, I'm a dismissable tooltip" variant="dismissable"
        position="auto">I'm the dismissable tooltip reference
        element - Please click me</ifx-tooltip>
      <br />

      <ifx-tooltip header="Text + icon tooltip header" text="Hi, I'm a tooltip with text and an icon" icon="c-info-24"
        variant="textPlusIcon" position="auto">I'm the text+icon tooltip reference
        element - Please hover me</ifx-tooltip>
      <br />
    </div>

    <br />
    <br />
  </div>
</template>

<script setup>

</script>


