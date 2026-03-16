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
	/** Visual style of the icon button. */
	@Prop() readonly variant: "primary" | "secondary" | "tertiary";
	/** Size of the icon button. */
	@Prop() readonly size: string;
	/** If true, the button is disabled and not clickable. */
	@Prop() readonly disabled: boolean;
	/** Name or identifier of the icon to display. */
	@Prop() readonly icon: string;
	/** URL the button should navigate to when clicked. */
	@Prop() readonly href: string;
	/** Where to open the link. */
	@Prop() readonly target: string = "_self";
	/** Shape of the button. */
	@Prop() readonly shape: string = "round";
	/** Accessible albel for screen readers. */
	@Prop() readonly ariaLabelText: string | null;
	@State() internalIcon: string;
	@Element() el: HTMLIfxIconButtonElement;

	private focusableElement: HTMLElement;

	@Listen("click", { capture: true })
	handleClick(event: Event) {
		if (this.disabled) {
			event.stopImmediatePropagation();
		}
	}

	@Watch("icon")
	updateIcon(newIcon: string) {
		this.internalIcon = newIcon;
	}
	/** Moves keyboard focus to the internal focusable element. */
	@Method()
	async setFocus() {
		this.focusableElement.focus();
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
		if (`${this.size}` === "xs") {
			return "xs";
		} else if (`${this.size}` === "s") {
			return "s";
		} else if (`${this.size}` === "l") {
			return "l";
		} else return "";
	}

	private getClassNames() {
		const shape = this.shape || "round";
		return classNames(
			"btn icon-button",
			`btn-${shape}`,
			this.size && `btn-${this.getSizeClass()}`,
			`btn-${this.getVariantClass()}`,
			this.disabled ? "disabled" : "",
		);
	}
}
