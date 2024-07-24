import { AttachInternals } from '@stencil/core';
import { Component, Prop, State, Watch, h, Event, EventEmitter, Element } from '@stencil/core';

@Component({
  tag: 'ifx-switch',
  styleUrl: 'switch.scss',
  shadow: true,
  formAssociated: true
})
export class Switch {
  @Prop() value: boolean = false;
  @Prop() name: string = '';
  @Prop() disabled: boolean = false;
  @State() internalValue: boolean = false;

  @AttachInternals() internals: ElementInternals;

  @Element() el: HTMLIfxSwitchElement;

  @Event({ eventName: 'ifxChange' }) ifxChange: EventEmitter<boolean>;

  componentWillLoad() {
    this.internalValue = this.value;
  }

  toggleLabelGap() {
    const slot = this.el.shadowRoot.querySelector('slot');
    const container = this.el.shadowRoot.querySelector('.container');
    if (slot.assignedNodes().length) {
      container.classList.add('gap')
    } else { 
      container.classList.remove('gap')
    }
  }
  
  componentDidLoad() {
    this.toggleLabelGap();
  }
    
  @Watch('value')
  valueChanged(newValue: boolean, oldValue: boolean) {
    if (newValue !== oldValue) {
      this.internalValue = newValue;
    }
  }

  toggleSwitch() {
    if (this.disabled) return;
    this.internalValue = !this.internalValue;
    this.internals.setFormValue(this.internalValue ? 'on' : null);
    this.ifxChange.emit(this.internalValue);
  }

  handleKeyDown(event: KeyboardEvent) {
    if (this.disabled) return;
    // If the pressed key is either 'Enter' or 'Space' 
    if (event.key === 'Enter' || event.key === ' ') {
      this.toggleSwitch();
    }
  }

  /**
   * Callback for form association.
   * Called whenever the form is reset.
   */
  formResetCallback() {
    this.internals.setFormValue(null);
  }

  render() {
    return (
      <div
        class="container"
        role="switch"
        aria-checked={this.internalValue ? 'true' : 'false'}
        aria-label={this.name}
        onClick={() => this.toggleSwitch()}
        onKeyDown={(event) => this.handleKeyDown(event)}
        >
        {/* Checkbox */}
        <div 
          class={`switch__checkbox-container ${this.internalValue ? 'checked' : ''} ${this.disabled ? 'disabled' : ''}`}
          tabindex="0"
        >
          <div class="switch__checkbox-wrapper">
            <input type="checkbox" hidden
              name={this.name}
              disabled={this.disabled}
              value={`${this.internalValue}`} />
            <div class={`switch ${this.internalValue ? 'checked' : ''} ${this.disabled ? 'disabled' : ''}`} />
          </div>
        </div >

        {/* Label */}
        <div class={`switch__label-wrapper ${this.disabled ? 'disabled' : ''}`} >
          <label htmlFor="switch">
            <slot onSlotchange={() => this.toggleLabelGap()} />
          </label>
        </div>
      </div>
    )

  }
}
