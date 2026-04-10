<script setup lang="ts">

import { IfxSwitch } from '@infineon/infineon-design-system-vue';

const codeString = `<script setup lang="ts">
${'</'}script>

<template>
  <div>
    <ifx-switch
      name="switch"
      value="on">
      Switch
    </ifx-switch>
  </div>
${'</'}template>`;

</script>

<template>
  <div>
    <ifx-switch
      name="switch"
      value="on">
      Switch
    </ifx-switch>
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
