import { Component, EventEmitter, h, Event, Prop, State, Element } from '@stencil/core';
import { debounce } from 'lodash';
import classNames from 'classnames';


@Component({
  tag: 'ifx-search-input',
  styleUrl: 'search-input.scss',
  shadow: true
})


export class SearchInput {

  private inputElement: HTMLInputElement;
  private debounceSearch: any;

  @Prop() width: string = '100%';
  @Event() search: EventEmitter<string>;
  @State() insideDropdown: boolean = false;
  @Element() el: HTMLElement;
  @Prop() showDeleteIcon: boolean = false;
  @Prop() disabled: boolean = false;
  @Prop() borderColor: 'light' | 'dark' | 'green';
  @Prop() size: string;




  handleInput = () => {
    const query = this.inputElement.value;
    this.debounceSearch(this.search.emit(query));
  };

  handleDelete = () => {
    this.inputElement.value = '';
    this.search.emit('');
  }

  connectedCallback() {
    this.insideDropdown = !!this.el.closest('ifx-dropdown-menu');
    this.debounceSearch = debounce((query) => {
      console.log(query.detail)
      this.search.emit(query);
    }, 500);
  }



  render() {

    return (
      <div class={this.getClassNames()}>
        <div class={this.getWrapperClassNames()}
        >
          <slot name="search-icon"></slot>
          <input
            ref={(el) => (this.inputElement = el)}
            type="text"
            onInput={this.handleInput}
            placeholder="Search..."
            style={{ width: this.width }}
            disabled={this.disabled}

          />
          {this.showDeleteIcon ? (
            <ifx-icon icon="delete-x-16" class="delete-icon" onClick={this.handleDelete}>
            </ifx-icon>
          ) : null}
        </div>
      </div>

    );
  }

  getBorderClasses() {
    return `search-input__wrapper-outline-${this.borderColor}`;
  }

  getSizeClass() {
    return `${this.size}` === "s"
      ? "search-input__wrapper-s"
      : "";
  }

  getClassNames() {
    return classNames(
      'search-input', {
      'inside-dropdown': this.insideDropdown,
    })
  }

  getWrapperClassNames() {
    return classNames(
      `search-input__wrapper ${this.getBorderClasses()}`,
      `search-input__wrapper ${this.getSizeClass()}`,
      this.disabled ? 'disabled' : ''
    );
  }
}