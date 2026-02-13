<script setup lang="ts">
import { ref } from "vue";

const disabled = ref(false);
const readOnly = ref(false);
const sizes = ["small", "medium", "large"];
const variants = ["single", "multi"];;
const themes = ["outlined", "filled-light", "filled-dark"];
const icons = ["", "windows16"];

const size = ref(sizes[1]);
const variant = ref(variants[0]);
const theme = ref(themes[0]);
const icon = ref(icons[0]);

const next = <T,>(current: T, list: readonly T[]) => list[(list.indexOf(current) + 1) % list.length];

const toggleSize = () => (size.value = next(size.value, sizes));
const toggleVariant = () => (variant.value = next(variant.value, variants));
const toggleTheme = () => (theme.value = next(theme.value, themes));
const toggleIcon = () => (icon.value = next(icon.value, icons));

function toggleDisabled() {
  disabled.value = !disabled.value;
}

function toggleReadOnly() {
  readOnly.value = !readOnly.value;
}

</script>

<template>
  <div class="component">
    <h2>Chip</h2>
    <ifx-chip placeholder="Label" :size="size" :variant="variant" :theme="theme" :icon="icon" :read-only="readOnly"
      aria-label="Chip" :disabled="disabled">
      <ifx-chip-item value="Item Value 1">Item Label 1</ifx-chip-item>
      <ifx-chip-item value="Item Value 2">Item Label 2</ifx-chip-item>
      <ifx-chip-item value="Item Value 3">Item Label 3</ifx-chip-item>
      <ifx-chip-item value="Item Value 4">Item Label 4</ifx-chip-item>
    </ifx-chip>
    <br>
    <br>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" @click="toggleSize">Toggle Size</ifx-button>
      <ifx-button variant="secondary" @click="toggleVariant">Toggle Variant</ifx-button>
      <ifx-button variant="secondary" @click="toggleReadOnly">Toggle Read Only</ifx-button>
      <ifx-button variant="secondary" @click="toggleDisabled">Toggle Disabled</ifx-button>
      <ifx-button variant="secondary" @click="toggleTheme">Toggle Theme</ifx-button>
      <ifx-button variant="secondary" @click="toggleIcon">Toggle Icon</ifx-button>
    </div>
    <br>

    <div class="state">
      <div><b>Size:</b> {{ size }}</div>
      <div><b>Variant:</b> {{ variant }}</div>
      <div><b>Read Only:</b> {{ readOnly }}</div>
      <div><b>Disabled:</b> {{ disabled }}</div>
      <div><b>Theme:</b> {{ theme }}</div>
      <div><b>Icon:</b> {{ icon }}</div>
    </div>
  </div>
</template>