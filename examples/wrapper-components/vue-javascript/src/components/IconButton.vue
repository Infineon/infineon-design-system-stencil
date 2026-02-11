<script setup lang="ts">
import { computed, ref } from "vue";

const sizes = ["s", "m", "l"];
const sizeIndex = ref(1);
const size = computed(() => sizes[sizeIndex.value]);

const variants = ["primary", "secondary", "tertiary"];
const variantIndex = ref(0);
const variant = computed(() => variants[variantIndex.value]);

const shapes = ["round", "square"];
const shapeIndex = ref(0);
const shape = computed(() => shapes[shapeIndex.value]);

const disabled = ref(false);

function toggleSize() {
  sizeIndex.value = (sizeIndex.value + 1) % sizes.length;
}

function toggleVariant() {
  variantIndex.value = (variantIndex.value + 1) % variants.length;
}

function toggleShape() {
  shapeIndex.value = (shapeIndex.value + 1) % shapes.length;
}

function toggleDisabled() {
  disabled.value = !disabled.value;
}

</script>

<template>
  <div class="component">
    <h2>Icon Button</h2>
    <ifx-icon-button :shape="shape" :variant="variant" icon="c-info-16" href="" target="_blank" :size="size"
      :disabled="disabled" aria-label="Icon Button">
    </ifx-icon-button>
    <br>
    <br>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" @click="toggleVariant">Toggle Variant</ifx-button>
      <ifx-button variant="secondary" @click="toggleSize">Toggle Size</ifx-button>
      <ifx-button variant="secondary" @click="toggleDisabled">Toggle Disabled</ifx-button>
      <ifx-button variant="secondary" @click="toggleShape">Toggle Shape</ifx-button>
    </div>
    <br>

    <div class="state">
      <div><b>Variant:</b> {{ variant }} </div>
      <div><b>Size:</b> {{ size }} </div>
      <div><b>Disabled:</b> {{ disabled }} </div>
      <div><b>Shape:</b> {{ shape }} </div>
    </div>
  </div>
</template>