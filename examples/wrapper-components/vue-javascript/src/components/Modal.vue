<script setup lang="ts">
import { ref } from "vue";

const closeButton = ref(true);
const variants = ["default", "alert-brand", "alert-danger"];
const sizes = ["s", "m", "l"];

const modalRef = ref<HTMLElement | null>(null);
  function openModal() {
  if (modalRef.value) {
    (modalRef.value as any).opened = true;
  }
}

const variant = ref(variants[0]);
const size = ref(sizes[0]);

const next = <T,>(current: T, list: readonly T[]) => list[(list.indexOf(current) + 1) % list.length];

const toggleVariant = () => (variant.value = next(variant.value, variants));
const toggleSize = () => (size.value = next(size.value, sizes));

function toggleCloseButton() {
  closeButton.value = !closeButton.value;
}
</script>

<template>
  <div class="component">
    <h2>Modal</h2>
    <div>
      <ifx-modal ref="modalRef" caption="Modal Title" caption-aria-label="Additional information for caption"
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
      <ifx-button id="open" @click="openModal">Open Modal</ifx-button>
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