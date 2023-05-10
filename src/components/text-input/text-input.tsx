import { Component, h, Element, Prop } from '@stencil/core';

@Component({
  tag: 'ifx-text-input',
  styleUrl: '../../index.scss', 
  shadow: true
})

export class TextInput {
  @Element() el;
  @Prop() placeholder: string = "Placeholder"
  @Prop() error: boolean = false;
  @Prop() errorMessage: string = ""
  @Prop() success: boolean = false;
  @Prop() disabled: boolean = false;

  render() {
    console.log('error message', this.errorMessage)
    return (
      <div class={`textInput__container ${this.disabled ? 'disabled' : ""}`}>
        <div class="textInput__top-wrapper">
          <label htmlFor="text-field">
            <slot />
          </label>
        </div>
        <div class="textInput__bottom-wrapper">
          <input 
          disabled={this.disabled}
          type="text" 
          id='text-field' 
          placeholder={this.placeholder} 
          class={`${this.error ? 'error' : ""} ${this.success ? "success" : ""}`}/>
          {this.error && 
            <div class="textInput__bottom-wrapper-error">
            {this.errorMessage}
          </div>}
        </div>
      </div>
    );
  }
}