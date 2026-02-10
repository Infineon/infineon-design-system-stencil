<script setup lang="ts">
import { computed, ref } from "vue";

const disabled = ref(false);

function toggleDisabled() {
  disabled.value = !disabled.value;
}
</script>

<template>
  <div class="component">
    <h2>Action List</h2>
    <ifx-action-list list-aria-label="Interactive list with checkboxes">
      <ifx-action-list-item item-title="Enable notifications" description="Receive notifications for important updates"
        value="notifications" :disabled="disabled" item-aria-label="Interactive item">
        <ifx-checkbox slot="leading" checked="false"></ifx-checkbox>
      </ifx-action-list-item>

      <ifx-action-list-item item-title="Auto-save documents" description="Automatically save your work" value="autosave"
        :disabled="disabled" item-aria-label="Interactive item">
        <ifx-checkbox slot="leading" checked="false"></ifx-checkbox>
      </ifx-action-list-item>

      <ifx-action-list-item item-title="Enable backups" description="Create automatic backups" value="backups"
        :disabled="disabled" item-aria-label="Interactive item">
        <ifx-checkbox slot="leading" checked="false"></ifx-checkbox>
      </ifx-action-list-item>
    </ifx-action-list>
    <br>
    <br>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" @click="toggleDisabled">Toggle Disabled</ifx-button>
    </div>
    <br>

    <div class="state">
      <div><b>Disabled:</b> {{ String(disabled) }}</div>
    </div>
  </div>
</template>