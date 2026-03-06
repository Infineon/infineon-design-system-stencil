<script setup lang="ts">

import { IfxRadioButton, IfxRadioButtonGroup } from '@infineon/infineon-design-system-vue';

const handleSetGroupError = (event: CustomEvent) => {
  console.log('setGroupError:', event);
  // Add your handler logic here
};

const codeString = `<script setup lang="ts">
const handleSetGroupError = (event: CustomEvent) => {
  console.log('setGroupError:', event);
  // Add your handler logic here
};
${'</'}script>

<template>
  <div>
    <ifx-radio-button-group
      alignment="vertical"
      group-label-text="Group Label"
      caption-text="Caption text, description, error notification"
      size="m"
      :show-group-label="false"
      :show-caption="false"
      :show-caption-icon="false"
      :required="false">
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
      caption-text="Caption text, description, error notification"
      size="m"
      :show-group-label="false"
      :show-caption="false"
      :show-caption-icon="false"
      :required="false">
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
