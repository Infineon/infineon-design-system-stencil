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
  @Prop() showClearButton: boolean = true;
  @State() optionCount: number = 0; // number of all options (leaves of the tree)
  @State() optionsProcessed: boolean = false; // flag whether options have already been counted, intial selections saved
  @State() expandedOptions: Set<string> = new Set(); // Track which parent options are expanded


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
    this.expandedOptions = new Set(); // Reset expanded state

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

      // Calculate initial parent states for pre-selected items
      this.updateParentStates(allOptions);

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
      if (option.children && option.children.length > 0) {
        count += this.countOptions(option.children);
      } else {
        count++;
      }
    }
    return count;
  }

  toggleOptionExpansion(optionValue: string, event: Event) {
    event.stopPropagation();
    const newExpandedOptions = new Set(this.expandedOptions);
    if (newExpandedOptions.has(optionValue)) {
      newExpandedOptions.delete(optionValue);
    } else {
      newExpandedOptions.add(optionValue);
    }
    this.expandedOptions = newExpandedOptions;
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

  /**
   * Updates selection recursively for all descendants
   */
  private updateDescendantSelection(option: Option, selected: boolean) {
    option.selected = selected;

    if (option.children && option.children.length > 0) {
      option.children.forEach(child => {
        this.updateDescendantSelection(child, selected);
      });
    } else {
      // Only update persistentSelectedOptions for leaf nodes
      if (selected) {
        if (!this.persistentSelectedOptions.some(opt => opt.value === option.value)) {
          this.persistentSelectedOptions = [...this.persistentSelectedOptions, option];
        }
      } else {
        this.persistentSelectedOptions = this.persistentSelectedOptions.filter(opt => opt.value !== option.value);
      }
    }
  }

  /**
   * Recursively expands or collapses all descendants
   */
  private updateDescendantExpansion(option: Option, expanded: boolean) {
    if (option.children && option.children.length > 0) {
      const newExpandedOptions = new Set(this.expandedOptions);

      if (expanded) {
        newExpandedOptions.add(option.value);
      } else {
        newExpandedOptions.delete(option.value);
      }

      // Recursively handle children
      option.children.forEach(child => {
        this.updateDescendantExpansion(child, expanded);
      });

      this.expandedOptions = newExpandedOptions;
    }
  }

  /**
   * Expands all parent options to make a path visible
   */
  private expandParentPath(allOptions: Option[], targetValue: string): boolean {
    for (const option of allOptions) {
      if (option.value === targetValue) {
        return true;
      }

      if (option.children && option.children.length > 0) {
        const foundInChildren = this.expandParentPath(option.children, targetValue);
        if (foundInChildren) {
          // If target is found in children, expand this parent
          const newExpandedOptions = new Set(this.expandedOptions);
          newExpandedOptions.add(option.value);
          this.expandedOptions = newExpandedOptions;
          return true;
        }
      }
    }
    return false;
  }

  /**
   * Expands all parents for all selected leaf options
   */
  private expandParentsForSelectedOptions(allOptions: Option[]) {
    this.persistentSelectedOptions.forEach(selectedOption => {
      this.expandParentPath(allOptions, selectedOption.value);
    });
  }

  /**
   * Updates parent selection state based on children
   */
  private updateAncestorSelection(allOptions: Option[]) {
    // Find all parent options and update their state
    this.updateParentStates(allOptions);
  }

  /**
   * Recursively updates parent states
   */
  private updateParentStates(options: Option[]) {
    options.forEach(option => {
      if (option.children && option.children.length > 0) {
        // First update children
        this.updateParentStates(option.children);

        // Then update this parent based on children
        const childStates = this.getChildrenStates(option.children);

        if (childStates.allSelected) {
          option.selected = true;
          option.indeterminate = false;
        } else if (childStates.noneSelected) {
          option.selected = false;
          option.indeterminate = false;
        } else {
          option.selected = false;
          option.indeterminate = true;
        }
      }
    });
  }

  /**
   * Helper method to determine the collective state of children
   */
  private getChildrenStates(children: Option[]): { allSelected: boolean; noneSelected: boolean; someSelected: boolean } {
    let selectedCount = 0;
    let indeterminateCount = 0;

    children.forEach(child => {
      if (child.selected) {
        selectedCount++;
      } else if (child.indeterminate) {
        indeterminateCount++;
      }
    });

    const allSelected = selectedCount === children.length;
    const noneSelected = selectedCount === 0 && indeterminateCount === 0;
    const someSelected = selectedCount > 0 || indeterminateCount > 0;

    return { allSelected, noneSelected, someSelected };
  }

  handleOptionClick(option: Option) {
    this.internalError = false;

    // Get all options for state updates
    let allOptions: Option[] = [];
    if (typeof this.options === 'string') {
      try {
        allOptions = JSON.parse(this.options);
      } catch (err) {
        console.error('Failed to parse options:', err);
        return;
      }
    } else if (Array.isArray(this.options)) {
      allOptions = this.options;
    }

    const wasSelected = option.selected;

    if (!wasSelected && this.isSelectionLimitReached(option)) {
      option.checkboxRef?.toggleCheckedState(false);
      this.internalError = true;
      this.internalErrorMessage = "Please consider the maximum number of items to choose from";
      return;
    }

    // Toggle selection for this option and all descendants
    this.updateDescendantSelection(option, !wasSelected);

    // Also expand/collapse all child elements when selecting/deselecting
    if (option.children && option.children.length > 0) {
      this.updateDescendantExpansion(option, !wasSelected);
    }

    // Update ancestor states
    this.updateAncestorSelection(allOptions);

    // Expand parent paths for all selected options to make them visible
    this.expandParentsForSelectedOptions(allOptions);

    this.ifxSelect.emit(this.persistentSelectedOptions);
  }


  isSelectionLimitReached(option: Option): boolean {
    let newOptionsLength = option.children ? option.children.length : 1;
    return this.maxItemCount && this.persistentSelectedOptions.length + newOptionsLength > this.maxItemCount &&
      !this.persistentSelectedOptions.some(selectedOption => selectedOption.value === option.value)
  }

  async selectAll() {
    const allOptions = await this.fetchOptions(0, this.optionCount);
    this.selectAllRecursive(allOptions);

    // Also expand all parent options when selecting all
    this.expandAllParents(allOptions);

    this.ifxSelect.emit(this.persistentSelectedOptions);
  }

  /**
   * Expands all parent options recursively
   */
  private expandAllParents(options: Option[]) {
    options.forEach(option => {
      if (option.children && option.children.length > 0) {
        const newExpandedOptions = new Set(this.expandedOptions);
        newExpandedOptions.add(option.value);
        this.expandedOptions = newExpandedOptions;

        // Recursively expand all children that are also parents
        this.expandAllParents(option.children);
      }
    });
  }

  private selectAllRecursive(options: Option[]) {
    for (const opt of options) {
      if (opt.children && opt.children.length > 0) {
        opt.selected = true;
        this.selectAllRecursive(opt.children);
      } else {
        if (!this.persistentSelectedOptions.some((some) => some.value === opt.value )) {
          opt.selected = true;
          this.persistentSelectedOptions = [...this.persistentSelectedOptions, opt];
        }
      }
    }
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

  /**
   * Recursively unselects all options
   */
  private unselectAllRecursive(options: Option[]) {
    options.forEach(option => {
      option.selected = false;
      option.indeterminate = false;

      if (option.children && option.children.length > 0) {
        this.unselectAllRecursive(option.children);
      }
    });
  }

  clearSelection() {
    this.persistentSelectedOptions = [];

    // Also collapse all expanded options when clearing selection
    this.expandedOptions = new Set();

    // Reset all option states to unselected in loadedOptions
    if (this.loadedOptions.length > 0) {
      this.unselectAllRecursive(this.loadedOptions);
    }

    // Also reset the original options data if it exists
    if (typeof this.options === 'string') {
      try {
        const allOptions = JSON.parse(this.options);
        this.unselectAllRecursive(allOptions);
      } catch (err) {
        console.error('Failed to parse options:', err);
      }
    } else if (Array.isArray(this.options)) {
      this.unselectAllRecursive(this.options);
    }

    this.ifxSelect.emit(this.persistentSelectedOptions);
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
    if(e.key === 'ArrowRight' && option.children && option.children.length > 0) {
      this.expandedOptions = new Set([...this.expandedOptions, option.value]);
    }
    if(e.key === 'ArrowLeft' && option.children && option.children.length > 0) {
      const newExpandedOptions = new Set(this.expandedOptions);
      newExpandedOptions.delete(option.value);
      this.expandedOptions = newExpandedOptions;
    }
  }

  renderOption(option: Option, index: number, depth: number = 0) {
    const isIndeterminate = option.indeterminate || false;
    const isSelected = option.selected || false;
    const disableCheckbox = !isSelected && this.maxItemCount && this.persistentSelectedOptions.length >= this.maxItemCount;
    const uniqueId = `checkbox-${option.value}-${index}`;
    const hasChildren = option.children && option.children.length > 0;
    const isExpanded = this.expandedOptions.has(option.value);
    // Different indentation for parent vs child options
    const paddingLeft = hasChildren ? depth * 30 : depth * 40; // 30px for parents, 40px for children

    return (
      <div class="option-wrapper">
        <div class={`option ${isSelected ? 'selected' : ''} ${disableCheckbox ? 'disabled' : ''}
        ${hasChildren ? 'option--parent' : 'option--child'}
        ${hasChildren && isExpanded ? 'option--expanded' : ''}
        ${hasChildren && !isExpanded ? 'option--collapsed' : ''}
        ${this.getSizeClass()}`}
          style={{ paddingLeft: `${paddingLeft}px` }}
          data-value={option.value}
          onKeyDown={(e) => !disableCheckbox && this.handleOptionKeyDown(e, option)}
          onClick={() => !disableCheckbox && this.handleOptionClick(option)}
          tabindex="0"
          role={`${hasChildren ? "treeitem" : "option"}`}
          aria-expanded={hasChildren ? isExpanded.toString() : undefined}>

          {hasChildren && (
            <div class={`chevron-wrapper ${isExpanded ? 'chevron-wrapper--expanded' : 'chevron-wrapper--collapsed'}`} onClick={(e) => this.toggleOptionExpansion(option.value, e)}>
              <ifx-icon icon="chevron-right-16"></ifx-icon>
            </div>
          )}

          <ifx-checkbox
            tabIndex={-1}
            ref={(el) => option.checkboxRef = el}
            id={uniqueId}
            size="s"
            checked={isSelected && !isIndeterminate}
            indeterminate={isIndeterminate}
            disabled={disableCheckbox}>
          </ifx-checkbox>
          <label htmlFor={uniqueId} onClick={(e) => e.stopPropagation()}>{option.label}</label>
        </div>

        {hasChildren && isExpanded && option.children.map((child, childIndex) =>
          this.renderOption(child, `${index}-${childIndex}` as any, depth + 1)
        )}
      </div>
    );
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
    // This method is now handled by the recursive renderOption method
    return this.renderOption(option, index as any, 1);
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
              {this.filteredOptions.map((option, index) => this.renderOption(option, index, 0))}
              {this.isLoading && <div>Loading more options...</div>}
            </div>
          )}
          <div class='ifx-multiselect-icon-container'>

            {/* Clear Button - will show only if there's a selection */}
            {this.persistentSelectedOptions.length > 0 && (
              <div class={`ifx-clear-button ${!this.showClearButton ? 'hide' : ''}`}
                   onClick={this.disabled ? undefined : (e) => { e.stopPropagation(); this.clearSelection(); }}>
                <ifx-icon icon="c-remove-16" key="clear-icon"></ifx-icon>
              </div>
            )}
            <div class={`icon-wrapper ${this.dropdownOpen ? 'icon-wrapper--open' : 'icon-wrapper--closed'}`}
                 onClick={this.disabled ? undefined : (e) => { e.stopPropagation(); this.toggleDropdown(); }}>
              <ifx-icon icon='chevron-right-16' key="chevron-icon"></ifx-icon>
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
