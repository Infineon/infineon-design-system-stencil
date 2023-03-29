import { Component, h, Element, Prop} from '@stencil/core';

@Component({
  tag: 'ifx-list-item',
  styleUrl: '../../index.scss',
  shadow: true,
})

export class ListGroupItem {
  @Element() el;
  @Prop() isFlush: boolean = false;
  @Prop() hasBulletpoint: boolean = false;

  componentWillLoad() { 
    const ifxListGroup = this.el.closest('ifx-list-group')
    if(ifxListGroup.flush) { 
      this.isFlush = true;
    } else this.isFlush = false;

    if(ifxListGroup.bulletpoint) { 
      this.hasBulletpoint = true;
    } else this.hasBulletpoint = false;
  }

  render() {
    return (
      <div class={
        `list-group-item 
        ${this.isFlush ? 'flush' : ""}
        ${this.hasBulletpoint ? 'bulletpoint' : ""}`}>
        <slot />
      </div>
    );
  }
}
