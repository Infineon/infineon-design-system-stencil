<script setup lang="ts">
import { onMounted, nextTick } from 'vue';
import Prism from 'prismjs';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import { IfxTooltip } from '@infineon/infineon-design-system-vue';

const codeString = `<script setup lang="ts">
${'</'}script>

<template>
  <div>
    <ifx-tooltip
      text="Hi, I'm a tooltip"
      variant="compact"
      position="auto"
      icon="c-info-16"
      aria-label="Tooltip with important information">
      I'm the tooltip reference element - Please hover me
    </ifx-tooltip>
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
    <ifx-tooltip
      text="Hi, I'm a tooltip"
      variant="compact"
      position="auto"
      icon="c-info-16"
      aria-label="Tooltip with important information">
      I'm the tooltip reference element - Please hover me
    </ifx-tooltip>
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
