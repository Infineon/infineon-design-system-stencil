import { Component, h, Listen, Watch, Element, Event, EventEmitter, Prop } from '@stencil/core';

@Component({
  tag: 'ifx-filter-search',
  styleUrl: 'filter-search.scss',
  shadow: true,
})
export class FilterSearch {
  @Element() host: HTMLElement;
  @Prop() filterName: string;
  @Prop() disabled: boolean = false;
  @Prop({ mutable: true }) filterValue: string;
  @Prop() filterKey: string;

  @Event() ifxFilterSearchChange: EventEmitter;

  @Watch('value')
  valueChanged(newValue: boolean) {
    this.host.setAttribute('value', newValue.toString());
  }

  @Listen('ifxInput')
  handleFilterSearchChange(event: CustomEvent) {
    this.filterValue = event.detail;
    this.ifxFilterSearchChange.emit({ filterName: this.filterName, filterValue: this.filterValue, filterKey: this.filterKey }); // Emitting filterKey along with other properties
  }

  render() {
    return (
      <div class="filter-search-wrapper">
        <div class="filter-name">{this.filterName}</div>
        <ifx-search-field show-delete-icon="true" disabled={this.disabled} value={this.filterValue}>
        </ifx-search-field>
      </div>
    );
  }
}

