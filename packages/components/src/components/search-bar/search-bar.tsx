import { Component, h, Prop, Event, EventEmitter, State, Watch, Element } from '@stencil/core';

@Component({
  tag: 'ifx-search-bar',
  styleUrl: 'search-bar.scss',
  shadow: true,
})
export class SearchBar {
  @Prop() showCloseButton: boolean = true;
  @Prop() isOpen: boolean = true;
  @Prop() disabled: boolean = false;
  @State() internalState: boolean;
  @Prop({ mutable: true }) value: string;
  //@Prop() hideLabel: boolean = false;
  //@Prop() inSidebar: boolean = false;
  @Element() el: HTMLElement;
  //viewportClass: string;
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
    this.ifxInput.emit(event.detail);
  }

  setInitialState() {
    this.internalState = this.isOpen;
  }

  componentWillLoad() {
    this.setInitialState()
  }

  // componentDidLoad() {
  //   this.updateViewportClass();
  //   window.addEventListener("resize", this.updateViewportClass);
  // }

  // disconnectedCallback() {
  //   window.removeEventListener("resize", this.updateViewportClass);
  // }

  // updateViewportClass = () => {
  //   const viewportWidth = window.innerWidth;

  //   if (viewportWidth >= 1440) {
  //     this.viewportClass = 'large';
  //   } else if (viewportWidth >= 1024 && viewportWidth < 1440) {
  //     this.viewportClass = 'medium';
  //   } else {
  //     this.viewportClass = 'small';
  //   }
  // }

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
            {this.showCloseButton &&
              <a href='javascript:void(0)' onClick={this.handleCloseButton}>Close</a>}
          </div>
        ) : (
          <div class="search-bar__icon-wrapper" onClick={this.handleCloseButton}>
            <ifx-icon icon="search-16"></ifx-icon>
            <a href="javascript:void(0)">Search</a>
          </div>
        )}
        
        {/* {!this.internalState && this.viewportClass === 'large' && (
          <div class="search-bar-wrapper">
            <ifx-search-field value={this.value} onClick={this.handleCloseButton} onFocus={this.handleFocus}>
              <ifx-icon icon="calendar16" slot="search-icon"></ifx-icon>
            </ifx-search-field>

          </div>
        )} */}
      </div>
    );
  }
}