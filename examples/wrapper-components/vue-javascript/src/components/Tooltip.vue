<script setup lang="ts">
import { computed, ref } from "vue";

const variants = ["compact", "dismissible", "extended"];
const variantIndex = ref(0);
const variant = computed(() => variants[variantIndex.value]);

const positions = ["auto", "bottom-start", "top-start", "left", "bottom-end", "top-end", "right", "bottom", "top"];
const positionIndex = ref(0);
const position = computed(() => positions[positionIndex.value]);

function toggleVariant() {
  variantIndex.value = (variantIndex.value + 1) % variants.length;
}

function togglePosition() {
  positionIndex.value = (positionIndex.value + 1) % positions.length;
}

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