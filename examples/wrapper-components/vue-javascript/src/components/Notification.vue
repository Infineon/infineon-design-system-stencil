<script setup lang="ts">
import { computed, ref } from "vue";

const variants = ["success", "locked", "error", "neutral"];
const variantIndex = ref(3);
const variant = computed(() => variants[variantIndex.value]);

function toggleVariant() {
  variantIndex.value = (variantIndex.value + 1) % variants.length;
}

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