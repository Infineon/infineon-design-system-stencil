// SetFilter.tsx
import { Component, h, Event, EventEmitter, Prop, State } from '@stencil/core';

@Component({
  tag: 'ifx-set-filter',
  styleUrl: 'set-filter.scss',
  shadow: true
})
export class SetFilter {
  @Prop() filterName: string;
  @Prop() filterLabel: string;
  @Prop() placeholder: string;
  @Prop() type: 'text' | 'single-select' | 'multi-select' = 'text';
  @Prop() options: any[] | string;
  @State() filterValues: string[] = [];

  @Event() ifxFilterChange: EventEmitter;


  handleTextInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    this.ifxFilterChange.emit({ filterName: this.filterName, filterValues: [value], type: this.type }); // Emit an array for consistency with the multi select component

  }

  handleSingleSelectChange(event: CustomEvent) {
    const value = event.detail.value;
    this.ifxFilterChange.emit({ filterName: this.filterName, filterValues: [value], type: this.type }); // Emit an array for consistency with the multi select component
  }


  handleMultiselectOptionChange(event: CustomEvent) {
    this.filterValues = event.detail; // Assuming that ifx-multiselect emits an array of selected options
    this.ifxFilterChange.emit({ filterName: this.filterName, filterValues: this.filterValues, type: this.type });
  }


  render() {
    switch (this.type) {
      case 'text':
        return (
          <ifx-text-field error={false} disabled={false} placeholder={this.placeholder}
            onIfxInput={event => this.handleTextInputChange(event)}
          >{this.filterLabel}</ifx-text-field>
        );
      case 'single-select':
        return (
          <ifx-select
            placeholder="true"
            search-enabled="true"
            search-placeholder-value="Search..."
            onIfxSelect={event => this.handleSingleSelectChange(event)}
            ifx-placeholder-value={this.placeholder}
            ifx-label={this.filterLabel}
            ifx-options={this.options}
          ></ifx-select>
        );
      case 'multi-select':
        return (
          <ifx-multiselect
            label={this.filterLabel}
            placeholder={this.placeholder}
            options={this.options}
            onIfxSelect={event => this.handleMultiselectOptionChange(event)}
          />
        );
      default:
        return null;
    }
  }
}

