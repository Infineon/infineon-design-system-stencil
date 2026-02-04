import {
	Component,
	Element,
	Event,
	type EventEmitter,
	h,
	Listen,
	Prop,
	State,
} from "@stencil/core";

@Component({
	tag: "ifx-dropdown-item",
	styleUrl: "dropdown-item.scss",
	shadow: true,
})
export class DropdownItem {
  @Prop() icon: string;
  @Prop() href: string = ""
  @Prop() target: string = "_self"
  @Prop() hide: boolean = false;
  @Prop() error: boolean = false;
  @State() size: string = 'l'
  @Event() ifxDropdownItem: EventEmitter;
  @Element() el;

	@Listen("menuSize", { target: "body" })
	handleMenuSize(event: CustomEvent) {
		this.size = event.detail;
	}

	handleEventEmission() {
		this.ifxDropdownItem.emit(this.el.textContent);
	}

  render() {
    const hasHref = this.href !== undefined && this.href !== null && this.href !== '';
    const common = {
      class: `dropdown-item ${this.size === 's' ? 'small' : ""} ${this.hide ? 'hide' : ""} ${this.error ? 'error' : ""}`,
      onClick: () => this.handleEventEmission(),
      role: 'menuitem'
    } as any;

		if (!hasHref) common.tabIndex = 0;

    return (
      <a {...common} {...(hasHref ? { href: this.href, target: this.target, error: this.error } : {})}>
        {this.icon && <ifx-icon class="icon" icon={this.icon}></ifx-icon>}
        <span><slot /></span>
      </a>
    );
  }
}
