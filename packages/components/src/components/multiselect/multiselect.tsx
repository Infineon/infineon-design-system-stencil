import { Component, Watch, Prop, State, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'ifx-multiselect',
  styleUrl: 'multiselect.scss',
  shadow: true
})
export class Multiselect {
  @Prop() options: { value: string, label: string }[] | string;
  @Prop() size: string = 'medium (40px)';
  @Prop() disabled: boolean = false;

  @State() persistentSelectedOptions: { value: string, label: string }[] = [];
  @State() listOfOptions: { value: string, label: string, selected: boolean }[] = []; // added selected

  @State() dropdownOpen = false;
  @State() dropdownFlipped = false;
  @Prop() maxItemCount: number = 10;

  @Event() ifxSelect: EventEmitter;
  @Event() ifxMultiselectIsOpen: EventEmitter;

  dropdownElement!: HTMLElement;

  @Watch('options')
  handleOptionsChange() {
    this.listOfOptions = typeof this.options === 'string'
      ? this.options.split(',').map((option) => ({ value: option.trim(), label: option.trim(), selected: false })) // added selected
      : this.options.map(option => ({ ...option, selected: false })); // added selected
  }

  componentWillLoad() {
    this.handleOptionsChange();
  }

  handleOptionClick(option) {
    // Don't allow any more options to be selected if the max count has been reached
    if (this.persistentSelectedOptions.length >= this.maxItemCount && !this.persistentSelectedOptions.some(selectedOption => selectedOption.value === option.value)) {
      console.error('Max item count reached');
      return;
    }

    const isSelected = this.persistentSelectedOptions.some(selectedOption => selectedOption.value === option.value);

    if (isSelected) {
      this.persistentSelectedOptions = this.persistentSelectedOptions.filter(selectedOption => selectedOption.value !== option.value);
    } else {
      this.persistentSelectedOptions = [...this.persistentSelectedOptions, option];
    }

    // force a new reference to listOfOptions to trigger re-render
    this.listOfOptions = [...this.listOfOptions];

    this.ifxSelect.emit(this.persistentSelectedOptions);
  }




  handleDocumentClick = (event: Event) => {
    const path = event.composedPath();
    if (!path.includes(this.dropdownElement)) {
      this.dropdownOpen = false;
      document.removeEventListener('click', this.handleDocumentClick);

      // Dispatch the ifxMultiselectIsOpen event
      this.ifxMultiselectIsOpen.emit(this.dropdownOpen);
    }
  }

  getSizeClass() {
    return `${this.size}` === "small (36px)"
      ? "small-select"
      : "medium-select";
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
    setTimeout(() => {
      if (this.dropdownOpen) {
        document.addEventListener('click', this.handleDocumentClick);
      }
      // Dispatch the ifxMultiselectIsOpen event
      this.ifxMultiselectIsOpen.emit(this.dropdownOpen);
    }, 0);
  }

  clearSelection() {
    this.persistentSelectedOptions = [];
    this.listOfOptions = this.listOfOptions.map(option => ({ ...option, selected: false }));
    this.ifxSelect.emit(this.persistentSelectedOptions); // if you want to emit empty selection after clearing
  }


  renderOption(option, index) {
    const isSelected = this.persistentSelectedOptions.some(selectedOption => selectedOption.value === option.value);
    const disableCheckbox = !isSelected && this.persistentSelectedOptions.length >= this.maxItemCount;
    const uniqueId = `checkbox-${option.value}-${index}`; // Generate a unique ID using the index

    return (
      <div class={`option ${isSelected ? 'selected' : ''} 
      ${this.getSizeClass()}`}
        onClick={() => !disableCheckbox && this.handleOptionClick(option)}
        tabindex="0"
      >
        <ifx-checkbox id={uniqueId} value={isSelected} disabled={disableCheckbox}></ifx-checkbox>
        <label htmlFor={uniqueId}>{option.label}</label>  {/* Use the unique ID here */}
      </div>
    );
  }



  render() {
    // Create a label for the selected options
    const selectedOptionsLabels = this.persistentSelectedOptions.map(option => option.label).join(', ');

    return (
      <div class={`ifx-multiselect-container ${this.getSizeClass()}`} tabindex="0" ref={el => this.dropdownElement = el as HTMLElement}>
        <div class={`ifx-multiselect-wrapper ${this.getSizeClass()} ${this.dropdownOpen ? 'active' : ''} ${this.dropdownFlipped ? 'is-flipped' : ''}`}>
          <div class="ifx-multiselect-input" onClick={() => this.toggleDropdown()} >
            {this.persistentSelectedOptions.length > 0 ? selectedOptionsLabels : 'Placeholder'}
          </div>
          {this.dropdownOpen && (
            <div class="dropdown-menu">
              {this.listOfOptions.map((option, index) => this.renderOption(option, index))}
            </div>
          )}
          <div class="icon-container">

            {/* Clear Button - will show only if there's a selection */}
            {this.persistentSelectedOptions.length > 0 && (
              <div class="clear-button" onClick={() => this.clearSelection()}>
                <ifx-icon
                  key='icon-clear'
                  icon='deletex16'></ifx-icon>
              </div>
            )}
            <div class="icon-wrapper-up" onClick={this.disabled ? undefined : () => this.toggleDropdown()}>
              <ifx-icon
                key='icon-up'
                icon='chevronup-16'></ifx-icon>
            </div>
            <div class="icon-wrapper-down" onClick={this.disabled ? undefined : () => this.toggleDropdown()}>
              <ifx-icon
                key='icon-down'
                icon='chevron-down-16'></ifx-icon>
            </div>
          </div>

        </div>
      </div>
    );
  }

}
