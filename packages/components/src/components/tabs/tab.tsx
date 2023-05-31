import { Component, h, Prop, Element, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ifx-tab',
  styleUrl: 'tab.scss',
  shadow: false
})
export class IfxTab {
  @Element() el: HTMLElement;
  @Prop() header: string;

  @Event({ eventName: 'tabBecameActive' }) tabBecameActive: EventEmitter;
  @Event({ eventName: 'tabBecameInactive' }) tabBecameInactive: EventEmitter;

  render() {
    return <slot />;
  }
}