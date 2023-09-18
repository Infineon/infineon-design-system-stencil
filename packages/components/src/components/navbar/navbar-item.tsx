import { Component, h, Element, Prop } from "@stencil/core";

@Component({
  tag: 'ifx-navbar-item',
  styleUrl: 'navbar-item.scss',
  shadow: true
})

export class NavbarItem {

  @Element() el;
  @Prop({ mutable: true }) isProfile: boolean = false;
  @Prop() hideLabel: boolean = false;
  @Prop() icon: string = ""
  @Prop() href: string = ""
  @Prop() target: string = "_self";
  @Prop() hideComponent: boolean = false;

  componentWillLoad() {
    const menuItem = this.el;
    const slotValue = menuItem.getAttribute('slot')
    if (slotValue) {
      if (slotValue.toLowerCase() === 'right-menu-profile-item') {
        this.isProfile = true;
      } else this.isProfile = false;
    }
  }


  render() {
    return (
      <div class={`navbar__container-left-content-navigation-item ${this.hideLabel ? 'removeLabel' : ""} ${this.hideComponent ? 'hideElement' : ""}`}>
        <div class={`navbar__container-right-content-navigation-item-icon-wrapper ${!this.icon && !this.isProfile ? "removeWrapper" : ""} ${this.isProfile ? "hide" : ""}`}>
          {this.icon && <ifx-icon icon={this.icon}></ifx-icon>}
        </div>
        <div class={`navbar__container-right-content-navigation-item-navigation-profile ${this.isProfile ? 'show' : ""}`}>
          <a href="javascript:void(0)">AA</a>
        </div>
        <a href={this.href} target={this.target}>
          <slot />
        </a>
      </div>
    )
  }
}