<script setup lang="ts">

import { IfxCheckbox } from '@infineon/infineon-design-system-vue';

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
    <ifx-checkbox
      :error="false"
      :disabled="false"
      :read-only="false"
      :checked="false"
      size="s"
      :indeterminate="false"
      name="checkbox"
      @ifxChange="handleChange"
      @ifxError="handleError">
      Text
    </ifx-checkbox>
  </div>
${'</'}template>`;

</script>

<template>
  <div>
    <ifx-checkbox
      :error="false"
      :disabled="false"
      :read-only="false"
      :checked="false"
      size="s"
      :indeterminate="false"
      name="checkbox"
      @ifxChange="handleChange"
      @ifxError="handleError">
      Text
    </ifx-checkbox>
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
