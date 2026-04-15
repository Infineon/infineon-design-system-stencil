import { IfxAccordion as Accordion } from "@infineon/infineon-design-system-vue";
import { createVNode, h } from "vue";

const autoCollapse = true;

export const renderWithAliasH = () => h(Accordion, { autoCollapse }, () => "content");

export const renderWithAliasCreateVNode = () =>
	createVNode(Accordion, {
		autoCollapse,
		"autoCollapse": autoCollapse,
	});