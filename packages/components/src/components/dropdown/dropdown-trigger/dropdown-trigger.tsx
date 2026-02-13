// dropdown-trigger-button.tsx
import { Component, h, Prop } from "@stencil/core";
import type { IOpenable } from "../IOpenable";

@Component({
	tag: "ifx-dropdown-trigger",
	styleUrl: "dropdown-trigger.scss",
	shadow: true,
})
export class DropdownItem implements IOpenable {
	@Prop() isOpen: boolean = false;

	render() {
		return <slot />;
	}
}
