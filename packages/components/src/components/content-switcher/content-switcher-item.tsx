import { Component, Host, h, Prop, Watch, Event, EventEmitter } from "@stencil/core";

@Component({
	tag: "ifx-content-switcher-item",
	styleUrl: "./content-switcher-item.scss",
	shadow: true,
})
export class ContentSwitcherItem {
	/** Wether this option is currently selected. */
	@Prop() readonly selected: boolean = false;
	/** Value associated with this option. */
	@Prop() readonly value!: string;
  /** Fired when this item becomes selected, so the parent switcher can deselect the others. */
	@Event() itemSelected!: EventEmitter;

	@Watch("selected")
	handleSelectedChange(newValue: boolean) {
			if (newValue) this.itemSelected.emit();
	}

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
