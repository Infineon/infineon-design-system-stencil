<script setup lang="ts">

import { IfxSwitch } from '@infineon/infineon-design-system-vue';

const handleChange = (event: CustomEvent) => {
  console.log('ifxChange:', event);
  // Add your handler logic here
};

const codeString = `<script setup lang="ts">
const handleChange = (event: CustomEvent) => {
  console.log('ifxChange:', event);
  // Add your handler logic here
};
${'</'}script>

<template>
  <div>
    <ifx-switch
      name="switch"
      value="on"
      :checked="false"
      :disabled="false"
      :read-only="false"
      @ifxChange="handleChange">
      Switch
    </ifx-switch>
  </div>
${'</'}template>`;

</script>

<template>
  <div>
    <ifx-switch
      name="switch"
      value="on"
      :checked="false"
      :disabled="false"
      :read-only="false"
      @ifxChange="handleChange">
      Switch
    </ifx-switch>
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
