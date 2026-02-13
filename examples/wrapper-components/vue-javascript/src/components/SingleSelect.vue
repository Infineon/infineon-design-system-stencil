<script setup lang="ts">
import { ref } from "vue";

const disabled = ref(false);
const required = ref(true);
const error = ref(false);
const showSearch = ref(false);
const showClearButton = ref(false);
const sizes = ["s", "m"];

const size = ref(sizes[1]);

const next = <T,>(current: T, list: readonly T[]) => list[(list.indexOf(current) + 1) % list.length];

const toggleSize = () => (size.value = next(size.value, sizes));

function toggleDisabled() {
  disabled.value = !disabled.value;
}

function toggleRequired() {
  required.value = !required.value;
}

function toggleError() {
  error.value = !error.value;
}

function toggleShowSearch() {
  showSearch.value = !showSearch.value;
}

function toggleShowClearButton() {
  showClearButton.value = !showClearButton.value;
}

</script>

<template>
  <div class="component">
    <h2>Single Select</h2>
    <ifx-select :size="size" placeholder="true" :showClearButton="showClearButton"
      :showSearch="showSearch" search-placeholder-value="Search..." :disabled="disabled"
      :required="required" :error="error" label="Label" caption="Caption" placeholder-value="Placeholder"
      options='[{"value":"a","label":"option a","selected":false}, {"value":"b","label":"option b","selected":false}, {"value":"c","label":"option c","selected":false}]'>
    </ifx-select>
    <br>
    <br>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" @click="toggleDisabled">Toggle Disabled</ifx-button>
      <ifx-button variant="secondary" @click="toggleRequired">Toggle Required</ifx-button>
      <ifx-button variant="secondary" @click="toggleError">Toggle Error</ifx-button>
      <ifx-button variant="secondary" @click="toggleShowSearch">Toggle Search</ifx-button>
      <ifx-button variant="secondary" @click="toggleShowClearButton">Toggle Clear Button</ifx-button>
      <ifx-button variant="secondary" @click="toggleSize">Toggle Size</ifx-button>
    </div>
    <br>

    <div class="state">
      <div><b>Disabled:</b> {{ disabled }}</div>
      <div><b>Required:</b> {{ required }}</div>
      <div><b>Error:</b> {{ error }}</div>
      <div><b>Show Search:</b> {{ showSearch }}</div>
      <div><b>Show Clear Button:</b> {{ showClearButton }}</div>
      <div><b>Size:</b> {{ size }}</div>
    </div>
  </div>
</template>