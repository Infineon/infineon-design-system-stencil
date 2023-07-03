import { Component, h, Prop, Event, EventEmitter, Watch } from '@stencil/core';

@Component({
  tag: 'ifx-search-bar',
  styleUrl: 'search-bar.scss',
  shadow: true,
})
export class SearchBar {

  @Prop() icon: string;
  @Prop() showCloseButton: boolean = true;
  @Prop({ mutable: true }) isOpen: boolean = true;
  @Prop() hideLabel: boolean = false;
  @Prop() size: string = "";
  @Prop({ mutable: true }) value: string = '';
  @Event() ifxInput: EventEmitter<CustomEvent>;

  handleClick = () => {
    this.isOpen = !this.isOpen;
  }

  @Watch('value')
  valueWatcher(newValue: string) {
    const reEmitEvent = new CustomEvent('ifx-input', {
      bubbles: true,
      composed: true,
      detail: newValue
    });
    this.ifxInput.emit(reEmitEvent);
  }

  handleSearchInput(event: CustomEvent) {
    this.value = event.detail;  // Setting this will trigger valueWatcher
  }


  render() {
    return (
      <div class={`search-bar ${!this.isOpen ? 'closed' : ""} ${this.size === 'large' ? 'large' : ""}`}>
        {this.isOpen ? (
          <div class="search-bar-wrapper">
            <ifx-search-input value={this.value} onIfxInput={(event) => this.handleSearchInput(event)}>
              <ifx-icon icon="search-16" slot="search-icon"></ifx-icon>
            </ifx-search-input>
            {this.showCloseButton &&
              <ifx-link onClick={this.handleClick}>Close</ifx-link>}
          </div>
        ) : (
          <div class="search-bar__icon-wrapper" onClick={this.handleClick}>
            <ifx-icon icon="search-16"></ifx-icon>
            <a href="javascript:void(0)">Search</a>
          </div>
        )}
      </div>
    );
  }
}
