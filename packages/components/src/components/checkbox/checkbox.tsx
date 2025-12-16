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
	// formAssociated: true
})
export class Checkbox {
	private inputElement: HTMLInputElement;

	@Element() el: HTMLIfxCheckboxElement;
	@Prop() readonly disabled: boolean = false;
	@Prop({ mutable: true }) checked: boolean = false;
	@Prop() readonly error: boolean = false;
	@Prop() readonly size: string = "m";
	@Prop() readonly indeterminate: boolean = false;
	@Prop() readonly value: string;
	@State() internalIndeterminate: boolean;

	@AttachInternals() internals: ElementInternals;

	@Event({ bubbles: true, composed: true }) ifxChange: EventEmitter;
	@Event({ bubbles: true, composed: true }) ifxError: EventEmitter;

	private handleCheckbox() {
		if (!this.disabled) {
			if (!this.inputElement.indeterminate) {
				this.checked = !this.checked;
			}
			if (this.checked && !this.internalIndeterminate) {
				if (this.value !== undefined) {
					//this.internals.setFormValue(this.value);
				} else {
					//this.internals.setFormValue("on")
				}
			} else {
				//this.internals.setFormValue(null)
			}
			this.ifxChange.emit(this.checked);
		}
	}

	@Method()
	async isChecked(): Promise<boolean> {
		return this.checked;
	}

	@Method()
	async toggleCheckedState(newVal: boolean) {
		this.checked = newVal;
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

	private handleKeydown(event) {
		// Keycode 32 corresponds to the Space key, 13 corresponds to the Enter key
		if (event.keyCode === 32 || event.keyCode === 13) {
			this.handleCheckbox();
			event.preventDefault(); // prevent the default action when space or enter is pressed
		}
	}

	componentWillLoad() {
		this.checked = this.checked;
		this.internalIndeterminate = this.indeterminate;
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
	 */
	// formResetCallback() {
	//   this.internals.setFormValue(null);
	// }

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
					hidden
					ref={(el) => (this.inputElement = el)}
					checked={this.checked}
					onChange={this.handleCheckbox.bind(this)} // Listen for changes here
					id="checkbox"
					value={`${this.value}`}
					disabled={this.disabled ? true : undefined}
				/>
				<div
					tabindex="0"
					onClick={this.handleCheckbox.bind(this)}
					onKeyDown={this.handleKeydown.bind(this)}
					role="checkbox"
					aria-checked={
						this.indeterminate ? "mixed" : this.checked.toString()
					}
					aria-disabled={this.disabled}
					aria-labelledby="label"
					class={`checkbox__wrapper 
          ${this.getCheckedClassName()}
        ${this.size === "m" ? "checkbox-m" : ""}
        ${this.indeterminate ? "indeterminate" : ""}
        ${this.disabled ? "disabled" : ""}`}
				>
					{this.checked && !this.internalIndeterminate && (
						<ifx-icon icon="check-16" aria-hidden="true"></ifx-icon>
					)}
				</div>
				{hasSlot && (
					<div
						id="label"
						class={`label ${this.size === "m" ? "label-m" : ""} ${this.disabled ? "disabled" : ""} `}
						onClick={this.handleCheckbox.bind(this)}
					>
						<slot />
					</div>
				)}
			</div>
		);
	}
}
