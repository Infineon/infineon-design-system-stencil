<script setup lang="ts">

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
