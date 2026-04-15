import { createVNode, h } from "vue";

const autoCollapse = true;

export const renderWithStringH = () => h("ifx-accordion", { autoCollapse }, () => "content");

export const renderWithStringCreateVNode = () =>
	createVNode("ifx-accordion", {
		autoCollapse,
		"autoCollapse": autoCollapse,
	});