import { Component, h, Event, EventEmitter, Prop } from '@stencil/core';

@Component({
  tag: 'ifx-filter-search',
  styleUrl: 'filter-search.scss',
  shadow: true,
})
export class FilterSearch {
  @Prop() filterName: string;
  @Prop() disabled: boolean = false;
  @Prop({ mutable: true }) value: string;
  @Event() ifxInput: EventEmitter;


  handleInput(event: CustomEvent) {
    this.value = event.detail;
    this.ifxInput.emit(this.value);
  }


  render() {
    return (
      <div class="filter-search-wrapper">
        <div class="filter-name">Your Filter Name</div>
        <ifx-search-field disabled={this.disabled} value={this.value} onIfxInput={this.handleInput.bind(this)}>
        </ifx-search-field>
      </div>
    );
  }
}