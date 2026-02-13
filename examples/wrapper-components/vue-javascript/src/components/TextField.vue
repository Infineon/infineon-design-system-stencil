<script setup lang="ts">
import { ref } from "vue";

const error = ref(false);
const disabled = ref(false);
const success = ref(false);
const readOnly = ref(false);
const required = ref(false);
const deleteIcon = ref(false);
const sizes = ["s", "m"];
const icons = ["", "arrowDown16"];

const size = ref(sizes[1]);
const icon = ref(icons[0]);

const next = <T,>(current: T, list: readonly T[]) => list[(list.indexOf(current) + 1) % list.length];

const toggleSize = () => (size.value = next(size.value, sizes));
const toggleIcon = () => (icon.value = next(icon.value, icons));

function toggleDisabled() {
  disabled.value = !disabled.value;
}

function toggleError() {
  error.value = !error.value;
}

function toggleSuccess() {
  success.value = !success.value;
}

function toggleReadOnly() {
  readOnly.value = !readOnly.value;
}

function toggleRequired() {
  required.value = !required.value;
}

function toggleDeleteIcon() {
  deleteIcon.value = !deleteIcon.value;
}

</script>

<template>
  <div class="component">
    <h2>Text Field</h2>
    <ifx-text-field :error="error" :disabled="disabled" :size="size" :icon="icon" :success="success"
      placeholder="Placeholder" :readOnly="readOnly" caption="Caption" label="Label" :required="required"
      name="text-field" :showDeleteIcon="deleteIcon" value="" autocomplete="on" type="text" internal-id="text-field"
      aria-label="text field for user input">
    </ifx-text-field>
    <br>
    <br>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" @click="toggleError">Toggle Error</ifx-button>
      <ifx-button variant="secondary" @click="toggleDisabled">Toggle Disabled</ifx-button>
      <ifx-button variant="secondary" @click="toggleSize">Toggle Size</ifx-button>
      <ifx-button variant="secondary" @click="toggleSuccess">Toggle Success</ifx-button>
      <ifx-button variant="secondary" @click="toggleReadOnly">Toggle Read Only</ifx-button>
      <ifx-button variant="secondary" @click="toggleRequired">Toggle Required</ifx-button>
      <ifx-button variant="secondary" @click="toggleDeleteIcon">Toggle Delete Icon</ifx-button>
      <ifx-button variant="secondary" @click="toggleIcon">Toggle Icon</ifx-button>
    </div>
    <br>

    <div class="state">
      <div><b>Error:</b> {{ error }} </div>
      <div><b>Disabled:</b> {{ disabled }} </div>
      <div><b>Size:</b> {{ size }} </div>
      <div><b>Success:</b> {{ success }} </div>
      <div><b>Read Only:</b> {{ readOnly }} </div>
      <div><b>Required:</b> {{ required }} </div>
      <div><b>Delete Icon:</b> {{ deleteIcon }} </div>
      <div><b>Icon:</b> {{ icon }} </div>
    </div>
  </div>
</template>