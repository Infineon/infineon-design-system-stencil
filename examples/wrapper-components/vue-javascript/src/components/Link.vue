<script setup lang="ts">
import { computed, ref } from "vue";

const variants = ["bold", "underlined", "title", "menu"];
const variantIndex = ref(0);
const variant = computed(() => variants[variantIndex.value]);

const sizes = ["s", "m", "l", "xl"];
const sizeIndex = ref(1);
const size = computed(() => sizes[sizeIndex.value]);

const disabled = ref(false);

function toggleVariant() {
  variantIndex.value = (variantIndex.value + 1) % variants.length;
}

function toggleSize() {
  sizeIndex.value = (sizeIndex.value + 1) % sizes.length;
}

function toggleDisabled() {
  disabled.value = !disabled.value;
}

</script>

<template>
  <div class="component">
    <h2>Link</h2>
    <ifx-link href="" aria-label="Link" target="_blank" :size="size" :variant="variant" :disabled="disabled" download="">Link</ifx-link>
    <br>
    <br>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" @click="toggleVariant">Toggle Variant</ifx-button>
      <ifx-button variant="secondary" @click="toggleSize">Toggle Size</ifx-button>
      <ifx-button variant="secondary" @click="toggleDisabled">Toggle Disabled</ifx-button>
    </div>
    <br>

    <div class="state">
      <div><b>Variant:</b> {{ variant }} </div>
      <div><b>Size:</b> {{ size }}</div>
      <div><b>Disabled:</b> {{ disabled }}</div>
    </div>
  </div>
</template>