<script setup lang="ts">
import { ref } from "vue";

const fullWidth = ref(false);
const disabled = ref(false);
const variants = ["primary", "secondary", "tertiary"];
const themes = ["default", "danger", "inverse"];
const sizes = ["xs", "s", "m", "l"];
const icons = ["", "fileMpg16"];

const variant = ref(variants[0]);
const theme = ref(themes[0]);
const size = ref(sizes[2]);
const icon = ref(icons[0]);

const next = <T,>(current: T, list: readonly T[]) => list[(list.indexOf(current) + 1) % list.length];

const toggleVariant = () => (variant.value = next(variant.value, variants));
const toggleTheme = () => (theme.value = next(theme.value, themes));
const toggleSize = () => (size.value = next(size.value, sizes));
const toggleIcon = () => (icon.value = next(icon.value, icons));

const toggleFullWidth = () => {
  fullWidth.value = !fullWidth.value;
};

const toggleDisabled = () => {
  disabled.value = !disabled.value;
};


</script>

<template>
  <div class="component">
    <h2>Button</h2>
    <ifx-button type="button" aria-label="Button" :disabled="disabled" :variant="variant" :size="size" target="_blank"
      :theme="theme" :fullWidth="fullWidth"><ifx-icon :icon="icon"></ifx-icon>Button</ifx-button>
    <br>
    <br>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" @click="toggleVariant">Toggle Variant</ifx-button>
      <ifx-button variant="secondary" @click="toggleTheme">Toggle Theme</ifx-button>
      <ifx-button variant="secondary" @click="toggleSize">Toggle Size</ifx-button>
      <ifx-button variant="secondary" @click="toggleFullWidth">Toggle Full Width</ifx-button>
      <ifx-button variant="secondary" @click="toggleDisabled">Toggle Disabled</ifx-button>
      <ifx-button variant="secondary" @click="toggleIcon">Toggle Icon</ifx-button>
    </div>
    <br>

    <div class="state">
      <div><b>Variant:</b> {{ variant }}</div>
      <div><b>Theme:</b> {{ theme }}</div>
      <div><b>Size:</b> {{ size }}</div>
      <div><b>Full Width:</b> {{ fullWidth }}</div>
      <div><b>Disabled:</b> {{ disabled }}</div>
      <div><b>Icon:</b> {{ icon }}</div>
    </div>
  </div>
</template>