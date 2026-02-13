<script setup lang="ts">
import { ref } from "vue";

const disabled = ref(false);
const error = ref(false);
const readOnly = ref(false);
const required = ref(true);
const fullWidth = ref(false);
const resizes = ["both", "vertical", "horizontal", "none"];

const resize = ref(resizes[0]);

const next = <T,>(current: T, list: readonly T[]) => list[(list.indexOf(current) + 1) % list.length];

const toggleResize = () => (resize.value = next(resize.value, resizes));

function toggleDisabled() {
  disabled.value = !disabled.value;
}

function toggleError() {
  error.value = !error.value;
}

function toggleReadOnly() {
  readOnly.value = !readOnly.value;
}

function toggleRequired() {
  required.value = !required.value;
}

function toggleFullWidth() {
  fullWidth.value = !fullWidth.value;
}

</script>

<template>
  <div class="component">
    <h2>Textarea</h2>
    <ifx-textarea caption="Caption text, description, error notification" cols="43" :disabled="disabled" :error="error"
      label="Label Text" name="textarea" placeholder="Placeholder" :required="required" :readOnly="readOnly"
      :resize="resize" rows="5" value="" wrap="soft" :fullWidth="fullWidth">
    </ifx-textarea>
    <br>
    <br>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" @click="toggleDisabled">Toggle Disabled</ifx-button>
      <ifx-button variant="secondary" @click="toggleError">Toggle Error</ifx-button>
      <ifx-button variant="secondary" @click="toggleReadOnly">Toggle Read Only</ifx-button>
      <ifx-button variant="secondary" @click="toggleResize">Toggle Resize</ifx-button>
      <ifx-button variant="secondary" @click="toggleFullWidth">Toggle Full Width</ifx-button>
      <ifx-button variant="secondary" @click="toggleRequired">Toggle Required</ifx-button>
    </div>
    <br>

    <div class="state">
      <div><b>Disabled:</b> {{ disabled }}</div>
      <div><b>Error:</b> {{ error }}</div>
      <div><b>Read Only:</b> {{ readOnly }}</div>
      <div><b>Resize:</b> {{ resize }}</div>
      <div><b>Full Width:</b> {{ fullWidth }}</div>
      <div><b>Required:</b> {{ required }}</div>
    </div>
  </div>
</template>