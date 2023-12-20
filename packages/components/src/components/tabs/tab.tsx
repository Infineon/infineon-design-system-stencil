import { Component, h, Element, Prop } from '@stencil/core';

@Component({
  tag: 'ifx-tab',
  styleUrl: 'tab.scss',
  shadow: false
})
export class IfxTab {
  @Element() el: HTMLElement;
  @Prop() header: string;
  @Prop() disabled: boolean;

  render() {
    return <slot />;
  }
}