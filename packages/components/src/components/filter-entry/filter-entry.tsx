import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ifx-filter-entry',
  styleUrl: 'filter-entry.scss',
  shadow: true,
})
export class FilterEntry {
  @Prop() name: string;
  @Prop() value: boolean;

  render() {
    return (
      <div class="filter-entry">
        <ifx-checkbox value={this.value}></ifx-checkbox>
        <span>{this.name}</span>
      </div>
    );
  }
}