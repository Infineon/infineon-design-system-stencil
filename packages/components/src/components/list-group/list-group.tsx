import { Component, h, Element, Prop, Host } from '@stencil/core';

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
