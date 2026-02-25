import {
	AttachInternals,
	Component,
	Element,
	Event,
	type EventEmitter,
	h,
	Method,
	Prop,
	Watch,
} from "@stencil/core";
import { isNestedInIfxComponent } from "../..//shared/utils/dom-utils";
import { detectFramework } from "../..//shared/utils/framework-detection";
import { trackComponent } from "../../shared/utils/tracking";

/**
 * A toggle switch component for binary on/off states.
 *
 * This component is form-associated, meaning it can participate in HTML forms
 * just like native form controls. It supports form validation, form reset,
 * and browser autofill/restore functionality.
 *
 *
 * Code organization follows the Stencil Style Guide:
 * https://stenciljs.com/docs/style-guide
 *
 * 1. Own Properties (internal, not exposed)
 * 2. @Element (reference to host)
 * 3. @State (internal reactive state)
 * 4. @Prop (public API properties)
 * 5. @Event (emitted events)
 * 6. Lifecycle methods
 * 7. @Listen decorators
 * 8. @Method (public methods)
 * 9. Private methods
 * 10. render()
 *
 * Framework Integration:
 * - Vue: Supports v-model binding on the 'checked' property
 * - Angular: Supports [(ngModel)] and reactive forms (formControl)
 * - React: Standard prop binding and event handling
 *
 * Configuration in stencil.config.ts enables framework-specific bindings.
 */
@Component({
	tag: "ifx-switch",
	styleUrl: "switch.scss",
	shadow: true,
	formAssociated: true,
})
export class Switch {
	// 1. Own Properties - internal only, not exposed on host element
	private initialChecked: boolean;

	// 2. Reference to Host Element - used for shadow DOM queries and nesting checks
	@Element() el: HTMLIfxSwitchElement;

	// 3. State Variables - internal reactive state
	// (none - this component uses @Prop instead)

	// 4. Public Properties - exposed as both properties and attributes

	/**
	 * Sets the checked state of the switch.
	 * @default false
	 */
	@Prop({ mutable: true }) checked: boolean = false;

	// @Watch goes right after the @Prop it monitors - keeps related code together
	@Watch("checked")
	onCheckedChange(newValue: boolean, oldValue: boolean) {
		if (newValue !== oldValue) {
			this.checked = newValue;
			this.updateFormValue();
		}
	}

	/**
	 * Disables user interaction when true.
	 * @default false
	 */
	@Prop() readonly disabled: boolean = false;

	/**
	 * Form field name.
	 * @default ""
	 */
	@Prop() readonly name: string = "";

	/**
	 * Form field value when checked.
	 * If not set, defaults to "on" (standard checkbox behavior).
	 * @default "on"
	 */
	@Prop() readonly value: string = "on";

	// ElementInternals for form association - enables participation in HTML forms
	@AttachInternals() internals: ElementInternals;

	// 5. Events - custom events emitted by the component

	/**
	 * Emitted when checked state changes.
	 */
	@Event({ eventName: "ifxChange" }) ifxChange: EventEmitter<boolean>;

	// 6. Lifecycle Methods - ordered by execution flow

	componentWillLoad() {
		// Remember initial state for form reset
		this.initialChecked = this.checked;
		// Set initial form value when component loads
		this.updateFormValue();
	}

	async componentDidLoad() {
		// Only track top-level components to avoid duplicate analytics
		if (!isNestedInIfxComponent(this.el)) {
			const framework = detectFramework();
			trackComponent("ifx-switch", await framework);
		}

		this.toggleLabelGap();
	}

	/**
	 * Form-Associated Lifecycle Callbacks
	 * ------------------------------------
	 * These are called by the browser to integrate with native form behavior.
	 * See: https://stenciljs.com/docs/form-associated
	 *
	 * Note: formAssociatedCallback and formDisabledCallback are not implemented
	 * as they're not needed for this component. They would only be useful if we
	 * needed to react to form association changes or support fieldset-level disabling.
	 */

	/**
	 * Called when the form is reset.
	 * Resets the switch to its initial state and clears form value.
	 */
	formResetCallback() {
		this.checked = this.initialChecked;
		this.updateFormValue();
	}

	/**
	 * Called when the browser restores form state (e.g., browser autofill or back button).
	 * @param state - The saved state to restore
	 * @param mode - "restore" (browser restart/navigation) or "autocomplete" (autofill)
	 */
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

	// 7. Listeners
	// (none - this component handles events inline in render)

	// 8. Public Methods - MUST be async, exposed on host element

	/**
	 * Returns the current checked state.
	 */
	@Method()
	async isChecked(): Promise<boolean> {
		return this.checked;
	}

	/**
	 * Sets the checked state.
	 * @param checked - New checked state.
	 */
	@Method()
	async setChecked(checked: boolean): Promise<void> {
		this.checked = checked;
		return Promise.resolve();
	}

	/**
	 * Toggles the checked state.
	 * @returns Resolves when the toggle is complete.
	 */
	@Method()
	async toggle(): Promise<boolean> {
		return Promise.resolve(this.toggleSwitch());
	}

	// 9. Private Methods - internal helpers, not callable externally

	private handleKeyDown(event: KeyboardEvent): void {
		if (this.disabled) return;

		if (event.key === "Enter" || event.key === " ") {
			this.toggleSwitch();
		}
	}

	private toggleSwitch(): boolean {
		if (this.disabled) return;

		this.checked = !this.checked;
		this.updateFormValue();
		this.ifxChange.emit(this.checked);

		return this.checked;
	}

	/**
	 * Updates the form value based on the current checked state.
	 * Called whenever checked state changes to keep form data in sync.
	 */
	private updateFormValue(): void {
		if (this.checked) {
			this.internals.setFormValue(this.value);
		} else {
			this.internals.setFormValue(null);
		}
	}

	private toggleLabelGap(): void {
		const slot = this.el.shadowRoot.querySelector("slot");
		const container = this.el.shadowRoot.querySelector(".container");

		if (slot.assignedNodes().length) {
			container.classList.add("gap");
		} else {
			container.classList.remove("gap");
		}
	}

	// 10. render() - always last, called when state/props change
	render() {
		return (
			<div
				class="container"
				role="switch"
				aria-checked={this.checked ? "true" : "false"}
				aria-disabled={this.disabled ? "true" : "false"}
				aria-labelledby="switch-label"
				tabIndex={this.disabled ? -1 : 0}
				onClick={() => this.toggleSwitch()}
				onKeyDown={(event) => this.handleKeyDown(event)}
			>
				{/* Checkbox */}
				<div
					class={`switch__checkbox-container ${this.checked ? "checked" : ""} ${this.disabled ? "disabled" : ""}`}
				>
					<div class="switch__checkbox-wrapper">
						{/*
						 * The behavior of a switch is similar to a checkbox.
						 * Therefore, we use a hidden checkbox input to leverage native behavior.
						 */}
						<input
							type="checkbox"
							hidden
							name={this.name}
							disabled={this.disabled}
							checked={this.checked}
							value={this.value}
						/>
						<div
							class={`switch ${this.checked ? "checked" : ""} ${this.disabled ? "disabled" : ""}`}
						/>
					</div>
				</div>

				{/* Label */}
				<div class={`switch__label-wrapper ${this.disabled ? "disabled" : ""}`}>
					<label htmlFor="switch">
						<slot onSlotchange={() => this.toggleLabelGap()} />
					</label>
				</div>
			</div>
		);
	}
}
