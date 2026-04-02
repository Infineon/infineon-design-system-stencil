<script setup lang="ts">

import { IfxCheckbox, IfxCheckboxGroup } from '@infineon/infineon-design-system-vue';

const codeString = `<script setup lang="ts">
${'</'}script>

<template>
  <div>
    <ifx-checkbox-group
      alignment="vertical"
      group-label-text="Group Label"
      caption-text="Caption text, description, error notification">
      <ifx-checkbox
        :value=0
        size="m">
        Option 0
      </ifx-checkbox>
      <ifx-checkbox
        :value=1
        size="m">
        Option 1
      </ifx-checkbox>
      <ifx-checkbox
        :value=2
        size="m">
        Option 2
      </ifx-checkbox>
    </ifx-checkbox-group>
  </div>
${'</'}template>`;

</script>

<template>
  <div>
    <ifx-checkbox-group
      alignment="vertical"
      group-label-text="Group Label"
      caption-text="Caption text, description, error notification">
      <ifx-checkbox
        :value=0
        size="m">
        Option 0
      </ifx-checkbox>
      <ifx-checkbox
        :value=1
        size="m">
        Option 1
      </ifx-checkbox>
      <ifx-checkbox
        :value=2
        size="m">
        Option 2
      </ifx-checkbox>
    </ifx-checkbox-group>
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
