import { Component, Prop, State, Event, EventEmitter, Element, AttachInternals, h, Watch } from '@stencil/core';
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
  /** @deprecated Use slot-based options instead */
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
  @State() isLoading: boolean = false;
  @State() loadedOptions: Option[] = [];
  @State() filteredOptions: Option[] = [];
  @Prop() showSearch: boolean = true;
  @Prop() showSelectAll: boolean = true;
  @Prop() showClearButton: boolean = true;
  @State() optionCount: number = 0; // number of all options (leaves of the tree)
  @State() optionsProcessed: boolean = false; // flag whether options have already been counted, intial selections saved
  @State() expandedOptions: Set<string> = new Set(); // Track which parent options are expanded
  @State() searchTerm: string = '';
  @State() searchResults: Set<string> = new Set(); // Track which option values match search
  @State() parentOptionsInSearch: Set<string> = new Set(); // Track parent options that should be shown (grayed out)


  @Event() ifxSelect: EventEmitter;
  @Event() ifxOpen: EventEmitter;

  @Element() el: HTMLElement;
  dropdownElement!: HTMLElement;

  @AttachInternals() internals: ElementInternals;


  /**
   * Parse child elements to create options structure
   */
  private parseChildOptions(): Option[] {
    const options: Option[] = [];
    const childElements = Array.from(this.el.children);

    childElements.forEach((child, index) => {
      if (child.tagName === 'IFX-MULTISELECT-OPTION') {
        const option = this.parseOptionElement(child as HTMLElement, index);
        if (option) {
          options.push(option);
        }
      }
    });

    return options;
  }

  /**
   * Recursively parse option element and its children
   */
  private parseOptionElement(element: HTMLElement, index: number): Option | null {
    const value = element.getAttribute('value') || `option-${index}`;
    const selected = element.hasAttribute('selected');
    const disabled = element.hasAttribute('disabled');
    const indeterminate = element.hasAttribute('indeterminate');

    const option: Option = {
      value,
      selected,
      disabled,
      indeterminate
    };

    // Check for nested options
    const nestedOptions = Array.from(element.children)
      .filter(child => child.tagName === 'IFX-MULTISELECT-OPTION')
      .map((child, childIndex) => this.parseOptionElement(child as HTMLElement, childIndex))
      .filter(opt => opt !== null) as Option[];

    if (nestedOptions.length > 0) {
      option.children = nestedOptions;
    }

    return option;
  }

  async loadInitialOptions() {
    this.isLoading = true;
    this.internalError = this.error;
    this.internalErrorMessage = this.errorMessage;

    // Parse options from child elements instead of props
    const allOptions = this.parseChildOptions();
    this.loadedOptions = allOptions.slice(0, this.batchSize);
    this.isLoading = false;
  }

  async fetchMoreOptions() {
    this.isLoading = true;
    const allOptions = this.parseChildOptions();
    const moreOptions = allOptions.slice(this.loadedOptions.length, this.loadedOptions.length + this.batchSize);
    this.loadedOptions = [...this.loadedOptions, ...moreOptions];
    this.isLoading = false;
  }

  async fetchOptions(startIndex: number, count: number): Promise<Option[]> {
    // Parse options from child elements first, fallback to prop for backward compatibility
    let allOptions = this.parseChildOptions();

    // Fallback to old options prop if no child options found
    if (allOptions.length === 0 && this.options) {
      if (typeof this.options === 'string') {
        try {
          const parsedOptions = JSON.parse(this.options);
          // Convert old format to new format (remove label dependencies)
          allOptions = parsedOptions.map((opt: any) => ({
            value: opt.value,
            selected: opt.selected || false,
            disabled: opt.disabled || false,
            indeterminate: opt.indeterminate || false,
            children: opt.children ? opt.children.map((child: any) => ({
              value: child.value,
              selected: child.selected || false,
              disabled: child.disabled || false,
              indeterminate: child.indeterminate || false
            })) : undefined
          }));
        } catch (err) {
          console.error('Failed to parse options:', err);
        }
      } else if (Array.isArray(this.options)) {
        // Convert old format to new format (remove label dependencies)
        allOptions = this.options.map((opt: any) => ({
          value: opt.value,
          selected: opt.selected || false,
          disabled: opt.disabled || false,
          indeterminate: opt.indeterminate || false,
          children: opt.children ? opt.children.map((child: any) => ({
            value: child.value,
            selected: child.selected || false,
            disabled: child.disabled || false,
            indeterminate: child.indeterminate || false
          })) : undefined
        }));
      }
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
    const isSearchActive = searchTerm !== '';

    this.searchTerm = searchTerm;

    const optionsContainer = this.el.shadowRoot.querySelector('.ifx-multiselect-options');
    if (optionsContainer) {
      if (isSearchActive) {
        optionsContainer.classList.add('has-search-filter');
      } else {
        optionsContainer.classList.remove('has-search-filter');
      }
    }

    requestAnimationFrame(() => {
      const allOptions = this.el.querySelectorAll('ifx-multiselect-option');
      allOptions.forEach(option => {
        const searchEvent = new CustomEvent('ifx-search-filter', {
          detail: { searchTerm, isActive: isSearchActive }
        });
        option.dispatchEvent(searchEvent);
      });

      if (searchTerm === '') {
        this.filteredOptions = this.loadedOptions;
      } else {
        this.filteredOptions = this.loadedOptions.filter(option => {
          const optionElement = this.el.querySelector(`ifx-multiselect-option[value="${option.value}"]`);
          const textContent = optionElement?.textContent?.trim() || '';
          const matchesSearchTerm = textContent.toLowerCase().includes(searchTerm);

          if (option.children) {
            const childrenMatch = option.children.some(child => {
              const childElement = this.el.querySelector(`ifx-multiselect-option[value="${child.value}"]`);
              const childTextContent = childElement?.textContent?.trim() || '';
              return childTextContent.toLowerCase().includes(searchTerm);
            });
            return matchesSearchTerm || childrenMatch;
          }
          return matchesSearchTerm;
        });
      }
    });
  }, 150); // Reduced debounce delay for more responsive search

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

  // Make this method public so it can be called by child components
  public updateSlotBasedSelections() {
    // Re-parse the current state from DOM elements
    const allOptions = this.parseChildOptions();
    const selectedLeafOptions = this.collectSelectedOptions(allOptions);
    this.persistentSelectedOptions = selectedLeafOptions;
    this.optionCount = this.countOptions(allOptions);

    // Force re-render by triggering state update
    this.persistentSelectedOptions = [...this.persistentSelectedOptions];
  }

  private updateInitialParentStates() {
    const allOptionElements = this.el.querySelectorAll('ifx-multiselect-option');
    const optionsByDepth = Array.from(allOptionElements)
      .map(el => ({
        element: el,
        instance: (el as any)['__stencil_instance'],
        depth: parseInt(el.getAttribute('data-level') || '0')
      }))
      .filter(item => item.instance)
      .sort((a, b) => b.depth - a.depth);

    optionsByDepth.forEach(({ instance }) => {
      if (instance.hasChildren) {
        this.updateParentState(instance);
      }
    });
  }

  private updateParentState(parentInstance: any) {
    const directChildren = Array.from(parentInstance.el.children as HTMLCollection)
      .filter((child: Element) => child.tagName === 'IFX-MULTISELECT-OPTION')
      .map(child => (child as any)['__stencil_instance'])
      .filter(instance => instance !== null);

    const selectedCount = directChildren.filter(child => child.selected).length;
    const indeterminateCount = directChildren.filter(child => child.indeterminate).length;
    const totalCount = directChildren.length;

    if (selectedCount === totalCount && indeterminateCount === 0) {
      parentInstance.selected = true;
      parentInstance.indeterminate = false;
    } else if (selectedCount === 0 && indeterminateCount === 0) {
      parentInstance.selected = false;
      parentInstance.indeterminate = false;
    } else {
      parentInstance.selected = false;
      parentInstance.indeterminate = true;
    }
  }

  componentDidLoad() {
    setTimeout(() => {
      this.positionDropdown();
    }, 500);

    // Listen for option changes
    this.el.addEventListener('ifx-option-changed', () => {
      // Use requestAnimationFrame to ensure all DOM updates are complete
      requestAnimationFrame(() => {
        this.updateSlotBasedSelections();
      });
    });

    // Initial synchronization after all components are loaded
    setTimeout(() => {
      this.updateSlotBasedSelections();
      this.updateInitialParentStates();
    }, 100);
  }

  componentWillLoad() {
    this.loadInitialOptions();
    this.filteredOptions = [...this.loadedOptions];

    // Ensure all top-level options are visible by default
    setTimeout(() => {
      const topLevelOptions = this.el.querySelectorAll(':scope > ifx-multiselect-option');
      topLevelOptions.forEach((option: any) => {
        if (option.hasChildren && option.selected) {
          option.isExpanded = true;
        }
      });
    }, 0);
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

  isSelectionLimitReached(option: Option): boolean {
    let newOptionsLength = option.children ? option.children.length : 1;
    return this.maxItemCount && this.persistentSelectedOptions.length + newOptionsLength > this.maxItemCount &&
      !this.persistentSelectedOptions.some(selectedOption => selectedOption.value === option.value)
  }

  async selectAll() {
    // Get all option elements
    const allOptionElements = this.el.querySelectorAll('ifx-multiselect-option');

    // First, expand all parent options and select all leaf options using instances
    allOptionElements.forEach((optionEl: any) => {
      const instance = optionEl['__stencil_instance'];
      if (instance) {
        if (instance.hasChildren) {
          // Expand all parent options
          instance.isExpanded = true;
        } else {
          // Select all leaf options
          instance.selected = true;
        }
      }
    });

    // Update all parent states after selecting all leaves
    setTimeout(() => {
      this.updateInitialParentStates();
      // Force update after selecting all
      this.updateSlotBasedSelections();
      this.ifxSelect.emit(this.persistentSelectedOptions);
    }, 0);
  }

  clearSelection() {
    // For slot-based options, clear all option elements directly using instances
    const allOptionElements = this.el.querySelectorAll('ifx-multiselect-option');
    allOptionElements.forEach((optionEl: any) => {
      const instance = optionEl['__stencil_instance'];
      if (instance) {
        instance.selected = false;
        instance.indeterminate = false;
        // Collapse all parent options when clearing
        if (instance.hasChildren) {
          instance.isExpanded = false;
        }
      }
    });

    this.persistentSelectedOptions = [];

    // Force update after clearing
    setTimeout(() => {
      this.updateSlotBasedSelections();
      this.ifxSelect.emit(this.persistentSelectedOptions);
    }, 0);
  }

  handleDocumentClick = (event: Event) => {
    const path = event.composedPath();
    if (!path.includes(this.dropdownElement)) {
      this.dropdownOpen = false;
      document.removeEventListener('click', this.handleDocumentClick);
      this.filteredOptions = this.loadedOptions;
      this.resetSearch();
      this.ifxOpen.emit(this.dropdownOpen);
    }
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
    setTimeout(() => {
      if (this.dropdownOpen) {
        document.addEventListener('click', this.handleDocumentClick);
      } else {
        this.resetSearch();
      }
      this.ifxOpen.emit(this.dropdownOpen);
    }, 0);
  }

  private resetSearch() {
    this.searchTerm = '';

    const searchInput = this.el.shadowRoot.querySelector('.search-input') as HTMLInputElement;
    if (searchInput) {
      searchInput.value = '';
    }

    const optionsContainer = this.el.shadowRoot.querySelector('.ifx-multiselect-options');
    if (optionsContainer) {
      optionsContainer.classList.remove('has-search-filter');
    }

    const allOptions = this.el.querySelectorAll('ifx-multiselect-option');
    allOptions.forEach(option => {
      const searchEvent = new CustomEvent('ifx-search-filter', {
        detail: { searchTerm: '', isActive: false }
      });
      option.dispatchEvent(searchEvent);
    });
  }

  handleWrapperClick(event: MouseEvent) {
    this.positionDropdown();

    if (event.currentTarget === event.target) {
      this.toggleDropdown();
    }
  }

  handleKeyDown(event: KeyboardEvent) {
    if (this.disabled) return;

    switch (event.code) {
      case 'Enter':
      case 'Space':
        this.toggleDropdown();
        break;
      case 'ArrowDown':
      case 'ArrowUp':
        if (this.dropdownOpen) {
          // Handle keyboard navigation
        }
        break;
    }
  }

  private renderSelectAll() {
    // Calculate state from current DOM elements
    const allOptionElements = this.el.querySelectorAll('ifx-multiselect-option');
    const leafOptions = Array.from(allOptionElements).filter((el: any) => !el.hasChildren);
    const selectedLeafOptions = Array.from(allOptionElements).filter((el: any) => !el.hasChildren && el.selected);

    const allSelected = leafOptions.length > 0 && selectedLeafOptions.length === leafOptions.length;
    const noneSelected = selectedLeafOptions.length === 0;
    const indeterminate = leafOptions.length > 0 && !noneSelected && !allSelected;

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

    return (
      <div class="select-all-wrapper">
        <div class={`option ${this.getSizeClass()}`} tabindex='0' onKeyDown={(e) => handleSelectAllKeydown(e)} onClick={toggleSelectAll}>
          <ifx-checkbox tabIndex={-1} id='selectAll' checked={allSelected} indeterminate={indeterminate} size="s"></ifx-checkbox>
          <label htmlFor='selectAll'>Select all</label>
        </div>
        <ifx-dropdown-separator></ifx-dropdown-separator>
      </div>
    );
  }

  handleScroll(event: UIEvent) {
    const element = event.target as HTMLElement;
    const halfwayPoint = Math.floor((element.scrollHeight - element.clientHeight) / 2);

    if (element.scrollTop >= halfwayPoint) {
      this.fetchMoreOptions();
    }
  }

  getSizeClass() {
    return `${this.size}` === "s"
      ? "small-select"
      : "medium-select";
  }

  render() {
    const selectedOptionsLabels = this.persistentSelectedOptions
      .map((option) => {
        // Get the actual element to extract text content
        const optionElement = this.el.querySelector(`ifx-multiselect-option[value="${option.value}"]`);
        return optionElement?.textContent?.trim() || option.value;
      })
      .join(', ');

    // Also check if we have any selections for the clear button
    const hasSelections = this.persistentSelectedOptions.length > 0;

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
          ${hasSelections ? '' : 'placeholder'}
          `}
            onClick={this.disabled ? undefined : () => this.toggleDropdown()}
          >
            {hasSelections ? selectedOptionsLabels : this.placeholder}
          </div>
          {this.dropdownOpen && (
            <div class="ifx-multiselect-dropdown-menu"
              onScroll={(event) => this.handleScroll(event)}>
              {this.showSearch && <input type="text" role="textbox" class="search-input" onKeyDown={(e) => { e.stopPropagation() }} onInput={(event) => this.handleSearch(event.target)} placeholder="Search..."></input>}
              {this.showSelectAll && this.renderSelectAll()}

              <div class="ifx-multiselect-options">
                <slot />
              </div>

              {this.isLoading && <div>Loading more options...</div>}
            </div>
          )}
          <div class='ifx-multiselect-icon-container'>

            {/* Clear Button - will show only if there's a selection */}
            {hasSelections && (
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
