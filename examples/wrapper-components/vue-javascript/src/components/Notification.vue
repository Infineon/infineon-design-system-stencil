<script setup lang="ts">
import { ref } from "vue";

const variants = ["success", "locked", "error", "neutral"];
const variant = ref(variants[3]);

const next = <T,>(current: T, list: readonly T[]) => list[(list.indexOf(current) + 1) % list.length];
const toggleVariant = () => (variant.value = next(variant.value, variants));
</script>

<template>
  <div class="component">
    <h2>Notification</h2>
    <ifx-notification icon="c-check-16" :variant="variant" link-text="Link" link-href="https://www.example.com" link-target="_blank">Sample Notification</ifx-notification>
    <br>
    <br>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" @click="toggleVariant">Toggle Variant</ifx-button>
    </div>
    <br>

    <div class="state">
      <div><b>Variant:</b> {{ variant }} </div>
    </div>
  </div>
</template>