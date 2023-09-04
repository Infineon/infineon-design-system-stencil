// dropdown-item.tsx
import { Component, Prop, h, Listen, State, Event, EventEmitter, Element } from "@stencil/core";

@Component({
  tag: 'ifx-dropdown-item',
  styleUrl: 'dropdown-item.scss',
  shadow: true
})

export class DropdownItem {
  @Prop() icon: string;
  @Prop() href: string = ""
  @Prop() target: string = "_self"
  @Prop() hide: boolean = false;
  @State() size: string = 'l'
  @Event() ifxDropdownItemValue: EventEmitter;
  @Element() el;

  @Listen('menuSize', { target: 'body' })
  handleMenuSize(event: CustomEvent) { 
    this.size = event.detail;
  }

  handleEventEmission() { 
    this.ifxDropdownItemValue.emit(this.el.textContent)
  }

  render() {
    let hrefAttr = this.href ? { href: this.href, target: this.target } : {};
    return (
      <a {...hrefAttr} onClick={() => this.handleEventEmission()} class={`dropdown-item ${this.size === 's' ? 'small' : ""} ${this.hide ? 'hide' : ""}`}>
        {this.icon && <ifx-icon class="icon" icon={this.icon}></ifx-icon>}
        <span>
          <slot />
        </span>
      </a>
    );
  }
}