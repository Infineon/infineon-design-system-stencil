<script setup lang="ts">
import { IfxAccordion } from "@infineon/infineon-design-system-vue";

const isOpen = true;
const accordionProps = { "auto-collapse": true };

void IfxAccordion;
void isOpen;
void accordionProps;
</script>

<template>
	<ifx-accordion :auto-collapse="isOpen" @ifxChange="handleChange">
		content
	</ifx-accordion>
	<ifx-accordion v-bind:auto-collapse="isOpen" v-on:ifxChange="handleChange" />
	<ifx-accordion v-bind="accordionProps" />
	<IfxAccordion auto-collapse="true" @ifxChange="handleChange" />
</template>