import { Component, h, Host, Prop } from "@stencil/core";

@Component({
	tag: "ifx-multiselect-group",
	styleUrl: "multiselect-group.scss",
	shadow: true,
})
export class MultiselectGroup {
	/** Label displayed above the group's options. */
	@Prop() readonly label: string;

	/** Whether the group is disabled. */
	@Prop({ reflect: true }) readonly disabled: boolean = false;

	render() {
		return (
			<Host role="group" aria-label={this.label}>
				<div class="group-heading" aria-hidden="true">
					{this.label}
				</div>
				<slot />
			</Host>
		);
	}
}