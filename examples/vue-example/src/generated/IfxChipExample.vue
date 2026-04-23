<script setup lang="ts">

import { IfxChip, IfxChipItem } from '@infineon/infineon-design-system-vue';

const handleChange = (event: CustomEvent) => {
  console.log('ifxChange:', event);
  // Add your handler logic here
};

const handleChipItemSelect = (event: CustomEvent) => {
  console.log('ifxChipItemSelect:', event);
  // Add your handler logic here
};

const codeString = `<script setup lang="ts">
const handleChange = (event: CustomEvent) => {
  console.log('ifxChange:', event);
  // Add your handler logic here
};

const handleChipItemSelect = (event: CustomEvent) => {
  console.log('ifxChipItemSelect:', event);
  // Add your handler logic here
};
${'</'}script>

<template>
  <div>
    <ifx-chip
      placeholder="Label"
      size="medium"
      variant="single"
      theme="outlined"
      icon=""
      :read-only="false"
      aria-label="Chip"
      :disabled="false"
      value="Item Value">
      <ifx-chip-item
        value="Item Value 1"
        @ifxChange="handleChange"
        @ifxChipItemSelect="handleChipItemSelect">
        Item Label 1
      </ifx-chip-item>
      <ifx-chip-item value="Item Value 2">
        Item Label 2
      </ifx-chip-item>
      <ifx-chip-item value="Item Value 3">
        Item Label 3
      </ifx-chip-item>
      <ifx-chip-item value="Item Value 4">
        Item Label 4
      </ifx-chip-item>
    </ifx-chip>
  </div>
${'</'}template>`;

</script>

<template>
  <div>
    <ifx-chip
      placeholder="Label"
      size="medium"
      variant="single"
      theme="outlined"
      icon=""
      :read-only="false"
      aria-label="Chip"
      :disabled="false"
      value="Item Value">
      <ifx-chip-item
        value="Item Value 1"
        @ifxChange="handleChange"
        @ifxChipItemSelect="handleChipItemSelect">
        Item Label 1
      </ifx-chip-item>
      <ifx-chip-item value="Item Value 2">
        Item Label 2
      </ifx-chip-item>
      <ifx-chip-item value="Item Value 3">
        Item Label 3
      </ifx-chip-item>
      <ifx-chip-item value="Item Value 4">
        Item Label 4
      </ifx-chip-item>
    </ifx-chip>
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
