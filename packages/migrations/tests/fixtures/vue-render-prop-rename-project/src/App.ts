import { IfxAccordion } from "@infineon/infineon-design-system-vue";
import { createVNode, h } from "vue";

const autoCollapse = true;
const onIfxChange = (event: Event) => console.log(event.type);

export const renderWithH = () =>
	h(IfxAccordion, { autoCollapse, onIfxChange, onClick: () => console.log("click") }, () => "content");

export const renderWithCreateVNode = () =>
	createVNode(IfxAccordion, {
		"autoCollapse": autoCollapse,
		"onIfxChange": (event: Event) => console.log(event.type),
	});