<script setup lang="ts">
import { ref } from "vue";

const closable = ref(true);
const variants = ["primary", "success", "danger", "warning"];
const variant = ref(variants[0]);

const next = <T,>(current: T, list: readonly T[]) => list[(list.indexOf(current) + 1) % list.length];

const toggleVariant = () => (variant.value = next(variant.value, variants));

function toggleClosable() {
  closable.value = !closable.value;
}
</script>

<template>
  <div class="component">
    <h2>Alert</h2>

    <ifx-alert aria-live="assertive" icon="c-info-16" :variant="variant" :closable="closable">Attention! This is an alert message — check it out!
    </ifx-alert>
    <br>
    <br>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" @click="toggleVariant">Toggle Variant</ifx-button>
      <ifx-button variant="secondary" @click="toggleClosable">Toggle Closable State</ifx-button>
    </div>
    <br>

    <div class="state">
      <div><b>Variant:</b> {{ variant }}</div>
      <div><b>Closable:</b> {{ closable }}</div>
    </div>
  </div>
</template>