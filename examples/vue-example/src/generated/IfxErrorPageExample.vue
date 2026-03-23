<script setup lang="ts">

import { IfxErrorPage } from '@infineon/infineon-design-system-vue';

const codeString = `<script setup lang="ts">
${'</'}script>

<template>
  <div>
    <ifx-error-page
      illustration-url=""
      alt="ERROR 404"
      type="ERROR 404"
      headline="The requested page cannot be found"
      description="The page you requested does not exist. Please check the URL entered or use the navigation to find what you are looking for.">
      <h1>
        cenas
      </h1>
    </ifx-error-page>
  </div>
${'</'}template>`;

</script>

<template>
  <div>
    <ifx-error-page
      illustration-url=""
      alt="ERROR 404"
      type="ERROR 404"
      headline="The requested page cannot be found"
      description="The page you requested does not exist. Please check the URL entered or use the navigation to find what you are looking for.">
      <h1>
        cenas
      </h1>
    </ifx-error-page>
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
