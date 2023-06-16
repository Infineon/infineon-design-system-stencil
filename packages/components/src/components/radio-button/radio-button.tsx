import { Component, h, Prop, Element, State } from '@stencil/core';

@Component({
  tag: 'ifx-radio-button',
  styleUrl: 'radio-button.scss',
  shadow: true
})

export class RadioButton {
  @Element() el;
  @Prop() disabled: boolean = false;
  @Prop({ mutable: true }) checked: boolean = false;
  @Prop() error: boolean = false;
  @State() hasSlot: boolean = true;

  handleRadioButtonClick() {
    if (!this.disabled && !this.error) {
      this.checked = !this.checked;
    }
  }

  componentWillLoad() {
    const slot = this.el.innerHTML;
    if (slot) {
      this.hasSlot = true;
    } else this.hasSlot = false;
  }


  render() {
    return (
      <div class="radioButton__container">
        <div
          tabindex="0"
          onClick={this.handleRadioButtonClick.bind(this)}
          class={`radioButton__wrapper 
        ${this.checked ? 'checked' : ""} 
        ${this.disabled ? 'disabled' : ""}
        ${this.error ? 'error' : ""}`}>
          {this.checked && <div class="radioButton__wrapper-mark"></div>}
        </div>
        {this.hasSlot &&
          <div class={`label ${this.error ? 'error' : ""} ${this.disabled ? 'disabled' : ""}`} onClick={this.handleRadioButtonClick.bind(this)}>
            <slot />
          </div>}
      </div>
    );
  }
}