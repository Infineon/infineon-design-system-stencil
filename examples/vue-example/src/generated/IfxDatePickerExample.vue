<script setup lang="ts">
import { onMounted, nextTick } from 'vue';
import Prism from 'prismjs';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
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
      error="false"
      disabled="false"
      size="s"
      success="false"
      value=""
      max=""
      min=""
      label="Label Text"
      caption="Caption text, description, error notification."
      aria-label="Date Picker"
      required="false"
      autocomplete="on"
      type="date"
      @ifxDate="handleDate" />
  </div>
${'</'}template>`;

onMounted(() => {
  nextTick(() => {
    Prism.highlightAll();
  });
});
</script>

<template>
  <div>
    <ifx-date-picker
      name="date-picker"
      error="false"
      disabled="false"
      size="s"
      success="false"
      value=""
      max=""
      min=""
      label="Label Text"
      caption="Caption text, description, error notification."
      aria-label="Date Picker"
      required="false"
      autocomplete="on"
      type="date"
      @ifxDate="handleDate" />
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
