import {
	Component,
	Element,
	Event,
	type EventEmitter,
	h,
	Listen,
	Method,
	Prop,
	State,
	Watch,
} from "@stencil/core";
import { isNestedInIfxComponent } from "../..//shared/utils/dom-utils";
import { detectFramework } from "../..//shared/utils/framework-detection";
import { trackComponent } from "../../shared/utils/tracking";

@Component({
	tag: "ifx-radio-button",
	styleUrl: "radio-button.scss",
	shadow: true,
	// formAssociated: true
})
export class RadioButton {
	@Element() el: HTMLElement;
	@Prop() disabled: boolean = false;
	@Prop() value: string;
	@Prop() error: boolean = false;
	@Prop({ reflect: true }) size: "s" | "m" = "s";
	@Prop({ reflect: true }) name: string;
	@Prop({ mutable: true }) checked: boolean;
	@State() internalChecked: boolean = false;
	@State() hasSlot: boolean = false;

	@Method()
	async isChecked(): Promise<boolean> {
		return this.internalChecked;
	}

	private inputElement: HTMLInputElement;
	//private internals: ElementInternals;
	private fallbackInput: HTMLInputElement;

	@Event({ eventName: "ifxChange" }) ifxChange: EventEmitter;
	@Event({ eventName: "ifxError" }) ifxError: EventEmitter;

	componentWillLoad() {
		// Fallback for form association
		this.fallbackInput = document.createElement("input");
		this.fallbackInput.type = "radio";
		this.fallbackInput.hidden = true;
		this.fallbackInput.className = "_ifx-radiobutton-fallback";
		this.fallbackInput.style.cssText = `
      display: none !important;
      position: absolute !important;
      opacity: 0 !important;
      pointer-events: none !important;
      width: 0 !important;
      height: 0 !important;
    `;
		this.fallbackInput.setAttribute("aria-hidden", "true");
		this.fallbackInput.tabIndex = -1;
		this.el.appendChild(this.fallbackInput);

		// Initialize ElementInternals if supported
		if ("attachInternals" in HTMLElement.prototype) {
			try {
				//this.internals = this.el.attachInternals();
			} catch (e) {
				console.warn("ElementInternals not supported");
			}
		}

		// Initial state
		this.internalChecked = this.checked || false;
		this.hasSlot =
			!!this.el.querySelector("[slot]") || this.el.innerHTML.trim() !== "";
	}

	async componentDidLoad() {
		if (!isNestedInIfxComponent(this.el)) {
			const framework = detectFramework();
			trackComponent("ifx-radio-button", await framework);
		}
	}

	@Watch("checked")
	handleCheckedChange(newValue: boolean) {
		this.internalChecked = newValue;
	}

	@Watch("internalChecked")
	updateFormValue() {
		// Update both ElementInternals and fallback input
		// if (this.internals?.setFormValue) {
		//   this.internals.setFormValue(this.internalChecked ? this.value : null);
		// }
		this.fallbackInput.checked = this.internalChecked;
		this.fallbackInput.name = this.name;
		this.fallbackInput.value = this.value;
		this.fallbackInput.disabled = this.disabled;
	}

	@Watch("error")
	errorChanged(newValue: boolean, oldValue: boolean) {
		if (newValue !== oldValue) {
			this.ifxError.emit(newValue);
		}
	}

	handleRadioButtonClick(event: Event) {
		if (this.disabled) {
			event.stopPropagation();
			return;
		}

		this.inputElement.click();
		this.internalChecked = this.inputElement.checked;
		this.checked = this.internalChecked;
		this.ifxChange.emit(this.internalChecked);

		const changeEvent = new CustomEvent("change", {
			bubbles: true,
			composed: true,
			detail: { checked: this.internalChecked },
		});
		this.el.dispatchEvent(changeEvent);
	}

	@Listen("keydown")
	handleKeyDown(ev: KeyboardEvent) {
		if ([" ", "Enter"].includes(ev.key)) {
			ev.preventDefault();
			this.handleRadioButtonClick(new PointerEvent("click"));
		}
	}

	@Listen("change", { target: "document" })
	handleExternalChange(event: Event) {
		const target = event.target as HTMLElement;
		if (
			target === this.el ||
			target.tagName.toLowerCase() !== "ifx-radio-button"
		)
			return;

		if (target.getAttribute("name") === this.name) {
			this.internalChecked = false;
		}
	}

	render() {
		return (
			<div
				role="radio"
				aria-checked={String(this.internalChecked)}
				aria-disabled={String(this.disabled)}
				class={`radioButton__container ${this.size} ${this.disabled ? "disabled" : ""}`}
				onClick={(e) => this.handleRadioButtonClick(e)}
				tabindex={this.disabled ? -1 : 0}
			>
				<div
					class={`radioButton__wrapper 
            ${this.internalChecked ? "checked" : ""}  
            ${this.error ? "error" : ""}`}
				>
					{this.internalChecked && (
						<div class="radioButton__wrapper-mark"></div>
					)}
				</div>

				{this.hasSlot && (
					<div class={`label ${this.size === "m" ? "label-m" : ""}`}>
						<slot />
					</div>
				)}

				<input
					type="radio"
					hidden
					ref={(el) => (this.inputElement = el)}
					name={this.name}
					value={this.value}
					checked={this.internalChecked}
					disabled={this.disabled}
					onClick={(e) => e.stopPropagation()}
				/>
			</div>
		);
	}
}
