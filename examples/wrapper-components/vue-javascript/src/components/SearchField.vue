<script setup lang="ts">
import { ref } from "vue";

const disabled = ref(false);
const deleteIcon = ref(true);
const sizes = ["s", "m"];

const size = ref(sizes[1]);

const next = <T,>(current: T, list: readonly T[]) => list[(list.indexOf(current) + 1) % list.length];

const toggleSize = () => (size.value = next(size.value, sizes));

function toggleDisabled() {
  disabled.value = !disabled.value;
}

function toggleDeleteIcon() {
  deleteIcon.value = !deleteIcon.value;
}

</script>

<template>
  <div class="component">
    <h2>Search Field</h2>
    <ifx-search-field :size="size" :disabled="disabled" :showDeleteIcon="deleteIcon" show-suggestions="false"
    enable-history="true" max-suggestions="10" max-history-items="5" history-key="ifx-search-history"
    history-header-text="Recent Searches" value="" autocomplete="on" placeholder="Search..." aria-label="Search field"
    delete-icon-aria-label="Clear search" history-delete-aria-label="Remove from history"
    dropdown-aria-label="Search suggestions and history" suggestion-aria-label="Search suggestion"
    history-item-aria-label="Search history item">
</ifx-search-field>
    <br>
    <br>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" @click="toggleDisabled">Toggle Disabled</ifx-button>
      <ifx-button variant="secondary" @click="toggleDeleteIcon">Toggle Delete Icon</ifx-button>
      <ifx-button variant="secondary" @click="toggleSize">Toggle Size</ifx-button>
    </div>
    <br>

    <div class="state">
      <div><b>Disabled:</b> {{ disabled }} </div>
    <div><b>Delete Icon:</b> {{ deleteIcon }} </div>
    <div><b>Size:</b> {{ size }} </div>
    </div>
  </div>
</template>