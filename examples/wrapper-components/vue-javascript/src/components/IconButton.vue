<script setup lang="ts">
import { ref } from "vue";

const disabled = ref(false);
const sizes = ["s", "m", "l"];
const variants = ["primary", "secondary", "tertiary"];
const shapes = ["round", "square"];

const size = ref(sizes[1]);
const variant = ref(variants[0]);
const shape = ref(shapes[0]);

const next = <T,>(current: T, list: readonly T[]) => list[(list.indexOf(current) + 1) % list.length];

const toggleSize = () => (size.value = next(size.value, sizes));
const toggleVariant = () => (variant.value = next(variant.value, variants));
const toggleShape = () => (shape.value = next(shape.value, shapes));

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