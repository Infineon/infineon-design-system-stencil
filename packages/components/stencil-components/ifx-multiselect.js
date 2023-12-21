import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$3 } from './checkbox.js';
import { d as defineCustomElement$2 } from './infineonIconStencil.js';

const multiselectCss = "*{font-family:\"Source Sans 3\"}.ifx-multiselect-container{position:relative;box-sizing:border-box;display:flex;flex-direction:column;align-items:flex-start}.ifx-multiselect-container.small-select{height:36px}.ifx-multiselect-container.medium-select{height:40px}.ifx-multiselect-container:hover{cursor:pointer}.ifx-multiselect-container .ifx-label-wrapper{font-size:16px;line-height:24px;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere;max-width:100%}.ifx-multiselect-container .ifx-error-message-wrapper{color:#CD002F;font-size:12px;line-height:16px;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere;max-width:100%}.ifx-multiselect-container .ifx-multiselect-wrapper{box-sizing:border-box;position:relative;display:flex;align-items:center;border:1px solid #8D8786;width:100%}.ifx-multiselect-container .ifx-multiselect-wrapper.small-select{line-height:20px;padding:8px 12px;font-size:14px}.ifx-multiselect-container .ifx-multiselect-wrapper.medium-select{line-height:24px;padding:8px 16px;font-size:16px}.ifx-multiselect-container .ifx-multiselect-wrapper:focus-visible{outline:none}.ifx-multiselect-container .ifx-multiselect-wrapper:focus-visible:not(.active):not(:active)::before{content:\"\";position:absolute;width:calc(100% + 4px);height:calc(100% + 4px);top:50%;left:50%;transform:translate(-50%, -50%);border:2px solid #0A8276}.ifx-multiselect-container .ifx-multiselect-wrapper.disabled{background:#EEEDED;color:#575352;border-color:#575352;cursor:not-allowed;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ifx-multiselect-container .ifx-multiselect-wrapper.error{border-color:#CD002F}.ifx-multiselect-container .ifx-multiselect-wrapper:hover:not(.focus,:focus){border-color:#8D8786}.ifx-multiselect-container .ifx-multiselect-wrapper.active{border:2px solid #0A8276 !important}.ifx-multiselect-container .ifx-multiselect-wrapper.active .icon-wrapper-up{display:flex;align-items:center;justify-content:center}.ifx-multiselect-container .ifx-multiselect-wrapper.active .icon-wrapper-down{display:none}.ifx-multiselect-container .ifx-multiselect-wrapper .icon-wrapper-up{display:none}.ifx-multiselect-container .ifx-multiselect-wrapper .icon-wrapper-down{display:flex;align-items:center;justify-content:center}.ifx-multiselect-container .ifx-multiselect-wrapper.is-flipped .ifx-multiselect-dropdown-menu{top:auto;bottom:100%}.ifx-multiselect-container .ifx-multiselect-input{flex-grow:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ifx-multiselect-container .ifx-multiselect-input.placeholder{opacity:0.5}.ifx-multiselect-container .ifx-multiselect-icon-container{margin-left:auto;align-items:center;display:flex}.ifx-multiselect-container .ifx-clear-button{margin-right:8px;display:flex}.ifx-multiselect-container .ifx-multiselect-dropdown-menu{position:absolute;top:100%;left:0;width:100%;border:1px solid #ddd;margin-top:2px;background-color:#fff;box-shadow:0 2px 10px rgba(0, 0, 0, 0.1);max-height:300px;overflow-y:auto;z-index:var(--dynamic-z-index, 1)}.ifx-multiselect-container .ifx-multiselect-dropdown-menu .search-input{width:100%;padding:8px 16px;font-size:16px;font-style:normal;font-weight:400;box-sizing:border-box;background-color:#FFFFFF;border:none;border-bottom:2px solid #ccc}.ifx-multiselect-container .ifx-multiselect-dropdown-menu .search-input:focus{outline:none;border:1px solid #0A8276}.ifx-multiselect-container .ifx-multiselect-dropdown-menu .search-input::placeholder{color:#999}.ifx-multiselect-container .option{position:relative;padding:8px 16px;gap:8px;align-items:center;display:flex;font-style:normal;font-weight:400}.ifx-multiselect-container .option.small-select{line-height:20px;font-size:14px}.ifx-multiselect-container .option.medium-select{line-height:24px;font-size:16px}.ifx-multiselect-container .option:hover{background-color:#EEEDED}.ifx-multiselect-container .option:focus{background-color:#BFBBBB;outline:none;box-shadow:0 0 0 2px rgba(0, 0, 0, 0.1)}.ifx-multiselect-container .option.is-highlighted{background-color:#EEEDED}.ifx-multiselect-container .option.sub-option{padding-left:30px;}";

