import { Component, h, Prop, Event, EventEmitter, Listen, Watch, Element } from '@stencil/core';

@Component({
  tag: 'ifx-filter-entry',
  styleUrl: 'filter-entry.scss',
  shadow: true,
})
export class FilterEntry {
  @Element() host: HTMLElement;
  @Prop({ mutable: true }) value: boolean;
  @Prop() name: string;
  @Event() ifxFilterChange: EventEmitter;

  @Watch('value')
  valueChanged(newValue: boolean) {
    this.host.setAttribute('value', newValue.toString());
  }

  @Listen('ifxChange')
  handleCheckboxChange(event: CustomEvent) {
    this.value = event.detail;
    this.ifxFilterChange.emit(this.value);
  }

  render() {
    return (
      <div class="filter-entry">
        <ifx-checkbox value={this.value}></ifx-checkbox>
        <span>{this.name}</span>
      </div>
    );
  }
}