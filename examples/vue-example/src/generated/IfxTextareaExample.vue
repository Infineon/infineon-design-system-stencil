<script setup lang="ts">

import { IfxButton, IfxTextField, IfxTextarea } from '@infineon/infineon-design-system-vue';

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
    <ifx-textarea
      caption="Caption text, description, error notification"
      :cols=43
      :error="false"
      label="Label Text"
      name="textarea"
      placeholder="Placeholder"
      :required="true"
      :read-only="false"
      resize="both"
      :rows=5
      value=""
      wrap="soft"
      :full-width="false"
      :disabled="false"
      @ifxInput="handleInput" />
  </div>
${'</'}template>`.replace("__CONTROLLED_ATTRS__", controlledAttrsCode);

const codeString = codeStringWithAttrs;

</script>

<template>
  <div>
    <ifx-textarea
      caption="Caption text, description, error notification"
      :cols=43
      :error="false"
      label="Label Text"
      name="textarea"
      placeholder="Placeholder"
      :required="true"
      :read-only="false"
      resize="both"
      :rows=5
      value=""
      wrap="soft"
      :full-width="false"
      :disabled="false"
      @ifxInput="handleInput" />
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
