<script setup lang="ts">

import { IfxChip, IfxChipItem } from '@infineon/infineon-design-system-vue';

const codeString = `<script setup lang="ts">
${'</'}script>

<template>
  <div>
    <ifx-chip
      placeholder="Label"
      size="medium"
      variant="single"
      theme="outlined"
      icon=""
      aria-label="Chip">
      <ifx-chip-item value="Item Value 1">
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
      aria-label="Chip">
      <ifx-chip-item value="Item Value 1">
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
