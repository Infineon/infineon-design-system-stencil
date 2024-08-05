import { Component, h, Element, Prop, Host } from '@stencil/core';
import { trackComponentView } from '../../global/utils/tracking';

@Component({
  tag: 'ifx-list-group',
  styleUrl: 'list-group.scss',
  shadow: true,
})

export class ListGroup {
  @Element() el;
  @Prop() flush: boolean = false;
  @Prop() bulletpoint: boolean = false;
  @Prop() notification: boolean = false;

  componentDidLoad() {
    trackComponentView('ListGroup');
  }
  render() {
    return (
      <Host>
        <div class={
          `list-group-container 
        ${this.flush ? 'flush' : ""} 
        ${this.bulletpoint ? 'bulletpoint' : ""}`
        }>
          <slot name='list-item' />
          <slot name="list-notification" />
        </div>
      </Host>
    );
  }
}
