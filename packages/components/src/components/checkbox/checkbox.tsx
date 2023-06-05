import { Component, h, Prop, Element, State } from '@stencil/core';

@Component({
  tag: 'ifx-checkbox',
  styleUrl: './checkbox.scss',
  shadow: true
})

export class Checkbox {
  @Element() el;
  @Prop() disabled: boolean = false;
  @Prop({mutable: true}) checked: boolean = false;
  @Prop() error: boolean = false;
  @State() hasSlot: boolean = true;

  handleCheckbox() { 
    if(!this.disabled && !this.error) { 
      this.checked = !this.checked;
    }
  }

  componentWillLoad() { 
    const slot = this.el.innerHTML;
    if(slot) { 
      console.log('has slot')
      this.hasSlot = true;
    } else this.hasSlot = false;
  }


  render() {
    return (
      <div class="checkbox__container">
        <input type="checkbox" hidden />
        <div 
        tabindex="0"
        onClick={this.handleCheckbox.bind(this)}
        class={`checkbox__wrapper 
        ${this.checked ? 'checked' : ""} 
        ${this.disabled ? 'disabled' : ""}
        ${this.error ? 'error' : ""}`}>
          {this.checked && <ifx-icon icon="check-12"></ifx-icon>}
        </div>
      {this.hasSlot &&
        <div class={`label ${this.error ? 'error' : ""} ${this.disabled ? 'disabled' : ""} `} onClick={this.handleCheckbox.bind(this)}>
        <slot />
      </div>}
      </div>
    );
  }
}