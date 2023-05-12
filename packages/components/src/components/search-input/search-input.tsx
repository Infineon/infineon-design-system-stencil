import { Component, EventEmitter, h, Event, Prop, State, Element, Watch } from '@stencil/core';
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
  @Prop({ mutable: true }) value: string = '';
  @Prop() width: string = '100%';
  @Event() ifxChange: EventEmitter<CustomEvent>;
  @State() insideDropdown: boolean = false;
  @Element() el: HTMLElement;
  @Prop() showDeleteIcon: boolean = false;
  @Prop() disabled: boolean = false;
  @Prop() borderColor: 'light' | 'dark' | 'green';
  @Prop() size: string;

  @Watch('value')
  valueWatcher(newValue: string) {
    if (newValue !== this.inputElement.value) {
      this.inputElement.value = newValue;
    }
  }

  handleInput = () => {
    const query = this.inputElement.value;
    this.value = query; // update the value property when input changes
    this.debounceSearch(query);
  };

  handleDelete = () => {
    this.inputElement.value = '';
    this.ifxChange.emit(null);
  }

  connectedCallback() {
    this.insideDropdown = !!this.el.closest('ifx-dropdown-menu');
    this.debounceSearch = debounce((query) => {
      this.ifxChange.emit(query);
    }, 500);
  }

  disconnectedCallback() {
    // Cancel any pending execution of debounceSearch when the component is disconnected
    this.debounceSearch.cancel();
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
            disabled={this.disabled}
            value={this.value} // bind the value property to input element


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