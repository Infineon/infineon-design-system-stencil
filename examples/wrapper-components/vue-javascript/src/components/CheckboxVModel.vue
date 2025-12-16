<script setup lang="ts">
import { IfxCheckbox } from '@infineon/infineon-design-system-vue';
import { ref } from 'vue'
const val = ref(false);
</script>

<template>
    <h3>Checkboxes with values bound by v-model</h3>
    <ifx-checkbox v-model="val">Checkbox 1</ifx-checkbox>
    <br />
    <br />
    <ifx-checkbox v-model="val">Checkbox 2</ifx-checkbox>
    <br />
    <br />
    <span>Value: {{ val }}</span>
</template>
