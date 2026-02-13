<script setup lang="ts">
import { ref } from "vue";

const disabled = ref(false);
const percentage = ref(true);
const types = ["single", "double"];

const type = ref(types[0]);

const next = <T,>(current: T, list: readonly T[]) => list[(list.indexOf(current) + 1) % list.length];

const toggleType = () => (type.value = next(type.value, types));

function toggleDisable() {
  disabled.value = !disabled.value;
}

function togglePercentage() {
  percentage.value = !percentage.value;
}

</script>

<template>
  <div class="component">
    <h2>Slider</h2>
    <h3>Default</h3>
    <ifx-slider value="50" min="0" max="100" step="1" min-value-handle="undefined" max-value-handle="undefined"
      :type="type" :showPercentage="percentage" :disabled="disabled"></ifx-slider>
    <h3>With Icons</h3>
    <ifx-slider value="50" min="0" max="100" step="1" min-value-handle="undefined" max-value-handle="undefined"
      :type="type" left-icon="cogwheel-16" right-icon="cogwheel-16" :showPercentage="percentage"
      :disabled="disabled"></ifx-slider>
    <h3>With Texts</h3>
    <ifx-slider value="50" min="0" max="100" step="1" min-value-handle="undefined" max-value-handle="undefined"
      :type="type" left-text="LeftText" right-text="RightText" :showPercentage="percentage"
      :disabled="disabled"></ifx-slider>
    <br>
    <br>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" @click="togglePercentage">Toggle Percentage</ifx-button>
      <ifx-button variant="secondary" @click="toggleDisable">Toggle Disable</ifx-button>
      <ifx-button variant="secondary" @click="toggleType">Toggle Type</ifx-button>
    </div>
    <br>

    <div class="state">
      <div><b>Percentage:</b> {{ percentage }} </div>
      <div><b>Disable:</b> {{ disabled }} </div>
      <div><b>Type:</b> {{ type }} </div>
    </div>
  </div>
</template>