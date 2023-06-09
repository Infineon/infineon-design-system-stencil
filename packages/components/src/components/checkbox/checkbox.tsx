import { Component, h, Prop, Element, State, Event, EventEmitter, Watch } from '@stencil/core';

@Component({
  tag: 'ifx-checkbox',
  styleUrl: './checkbox.scss',
  shadow: true
})

export class Checkbox {
  @Element() el;
  @Prop() disabled: boolean = false;
  @Prop() checked: string = 'false';
  @State() internalCheck: boolean = false;
  @Prop() error: boolean = false;
  @State() hasSlot: boolean = true;
  @Event() ifxCheck: EventEmitter;

  @Watch('checked')
  watchChecked(newValue: boolean) {
    if (newValue !== this.internalCheck) {
      this.internalCheck = newValue;
    }
  }

  handleCheckbox() { 
    if(!this.disabled) { 
      this.internalCheck = !this.internalCheck;
      this.ifxCheck.emit(this.internalCheck)
    }
  }

  componentWillLoad() { 
    this.internalCheck = this.checked.toLowerCase() === 'true';
    const slot = this.el.innerHTML;
    if(slot) { 
      this.hasSlot = true;
    } else this.hasSlot = false;
  }


  render() {
    return (
      <div class="checkbox__container">
        <input type="checkbox" checked={this.internalCheck} hidden />
        <div 
        tabindex="0"
        onClick={this.handleCheckbox.bind(this)}
        class={`checkbox__wrapper 
        ${this.internalCheck ? 'checked' : ""} 
        ${this.disabled ? 'disabled' : ""}
        ${this.error ? 'error' : ""}`}>
          {this.internalCheck && <ifx-icon icon="check-12"></ifx-icon>}
        </div>
      {this.hasSlot &&
        <div class={`label ${this.error ? 'error' : ""} ${this.disabled ? 'disabled' : ""} `} onClick={this.handleCheckbox.bind(this)}>
        <slot />
      </div>}
      </div>
    );
  }
}