import { Component, Prop, State, Event, EventEmitter, Element, h, Watch } from '@stencil/core';
import { Option } from './interfaces';

// Debounce function
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

@Component({
  tag: 'ifx-multiselect',
  styleUrl: 'multiselect.scss',
  shadow: true
})



export class Multiselect {

  @Prop() options: any[] | string;
  @Prop() batchSize: number = 50;
  @Prop() size: string = 'medium (40px)';
  @Prop() disabled: boolean = false;
  @Prop() error: boolean = false;
  @State() internalError: boolean = false;
  @Prop() errorMessage: string = "Error";
  @Prop() label: string = "";
  @State() persistentSelectedOptions: Option[] = [];
  @Prop() placeholder: string = "";
  @State() listOfOptions: Option[] = [];
  @State() dropdownOpen = false;
  @State() dropdownFlipped: boolean;
  @Prop() maxItemCount: number;
  @State() zIndex: number = 1; // default z-index value
  static globalZIndex = 1; // This will be shared among all instances of the component.
  private currentIndex: number = 0; //needed for option selection using keyboard
  @State() isLoading: boolean = false;
  @State() loadedOptions: Option[] = [];
  @State() filteredOptions: Option[] = [];



  @Event() ifxSelect: EventEmitter;
  @Event() ifxMultiselectIsOpen: EventEmitter;

  @Element() el: HTMLElement;
  dropdownElement!: HTMLElement;


  async loadInitialOptions() {
    this.isLoading = true;
    this.internalError = this.error;
    // Load the first batch of options (e.g., first 20)
    this.loadedOptions = await this.fetchOptions(0, this.batchSize);
    this.isLoading = false;
  }

  async fetchMoreOptions() {
    this.isLoading = true;
    const moreOptions = await this.fetchOptions(this.loadedOptions.length, this.batchSize);
    this.loadedOptions = [...this.loadedOptions, ...moreOptions];
    this.isLoading = false;
  }


  handleScroll(event: UIEvent) {
    const element = event.target as HTMLElement;
    const halfwayPoint = Math.floor((element.scrollHeight - element.clientHeight) / 2); //loading more options when the user has scrolled halfway through the current list

    if (element.scrollTop >= halfwayPoint) {
      this.fetchMoreOptions();
    }
  }




  async fetchOptions(startIndex: number, count: number): Promise<Option[]> {
    let allOptions: Option[] = [];

    // Parse options if it's a string, or use directly if it's an array
    if (typeof this.options === 'string') {
      try {
        allOptions = JSON.parse(this.options);
      } catch (err) {
        console.error('Failed to parse options:', err);
      }
    } else if (Array.isArray(this.options)) {
      allOptions = this.options;
    } else {
      console.error('Unexpected value for options:', this.options);
    }

    // Slice the options array based on startIndex and count
    const slicedOptions = allOptions.slice(startIndex, startIndex + count);

    // Update the state for initially selected options, if needed
    if (startIndex === 0) { // Assuming you want to do this only for the first batch
      const initiallySelected = slicedOptions.filter(option => option.selected);
      this.persistentSelectedOptions = [...this.persistentSelectedOptions, ...initiallySelected];
    }

    return slicedOptions;
  }


  handleSearch = debounce((event: Event) => {
    const searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
    if (searchTerm === '') {
      this.filteredOptions = this.loadedOptions;
    } else {
      this.filteredOptions = this.loadedOptions.filter(option => option.label.toLowerCase().includes(searchTerm))
    }
  }, 300);

  componentDidLoad() {
    setTimeout(() => {
      this.positionDropdown();
    }, 500);

    // setInterval(this.handleScroll, 5000); // Runs every 5 seconds (5000 milliseconds)


  }


  componentWillLoad() {
    this.loadInitialOptions();
    this.filteredOptions = [...this.loadedOptions];
  }

  @Watch('error')
  updateInternalError() {
    this.internalError = this.error;
  }

