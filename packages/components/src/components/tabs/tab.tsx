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
  @Prop() icon: string = '';
  @Prop() iconPosition: 'before' | 'after' = 'before';

  render() {
    return <slot />;
  }
}