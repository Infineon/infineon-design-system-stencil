import { Component, h, Element, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ifx-tab',
  styleUrl: 'tab.scss',
  shadow: false
})
export class IfxTab {
  @Element() el: HTMLElement;
  @Prop() header: string;
  @Prop() disabled: boolean;
  @Prop() icon: string = '';
  @Prop() iconPosition: 'left' | 'right' = 'left';
  @Event() tabHeaderChange: EventEmitter;

  componentWillUpdate() { 
    this.tabHeaderChange.emit(this.header)
  }

  render() {
    return <slot />;
  }
}