<script setup lang="ts">

import { IfxButton, IfxSwitch } from '@infineon/infineon-design-system-vue';

import { computed, ref } from 'vue';

const checked = ref(false);
const disabled = ref(false);

const toggleChecked = () => (checked.value = !checked.value);
const toggleDisabled = () => (disabled.value = !disabled.value);

const controlledProps = computed(() => ({
  "checked": checked.value,
  "disabled": disabled.value,
}));

const handleChange = (event: CustomEvent) => {
  console.log('ifxChange:', event);
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
  ["checked", controlledProps.value["checked"]],
  ["disabled", controlledProps.value["disabled"]],
]
	.map(([name, value]) => '      ' + String(name) + '="' + formatAttrValueForCode(value) + '"')
  .join("\n");

const codeString = `<script setup lang="ts">
const handleChange = (event: CustomEvent) => {
  console.log('ifxChange:', event);
  // Add your handler logic here
};
${'</'}script>

<template>
  <div>
    <ifx-switch
      name="switch"
      value="on"
      @ifxChange="handleChange"
      __CONTROLLED_ATTRS__>
      Switch
    </ifx-switch>
  </div>
${'</'}template>`.replace("__CONTROLLED_ATTRS__", controlledAttrsCode);

</script>

<template>
  <div>
    <ifx-switch
      name="switch"
      value="on"
      @ifxChange="handleChange"
      v-bind="controlledProps">
      Switch
    </ifx-switch>
    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <IfxButton variant="secondary" @click="toggleChecked">Toggle Checked</IfxButton>
      <IfxButton variant="secondary" @click="toggleDisabled">Toggle Disabled</IfxButton>
    </div>

    <div class="state">
        <div><b>checked:</b> {{ String(checked.value) }}</div>
        <div><b>disabled:</b> {{ String(disabled.value) }}</div>
    </div>

    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
