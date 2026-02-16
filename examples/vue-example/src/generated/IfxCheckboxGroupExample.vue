<script setup lang="ts">
import { onMounted, nextTick } from 'vue';
import Prism from 'prismjs';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import { IfxCheckbox, IfxCheckboxGroup } from '@infineon/infineon-design-system-vue';

const handleSetGroupError = (event: CustomEvent) => {
  console.log('setGroupError:', event);
  // Add your handler logic here
};

const codeString = `<script setup lang="ts">
const handleSetGroupError = (event: CustomEvent) => {
  console.log('setGroupError:', event);
  // Add your handler logic here
};
${'</'}script>

<template>
  <div>
    <ifx-checkbox-group
      alignment="vertical"
      group-label-text="Group Label"
      caption-text="Caption text, description, error notification">
      <ifx-checkbox
        value="0"
        size="m">
        Option 0
      </ifx-checkbox>
      <ifx-checkbox
        value="1"
        size="m">
        Option 1
      </ifx-checkbox>
      <ifx-checkbox
        value="2"
        size="m">
        Option 2
      </ifx-checkbox>
    </ifx-checkbox-group>
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
    <ifx-checkbox-group
      alignment="vertical"
      group-label-text="Group Label"
      caption-text="Caption text, description, error notification">
      <ifx-checkbox
        value="0"
        size="m">
        Option 0
      </ifx-checkbox>
      <ifx-checkbox
        value="1"
        size="m">
        Option 1
      </ifx-checkbox>
      <ifx-checkbox
        value="2"
        size="m">
        Option 2
      </ifx-checkbox>
    </ifx-checkbox-group>
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
