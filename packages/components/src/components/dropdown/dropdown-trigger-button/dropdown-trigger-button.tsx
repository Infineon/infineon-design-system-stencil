// dropdown-trigger-button.tsx
import { Component, h, Prop } from "@stencil/core";
import type { IOpenable } from "../IOpenable";

@Component({
	tag: "ifx-dropdown-trigger-button",
	styleUrl: "dropdown-trigger-button.scss",
	shadow: true,
})
export class DropdownItem implements IOpenable {
	/** Controls wether the dropdown trigger is open */
	@Prop() readonly isOpen: boolean = false;
	/** Color theme of the trigger. */
	@Prop() readonly theme: "default" | "danger" | "inverse" = "default";
	/** Visual style variant. */
	@Prop() readonly variant: "primary";
	/** Size of the trigger button. */
	@Prop() readonly size: "s" | "m" = "m";
	/** If true, trigger is disabled and not clickable. */
	@Prop() readonly disabled: boolean;
	/** If true, hides the dropdown arrow icon. */
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
