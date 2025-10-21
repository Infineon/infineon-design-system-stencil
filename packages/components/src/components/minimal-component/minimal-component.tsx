import { Component, Event, EventEmitter, Host, h } from '@stencil/core';

@Component({
  tag: 'minimal-component',
  styleUrl: 'minimal-component.scss',
  shadow: true,
})
export class MinimalComponent {

  @Event() ifxTestEvent: EventEmitter;

  render() {
    return (
      <Host>
        <span>This is a minimal component</span>
        <slot></slot>
      </Host>
    );
  }
}
