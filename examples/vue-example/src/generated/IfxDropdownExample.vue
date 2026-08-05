<script setup lang="ts">

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

const handleDropdownItem = (event: CustomEvent) => {
  console.log('ifxDropdownItem:', event);
  // Add your handler logic here
};

const codeString = `<script setup lang="ts">
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

const handleDropdownItem = (event: CustomEvent) => {
  console.log('ifxDropdownItem:', event);
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
      :no-append-to-body="true"
      :disabled="false">
      <ifx-dropdown-trigger-button
        variant="primary"
        @ifxClose="handleClose"
        @ifxDropdown="handleDropdown"
        @ifxOpen="handleOpen"
        @ifxDropdownMenuItem="handleDropdownMenuItem"
        @menuSize="handleMenuSize"
        @ifxDropdownItem="handleDropdownItem">
        Dropdown
      </ifx-dropdown-trigger-button>
      <ifx-dropdown-menu
        size="m"
        @ifxClose="handleClose"
        @ifxDropdown="handleDropdown"
        @ifxOpen="handleOpen"
        @ifxDropdownMenuItem="handleDropdownMenuItem"
        @menuSize="handleMenuSize"
        @ifxDropdownItem="handleDropdownItem">
        <ifx-dropdown-item
          icon="c-info-16"
          target="_self"
          href=""
          :error="false"
          @ifxClose="handleClose"
          @ifxDropdown="handleDropdown"
          @ifxOpen="handleOpen"
          @ifxDropdownMenuItem="handleDropdownMenuItem"
          @menuSize="handleMenuSize"
          @ifxDropdownItem="handleDropdownItem">
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
      :no-append-to-body="true"
      :disabled="false">
      <ifx-dropdown-trigger-button
        variant="primary"
        @ifxClose="handleClose"
        @ifxDropdown="handleDropdown"
        @ifxOpen="handleOpen"
        @ifxDropdownMenuItem="handleDropdownMenuItem"
        @menuSize="handleMenuSize"
        @ifxDropdownItem="handleDropdownItem">
        Dropdown
      </ifx-dropdown-trigger-button>
      <ifx-dropdown-menu
        size="m"
        @ifxClose="handleClose"
        @ifxDropdown="handleDropdown"
        @ifxOpen="handleOpen"
        @ifxDropdownMenuItem="handleDropdownMenuItem"
        @menuSize="handleMenuSize"
        @ifxDropdownItem="handleDropdownItem">
        <ifx-dropdown-item
          icon="c-info-16"
          target="_self"
          href=""
          :error="false"
          @ifxClose="handleClose"
          @ifxDropdown="handleDropdown"
          @ifxOpen="handleOpen"
          @ifxDropdownMenuItem="handleDropdownMenuItem"
          @menuSize="handleMenuSize"
          @ifxDropdownItem="handleDropdownItem">
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
