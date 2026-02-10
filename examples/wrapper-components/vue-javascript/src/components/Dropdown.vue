<template>
  <div class="component">
    <h2>Dropdown</h2>
    <ifx-dropdown placement="bottom-start" no-close-on-menu-click="true">
    <ifx-dropdown-trigger-button icon="calendar16">
      dropdown
    </ifx-dropdown-trigger-button>
    <ifx-dropdown-menu size="l">
     <ifx-dropdown-header>Header Text</ifx-dropdown-header>
      <ifx-search-field show-delete-icon="false"></ifx-search-field>
      <ifx-dropdown-item>Menu Item</ifx-dropdown-item>
      <ifx-dropdown-separator></ifx-dropdown-separator>
      <ifx-dropdown-item>Menu Item</ifx-dropdown-item>
      <ifx-dropdown-item>Menu Item</ifx-dropdown-item>
      <ifx-dropdown-item>Menu Item</ifx-dropdown-item>
      <ifx-dropdown-item>Menu Item</ifx-dropdown-item>
    </ifx-dropdown-menu>
  </ifx-dropdown>
  </div>
</template>

<script setup>

</script>

