<script setup lang="ts">
import { ref } from "vue";

const inverted = ref(false);
const variants = ["default", "brand"];
const sizes = ["s", "m"];

const variant = ref(variants[0]);
const size = ref(sizes[1]);

const next = <T,>(current: T, list: readonly T[]) => list[(list.indexOf(current) + 1) % list.length];

const toggleVariant = () => (variant.value = next(variant.value, variants));
const toggleSize = () => (size.value = next(size.value, sizes));

function toggleInverted() {
  inverted.value = !inverted.value;
}

</script>

<template>
  <div class="component">
    <h2>Spinner</h2>
    <ifx-spinner aria-label="" :variant="variant" :size="size" :inverted="inverted"></ifx-spinner>
    <br>
    <br>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" @click="toggleVariant">Toggle Variant</ifx-button>
      <ifx-button variant="secondary" @click="toggleInverted">Toggle Inverted</ifx-button>
      <ifx-button variant="secondary" @click="toggleSize">Toggle Size</ifx-button>
    </div>
    <br>

    <div class="state">
      <div><b>Variant:</b> {{ variant }} </div>
      <div><b>Inverted:</b> {{ inverted }} </div>
      <div><b>Size:</b> {{ size }} </div>
    </div>
  </div>
</template>