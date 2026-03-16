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
	tag: "ifx-dropdown-menu",
	styleUrl: "dropdown-menu.scss",
	shadow: true,
})
export class DropdownMenu {
	/** Controls wether the dropdown menu is open or closed. */
	@Prop() readonly isOpen: boolean = false;
	/** Size of the dropdown menu. */
	@Prop() readonly size: string = "l";
	@State() hideTopPadding: boolean = false;
	@Element() el: HTMLIfxDropdownMenuElement;
	/** Emits the calculated size of the menu */
	@Event() menuSize: EventEmitter;
	@State() filteredItems: HTMLIfxDropdownItemElement[] = [];
	/** Fired when a dropdown menu item is selected */
	@Event() ifxDropdownMenuItem: EventEmitter<CustomEvent>;

	@Listen("ifxInput")
	handleMenuFilter(event: CustomEvent) {
		const searchValue = event.detail;
		this.filterDropdownItems(searchValue);
	}

	@Listen("ifxDropdownItem")
	handleDropdownItemValueEmission(event: CustomEvent) {
		this.ifxDropdownMenuItem.emit(event.detail);
	}

	private filterDropdownItems(searchValue: string) {
		const allItems = Array.from(this.el.querySelectorAll("ifx-dropdown-item"));
		let dropdownItem, txtValue;
		const query = searchValue.toUpperCase();

		for (let i = 0; i < allItems.length; i++) {
			dropdownItem = allItems[i];
			txtValue = dropdownItem.textContent || dropdownItem.innerText;

			if (txtValue.toUpperCase().indexOf(query) > -1) {
				dropdownItem.setAttribute("hide", false);
			} else {
				dropdownItem.setAttribute("hide", true);
			}
		}
	}

	componentWillUpdate() {
		this.menuSize.emit(this.size);
	}

	componentWillLoad() {
		this.filteredItems = Array.from(
			this.el.querySelectorAll("ifx-dropdown-item"),
		) as HTMLIfxDropdownItemElement[];
		const searchField = this.el.querySelector("ifx-search-field");
		const dropdownHeader = this.el.querySelector("ifx-dropdown-header");

		if (searchField || dropdownHeader) {
			this.hideTopPadding = true;
		} else this.hideTopPadding = false;
	}

	render() {
		return (
			<div
				class={`dropdown-menu 
      ${this.isOpen ? "show" : ""} 
      ${this.hideTopPadding ? "hideTopPadding" : ""}
      ${this.size === "s" ? "small" : ""}`}
			>
				<slot />
			</div>
		);
	}
}
