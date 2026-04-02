<script setup lang="ts">

import { IfxContentSwitcher, IfxContentSwitcherItem, IfxIcon } from '@infineon/infineon-design-system-vue';

const codeString = `<script setup lang="ts">
${'</'}script>

<template>
  <div>
    <ifx-content-switcher>
      <ifx-content-switcher-item value="item 1">
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

</script>

<template>
  <div>
    <ifx-content-switcher>
      <ifx-content-switcher-item value="item 1">
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
