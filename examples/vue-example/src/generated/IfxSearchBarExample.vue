<script setup lang="ts">
import { computed, ref } from 'vue';

import { IfxButton, IfxSearchBar, IfxTextField } from '@infineon/infineon-design-system-vue';

const isOpen = ref(true);
const disabled = ref(false);
const value = ref("");
const autocomplete = ref("on");
const maxlength = ref(0);
const showCloseButton = ref(true);

const handleIsOpenChange = () => { isOpen.value = !isOpen.value; };
const handleDisabledChange = () => { disabled.value = !disabled.value; };
const handleValueChange = (nextValue: string) => { value.value = nextValue; };
const handleAutocompleteChange = (nextValue: string) => { autocomplete.value = nextValue; };
const handleMaxlengthChange = (nextValue: string) => { maxlength.value = Number(nextValue); };
const handleShowCloseButtonChange = () => { showCloseButton.value = !showCloseButton.value; };

const controlledProps = computed<Record<string, unknown>>(() => ({
  "isOpen": isOpen.value,
  "disabled": disabled.value,
  "value": value.value,
  "autocomplete": autocomplete.value,
  "maxlength": maxlength.value,
  "showCloseButton": showCloseButton.value,
}));

const handleInput = (event: CustomEvent) => {
  console.log('ifxInput:', event);
  // Add your handler logic here
};

const handleOpen = (event: CustomEvent) => {
  console.log('ifxOpen:', event);
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
  ["isOpen", isOpen.value],
  ["disabled", disabled.value],
  ["value", value.value],
  ["autocomplete", autocomplete.value],
  ["maxlength", maxlength.value],
  ["showCloseButton", showCloseButton.value],
]
  .map(([name, value]) => '        ' + formatPropValueForCode(String(name), value))
  .join('\n'));

const codeTemplate = computed(() => `<script setup lang="ts">
import { IfxSearchBar } from '@infineon/infineon-design-system-vue';

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
      __CONTROLLED_PROPS__ />
  </div>
${'</'}template>`.replace("__CONTROLLED_PROPS__", controlledPropsCode.value));

const codeString = codeTemplate;
</script>

<template>
  <div>
    <ifx-search-bar
      @ifxInput="handleInput"
      @ifxOpen="handleOpen"
      v-bind="controlledProps" />
    <h3 class="controls-title">Controls</h3>
    <div class="controls controls-toggle">
        <ifx-button variant="secondary" @click="handleIsOpenChange">Toggle IsOpen</ifx-button>
        <ifx-button variant="secondary" @click="handleDisabledChange">Toggle Disabled</ifx-button>
        <ifx-button variant="secondary" @click="handleShowCloseButtonChange">Toggle ShowCloseButton</ifx-button>
    </div>
    <div class="controls controls-input">
        <ifx-text-field label="value" type="text" :value="String(value)" @input="handleValueChange(getInputValue($event))" />
        <ifx-text-field label="autocomplete" type="text" :value="String(autocomplete)" @input="handleAutocompleteChange(getInputValue($event))" />
        <ifx-text-field label="maxlength" type="text" :value="String(maxlength)" @input="handleMaxlengthChange(getInputValue($event))" />
    </div>

    <div class="state">
      <div><b>isOpen:</b> {{ String(isOpen) }}</div>
      <div><b>disabled:</b> {{ String(disabled) }}</div>
      <div><b>value:</b> {{ String(value) }}</div>
      <div><b>autocomplete:</b> {{ String(autocomplete) }}</div>
      <div><b>maxlength:</b> {{ String(maxlength) }}</div>
      <div><b>showCloseButton:</b> {{ String(showCloseButton) }}</div>
    </div>
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
