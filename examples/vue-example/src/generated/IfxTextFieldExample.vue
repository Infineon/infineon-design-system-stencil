<script setup lang="ts">

import { IfxTextField } from '@infineon/infineon-design-system-vue';

const handleInput = (event: CustomEvent) => {
  console.log('ifxInput:', event);
  // Add your handler logic here
};

const codeString = `<script setup lang="ts">
const handleInput = (event: CustomEvent) => {
  console.log('ifxInput:', event);
  // Add your handler logic here
};
${'</'}script>

<template>
  <div>
    <ifx-text-field
      :error="false"
      :disabled="false"
      size="m"
      icon=""
      :success="false"
      placeholder="Placeholder"
      :read-only="false"
      caption="Caption"
      label="Label"
      :required="true"
      name="text-field"
      :show-delete-icon="false"
      value=""
      autocomplete="on"
      type="text"
      internal-id="text-field"
      aria-label="text field for user input"
      maxlength=""
      @ifxInput="handleInput" />
  </div>
${'</'}template>`;

</script>

<template>
  <div>
    <ifx-text-field
      :error="false"
      :disabled="false"
      size="m"
      icon=""
      :success="false"
      placeholder="Placeholder"
      :read-only="false"
      caption="Caption"
      label="Label"
      :required="true"
      name="text-field"
      :show-delete-icon="false"
      value=""
      autocomplete="on"
      type="text"
      internal-id="text-field"
      aria-label="text field for user input"
      maxlength=""
      @ifxInput="handleInput" />
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
