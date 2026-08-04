<script setup lang="ts">

import { IfxDatePicker } from '@infineon/infineon-design-system-vue';

const handleDate = (event: CustomEvent) => {
  console.log('ifxDate:', event);
  // Add your handler logic here
};

const codeString = `<script setup lang="ts">
const handleDate = (event: CustomEvent) => {
  console.log('ifxDate:', event);
  // Add your handler logic here
};
${'</'}script>

<template>
  <div>
    <ifx-date-picker
      name="date-picker"
      :error="false"
      :disabled="false"
      :read-only="false"
      size="s"
      :success="false"
      value=""
      max=""
      min=""
      label="Label Text"
      caption="Caption text, description, error notification."
      aria-label-text="Date Picker"
      :required="false"
      autocomplete="on"
      type="date"
      @ifxDate="handleDate" />
  </div>
${'</'}template>`;

</script>

<template>
  <div>
    <ifx-date-picker
      name="date-picker"
      :error="false"
      :disabled="false"
      :read-only="false"
      size="s"
      :success="false"
      value=""
      max=""
      min=""
      label="Label Text"
      caption="Caption text, description, error notification."
      aria-label-text="Date Picker"
      :required="false"
      autocomplete="on"
      type="date"
      @ifxDate="handleDate" />
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
