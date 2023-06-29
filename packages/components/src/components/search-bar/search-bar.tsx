import { Component, h, Prop, Event, EventEmitter, State, Watch } from '@stencil/core';

@Component({
  tag: 'ifx-search-bar',
  styleUrl: 'search-bar.scss',
  shadow: true,
})
export class SearchBar {
  @Prop() showCloseButton: boolean = true;
  @Prop() isOpen: boolean = true;
  @State() internalState: boolean;
  @Event() ifxChange: EventEmitter<CustomEvent>;

  @Watch('isOpen')
  handlePropChange() {
    this.internalState = this.isOpen;
  }

  handleClick = () => {
    this.internalState = !this.internalState;
  }

  handleSearchInput(event: CustomEvent) {
    this.ifxChange.emit(event.detail);
  }

  setInitialState() { 
    this.internalState = this.isOpen;
  }

  componentWillLoad() { 
    this.setInitialState()
  }

  render() {
    return (
      <div class={`search-bar ${!this.internalState ? 'closed' : ""}`}>
        {this.internalState ? (
          <div class="search-bar-wrapper">
            <ifx-search-input onIfxChange={(event) => this.handleSearchInput(event)}>
              <ifx-icon icon="search-16" slot="search-icon"></ifx-icon>
            </ifx-search-input>
            {this.showCloseButton &&
              <a href='javascript:void(0)' onClick={this.handleClick}>Close</a>}
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