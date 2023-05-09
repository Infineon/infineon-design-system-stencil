// pill-toggle.tsx
import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ifx-toggle',
  styleUrl: 'ifxToggle.scss',
  shadow: true,
})
export class ifxToggle {
  @Prop({ mutable: true }) checked: boolean = false;

  @Event({ eventName: 'valueChanged' }) valueChanged: EventEmitter<boolean>;

  toggle() {
    this.checked = !this.checked;
    this.valueChanged.emit(this.checked);
  }

  render() {
    return (
      <div class={`toggle-container ${this.checked ? 'checked' : ''}`} onClick={() => this.toggle()}>
        <div class={`toggle-switch ${this.checked ? 'checked' : ''}`} />
      </div>
    );
  }
}