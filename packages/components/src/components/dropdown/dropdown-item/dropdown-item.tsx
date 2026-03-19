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
  /** Icon to show in the dropdown item. */
  @Prop() readonly icon: string;
  /** Link the dropdown item should navigate to when clicked. */
  @Prop() readonly href: string = ""
  /** Where to open the link. */
  @Prop() readonly target: string = "_self"
  /** If true, this dropdown item is hidden. */
  @Prop() readonly hide: boolean = false;
  /** If true, this item is shown in an error style. */
  @Prop() readonly error: boolean = false;
  @State() size: string = 'l'
  /** Fired when the dropdown item is clicked or selected. */
  @Event() ifxDropdownItem: EventEmitter;
  @Element() el: HTMLIfxDropdownItemElement;

	@Listen("menuSize", { target: "body" })
	handleMenuSize(event: CustomEvent) {
		this.size = event.detail;
	}

	private handleEventEmission() {
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
