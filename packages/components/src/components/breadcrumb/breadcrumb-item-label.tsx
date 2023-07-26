import { Component, h, Prop, Element, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ifx-breadcrumb-item-label',
  styleUrl: 'breadcrumb-item-label.scss',
  shadow: true,
})
export class BreadcrumbItemLabel {
  @Prop() icon: string;
  @Prop() url: string;
  @Prop() target: string = "_self"
  @Element() el;
  @Event() breadcrumbMenuIconWrapper: EventEmitter<CustomEvent>;

  componentDidLoad() { 
    const container = this.el.shadowRoot.querySelector('.breadcrumb-item-label-container')
    const menuWrapper = container.querySelector('.menu-icon-wrapper')
    this.breadcrumbMenuIconWrapper.emit(menuWrapper)
  }

  render() {
    return (
      <a href={this.url} target={this.target} class="breadcrumb-item-label-container">
        <ifx-icon icon={this.icon}></ifx-icon>
        <span class="label-wrapper">
          <slot />
        </span>
       <span class="menu-icon-wrapper">
        <ifx-icon icon="chevron-down-12"></ifx-icon>
       </span>
      </a>
    );
  }
}
