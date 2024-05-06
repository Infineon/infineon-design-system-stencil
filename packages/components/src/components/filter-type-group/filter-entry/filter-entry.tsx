import { Component, h, Prop, Event, EventEmitter, Listen, Watch, Element } from '@stencil/core';

@Component({
  tag: 'ifx-filter-entry',
  styleUrl: 'filter-entry.scss',
  shadow: true,
})
export class FilterEntry {
  @Element() host: HTMLElement;
  @Prop({ mutable: true }) value: boolean;
  @Prop() filterName: string;
  @Event() ifxFilterEntryChange: EventEmitter;

  @Watch('value')
  valueChanged(newValue: boolean) {
    if (newValue) {
      this.host.setAttribute('value', 'true');
    } else {
      this.host.removeAttribute('value');
    }
  }


  @Listen('ifxChange')
  handleFilterEntryChange(event: CustomEvent) {
    this.value = event.detail;
    this.ifxFilterEntryChange.emit({ filterName: this.filterName, value: this.value });
  }

  render() {
    return (
      <div class="filter-entry">
        <ifx-checkbox value={this.value}></ifx-checkbox>
        <span>{this.filterName}</span>
      </div>
    );
  }
}