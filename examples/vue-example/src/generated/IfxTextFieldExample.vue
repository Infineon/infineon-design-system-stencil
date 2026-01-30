<script setup lang="ts">
import { onMounted, nextTick } from 'vue';
import Prism from 'prismjs';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
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
      error="false"
      disabled="false"
      size="m"
      icon=""
      success="false"
      placeholder="Placeholder"
      read-only="false"
      caption="Caption"
      label="Label"
      required="true"
      name="text-field"
      show-delete-icon="false"
      value=""
      autocomplete="on"
      type="text"
      internal-id="text-field"
      aria-label="text field for user input"
      @ifxInput="handleInput" />
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
    <ifx-text-field
      error="false"
      disabled="false"
      size="m"
      icon=""
      success="false"
      placeholder="Placeholder"
      read-only="false"
      caption="Caption"
      label="Label"
      required="true"
      name="text-field"
      show-delete-icon="false"
      value=""
      autocomplete="on"
      type="text"
      internal-id="text-field"
      aria-label="text field for user input"
      @ifxInput="handleInput" />
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
