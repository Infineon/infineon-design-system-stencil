<script setup lang="ts">
import { computed, ref } from "vue";

const variants = ["primary", "success", "danger", "warning"] as const;

const variantIndex = ref(0);
const closable = ref(true);

const variant = computed(() => variants[variantIndex.value]);

function toggleVariant() {
  variantIndex.value = (variantIndex.value + 1) % variants.length;
}

function toggleClosable() {
  closable.value = !closable.value;
}
</script>

<template>
  <div class="component">
    <h2>Alert</h2>

    <ifx-alert aria-live="assertive" icon="c-info-16" :variant="variant" :closable="closable">
      Attention! This is an alert message — check it out!
    </ifx-alert>
    <br>
    <br>
    <h3 class="controls-title">Controls</h3>
    <ifx-button variant="secondary" @click="toggleVariant">Toggle Variant</ifx-button>
    <ifx-button variant="secondary" @click="toggleClosable">Toggle Closable State</ifx-button>
    <br>
    <br>
    <div class="state">
      <div><b>Variant:</b> {{ variant }}</div>
      <div><b>Closable:</b> {{ String(closable) }}</div>
    </div>
  </div>
</template>