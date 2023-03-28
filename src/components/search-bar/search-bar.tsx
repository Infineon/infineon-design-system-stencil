import { Component, EventEmitter, h, Event } from '@stencil/core';
import { debounce } from 'lodash';

@Component({
  tag: 'ifx-search-bar',
  styleUrl: 'search-bar.scss',
  shadow: true,
})
export class SearchBar {
  private inputElement: HTMLInputElement;
  private debounceSearch: any;

  @Event() search: EventEmitter<string>;

  handleInput = () => {
    const query = this.inputElement.value;
    this.debounceSearch(this.search.emit(query));
  };

  connectedCallback() {
    this.debounceSearch = debounce((query) => {
      console.log(query.detail)
      this.search.emit(query);
    }, 500);
  }

  render() {
    return (
      <div class="search-bar">
        <input
          ref={(el) => (this.inputElement = el)}
          type="text"
          onInput={this.handleInput}
          placeholder="Search..."
        />
      </div>
    );
  }
}