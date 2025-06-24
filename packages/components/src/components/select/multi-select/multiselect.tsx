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
  @Prop() disabled: boolean = false;
  @Prop() error: boolean = false;
  @Prop() errorMessage: string = "Error";
  @Prop() label: string = "";
  @Prop() placeholder: string = "";
  @Prop() showSearch: boolean = true;
  @Prop() showSelectAll: boolean = true;
  @Prop() showClearButton: boolean = true;
  @Prop() showExpandCollapse: boolean = true;
  @Prop() noResultsMessage: string = "No results found.";
  @Prop() showNoResultsMessage: boolean = true;

  @State() internalError: boolean = false;
  @State() internalErrorMessage: string;
  @State() persistentSelectedOptions: Option[] = [];
  @State() dropdownOpen = false;
  @State() dropdownFlipped: boolean;
  @State() isLoading: boolean = false;
  @State() optionCount: number = 0;
  @State() optionsProcessed: boolean = false;
  @State() searchTerm: string = '';

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

    const allOptions = this.parseChildOptions();
    this.isLoading = false;

    if (!this.optionsProcessed) {
      this.optionCount = this.countOptions(allOptions);
      const initiallySelected = this.collectSelectedOptions(allOptions);
      const initiallySelectedNotInState = initiallySelected.filter(init =>
        !this.persistentSelectedOptions.some(opt => opt.value == init.value)
      );
      this.persistentSelectedOptions = [...this.persistentSelectedOptions, ...initiallySelectedNotInState];
      this.optionsProcessed = true;
    }
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

  // Search functionality
  handleSearch = debounce((targetElement: HTMLInputElement) => {
    const searchTerm = targetElement.value.toLowerCase();
    const isSearchActive = searchTerm !== '';

    this.searchTerm = searchTerm;

    // Remove active class from wrapper when search is active
    const wrapper = this.el.shadowRoot.querySelector('.ifx-multiselect-wrapper');
    if (wrapper) {
      if (isSearchActive) {
        wrapper.classList.remove('active');
      } else {
        // Check if search field has focus before adding active class back
        const searchField = this.el.shadowRoot.querySelector('ifx-search-field');
        const searchFieldHasFocus = searchField && searchField.matches(':focus-within');
        if (!searchFieldHasFocus) {
          wrapper.classList.add('active');
        }
      }
    }

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
      });      // Simple check after filtering
      if (isSearchActive) {
        setTimeout(() => {
          const allOptions = this.el.querySelectorAll('ifx-multiselect-option');
          let visibleCount = 0;

          allOptions.forEach(option => {
            const style = window.getComputedStyle(option);
            const rect = option.getBoundingClientRect();

            // Check multiple conditions for visibility
            if (style.display !== 'none' &&
                style.visibility !== 'hidden' &&
                style.opacity !== '0' &&
                rect.height > 0) {
              visibleCount++;
            }
          });

          console.log('Visible options after search:', visibleCount, 'Search term:', searchTerm);

          const optionsContainer = this.el.shadowRoot.querySelector('.ifx-multiselect-options');
          if (optionsContainer) {
            if (visibleCount === 0) {
              console.log('Adding show-no-results class');
              optionsContainer.classList.add('show-no-results');
            } else {
              console.log('Removing show-no-results class');
              optionsContainer.classList.remove('show-no-results');
            }
          }
        }, 200);
      } else {
        const optionsContainer = this.el.shadowRoot.querySelector('.ifx-multiselect-options');
        if (optionsContainer) {
          optionsContainer.classList.remove('show-no-results');
        }
      }
    });
  }, 150);

  private handleSearchFocus(hasFocus: boolean) {
    const wrapper = this.el.shadowRoot.querySelector('.ifx-multiselect-wrapper');
    if (wrapper) {
      if (hasFocus || this.searchTerm !== '') {
        wrapper.classList.remove('active');
      } else {
        wrapper.classList.add('active');
      }
    }
  }

  // Dropdown positioning and state management
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

  // Selection management methods
  public updateSlotBasedSelections() {
    const allOptionElements = this.el.querySelectorAll('ifx-multiselect-option');
    const selectedLeafOptions: Option[] = [];

    allOptionElements.forEach((optionEl: any) => {
      const instance = optionEl['__stencil_instance'];
      if (instance && instance.selected && !instance.hasChildren) {
        selectedLeafOptions.push({
          value: instance.value,
          selected: true,
          disabled: instance.disabled,
          indeterminate: instance.indeterminate
        });
      }
    });

    this.persistentSelectedOptions = selectedLeafOptions;
    this.optionCount = this.countLeafOptions();
  }

  private countLeafOptions(): number {
    const allOptionElements = this.el.querySelectorAll('ifx-multiselect-option');
    let count = 0;
    allOptionElements.forEach((optionEl: any) => {
      const instance = optionEl['__stencil_instance'];
      if (instance && !instance.hasChildren) {
        count++;
      }
    });
    return count;
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

  // Component lifecycle methods
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
    // No longer needed - removed loadedOptions state
  }

  @Watch('persistentSelectedOptions')
  onSelectionChange(newValue: Option[], _: Option[]) {
    const formData = new FormData();
    newValue.forEach(option => formData.append(this.name, option.value));
    this.internals.setFormValue(formData);
  }

  // Expansion and selection control methods
  collapseAll() {
    const allOptionElements = this.el.querySelectorAll('ifx-multiselect-option');
    allOptionElements.forEach((optionEl: any) => {
      const instance = optionEl['__stencil_instance'];
      if (instance && instance.hasChildren) {
        instance.isExpanded = false;
      }
    });
  }

  expandAll() {
    const allOptionElements = this.el.querySelectorAll('ifx-multiselect-option');
    allOptionElements.forEach((optionEl: any) => {
      const instance = optionEl['__stencil_instance'];
      if (instance && instance.hasChildren) {
        instance.isExpanded = true;
      }
    });
  }

  async selectAll() {
    // Reset search when selecting all
    this.resetSearch();

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

  // Event handlers and document interaction
  handleDocumentClick = (event: Event) => {
    const path = event.composedPath();
    if (!path.includes(this.dropdownElement)) {
      this.dropdownOpen = false;
      document.removeEventListener('click', this.handleDocumentClick);
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

    const searchField = this.el.shadowRoot.querySelector('ifx-search-field') as any;
    if (searchField) {
      searchField.value = '';
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

  handleScroll(event: UIEvent) {
    // Scroll handling functionality - currently unused but kept for future features
    const element = event.target as HTMLElement;
    const halfwayPoint = Math.floor((element.scrollHeight - element.clientHeight) / 2);

    if (element.scrollTop >= halfwayPoint) {
      // Future: implement lazy loading or pagination
    }
  }

  // Rendering helper methods
  private renderSelectAll() {
    // Calculate state from current DOM elements
    const allOptionElements = this.el.querySelectorAll('ifx-multiselect-option');
    const leafOptions = Array.from(allOptionElements).filter((el: any) => !el.hasChildren);
    const selectedLeafOptions = Array.from(allOptionElements).filter((el: any) => !el.hasChildren && el.selected);

    const allSelected = leafOptions.length > 0 && selectedLeafOptions.length === leafOptions.length;

    const toggleSelectAll = () => {
      if (allSelected) {
        this.clearSelection();
      } else {
        this.selectAll();
      }
    };

    return (
      <div class="select-all-wrapper">
        <ifx-checkbox tabIndex={-1} id='selectAll' checked={allSelected} size="s" onClick={toggleSelectAll}>Select all</ifx-checkbox>
      </div>
    );
  }

  /**
   * Render no results message when search has no matches
   */
  private renderNoResultsMessage() {
    return (
      <div class="ifx-multiselect-no-results">
        <div class="no-results-content">
          <span class="no-results-text">{this.noResultsMessage}</span>
        </div>
      </div>
    );
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

    // Prüfen, ob es ein flaches Multi Select ist (keine Option hat verschachtelte Childs)
    let isFlatMultiselect = false;
    const allOptionElements = this.el.querySelectorAll('ifx-multiselect-option');
    if (allOptionElements.length > 0) {
      isFlatMultiselect = Array.from(allOptionElements).every(option => option.children.length === 0);
    }

    return (
      <div class={`ifx-multiselect-container`} ref={el => this.dropdownElement = el as HTMLElement}>
        {
          this.label ?
            <div class="ifx-label-wrapper">
              <span>{this.label}</span>
            </div> : null
        }
        <div class={`ifx-multiselect-wrapper
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
            <div class="ifx-multiselect-dropdown-menu">

              {(this.showSearch || this.showSelectAll || (this.showExpandCollapse && !isFlatMultiselect)) && (
                <div class="ifx-multiselect-dropdown-functions">
                  {this.showSearch && (
                    <div class="ifx-multiselect-dropdown-search">
                      <ifx-search-field
                        class="search-input"
                        placeholder="Search..."
                        size="s"
                        show-delete-icon="true"
                        onKeyDown={(e) => { e.stopPropagation() }}
                        onIfxInput={(event) => this.handleSearch(event.target)}
                        onFocus={() => this.handleSearchFocus(true)}
                        onBlur={() => this.handleSearchFocus(false)}
                      ></ifx-search-field>
                    </div>
                  )}

                  <div class="ifx-multiselect-dropdown-controls">
                    {this.showSelectAll && this.renderSelectAll()}
                    {this.showExpandCollapse && !isFlatMultiselect && (
                      <div class="expand-collapse-controls">
                        <span class="control-item" onClick={() => this.expandAll()}>Expand</span>
                        <span class="control-item" onClick={() => this.collapseAll()}>Collapse</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              <div class="ifx-multiselect-options" onScroll={(event) => this.handleScroll(event)}>
                <slot />
                {this.searchTerm && this.showNoResultsMessage && this.renderNoResultsMessage()}
              </div>
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
              <ifx-icon icon='chevron-down-16' key="chevron-icon"></ifx-icon>
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
