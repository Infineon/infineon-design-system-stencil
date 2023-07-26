import { Component, Prop, State, Watch, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ifx-switch',
  styleUrl: 'switch.scss',
  shadow: true,
})
export class Switch {
  @Prop() value: boolean = false;
  @Prop() name: string = '';
  @State() internalValue: boolean = false;

  @Event({ eventName: 'ifxChange' }) ifxChange: EventEmitter<boolean>;

  componentWillLoad() {
    this.internalValue = this.value;
  }

  @Watch('value')
  valueChanged(newValue: boolean, oldValue: boolean) {
    if (newValue !== oldValue) {
      this.internalValue = newValue;
    }
  }

  toggle() {
    this.internalValue = !this.internalValue;
    this.ifxChange.emit(this.internalValue);
  }

  handleKeyDown(event: KeyboardEvent) {
    // If the pressed key is either 'Enter' or 'Space' 
    if (event.key === 'Enter' || event.key === ' ') {
      this.toggle();
    }
  }

  render() {
    console.log('yaaay')
    return (
      <div
        class={`container ${this.internalValue ? 'checked' : ''}`}
        role="switch"
        tabindex="0"
        aria-checked={this.internalValue ? 'true' : 'false'}
        aria-label={this.name}
        onClick={() => this.toggle()}
        onKeyDown={(event) => this.handleKeyDown(event)}
      >
        <input type="checkbox" hidden
          name={this.name}
          checked={this.internalValue}
          value={`${this.internalValue}`} />
        <div class={`switch ${this.internalValue ? 'checked' : ''}`} />
      </div>
    );
  }
}
