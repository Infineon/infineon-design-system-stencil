<script setup lang="ts">

import { IfxCheckbox, IfxCheckboxGroup } from '@infineon/infineon-design-system-vue';

const handleChange = (event: CustomEvent) => {
  console.log('ifxChange:', event);
  // Add your handler logic here
};

const handleError = (event: CustomEvent) => {
  console.log('ifxError:', event);
  // Add your handler logic here
};

const codeString = `<script setup lang="ts">
const handleChange = (event: CustomEvent) => {
  console.log('ifxChange:', event);
  // Add your handler logic here
};

const handleError = (event: CustomEvent) => {
  console.log('ifxError:', event);
  // Add your handler logic here
};
${'</'}script>

<template>
  <div>
    <ifx-checkbox-group
      alignment="vertical"
      group-label-text="Group Label"
      caption-text="Caption text, description, error notification"
      size="m"
      :show-group-label="false"
      :show-caption="false"
      :show-caption-icon="false"
      :required="false">
      <ifx-checkbox
        :value=0
        size="m">
        Option 0
      </ifx-checkbox>
      <ifx-checkbox
        :value=1
        size="m">
        Option 1
      </ifx-checkbox>
      <ifx-checkbox
        :value=2
        size="m">
        Option 2
      </ifx-checkbox>
    </ifx-checkbox-group>
  </div>
${'</'}template>`;

</script>

<template>
  <div>
    <ifx-checkbox-group
      alignment="vertical"
      group-label-text="Group Label"
      caption-text="Caption text, description, error notification"
      size="m"
      :show-group-label="false"
      :show-caption="false"
      :show-caption-icon="false"
      :required="false">
      <ifx-checkbox
        :value=0
        size="m">
        Option 0
      </ifx-checkbox>
      <ifx-checkbox
        :value=1
        size="m">
        Option 1
      </ifx-checkbox>
      <ifx-checkbox
        :value=2
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
