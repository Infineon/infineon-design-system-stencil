import { Component, Element, Host, h, Prop, Watch } from "@stencil/core";

/**
 * Visually and semantically groups multiselect options under a heading.
 * Unlike a multiselect option with children, a group is not selectable or expandable.
 */
@Component({
	tag: "ifx-multiselect-group",
	styleUrl: "multiselect-group.scss",
	shadow: true,
})
export class MultiselectGroup {
	@Element() el: HTMLIfxMultiselectGroupElement;

	/** Label displayed above the group's options. */
	@Prop() readonly label: string;

	/** Whether the group is disabled. */
	@Prop({ reflect: true }) readonly disabled: boolean = false;

	componentWillLoad() {
		if (this.el.parentElement?.tagName !== "IFX-MULTISELECT") {
			console.warn(
				"ifx-multiselect-group must be a direct child of ifx-multiselect.",
			);
		}
	}

	componentDidLoad() {
		this.updateDescendantDisabledState();
	}

	@Watch("disabled")
	updateDescendantDisabledState() {
		this.el.querySelectorAll("ifx-multiselect-option").forEach((option) => {
			option.dispatchEvent(
				new CustomEvent("ifx-group-disabled-change", {
					detail: { disabled: this.disabled },
				}),
			);
		});
	}

	render() {
		return (
			<Host
				role="group"
				aria-label={this.label}
				aria-disabled={this.disabled ? "true" : undefined}
			>
				<div class="group-heading" aria-hidden="true">
					{this.label}
				</div>
				<slot />
			</Host>
		);
	}
}