<script setup lang="ts">

import { IfxButton, IfxSearchBar } from '@infineon/infineon-design-system-vue';

import { computed, ref } from 'vue';

const isOpen = ref(true);
const disabled = ref(false);

const toggleIsOpen = () => (isOpen.value = !isOpen.value);
const toggleDisabled = () => (disabled.value = !disabled.value);

const controlledProps = computed(() => ({
  "isOpen": isOpen.value,
  "disabled": disabled.value,
}));

const handleInput = (event: CustomEvent) => {
  console.log('ifxInput:', event);
  // Add your handler logic here
};

const handleOpen = (event: CustomEvent) => {
  console.log('ifxOpen:', event);
  // Add your handler logic here
};

const formatAttrValueForCode = (value: unknown): string => {
  if (typeof value === "boolean") return String(value);
  if (typeof value === "number") return String(value);
  if (value === null) return "null";
  if (Array.isArray(value) || (typeof value === "object" && value !== null)) {
    return JSON.stringify(value);
  }
  return String(value).replace(/"/g, '&quot;');
};

const controlledAttrsCode = [
  ["isOpen", controlledProps.value["isOpen"]],
  ["disabled", controlledProps.value["disabled"]],
]
	.map(([name, value]) => '      ' + String(name) + '="' + formatAttrValueForCode(value) + '"')
  .join("\n");

const codeString = `<script setup lang="ts">
const handleInput = (event: CustomEvent) => {
  console.log('ifxInput:', event);
  // Add your handler logic here
};

const handleOpen = (event: CustomEvent) => {
  console.log('ifxOpen:', event);
  // Add your handler logic here
};
${'</'}script>

<template>
  <div>
    <ifx-search-bar
      value=""
      autocomplete="on"
      @ifxInput="handleInput"
      @ifxOpen="handleOpen"
      __CONTROLLED_ATTRS__ />
  </div>
${'</'}template>`.replace("__CONTROLLED_ATTRS__", controlledAttrsCode);

</script>

<template>
  <div>
    <ifx-search-bar
      value=""
      autocomplete="on"
      @ifxInput="handleInput"
      @ifxOpen="handleOpen"
      v-bind="controlledProps" />
    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <IfxButton variant="secondary" @click="toggleIsOpen">Toggle IsOpen</IfxButton>
      <IfxButton variant="secondary" @click="toggleDisabled">Toggle Disabled</IfxButton>
    </div>

    <div class="state">
        <div><b>isOpen:</b> {{ String(isOpen.value) }}</div>
        <div><b>disabled:</b> {{ String(disabled.value) }}</div>
    </div>

    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
