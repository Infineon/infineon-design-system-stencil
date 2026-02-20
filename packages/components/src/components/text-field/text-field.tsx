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
	// formAssociated: true
})
export class TextField {
	private inputElement: HTMLInputElement;
	@Element() el: HTMLIfxTextFieldElement;
	@Prop() readonly placeholder: string = "Placeholder";
	@Prop({ mutable: true }) value: string = "";
	@Prop() readonly error: boolean = false;
	@Prop() readonly label: string = "";
	@Prop() readonly icon: string = "";
	@Prop() readonly caption: string = "";
	@Prop() readonly size: string = "m";
	@Prop() readonly required: boolean = false;
	@Prop() readonly success: boolean = false;
	@Prop() readonly disabled: boolean = false;
	@Prop() readonly readOnly: boolean = false;
	@Prop() readonly maxlength?: number;
	@Prop() readonly showDeleteIcon: boolean = false;
	@Prop() readonly autocomplete: string = "on";
	@Prop() readonly type: "text" | "password" = "text";
	@Prop() readonly internalId: string = "text-field";
	@State() internalType: string;
	@Event() ifxInput: EventEmitter<string>;
	// @Prop({ reflect: true })
	// resetOnSubmit: boolean = false;

	@AttachInternals() internals: ElementInternals;

	@Watch("value")
	valueWatcher(newValue: string) {
		if (newValue !== this.inputElement.value) {
			this.inputElement.value = newValue;
		}
	}

	@Method()
	async reset() {
		this.value = "";
		this.inputElement.value = "";
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
		//this.internals.setFormValue(query) // update form value
		this.ifxInput.emit(this.value);
	}

	private handleTypeProp() {
		this.internalType =
			this.type === "text" || this.type === "password" ? this.type : "text";
	}

	// formResetCallback() {
	//   this.internals.setValidity({});
	//   this.internals.setFormValue("");
	// }

	componentWillLoad() {
		this.handleTypeProp();
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
