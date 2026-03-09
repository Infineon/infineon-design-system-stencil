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
  formAssociated: true,
})
export class Checkbox {
  private inputElement: HTMLInputElement;
  private get isDisabled(): boolean {
    return this.disabled && !this.readOnly && !this.error;
  }
  // Store the initial checked state for form reset
  private initialChecked: boolean;
  @Element() el: HTMLIfxCheckboxElement;
  @Prop() readonly disabled: boolean = false;
  @Prop() readonly readOnly: boolean = false;
  /**
   * The state of the checkbox. When true, the checkbox is checked; when false, it is unchecked.
   */
  // eslint-disable-next-line @stencil-community/strict-mutable
  @Prop({ mutable: true }) checked: boolean = false;

  /**
   * The name attribute of the input element.
   */
  @Prop() readonly name: string;
  @Prop() readonly error: boolean = false;
  @Prop() readonly size: string = "m";
  @Prop() readonly indeterminate: boolean = false;
  @Prop() readonly value: string;
  @State() internalChecked: boolean;
  @State() internalIndeterminate: boolean;
  @AttachInternals() internals: ElementInternals;
  @Event({ bubbles: true, composed: true }) ifxChange: EventEmitter;
  @Event({ bubbles: true, composed: true }) ifxError: EventEmitter;
  private handleCheckbox() {
    if (this.isDisabled || this.readOnly || this.internalIndeterminate) return;
    this.internalChecked = !this.internalChecked;
    if (this.inputElement) this.inputElement.checked = this.internalChecked;
    if (this.internalChecked && !this.internalIndeterminate) {
      if (this.value !== undefined) {
        this.internals.setFormValue(this.value);
      } else {
        this.internals.setFormValue("on");
      }
    } else {
      this.internals.setFormValue(null);
    }
    this.ifxChange.emit(this.internalChecked);
  }
  @Method()
  async isChecked(): Promise<boolean> {
    return this.internalChecked;
  }
  @Method()
  async toggleCheckedState(newVal: boolean) {
    this.internalChecked = newVal;
  }
  @Watch("checked")
  valueChanged(newValue: boolean, oldValue: boolean) {
    if (newValue !== oldValue) {
      this.internalChecked = newValue;
      if (this.inputElement) {
        this.inputElement.checked = this.internalChecked;
      }
      // Update form value when checked changes
      if (this.internalChecked && !this.internalIndeterminate) {
        const formValue = this.value !== undefined ? this.value : "on";
        this.internals.setFormValue(formValue);
      } else {
        this.internals.setFormValue(null);
      }
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

      // Update form value when indeterminate state changes
      if (newValue) {
        // Indeterminate state should not submit a value
        this.internals.setFormValue(null);
      } else if (this.checked) {
        // If becoming determinate and checked, set the form value
        const formValue = this.value !== undefined ? this.value : "on";
        this.internals.setFormValue(formValue);
      }
    }
  }
  private handleKeydown(event) {
    // Keycode 32 corresponds to the Space key, 13 corresponds to the Enter key
    if (
      !this.isDisabled &&
      !this.readOnly &&
      !this.internalIndeterminate &&
      (event.keyCode === 32 || event.keyCode === 13)
    ) {
      this.handleCheckbox();
      event.preventDefault(); // prevent the default action when space or enter is pressed
    }
  }
  componentWillLoad() {
    this.internalChecked = this.checked;
    this.internalIndeterminate = this.indeterminate;
    // Store initial checked state for form reset
    this.initialChecked = this.checked;
  }
  async componentDidLoad() {
    if (!isNestedInIfxComponent(this.el)) {
      const framework = detectFramework();
      trackComponent("ifx-checkbox", await framework);
    }
    // Set initial form value if checkbox is checked and not indeterminate
    if (this.internalChecked && !this.internalIndeterminate) {
      const formValue = this.value !== undefined ? this.value : "on";
      this.internals.setFormValue(formValue);
    } else {
      this.internals.setFormValue(null);
    }
  }
  componentDidRender() {
    if (this.inputElement)
      this.inputElement.indeterminate = this.internalIndeterminate;
  }
  /**
   * Callback for form association.
   * Called whenever the form is reset.
   * Resets the checkbox to its initial state.
   */
  formResetCallback() {
    // Reset to initial checked state
    this.internalChecked = this.initialChecked;
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
  private getCheckedClassName() {
    const classNames: string[] = [];
    if (this.internalChecked) classNames.push("checked");
    if (this.error) classNames.push("error");
    if (this.readOnly) classNames.push("read-only");
    return classNames.join(" ");
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
          name={this.name}
          hidden
          ref={(el) => (this.inputElement = el)}
          checked={this.internalChecked}
          onChange={this.handleCheckbox.bind(this)} // Listen for changes here
          id="checkbox"
          value={`${this.value}`}
          disabled={this.isDisabled || this.readOnly ? true : undefined}
        />
        <div
          tabindex={this.readOnly ? "-1" : "0"}
          onClick={this.readOnly ? undefined : this.handleCheckbox.bind(this)}
          onKeyDown={this.readOnly ? undefined : this.handleKeydown.bind(this)}
          role="checkbox"
          aria-checked={
            this.internalIndeterminate
              ? "mixed"
              : this.internalChecked.toString()
          }
          aria-disabled={this.isDisabled || this.readOnly}
          aria-readonly={this.readOnly}
          aria-labelledby="label"
          class={`checkbox__wrapper 
          ${this.getCheckedClassName()}
        ${this.size === "m" ? "checkbox-m" : ""}
        ${this.internalIndeterminate ? "indeterminate" : ""}
        ${this.isDisabled ? "disabled" : ""}`}
        >
          {this.internalChecked && !this.internalIndeterminate && (
            <ifx-icon icon="check-16" aria-hidden="true"></ifx-icon>
          )}
        </div>
        {hasSlot && (
          <div
            id="label"
            class={`label ${this.size === "m" ? "label-m" : ""} ${
              this.isDisabled ? "disabled" : ""
            } ${this.readOnly ? "read-only" : ""}`}
            onClick={this.readOnly ? undefined : this.handleCheckbox.bind(this)}
          >
            <slot />
          </div>
        )}
      </div>
    );
  }
}
