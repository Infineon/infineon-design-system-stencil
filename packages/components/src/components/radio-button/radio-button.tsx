import {
	AttachInternals,
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
	formAssociated: true,
})
export class RadioButton {
	@Element() el: HTMLIfxRadioButtonElement;
	private initialChecked: boolean = false;
	/** If true, the checkbox is disabled and not interactive. */
	@Prop() readonly disabled: boolean = false;
	/** Value submitted when the checkbox is checked. */
	@Prop() readonly value: string = "on";
	/** If true, the checkbox is shown in an error state. */
	@Prop() readonly error: boolean = false;
	/** Size of the checkbox (small or medium). */
	@Prop({ reflect: true }) readonly size: "s" | "m" = "s";
	/** Name attribute used when submitting the checkbox in a form. */
	@Prop({ reflect: true }) readonly name: string;
	/** Whether the checkbox is currently checked (can be updated). */
	@Prop({ mutable: true }) checked: boolean;
	@State() hasSlot: boolean = false;

	/** Returns the current checked state of the checkbox. */
	@Method()
	async isChecked(): Promise<boolean> {
		return !!this.checked;
	}

	private inputElement: HTMLInputElement;
	@AttachInternals() internals: ElementInternals;

	/** Fired when the checked state of the checkbox changes. */
	@Event({ eventName: "ifxChange" }) ifxChange: EventEmitter<boolean>;
	/** Fired when the checkbox enters or leaves an error state. */
	@Event({ eventName: "ifxError" }) ifxError: EventEmitter<boolean>;

	componentWillLoad() {
		// Initial state
		this.checked = !!this.checked;
		this.initialChecked = this.checked;
		this.hasSlot =
			!!this.el.querySelector("[slot]") || this.el.innerHTML.trim() !== "";
		this.updateFormValue();
	}

	async componentDidLoad() {
		if (!isNestedInIfxComponent(this.el)) {
			const framework = detectFramework();
			trackComponent("ifx-radio-button", await framework);
		}
	}

	@Watch("checked")
	handleCheckedChange(newValue: boolean) {
		const normalizedValue = !!newValue;
		if (newValue !== normalizedValue) {
			this.checked = normalizedValue;
			return;
		}

		this.updateFormValue();
	}

	updateFormValue() {
		if (this.checked) {
			this.internals.setFormValue(this.value);
		} else {
			this.internals.setFormValue(null);
		}
	}

	formResetCallback() {
		this.checked = this.initialChecked;
		this.updateFormValue();
	}

	formStateRestoreCallback(
		state: string | null,
		_mode: "restore" | "autocomplete",
	) {
		if (state) {
			this.checked = true;
			this.updateFormValue();
		} else {
			this.checked = false;
			this.internals.setFormValue(null);
		}
	}

	@Watch("error")
	errorChanged(newValue: boolean, oldValue: boolean) {
		if (newValue !== oldValue) {
			this.ifxError.emit(newValue);
		}
	}

	private handleRadioButtonClick(event: Event) {
		if (this.disabled) {
			event.stopPropagation();
			return;
		}

		const wasChecked = !!this.checked;
		this.inputElement.click();
		const nextChecked = !!this.inputElement.checked;
		if (nextChecked === wasChecked) {
			return;
		}

		this.checked = nextChecked;
		this.ifxChange.emit(nextChecked);

		const changeEvent = new CustomEvent("change", {
			bubbles: true,
			composed: true,
			detail: { checked: nextChecked },
		});
		this.el.dispatchEvent(changeEvent);
	}

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
			this.checked = false;
		}
	}

	render() {
		return (
			<div
				class={`radioButton__container ${this.size} ${this.disabled ? "disabled" : ""}`}
				onClick={(e) => this.handleRadioButtonClick(e)}
				onKeyDown={(e) => this.handleKeyDown(e)}
				role="radio"
				aria-checked={this.checked ? "true" : "false"}
				aria-disabled={this.disabled ? "true" : "false"}
				tabIndex={this.disabled ? -1 : 0}
			>
				<div
					class={`radioButton__wrapper 
            ${this.checked ? "checked" : ""}  
            ${this.error ? "error" : ""}`}
				>
					{this.checked && (
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
					checked={this.checked}
					disabled={this.disabled}
					onClick={(e) => e.stopPropagation()}
				/>
			</div>
		);
	}
}
