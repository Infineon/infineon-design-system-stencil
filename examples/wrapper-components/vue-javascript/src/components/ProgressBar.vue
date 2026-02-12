<script setup lang="ts">
import { computed, ref } from "vue";

const sizes = ["s", "m"];
const sizeIndex = ref(1);
const size = computed(() => sizes[sizeIndex.value]);

const showLabel = ref(true);
const progressValue = ref(10);

function toggleSize() {
  sizeIndex.value = (sizeIndex.value + 1) % sizes.length;
}

function toggleShowLabel() {
  showLabel.value = !showLabel.value;
}

function updateProgressOnClick() {
  if (progressValue.value < 100) {
    progressValue.value += 10;
  } else {
    progressValue.value = 10;
  }
}

</script>

<template>
  <div class="component">
    <h2>Progress Bar</h2>
    <ifx-progress-bar :value="progressValue" :size="size" :showLabel="showLabel"></ifx-progress-bar>
    <br>
    <br>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" @click="updateProgressOnClick">Update progress</ifx-button>
      <ifx-button variant="secondary" @click="toggleSize">Toggle Size</ifx-button>
      <ifx-button variant="secondary" @click="toggleShowLabel">Toggle Label</ifx-button>
    </div>
    <br>

    <div class="state">
      <div><b>Size:</b> {{ size }} </div>
      <div><b>ShowLabel:</b> {{ showLabel }}</div>
    </div>
  </div>
</template>