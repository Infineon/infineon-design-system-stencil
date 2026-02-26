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
import { isNestedInIfxComponent } from "../..//shared/utils/dom-utils";
import { detectFramework } from "../..//shared/utils/framework-detection";
import { trackComponent } from "../../shared/utils/tracking";

@Component({
	tag: "ifx-checkbox",
	styleUrl: "checkbox.scss",
	shadow: true,
	formAssociated: true
})
export class Checkbox {
	private inputElement: HTMLInputElement;

	@Element() el: HTMLIfxCheckboxElement;

	/**
	 * Indicates whether the checkbox is disabled. When true, the checkbox cannot be interacted with and will have a disabled appearance.
	 */
	@Prop() readonly disabled: boolean = false;
	 
	/**
	 * The state of the checkbox. When true, the checkbox is checked; when false, it is unchecked.
	 */
	@Prop({ mutable: true }) checked: boolean = false;

	/**
	 * Indicates whether the checkbox is in an indeterminate state. When true, the checkbox will have an indeterminate appearance, which is typically used to indicate a "partially selected" state in a group of checkboxes.
	 */
	@Prop() readonly indeterminate: boolean = false;

	
	/**
	 * Indicates whether the checkbox is in an error state. When true, the checkbox will have an error appearance.
	 */
	@Prop() readonly error: boolean = false;
	
	/**
	 * The size of the checkbox. Can be "m" for medium (default) or "s" for small. This prop controls the overall dimensions of the checkbox and its label.
	 */
	@Prop() readonly size: string = "m";

	/**
	 * The value associated with the checkbox. 
	 * This value is typically submitted with a form when the checkbox is checked. 
	 * If not specified, it defaults to "on" when the checkbox is checked.
	 */
	@Prop() readonly value: string;


	@State() internalIndeterminate: boolean;

	@AttachInternals() internals: ElementInternals;

	// Store the initial checked state for form reset
	private initialChecked: boolean;

	/**
	 * Event emitted when the checkbox state changes.
	 * Emits the new checked state as a boolean value.
	 */
	@Event({ bubbles: true, composed: true }) ifxChange: EventEmitter<boolean>;

	/** 
	 * Event emitted when the error state changes.
	 * Emits the new error state as a boolean value.
	 */
	@Event({ bubbles: true, composed: true }) ifxError: EventEmitter<boolean>;

	/**
	 * Method to get the current checked state of the checkbox.
	 * @returns A promise that resolves to a boolean indicating whether the checkbox is checked.
	 */
	@Method()
	async isChecked(): Promise<boolean> {
		return this.checked;
	}

	/**
	 * Method to set the checked state of the checkbox.
	 * @param newVal A boolean value to set the checked state of the checkbox.
	 * @returns A promise that resolves when the checked state has been updated.
	 */
	@Method()
	async setChecked(newVal: boolean) {
		this.checked = newVal;
	}

	/**
	 * @deprecated Use `setChecked` instead.
	 */
	@Method()
	async toggleCheckedState(newVal: boolean) {
		this.checked = newVal;
	}

	/**
	 * Toggles the checked state.
	 * @returns Resolves when the toggle is complete.
	 */
	@Method()
	async toggle(): Promise<boolean> {
		this.handleCheckbox();
		return Promise.resolve(this.checked);
	}

	@Watch("checked")
	valueChanged(newValue: boolean, oldValue: boolean) {
		if (newValue !== oldValue) {
			this.checked = newValue;
			this.inputElement.checked = this.checked; // update the checkbox's checked property
		}
	}

	@Watch("error")
	errorChanged(newValue: boolean, oldValue: boolean) {
		if (newValue !== oldValue) {
			this.ifxError.emit(newValue);
		}
	}

	@Watch("indeterminate")
	indeterminateChanged(newValue: boolean, oldValue: boolean) {
		if (newValue !== oldValue) {
			this.internalIndeterminate = newValue;
			this.inputElement.indeterminate = this.internalIndeterminate; // update the checkbox's indeterminate property
		}
	}

	componentWillLoad() {
		this.checked = this.checked;
		this.internalIndeterminate = this.indeterminate;
		// Store initial checked state for form reset
		this.initialChecked = this.checked;
	}

	async componentDidLoad() {
		if (!isNestedInIfxComponent(this.el)) {
			const framework = detectFramework();
			trackComponent("ifx-checkbox", await framework);
		}
	}

	componentDidRender() {
		this.inputElement.indeterminate = this.internalIndeterminate;
	}

	/**
	 * Callback for form association.
	 * Called whenever the form is reset.
	 * Resets the checkbox to its initial state.
	 */
	formResetCallback() {
		// Reset to initial checked state
		this.checked = this.initialChecked;
		if (this.inputElement) {
			this.inputElement.checked = this.initialChecked;
		}
		
		// Update form value based on initial state
		if (this.initialChecked) {
			const formValue = this.value !== undefined ? this.value : "on";
			this.internals.setFormValue(formValue);
		} else {
			this.internals.setFormValue(null);
		}
	}

	private handleCheckbox(fromInput: boolean = false) {
		if (this.disabled) {
			if (fromInput) {
				this.inputElement.checked = this.checked;
			}
			return;
		}

		if (fromInput) {
			if (this.inputElement.indeterminate) {
				this.inputElement.indeterminate = false;
				this.internalIndeterminate = false;
			}
			this.checked = this.inputElement.checked;
		} else if (!this.inputElement.indeterminate) {
			this.checked = !this.checked;
			this.inputElement.checked = this.checked;
		}

		if (this.checked && !this.internalIndeterminate) {
			if (this.value !== undefined) {
				this.internals.setFormValue(this.value);
			} else {
				this.internals.setFormValue("on")
			}
		} else {
			this.internals.setFormValue(null)
		}
		this.ifxChange.emit(this.checked);
	}

	private setInputElement(el: HTMLInputElement) {
		this.inputElement = el;
	}

	render() {
		const slot = this.el.innerHTML;
		let hasSlot = false;
		if (slot) {
			hasSlot = true;
		}
		return (
			<div class="checkbox__container">
				<input
					type="checkbox"
					class="checkbox__input"
					ref={(el) => this.setInputElement(el)}
					checked={this.checked}
					onChange={() => this.handleCheckbox(true)}
					id="checkbox"
					value={`${this.value}`}
					disabled={this.disabled ? true : undefined}
				/>
				<label
					htmlFor="checkbox"
					class={`checkbox__wrapper 
						${this.getCheckedClassName()}
						${this.size === "m" ? "checkbox-m" : ""}
						${this.indeterminate ? "indeterminate" : ""}
						${this.disabled ? "disabled" : ""}`}
				>
					{this.checked && !this.internalIndeterminate && (
						<ifx-icon icon="check-16"></ifx-icon>
					)}
				</label>
				{hasSlot && (
					<label
						id="label"
						htmlFor="checkbox"
						class={`label ${this.size === "m" ? "label-m" : ""} ${this.disabled ? "disabled" : ""} `}
					>
						<slot />
					</label>
				)}
			</div>
		);
	}

	private getCheckedClassName() {
		if (this.error) {
			if (this.checked) {
				return "checked error";
			} else {
				return "error";
			}
		} else if (this.checked) {
			return "checked";
		} else return "";
	}
}
