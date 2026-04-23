<script setup lang="ts">

import { IfxButton, IfxSegment, IfxSegmentedControl, IfxTextField } from '@infineon/infineon-design-system-vue';

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
    <ifx-segmented-control __CONTROLLED_ATTRS__>
      <ifx-segment
        value="Value1"
        :icon="String(controlledProps.icon ?? '')" />
      <ifx-segment
        value="Value2"
        :icon="String(controlledProps.icon ?? '')" />
      <ifx-segment
        value="Value3"
        :icon="String(controlledProps.icon ?? '')" />
      <ifx-segment
        value="Value4"
        :icon="String(controlledProps.icon ?? '')" />
      <ifx-segment
        value="Value5"
        :icon="String(controlledProps.icon ?? '')" />
    </ifx-segmented-control>
  </div>
${'</'}template>`.replace("__CONTROLLED_ATTRS__", controlledAttrsCode);

const codeString = codeStringWithAttrs;

</script>

<template>
  <div>
    <ifx-segmented-control v-bind="controlledProps">
      <ifx-segment
        value="Value1"
        :icon="String(controlledProps.icon ?? '')" />
      <ifx-segment
        value="Value2"
        :icon="String(controlledProps.icon ?? '')" />
      <ifx-segment
        value="Value3"
        :icon="String(controlledProps.icon ?? '')" />
      <ifx-segment
        value="Value4"
        :icon="String(controlledProps.icon ?? '')" />
      <ifx-segment
        value="Value5"
        :icon="String(controlledProps.icon ?? '')" />
    </ifx-segmented-control>
    <h3 class="controls-title">Controls</h3>
	<div class="controls controls-toggle">
      <IfxButton variant="secondary" @click="toggleSize">Toggle Size</IfxButton>
      <IfxButton variant="secondary" @click="toggleIcon">Toggle Icon</IfxButton>
      <IfxButton variant="secondary" @click="toggleSelected">Toggle Selected</IfxButton>
      <IfxButton variant="secondary" @click="toggleError">Toggle Error</IfxButton>
      <IfxButton variant="secondary" @click="toggleRequired">Toggle Required</IfxButton>
    </div>
	<div class="controls controls-input">
      <IfxTextField label="amountOfSegments" type="number" :value="String(amountOfSegments)" @input="toggleAmountOfSegments" @ifxInput="toggleAmountOfSegments" />
      <IfxTextField label="labelOfSegment" type="text" :value="String(labelOfSegment)" @input="toggleLabelOfSegment" @ifxInput="toggleLabelOfSegment" />
      <IfxTextField label="caption" type="text" :value="String(caption)" @input="toggleCaption" @ifxInput="toggleCaption" />
      <IfxTextField label="label" type="text" :value="String(label)" @input="toggleLabel" @ifxInput="toggleLabel" />
      <IfxTextField label="value" type="text" :value="String(value)" @input="toggleValue" @ifxInput="toggleValue" />
      <IfxTextField label="ifxChange" type="text" :value="String(ifxChange)" @input="toggleIfxChange" @ifxInput="toggleIfxChange" />
    </div>

    <div class="state">
        <div><b>amountOfSegments:</b> {{ String(amountOfSegments) }}</div>
        <div><b>labelOfSegment:</b> {{ String(labelOfSegment) }}</div>
        <div><b>caption:</b> {{ String(caption) }}</div>
        <div><b>label:</b> {{ String(label) }}</div>
        <div><b>size:</b> {{ String(sizeOptions[sizeIndex]) }}</div>
        <div><b>icon:</b> {{ String(iconOptions[iconIndex]) }}</div>
        <div><b>selected:</b> {{ String(selected) }}</div>
        <div><b>value:</b> {{ String(value) }}</div>
        <div><b>error:</b> {{ String(error) }}</div>
        <div><b>required:</b> {{ String(required) }}</div>
        <div><b>ifxChange:</b> {{ String(ifxChange) }}</div>
    </div>

    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
