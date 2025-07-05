import { Component, h, Prop, Event, EventEmitter, State, Watch, Element, Method } from '@stencil/core';
import { trackComponent } from '../../global/utils/tracking'; 

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
  @Prop() maxlength?: number;
  @Event() ifxInput: EventEmitter;
  @Event() ifxOpen: EventEmitter;
   @Prop() autocomplete: string = "on";
  @Element() el;

  @Method()
  async onNavbarMobile() {
    this.ifxOpen.emit(false)
    this.internalState = false;
  }

  @Watch('isOpen')
  handlePropChange() {
    this.internalState = this.isOpen;
  }

  handleCloseButton = () => {
    this.internalState = !this.internalState;
    this.ifxOpen.emit(this.internalState)
  }

  setInitialState() {
    this.internalState = this.isOpen;
  }

  componentWillLoad() {
    trackComponent('ifx-search-bar')
    this.setInitialState();
    this.ifxOpen.emit(this.internalState)
  }

  handleInput(event: CustomEvent) {
    this.value = event.detail;
  }

  handleFocus = () => {
    this.internalState = true;
  }


  render() {
    return (
      <div aria-label='a search bar' aria-disabled={this.disabled} class={`search-bar ${this.internalState ? 'open' : 'closed'}`}>
        {this.internalState ? (
          <div class="search-bar-wrapper">
            <ifx-search-field autocomplete={this.autocomplete} disabled={this.disabled} value={this.value} maxlength={this.maxlength} onIfxInput={this.handleInput.bind(this)}>
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
