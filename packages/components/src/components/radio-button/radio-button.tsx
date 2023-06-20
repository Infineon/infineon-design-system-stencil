import { Component, h, Prop, Element, State, Event, EventEmitter, Watch } from '@stencil/core';

@Component({
  tag: 'ifx-radio-button',
  styleUrl: 'radio-button.scss',
  shadow: true
})

export class RadioButton {
  @Element() el;
  @Prop() disabled: boolean = false;
  @Prop({ mutable: true }) value: boolean = false;
  @Prop() error: boolean = false;
  @State() internalValue: boolean;
  @State() hasSlot: boolean = true;

  @Event({ eventName: 'ifxChange' }) ifxChange: EventEmitter;

  handleRadioButtonClick() {
    if (!this.disabled && !this.error) {
      this.internalValue = !this.internalValue;
      this.ifxChange.emit(this.internalValue);
    }
  }

  @Watch('value')
  valueChanged(newValue: boolean, oldValue: boolean) {
    if (newValue !== oldValue) {
      this.internalValue = newValue;
    }
  }

  componentWillLoad() {
    this.internalValue = this.value;

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
        ${this.internalValue ? 'value' : ""} 
        ${this.disabled ? 'disabled' : ""}
        ${this.error ? 'error' : ""}`}>
          {this.internalValue && <div class="radioButton__wrapper-mark"></div>}
        </div>
        {this.hasSlot &&
          <div class={`label ${this.error ? 'error' : ""} ${this.disabled ? 'disabled' : ""}`} onClick={this.handleRadioButtonClick.bind(this)}>
            <slot />
          </div>}
      </div>
    );
  }
}