const Multiselect = /*@__PURE__*/ proxyCustomElement(class Multiselect extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.ifxSelect = createEvent(this, "ifxSelect", 7);
    this.ifxMultiselectIsOpen = createEvent(this, "ifxMultiselectIsOpen", 7);
    this.currentIndex = 0; //needed for option selection using keyboard
    this.handleDocumentClick = (event) => {
      const path = event.composedPath();
      if (!path.includes(this.dropdownElement)) {
        this.dropdownOpen = false;
        document.removeEventListener('click', this.handleDocumentClick);
        // Dispatch the ifxMultiselectIsOpen event
        this.ifxMultiselectIsOpen.emit(this.dropdownOpen);
      }
    };
    this.options = undefined;
    this.batchSize = 50;
    this.size = 'medium (40px)';
    this.disabled = false;
    this.error = false;
    this.internalError = false;
    this.errorMessage = "Error";
    this.label = "";
    this.persistentSelectedOptions = [];
    this.placeholder = "";
    this.listOfOptions = [];
    this.dropdownOpen = false;
    this.dropdownFlipped = undefined;
    this.maxItemCount = undefined;
    this.zIndex = 1;
    this.isLoading = false;
    this.loadedOptions = [];
    this.filteredOptions = [];
  }
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
  handleScroll(event) {
    const element = event.target;
    const halfwayPoint = Math.floor((element.scrollHeight - element.clientHeight) / 2); //loading more options when the user has scrolled halfway through the current list
    if (element.scrollTop >= halfwayPoint) {
      this.fetchMoreOptions();
    }
  }
  async fetchOptions(startIndex, count) {
    let allOptions = [];
    // Parse options if it's a string, or use directly if it's an array
    if (typeof this.options === 'string') {
      try {
        allOptions = JSON.parse(this.options);
      }
      catch (err) {
        console.error('Failed to parse options:', err);
      }
    }
    else if (Array.isArray(this.options)) {
      allOptions = this.options;
    }
    else {
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
  handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
    if (searchTerm === '') {
      this.filteredOptions = this.loadedOptions;
    }
    else {
      this.filteredOptions = this.loadedOptions.filter(option => option.label.toLowerCase().includes(searchTerm));
    }
  }
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
  updateInternalError() {
    this.internalError = this.error;
  }
  loadedOptionsChanged() {
    this.filteredOptions = [...this.loadedOptions];
  }
  handleOptionClick(option) {
    this.internalError = false; //reset potential previous errors
    // 1. Prevent action if disabled
    //check if newly selected option has children => if not, count it as 1, otherwise count the # of children
    let newOptionsLength = option.children ? option.children.length : 1;
    if (this.maxItemCount && this.persistentSelectedOptions.length + newOptionsLength > this.maxItemCount && !this.persistentSelectedOptions.some(selectedOption => selectedOption.value === option.value)) {
      console.error('Max item count reached');
      this.internalError = true;
      this.errorMessage = "Please consider the maximum number of items to choose from";
      return;
    }
    // 2. Determine if the current option was previously selected
    const wasSelected = this.persistentSelectedOptions.some(selectedOption => selectedOption.value === option.value);
    // 3. Handle parent-child relationships
    if (option.children && option.children.length > 0) {
      if (wasSelected) {
        this.persistentSelectedOptions = this.persistentSelectedOptions.filter(selectedOption => selectedOption.value !== option.value && !option.children.some(child => child.value === selectedOption.value));
      }
      else {
        this.persistentSelectedOptions = [...this.persistentSelectedOptions, option, ...option.children];
      }
    }
    else {
      if (wasSelected) {
        this.persistentSelectedOptions = this.persistentSelectedOptions.filter(selectedOption => selectedOption.value !== option.value);
      }
      else {
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
        }
        else if (someChildrenSelected) {
          this.persistentSelectedOptions = this.persistentSelectedOptions.filter(selectedOption => selectedOption.value !== parentOption.value);
        }
        else {
          this.persistentSelectedOptions = this.persistentSelectedOptions.filter(selectedOption => selectedOption.value !== parentOption.value);
        }
      }
    }
    // 4. Reflect changes in the listOfOptions state
    this.listOfOptions = this.listOfOptions.map(opt => {
      if (opt.value === option.value) {
        return Object.assign(Object.assign({}, opt), { selected: !wasSelected });
      }
      else if (opt.children) {
        const isParentSelected = this.persistentSelectedOptions.includes(opt);
        opt.children = opt.children.map(child => {
          if (child.value === option.value || isParentSelected) {
            return Object.assign(Object.assign({}, child), { selected: true });
          }
          return child;
        });
        return Object.assign(Object.assign({}, opt), { children: opt.children });
      }
      return opt;
    });
    // 5. Update the selected status in persistentSelectedOptions
    this.persistentSelectedOptions = this.persistentSelectedOptions.map(pOpt => {
      const matchingOption = this.listOfOptions.find(loOpt => loOpt.value === pOpt.value) || this.listOfOptions.flatMap(loOpt => loOpt.children || []).find(child => child.value === pOpt.value);
      if (matchingOption) {
        return Object.assign(Object.assign({}, pOpt), { selected: matchingOption.selected });
      }
      return pOpt;
    });
    // 6. Emit persistentSelectedOptions without duplicated children
    const emittedOptions = this.persistentSelectedOptions.map(pOpt => {
      // If this option is a child, check if its parent is in persistentSelectedOptions
      const parent = this.listOfOptions.find(loOpt => loOpt.children && loOpt.children.some(child => child.value === pOpt.value));
      if (parent && this.persistentSelectedOptions.some(selectedOption => selectedOption.value === parent.value)) {
        // If it's a child and its parent is also selected, ensure it's set to selected: true
        return Object.assign(Object.assign({}, pOpt), { selected: true });
      }
      return pOpt;
    }).filter(pOpt => {
      // After ensuring the children are selected, now filter out the children whose parents are also in the persistentSelectedOptions
      const parent = this.listOfOptions.find(loOpt => loOpt.children && loOpt.children.some(child => child.value === pOpt.value));
      if (parent && this.persistentSelectedOptions.some(selectedOption => selectedOption.value === parent.value)) {
        return false; // Exclude this child since its parent is already selected
      }
      return true;
    });
    this.ifxSelect.emit(emittedOptions);
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
  waitForElement(querySelectorFunc, callback, maxTries = 50) {
    let tries = 0;
    function request() {
      requestAnimationFrame(() => {
        const elements = querySelectorFunc();
        if (elements.length > 0 || tries > maxTries) {
          callback(elements);
        }
        else {
          tries++;
          request();
        }
      });
    }
    request();
  }
  handleKeyDown(event) {
    if (this.disabled)
      return; // If it's disabled, don't do anything.
    const options = this.dropdownElement.querySelectorAll('.option');
    switch (event.code) {
      case 'Enter' :
        if (this.dropdownOpen) {
          this.selectItem(options);
        }
        else {
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
  handleWrapperClick(event) {
    // This is your existing logic for positioning the dropdown
    this.positionDropdown();
    // Check if the event target is the wrapper itself and not a child element.
    if (event.currentTarget === event.target) {
      this.toggleDropdown();
    }
  }
  clearSelection() {
    this.persistentSelectedOptions = [];
    this.listOfOptions = this.listOfOptions.map(option => (Object.assign(Object.assign({}, option), { selected: false })));
    this.ifxSelect.emit(this.persistentSelectedOptions); // if you want to emit empty selection after clearing
  }
  positionDropdown() {
    var _a;
    const wrapperRect = (_a = this.el.shadowRoot.querySelector('.ifx-multiselect-wrapper')) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
    const spaceBelow = window.innerHeight - wrapperRect.bottom;
    const spaceAbove = wrapperRect.top;
    // If there's more space above than below the trigger and the dropdown doesn't fit below
    if ((spaceAbove > spaceBelow && wrapperRect.height > spaceBelow) || (wrapperRect.bottom > window.innerHeight)) {
      this.dropdownFlipped = true;
    }
    else {
      this.dropdownFlipped = false;
    }
  }
  // Helper function to update highlighted option based on currentIndex
  updateHighlightedOption(options) {
    // Clear all highlights
    options.forEach((option) => option.classList.remove('is-highlighted'));
    // Apply highlight to the current option
    if (this.currentIndex >= 0 && this.currentIndex < options.length) {
      options[this.currentIndex].classList.add('is-highlighted');
    }
  }
  // Helper function to handle arrow down navigation
  handleArrowDown(options) {
    if (this.currentIndex < options.length - 1) {
      this.currentIndex++;
    }
    else {
      this.currentIndex = 0; // Wrap to the beginning.
    }
  }
  // Helper function to handle arrow up navigation
  handleArrowUp(options) {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
    else {
      this.currentIndex = options.length - 1; // Wrap to the end.
    }
  }
  selectItem(options) {
    // If there's a previous selection, remove its "selected" class
    const previouslySelected = this.dropdownElement.querySelector('.option.selected');
    if (previouslySelected) {
      previouslySelected.classList.remove('selected');
    }
    // Mark the current item as selected
    const currentOptionElement = options[this.currentIndex];
    currentOptionElement.classList.add('selected');
    const currentOptionValue = currentOptionElement.getAttribute('data-value');
    const currentListOfOptions = typeof this.options === 'string' //passed in string form via storybook
      ? JSON.parse(this.options).map((option) => ({ value: option.value, label: option.label, children: option.children, selected: option.selected })) // added selected
      : this.options.map(option => (Object.assign({}, option)));
    const currentOption = this.findInOptions(currentListOfOptions, currentOptionValue); // get the option object based on the currently selected value and the options array
    this.handleOptionClick(currentOption);
  }
  renderOption(option, index) {
    var _a;
    const isSelected = this.persistentSelectedOptions.some(selectedOption => selectedOption.value === option.value);
    const disableCheckbox = !isSelected && this.maxItemCount && this.persistentSelectedOptions.length >= this.maxItemCount;
    const uniqueId = `checkbox-${option.value}-${index}`; // Generate a unique ID using the index
    const isIndeterminate = this.isOptionIndeterminate(option);
    return (h("div", null, h("div", { class: `option ${isSelected ? 'selected' : ''} 
        ${this.getSizeClass()}`, "data-value": option.value, onClick: () => !disableCheckbox && this.handleOptionClick(option), tabindex: "0", role: `${((_a = option.children) === null || _a === void 0 ? void 0 : _a.length) > 0 ? "treeitem" : "option"}` }, h("ifx-checkbox", { id: uniqueId, value: isSelected, indeterminate: isIndeterminate, disabled: disableCheckbox }), h("label", { htmlFor: uniqueId }, option.label)), option.children && option.children.map((child, childIndex) => this.renderSubOption(child, `${index}-${childIndex}`))));
  }
  isOptionIndeterminate(option) {
    if (!option.children)
      return false;
    const selectedChildren = option.children.filter(child => this.persistentSelectedOptions.some(persistentOption => persistentOption.value === child.value)).length;
    return selectedChildren > 0 && selectedChildren < option.children.length;
  }
  findInOptions(options, searchTerm) {
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
  renderSubOption(option, index) {
    var _a;
    const isSelected = this.persistentSelectedOptions.some(selectedOption => selectedOption.value === option.value);
    const disableCheckbox = !isSelected && this.maxItemCount && this.persistentSelectedOptions.length >= this.maxItemCount;
    const uniqueId = `checkbox-${option.value}-${index}`;
    return (h("div", { class: `option sub-option ${isSelected ? 'selected' : ''} ${this.getSizeClass()}`, "data-value": option.value, role: `${((_a = option.children) === null || _a === void 0 ? void 0 : _a.length) > 0 ? "option" : "treeitem"}`, onClick: () => !disableCheckbox && this.handleOptionClick(option), tabindex: "0" }, h("ifx-checkbox", { id: uniqueId, value: isSelected, disabled: disableCheckbox }), h("label", { htmlFor: uniqueId }, option.label)));
  }
  render() {
    // Create a label for the selected options
    const selectedOptionsLabels = this.persistentSelectedOptions.map(option => option.label).join(', ');
    return (h("div", { class: `ifx-multiselect-container`, ref: el => this.dropdownElement = el }, this.label ?
      h("div", { class: "ifx-label-wrapper" }, h("span", null, this.label)) : null, h("div", { class: `ifx-multiselect-wrapper 
        ${this.getSizeClass()} 
        ${this.dropdownOpen ? 'active' : ''} 
        ${this.dropdownFlipped ? 'is-flipped' : ''}
        ${this.internalError ? 'error' : ""}
        ${this.disabled ? 'disabled' : ""}`, tabindex: "0", onClick: (event) => this.handleWrapperClick(event), onKeyDown: (event) => this.handleKeyDown(event) }, h("div", { class: `ifx-multiselect-input 
          ${this.persistentSelectedOptions.length === 0 ? 'placeholder' : ""}
          `, onClick: this.disabled ? undefined : () => this.toggleDropdown() }, this.persistentSelectedOptions.length > 0 ? selectedOptionsLabels : this.placeholder), this.dropdownOpen && (h("div", { class: "ifx-multiselect-dropdown-menu", onScroll: (event) => this.handleScroll(event), style: { '--dynamic-z-index': this.zIndex.toString() } }, h("input", { type: "text", role: "textbox", class: "search-input", onInput: (event) => this.handleSearch(event), placeholder: "Search..." }), this.filteredOptions.map((option, index) => this.renderOption(option, index)), this.isLoading && h("div", null, "Loading more options..."))), h("div", { class: "ifx-multiselect-icon-container" }, this.persistentSelectedOptions.length > 0 && (h("div", { class: "ifx-clear-button", onClick: () => this.clearSelection() }, h("ifx-icon", { icon: "cremove24" }))), h("div", { class: "icon-wrapper-up", onClick: this.disabled ? undefined : () => this.toggleDropdown() }, h("ifx-icon", { key: 'icon-up', icon: 'chevronup-16' })), h("div", { class: "icon-wrapper-down", onClick: this.disabled ? undefined : () => this.toggleDropdown() }, h("ifx-icon", { key: 'icon-down', icon: 'chevron-down-16' })))), this.internalError ?
      h("div", { class: "ifx-error-message-wrapper" }, h("span", null, this.errorMessage)) : null));
  }
  get el() { return this; }
  static get watchers() { return {
    "error": ["updateInternalError"],
    "loadedOptions": ["loadedOptionsChanged"]
  }; }
  static get style() { return multiselectCss; }
}, [1, "ifx-multiselect", {
    "options": [1],
    "batchSize": [2, "batch-size"],
    "size": [1],
    "disabled": [4],
    "error": [4],
    "errorMessage": [1, "error-message"],
    "label": [1],
    "placeholder": [1],
    "maxItemCount": [2, "max-item-count"],
    "internalError": [32],
    "persistentSelectedOptions": [32],
    "listOfOptions": [32],
    "dropdownOpen": [32],
    "dropdownFlipped": [32],
    "zIndex": [32],
    "isLoading": [32],
    "loadedOptions": [32],
    "filteredOptions": [32]
  }, undefined, {
    "error": ["updateInternalError"],
    "loadedOptions": ["loadedOptionsChanged"]
  }]);
Multiselect.globalZIndex = 1; // This will be shared among all instances of the component.
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ifx-multiselect", "ifx-checkbox", "ifx-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "ifx-multiselect":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Multiselect);
      }
      break;
    case "ifx-checkbox":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "ifx-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const IfxMultiselect = Multiselect;
const defineCustomElement = defineCustomElement$1;

export { IfxMultiselect, defineCustomElement };

//# sourceMappingURL=ifx-multiselect.js.map