import { Component, Prop, State, Event, EventEmitter, Element, h, Watch, AttachInternals } from '@stencil/core';
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
  shadow: true,
  formAssociated: true
})



export class Multiselect {

  @Prop() name: string;
  @Prop() options: any[] | string;
  @Prop() batchSize: number = 50;
  @Prop() size: string = 'medium (40px)';
  @Prop() disabled: boolean = false;
  @Prop() error: boolean = false;
  @State() internalError: boolean = false;
  @Prop() errorMessage: string = "Error";
  @State() internalErrorMessage: string;
  @Prop() label: string = "";
  @State()  persistentSelectedOptions: Option[] = [];
  @Prop() placeholder: string = "";
  @State() dropdownOpen = false;
  @State() dropdownFlipped: boolean;
  @Prop() maxItemCount: number;
  static globalZIndex = 1000; // This will be shared among all instances of the component.
  private currentIndex: number = 0; //needed for option selection using keyboard
  @State() isLoading: boolean = false;
  @State() loadedOptions: Option[] = [];
  @State() filteredOptions: Option[] = [];
  @Prop() showSearch: boolean = true;
  @Prop() showSelectAll: boolean = true;
  @State() optionCount: number = 0; // number of all options (leaves of the tree)
  @State() optionsProcessed: boolean = false; // flag whether options have already been counted, intial selections saved


  @Event() ifxSelect: EventEmitter;
  @Event() ifxOpen: EventEmitter;

  @Element() el: HTMLElement;
  dropdownElement!: HTMLElement;

  @AttachInternals() internals: ElementInternals;


  @Watch('options')
  updateOptions() { 
    this.loadedOptions = [];
    this.filteredOptions = [];
    this.optionCount = 0;
    this.optionsProcessed = false;
    this.persistentSelectedOptions = [];

    this.loadInitialOptions();
  }


  async loadInitialOptions() {
    this.isLoading = true;
    this.internalError = this.error;
    this.internalErrorMessage = this.errorMessage;
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

    if (!this.optionsProcessed) {
      this.optionCount = this.countOptions(allOptions);
      const initiallySelected = this.collectSelectedOptions(allOptions);
      const initallySelectedNotInState = initiallySelected.filter(init => !this.persistentSelectedOptions.some(opt => opt.value == init.value));
      this.persistentSelectedOptions = [...this.persistentSelectedOptions, ...initallySelectedNotInState];
      this.optionsProcessed = true;
    }
    // Slice the options array based on startIndex and count
    const slicedOptions = allOptions.slice(startIndex, startIndex + count);
    return slicedOptions;
  }

  /**
   * Collects and returns all options that are selected.
   * When the parent is selected, then the value of the children will be overriden with selected as well.
   * It will only collect the leaves of the tree.
   * 
   * @param options A list of options.
   * @returns A list with all selected options
   */
  private collectSelectedOptions(options: Option[]): Option[] {
    let selectedOptions: Option[] = [];
  
    for (const option of options) {
      if (option.selected) {
        if (option.children && option.children.length > 0) {
          // if parent is selected, then select all child options
          selectedOptions = selectedOptions.concat(this.collectLeafOptions(option.children));
        } else {
          if (!selectedOptions.some(existingOption => existingOption.value === option.value)) {
            selectedOptions.push(option);
          }
        }
      } else {
        if (option.children && option.children.length > 0) {
          selectedOptions = selectedOptions.concat(this.collectSelectedOptions(option.children));
        }
      }
    }

    return selectedOptions;
  }

  /**
   * Collects all leaf children options.
   * 
   * @param option A list with all leaf-children.
   */
  private collectLeafOptions(children: Option[]): Option[] {
    let leafOptions = [];
  
    for (const child of children) {
      if (child.children && child.children.length > 0) {
        leafOptions = leafOptions.concat(this.collectLeafOptions(child.children));
      } else {
        leafOptions.push(child);
      }
    }  
    return leafOptions;
  }

  /**
   * Count the number of options. Only counts the leaves of the options tree.
   */
  countOptions(options: Option[]): number {
    let count = 0;
    for (const option of options) {
      if (option.children && option.children.length >= 0) {
        count += this.countOptions(option.children);
      } else {
        count++;
      }
    }
    return count;
  }


