<script setup lang="ts">
import { computed, ref } from "vue";

const variants = ["default", "brand"];
const variantIndex = ref(0);
const variant = computed(() => variants[variantIndex.value]);

const sizes = ["s", "m"];
const sizeIndex = ref(1);
const size = computed(() => sizes[sizeIndex.value]);

const inverted = ref(false);

function toggleVariant() {
  variantIndex.value = (variantIndex.value + 1) % variants.length;
}

function toggleSize() {
  sizeIndex.value = (sizeIndex.value + 1) % sizes.length;
}

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