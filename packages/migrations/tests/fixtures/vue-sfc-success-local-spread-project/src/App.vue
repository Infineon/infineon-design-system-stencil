<script setup lang="ts">
import { IfxTextField } from "@infineon/infineon-design-system-vue";

const directorySearchProps = {
	label: "spread object",
	success: true,
};

void IfxTextField;
void directorySearchProps;
</script>

<template>
	<IfxTextField v-bind="directorySearchProps" />
</template>
