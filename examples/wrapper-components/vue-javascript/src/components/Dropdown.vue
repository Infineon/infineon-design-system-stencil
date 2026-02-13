<script setup lang="ts">
import { ref } from "vue";

const disabled = ref(false);
const noCloseOnOutsideClick = ref(false);
const noCloseOnMenuClick = ref(false);
const sizes = ["m", "s"];
const variants = ["primary", "secondary", "tertiary"];
const placements = ["bottom-start", "auto", "auto-start", "auto-end", "top", "top-start", "top-end", "bottom", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"];

const size = ref(sizes[0]);
const variant = ref(variants[0]);
const placement = ref(placements[0]);

const next = <T,>(current: T, list: readonly T[]) => list[(list.indexOf(current) + 1) % list.length];

const toggleSize = () => (size.value = next(size.value, sizes));
const toggleVariant = () => (variant.value = next(variant.value, variants));
const togglePlacement = () => (placement.value = next(placement.value, placements));

function toggleDisabled() {
  disabled.value = !disabled.value;
}

function toggleNoCloseOnOutsideClick() {
  noCloseOnOutsideClick.value = !noCloseOnOutsideClick.value;
}

function toggleNoCloseOnMenuClick() {
  noCloseOnMenuClick.value = !noCloseOnMenuClick.value;
}

</script>

<template>
  <div class="component">
    <h2>Dropdown</h2>
    <div>
      <ifx-dropdown :placement="placement" :disabled="disabled" default-open="false"
        :noCloseOnOutsideClick="noCloseOnOutsideClick" :noCloseOnMenuClick="noCloseOnMenuClick"
        no-append-to-body="false">
        <ifx-dropdown-trigger-button :variant="variant">
          Dropdown
        </ifx-dropdown-trigger-button>

        <ifx-dropdown-menu :size="size">
          <ifx-dropdown-item icon="c-info-16" target="_self" href="">Menu Item</ifx-dropdown-item>
          <ifx-dropdown-item icon="c-info-16" target="_self" href="">Menu Item</ifx-dropdown-item>
          <ifx-dropdown-item icon="c-info-16" target="_self" href="">Menu Item</ifx-dropdown-item>
          <ifx-dropdown-item icon="c-info-16" target="_self" href="">Menu Item</ifx-dropdown-item>
          <ifx-dropdown-item icon="c-info-16" target="_self" href="">Menu Item</ifx-dropdown-item>
        </ifx-dropdown-menu>
      </ifx-dropdown>
    </div>
    <br>
    <br>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" @click="toggleDisabled">Toggle Disabled</ifx-button>
      <ifx-button variant="secondary" @click="toggleSize">Toggle Size of Dropdown Items</ifx-button>
      <ifx-button variant="secondary" @click="toggleVariant">Toggle Variant</ifx-button>
      <ifx-button variant="secondary" @click="togglePlacement">Toggle Placement</ifx-button>
      <ifx-button variant="secondary" @click="toggleNoCloseOnOutsideClick">Toggle No Close on Outside Click</ifx-button>
      <ifx-button variant="secondary" @click="toggleNoCloseOnMenuClick">Toggle No Close on Menu Click</ifx-button>
    </div>
    <br>

    <div class="state">
      <div><b>Disabled:</b> {{ disabled }} </div>
      <div><b>Variant:</b> {{ variant }} </div>
      <div><b>Size of dropdown items:</b> {{ size }} </div>
      <div><b>Placement:</b> {{ placement }} </div>
      <div><b>No Close on Outside Click:</b> {{ noCloseOnOutsideClick }} </div>
      <div><b>No Close on Menu Click:</b> {{ noCloseOnMenuClick }} </div>
    </div>
  </div>
</template>