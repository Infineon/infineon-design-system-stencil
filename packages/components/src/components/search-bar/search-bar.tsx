import { Component, h, Prop, Event, EventEmitter, State, Watch } from '@stencil/core';

@Component({
  tag: 'ifx-search-bar',
  styleUrl: 'search-bar.scss',
  shadow: true,
})
export class SearchBar {
  @Prop() isOpen: boolean = true;
  @Prop() disabled: boolean = false;
  @State() internalState: boolean;
  @Prop({ mutable: true }) value: string;
  @Event() ifxInput: EventEmitter;
  @Event() ifxSearchBarIsOpen: EventEmitter;


  @Watch('isOpen')
  handlePropChange() {
    this.internalState = this.isOpen;
  }

  handleCloseButton = () => {
    this.internalState = !this.internalState;
    this.ifxSearchBarIsOpen.emit(this.internalState)
  }


  setInitialState() {
    this.internalState = this.isOpen;
  }

  componentWillLoad() {
    this.setInitialState();
  }

  handleInput(event: CustomEvent) {
    this.value = event.detail;
  }

  handleFocus = () => {
    this.internalState = true;
  }


  render() {
    return (
      <div class={`search-bar ${this.internalState ? 'open' : 'closed'}`}>
        {this.internalState ? (
          <div class="search-bar-wrapper">
            <ifx-search-field disabled={this.disabled} value={this.value} onIfxInput={this.handleInput.bind(this)}>
              <ifx-icon icon="search-16" slot="search-icon"></ifx-icon>
            </ifx-search-field>

            <a tabindex="-1" href='javascript:void(0)' onClick={this.handleCloseButton}>Close</a>
          </div>
        ) : (
          <div class="search-bar__icon-wrapper" onClick={this.handleCloseButton}>
            <ifx-icon icon="search-16"></ifx-icon>
          </div>
        )}
      </div>
    );
  }
}
