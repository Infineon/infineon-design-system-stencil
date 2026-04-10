<script setup lang="ts">

import { IfxDropdown, IfxDropdownItem, IfxDropdownMenu, IfxDropdownTriggerButton } from '@infineon/infineon-design-system-vue';

const codeString = `<script setup lang="ts">
${'</'}script>

<template>
  <div>
    <ifx-dropdown
      placement="bottom-start"
      :default-open="false"
      :no-close-on-outside-click="false"
      :no-close-on-menu-click="false"
      :no-append-to-body="false">
      <ifx-dropdown-trigger-button variant="primary">
        Dropdown
      </ifx-dropdown-trigger-button>
      <ifx-dropdown-menu size="m">
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
${'</'}template>`;

</script>

<template>
  <div>
    <ifx-dropdown
      placement="bottom-start"
      :default-open="false"
      :no-close-on-outside-click="false"
      :no-close-on-menu-click="false"
      :no-append-to-body="false">
      <ifx-dropdown-trigger-button variant="primary">
        Dropdown
      </ifx-dropdown-trigger-button>
      <ifx-dropdown-menu size="m">
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
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