  @Watch('loadedOptions')
  loadedOptionsChanged() {
    this.filteredOptions = [...this.loadedOptions];
  }


  handleOptionClick(option: Option) {
    this.internalError = false;

    if (this.isSelectionLimitReached(option)) {
      console.error('Max item count reached');
      this.internalError = true;
      this.errorMessage = "Please consider the maximum number of items to choose from";
      return;
    }

    this.updateSelection(option);
    this.ifxSelect.emit(this.persistentSelectedOptions);
  }


  isSelectionLimitReached(option: Option): boolean {
    let newOptionsLength = option.children ? option.children.length : 1;
    return this.maxItemCount && this.persistentSelectedOptions.length + newOptionsLength > this.maxItemCount &&
      !this.persistentSelectedOptions.some(selectedOption => selectedOption.value === option.value)
  }

  updateSelection(option: Option) {
    const wasSelected = this.persistentSelectedOptions.some(selectedOption => selectedOption.value === option.value);

    if (option.children && option.children.length > 0) {
      this.handleParentOptionClick(option);
    } else {
      this.handleChildOptionClick(option, wasSelected);
    }
  }

  handleParentOptionClick(option: Option) {
    const allChildrenSelected = option.children.every(child =>
      this.persistentSelectedOptions.some(selectedOption => selectedOption.value === child.value)
    );

    if (allChildrenSelected) {
      this.persistentSelectedOptions = [...this.persistentSelectedOptions.filter(
        selectedOption => !option.children.some(child => child.value === selectedOption.value)
      )];
    } else {
      const newChildren = [...option.children.filter(childOption =>
        !this.persistentSelectedOptions.some(selectedOption => selectedOption.value === childOption.value)
      )];
      this.persistentSelectedOptions = [...this.persistentSelectedOptions, ...newChildren];
    }
  }

  handleChildOptionClick(option: Option, wasSelected: boolean) {
    if (wasSelected) {
      this.persistentSelectedOptions = [...this.persistentSelectedOptions.filter(selectedOption => selectedOption.value !== option.value)];
    } else {
      this.persistentSelectedOptions = [...this.persistentSelectedOptions, option];
    }
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
    return `${this.size}` === "s"
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
    this.zIndex = Multiselect.globalZIndex++;
  }


  waitForElement(querySelectorFunc: Function, callback: Function, maxTries = 50) {
    let tries = 0;
    function request() {
      requestAnimationFrame(() => {
        const elements = querySelectorFunc();
        if (elements.length > 0 || tries > maxTries) {
          callback(elements);
        } else {
          tries++;
          request();
        }
      });
    }
    request();
  }


  handleKeyDown(event: KeyboardEvent) {
    if (this.disabled) return; // If it's disabled, don't do anything.

    const options = this.dropdownElement.querySelectorAll('.option');

    switch (event.code) {
      case 'Enter' || 'Space':
        if (this.dropdownOpen) {
          this.selectItem(options);
        } else {
          this.toggleDropdown();
          // Wait a bit for the dropdown to finish rendering
          this.waitForElement(() => {
            return this.dropdownElement.querySelectorAll('.option');
          }, (options) => {
            this.updateHighlightedOption(options);
          });
        }
        break;
      case 'ArrowDown':
        this.handleArrowDown(options);
        if (this.dropdownOpen) {
          this.updateHighlightedOption(options);
        }
        break;
      case 'ArrowUp':
        this.handleArrowUp(options);
        if (this.dropdownOpen) {
          this.updateHighlightedOption(options);
        }
        break;
    }
  }

  handleWrapperClick(event: MouseEvent) {
    // This is your existing logic for positioning the dropdown
    this.positionDropdown();

    // Check if the event target is the wrapper itself and not a child element.
    if (event.currentTarget === event.target) {
      this.toggleDropdown();
    }
  }

  clearSelection() {
    this.persistentSelectedOptions = [];
    this.ifxSelect.emit(this.persistentSelectedOptions); // if you want to emit empty selection after clearing
  }

