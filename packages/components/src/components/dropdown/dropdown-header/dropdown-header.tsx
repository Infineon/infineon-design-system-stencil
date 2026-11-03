// dropdown-separator.tsx
import {
	Component,
	h,
	Listen,
	State,
} from "@stencil/core";

@Component({
	tag: "ifx-dropdown-header",
	styleUrl: "dropdown-header.scss",
	shadow: true,
})
export class DropdownHeader {
	@State() size: string = "m";

	@Listen("menuSize", { target: "body" })
	handleMenuSize(event: CustomEvent) {
		this.size = event.detail;
	}

	render() {
		return (
			<div class={`dropdown-header ${this.size === "s" ? "small" : ""}`}>
				<span>
					<slot />
				</span>
			</div>
		);
	}
}
