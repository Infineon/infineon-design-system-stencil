import { Component, EventEmitter, h, Event, Prop, Watch, State, Listen } from '@stencil/core';
import classNames from 'classnames';


@Component({
  tag: 'ifx-search-input',
  styleUrl: 'search-input.scss',
  shadow: true
})


export class SearchInput {
  private inputElement: HTMLInputElement;
  @Prop({ mutable: true }) value: string = '';

  @Event() ifxInput: EventEmitter<CustomEvent>;
  @State() insideDropdown: boolean = false;

  @Prop() showDeleteIcon: boolean = false;
  @Prop() disabled: boolean = false;
  @Prop() size: string;
  @State() isFocused: boolean = false;

  @Listen('mousedown', { target: 'document' })
  handleOutsideClick(event: MouseEvent) {
    const path = event.composedPath();
    if (!path.includes(this.inputElement)) {
      this.isFocused = false;
    }
  }

  @Watch('value')
  valueWatcher(newValue: string) {
    if (newValue !== this.inputElement.value) {
      this.inputElement.value = newValue;
    }
  }


  handleInput = () => {
    const query = this.inputElement.value;
    this.value = query; // update the value property when input changes
    const customEvent = new CustomEvent('ifxInput', {
      detail: query,
      bubbles: true,
      composed: true
    });
    this.ifxInput.emit(customEvent);
  };

  handleDelete = () => {
    this.inputElement.value = '';
    this.ifxInput.emit(null);
  }

  focusInput() { 
    this.inputElement.focus();
    this.isFocused = true;
  }

  render() {
    return (
      <div class='search-input'>
        <div class={this.getWrapperClassNames()} 
          tabindex={1} 
          onFocus={() => this.focusInput()}
          onClick={() => this.focusInput()}
        >
          <ifx-icon icon="search-16" class="search-icon"></ifx-icon>
          <input
            ref={(el) => (this.inputElement = el)}
            type="text"
            onInput={() => this.handleInput()}
            placeholder="Search..."
            disabled={this.disabled}
            value={this.value} // bind the value property to input element
          />
          {this.showDeleteIcon ? (
            <ifx-icon icon="deletex16" class="delete-icon" onClick={this.handleDelete}>
            </ifx-icon>
          ) : null}
        </div>
      </div>
    );
  }

  getSizeClass() {
    return `${this.size}` === "s"
      ? "search-input__wrapper-s"
      : "";
  }

  getWrapperClassNames() {
    return classNames(
      `search-input__wrapper`,
      `search-input__wrapper ${this.getSizeClass()}`,
      `${this.isFocused ? 'focused' : ""}`
    );
  }
}