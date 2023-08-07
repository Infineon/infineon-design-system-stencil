// dropdown-item.tsx
import { Component, Prop, h, Listen, State } from "@stencil/core";

@Component({
  tag: 'ifx-dropdown-item',
  styleUrl: 'dropdown-item.scss',
  shadow: true
})

export class DropdownItem {
  @Prop() icon: string;
  @Prop() href: string = ""
  @Prop() target: string = "_self"
  @State() size: string = 'l'
  

  @Listen('menuSize', { target: 'body' })
  handleMenuSize(event: CustomEvent) { 
    //here set font size prop
    this.size = event.detail;
    console.log('size', event.detail)
  }

  render() {
    let hrefAttr = this.href ? { href: this.href, target: this.target } : {};
    return (
      <a {...hrefAttr} class={`dropdown-item ${this.size === 's' ? 'small' : ""}`}>
        {this.icon && <ifx-icon class="icon" icon={this.icon}></ifx-icon>}
        <span>
          <slot />
        </span>
      </a>
    );
  }
}