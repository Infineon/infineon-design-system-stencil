<script setup lang="ts">
import { computed, ref } from "vue";

const variants = ["primary", "secondary", "tertiary"];
const variantIndex = ref(0);
const variant = computed(() => variants[variantIndex.value]);

const themes = ["default", "danger", "inverse"];
const themeIndex = ref(0);
const theme = computed(() => themes[themeIndex.value]);

const sizes = ["xs", "s", "m", "l"];
const sizeIndex = ref(2);
const size = computed(() => sizes[sizeIndex.value]);

const icons = ["", "fileMpg16"];
const iconIndex = ref(0);
const icon = computed(() => icons[iconIndex.value]);

const disabled = ref(false);
const fullWidth = ref(false);

function toggleVariant() {
  variantIndex.value = (variantIndex.value + 1) % variants.length;
}

function toggleTheme() {
  themeIndex.value = (themeIndex.value + 1) % themes.length;
}

function toggleSize() {
  sizeIndex.value = (sizeIndex.value + 1) % sizes.length;
}

function toggleIcon() {
  iconIndex.value = (iconIndex.value + 1) % icons.length;
}

function toggleDisabled() {
  disabled.value = !disabled.value;
}

function toggleFullWidth() {
  fullWidth.value = !fullWidth.value;
}

</script>

<template>
  <div class="component">
    <h2>Button</h2>
    <div>
      <ifx-button type="button" aria-label="Button" :disabled="disabled" :variant="variant" :size="size" target="_blank" :theme="theme" :fullWidth="fullWidth"><ifx-icon :icon="icon"></ifx-icon>Button</ifx-button>
    </div>
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
      <div><b>Full Width:</b> {{ String(fullWidth) }}</div>
      <div><b>Disabled:</b> {{ String(disabled) }}</div>
      <div><b>Icon:</b> {{ icon }}</div>
    </div>
  </div>
</template>