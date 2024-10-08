import { Component, h, Prop, Element, State, Event, EventEmitter, Watch, AttachInternals } from '@stencil/core';
 

@Component({
  tag: 'ifx-radio-button',
  styleUrl: 'radio-button.scss',
  shadow: true,
  formAssociated: true
})
export class RadioButton {
  @Element() el;
  @Prop() disabled: boolean = false;
  @Prop() value: boolean = false;
  @Prop() error: boolean = false;
  @Prop() size: "s" | "m" = "s";
  @State() internalValue: boolean;
  @State() hasSlot: boolean = true;

  @Event({ eventName: 'ifxChange' }) ifxChange: EventEmitter;

  @AttachInternals() internals: ElementInternals;
  
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


  handleRadioButtonClick() {
    if (!this.disabled && !this.error && !this.internalValue) {
      this.internalValue = !this.internalValue;
      this.el.shadowRoot.querySelector('.radioButton__wrapper').focus();
      this.ifxChange.emit(this.internalValue);
      this.internals.setFormValue(this.internalValue ? 'on' : null);
    }
  }

  formResetCallback() {
    this.internals.setFormValue(null);
  }

  render() {
    return (
      <div
        aria-label='a radio button' aria-value={this.value} aria-disabled={this.disabled}
        class={`radioButton__container ${this.size} ${this.disabled ? 'disabled' : ''}`}
        onClick={this.handleRadioButtonClick.bind(this)}
      >
        <div
          class={`radioButton__wrapper 
          ${this.internalValue ? 'checked' : ''} 
          ${this.disabled ? 'disabled' : ''} 
          ${this.error ? 'error' : ''}`}
          tabIndex={this.disabled ? -1 : 0}
        >
          {this.internalValue && <div class="radioButton__wrapper-mark"></div>}
        </div>
        {this.hasSlot && (
          <div class={`label ${this.size === "m" ? "label-m" : ""} ${this.disabled ? 'disabled' : ''}`}>
            <slot />
          </div>
        )}
      </div>
    );
  }
}
