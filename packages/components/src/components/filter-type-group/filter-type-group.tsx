import { Component, h, State, Event, EventEmitter, Element } from '@stencil/core';

@Component({
  tag: 'ifx-filter-type-group',
  styleUrl: 'filter-type-group.scss',
  shadow: true,
})
export class IfxFilterTypeGroup {
  @Element() el: HTMLElement;
  @State() selectedOptions: Array<{ filterGroupName: string, selectedItems?: Array<{ filterName: string, value: boolean | string }>, value?: string }> = [];
  @Event() ifxFilterTypeGroupChange: EventEmitter;

  componentWillLoad() {
    this.el.addEventListener('ifxFilterAccordionChange', this.handleAccordionChange);
    this.el.addEventListener('ifxFilterSearchChange', this.handleSearchChange);
  }

  componentWillUnload() {
    this.el.removeEventListener('ifxFilterAccordionChange', this.handleAccordionChange);
    this.el.removeEventListener('ifxFilterSearchChange', this.handleSearchChange);
  }

  handleAccordionChange = (event: CustomEvent) => {
    this.handleFilterChange(event);
  }

  handleSearchChange = (event: CustomEvent) => {
    // Call handleFilterChange with the created CustomEvent object
    this.handleFilterChange(event);
  }


  handleFilterChange = (event: CustomEvent) => {
    // Create a new array to hold the new state
    const newSelectedOptions = [...this.selectedOptions];

    // Check the type of the event
    if (event.type === 'ifxFilterSearchChange') {
      // Handle the ifxFilterSearchChange event
      const { filterName, filterValue } = event.detail;

      // Find the existing filter with the same filterName
      const existingOptionIndex = newSelectedOptions.findIndex(option => typeof option !== 'string' && option.filterGroupName === filterName);

      if (existingOptionIndex !== -1) {
        // If an existing filter is found, update its value
        newSelectedOptions[existingOptionIndex].value = filterValue;
      } else {
        // If no existing filter is found, append the new filter
        newSelectedOptions.push({ filterGroupName: filterName, value: filterValue });
      }
    } else if (event.type === 'ifxFilterAccordionChange') {
      const { filterGroupName, selectedItems } = event.detail;

      // Find the existing filter group with the same filterGroupName
      const existingOptionIndex = newSelectedOptions.findIndex(option => option.filterGroupName === filterGroupName);

      if (existingOptionIndex !== -1) {
        // If an existing filter group is found, update its selectedItems
        newSelectedOptions[existingOptionIndex] = { filterGroupName, selectedItems };
      } else {
        // If no existing filter group is found, append the new filter group
        newSelectedOptions.push({ filterGroupName, selectedItems });
      }
    }

    // Update the state with the new selected options
    this.selectedOptions = newSelectedOptions;

    // Emit the entire selectedOptions array
    this.ifxFilterTypeGroupChange.emit(this.selectedOptions);
  }

  render() {
    return (
      <div class="filter-type-group">
        <slot name="filter-search" />
        <slot name="filter-accordion" />
      </div>
    );
  }
}