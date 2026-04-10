<script setup lang="ts">

import { IfxButton, IfxErrorPage } from '@infineon/infineon-design-system-vue';

const codeString = `<script setup lang="ts">
${'</'}script>

<template>
  <div>
    <ifx-error-page
      alt=""
      :type=403
      headline=""
      description=""
      illustration-url="">
      <div slot="button">
        <ifx-button
          slot="button"
          variant="primary"
          :full-width="true">
          Button Custom 1
        </ifx-button>
      </div>
      <div slot="button">
        <ifx-button
          slot="button"
          variant="secondary"
          :full-width="true">
          Button Custom 2
        </ifx-button>
      </div>
    </ifx-error-page>
  </div>
${'</'}template>`;

</script>

<template>
  <div>
    <ifx-error-page
      alt=""
      :type=403
      headline=""
      description=""
      illustration-url="">
      <div slot="button">
        <ifx-button
          slot="button"
          variant="primary"
          :full-width="true">
          Button Custom 1
        </ifx-button>
      </div>
      <div slot="button">
        <ifx-button
          slot="button"
          variant="secondary"
          :full-width="true">
          Button Custom 2
        </ifx-button>
      </div>
    </ifx-error-page>
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
