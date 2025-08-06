import { Component, h, Event, Element, Prop, EventEmitter, Watch, Method, AttachInternals, State } from '@stencil/core';
import { trackComponent } from '../../global/utils/tracking'; 
import { isNestedInIfxComponent } from '../../global/utils/dom-utils';
import { detectFramework } from '../../global/utils/framework-detection';

@Component({
  tag: 'ifx-text-field',
  styleUrl: 'text-field.scss',
  shadow: true,
  formAssociated: true
})

export class TextField {
  private inputElement: HTMLInputElement;
  @Element() el;
  @Prop() placeholder: string = "Placeholder"
  @Prop({ mutable: true }) value: string = '';
  @Prop() error: boolean = false;
  @Prop() label: string = "";
  @Prop() icon: string = "";
  @Prop() caption: string = "";
  @Prop() size: string = 'm';
  @Prop() required: boolean = false;
  @Prop() optional: boolean = false;
  @Prop() success: boolean = false;
  @Prop() disabled: boolean = false;
  @Prop() maxlength?: number;
  @Prop() showDeleteIcon: boolean = false;
  @Prop() autocomplete: string = 'on'
  @Prop() type: 'text' | 'password' = 'text';
  @Prop() internalId: string = "text-field"
  @State() internalType: string;
  @Event() ifxInput: EventEmitter<String>;
  // @Prop({ reflect: true })
  // resetOnSubmit: boolean = false;

  @AttachInternals() internals: ElementInternals;


  @Watch('value')
  valueWatcher(newValue: string) {
    if (newValue !== this.inputElement.value) {
      this.inputElement.value = newValue;
    }
  }

  @Method()
  async reset() {
    this.value = '';
    this.inputElement.value = '';
  }

  handleDeleteContent() {
    this.reset();
    this.ifxInput.emit(this.value);
  }

  handleInput() {
    const query = this.inputElement.value;
    this.value = query; // update the value property when input changes
    this.internals.setFormValue(query) // update form value
    this.ifxInput.emit(this.value);
  }

  handleTypeProp() { 
   this.internalType = this.type === 'text' || this.type === 'password' ? this.type : 'text'
  }

  formResetCallback() {
    this.internals.setValidity({});
    this.internals.setFormValue("");
  }

  componentWillLoad() { 
    this.handleTypeProp()
  }

  async componentDidLoad() { 
    if(!isNestedInIfxComponent(this.el)) { 
      const framework = detectFramework();
      trackComponent('ifx-text-field', await framework)
    }
  }

  render() {
    return (
      <div aria-label="a text field for user input" aria-value={this.value} aria-disabled={this.disabled} class={`textInput__container ${this.disabled ? 'disabled' : ""}`}>
        <div class="textInput__top-wrapper">
          <label htmlFor={this.internalId}>
            <slot></slot>
            {this.optional && this.required ? (
              <span class="optional-required">(optional) *</span>
            ) : this.optional ? (
              <span class="optional">(optional)</span>
            ) : this.required ? (
              <span class={`required ${this.error ? 'error' : ""}`}>*</span>
            ) : null}
          </label>
        </div>

        <div class="textInput__bottom-wrapper">
          <div class="input-container">
            {this.icon && (
              <ifx-icon class='input-icon' icon={this.icon} />
            )}
            <input
              ref={(el) => (this.inputElement = el)}
              disabled={this.disabled}
              autocomplete={this.autocomplete}
              type={this.internalType}
              id={this.internalId}
              value={this.value}
              onInput={() => this.handleInput()}
              placeholder={this.placeholder}
              maxlength={this.maxlength}
              class={
                `${this.icon ? 'icon' : ""}
                ${this.error ? 'error' : ""} 
              ${this.size === "s" ? "input-s" : ""}
              ${this.success ? "success" : ""}`} />

              { (this.showDeleteIcon && this.value) && (
                <ifx-icon class="delete-icon" icon="cRemove16" onClick={() => this.handleDeleteContent()}></ifx-icon> 
              )}
          </div>
          {this.caption && !this.error &&
            <div class={`textInput__bottom-wrapper-caption ${this.disabled} ? disabled : ""`}>
              {this.caption}
            </div>}
          {this.error &&
            <div class="textInput__bottom-wrapper-caption error">
              {this.caption}
            </div>}
        </div>
      </div>
    );
  }
}
