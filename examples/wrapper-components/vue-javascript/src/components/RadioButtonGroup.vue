<script setup lang="ts">
import { ref } from "vue";

const label = ref(true);
const caption = ref(true);
const icon = ref(true);
const required = ref(false);
const alignments = ["vertical", "horizontal"];

const alignment = ref(alignments[0]);

const next = <T,>(current: T, list: readonly T[]) => list[(list.indexOf(current) + 1) % list.length];

const toggleAlignment = () => (alignment.value = next(alignment.value, alignments));

function toggleLabel() {
  label.value = !label.value;
}

function toggleCaption() {
  caption.value = !caption.value;
}

function toggleIcon() {
  icon.value = !icon.value;
}


function toggleRequired() {
  required.value = !required.value;
}

</script>

<template>
  <div class="component">
    <h2>Radio Button Group</h2>
    <ifx-radio-button-group :alignment="alignment" :showGroupLabel="label" group-label-text="Group Label"
      :showCaption="caption" caption-text="Caption text, description, error notification" :showCaptionIcon="icon"
      :required="required">
      <ifx-radio-button value="0" disabled="false" checked="false" size="m" error="false">Option 0</ifx-radio-button>
      <ifx-radio-button value="1" disabled="false" checked="false" size="m" error="false">Option 1</ifx-radio-button>
      <ifx-radio-button value="2" disabled="false" checked="false" size="m" error="false">Option 2</ifx-radio-button>
      <ifx-radio-button value="3" disabled="false" checked="false" size="m" error="false">Option 3</ifx-radio-button>
    </ifx-radio-button-group>
    <br>
    <br>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" @click="toggleAlignment">Toggle Alignment</ifx-button>
      <ifx-button variant="secondary" @click="toggleLabel">Toggle Label</ifx-button>
      <ifx-button variant="secondary" @click="toggleCaption">Toggle Caption</ifx-button>
      <ifx-button variant="secondary" @click="toggleIcon">Toggle Icon</ifx-button>
      <ifx-button variant="secondary" @click="toggleRequired">Toggle Required</ifx-button>
    </div>
    <br>

    <div class="state">
      <div><b>Alignment:</b> {{ alignment }} </div>
      <div><b>Show Label:</b> {{ label }} </div>
      <div><b>Show Caption:</b> {{ caption }}</div>
      <div><b>Show Icon:</b> {{ icon }}</div>
      <div><b>Required:</b> {{ required }}</div>
    </div>
  </div>
</template>