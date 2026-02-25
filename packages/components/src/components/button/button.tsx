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
	tag: "ifx-button",
	styleUrl: "button.scss",
	shadow: true,
})
export class Button {
	@Prop() readonly variant: "primary" | "secondary" | "tertiary" = "primary";
	@Prop() readonly theme: "default" | "danger" | "inverse" = "default";
	@Prop() readonly size: string = "m";
	@Prop() readonly disabled: boolean = false;
	@State() internalHref: string;
	@Prop() readonly href: string;
	@Prop() readonly target: string = "_self";
	@Prop() readonly type: "button" | "submit" | "reset" = "button";
	@Prop() readonly fullWidth: boolean = false;
	@Prop() readonly ariaLabel: string | null;
	@Element() el: HTMLIfxButtonElement;

	private focusableElement: HTMLElement;
	private nativeButton: HTMLButtonElement | HTMLInputElement;

	@Watch("href")
	setInternalHref(newValue: string) {
		this.internalHref = newValue;
	}

	@Method()
	async setFocus() {
		this.focusableElement.focus();
	}

	private insertNativeButton() {
		this.nativeButton = document.createElement("button");
		this.nativeButton.type = this.type;
		this.nativeButton.style.display = "none";
		this.el.closest("form").appendChild(this.nativeButton);
	}

	private handleFormAndInternalHref() {
		if (this.el.closest("form")) {
			if (this.el.href) {
				this.internalHref = undefined;
			}
			this.insertNativeButton();
		} else {
			this.internalHref = this.href;
		}
	}

	private handleButtonWidth() {
		if (this.fullWidth) {
			this.el.style.setProperty("--bw", "100%");
		} else {
			this.el.style.setProperty("--bw", "fit-content");
		}
	}

	componentWillLoad() {
		this.handleFormAndInternalHref();
	}

	async componentDidLoad() {
		if (!isNestedInIfxComponent(this.el)) {
			const framework = detectFramework();
			trackComponent("ifx-button", await framework);
		}
	}

	componentWillRender() {
		this.handleButtonWidth();
	}

	private handleClick = (ev: Event) => {
		if (this.el.shadowRoot) {
			const parentForm = this.el.closest("form");
			if (parentForm) {
				ev.preventDefault();

				if (this.type === "reset") {
					// If the button type is 'reset', manually reset all custom form fields
					this.resetClickHandler(); //this will reset all ifx-text-fields within a form
				} else {
					const fakeButton = document.createElement("button");
					if (this.type) {
						fakeButton.type = this.type;
					}
					fakeButton.style.display = "none";
					parentForm.appendChild(fakeButton);
					fakeButton.click();
					fakeButton.remove();
				}
			}
		}
	};

	private resetClickHandler() {
		const formElement = this.el.closest("form");
		if (!formElement) {
			return;
		}
		const customElements = formElement.querySelectorAll(
			"ifx-text-field, ifx-textarea",
		);
		customElements.forEach((element) => {
			if ("reset" in element && typeof element.reset === "function") {
				element.reset();
			}
		});
	}

	@Listen("keydown")
	handleKeyDown(ev: KeyboardEvent) {
		if (ev.key === " " || (ev.key === "Enter" && !this.disabled)) {
			this.focusableElement.click();
		}
	}

	@Listen("click", { capture: true })
	handleHostClick(event: Event) {
		if (this.disabled === true) {
			event.stopImmediatePropagation();
		}
	}

	private handleFocus(event: FocusEvent) {
		if (this.disabled) {
			event.preventDefault();
			this.focusableElement.blur();
		}
	}

	render() {
		return (
			<Host>
				<a
					role={this.href ? "link" : "button"}
					tabIndex={this.disabled ? -1 : 0}
					ref={(el) => (this.focusableElement = el)}
					class={this.getClassNames()}
					href={!this.disabled ? this.internalHref : undefined}
					target={this.target}
					onClick={this.handleClick}
					rel={this.target === "_blank" ? "noopener noreferrer" : undefined}
					onFocus={(event) => this.handleFocus(event)}
					aria-disabled={this.disabled ? "true" : null}
					aria-describedby={
						this.theme === "danger" ? "Dangerous action" : undefined
					}
					aria-label={this.ariaLabel || undefined}
				>
					<slot></slot>
				</a>
			</Host>
		);
	}

	private getVariantClass() {
		return `${this.variant}` === "secondary"
			? `secondary-${this.theme}`
			: `${this.variant}` === "tertiary"
				? `tertiary-${this.theme}`
				: `${this.theme}`;
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
		return classNames(
			"btn",
			this.size && `btn-${this.getSizeClass()}`,
			`btn-${this.getVariantClass()}`,
			this.disabled ? "disabled" : "",
		);
	}
}
