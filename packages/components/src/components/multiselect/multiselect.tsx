import { Component, Watch, Prop, State, Event, EventEmitter, Element, h } from '@stencil/core';
import { Option } from './interfaces';

@Component({
  tag: 'ifx-multiselect',
  styleUrl: 'multiselect.scss',
  shadow: true
})


export class Multiselect {

  @Prop() options: Option[] | string;
  @Prop() size: string = 'medium (40px)';
  @Prop() disabled: boolean = false;
  @Prop() error: boolean = false;
  @Prop() errorMessage: string = "Error";
  @Prop() label: string = "";
  @State() persistentSelectedOptions: Option[] = [];
  @State() listOfOptions: Option[] = [];
  @State() dropdownOpen = false;
  @State() dropdownFlipped = false;
  @Prop() maxItemCount: number = 10;
  @State() zIndex: number = 1; // default z-index value
  static globalZIndex = 1; // This will be shared among all instances of the component.


  @Event() ifxSelect: EventEmitter;
  @Event() ifxMultiselectIsOpen: EventEmitter;

  @Element() el: HTMLElement;
  dropdownElement!: HTMLElement;

  @Watch('options')
  handleOptionsChange() {
    this.listOfOptions = typeof this.options === 'string'
      ? JSON.parse(this.options).map((option) => ({ value: option.value, label: option.label, children: option.children, selected: option.selected })) // added selected
      : this.options.map(option => ({ ...option }));

    // this.listOfOptions = [{
    //   value: "a",
    //   label: "option a",
    //   selected: false
    // },
    // {
    //   value: "b",
    //   label: "option b",
    //   selected: false
    // },
    // {
    //   value: "c",
    //   label: "option c",
    //   selected: false,
    //   children: [
    //     {
    //       value: "c1",
    //       label: "option c1",
    //       selected: false
    //     },
    //     {
    //       value: "c2",
    //       label: "option c2",
    //       selected: false
    //     }
    //   ]
    // },
    // {
    //   value: "d",
    //   label: "option d",
    //   selected: false
    // }];
    // Update persistentSelectedOptions based on initially selected states
    const initiallySelected = this.listOfOptions.filter(option => option.selected);
    this.persistentSelectedOptions = [...this.persistentSelectedOptions, ...initiallySelected];
  }

  componentDidLoad() {
    setTimeout(() => {
      this.positionDropdown();
    }, 500);
  }


  componentWillLoad() {
    this.handleOptionsChange();
  }

