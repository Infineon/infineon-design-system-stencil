<script setup lang="ts">

import { IfxSegment, IfxSegmentedControl } from '@infineon/infineon-design-system-vue';

const handleChange = (event: CustomEvent) => {
  console.log('ifxChange:', event);
  // Add your handler logic here
};

const handleSegmentSelect = (event: CustomEvent) => {
  console.log('segmentSelect:', event);
  // Add your handler logic here
};

const codeString = `<script setup lang="ts">
const handleChange = (event: CustomEvent) => {
  console.log('ifxChange:', event);
  // Add your handler logic here
};

const handleSegmentSelect = (event: CustomEvent) => {
  console.log('segmentSelect:', event);
  // Add your handler logic here
};
${'</'}script>

<template>
  <div>
    <ifx-segmented-control
      caption="Caption text to describe the controls"
      label="Group Label"
      size="regular"
      :error="false"
      :required="false">
      <ifx-segment
        value="Value1"
        icon="star-16" />
      <ifx-segment
        value="Value2"
        icon="star-16" />
      <ifx-segment
        value="Value3"
        icon="star-16" />
      <ifx-segment
        value="Value4"
        icon="star-16" />
      <ifx-segment
        value="Value5"
        icon="star-16" />
    </ifx-segmented-control>
  </div>
${'</'}template>`;

</script>

<template>
  <div>
    <ifx-segmented-control
      caption="Caption text to describe the controls"
      label="Group Label"
      size="regular"
      :error="false"
      :required="false">
      <ifx-segment
        value="Value1"
        icon="star-16" />
      <ifx-segment
        value="Value2"
        icon="star-16" />
      <ifx-segment
        value="Value3"
        icon="star-16" />
      <ifx-segment
        value="Value4"
        icon="star-16" />
      <ifx-segment
        value="Value5"
        icon="star-16" />
    </ifx-segmented-control>
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
