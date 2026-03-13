<script setup lang="ts">

import { IfxTextarea } from '@infineon/infineon-design-system-vue';

const codeString = `<script setup lang="ts">
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
      :disabled="false" />
  </div>
${'</'}template>`;

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
      :disabled="false" />
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
