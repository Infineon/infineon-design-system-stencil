<script setup lang="ts">
import { ref } from "vue";

const disabled = ref(false);
const variants = ["bold", "underlined", "title", "menu"];
const sizes = ["s", "m", "l", "xl"];

const variant = ref(variants[0]);
const size = ref(sizes[1]);

const next = <T,>(current: T, list: readonly T[]) => list[(list.indexOf(current) + 1) % list.length];

const toggleVariant = () => (variant.value = next(variant.value, variants));
const toggleSize = () => (size.value = next(size.value, sizes));

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