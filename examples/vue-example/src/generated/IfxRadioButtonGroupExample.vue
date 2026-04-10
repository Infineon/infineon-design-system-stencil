<script setup lang="ts">

import { IfxRadioButton, IfxRadioButtonGroup } from '@infineon/infineon-design-system-vue';

const codeString = `<script setup lang="ts">
${'</'}script>

<template>
  <div>
    <ifx-radio-button-group
      alignment="vertical"
      group-label-text="Group Label"
      caption-text="Caption text, description, error notification">
      <ifx-radio-button
        :value=0
        size="m">
        Option 0
      </ifx-radio-button>
      <ifx-radio-button
        :value=1
        size="m">
        Option 1
      </ifx-radio-button>
      <ifx-radio-button
        :value=2
        size="m">
        Option 2
      </ifx-radio-button>
    </ifx-radio-button-group>
  </div>
${'</'}template>`;

</script>

<template>
  <div>
    <ifx-radio-button-group
      alignment="vertical"
      group-label-text="Group Label"
      caption-text="Caption text, description, error notification">
      <ifx-radio-button
        :value=0
        size="m">
        Option 0
      </ifx-radio-button>
      <ifx-radio-button
        :value=1
        size="m">
        Option 1
      </ifx-radio-button>
      <ifx-radio-button
        :value=2
        size="m">
        Option 2
      </ifx-radio-button>
    </ifx-radio-button-group>
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
