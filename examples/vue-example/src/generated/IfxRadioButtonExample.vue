<script setup lang="ts">

import { IfxRadioButton } from '@infineon/infineon-design-system-vue';

const handleChange = (event: CustomEvent) => {
  console.log('ifxChange:', event);
  // Add your handler logic here
};

const handleError = (event: CustomEvent) => {
  console.log('ifxError:', event);
  // Add your handler logic here
};

const codeString = `<script setup lang="ts">
const handleChange = (event: CustomEvent) => {
  console.log('ifxChange:', event);
  // Add your handler logic here
};

const handleError = (event: CustomEvent) => {
  console.log('ifxError:', event);
  // Add your handler logic here
};
${'</'}script>

<template>
  <div>
    <ifx-radio-button
      size="s"
      name="radio-button"
      value="radio"
      :error="false"
      :disabled="false"
      :checked="false"
      @ifxChange="handleChange"
      @ifxError="handleError">
      Text
    </ifx-radio-button>
  </div>
${'</'}template>`;

</script>

<template>
  <div>
    <ifx-radio-button
      size="s"
      name="radio-button"
      value="radio"
      :error="false"
      :disabled="false"
      :checked="false"
      @ifxChange="handleChange"
      @ifxError="handleError">
      Text
    </ifx-radio-button>
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
