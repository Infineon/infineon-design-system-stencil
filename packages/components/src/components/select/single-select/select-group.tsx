import {
	Component,
	Element,
	Host,
	h,
	Prop,
	Watch,
} from "@stencil/core";

/**
 * A non-selectable, greyed group header (like HTML `<optgroup>`) that labels a set
 * of slotted `ifx-select-option`s. Flat — no expand/collapse. Setting `disabled`
 * disables every option in the group.
 */
@Component({
	tag: "ifx-select-group",
	styleUrl: "select-group.scss",
	shadow: true,
})
export class SelectGroup {
	@Element() el: HTMLIfxSelectGroupElement;

	/** The group heading text. */
	@Prop() readonly label: string;
	/** Disables every option within the group (like `<optgroup disabled>`). */
	@Prop({ reflect: true }) readonly disabled: boolean = false;

	componentDidLoad() {
		this.applyDisabledToOptions();
	}

	@Watch("disabled")
	disabledChanged() {
		this.applyDisabledToOptions();
	}

	/** When the group is disabled, disable all of its options. */
	private applyDisabledToOptions() {
		if (!this.disabled) return;
		this.el
			.querySelectorAll("ifx-select-option")
			.forEach((option: HTMLIfxSelectOptionElement) => {
				option.disabled = true;
			});
	}

	render() {
		return (
			<Host role="group" aria-label={this.label}>
				<div class="group-heading" aria-hidden="true">
					{this.label}
				</div>
				<div class="group-options">
					<slot />
				</div>
			</Host>
		);
	}
}
