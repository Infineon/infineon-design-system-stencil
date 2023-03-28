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
  @Prop() width: string = '100%';

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
      <div class={`search-bar ${this.width}`}>
        <div class="search-bar__input-wrapper">

          <ifx-icon icon="search-16"></ifx-icon>
          <input
            ref={(el) => (this.inputElement = el)}
            type="text"
            onInput={this.handleInput}
            placeholder="Search..."
          // style={{ width: `calc(${this.width} - 16px)` }} //deduct icon size 
          />
        </div>
        <ifx-button variant="outline-text" icon="" position="left" href="" target="_blank" color="primary" size="m" >
          Close
        </ifx-button>
      </div>
    );
  }
}