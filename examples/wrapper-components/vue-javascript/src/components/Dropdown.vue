<template>
  <div>
    <h2>Dropdown</h2>
    <ifx-dropdown placement="bottom-start" no-close-on-menu-click="true">
    <ifx-dropdown-trigger-button icon="calendar16">
      dropdown
    </ifx-dropdown-trigger-button>
    <ifx-dropdown-menu size="l">
     <ifx-dropdown-header>Header Text</ifx-dropdown-header>
      <ifx-search-field show-delete-icon="false"></ifx-search-field>
      <ifx-dropdown-item target="_blank" href="https://www.google.de">First</ifx-dropdown-item>
      <ifx-dropdown-separator></ifx-dropdown-separator>
      <ifx-dropdown-item icon="calendar16">One</ifx-dropdown-item>
      <ifx-dropdown-item>Two</ifx-dropdown-item>
      <ifx-dropdown-item>Three</ifx-dropdown-item>
      <ifx-dropdown-item>Four</ifx-dropdown-item>
    </ifx-dropdown-menu>
  </ifx-dropdown>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

let disabled = ref(false);
let checkboxValue = ref(false);
let error = ref(false);


function handleCheckboxChange(event) {
  console.log("updating checkbox value: ", event.detail)
  checkboxValue.value = event.detail;
};

const handleSubmit = () => {
  console.log('Form submitted. Checkbox value:', checkboxValue.value);
};

const toggleDisabled = () => {
  disabled.value = !disabled.value;
};

const toggleError = () => {
  error.value = !error.value;
};

const toggleValue = () => {
  checkboxValue.value = !checkboxValue.value;
};
</script>

