import { Component, h, Prop, Event, EventEmitter, Listen, Watch, Element } from '@stencil/core';

@Component({
  tag: 'ifx-filter-entry',
  styleUrl: 'filter-entry.scss',
  shadow: true,
})
export class FilterEntry {
  @Element() host: HTMLElement;
  @Prop({ mutable: true }) filterValue: boolean;
  @Prop() filterName: string;
  @Event() ifxFilterEntryChange: EventEmitter;

  @Watch('value')
  valueChanged(newValue: boolean) {
    this.host.setAttribute('value', newValue.toString());
  }

  @Listen('ifxChange')
  handleFilterEntryChange(event: CustomEvent) {
    this.filterValue = event.detail;
    this.ifxFilterEntryChange.emit({ filterName: this.filterName, filterValue: this.filterValue });
  }

  render() {
    return (
      <div class="filter-entry">
        <ifx-checkbox value={this.filterValue}></ifx-checkbox>
        <span>{this.filterName}</span>
      </div>
    );
  }
}