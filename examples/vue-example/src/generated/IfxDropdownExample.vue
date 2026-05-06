<script setup lang="ts">
import { computed, ref } from 'vue';

import { IfxButton, IfxDropdown, IfxDropdownItem, IfxDropdownMenu, IfxDropdownTriggerButton } from '@infineon/infineon-design-system-vue';

const placementOptions = ["auto","auto-start","auto-end","top","top-start","top-end","bottom","bottom-start","bottom-end","right","right-start","right-end","left","left-start","left-end"];
const placementIndex = ref(7);
const sizeOptions = ["s","m"];
const sizeIndex = ref(1);
const disabled = ref(false);
const variantOptions = ["primary","secondary","tertiary"];
const variantIndex = ref(0);
const defaultOpen = ref(false);
const noCloseOnOutsideClick = ref(false);
const noCloseOnMenuClick = ref(false);
const noAppendToBody = ref(false);

const handlePlacementChange = () => { placementIndex.value = (placementIndex.value + 1) % placementOptions.length; };
const handleSizeChange = () => { sizeIndex.value = (sizeIndex.value + 1) % sizeOptions.length; };
const handleDisabledChange = () => { disabled.value = !disabled.value; };
const handleVariantChange = () => { variantIndex.value = (variantIndex.value + 1) % variantOptions.length; };
const handleDefaultOpenChange = () => { defaultOpen.value = !defaultOpen.value; };
const handleNoCloseOnOutsideClickChange = () => { noCloseOnOutsideClick.value = !noCloseOnOutsideClick.value; };
const handleNoCloseOnMenuClickChange = () => { noCloseOnMenuClick.value = !noCloseOnMenuClick.value; };
const handleNoAppendToBodyChange = () => { noAppendToBody.value = !noAppendToBody.value; };

const controlledProps = computed<Record<string, unknown>>(() => ({
  "placement": placementOptions[placementIndex.value],
  "size": sizeOptions[sizeIndex.value],
  "disabled": disabled.value,
  "variant": variantOptions[variantIndex.value],
  "defaultOpen": defaultOpen.value,
  "noCloseOnOutsideClick": noCloseOnOutsideClick.value,
  "noCloseOnMenuClick": noCloseOnMenuClick.value,
  "noAppendToBody": noAppendToBody.value,
}));

const handleClose = (event: CustomEvent) => {
  console.log('ifxClose:', event);
  // Add your handler logic here
};

const handleDropdown = (event: CustomEvent) => {
  console.log('ifxDropdown:', event);
  // Add your handler logic here
};

const handleOpen = (event: CustomEvent) => {
  console.log('ifxOpen:', event);
  // Add your handler logic here
};

const handleDropdownMenuItem = (event: CustomEvent) => {
  console.log('ifxDropdownMenuItem:', event);
  // Add your handler logic here
};

const handleMenuSize = (event: CustomEvent) => {
  console.log('menuSize:', event);
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
  ["placement", placementOptions[placementIndex.value]],
  ["size", sizeOptions[sizeIndex.value]],
  ["disabled", disabled.value],
  ["variant", variantOptions[variantIndex.value]],
  ["defaultOpen", defaultOpen.value],
  ["noCloseOnOutsideClick", noCloseOnOutsideClick.value],
  ["noCloseOnMenuClick", noCloseOnMenuClick.value],
  ["noAppendToBody", noAppendToBody.value],
]
  .map(([name, value]) => '        ' + formatPropValueForCode(String(name), value))
  .join('\n'));

