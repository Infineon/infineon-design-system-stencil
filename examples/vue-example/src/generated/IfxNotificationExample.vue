<script setup lang="ts">

import { IfxNotification } from '@infineon/infineon-design-system-vue';

const handleClose = (event: CustomEvent) => {
  console.log('ifxClose:', event);
  // Add your handler logic here
};

const codeString = `<script setup lang="ts">
const handleClose = (event: CustomEvent) => {
  console.log('ifxClose:', event);
  // Add your handler logic here
};
${'</'}script>

<template>
  <div>
    <ifx-notification
      icon="c-check-16"
      variant="success"
      link-text="Link"
      link-href="https://www.example.com"
      link-target="_blank"
      :closable="false"
      @ifxClose="handleClose">
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
      link-target="_blank"
      :closable="false"
      @ifxClose="handleClose">
      Sample Notification
    </ifx-notification>
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
