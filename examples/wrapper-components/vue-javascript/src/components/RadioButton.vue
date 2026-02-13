<script setup lang="ts">
import { ref } from "vue";

const error = ref(false);
const disabled = ref(false);
const sizes = ["s", "m"];

const size = ref(sizes[0]);

const next = <T,>(current: T, list: readonly T[]) => list[(list.indexOf(current) + 1) % list.length];

const toggleSize = () => (size.value = next(size.value, sizes));

function toggleError() {
  error.value = !error.value;
}

function toggleDisabled() {
  disabled.value = !disabled.value;
}


</script>

<template>
  <div class="component">
    <h2>Radio Button</h2>
    <ifx-radio-button :size="size" name="radio-button" value="radio" checked="false" :disabled="disabled"
      :error="error">Text</ifx-radio-button>
    <br>
    <br>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" @click="toggleDisabled">Toggle Disabled</ifx-button>
      <ifx-button variant="secondary" @click="toggleError">Toggle Error</ifx-button>
      <ifx-button variant="secondary" @click="toggleSize">Toggle Size</ifx-button>
    </div>
    <br>

    <div class="state">
      <div><b>Disabled:</b> {{ disabled }} </div>
      <div><b>Error:</b> {{ error }} </div>
      <div><b>Size:</b> {{ size }}</div>
    </div>
  </div>
</template>