  handleSearch = debounce((targetElement: HTMLInputElement) => {
    const searchTerm = targetElement.value.toLowerCase();
    if (searchTerm === '') {
      this.filteredOptions = this.loadedOptions;
    } else {
      this.filteredOptions = this.loadedOptions.filter(option => {
        const matchesSearchTerm = option.label.toLowerCase().includes(searchTerm);
        if (option.children) {
          const childrenMatch = option.children.some(child => {
            return child.label.toLowerCase().includes(searchTerm);
          });
          return matchesSearchTerm || childrenMatch;
        }
        return matchesSearchTerm;
      });
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

  @Watch('errorMessage')
  updateInternalErrorMessage() {
    this.internalErrorMessage = this.errorMessage;
  }

  @Watch('loadedOptions')
  loadedOptionsChanged() {
    this.filteredOptions = [...this.loadedOptions];
  }

  @Watch('persistentSelectedOptions')
  onSelectionChange(newValue: Option[], _: Option[]) {
    const formData = new FormData();
    newValue.forEach(option => formData.append(this.name, option.value));
    this.internals.setFormValue(formData);
  }

  handleOptionClick(option: Option) {
    this.internalError = false;

    if (!option.selected && this.isSelectionLimitReached(option)) {
      option.checkboxRef.toggleCheckedState(false)
      this.internalError = true;
      this.internalErrorMessage = "Please consider the maximum number of items to choose from";
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

  async selectAll() {
    const allOptions = await this.fetchOptions(0, this.optionCount);
    this.selectAllRecursive(allOptions);
    
    this.ifxSelect.emit(this.persistentSelectedOptions);
  }

  private selectAllRecursive(options: Option[]) {
    for (const opt of options) {
      if (opt.children && opt.children.length > 0) {
        this.selectAllRecursive(opt.children);
      } else {
        if (!this.persistentSelectedOptions.some((some) => some.value === opt.value )) {
          opt.selected = true;
          this.persistentSelectedOptions = [...this.persistentSelectedOptions, opt];
          this.optionCount = this.countOptions( this.persistentSelectedOptions)
        }
      }
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

      option.selected = false;
      option.children.forEach(child => {
        child.selected = false;
      })

    } else {
      const newChildren = [...option.children.filter(childOption =>
            !this.persistentSelectedOptions.some(selectedOption => selectedOption.value === childOption.value)
      )];
      option.selected = true;
      option.children.forEach(child => {
        child.selected = true;
      })
      this.persistentSelectedOptions = [...this.persistentSelectedOptions, ...newChildren];
    }
  }

  handleChildOptionClick(option: Option, wasSelected: boolean) {
    if (wasSelected) {
      this.persistentSelectedOptions = [...this.persistentSelectedOptions.filter(selectedOption => selectedOption.value !== option.value)];
      option.selected = false;
    } else {
      this.persistentSelectedOptions = [...this.persistentSelectedOptions, option];
      option.selected = true;
    }
    this.updateParentSelectedState();
  }

  updateParentSelectedState() {
    this.loadedOptions.forEach(option => {
      if(option.children?.length > 0) {
        if(option.children.every(child => child.selected === true)) option.selected = true;
        else {
          option.selected = false;
          if(this.isOptionIndeterminate(option)) {
            option.indeterminate = true;
          }else{
            option.indeterminate = false;
          }
        }
      }
    });
  }



  handleDocumentClick = (event: Event) => {
    const path = event.composedPath();
    if (!path.includes(this.dropdownElement)) {
      this.dropdownOpen = false;
      document.removeEventListener('click', this.handleDocumentClick);
      this.filteredOptions = this.loadedOptions;
      // Dispatch the ifxMultiselectIsOpen event
      this.ifxOpen.emit(this.dropdownOpen);
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
      // Dispatch the ifxOpen event
      this.ifxOpen.emit(this.dropdownOpen);
    }, 0);
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
      case 'Enter':
        this.toggleDropdown();
        // Wait a bit for the dropdown to finish rendering
        this.waitForElement(() => {
          return this.dropdownElement.querySelectorAll('.option');
        }, (options) => {
            this.updateHighlightedOption(options);
        });
        break;
      case 'Space': 
        this.toggleDropdown();
        // Wait a bit for the dropdown to finish rendering
        this.waitForElement(() => {
          return this.dropdownElement.querySelectorAll('.option');
        }, (options) => {
            this.updateHighlightedOption(options);
        });
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
      (options[this.currentIndex] as HTMLElement).focus();
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
  
  handleOptionKeyDown(e: KeyboardEvent, option: Option) {
    if(e.key !== 'ArrowUp' && e.key !== 'ArrowDown') e.stopPropagation();
    if(e.key === 'Enter' || e.key === ' ') {
      this.handleOptionClick(option);
    }
  }

  renderOption(option: Option, index: number) {
    const isIndeterminate = this.isOptionIndeterminate(option);
    const isSelected = option.children ? isIndeterminate || this.isOptionSelected(option) : this.persistentSelectedOptions.some(selectedOption => selectedOption.value === option.value);
    const disableCheckbox = !isSelected && this.maxItemCount && this.persistentSelectedOptions.length >= this.maxItemCount;
    const uniqueId = `checkbox-${option.value}-${index}`; // Generate a unique ID using the index
   
    return (
      <div class="option-wrapper">
        <div class={`option ${isSelected ? 'selected' : ''} ${disableCheckbox ? 'disabled' : ''} 
        ${this.getSizeClass()}`}
          data-value={option.value}
          onKeyDown={(e) => !disableCheckbox && this.handleOptionKeyDown(e, option)}
          onClick={() => !disableCheckbox && this.handleOptionClick(option)}
          tabindex="0"
          role={`${option.children?.length > 0 ? "treeitem" : "option"}`}>
          <ifx-checkbox tabIndex={-1} ref={(el) => option.checkboxRef = el} id={uniqueId} size="s" checked={isIndeterminate ? false : isSelected} indeterminate={isIndeterminate} disabled={disableCheckbox}></ifx-checkbox>
          <label htmlFor={uniqueId} onClick={(e) => e.stopPropagation()}>{option.label}</label>
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
      <div class={`option sub-option ${isSelected ? 'selected' : ''} ${this.getSizeClass()} ${disableCheckbox ? 'disabled' : ''}`}
        data-value={option.value}
        role={`${option.children?.length > 0 ? "option" : "treeitem"}`}
        onKeyDown={(e) => !disableCheckbox && this.handleOptionKeyDown(e, option)}
        onClick={() => !disableCheckbox && this.handleOptionClick(option)}
        tabindex="0">
        <ifx-checkbox tabIndex={-1} ref={(el) => option.checkboxRef = el} id={uniqueId} size="s" checked={isSelected} disabled={disableCheckbox}></ifx-checkbox>
        <label htmlFor={uniqueId} onClick={(e) => e.stopPropagation()}>{option.label}</label>
      </div>
    );
  }

  private renderSelectAll() {
    const allSelected = this.persistentSelectedOptions.length === this.optionCount;
    const noneSelected = this.persistentSelectedOptions.length === 0;
    const indeterminate = this.optionCount > 0 && !noneSelected && !allSelected;

    const that = this;
    function toggleSelectAll() {
      if (allSelected) {
        that.clearSelection();
      } else {
        that.selectAll();
      }
    }

    function handleSelectAllKeydown(e: KeyboardEvent) {
      if(e.key !== 'ArrowUp' && e.key !== 'ArrowDown') e.stopPropagation();
      if(e.key === 'Enter' || e.key === ' ') {
        toggleSelectAll();
      }
    }

    return <div class="select-all-wrapper">
      <div class={`option ${this.getSizeClass()}`} tabindex='0' onKeyDown={(e) => handleSelectAllKeydown(e)} onClick={toggleSelectAll}>
        <ifx-checkbox tabIndex={-1} id='selectAll' checked={allSelected} indeterminate={indeterminate} size="s"></ifx-checkbox>
        <label htmlFor='selectAll'>Select all</label>
      </div>
      <ifx-dropdown-separator></ifx-dropdown-separator>
    </div>;
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
          onClick={this.disabled ? undefined : (event) => this.handleWrapperClick(event)}
          onKeyDown={this.disabled ? undefined : (event) => this.handleKeyDown(event)} >
          <div class={`ifx-multiselect-input 
          ${this.persistentSelectedOptions.length === 0 ? 'placeholder' : ""}
          `}
            onClick={this.disabled ? undefined : () => this.toggleDropdown()}
          >
            {this.persistentSelectedOptions.length > 0 ? selectedOptionsLabels : this.placeholder}
          </div>
          {this.dropdownOpen && (
            <div class="ifx-multiselect-dropdown-menu"
              onScroll={(event) => this.handleScroll(event)}>
              {this.showSearch && <input type="text" role="textbox" class="search-input" onKeyDown={(e) => { e.stopPropagation() }} onInput={(event) => this.handleSearch(event.target)} placeholder="Search..."></input>}
              {this.showSelectAll && this.renderSelectAll()}
              {this.filteredOptions.map((option, index) => this.renderOption(option, index))}
              {this.isLoading && <div>Loading more options...</div>}
            </div>
          )}
          <div class="ifx-multiselect-icon-container">

            {/* Clear Button - will show only if there's a selection */}
            {this.persistentSelectedOptions.length > 0 && (   
              <div class="ifx-clear-button" onClick={this.disabled ? undefined : () => this.clearSelection()}>
                <ifx-icon icon="cremove16"></ifx-icon>
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
              <span>{this.internalErrorMessage}</span>
            </div> : null
        }
      </div>
    );
  }

}
