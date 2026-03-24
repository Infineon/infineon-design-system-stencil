import {
	Component,
	Element,
	Event,
	type EventEmitter,
	h,
	Listen,
	Prop,
	State,
	Watch,
} from "@stencil/core";

@Component({
	tag: "ifx-filter-search",
	styleUrl: "filter-search.scss",
	shadow: true,
})
export class FilterSearch {
	@Element() host: HTMLIfxFilterSearchElement;
	/** Display name/label for this filter input */
	@Prop() readonly filterName: string;
	/** Disables the filter and prevents user interaction */
	@Prop() readonly disabled: boolean = false;
	/** Current filter text/value */
	@Prop({ mutable: true }) filterValue: string;
	/** Unique key/identifier for this filter */
	@Prop() readonly filterKey: string;
	@State() showDeleteIcon: boolean = false;
	/** Layout context for the filter */
	@Prop() readonly filterOrientation: string = "sidebar"; //topbar
	/** Placeholder text shown when input is empty */
	@Prop() readonly placeholder: string;
	/** Emitted when the filter/search value changes */
	@Event() ifxFilterSearchChange: EventEmitter;

	@Watch("value")
	valueChanged(newValue: boolean) {
		this.host.setAttribute("value", newValue.toString());
	}

	@Listen("ifxInput")
	handleFilterSearchChange(event: CustomEvent) {
		// Check if a search filter with the same filterName already exists
		const existingFilter = this.host.parentElement.querySelector(
			`ifx-filter-search[filter-name="${this.filterName}"]`,
		);
		if (existingFilter && existingFilter !== this.host) {
			throw new Error(
				`A search filter with the name '${this.filterName}' already exists.`,
			);
		}

		// // Check if the filterName is 'search' and the filter is not the search component
		// if (this.filterName === 'search' && this.filterKey !== 'text') {
		//   throw new Error("The filter name 'search' is reserved for the search component.");
		// }

		this.filterValue = event.detail;
		this.showDeleteIcon = this.filterValue !== "";
		this.ifxFilterSearchChange.emit({
			filterName: this.filterName,
			filterValue: this.filterValue,
			filterKey: this.filterKey,
		}); // Emitting filterKey along with other properties
	}

	render() {
		return (
			<div
				class={`${
					this.filterOrientation === "sidebar"
						? "sidebar-filter-search-wrapper"
						: "topbar-filter-search-wrapper"
				}`}
			>
				<div class="filter-name">{this.filterName}</div>
				<ifx-search-field
					placeholder={this.placeholder}
					show-delete-icon={this.showDeleteIcon}
					disabled={this.disabled}
					value={this.filterValue}
				></ifx-search-field>
			</div>
		);
	}
}
