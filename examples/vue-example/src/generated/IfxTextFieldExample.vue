<script setup lang="ts">

import { IfxTextField } from '@infineon/infineon-design-system-vue';

const codeString = `<script setup lang="ts">
${'</'}script>

<template>
  <div>
    <ifx-text-field
      :error="false"
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
      aria-label="text field for user input" />
  </div>
${'</'}template>`;

</script>

<template>
  <div>
    <ifx-text-field
      :error="false"
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
      aria-label="text field for user input" />
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
