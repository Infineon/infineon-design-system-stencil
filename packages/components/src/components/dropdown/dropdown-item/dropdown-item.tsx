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

interface AnchorProps {
	class: string;
	onClick: (e: MouseEvent) => void;
	role: string;
	"aria-disabled": string | undefined;
	tabIndex?: number;
}

@Component({
	tag: "ifx-dropdown-item",
	styleUrl: "dropdown-item.scss",
	shadow: true,
})
export class DropdownItem {
	/** Icon to show in the dropdown item. */
	@Prop() readonly icon: string = "";
	/** Link the dropdown item should navigate to when clicked. */
	@Prop() readonly href: string = "";
	/** Where to open the link. */
	@Prop() readonly target: string = "_self";
	/** If true, this dropdown item is hidden. */
	@Prop() readonly hide: boolean = false;
	/** If true, this item is shown in an error style. */
	@Prop() readonly error: boolean = false;
	/** If true, this item is disabled and not interactive. */
	@Prop() readonly disabled: boolean = false;
	@State() size: string = "l";
	/** Fired when the dropdown item is clicked or selected. */
	@Event() ifxDropdownItem!: EventEmitter;
	@Element() el!: HTMLIfxDropdownItemElement;

	@Listen("menuSize", { target: "body" })
	handleMenuSize(event: CustomEvent) {
		this.size = event.detail;
	}

	@Listen("click")
	handleHostClick(e: MouseEvent) {
		if (this.disabled) {
			e.stopPropagation();
		}
	}

	private handleEventEmission(e: MouseEvent) {
		if (this.disabled) {
			e.preventDefault();
			e.stopPropagation();
			return;
		}
		this.ifxDropdownItem.emit(this.el.textContent);
	}

	render() {
		const hasHref =
			this.href !== undefined && this.href !== null && this.href !== "";
		const common: AnchorProps = {
			class: `dropdown-item ${this.size === "s" ? "small" : ""} ${this.hide ? "hide" : ""} ${this.disabled ? "disabled" : this.error ? "error" : ""}`,
			onClick: (e: MouseEvent) => this.handleEventEmission(e),
			role: "menuitem",
			"aria-disabled": this.disabled ? "true" : undefined,
		};

		if (this.disabled) {
			common.tabIndex = -1;
		} else if (!hasHref) {
			common.tabIndex = 0;
		}

		return (
			<a
				{...common}
				{...(hasHref
					? { href: this.href, target: this.target, error: this.error }
					: {})}
			>
				{this.icon && <ifx-icon class="icon" icon={this.icon}></ifx-icon>}
				<span>
					<slot />
				</span>
			</a>
		);
	}
}
