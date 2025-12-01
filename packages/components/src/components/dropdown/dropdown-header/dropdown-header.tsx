// dropdown-separator.tsx
import { Component, h } from "@stencil/core";

@Component({
	tag: "ifx-dropdown-header",
	styleUrl: "dropdown-header.scss",
	shadow: true,
})
export class DropdownHeader {
	render() {
		return (
			<div class="dropdown-header">
				<span>
					<slot />
				</span>
			</div>
		);
	}
}
