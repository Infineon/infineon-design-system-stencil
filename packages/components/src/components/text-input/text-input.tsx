import { Component, h, Event, Element, Prop, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ifx-text-input',
  styleUrl: 'text-input.scss',
  shadow: true
})

export class TextInput {
  @Element() el;
  @Prop() placeholder: string = "Placeholder"

  @Prop({ mutable: true }) value: string = '';
  @Prop() error: boolean = false;
  @Prop() errorMessage: string = ""
  @Prop() success: boolean = false;
  @Prop() disabled: boolean = false;
  @Prop() readonly: boolean = false;
  @Prop() icon: boolean = false;
  @Event({ bubbles: true, composed: true }) ifxInput: EventEmitter;

  handleInput(e) {
    this.ifxInput.emit(e.target.value);
  }

  render() {
    return (
      <div class={`textInput__container ${this.disabled ? 'disabled' : ""}`}>
        <div class="textInput__top-wrapper">
          <label htmlFor="text-field">
            <slot />
          </label>
        </div>
        <div class="textInput__bottom-wrapper">
          <input
            readonly={this.readonly}
            disabled={this.disabled}
            type="text"
            id='text-field'
            value={this.value}
            onInput={(ev) => this.handleInput(ev)}
            placeholder={this.placeholder}
            class={`${this.error ? 'error' : ""} ${this.success ? "success" : ""}`} />
          {this.error &&
            <div class="textInput__bottom-wrapper-error">
              {this.errorMessage}
            </div>}

          {this.icon && <ifx-icon icon='chevron-down-16'></ifx-icon>}

        </div>
      </div>
    );
  }
}
