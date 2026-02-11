<script setup lang="ts">
import { computed, ref } from "vue";

const variants = ["number", "dot"];
const variantIndex = ref(0);
const variant = computed(() => variants[variantIndex.value]);

const inverted = ref(false);

function toggleVariant() {
  variantIndex.value = (variantIndex.value + 1) % variants.length;
}

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