const codeTemplate = computed(() => `<script setup lang="ts">
import { IfxDropdown, IfxDropdownItem, IfxDropdownMenu, IfxDropdownTriggerButton } from '@infineon/infineon-design-system-vue';

const handleClose = (event: CustomEvent) => {
  console.log('ifxClose:', event);
  // Add your handler logic here
};

const handleDropdown = (event: CustomEvent) => {
  console.log('ifxDropdown:', event);
  // Add your handler logic here
};

const handleOpen = (event: CustomEvent) => {
  console.log('ifxOpen:', event);
  // Add your handler logic here
};

const handleDropdownMenuItem = (event: CustomEvent) => {
  console.log('ifxDropdownMenuItem:', event);
  // Add your handler logic here
};

const handleMenuSize = (event: CustomEvent) => {
  console.log('menuSize:', event);
  // Add your handler logic here
};
${'</'}script>

<template>
  <div>
    <ifx-dropdown
      @ifxClose="handleClose"
      @ifxDropdown="handleDropdown"
      @ifxOpen="handleOpen"
      __CONTROLLED_PROPS__>
      <ifx-dropdown-trigger-button :variant="String(controlledProps.variant ?? 'primary')">
        Dropdown
      </ifx-dropdown-trigger-button>
      <ifx-dropdown-menu
        @ifxDropdownMenuItem="handleDropdownMenuItem"
        @menuSize="handleMenuSize"
        :size="String(controlledProps.size ?? 'm')">
        <ifx-dropdown-item
          icon="c-info-16"
          target="_self"
          href=""
          :error="false">
          Menu Item
        </ifx-dropdown-item>
        <ifx-dropdown-item
          icon="c-info-16"
          target="_self"
          href=""
          :error="false">
          Menu Item
        </ifx-dropdown-item>
        <ifx-dropdown-item
          icon="c-info-16"
          target="_self"
          href=""
          :error="false">
          Menu Item
        </ifx-dropdown-item>
        <ifx-dropdown-item
          icon="c-info-16"
          target="_self"
          href=""
          :error="false">
          Menu Item
        </ifx-dropdown-item>
        <ifx-dropdown-item
          icon="c-info-16"
          target="_self"
          href=""
          :error="false">
          Menu Item
        </ifx-dropdown-item>
      </ifx-dropdown-menu>
    </ifx-dropdown>
  </div>
${'</'}template>`.replace("__CONTROLLED_PROPS__", controlledPropsCode.value));

const codeString = codeTemplate;
</script>

<template>
  <div>
    <ifx-dropdown
      @ifxClose="handleClose"
      @ifxDropdown="handleDropdown"
      @ifxOpen="handleOpen"
      v-bind="controlledProps">
      <ifx-dropdown-trigger-button :variant="String(controlledProps.variant ?? 'primary')">
        Dropdown
      </ifx-dropdown-trigger-button>
      <ifx-dropdown-menu
        @ifxDropdownMenuItem="handleDropdownMenuItem"
        @menuSize="handleMenuSize"
        :size="String(controlledProps.size ?? 'm')">
        <ifx-dropdown-item
          icon="c-info-16"
          target="_self"
          href=""
          :error="false">
          Menu Item
        </ifx-dropdown-item>
        <ifx-dropdown-item
          icon="c-info-16"
          target="_self"
          href=""
          :error="false">
          Menu Item
        </ifx-dropdown-item>
        <ifx-dropdown-item
          icon="c-info-16"
          target="_self"
          href=""
          :error="false">
          Menu Item
        </ifx-dropdown-item>
        <ifx-dropdown-item
          icon="c-info-16"
          target="_self"
          href=""
          :error="false">
          Menu Item
        </ifx-dropdown-item>
        <ifx-dropdown-item
          icon="c-info-16"
          target="_self"
          href=""
          :error="false">
          Menu Item
        </ifx-dropdown-item>
      </ifx-dropdown-menu>
    </ifx-dropdown>
    <h3 class="controls-title">Controls</h3>
    <div class="controls controls-toggle">
        <ifx-button variant="secondary" @click="handlePlacementChange">Toggle Placement</ifx-button>
        <ifx-button variant="secondary" @click="handleSizeChange">Toggle Size</ifx-button>
        <ifx-button variant="secondary" @click="handleDisabledChange">Toggle Disabled</ifx-button>
        <ifx-button variant="secondary" @click="handleVariantChange">Toggle Variant</ifx-button>
        <ifx-button variant="secondary" @click="handleDefaultOpenChange">Toggle DefaultOpen</ifx-button>
        <ifx-button variant="secondary" @click="handleNoCloseOnOutsideClickChange">Toggle NoCloseOnOutsideClick</ifx-button>
        <ifx-button variant="secondary" @click="handleNoCloseOnMenuClickChange">Toggle NoCloseOnMenuClick</ifx-button>
        <ifx-button variant="secondary" @click="handleNoAppendToBodyChange">Toggle NoAppendToBody</ifx-button>
    </div>
    

    <div class="state">
      <div><b>placement:</b> {{ String(placementOptions[placementIndex]) }}</div>
      <div><b>size:</b> {{ String(sizeOptions[sizeIndex]) }}</div>
      <div><b>disabled:</b> {{ String(disabled) }}</div>
      <div><b>variant:</b> {{ String(variantOptions[variantIndex]) }}</div>
      <div><b>defaultOpen:</b> {{ String(defaultOpen) }}</div>
      <div><b>noCloseOnOutsideClick:</b> {{ String(noCloseOnOutsideClick) }}</div>
      <div><b>noCloseOnMenuClick:</b> {{ String(noCloseOnMenuClick) }}</div>
      <div><b>noAppendToBody:</b> {{ String(noAppendToBody) }}</div>
    </div>
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