  handleOptionClick(option: Option) {
    console.log("option click");

    // 1. Prevent action if disabled
    if (this.persistentSelectedOptions.length >= this.maxItemCount && !this.persistentSelectedOptions.some(selectedOption => selectedOption.value === option.value)) {
      console.error('Max item count reached');
      return;
    }

    // 2. Determine if the current option was previously selected
    const wasSelected = this.persistentSelectedOptions.some(selectedOption => selectedOption.value === option.value);

    // 3. Handle parent-child relationships
    if (option.children && option.children.length > 0) {
      if (wasSelected) {
        this.persistentSelectedOptions = this.persistentSelectedOptions.filter(selectedOption => selectedOption.value !== option.value && !option.children.some(child => child.value === selectedOption.value));
      } else {
        this.persistentSelectedOptions = [...this.persistentSelectedOptions, option, ...option.children];
      }
    } else {
      if (wasSelected) {
        this.persistentSelectedOptions = this.persistentSelectedOptions.filter(selectedOption => selectedOption.value !== option.value);
      } else {
        this.persistentSelectedOptions.push(option);
      }

      const parentOption = this.listOfOptions.find(opt => opt.children && opt.children.some(child => child.value === option.value));

      if (parentOption) {
        const allChildrenSelected = parentOption.children.every(child => this.persistentSelectedOptions.some(selectedOption => selectedOption.value === child.value));
        const someChildrenSelected = parentOption.children.some(child => this.persistentSelectedOptions.some(selectedOption => selectedOption.value === child.value));

        if (allChildrenSelected) {
          if (!this.persistentSelectedOptions.some(selectedOption => selectedOption.value === parentOption.value)) {
            this.persistentSelectedOptions.push(parentOption);
          }
        } else if (someChildrenSelected) {
          this.persistentSelectedOptions = this.persistentSelectedOptions.filter(selectedOption => selectedOption.value !== parentOption.value);
        } else {
          this.persistentSelectedOptions = this.persistentSelectedOptions.filter(selectedOption => selectedOption.value !== parentOption.value);
        }
      }
    }

    // 4. Reflect changes in the listOfOptions state
    this.listOfOptions = this.listOfOptions.map(opt => {
      if (opt.value === option.value) {
        return { ...opt, selected: !wasSelected };
      } else if (opt.children) {
        const isParentSelected = this.persistentSelectedOptions.includes(opt);
        opt.children = opt.children.map(child => {
          if (child.value === option.value || isParentSelected) {
            return { ...child, selected: true };
          }
          return child;
        });
        return { ...opt, children: opt.children };
      }
      return opt;
    });

    // 5. Update the selected status in persistentSelectedOptions
    this.persistentSelectedOptions = this.persistentSelectedOptions.map(pOpt => {
      const matchingOption = this.listOfOptions.find(loOpt => loOpt.value === pOpt.value) || this.listOfOptions.flatMap(loOpt => loOpt.children || []).find(child => child.value === pOpt.value);
      if (matchingOption) {
        return { ...pOpt, selected: matchingOption.selected };
      }
      return pOpt;
    });

    // 6. Emit persistentSelectedOptions without duplicated children
    const emittedOptions = this.persistentSelectedOptions.map(pOpt => {
      // If this option is a child, check if its parent is in persistentSelectedOptions
      const parent = this.listOfOptions.find(loOpt => loOpt.children && loOpt.children.some(child => child.value === pOpt.value));
      if (parent && this.persistentSelectedOptions.some(selectedOption => selectedOption.value === parent.value)) {
        // If it's a child and its parent is also selected, ensure it's set to selected: true
        return { ...pOpt, selected: true };
      }
      return pOpt;
    }).filter(pOpt => {
      // After ensuring the children are selected, now filter out the children whose parents are also in the persistentSelectedOptions
      const parent = this.listOfOptions.find(loOpt => loOpt.children && loOpt.children.some(child => child.value === pOpt.value));
      if (parent && this.persistentSelectedOptions.some(selectedOption => selectedOption.value === parent.value)) {
        return false;  // Exclude this child since its parent is already selected
      }
      return true;
    });
    this.ifxSelect.emit(emittedOptions);
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
    this.zIndex = Multiselect.globalZIndex++;
  }

  handleKeyDown(event: KeyboardEvent) {
    if (this.disabled) return; // If it's disabled, don't do anything.

    if (event.code === 'Enter' || event.code === 'Space') {
      this.toggleDropdown();

      if (event.code === 'Space') {
        event.preventDefault(); // Prevent the default behavior (page scrolling) on Space key.
      }
    }
  }

  handleWrapperClick(event: MouseEvent) {
    console.log("wrapper clicked")
    // This is your existing logic for positioning the dropdown
    this.positionDropdown();

    // Check if the event target is the wrapper itself and not a child element.
    if (event.currentTarget === event.target) {
      this.toggleDropdown();
    }
  }


  clearSelection() {
    this.persistentSelectedOptions = [];
    this.listOfOptions = this.listOfOptions.map(option => ({ ...option, selected: false }));
    this.ifxSelect.emit(this.persistentSelectedOptions); // if you want to emit empty selection after clearing
  }

