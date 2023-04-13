import { Component, EventEmitter, h, Event, Prop, State } from '@stencil/core';
import { debounce } from 'lodash';

@Component({
  tag: 'ifx-search-bar',
  styleUrl: 'search-bar.scss',
  shadow: true,
})
export class SearchBar {
  private inputElement: HTMLInputElement;
  private debounceSearch: any;

  @Prop() icon: string;
  @Prop() width: string = '100%';
  @Prop() showCloseButton: boolean = true;
  @Event() search: EventEmitter<string>;
  @State() isOpen: boolean = true;

  handleInput = () => {
    const query = this.inputElement.value;
    this.debounceSearch(this.search.emit(query));
  };

  handleClick = () => {
    this.isOpen = !this.isOpen;
  }

  connectedCallback() {
    this.debounceSearch = debounce((query) => {
      console.log(query.detail)
      this.search.emit(query);
    }, 500);
  }

  render() {
    return (
      <div class={`search-bar ${this.width} `}>
        {this.isOpen ? (
          <div class="search-bar__wrapper">
            <ifx-search-input style={{ width: this.width }}></ifx-search-input>
            {this.showCloseButton ? (
              <ifx-button variant="outline-text" icon="" position="left" href="" target="_blank" color="primary" size="m" onClick={this.handleClick}>
                Close
              </ifx-button>
            ) : null}
          </div>
        ) : (
          <div class="search-bar__icon-wrapper">
            <ifx-icon icon="search-16" onClick={this.handleClick}></ifx-icon>
          </div>
        )}

      </div>
    );
  }
}


