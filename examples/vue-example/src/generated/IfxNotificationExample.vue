<script setup lang="ts">
import { onMounted, nextTick } from 'vue';
import Prism from 'prismjs';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import { IfxNotification } from '@infineon/infineon-design-system-vue';

const codeString = `<script setup lang="ts">
${'</'}script>

<template>
  <div>
    <ifx-notification
      icon="c-check-16"
      variant="success"
      link-text="Link"
      link-href="https://www.example.com"
      link-target="_blank">
      Sample Notification
    </ifx-notification>
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
    <ifx-notification
      icon="c-check-16"
      variant="success"
      link-text="Link"
      link-href="https://www.example.com"
      link-target="_blank">
      Sample Notification
    </ifx-notification>
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
