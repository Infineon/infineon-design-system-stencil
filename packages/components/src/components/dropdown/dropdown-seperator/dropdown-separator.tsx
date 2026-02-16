// dropdown-separator.tsx
import { Component, h } from "@stencil/core";

@Component({
	tag: "ifx-dropdown-separator",
	styleUrl: "dropdown-separator.scss",
	shadow: true,
})
export class DropdownSeparator {
	render() {
		return <div class="dropdown-separator"></div>;
	}
}
