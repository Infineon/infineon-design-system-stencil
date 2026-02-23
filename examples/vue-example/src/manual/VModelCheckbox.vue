<script setup lang="ts">
import { onMounted, nextTick, ref } from 'vue';
import Prism from 'prismjs';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import { IfxCheckbox } from '@infineon/infineon-design-system-vue';


const checked = ref(false);

const codeString = `<script setup lang="ts">

${'</'}script>

<template>
  <div>
    <ifx-checkbox v-model="checked">Checkbox 1</ifx-checkbox>
    <ifx-checkbox v-model="checked">Checkbox 2</ifx-checkbox>
  </div>
${'</'}template>`;

onMounted(() => {
  nextTick(() => {
    Prism.highlightAll();
  });
});
</script>

<template>
  <div class="checkbox-container">
    <ifx-checkbox
      v-model="checked">
        Checkbox 1
    </ifx-checkbox>
    <ifx-checkbox
      v-model="checked">
        Checkbox 2
    </ifx-checkbox>
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
<style>
.checkbox-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>