  positionDropdown() {
    const wrapperRect = this.el.shadowRoot.querySelector('.ifx-multiselect-wrapper')?.getBoundingClientRect();
    const spaceBelow = window.innerHeight - wrapperRect.bottom;
    const spaceAbove = wrapperRect.top;

    // If there's more space above than below the trigger and the dropdown doesn't fit below
    if ((spaceAbove > spaceBelow && wrapperRect.height > spaceBelow) || (wrapperRect.bottom > window.innerHeight)) {
      this.dropdownFlipped = true;
    } else {
      this.dropdownFlipped = false;
    }
  }



  // Helper function to update highlighted option based on currentIndex
  private updateHighlightedOption(options: NodeList) {
    // Clear all highlights
    options.forEach((option: Element) => option.classList.remove('is-highlighted'));

    // Apply highlight to the current option
    if (this.currentIndex >= 0 && this.currentIndex < options.length) {
      (options[this.currentIndex] as Element).classList.add('is-highlighted');
    }
  }

  // Helper function to handle arrow down navigation
  private handleArrowDown(options: NodeList) {
    if (this.currentIndex < options.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // Wrap to the beginning.
    }
  }

  // Helper function to handle arrow up navigation
  private handleArrowUp(options: NodeList) {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = options.length - 1; // Wrap to the end.
    }
  }

  private selectItem(options: NodeList) {
    // If there's a previous selection, remove its "selected" class
    const previouslySelected = this.dropdownElement.querySelector('.option.selected');
    if (previouslySelected) {
      previouslySelected.classList.remove('selected');
    }

    // Mark the current item as selected
    const currentOptionElement = options[this.currentIndex] as Element;
    currentOptionElement.classList.add('selected');

    const currentOptionValue = currentOptionElement.getAttribute('data-value');
    const currentListOfOptions = typeof this.options === 'string' //passed in string form via storybook
      ? JSON.parse(this.options).map((option) => ({ value: option.value, label: option.label, children: option.children, selected: option.selected })) // added selected
      : this.options.map(option => ({ ...option }));

    const currentOption = this.findInOptions(currentListOfOptions, currentOptionValue); // get the option object based on the currently selected value and the options array
    this.handleOptionClick(currentOption);
  }


  renderOption(option: Option, index: number) {
    const isIndeterminate = this.isOptionIndeterminate(option);
    const isSelected = option.children ? isIndeterminate || this.isOptionSelected(option) : this.persistentSelectedOptions.some(selectedOption => selectedOption.value === option.value);
    const disableCheckbox = !isSelected && this.maxItemCount && this.persistentSelectedOptions.length >= this.maxItemCount;
    const uniqueId = `checkbox-${option.value}-${index}`; // Generate a unique ID using the index

    return (
      <div>
        <div class={`option ${isSelected ? 'selected' : ''} 
        ${this.getSizeClass()}`}
          data-value={option.value}
          onClick={() => !disableCheckbox && this.handleOptionClick(option)}
          tabindex="0"
          role={`${option.children?.length > 0 ? "treeitem" : "option"}`}
        >
          <ifx-checkbox id={uniqueId} size="s" value={isIndeterminate ? false : isSelected} indeterminate={isIndeterminate} disabled={disableCheckbox}></ifx-checkbox>
          <label htmlFor={uniqueId}>{option.label}</label>
        </div>
        {option.children && option.children.map((child, childIndex) => this.renderSubOption(child, `${index}-${childIndex}`))}
      </div>
    );
  }

  isOptionSelected(option: Option): boolean {
    if (!option.children) return false;

    return option.children.every(child =>
      this.persistentSelectedOptions.some(persistentOption => persistentOption.value === child.value)
    );
  }


  isOptionIndeterminate(option: Option): boolean {
    if (!option.children) return false;

    const selectedChildren = option.children.filter(child =>
      this.persistentSelectedOptions.some(persistentOption => persistentOption.value === child.value)
    ).length;

    return selectedChildren > 0 && selectedChildren < option.children.length;
  }


  findInOptions(options: Option[], searchTerm: string): Option | null {
    for (const option of options) {
      if (option.value === searchTerm) {
        return option;
      }
      if (option.children) {
        const foundInChildren = this.findInOptions(option.children, searchTerm);
        if (foundInChildren) {
          return foundInChildren;
        }
      }
    }
    return null;
  }


  renderSubOption(option: Option, index: string) {
    const isSelected = this.persistentSelectedOptions.some(selectedOption => selectedOption.value === option.value);
    const disableCheckbox = !isSelected && this.maxItemCount && this.persistentSelectedOptions.length >= this.maxItemCount;
    const uniqueId = `checkbox-${option.value}-${index}`;

    return (
      <div class={`option sub-option ${isSelected ? 'selected' : ''} ${this.getSizeClass()}`}
        data-value={option.value}
        role={`${option.children?.length > 0 ? "option" : "treeitem"}`}
        onClick={() => !disableCheckbox && this.handleOptionClick(option)}
        tabindex="0">
        <ifx-checkbox id={uniqueId} size="s" value={isSelected} disabled={disableCheckbox}></ifx-checkbox>
        <label htmlFor={uniqueId}>{option.label}</label>
      </div>
    );
  }

  render() {
    // Create a label for the selected options
    const selectedOptionsLabels = this.persistentSelectedOptions
      .filter(option => {
        // check if option is a child and its parent is selected
        const isChildSelectedWithParent = this.persistentSelectedOptions.some(parentOption =>
          parentOption.children &&
          parentOption.children.some(child => child.value === option.value) &&
          parentOption.selected
        );
        return !isChildSelectedWithParent;
      })
      .map(option => option.label)
      .join(', ');

    return (
      <div class={`ifx-multiselect-container`} ref={el => this.dropdownElement = el as HTMLElement}>
        {
          this.label ?
            <div class="ifx-label-wrapper">
              <span>{this.label}</span>
            </div> : null
        }
        <div class={`ifx-multiselect-wrapper 
        ${this.getSizeClass()} 
        ${this.dropdownOpen ? 'active' : ''} 
        ${this.dropdownFlipped ? 'is-flipped' : ''}
        ${this.internalError ? 'error' : ""}
        ${this.disabled ? 'disabled' : ""}`}
          tabindex="0"
          onClick={(event) => this.handleWrapperClick(event)}
          onKeyDown={(event) => this.handleKeyDown(event)} >
          <div class={`ifx-multiselect-input 
          ${this.persistentSelectedOptions.length === 0 ? 'placeholder' : ""}
          `}
            onClick={this.disabled ? undefined : () => this.toggleDropdown()}
          >
            {this.persistentSelectedOptions.length > 0 ? selectedOptionsLabels : this.placeholder}
          </div>
          {this.dropdownOpen && (
            <div class="ifx-multiselect-dropdown-menu"
              onScroll={(event) => this.handleScroll(event)}
              style={{ '--dynamic-z-index': this.zIndex.toString() }}>
              <input type="text" role="textbox" class="search-input" onInput={(event) => this.handleSearch(event)} placeholder="Search..."></input>
              {this.filteredOptions.map((option, index) => this.renderOption(option, index))}
              {this.isLoading && <div>Loading more options...</div>}
            </div>
          )}
          <div class="ifx-multiselect-icon-container">

            {/* Clear Button - will show only if there's a selection */}
            {this.persistentSelectedOptions.length > 0 && (
              <div class="ifx-clear-button" onClick={() => this.clearSelection()}>
                <ifx-icon icon="cremove24"></ifx-icon>
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
        {
          this.internalError ?
            <div class="ifx-error-message-wrapper">
              <span>{this.errorMessage}</span>
            </div> : null
        }
      </div>
    );
  }

}
