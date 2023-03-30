import { Component, EventEmitter, h, Event, Prop, State } from '@stencil/core';
import { debounce } from 'lodash';
@Component({
  tag: 'ifx-search-input',
  styleUrl: 'search-input.scss',
  shadow: true
})

export class SearchInput {
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
      <div class="search-input">
        <div class="search-input__wrapper">
          <ifx-icon icon="search-16"></ifx-icon>
          <input
            ref={(el) => (this.inputElement = el)}
            type="text"
            onInput={this.handleInput}
            placeholder="Search..."
            style={{ width: this.width }}
          />
        </div>
      </div>

    );
  }
}