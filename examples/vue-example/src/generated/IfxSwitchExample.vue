<script setup lang="ts">
import { computed, ref } from 'vue';

import { IfxButton, IfxSwitch, IfxTextField } from '@infineon/infineon-design-system-vue';

const name = ref("switch");
const checked = ref(false);
const value = ref("on");
const disabled = ref(false);

const toggleName = (nextValue: string) => { name.value = nextValue; };
const toggleChecked = () => { checked.value = !checked.value; };
const toggleValue = (nextValue: string) => { value.value = nextValue; };
const toggleDisabled = () => { disabled.value = !disabled.value; };

const controlledProps = computed<Record<string, unknown>>(() => ({
  "name": name.value,
  "checked": checked.value,
  "value": value.value,
  "disabled": disabled.value,
}));

const handleChange = (event: CustomEvent) => {
  console.log('ifxChange:', event);
  // Add your handler logic here
};

const getInputValue = (event: Event) => String((event.target as HTMLInputElement | null)?.value ?? "");

const formatPropValueForCode = (name: string, value: unknown): string => {
  if (typeof value === 'boolean') return ':' + name + '="' + String(value) + '"';
  if (typeof value === 'number') return ':' + name + '="' + String(value) + '"';
  if (value === null) return ':' + name + '="null"';
  if (Array.isArray(value) || (typeof value === 'object' && value !== null)) {
    const escaped = JSON.stringify(value).replace(/'/g, "\\'");
    return ":" + name + "='" + escaped + "'";
  }
  const escaped = String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
  return name + '="' + escaped + '"';
};

const controlledPropsCode = computed(() => [
  ["name", name.value],
  ["checked", checked.value],
  ["value", value.value],
  ["disabled", disabled.value],
]
  .map(([name, value]) => '        ' + formatPropValueForCode(String(name), value))
  .join('\n'));

const codeTemplate = computed(() => `<script setup lang="ts">
import { IfxSwitch } from '@infineon/infineon-design-system-vue';

const handleChange = (event: CustomEvent) => {
  console.log('ifxChange:', event);
  // Add your handler logic here
};
${'</'}script>

<template>
  <div>
    <ifx-switch
      @ifxChange="handleChange"
      __CONTROLLED_PROPS__>
      Switch
    </ifx-switch>
  </div>
${'</'}template>`.replace("__CONTROLLED_PROPS__", controlledPropsCode.value));

const codeString = codeTemplate;
</script>

<template>
  <div>
    <ifx-switch
      @ifxChange="handleChange"
      v-bind="controlledProps">
      Switch
    </ifx-switch>
    <h3 class="controls-title">Controls</h3>
    <div class="controls controls-toggle">
        <ifx-button variant="secondary" @click="toggleChecked">Toggle Checked</ifx-button>
        <ifx-button variant="secondary" @click="toggleDisabled">Toggle Disabled</ifx-button>
    </div>
    <div class="controls controls-input">
        <ifx-text-field label="name" type="text" :value="String(name)" @input="toggleName(getInputValue($event))" />
        <ifx-text-field label="value" type="text" :value="String(value)" @input="toggleValue(getInputValue($event))" />
    </div>

    <div class="state">
      <div><b>name:</b> {{ String(name) }}</div>
      <div><b>checked:</b> {{ String(checked) }}</div>
      <div><b>value:</b> {{ String(value) }}</div>
      <div><b>disabled:</b> {{ String(disabled) }}</div>
    </div>
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
