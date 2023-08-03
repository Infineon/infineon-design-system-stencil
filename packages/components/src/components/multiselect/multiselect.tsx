import { Component, Prop, State, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'ifx-multiselect',
  styleUrl: 'multiselect.scss',
  shadow: true
})
export class Multiselect {
  @Prop() options: { value: string, label: string }[] | string;

  @State() selectedOptions: { value: string, label: string }[] = [];
  @State() dropdownOpen = false;

  @Event() ifxSelect: EventEmitter;
  @Event() ifxMultiselectIsOpen: EventEmitter;

  dropdownElement!: HTMLElement;

  handleOptionClick(option) {
    const isSelected = this.selectedOptions.some(selectedOption => selectedOption.value === option.value);

    if (isSelected) {
      this.selectedOptions = this.selectedOptions.filter(selectedOption => selectedOption.value !== option.value);
    } else {
      this.selectedOptions = [...this.selectedOptions, option];
    }

    // Dispatch the ifxSelect event
    console.log("ifxSelect event", this.selectedOptions)
    this.ifxSelect.emit(this.selectedOptions);
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

  renderOption(option) {
    const isSelected = this.selectedOptions.some(selectedOption => selectedOption.value === option.value);
    return (
      <div class={`option ${isSelected ? 'selected' : ''}`} onClick={() => this.handleOptionClick(option)}>
        <ifx-checkbox value={isSelected}>{option.label}</ifx-checkbox>
      </div>
    );
  }

  render() {
    let listOfOptions;
    if (typeof this.options === 'string') {
      listOfOptions = this.options.split(',').map((option) => ({
        value: option.trim(),
        label: option.trim(),
      }));
    }
    return (
      <div class="dropdown" ref={el => this.dropdownElement = el as HTMLElement}>
        <div class="input" onClick={() => {
          this.dropdownOpen = !this.dropdownOpen;
          setTimeout(() => {
            if (this.dropdownOpen) {
              document.addEventListener('click', this.handleDocumentClick);
            }

            // Dispatch the ifxMultiselectIsOpen event
            this.ifxMultiselectIsOpen.emit(this.dropdownOpen);
          }, 0);
        }}>
          Click to select options
        </div>
        {this.dropdownOpen && (
          <div class="dropdown-menu">
            {listOfOptions.map(option => this.renderOption(option))}
          </div>
        )}
      </div>
    );
  }
}