  positionDropdown() {
    const dropdown = this.el.shadowRoot.querySelector('.dropdown-menu');
    const wrapper = this.el.shadowRoot.querySelector('.ifx-multiselect-wrapper');

    if (!dropdown || !wrapper) return;

    const dropdownRect = dropdown.getBoundingClientRect();
    const wrapperRect = wrapper.getBoundingClientRect();

    const spaceAbove = wrapperRect.top;
    const spaceBelow = window.innerHeight - wrapperRect.bottom;

    // Remove the is-flipped class initially
    wrapper.classList.remove('is-flipped');

    // If there's more space above than below the trigger and the dropdown doesn't fit below
    if (spaceAbove > spaceBelow && dropdownRect.height > spaceBelow) {
      wrapper.classList.add('is-flipped');
    }
  }



  renderOption(option: Option, index: number) {
    const isSelected = this.persistentSelectedOptions.some(selectedOption => selectedOption.value === option.value);
    const disableCheckbox = !isSelected && this.persistentSelectedOptions.length >= this.maxItemCount;
    const uniqueId = `checkbox-${option.value}-${index}`; // Generate a unique ID using the index
    const isIndeterminate = this.isOptionIndeterminate(option);

    return (
      <div>
        <div class={`option ${isSelected ? 'selected' : ''} ${this.getSizeClass()}`}
          onClick={() => !disableCheckbox && this.handleOptionClick(option)}
          tabindex="0"
        >
          <ifx-checkbox id={uniqueId} value={isSelected} indeterminate={isIndeterminate} disabled={disableCheckbox}></ifx-checkbox>
          <label htmlFor={uniqueId}>{option.label}</label>
        </div>
        {option.children && option.children.map((child, childIndex) => this.renderSubOption(child, `${index}-${childIndex}`))}
      </div>
    );
  }


  isOptionIndeterminate(option: Option): boolean {
    if (!option.children) return false;

    const selectedChildren = option.children.filter(child =>
      this.persistentSelectedOptions.some(persistentOption => persistentOption.value === child.value)
    ).length;

    return selectedChildren > 0 && selectedChildren < option.children.length;
  }


  renderSubOption(option: Option, index: string) {
    const isSelected = this.persistentSelectedOptions.some(selectedOption => selectedOption.value === option.value);
    const uniqueId = `checkbox-${option.value}-${index}`;

    return (
      <div class={`option sub-option ${isSelected ? 'selected' : ''} ${this.getSizeClass()}`}
        onClick={() => this.handleOptionClick(option)}
        tabindex="0">
        <ifx-checkbox id={uniqueId} value={isSelected}></ifx-checkbox>
        <label htmlFor={uniqueId}>{option.label}</label>
      </div>
    );
  }

  render() {
    // Create a label for the selected options
    const selectedOptionsLabels = this.persistentSelectedOptions.map(option => option.label).join(', ');

    return (
      <div class={`ifx-multiselect-container ${this.getSizeClass()}`} ref={el => this.dropdownElement = el as HTMLElement}>
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
        ${this.error ? 'error' : ""}
        ${this.disabled ? 'disabled' : ""}`}
          tabindex="0"
          onClick={(event) => this.handleWrapperClick(event)}
          onKeyDown={(event) => this.handleKeyDown(event)} >
          <div class="ifx-multiselect-input" onClick={this.disabled ? undefined : () => this.toggleDropdown()} >
            {this.persistentSelectedOptions.length > 0 ? selectedOptionsLabels : 'Placeholder'}
          </div>
          {this.dropdownOpen && (
            <div class="ifx-multiselect-dropdown-menu" style={{ '--dynamic-z-index': this.zIndex.toString() }}>
              {this.listOfOptions.map((option, index) => this.renderOption(option, index))}
            </div>
          )}
          <div class="ifx-multiselect-icon-container">

            {/* Clear Button - will show only if there's a selection */}
            {this.persistentSelectedOptions.length > 0 && (
              <div class="ifx-clear-button" onClick={() => this.clearSelection()}>
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
        {
          this.error ?
            <div class="ifx-error-message-wrapper">
              <span>{this.errorMessage}</span>
            </div> : null
        }
      </div>
    );
  }

}
