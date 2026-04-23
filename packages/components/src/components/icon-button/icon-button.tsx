import {
	Component,
	Element,
	Host,
	h,
	Listen,
	Method,
	Prop,
	State,
	Watch,
} from "@stencil/core";
import classNames from "classnames";
import { isNestedInIfxComponent } from "../..//shared/utils/dom-utils";
import { detectFramework } from "../..//shared/utils/framework-detection";
import { trackComponent } from "../../shared/utils/tracking";

@Component({
	tag: "ifx-icon-button",
	styleUrl: "icon-button.scss",
	shadow: true,
})
export class IconButton {
	@Element() el: HTMLIfxIconButtonElement;

	/**
	 * Visual style of the icon button.
	 * Primary has a solid background, secondary has an outline and tertiary is just the icon with no background or border.
	 * @default "primary"
	 */
	@Prop() readonly variant: "primary" | "secondary" | "tertiary" = "primary";

	/**
	 * Size of the icon button.
	 * Options: xs (20px), s (32px), m (36px) and l (40px).
	 * @default "m"
	 */
	@Prop() readonly size: "xs" | "s" | "m" | "l" = "m";

	/**
	 * Disables the button and blocks user interaction.
	 * @default false
	 */
	@Prop() readonly disabled: boolean = false;
	/**
	 * Icon name rendered by the nested `ifx-icon`.
	 * Refer to the [Icon Library](https://infineon.github.io/infineon-design-system-stencil/storybook/?path=/docs/icon-library--development) for available icons.
	 */
	@Prop() readonly icon: string;

	@Watch("icon")
	updateIcon(newIcon: string) {
		this.internalIcon = newIcon;
	}

	/**
	 * URL to navigate to; when provided, the component renders as a link.
	 */
	@Prop() readonly href: string;
	
	/**
	 * Target for link navigation when `href` is set.
	 * @default "_self"
	 */
	@Prop() readonly target: string = "_self";

	/**
	 * Visual shape of the icon button.
	 * @default "round"
	 */
	@Prop() readonly shape: "round" | "square" = "round";

	/**
	 * Accessible name announced by assistive technologies.
	 */
	@Prop() readonly ariaLabelText: string | null;
	
	@State() internalIcon: string;

	private focusableElement: HTMLElement;

	/**
	 * Sets focus on the icon button. If the button is rendered as a link, it focuses the anchor element; otherwise, it focuses the button element.
	 */
	@Method()
	async setFocus() {
		this.focusableElement.focus();
	}

	
	@Listen("click", { capture: true })
	handleClick(event: Event) {
		if (this.disabled) {
			event.stopImmediatePropagation();
		}
	}


	componentWillLoad() {
		this.internalIcon = this.icon;
	}

	async componentDidLoad() {
		if (!isNestedInIfxComponent(this.el)) {
			const framework = detectFramework();
			trackComponent("ifx-icon-button", await framework);
		}
	}

	render() {
		return (
			<Host aria-disabled={this.disabled} aria-label={this.ariaLabelText}>
				{this.href ? (
					<a
						ref={(el) => (this.focusableElement = el)}
						class={this.getClassNames()}
						href={!this.disabled ? this.href : undefined}
						target={this.target}
						rel={this.target === "_blank" ? "noopener noreferrer" : undefined}
					>
						<ifx-icon icon={this.internalIcon}></ifx-icon>
					</a>
				) : (
					<button
						class={this.getClassNames()}
						type="button"
						disabled={this.disabled}
					>
						<ifx-icon icon={this.internalIcon}></ifx-icon>
					</button>
				)}
			</Host>
		);
	}

	private getVariantClass() {
		return `${this.variant}` === "secondary"
			? `secondary`
			: `${this.variant}` === "tertiary"
				? `tertiary`
				: `primary`;
	}

	private getSizeClass() {
		return ["xs", "s", "m", "l"].includes(this.size) ? this.size : "m";
	}

	private getClassNames() {
		const shape = this.shape || "round";
		return classNames(
			"btn icon-button",
			`btn-${shape}`,
			`btn-${this.getSizeClass()}`,
			`btn-${this.getVariantClass()}`,
			this.disabled ? "disabled" : "",
		);
	}
}
