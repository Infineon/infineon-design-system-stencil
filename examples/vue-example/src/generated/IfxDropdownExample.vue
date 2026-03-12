<script setup lang="ts">

import { IfxDropdown, IfxDropdownItem, IfxDropdownMenu, IfxDropdownTriggerButton } from '@infineon/infineon-design-system-vue';

const handleOpen = (event: CustomEvent) => {
  console.log('ifxOpen:', event);
  // Add your handler logic here
};

const handleClose = (event: CustomEvent) => {
  console.log('ifxClose:', event);
  // Add your handler logic here
};

const handleDropdownMenuItem = (event: CustomEvent) => {
  console.log('ifxDropdownMenuItem:', event);
  // Add your handler logic here
};

const codeString = `<script setup lang="ts">
const handleOpen = (event: CustomEvent) => {
  console.log('ifxOpen:', event);
  // Add your handler logic here
};

const handleClose = (event: CustomEvent) => {
  console.log('ifxClose:', event);
  // Add your handler logic here
};

const handleDropdownMenuItem = (event: CustomEvent) => {
  console.log('ifxDropdownMenuItem:', event);
  // Add your handler logic here
};
${'</'}script>

<template>
  <div>
    <ifx-dropdown
      placement="bottom-start"
      :default-open="false"
      :no-close-on-outside-click="false"
      :no-close-on-menu-click="false"
      :no-append-to-body="false"
      :disabled="false">
      <ifx-dropdown-trigger-button
        variant="primary"
        @ifxOpen="handleOpen"
        @ifxClose="handleClose"
        @ifxDropdownMenuItem="handleDropdownMenuItem">
        Dropdown
      </ifx-dropdown-trigger-button>
      <ifx-dropdown-menu
        size="m"
        @ifxOpen="handleOpen"
        @ifxClose="handleClose"
        @ifxDropdownMenuItem="handleDropdownMenuItem">
        <ifx-dropdown-item
          icon="c-info-16"
          target="_self"
          href=""
          :error="false"
          @ifxOpen="handleOpen"
          @ifxClose="handleClose"
          @ifxDropdownMenuItem="handleDropdownMenuItem">
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
${'</'}template>`;

</script>

<template>
  <div>
    <ifx-dropdown
      placement="bottom-start"
      :default-open="false"
      :no-close-on-outside-click="false"
      :no-close-on-menu-click="false"
      :no-append-to-body="false"
      :disabled="false">
      <ifx-dropdown-trigger-button
        variant="primary"
        @ifxOpen="handleOpen"
        @ifxClose="handleClose"
        @ifxDropdownMenuItem="handleDropdownMenuItem">
        Dropdown
      </ifx-dropdown-trigger-button>
      <ifx-dropdown-menu
        size="m"
        @ifxOpen="handleOpen"
        @ifxClose="handleClose"
        @ifxDropdownMenuItem="handleDropdownMenuItem">
        <ifx-dropdown-item
          icon="c-info-16"
          target="_self"
          href=""
          :error="false"
          @ifxOpen="handleOpen"
          @ifxClose="handleClose"
          @ifxDropdownMenuItem="handleDropdownMenuItem">
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
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
