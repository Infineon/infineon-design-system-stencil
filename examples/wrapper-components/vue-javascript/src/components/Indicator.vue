<script setup lang="ts">
import { ref } from "vue";

const inverted = ref(false);
const variants = ["number", "dot"];

const variant = ref(variants[0]);

const next = <T,>(current: T, list: readonly T[]) => list[(list.indexOf(current) + 1) % list.length];

const toggleVariant = () => (variant.value = next(variant.value, variants));

function toggleInverted() {
  inverted.value = !inverted.value;
}

</script>

<template>
  <div class="component">
    <h2>Indicator</h2>
    <ifx-indicator :variant="variant" number="1" :inverted="inverted"> </ifx-indicator>
    <br>
    <br>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" @click="toggleVariant">Toggle Variant</ifx-button>
      <ifx-button variant="secondary" @click="toggleInverted">Toggle Inverted</ifx-button>
    </div>
    <br>

    <div class="state">
      <div><b>Variant:</b> {{ variant }} </div>
      <div><b>Inverted:</b> {{ inverted }} </div>
    </div>
  </div>
</template>