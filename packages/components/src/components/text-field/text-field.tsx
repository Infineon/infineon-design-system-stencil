import { Component, h, Event, Element, Prop, EventEmitter, Watch, Method } from '@stencil/core';

@Component({
  tag: 'ifx-text-field',
  styleUrl: 'text-field.scss',
  shadow: true
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
  @Event() ifxInput: EventEmitter<String>;
  // @Prop({ reflect: true })
  // resetOnSubmit: boolean = false;


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


  handleInput() {
    const query = this.inputElement.value;
    this.value = query; // update the value property when input changes
    this.ifxInput.emit(this.value);
  }

  render() {
    return (
      <div class={`textInput__container ${this.disabled ? 'disabled' : ""}`}>
        <div class="textInput__top-wrapper">
          <label htmlFor="text-field">
            <slot></slot>
            {this.optional && this.required ? (
              <span class="optional-required">(optional) *</span>
            ) : this.optional ? (
              <span class="optional">(optional)</span>
            ) : this.required ? (
              <span class="required">*</span>
            ) : null}
          </label>
        </div>

        <div class="textInput__bottom-wrapper">
          <div class="input-container">
            {this.icon && (
              <ifx-icon icon={this.icon} />
            )}
            <input
              ref={(el) => (this.inputElement = el)}
              disabled={this.disabled}
              type="text"
              id='text-field'
              value={this.value}
              onInput={() => this.handleInput()}
              placeholder={this.placeholder}
              class={
                `${this.icon ? 'icon' : ""}
                ${this.error ? 'error' : ""} 
              ${this.size === "s" ? "input-s" : ""}
              ${this.success ? "success" : ""}`} />
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
