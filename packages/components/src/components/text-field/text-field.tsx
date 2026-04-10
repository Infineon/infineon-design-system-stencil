import {
	AttachInternals,
	Component,
	Element,
	Event,
	type EventEmitter,
	h,
	Method,
	Prop,
	State,
	Watch,
} from "@stencil/core";
import { isNestedInIfxComponent } from "../../shared/utils/dom-utils";
import { detectFramework } from "../../shared/utils/framework-detection";
import { trackComponent } from "../../shared/utils/tracking";

@Component({
	tag: "ifx-text-field",
	styleUrl: "text-field.scss",
	shadow: true,
	formAssociated: true,
})
export class TextField {
	private inputElement: HTMLInputElement;
	private initialValue = "";
	@Element() el: HTMLIfxTextFieldElement;
	/** Placeholder text shown when the field is empty. */
	@Prop() readonly placeholder: string = "Placeholder";
	/** Name attribute used when submitting the text field in a form. */
	@Prop({ reflect: true }) readonly name: string;
	/** Current value of the text field (can be updated programmatically). */
	@Prop({ mutable: true }) value: string = "";
	/** If true, shows the text field in an error state. */
	@Prop() readonly error: boolean = false;
	/** Label text shown above the text field. */
	@Prop() readonly label: string = "";
	/** Optional icon shown inside or next to the text field. */
	@Prop() readonly icon: string = "";
	/** Helper text shown below the text field. */
	@Prop() readonly caption: string = "";
	/** Size of the text field (e.g. s, m, l). */
	@Prop() readonly size: string = "m";
	/** Whether a value is required (used for validation). */
	@Prop() readonly required: boolean = false;
	/** If true, shows the text field in a success/valid state. */
	@Prop() readonly success: boolean = false;
	/** If true, the text field is disabled and not interactive. */
	@Prop() readonly disabled: boolean = false;
	/** If true, the text field is read-only but focusable. */
	@Prop() readonly readOnly: boolean = false;
	/** Maximum number of characters allowed. */
	@Prop() readonly maxlength?: number;
	/** If true, shows a delete/clear icon to remove the current value. */
	@Prop() readonly showDeleteIcon: boolean = false;
	/** Native autocomplete attribute value. */
	@Prop() readonly autocomplete: string = "on";
	/** Input type for the field (text or password). */
	@Prop() readonly type: "text" | "password" = "text";
	/** Internal ID used to link label and input elements. */
	@Prop() readonly internalId: string = "text-field";
	@State() internalType: string;
	/** Fired when the user types or the value changes. */
	@Event() ifxInput: EventEmitter<string>;
	// @Prop({ reflect: true })
	// resetOnSubmit: boolean = false;

	@AttachInternals() internals: ElementInternals;

	@Watch("value")
	valueWatcher(newValue: string) {
		const normalizedValue = newValue ?? "";
		if (this.inputElement && normalizedValue !== this.inputElement.value) {
			this.inputElement.value = normalizedValue;
		}
		this.syncFormValue(normalizedValue);
	}

	private syncFormValue(value: string = this.value ?? "") {
		this.internals.setFormValue(value);
	}

	/** Resets the text field value and clears the underlying input element. */
	@Method()
	async reset() {
		this.value = "";
		if (this.inputElement) {
			this.inputElement.value = "";
		}
		this.syncFormValue("");
	}

	formResetCallback() {
		this.value = this.initialValue;
		if (this.inputElement) {
			this.inputElement.value = this.initialValue;
		}
		this.syncFormValue(this.initialValue);
	}

	private handleDeleteContent() {
		if (!this.disabled && !this.readOnly) {
			this.reset();
			this.ifxInput.emit(this.value);
		}
	}

	private handleInput() {
		const query = this.inputElement.value;
		this.value = query;
		this.ifxInput.emit(this.value);
	}

	private handleTypeProp() {
		this.internalType =
			this.type === "text" || this.type === "password" ? this.type : "text";
	}

	componentWillLoad() {
		this.handleTypeProp();
		this.initialValue = this.value ?? "";
		this.syncFormValue(this.initialValue);
	}

	async componentDidLoad() {
		if (!isNestedInIfxComponent(this.el)) {
			const framework = detectFramework();
			trackComponent("ifx-text-field", await framework);
		}
	}

	render() {
		return (
			<div
				aria-label="a text field for user input"
				aria-value={this.value}
				aria-disabled={this.disabled}
				class={`textInput__container ${this.readOnly ? "readonly" : ""} ${this.disabled && !this.error ? "disabled" : ""}`}
			>
				<div class="textInput__top-wrapper">
					{this.label && (
						<label htmlFor={this.internalId}>
							<span>{this.label}</span>
							{this.required && (
								<span
									class={`required ${this.error && !this.readOnly ? "error" : ""}`}
								>
									*
								</span>
							)}
						</label>
					)}
				</div>

				<div class="textInput__bottom-wrapper">
					<div class="input-container">
						{this.icon && <ifx-icon class="input-icon" icon={this.icon} />}
						<input
							ref={(el) => (this.inputElement = el)}
							disabled={this.disabled && !this.error}
							autocomplete={this.autocomplete}
							type={this.internalType}
							id={this.internalId}
							value={this.value}
							onInput={() => this.handleInput()}
							placeholder={this.placeholder}
							readonly={this.readOnly}
							maxlength={this.maxlength}
							class={`${this.icon ? "icon" : ""}
                ${this.error ? "error" : ""} 
                ${this.readOnly ? "readonly" : ""} 
              ${this.size === "s" ? "input-s" : ""}
              ${this.success ? "success" : ""}`}
						/>

						{this.showDeleteIcon && this.value && (
							<ifx-icon
								class="delete-icon"
								icon="cRemove16"
								onClick={() => this.handleDeleteContent()}
							></ifx-icon>
						)}
					</div>
					{this.caption && (
						<div
							class={`textInput__bottom-wrapper-caption ${this.error && !this.readOnly ? "error" : ""} ${this.disabled && !this.readOnly && !this.error ? "disabled" : ""}`}
						>
							{this.caption}
						</div>
					)}
				</div>
			</div>
		);
	}
}
