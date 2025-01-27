import { Component, h, Prop, Element, State, Event, EventEmitter, Listen, Method } from '@stencil/core';

@Component({
  tag: 'ifx-radio-button',
  styleUrl: 'radio-button.scss',
  shadow: true,
  formAssociated: false
})
export class RadioButton {
  @Element() el: HTMLElement;
  @Prop() disabled: boolean = false;
  @Prop() value: string;
  @Prop() error: boolean = false;
  @Prop() size: "s" | "m" = "s";
  @Prop({ reflect: true }) name: string; // Reflect prop to attribute
  @Prop() checked: boolean;
  @State() internalChecked: boolean = false;
  @State() hasSlot: boolean = true;
  @State() inputElement: HTMLInputElement;

  @Event({ eventName: 'ifxChange' }) ifxChange: EventEmitter;

  @Method()
  async isChecked(): Promise<boolean> {
    return this.internalChecked;
  }

  componentWillLoad() {
    if (this.checked) this.internalChecked = this.checked;
    this.hasSlot = !!this.el.innerHTML.trim();
  }

  handleRadioButtonClick(event: PointerEvent) {
    if (this.disabled) {
      event.stopPropagation();
      return;
    }

    this.inputElement.click();
    this.internalChecked = this.inputElement.checked;
    this.ifxChange.emit(this.internalChecked);

    const changeEvent = new CustomEvent('change', {
      bubbles: true,
      composed: true,
      detail: { checked: this.internalChecked }
    });
    this.el.dispatchEvent(changeEvent);
  }

  @Listen('change', { target: 'document' })
  handleChange(event: Event) {
    const target = event.target as HTMLElement;
    if (target === this.el) return; // Ignore self

    const targetName = target.getAttribute('name');
    if (targetName === this.name) {
      this.internalChecked = false;
    }
  }

  render() {
    return (
      <div
        class={`radioButton__container ${this.size} ${this.disabled ? 'disabled' : ''}`}
        onClick={this.handleRadioButtonClick.bind(this)}
      >
        <div class={`radioButton__wrapper ${this.internalChecked ? 'checked' : ''} ${this.disabled ? 'disabled' : ''} ${this.error ? 'error' : ''}`}>
          {this.internalChecked && <div class="radioButton__wrapper-mark"></div>}
        </div>
        {this.hasSlot && (
          <div class={`label ${this.size === "m" ? "label-m" : ""} ${this.disabled ? 'disabled' : ''}`}>
            <slot />
          </div>
        )}
        <input
          type="radio"
          hidden
          ref={el => this.inputElement = el}
          name={this.name}
          value={this.value}
          checked={this.internalChecked}
          disabled={this.disabled}
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    );
  }
}