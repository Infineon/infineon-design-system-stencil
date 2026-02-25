// dropdown-trigger-button.tsx
import { Component, h, Prop } from "@stencil/core";
import type { IOpenable } from "../IOpenable";

@Component({
	tag: "ifx-dropdown-trigger-button",
	styleUrl: "dropdown-trigger-button.scss",
	shadow: true,
})
export class DropdownItem implements IOpenable {
	@Prop() readonly isOpen: boolean = false;

	@Prop() readonly theme: "default" | "danger" | "inverse" = "default";
	@Prop() readonly variant: "primary";
	@Prop() readonly size: "s" | "m" = "m";
	@Prop() readonly disabled: boolean;
	@Prop() readonly hideArrow: boolean = false;

	render() {
		return (
			<ifx-button
				variant={this.variant}
				theme={this.theme}
				size={this.size}
				disabled={this.disabled}
				class="dropdown-trigger-button"
			>
				<slot />
				{!this.hideArrow && (
					<ifx-icon
						icon="chevron-down-16"
						class={`icon${this.isOpen ? " rotate" : ""}`}
					/>
				)}
			</ifx-button>
		);
	}
}
