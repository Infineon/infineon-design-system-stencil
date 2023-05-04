import { Component, EventEmitter, h, Event, Prop } from '@stencil/core';
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
  @Prop() showCloseButton: boolean = true;
  @Event() search: EventEmitter<string>;
  @Prop({mutable: true}) isOpen: boolean = true;
  @Prop() hideLabel: boolean = false;
  @Prop() size: string = ""

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
      <div class={`search-bar ${!this.isOpen ? 'closed' : ""} ${this.size === 'large' ? 'large' : ""}`}>
        {this.isOpen ? (
          <div class="search-bar-wrapper">
            <ifx-search-input>
              <ifx-icon icon="search-16" slot="search-icon"></ifx-icon>
            </ifx-search-input>
            {/* <input type="text" /> */}
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


