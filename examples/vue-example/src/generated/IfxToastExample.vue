<script setup lang="ts">

import { IfxToast } from '@infineon/design-system-vue';

const handleToastAction = (event: CustomEvent) => {
  console.log('ifxToastAction:', event);
  // Add your handler logic here
};

const handleToastClose = (event: CustomEvent) => {
  console.log('ifxToastClose:', event);
  // Add your handler logic here
};

const handleToastOpen = (event: CustomEvent) => {
  console.log('ifxToastOpen:', event);
  // Add your handler logic here
};

const codeString = `<script setup lang="ts">
const handleToastAction = (event: CustomEvent) => {
  console.log('ifxToastAction:', event);
  // Add your handler logic here
};

const handleToastClose = (event: CustomEvent) => {
  console.log('ifxToastClose:', event);
  // Add your handler logic here
};

const handleToastOpen = (event: CustomEvent) => {
  console.log('ifxToastOpen:', event);
  // Add your handler logic here
};
${'</'}script>

<template>
  <div>
    <ifx-toast
      toast-id=""
      status="success"
      message="Insert information text here"
      action-text="Dismiss"
      :duration=0
      @ifxToastAction="handleToastAction"
      @ifxToastClose="handleToastClose"
      @ifxToastOpen="handleToastOpen" />
  </div>
${'</'}template>`;

</script>

<template>
  <div>
    <ifx-toast
      toast-id=""
      status="success"
      message="Insert information text here"
      action-text="Dismiss"
      :duration=0
      @ifxToastAction="handleToastAction"
      @ifxToastClose="handleToastClose"
      @ifxToastOpen="handleToastOpen" />
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
