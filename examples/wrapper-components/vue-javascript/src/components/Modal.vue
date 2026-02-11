<script setup lang="ts">
import { computed, ref } from "vue";

const variants = ["default", "alert-brand", "alert-danger"];
const variantIndex = ref(0);
const variant = computed(() => variants[variantIndex.value]);

const sizes = ["s", "m", "l"];
const sizeIndex = ref(1);
const size = computed(() => sizes[sizeIndex.value]);

const closeButton = ref(true);

function toggleVariant() {
  variantIndex.value = (variantIndex.value + 1) % variants.length;
}

function toggleSize() {
  sizeIndex.value = (sizeIndex.value + 1) % sizes.length;
}

function toggleCloseButton() {
  closeButton.value = !closeButton.value;
}

</script>

<template>
  <div class="component">
    <h2>Modal</h2>
    <div>
      <ifx-modal caption="Modal Title" caption-aria-label="Additional information for caption"
        close-button-aria-label="Close modal" :variant="variant" close-on-overlay-click="false"
        :showCloseButton="closeButton" :size="size">
        <div slot="content">
          <div>Modal content</div>
        </div>
        <div slot="buttons">
          <ifx-button variant="secondary">Cancel</ifx-button>
          <ifx-button>OK</ifx-button>
        </div>
      </ifx-modal>
      <ifx-button id="open">Open Modal</ifx-button>
    </div>
    <br>
    <br>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" @click="toggleVariant">Toggle Variant</ifx-button>
      <ifx-button variant="secondary" @click="toggleSize">Toggle Size</ifx-button>
      <ifx-button variant="secondary" @click="toggleCloseButton">Toggle Close Button</ifx-button>
    </div>
    <br>

    <div class="state">
      <div><b>Variant:</b> {{ variant }} </div>
      <div><b>Size:</b> {{ size }}</div>
      <div><b>Close Button:</b> {{ closeButton }}</div>
    </div>
  </div>
</template>