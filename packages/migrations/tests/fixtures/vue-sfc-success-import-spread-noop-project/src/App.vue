<script setup lang="ts">
import { IfxTextField } from "@infineon/infineon-design-system-vue";
import { directorySearchProps } from "./config/fieldProps";

void IfxTextField;
void directorySearchProps;
</script>

<template>
	<!-- Imported object spread — success key in fieldProps.ts must NOT be renamed -->
	<IfxTextField v-bind="directorySearchProps" />
</template>
