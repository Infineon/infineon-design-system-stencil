import { AttachInternals, Method } from '@stencil/core';
import { Component, Prop, State, Watch, h, Event, EventEmitter, Element } from '@stencil/core';
import { trackComponent } from '../../global/utils/tracking'; 
import { isNestedInIfxComponent } from '../../global/utils/dom-utils';
import { detectFramework } from '../../global/utils/framework-detection';

@Component({
  tag: 'ifx-switch',
  styleUrl: 'switch.scss',
  shadow: true,
  // formAssociated: true
})
export class Switch {
  @Prop() checked: boolean = false;
  @Prop() name: string = '';
  @Prop() disabled: boolean = false;
  @Prop() readOnly: boolean = false;
  @Prop() value: string;
  @State() internalChecked: boolean = false;

  @AttachInternals() internals: ElementInternals;

  @Element() el: HTMLIfxSwitchElement;

  @Event({ eventName: 'ifxChange' }) ifxChange: EventEmitter<boolean>;

  @Method()
  async isChecked(): Promise<boolean> {
    return this.internalChecked;
  }

  componentWillLoad() {
    this.internalChecked = this.checked;
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
  
  async componentDidLoad() {
    if(!isNestedInIfxComponent(this.el)) { 
      const framework = detectFramework();
      trackComponent('ifx-switch', await framework)
    }
    this.toggleLabelGap();
  }
    
  @Watch('checked')
  valueChanged(newValue: boolean, oldValue: boolean) {
    if (newValue !== oldValue) {
      this.internalChecked = newValue;
    }
  }

  toggleSwitch() {
    if (this.readOnly) return;
    if (this.disabled) return;
    this.internalChecked = !this.internalChecked;

    if (this.internalChecked) {
      if (this.value !== undefined) {
        //this.internals.setFormValue(this.value);
      } else {
        //this.internals.setFormValue("on")
      }
    } else {
      //this.internals.setFormValue(null)
    }

    this.ifxChange.emit(this.internalChecked);
  }

  handleKeyDown(event: KeyboardEvent) {
    if (this.readOnly) return;
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
  // formResetCallback() {
  //   this.internals.setFormValue(null);
  // }

  render() {
    const isDisabled = this.disabled && !this.readOnly;
    return (
      <div
        class={`container ${this.readOnly ? 'readonly' : ''}`}
        role="switch"
        aria-checked={this.internalChecked ? 'true' : 'false'}
        aria-disabled={isDisabled ? 'true' : 'false'}
        aria-readonly={this.readOnly ? 'true' : undefined}
        aria-labelledby="switch-label"
        onClick={this.readOnly ? undefined : () => this.toggleSwitch()}
        onKeyDown={this.readOnly ? undefined : (event) => this.handleKeyDown(event)}
        >
        {/* Checkbox */}
        <div 
          class={`switch__checkbox-container ${this.internalChecked ? 'checked' : ''} ${isDisabled ? 'disabled' : ''} ${this.readOnly ? 'readonly' : ''}`}
          tabindex="0"
        >
          <div class="switch__checkbox-wrapper">
            <input type="checkbox" hidden
              name={this.name}
              disabled={isDisabled}
              checked={this.internalChecked}
              value={`${this.value}`} />
            <div class={`switch ${this.internalChecked ? 'checked' : ''} ${isDisabled ? 'disabled' : ''} ${this.readOnly ? 'readonly' : ''}`} />
          </div>
        </div >

        {/* Label */}
        <div class={`switch__label-wrapper ${isDisabled ? 'disabled' : ''} ${this.readOnly ? 'readonly' : ''}`} >
          <label htmlFor="switch">
            <slot onSlotchange={() => this.toggleLabelGap()} />
          </label>
        </div>
      </div>
    )

  }
}
