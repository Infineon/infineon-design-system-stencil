<script setup lang="ts">
import { onMounted, nextTick } from 'vue';
import Prism from 'prismjs';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import { IfxTextarea } from '@infineon/infineon-design-system-vue';

const codeString = `<script setup lang="ts">
${'</'}script>

<template>
  <div>
    <ifx-textarea
      caption="Caption text, description, error notification"
      cols="43"
      disabled="false"
      error="false"
      label="Label Text"
      name="textarea"
      placeholder="Placeholder"
      required="true"
      read-only="false"
      resize="both"
      rows="5"
      value=""
      wrap="soft"
      full-width="false" />
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
    <ifx-textarea
      caption="Caption text, description, error notification"
      cols="43"
      disabled="false"
      error="false"
      label="Label Text"
      name="textarea"
      placeholder="Placeholder"
      required="true"
      read-only="false"
      resize="both"
      rows="5"
      value=""
      wrap="soft"
      full-width="false" />
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
