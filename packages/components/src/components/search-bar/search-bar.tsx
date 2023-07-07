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
  @Event() ifxChange: EventEmitter;
  @Prop({mutable: true}) value: string;
  @Prop() hideLabel: boolean = false;
  @Prop() size: string = "";
  @Event() ifxInput: EventEmitter;


  @Watch('isOpen')
  handlePropChange() {
    this.internalState = this.isOpen;
  }

  handleCloseButton = () => {
    this.internalState = !this.internalState;
  }

  handleSearchInput(event: CustomEvent) {
    this.value = event.detail.detail;
    this.ifxChange.emit(event.detail);
  }

  setInitialState() { 
    this.internalState = this.isOpen;
  }

  componentWillLoad() { 
    this.setInitialState()
  }

  handleInput(event: CustomEvent) {
    this.value = event.detail;
  }

  render() {
    return (
      <div class={`search-bar ${!this.internalState ? 'closed' : ""}`}>
        {this.internalState ? (
          <div class="search-bar-wrapper">
            <ifx-search-input value={this.value} onIfxInput={this.handleInput.bind(this)}>
              <ifx-icon icon="search-16" slot="search-icon"></ifx-icon>
            </ifx-search-input>
            {this.showCloseButton &&
              <a href='javascript:void(0)' onClick={this.handleCloseButton}>Close</a>}
          </div>
        ) : (
          <div class="search-bar__icon-wrapper" onClick={this.handleCloseButton}>
            <ifx-icon icon="search-16"></ifx-icon>
            <a href="javascript:void(0)">Search</a>
          </div>
        )}
      </div>
    );
  }
}