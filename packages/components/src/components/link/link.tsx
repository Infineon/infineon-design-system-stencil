import { Component, Element, h, Prop, State } from "@stencil/core";
import classNames from "classnames";
import { isNestedInIfxComponent } from "../..//shared/utils/dom-utils";
import { detectFramework } from "../..//shared/utils/framework-detection";
import { trackComponent } from "../../shared/utils/tracking";

@Component({
	tag: "ifx-link",
	styleUrl: "link.scss",
	shadow: true,
})
export class Link {
	@Element() el: HTMLIfxLinkElement;

	/**
	 * URL the link navigates to.
	 * @default undefined
	 */
	@Prop() readonly href: string = undefined;
	
	/**
	 * Target window for the link.
	 * @default "_self"
	 */
	@Prop() readonly target: string = "_self";
	
	/**
	 * Visual style variant of the link.
	 * @default "bold"
	 */
	@Prop() readonly variant: "underlined" | "bold" | "title" | "menu" = "bold";
	
	/**
	 * Font size of the link.
	 * @default "m"
	 */
	@Prop() readonly size: "s" | "m" | "l" | "xl" = "m";
	
	/**
	 * Disables interaction.
	 * @default false
	 */
	@Prop() readonly disabled: boolean = false;
	
	/**
	 * Optional filename or download hint for the linked resource.
	 * @default undefined
	 */
	@Prop() readonly download: string;
	
	/**
	 * Accessible label announced by assistive technologies.
	 * @default undefined
	 */
	@Prop() readonly ariaLabelText: string | null;

	@State() internalHref: string = "";
	@State() internalTarget: string = "";
	@State() internalVariant: string = "";

	private setInternalStates() {
		if (this.href) {
			this.internalHref = this.href.trim();
		} else {
			this.internalHref = undefined;
		}
		this.internalTarget = this.target.trim();
		this.internalVariant = this.variant.trim().toLowerCase();
	}

	componentWillRender() {
		this.setInternalStates();
	}

	async componentDidLoad() {
		if (!isNestedInIfxComponent(this.el)) {
			const framework = detectFramework();
			trackComponent("ifx-link", await framework);
		}
	}

	render() {
		return (
			<a
				tabindex="0"
				aria-label={this.ariaLabelText}
				aria-disabled={this.disabled || !this.internalHref}
				href={this.disabled ? undefined : this.internalHref}
				download={this.download}
				target={this.internalTarget}
				class={this.linkClassNames()}
			>
				<slot></slot>
			</a>
		);
	}

	private getSizeClass() {
		const small = this.size === "s" ? "small" : null;
		const medium = this.size === "m" ? "medium" : null;
		const large = this.size === "l" ? "large" : null;
		const extraLarge = this.size === "xl" ? "extraLarge" : null;

		if (small) {
			return small;
		} else if (medium) {
			return medium;
		} else if (large) {
			return large;
		} else if (extraLarge && this.internalVariant === "underlined") {
			return "large";
		} else if (extraLarge && this.internalVariant !== "underlined") {
			return extraLarge;
		} else return "";
	}

	private getVariantClass() {
		const bold = this.internalVariant === "bold" ? "bold" : null;
		const title = this.internalVariant === "title" ? "title" : null;
		const underlined =
			this.internalVariant === "underlined" ? "underlined" : null;
		const menu = this.internalVariant === "menu" ? "menu" : null;

		if (bold) {
			return bold;
		} else if (title) {
			return title;
		} else if (underlined) {
			return underlined;
		} else if (menu) {
			return menu;
		} else return bold;
	}

	private linkClassNames() {
		return classNames(
			"link",
			"primary",
			this.getVariantClass(),
			this.getSizeClass(),
			this.disabled ? "disabled" : "",
		);
	}
}
