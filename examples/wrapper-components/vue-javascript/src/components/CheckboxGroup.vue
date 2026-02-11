<script setup lang="ts">
import { computed, ref } from "vue";

const sizes = ["m", "s"];
const sizeIndex = ref(0);
const size = computed(() => sizes[sizeIndex.value]);

const alignments = ["vertical", "horizontal"];
const alignmentIndex = ref(0);
const alignment = computed(() => alignments[alignmentIndex.value]);

const disabled = ref(false);
const error = ref(false);
const label = ref(true);
const caption = ref(true);
const captionIcon = ref(true);
const required = ref(false);

function toggleSize() {
  sizeIndex.value = (sizeIndex.value + 1) % sizes.length;
}

function toggleAlignment() {
  alignmentIndex.value = (alignmentIndex.value + 1) % alignments.length;
}

function toggleDisabled() {
  disabled.value = !disabled.value;
}

function toggleError() {
  error.value = !error.value;
}

function toggleLabel() {
  label.value = !label.value;
}

function toggleCaption() {
  caption.value = !caption.value;
}

function toggleCaptionIcon() {
  captionIcon.value = !captionIcon.value;
}

function toggleRequired() {
  required.value = !required.value;
}


</script>

<template>
  <div class="component">
    <h2>Checkbox</h2>
    <ifx-checkbox-group :alignment="alignment" :showGroupLabel="label" group-label-text="Group Label"
      :showCaption="caption" caption-text="Caption text, description, error notification" :showCaptionIcon="captionIcon"
      :required="required">
      <ifx-checkbox value="0" :disabled="disabled" checked="false" :size="size" indeterminate="false"
        :error="error">Option 0</ifx-checkbox>
      <ifx-checkbox value="1" :disabled="disabled" checked="false" :size="size" indeterminate="false"
        :error="error">Option 1</ifx-checkbox>
      <ifx-checkbox value="2" :disabled="disabled" checked="false" :size="size" indeterminate="false"
        :error="error">Option 2</ifx-checkbox>
      <ifx-checkbox value="3" :disabled="disabled" checked="false" :size="size" indeterminate="false"
        :error="error">Option 3</ifx-checkbox>
    </ifx-checkbox-group>
    <br>
    <br>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" @click="toggleAlignment">Toggle Alignment</ifx-button>
      <ifx-button variant="secondary" @click="toggleDisabled">Toggle Disabled</ifx-button>
      <ifx-button variant="secondary" @click="toggleError">Toggle Error</ifx-button>
      <ifx-button variant="secondary" @click="toggleSize">Toggle Size</ifx-button>
      <ifx-button variant="secondary" @click="toggleLabel">Toggle Label</ifx-button>
      <ifx-button variant="secondary" @click="toggleCaption">Toggle Caption</ifx-button>
      <ifx-button variant="secondary" @click="toggleCaptionIcon">Toggle Caption Icon</ifx-button>
      <ifx-button variant="secondary" @click="toggleRequired">Toggle Required</ifx-button>

    </div>
    <br>

    <div class="state">
      <div><b>Alignment:</b> {{ alignment }} </div>
      <div><b>Disabled:</b> {{ disabled }} </div>
      <div><b>Error:</b> {{ error }} </div>
      <div><b>Size:</b> {{ size }} </div>
      <div><b>Label:</b> {{ label }} </div>
      <div><b>Caption:</b> {{ caption }} </div>
      <div><b>Caption Icon:</b> {{ captionIcon }} </div>
      <div><b>Required:</b> {{ required }} </div>
    </div>
  </div>
</template>