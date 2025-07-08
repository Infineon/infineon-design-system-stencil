import { Component, EventEmitter, h, Event, Prop, Watch, State, Listen } from '@stencil/core';
import classNames from 'classnames';
 


@Component({
  tag: 'ifx-search-field',
  styleUrl: 'search-field.scss',
  shadow: true
})


export class SearchField {
  private inputElement: HTMLInputElement;
  @Prop({ mutable: true }) value: string = '';

  @Event() ifxInput: EventEmitter<String>;
  @State() insideDropdown: boolean = false;

  @Prop() showDeleteIcon: boolean = false;
  @State() showDeleteIconInternalState: boolean = false;
  @Prop() disabled: boolean = false;
  @Prop() size: string = 'l';
  @State() isFocused: boolean = false;
  @Prop() placeholder: string = "Search...";
  @Prop() autocomplete: string = "on";
  @Prop() maxlength?: number = null;  

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
    this.ifxInput.emit(this.value);
  };

  handleDelete = () => {
    this.inputElement.value = '';
    this.value = "";
    this.ifxInput.emit(this.value);
  }

  focusInput() {
    this.inputElement.focus();
    this.isFocused = true;
  }
  



  componentWillUpdate() {
    if (this.value !== "") {
      this.showDeleteIconInternalState = true;
    } else this.showDeleteIconInternalState = false;
  }

  render() {
    return (
      <div role="search" aria-label="a search field for user input" aria-disabled={this.disabled} aria-value={this.value} class='search-field'>
        <div class={this.getWrapperClassNames()}
          tabindex={this.disabled ? -1 : 1}
          onFocus={() => !this.disabled && this.focusInput()}
          onClick={() => !this.disabled && this.focusInput()}
        >
          <ifx-icon icon="search-16" class="search-icon"></ifx-icon>
          <input
            ref={(el) => (this.inputElement = el)}
            type="text"
            autocomplete={this.autocomplete}
            onInput={() => this.handleInput()}
            placeholder={this.placeholder}
            disabled={this.disabled}
            maxlength={this.maxlength}
            value={this.value} // bind the value property to input element
          />
          {this.showDeleteIcon && this.showDeleteIconInternalState ? (
            <ifx-icon icon="cRemove16" class="delete-icon" onClick={this.handleDelete}>
            </ifx-icon>
          ) : null}
        </div>
      </div>
    );
  }

  getSizeClass() {
    return `${this.size}` === "s"
      ? "search-field__wrapper-s"
      : "";
  }


  getWrapperClassNames() {
    return classNames(
      `search-field__wrapper`,
      `search-field__wrapper ${this.getSizeClass()}`,
      `${this.isFocused ? 'focused' : ""}`
    );
  }
}