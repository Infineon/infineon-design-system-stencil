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

  addGapBetweenLabelAndSwitch() {
    const slot = this.el.shadowRoot.querySelector('slot');
    if (slot.assignedNodes().length) {
      this.el.shadowRoot.querySelector('.container').classList.add('gap')
    }
  }
  
  componentDidLoad() {
    this.addGapBetweenLabelAndSwitch();
  }
  
  componentWillUpdate() {
    this.addGapBetweenLabelAndSwitch();
  }

  @Watch('value')
  valueChanged(newValue: boolean, oldValue: boolean) {
    if (newValue !== oldValue) {
      this.internalValue = newValue;
    }
  }



  toggle() {
    if (this.disabled) return;
    this.internalValue = !this.internalValue;
    this.internals.setFormValue(this.internalValue ? 'on' : null);
    this.ifxChange.emit(this.internalValue);
  }

  handleKeyDown(event: KeyboardEvent) {
    if (this.disabled) return;
    // If the pressed key is either 'Enter' or 'Space' 
    if (event.key === 'Enter' || event.key === ' ') {
      this.toggle();
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
        onClick={() => this.toggle()}
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
            <slot/>
          </label>
        </div>
      </div>
    )

  }
}
