<script setup lang="ts">
import { onMounted, nextTick } from 'vue';
import Prism from 'prismjs';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import { IfxContentSwitcher, IfxContentSwitcherItem, IfxIcon } from '@infineon/infineon-design-system-vue';

const handleChange = (event: CustomEvent) => {
  console.log('ifxChange:', event);
  // Add your handler logic here
};

const codeString = `<script setup lang="ts">
const handleChange = (event: CustomEvent) => {
  console.log('ifxChange:', event);
  // Add your handler logic here
};
${'</'}script>

<template>
  <div>
    <ifx-content-switcher>
      <ifx-content-switcher-item
        value="item 1"
        @ifxChange="handleChange">
        <ifx-icon icon="applications-16" />
      </ifx-content-switcher-item>
      <ifx-content-switcher-item value="item 2">
        <ifx-icon icon="applications-16" />
      </ifx-content-switcher-item>
      <ifx-content-switcher-item value="item 3">
        <ifx-icon icon="applications-16" />
      </ifx-content-switcher-item>
      <ifx-content-switcher-item value="item 4">
        <ifx-icon icon="applications-16" />
      </ifx-content-switcher-item>
    </ifx-content-switcher>
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
    <ifx-content-switcher>
      <ifx-content-switcher-item
        value="item 1"
        @ifxChange="handleChange">
        <ifx-icon icon="applications-16" />
      </ifx-content-switcher-item>
      <ifx-content-switcher-item value="item 2">
        <ifx-icon icon="applications-16" />
      </ifx-content-switcher-item>
      <ifx-content-switcher-item value="item 3">
        <ifx-icon icon="applications-16" />
      </ifx-content-switcher-item>
      <ifx-content-switcher-item value="item 4">
        <ifx-icon icon="applications-16" />
      </ifx-content-switcher-item>
    </ifx-content-switcher>
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
