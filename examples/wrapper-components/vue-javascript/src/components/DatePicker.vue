<script setup lang="ts">
import { ref } from "vue";

const success = ref(false);
const disabled = ref(false);
const error = ref(false);
const required = ref(false);
const types = ["date", "datetime-local"];
const sizes = ["s", "l"];

const type = ref(types[0]);
const size = ref(sizes[0]);

const next = <T,>(current: T, list: readonly T[]) => list[(list.indexOf(current) + 1) % list.length];

const toggleType = () => (type.value = next(type.value, types));
const toggleSize = () => (size.value = next(size.value, sizes));

function toggleSuccess() {
  success.value = !success.value;
}

function toggleDisabled() {
  disabled.value = !disabled.value;
}

function toggleError() {
  error.value = !error.value;
}

function toggleRequired() {
  required.value = !required.value;
}

</script>

<template>
  <div class="component">
    <h2>Date Picker</h2>
    <ifx-date-picker name="date-picker" :error="error" :disabled="disabled" :size="size" :success="success" value=""
      max="" min="" label="Label Text" caption="Caption text, description, error notification." arialabel="Date Picker"
      :required="required" autocomplete="on" :type="type">
    </ifx-date-picker>
    <br>
    <br>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" @click="toggleSuccess">Toggle Success</ifx-button>
      <ifx-button variant="secondary" @click="toggleDisabled">Toggle Disabled</ifx-button>
      <ifx-button variant="secondary" @click="toggleError">Toggle Error</ifx-button>
      <ifx-button variant="secondary" @click="toggleSize">Toggle Size</ifx-button>
      <ifx-button variant="secondary" @click="toggleType">Toggle Type</ifx-button>
      <ifx-button variant="secondary" @click="toggleRequired">Toggle Required</ifx-button>
    </div>
    <br>

    <div class="state">
      <div><b>Success:</b> {{ success }}</div>
      <div><b>Disabled:</b> {{ disabled }}</div>
      <div><b>Error:</b> {{ error }}</div>
      <div><b>Size:</b> {{ size }}</div>
      <div><b>Type:</b> {{ type }}</div>
      <div><b>Required:</b> {{ required }}</div>
    </div>
  </div>
</template>