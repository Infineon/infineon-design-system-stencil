<script setup lang="ts">
import { ref } from "vue";

const disabled = ref(false);
const error = ref(false);
const indeterminate = ref(false);
const sizes = ["m", "s"];

const size = ref(sizes[0]);

const next = <T,>(current: T, list: readonly T[]) => list[(list.indexOf(current) + 1) % list.length];

const toggleSize = () => (size.value = next(size.value, sizes));

function toggleDisabled() {
  disabled.value = !disabled.value;
}

function toggleError() {
  error.value = !error.value;
}

function toggleIndeterminate() {
  indeterminate.value = !indeterminate.value;
}

</script>

<template>
  <div class="component">
    <h2>Checkbox</h2>
    <ifx-checkbox :disabled="disabled" checked="false" :indeterminate="indeterminate" :size="size" :error="error"
      name="checkbox">Text</ifx-checkbox>
    <br>
    <br>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" @click="toggleDisabled">Toggle Disabled</ifx-button>
      <ifx-button variant="secondary" @click="toggleError">Toggle Error</ifx-button>
      <ifx-button variant="secondary" @click="toggleSize">Toggle Size</ifx-button>
      <ifx-button variant="secondary" @click="toggleIndeterminate">Toggle Indeterminate</ifx-button>

    </div>
    <br>

    <div class="state">
      <div><b>Disabled:</b> {{ disabled }} </div>
      <div><b>Error:</b> {{ error }} </div>
      <div><b>Size:</b> {{ size }} </div>
      <div><b>Indeterminate:</b> {{ indeterminate }} </div>
    </div>
  </div>
</template>