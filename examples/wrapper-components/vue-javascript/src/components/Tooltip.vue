<script setup lang="ts">
import { ref } from "vue";

const variants = ["compact", "dismissible", "extended"];
const positions = ["auto", "bottom-start", "top-start", "left", "bottom-end", "top-end", "right", "bottom", "top"];

const variant = ref(variants[0]);
const position = ref(positions[0]);

const next = <T,>(current: T, list: readonly T[]) => list[(list.indexOf(current) + 1) % list.length];

const toggleVariant = () => (variant.value = next(variant.value, variants));
const togglePosition = () => (position.value = next(position.value, positions));

</script>

<template>
  <div class="component">
    <h2>Tooltip</h2>
    <ifx-tooltip text="Hi, I'm a tooltip" :variant="variant" :position="position" icon="arrowLeft16"
      aria-label="Tooltip with important information">
      I'm the tooltip reference element - Please hover me
    </ifx-tooltip>
    <br>
    <br>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" @click="togglePosition">Toggle Position</ifx-button>
      <ifx-button variant="secondary" @click="toggleVariant">Toggle Variant</ifx-button>
    </div>
    <br>

    <div class="state">
      <div><b>Position:</b> {{ position }} </div>
      <div><b>Variant:</b> {{ variant }} </div>
    </div>
  </div>
</template>