// FilterBar.tsx
import { Component, h, Host, Element, Event, EventEmitter, State } from '@stencil/core';

@Component({
    tag: 'ifx-filter-bar',
    styleUrl: 'filter-bar.scss',
    shadow: true
})
export class FilterBar {
    @Element() el: HTMLElement;
    @State() selectedOptions: Array<{ filterName: string, filterValues: [string], type: string }> = [];
    @Event() ifxTopbarFilterChange: EventEmitter;

    /* If the component is ever removed and then reattached to the DOM, 
connectedCallback ensures that the event listeners are properly set up again */
  connectedCallback() {
    this.el.addEventListener('ifxFilterSelect', this.handleTopbarFilterChange);
    this.el.addEventListener('ifxFilterSearchChange', this.handleSearchChange);
    window.addEventListener('ifxResetFiltersEvent', this.handleResetEvent);
  }


  componentWillUnload() {
    this.el.removeEventListener('ifxFilterSelect', this.handleTopbarFilterChange);
    this.el.removeEventListener('ifxFilterSearchChange', this.handleSearchChange);
    window.removeEventListener('ifxResetFiltersEvent', this.handleResetEvent);
  }

  handleResetEvent = () => {
    const filterSearchSlot = this.el.shadowRoot.querySelector('slot[name="filter-search"]');
    const filterSearchSlottedElements = (filterSearchSlot as HTMLSlotElement).assignedElements({ flatten: true });

    filterSearchSlottedElements.forEach((filterSearchWrapper: HTMLElement) => {
      const filterSearch = filterSearchWrapper.querySelector('ifx-filter-search');

      const searchField = filterSearch.shadowRoot.querySelectorAll('ifx-search-field')

      if (searchField.length > 0) {
        searchField.forEach((searchFieldElement: any) => {
          searchFieldElement.value = '';
        });

      }
    });

    this.selectedOptions = [];

    // Emit the change to inform any parent components that the filters have been reset
    this.ifxTopbarFilterChange.emit(this.selectedOptions);
  }


  handleSearchChange = (event: CustomEvent) => {
     this.handleTopbarFilterChange(event);
  }

  handleFilterSelect = (event: CustomEvent) => {
    this.handleTopbarFilterChange(event);
  }

  handleTopbarFilterChange = (event: CustomEvent) => {
    const newSelectedOptions = [...this.selectedOptions];
  
    if (event.type === 'ifxFilterSearchChange') {
      const { filterName, filterValue } = event.detail;
      const existingOptionIndex = newSelectedOptions.findIndex(option => option.filterName === filterName);
  
      if (existingOptionIndex !== -1) {
         // If an existing filter is found, update its value
        newSelectedOptions[existingOptionIndex].filterValues = [filterValue];
      } else {
        newSelectedOptions.push({ filterName: filterName, filterValues: [filterValue], type: 'text' });
      }
    } else if (event.type === 'ifxFilterSelect') {
      const { filterName, filterValues, type } = event.detail;
      const existingOptionIndex = newSelectedOptions.findIndex(option => option.filterName === filterName);
   
      if (existingOptionIndex !== -1) {
        newSelectedOptions[existingOptionIndex].filterValues = filterValues;
        newSelectedOptions[existingOptionIndex].type = type; // Update type based on the number of selected items
      } else {
        newSelectedOptions.push({ filterName: filterName, filterValues: filterValues, type: type });
      }
    }
  
    this.selectedOptions = newSelectedOptions;
    this.ifxTopbarFilterChange.emit(this.selectedOptions);
  }

    render() {
        return (
            <Host>
                <div class="search-container">
                    <slot name="filter-search"></slot> {/* Directly place the search slot here */}
                </div>
                <div class="components-container">
                    <slot name="filter-component"></slot> {/* Directly place component slots here */}
                </div>
            </Host>
        );
    }
}