<script setup lang="ts">
import { computed, ref } from "vue";

const sizes = ["regular", "small"];
const sizeIndex = ref(0);
const size = computed(() => sizes[sizeIndex.value]);

const error = ref(false);
const required = ref(false);

function toggleSize() {
  sizeIndex.value = (sizeIndex.value + 1) % sizes.length;
}

function toggleRequired() {
  required.value = !required.value;
}

function toggleError() {
  error.value = !error.value;
}

</script>

<template>
  <div class="component">
    <h2>Segmented Control</h2>
    <ifx-segmented-control caption="Caption text to describe the controls" label="Group Label" :size="size"
      :error="error" :required="required">
      <ifx-segment value="Value1" icon="star-16">Label</ifx-segment>
      <ifx-segment value="Value2" icon="star-16">Label</ifx-segment>
      <ifx-segment value="Value3" icon="star-16">Label</ifx-segment>
      <ifx-segment value="Value4" icon="star-16">Label</ifx-segment>
      <ifx-segment value="Value5" icon="star-16">Label</ifx-segment>
    </ifx-segmented-control>
    <br>
    <br>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" @click="toggleError">Toggle Error</ifx-button>
      <ifx-button variant="secondary" @click="toggleRequired">Toggle Required</ifx-button>
      <ifx-button variant="secondary" @click="toggleSize">Toggle Size</ifx-button>
    </div>
    <br>

    <div class="state">
      <div><b>Error:</b> {{ error }} </div>
      <div><b>Required:</b> {{ required }} </div>
      <div><b>Size:</b> {{ size }} </div>
    </div>
  </div>
</template>