import { Component, h, Element, Prop, State } from '@stencil/core';

@Component({
  tag: 'ifx-list-item',
  styleUrl: '../../index.scss',
  shadow: true,
})

export class ListGroupItem {
  @Element() el;
  @Prop() isFlush: boolean = false;
  @State() hasBulletpoint: boolean = false;
  @Prop() badge: boolean = false;
  @Prop() badgeValue: number = 0;

  componentWillLoad() {
    const ifxListGroup = this.el.closest('ifx-list-group')
    if (ifxListGroup.flush) {
      this.isFlush = true;
    } else this.isFlush = false;

    if (ifxListGroup.bulletpoint && !this.badge) {
      this.hasBulletpoint = true;
    } else this.hasBulletpoint = false;
  }

  render() {
    return (
      <div class={
        `list-group-item 
        ${this.isFlush ? 'flush' : ""}
        ${this.hasBulletpoint ? 'bulletpoint' : ""}`}>
        <div class="list-group-item-content">
          <slot />
        </div>
        {this.badge && <ifx-number-indicator>{this.badgeValue}</ifx-number-indicator>}
      </div>
    );
  }
}
