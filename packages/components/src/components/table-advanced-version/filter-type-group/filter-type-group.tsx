import {
	Component,
	Element,
	Event,
	type EventEmitter,
	Host,
	h,
	State,
} from "@stencil/core";

@Component({
	tag: "ifx-filter-type-group",
	styleUrl: "filter-type-group.scss",
	shadow: true,
})
export class IfxFilterTypeGroup {
	@Element() el: HTMLElement;
	@State() selectedOptions: Array<{
		filterGroupName: string;
		selectedItems?: Array<{ filterName: string; value: boolean | string }>;
		value?: string;
	}> = [];
	@Event() ifxSidebarFilterChange: EventEmitter;

	/* If the component is ever removed and then reattached to the DOM, 
  connectedCallback ensures that the event listeners are properly set up again */
	connectedCallback() {
		this.el.addEventListener(
			"ifxFilterAccordionChange",
			this.handleAccordionChange,
		);
		this.el.addEventListener("ifxFilterSearchChange", this.handleSearchChange);
		window.addEventListener("ifxResetFiltersEvent", this.handleResetEvent);
		window.addEventListener(
			"ifxUpdateSidebarFilter",
			this.handleUpdateSidebarFilter,
		);
	}

	componentWillUnload() {
		this.el.removeEventListener(
			"ifxFilterAccordionChange",
			this.handleAccordionChange,
		);
		this.el.removeEventListener(
			"ifxFilterSearchChange",
			this.handleSearchChange,
		);
		window.removeEventListener("ifxResetFiltersEvent", this.handleResetEvent);
	}

	handleResetEvent = () => {
		const accordionSlot = this.el.shadowRoot.querySelector(
			'slot[name="filter-accordion"]',
		);
		const filterAccordionSlottedElements = (
			accordionSlot as HTMLSlotElement
		).assignedElements({ flatten: true });

		filterAccordionSlottedElements.forEach((accordionElement) => {
			const ifxLists = accordionElement.querySelectorAll("ifx-list");

			ifxLists.forEach((ifxListElement: HTMLIfxListElement) => {
				ifxListElement.resetTrigger = !ifxListElement.resetTrigger;
			});
		});

		const filterSearchSlot = this.el.shadowRoot.querySelector(
			'slot[name="filter-search"]',
		);
		const filterSearchSlottedElements = (
			filterSearchSlot as HTMLSlotElement
		).assignedElements({ flatten: true });

		filterSearchSlottedElements.forEach((filterSearchWrapper: HTMLElement) => {
			const filterSearch =
				filterSearchWrapper.querySelector("ifx-filter-search");

			const searchField =
				filterSearch.shadowRoot.querySelectorAll("ifx-search-field");

			if (searchField.length > 0) {
				searchField.forEach((searchFieldElement: any) => {
					searchFieldElement.value = "";
				});
			}
		});

		this.selectedOptions = [];

		// Emit the change to inform any parent components that the filters have been reset
		this.ifxSidebarFilterChange.emit(this.selectedOptions);
	};

	handleUpdateSidebarFilter = (event: CustomEvent) => {
		const { filterName } = event.detail;

		const accordionSlot = this.el.shadowRoot.querySelector(
			'slot[name="filter-accordion"]',
		);
		const filterAccordionSlottedElements = accordionSlot
			? (accordionSlot as HTMLSlotElement).assignedElements({ flatten: true })
			: [];

		filterAccordionSlottedElements.forEach((accordionElement) => {
			const ifxLists = accordionElement.querySelectorAll("ifx-list");

			ifxLists.forEach((ifxListElement: HTMLIfxListElement) => {
				if (ifxListElement.getAttribute("name") === filterName) {
					ifxListElement.resetTrigger = !ifxListElement.resetTrigger;
				}
			});
		});

		// Clear the search bar within the filter-search slot
		const searchSlot = this.el.shadowRoot.querySelector(
			'slot[name="filter-search"]',
		);
		const filterSearchSlottedElements = searchSlot
			? (searchSlot as HTMLSlotElement).assignedNodes({ flatten: true })
			: [];

		filterSearchSlottedElements.forEach((searchElement) => {
			if (searchElement.nodeType === Node.ELEMENT_NODE) {
				// Identify the ifx-filter-search component within the slot
				const filterSearchComponent = searchElement as HTMLElement;
				const searchField: any = filterSearchComponent.firstElementChild;
				if (searchField) {
					searchField.setAttribute("value", "");
					searchField.dispatchEvent(
						new CustomEvent("ifxInput", {
							bubbles: true,
							composed: true,
							detail: "",
						}),
					); // Trigger ifxInput event to reset
				}
			}
		});

		const newSelectedOptions = this.selectedOptions.map((option) => {
			if (option.filterGroupName === filterName) {
				return { ...option, selectedItems: [], value: "" };
			}
			return option;
		});

		this.selectedOptions = newSelectedOptions;

		this.ifxSidebarFilterChange.emit(this.selectedOptions);
	};

	handleAccordionChange = (event: CustomEvent) => {
		this.handleFilterChange(event);
	};

	handleSearchChange = (event: CustomEvent) => {
		// Call handleFilterChange with the created CustomEvent object
		this.handleFilterChange(event);
	};

	handleFilterChange = (event: CustomEvent) => {
		// Create a new array to hold the new state
		const newSelectedOptions = [...this.selectedOptions];

		// Check the type of the event
		if (event.type === "ifxFilterSearchChange") {
			// Handle the ifxFilterSearchChange event
			const { filterName, filterValue } = event.detail;

			// Find the existing filter with the same filterName
			const existingOptionIndex = newSelectedOptions.findIndex(
				(option) =>
					typeof option !== "string" && option.filterGroupName === filterName,
			);

			if (existingOptionIndex !== -1) {
				// If an existing filter is found, update its value
				newSelectedOptions[existingOptionIndex].value = filterValue;
			} else {
				// If no existing filter is found, append the new filter
				newSelectedOptions.push({
					filterGroupName: filterName,
					value: filterValue,
				});
			}
		} else if (event.type === "ifxFilterAccordionChange") {
			const { filterGroupName, selectedItems } = event.detail;

			// Find the existing filter group with the same filterGroupName
			const existingOptionIndex = newSelectedOptions.findIndex(
				(option) => option.filterGroupName === filterGroupName,
			);

			if (existingOptionIndex !== -1) {
				// If an existing filter group is found, update its selectedItems
				newSelectedOptions[existingOptionIndex] = {
					filterGroupName,
					selectedItems,
				};
			} else {
				// If no existing filter group is found, append the new filter group
				newSelectedOptions.push({ filterGroupName, selectedItems });
			}
		}

		// Update the state with the new selected options
		this.selectedOptions = newSelectedOptions;

		// Emit the entire selectedOptions array
		this.ifxSidebarFilterChange.emit(this.selectedOptions);
	};

	render() {
		return (
			<Host>
				<div class="filter-type-group">
					<slot name="filter-search" />
					<slot name="filter-accordion" />
				</div>
			</Host>
		);
	}
}
