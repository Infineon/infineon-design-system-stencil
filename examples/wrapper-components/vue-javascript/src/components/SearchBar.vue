<script setup lang="ts">
import { ref } from "vue";

const disabled = ref(false);
const open = ref(true);

function toggleDisabled() {
  disabled.value = !disabled.value;
}

function toggleOpen() {
  open.value = !open.value;
}

</script>

<template>
  <div class="component">
    <h2>Search Bar</h2>
    <ifx-search-bar :isOpen="open" :disabled="disabled" value="" autocomplete="on"></ifx-search-bar>
    <br>
    <br>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" @click="toggleDisabled">Toggle Disabled</ifx-button>
      <ifx-button variant="secondary" @click="toggleOpen">Toggle Open</ifx-button>
    </div>
    <br>

    <div class="state">
      <div><b>Disabled:</b> {{ disabled }} </div>
      <div><b>Open:</b> {{ open }} </div>
    </div>
  </div>
</template>