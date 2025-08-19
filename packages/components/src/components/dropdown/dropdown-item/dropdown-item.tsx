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
  @Event() ifxDropdownItem: EventEmitter;
  @Element() el;

  @Listen('menuSize', { target: 'body' })
  handleMenuSize(event: CustomEvent) {
    this.size = event.detail;
  }

  handleEventEmission() {
    this.ifxDropdownItem.emit(this.el.textContent)
  }

  render() {
    const hasHref = this.href !== undefined && this.href !== null && this.href !== '';
    const common = {
      class: `dropdown-item ${this.size === 's' ? 'small' : ""} ${this.hide ? 'hide' : ""}`,
      onClick: () => this.handleEventEmission(),
      role: 'menuitem'
    } as any;

    if (!hasHref) common.tabIndex = 0;

    return (
      <a {...common} {...(hasHref ? { href: this.href, target: this.target } : {})}>
        {this.icon && <ifx-icon class="icon" icon={this.icon}></ifx-icon>}
        <span><slot /></span>
      </a>
    );
  }
}
