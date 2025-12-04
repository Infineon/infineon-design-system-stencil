// FilterBar.tsx
import {
	Component,
	Element,
	Event,
	type EventEmitter,
	Host,
	h,
	Prop,
	State,
} from "@stencil/core";

@Component({
	tag: "ifx-filter-bar",
	styleUrl: "filter-bar.scss",
	shadow: true,
})
export class FilterBar {
	@Element() el: HTMLElement;
	@State() selectedOptions: Array<{
		filterName: string;
		filterValues: [string];
		type: string;
	}> = [];
	@Event() ifxTopbarFilterChange: EventEmitter;
	@State() showAllFilters: boolean = false;
	@Prop() maxShownFilters: number = 4; // Default to 4, can be overridden by parent component
	@State() visibleSlots: number;
	@Prop() showMoreFiltersButton: boolean = true;

	/* If the component is ever removed and then reattached to the DOM, 
connectedCallback ensures that the event listeners are properly set up again */
	connectedCallback() {
		this.el.addEventListener("ifxFilterSelect", this.handleTopbarFilterChange);
		this.el.addEventListener("ifxFilterSearchChange", this.handleSearchChange);
		window.addEventListener("ifxResetFiltersEvent", this.handleResetEvent);
	}

	componentWillUnload() {
		this.el.removeEventListener(
			"ifxFilterSelect",
			this.handleTopbarFilterChange,
		);
		this.el.removeEventListener(
			"ifxFilterSearchChange",
			this.handleSearchChange,
		);
		window.removeEventListener("ifxResetFiltersEvent", this.handleResetEvent);
	}

	componentWillLoad() {
		this.updateVisibleSlots();
	}

	// Modify updateVisibleSlots to use showAllFilters to determine the number of slots
	updateVisibleSlots() {
		this.visibleSlots = this.showAllFilters
			? Number.MAX_SAFE_INTEGER
			: this.maxShownFilters;
	}

	handleMoreFiltersClick = () => {
		this.showAllFilters = true;
		this.updateVisibleSlots(); // Recalculate visible slots based on the new state
	};

	handleResetEvent = () => {
		const filterSearchSlot = this.el.shadowRoot?.querySelector(
			'slot[name="filter-search"]',
		);
		if (filterSearchSlot instanceof HTMLSlotElement) {
			// Ensure it's treated as HTMLSlotElement
			const filterSearchSlottedElements = filterSearchSlot.assignedElements({
				flatten: true,
			});

			filterSearchSlottedElements.forEach(
				(filterSearchWrapper: HTMLElement) => {
					const filterSearch =
						filterSearchWrapper.querySelector("ifx-filter-search");

					const searchField =
						filterSearch.shadowRoot.querySelectorAll("ifx-search-field");

					if (searchField.length > 0) {
						searchField.forEach((searchFieldElement: any) => {
							searchFieldElement.value = "";
						});
					}
				},
			);
		}

		this.selectedOptions = [];

		// Emit the change to inform any parent components that the filters have been reset
		this.ifxTopbarFilterChange.emit(this.selectedOptions);
	};

	handleSearchChange = (event: CustomEvent) => {
		this.handleTopbarFilterChange(event);
	};

	handleFilterSelect = (event: CustomEvent) => {
		this.handleTopbarFilterChange(event);
	};

	handleTopbarFilterChange = (event: CustomEvent) => {
		const newSelectedOptions = [...this.selectedOptions];

		if (event.type === "ifxFilterSearchChange") {
			const { filterName, filterValue } = event.detail;
			const existingOptionIndex = newSelectedOptions.findIndex(
				(option) => option.filterName === filterName,
			);

			if (existingOptionIndex !== -1) {
				// If an existing filter is found, update its value
				newSelectedOptions[existingOptionIndex].filterValues = [filterValue];
			} else {
				newSelectedOptions.push({
					filterName: filterName,
					filterValues: [filterValue],
					type: "text",
				});
			}
		} else if (event.type === "ifxFilterSelect") {
			const { filterName, filterValues, type } = event.detail;
			const existingOptionIndex = newSelectedOptions.findIndex(
				(option) => option.filterName === filterName,
			);

			if (existingOptionIndex !== -1) {
				newSelectedOptions[existingOptionIndex].filterValues = filterValues;
				newSelectedOptions[existingOptionIndex].type = type; // Update type based on the number of selected items
			} else {
				newSelectedOptions.push({
					filterName: filterName,
					filterValues: filterValues,
					type: type,
				});
			}
		}

		this.selectedOptions = newSelectedOptions;
		this.ifxTopbarFilterChange.emit(this.selectedOptions);
	};

	render() {
		const safeVisibleSlots = Math.max(0, this.visibleSlots);

		const actualNumberOfComponents =
			this.el.querySelectorAll("ifx-set-filter").length;
		// Calculate slotsToShow safely
		const slotsToShow = Math.min(
			safeVisibleSlots,
			actualNumberOfComponents,
			Number.MAX_SAFE_INTEGER,
		);

		const slots = Array.from({ length: slotsToShow }, (_, i) => (
			<div class="filter-slot-wrapper">
				<slot name={`filter-component-${i + 1}`}></slot>
			</div>
		));

		return (
			<Host>
				<div class="search-container">
					<slot name="filter-search"></slot>{" "}
					{/* Directly place the search slot here */}
				</div>
				<div class="components-container">
					{slots.length > 0 ? slots : <slot name="filter-component"></slot>}
					{this.showMoreFiltersButton && !this.showAllFilters && (
						<div
							class="more-filters-wrapper"
							onClick={this.handleMoreFiltersClick}
						>
							<ifx-button
								type="button"
								disabled={false}
								variant="tertiary"
								size="m"
								target="_blank"
								theme="default"
								full-width="false"
							>
								<ifx-icon icon="filter-16"></ifx-icon>More filters
							</ifx-button>
						</div>
					)}
				</div>
			</Host>
		);
	}
}
