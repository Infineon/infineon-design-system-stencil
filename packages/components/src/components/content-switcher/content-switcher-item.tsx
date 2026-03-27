import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "ifx-content-switcher-item",
	styleUrl: "./content-switcher-item.scss",
	shadow: true,
})
export class ContentSwitcherItem {
	/** Wether this option is currently selected. */
	@Prop() readonly selected: boolean = false;
	/** Value associated with this option. */
	@Prop() readonly value: string;

	render() {
		return (
			<Host>
				<button
					class={
						"ifx-content-switcher-item" + (this.selected ? " selected" : "")
					}
				>
					<slot></slot>
				</button>
			</Host>
		);
	}
}
