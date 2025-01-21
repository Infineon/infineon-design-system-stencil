import { Component, h, Prop, Element, State, Event, EventEmitter, Listen, Method } from '@stencil/core';
 

@Component({
  tag: 'ifx-radio-button',
  styleUrl: 'radio-button.scss',
  shadow: false,
  formAssociated: false
})
export class RadioButton {
  @Element() el;
  @Prop() disabled: boolean = false;
  @Prop() value: string;
  @Prop() error: boolean = false;
  @Prop() size: "s" | "m" = "s";
  @Prop() name: string;
  @Prop() checked: boolean;
  @State() internalChecked: boolean = false;
  @State() hasSlot: boolean = true;

  @State() inputElement: HTMLInputElement;

  @Event({ eventName: 'ifxChange' }) ifxChange: EventEmitter;

  /**
   * @returns whether the radio button is checked.
   */
  @Method()
  async isChecked(): Promise<boolean> {
    return this.internalChecked;
  }
  
  componentWillLoad() {
    if (this.checked) this.internalChecked = this.checked;
    const slot = this.el.innerHTML;
    if (slot) {
      this.hasSlot = true;
    } else this.hasSlot = false;
  }


  /**
   * Click the hidden input element to let it handle the state
   * and emit ifxChange event.
   */
  handleRadioButtonClick(event: PointerEvent) {
    if (this.disabled) {
      event.stopPropagation();
      return;
    }

    this.inputElement.click();
    this.internalChecked = this.inputElement.checked;
    this.ifxChange.emit(this.internalChecked);
  }

  /**
   * Listen to all change events.
   * Needed to get informed when another button of the group gets chcked 
   * and this one needs to become unchecked. 
   * 
   * @param event 
   */
  @Listen('change', { target: 'window' }) 
  handleChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.name === this.name) {
      this.internalChecked = this.inputElement.checked;
    }
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
          ${this.internalChecked ? 'checked' : ''} 
          ${this.disabled ? 'disabled' : ''} 
          ${this.error ? 'error' : ''}`}
          tabIndex={this.disabled ? -1 : 0}
        >
          {this.internalChecked && <div class="radioButton__wrapper-mark"></div>}
        </div>
        {this.hasSlot && (
          <div class={`label ${this.size === "m" ? "label-m" : ""} ${this.disabled ? 'disabled' : ''}`}>
            <slot />
          </div>
        )}
        <input
          id='hidden__input'
          type="radio" 
          hidden 
          ref={el => this.inputElement = el as HTMLInputElement} 
          name={this.name}  
          value={this.value}
          checked={this.internalChecked}        
          disabled={this.disabled}
          onClick={(e) => e.stopPropagation()}></input>
      </div>
    );
  }
}
