<script setup lang="ts">

import { IfxButton, IfxSearchBar, IfxTextField } from '@infineon/infineon-design-system-vue';

import { computed, ref } from 'vue';

const isOpen = ref(true);
const disabled = ref(false);
const value = ref("");
const autocomplete = ref("on");
const maxlength = ref(0);

const toggleIsOpen = () => (isOpen.value = !isOpen.value);
const toggleDisabled = () => (disabled.value = !disabled.value);
const toggleValue = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; value.value = String(raw); };
const toggleAutocomplete = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; autocomplete.value = String(raw); };
const toggleMaxlength = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; maxlength.value = Number(raw); };

const controlledProps = computed(() => ({
  "isOpen": isOpen.value,
  "disabled": disabled.value,
  "value": value.value,
  "autocomplete": autocomplete.value,
  "maxlength": maxlength.value,
}));
const boundProps = controlledProps;

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
  ["value", controlledProps.value["value"]],
  ["autocomplete", controlledProps.value["autocomplete"]],
  ["maxlength", controlledProps.value["maxlength"]],
]
	.map(([name, value]) => '      ' + String(name) + '="' + formatAttrValueForCode(value) + '"')
  .join("\n");

const codeStringWithAttrs = `<script setup lang="ts">
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
      @ifxInput="handleInput"
      @ifxOpen="handleOpen"
      __CONTROLLED_ATTRS__ />
  </div>
${'</'}template>`.replace("__CONTROLLED_ATTRS__", controlledAttrsCode);

const codeString = codeStringWithAttrs;

</script>

<template>
  <div>
    <ifx-search-bar
      @ifxInput="handleInput"
      @ifxOpen="handleOpen"
      v-bind="controlledProps" />
    <h3 class="controls-title">Controls</h3>
	<div class="controls controls-toggle">
      <IfxButton variant="secondary" @click="toggleIsOpen">Toggle IsOpen</IfxButton>
      <IfxButton variant="secondary" @click="toggleDisabled">Toggle Disabled</IfxButton>
    </div>
	<div class="controls controls-input">
      <IfxTextField label="value" type="text" :value="String(value)" @input="toggleValue" @ifxInput="toggleValue" />
      <IfxTextField label="autocomplete" type="text" :value="String(autocomplete)" @input="toggleAutocomplete" @ifxInput="toggleAutocomplete" />
      <IfxTextField label="maxlength" type="number" :value="String(maxlength)" @input="toggleMaxlength" @ifxInput="toggleMaxlength" />
    </div>

    <div class="state">
        <div><b>isOpen:</b> {{ String(isOpen) }}</div>
        <div><b>disabled:</b> {{ String(disabled) }}</div>
        <div><b>value:</b> {{ String(value) }}</div>
        <div><b>autocomplete:</b> {{ String(autocomplete) }}</div>
        <div><b>maxlength:</b> {{ String(maxlength) }}</div>
    </div>

    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
