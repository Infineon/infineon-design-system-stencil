import { h, Component, Element, Method, Prop, Event, EventEmitter, State } from '@stencil/core';
import { HTMLStencilElement, Listen, Watch } from '@stencil/core/internal';
import ChoicesJs from 'choices.js';

import {
  AjaxFn,
  ClassNames,
  FuseOptions,
  IChoicesProps,
  IChoicesMethods,
  ItemFilterFn,
  NoResultsTextFn,
  NoChoicesTextFn,
  AddItemTextFn,
  MaxItemTextFn,
  SortFn,
  OnInit,
  OnCreateTemplates,
  UniqueItemText,
  ValueCompareFunction,
  CustomAddItemText,
} from './interfaces';
import { filterObject, isDefined, isJSONParseable } from './utils';

@Component({
  tag: 'ifx-select',
  styleUrl: 'select.scss',
  // shadow: true, //with shadow dom enabled, styles to the external choicesJs library cant be applied.
})
export class Choices implements IChoicesProps, IChoicesMethods {
  @Prop() public value: string;
  @Prop() public name: string;
  @Prop() public items: Array<any>;
  @Prop() public choices: Array<any> | string;
  @Prop() public renderChoiceLimit: number;
  @Prop() public maxItemCount: number;
  @Prop() public addItems: boolean;
  @Prop() public removeItems: boolean;
  @Prop() public removeItemButton: boolean;
  @Prop() public editItems: boolean;
  @Prop() public duplicateItemsAllowed: boolean;
  @Prop() public delimiter: string;
  @Prop() public paste: boolean;
  @Prop() public showSearch: boolean;
  @Prop() public searchChoices: boolean;
  @Prop() public searchFields: Array<string> | string;
  @Prop() public searchFloor: number;
  @Prop() public searchResultLimit: number;
  @Prop() public position: 'auto' | 'top' | 'bottom';
  @Prop() public resetScrollPosition: boolean;
  @Prop() public shouldSort: boolean;
  @Prop() public shouldSortItems: boolean;
  @Prop() public sorter: SortFn;
  @Prop() public placeholder: boolean | string;
  @Prop() public searchPlaceholderValue: string;
  @Prop() public prependValue: string;
  @Prop() public appendValue: string;
  @Prop() public renderSelectedChoices: 'always' | 'auto';
  @Prop() public loadingText: string;
  @Prop() public noResultsText: string | NoResultsTextFn;
  @Prop() public noChoicesText: string | NoChoicesTextFn;
  @Prop() public itemSelectText: '';
  @Prop() public addItemText: string | AddItemTextFn;
  @Prop() public maxItemText: string | MaxItemTextFn;
  @Prop() public uniqueItemText: UniqueItemText;
  @Prop() public classNames: ClassNames;
  @Prop() public fuseOptions: FuseOptions;
  @Prop() public addItemFilter: string | RegExp | ItemFilterFn;
  @Prop() public customAddItemText: CustomAddItemText;
  @Prop() public callbackOnInit: OnInit;
  @Prop() public callbackOnCreateTemplates: OnCreateTemplates;
  @Prop() public valueComparer: ValueCompareFunction;
  //custom ifx props
  @Prop() error: boolean = false;
  @Prop() errorMessage: string = 'Error';
  @Prop() label: string = '';
  @Prop() disabled: boolean = false;
  @Prop() placeholderValue: string = 'Placeholder';
  @Event() ifxSelect: EventEmitter<CustomEvent>;
  @Event() ifxInput: EventEmitter<CustomEvent>;
  @Prop({ mutable: true }) options: any[] | string;
  @Prop() size: string = 'medium (40px)';
  @State() selectedOption: any | null = null;
  @State() optionIsSelected: boolean = false;

  private resizeObserver: ResizeObserver;

  @Element() private readonly root: HTMLElement;
  private choice;
  private element;

  @Watch('disabled')
  watchDisabled(newValue: boolean) {
    if (newValue) {
      this.choice.disable();
    } else {
      this.choice.enable();
    }
  }

  handleDeleteSelection() {
    this.clearInput()
    this.selectedOption = null;
    this.setPreSelected(null);
    this.closeDropdown();
    this.ifxSelect.emit(null);
    this.optionIsSelected = false;
  }

  @Method()
  async handleChange() {
    this.ifxSelect.emit(this.choice.getValue());
    this.selectedOption = this.choice.getValue(); //store the selected option to reflect it in the template function
    this.setPreSelected(this.selectedOption.value); //set previously selected items from the input array to false and the new selection to true
    this.closeDropdown();
  }

  @Method()
  public async highlightItem(item: HTMLElement, runEvent?: boolean) {
    this.choice.highlightItem(item, runEvent);

    return this;
  }

  @Method()
  public async unhighlightItem(item: HTMLElement) {
    this.choice.unhighlightItem(item);

    return this;
  }

  @Method()
  public async highlightAll() {
    this.choice.highlightAll();

    return this;
  }

  @Method()
  public async unhighlightAll() {
    this.choice.unhighlightAll();

    return this;
  }

  @Method()
  public async removeActiveItemsByValue(value: string) {
    this.choice.removeActiveItemsByValue(value);
    return this;
  }

  @Method()
  public async removeActiveItems(excludedId?: number) {
    this.choice.removeActiveItems(excludedId);

    return this;
  }

  @Method()
  public async removeHighlightedItems(runEvent?: boolean) {
    this.choice.removeHighlightedItems(runEvent);

    return this;
  }

  @Method()
  public async showDropdown(focusInput?: boolean) {
    this.choice.showDropdown(focusInput);
    return this;
  }

  @Method()
  public async hideDropdown(blurInput?: boolean) {
    this.choice.hideDropdown(blurInput);

    return this;
  }

  @Method()
  public async getValue(valueOnly?: boolean): Promise<string | Array<string>> {
    return this.choice.getValue(valueOnly);
  }

  @Method()
  public async setValue(args: Array<any>) {
    this.choice.setValue(args);

    return this;
  }

  @Method()
  public async setChoiceByValue(value: string | Array<string>) {
    this.choice.setChoiceByValue(value);

    return this;
  }

  @Method()
  public async setChoices(choices: any[] | string, value: string, label: string, replaceChoices?: boolean) {
    let listOfChoices;
    if (typeof choices === 'string') {
      try {
        if (!isJSONParseable(choices)) {
          //meaning the input string comes from storybook as a non valid json string to be displayed in a beautified version on storybook
          choices = choices
            .replace(/'/g, '"')
            .replace(/"false"/g, 'false')
            .replace(/"true"/g, 'true');
        }
        listOfChoices = [...JSON.parse(choices)];
      } catch (err) {
        console.error('Failed to parse choices:', err);
      }
    } else if (Array.isArray(choices) || typeof choices === 'object') {
      listOfChoices = [...choices];
    } else {
      console.error('Unexpected value for choices:', this.options);
    }

    this.choice.setChoices(listOfChoices, value, label, replaceChoices);
    return this;
  }

  @Method()
  public async clearChoices() {
    this.choice.clearChoices();

    return this;
  }

  @Method()
  public async clearStore() {
    this.choice.clearStore();

    return this;
  }

  @Method()
  public async clearInput() {
    this.choice.clearInput();

    return this;
  }

  @Method()
  public async ajax(fn: AjaxFn) {
    this.choice.ajax(fn);

    return this;
  }

    @Method()
    async handleDeleteIcon() {
      const width = this.root.offsetWidth;
      const deleteIconWrapper = this.root.querySelector('.ifx-choices__icon-wrapper-delete');
      if(deleteIconWrapper) { 
        if (width <= 180) {
          deleteIconWrapper.classList.add('hide')
        } else { 
          deleteIconWrapper.classList.remove('hide')
        }
      }
    }


  handleCloseButton() { 
    if(typeof this.options === 'string') { 
      const optionsToArray = JSON.parse(this.options);
      const optionIsSelected = optionsToArray.find(option => option.selected === true)
      if(optionIsSelected) { 
        this.optionIsSelected = true;
      } else { 
        this.optionIsSelected = false;
      }
    } else if(this.options && Array.isArray(this.options)) { 
      const optionIsSelected = this.options.find(option => option.selected === true)
      if(optionIsSelected) { 
        this.optionIsSelected = true;
      } else { 
        this.optionIsSelected = false;
      }
    }
  }

  protected componentWillLoad() { 
   this.handleCloseButton()
  }

  protected componentWillUpdate() { 
    this.handleCloseButton()
    
  }

  addResizeObserver() { 
    this.resizeObserver = new ResizeObserver(() => {
      this.handleDeleteIcon();
    });
  
    const componentWrapper = this.root.querySelector('.ifx-choices__wrapper');
    this.resizeObserver.observe(componentWrapper);
  }

  protected componentDidLoad() {
    this.init();
    this.addEventListenersToHandleCustomFocusAndActiveState();
    this.handleDeleteIcon();
    this.addResizeObserver()
  }

  protected componentDidUpdate() {
    this.init();
    this.handleDeleteIcon()
  }

  protected disconnectedCallback() {
    this.destroy();

    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }
  }

  protected render(): any {
    const attributes = {
      'data-selector': 'root',
      'name': this.name || null,
      // 'remove-item-button': false,
    };
    const choicesWrapperClass = `ifx-choices__wrapper ${this.getSizeClass()}`;

    // destroy choices element to restore previous dom structure
    // so vdom can replace the element correctly
    this.destroy();

    return (
      <div class={`ifx-select-container`}>
        {this.label ? (
          <div class="ifx-label-wrapper">
            <span>{this.label}</span>
          </div>
        ) : null}
        <div
          class={`${choicesWrapperClass} 
            ${this.disabled ? 'disabled' : ''} 
            ${this.error ? 'error' : ''}`}
          onClick={this.disabled ? undefined : () => this.toggleDropdown()}
          onKeyDown={event => this.handleKeyDown(event)}
        >
          <select class='single__select-input-field' disabled = {this.disabled} {...attributes} data-trigger onChange={() => this.handleChange()}>
            {this.createSelectOptions(this.options)}
          </select>

          <div class="single__select-icon-container">
            { this.optionIsSelected && (
                <div class="ifx-choices__icon-wrapper-delete">
                  <ifx-icon icon="cremove16" onClick={() => this.handleDeleteSelection()}></ifx-icon>
                </div>
              )}
              <div class="ifx-choices__icon-wrapper-up">
                <ifx-icon key="icon-up" icon="chevronup-16"></ifx-icon>
              </div>
              <div class="ifx-choices__icon-wrapper-down">
                <ifx-icon key="icon-down" icon="chevron-down-16"></ifx-icon>
              </div>
          </div>
        </div>
        {this.error ? (
          <div class="ifx-error-message-wrapper">
            <span>{this.errorMessage}</span>
          </div>
        ) : null}
      </div>
    );
  }

  toggleDropdown() {
    const div = this.root.querySelector('.ifx-choices__wrapper') as HTMLDivElement;
    if (div.classList.contains('active') || this.choice.dropdown.isActive) {
      this.hideDropdown();
      div.classList.remove('active');
    } else {
      this.choice.showDropdown();
      div.classList.add('active');
    }
    const choicesElement = this.root.querySelector('.choices');
    choicesElement.classList.add('is-focused'); // Add the 'is-focused' class, cause a click on the wrapper (and not the embedded select element) doesnt add this automatically to the choices instance
  }

  closeDropdown() {
    const ifxChoicesWrapper = this.root.querySelector('.ifx-choices__wrapper') as HTMLDivElement;
    ifxChoicesWrapper.classList.remove('active');
  }

  @Listen('mousedown', { target: 'document' })
  handleOutsideClick(event: MouseEvent) {
    const path = event.composedPath();
    const ifxChoicesContainer = this.root.querySelector('.ifx-choices__wrapper') as HTMLDivElement;

    if (!path.includes(this.root)) {
      ifxChoicesContainer.classList.remove('active');
    }
  }

  handleKeyDown(event: KeyboardEvent) {
    if (this.disabled) return;

    const isSearchInput = (event.target as HTMLElement).classList.contains('choices__input');

    // If the event originated from the search input and the key is 'Space', do nothing.
    if (isSearchInput && event.code === 'Space') {
      return;
    }

    if (event.code === 'Enter' || (event.code === 'Space' && !isSearchInput)) {
      this.toggleDropdown();
    }

    // Only prevent default space behavior when it's not from the search input.
    if (event.code === 'Space' && !isSearchInput) {
      event.preventDefault(); // Prevent default page scrolling.
    }
  }

  getSizeClass() {
    return `${this.size}` === 's' ? 'small-select' : 'medium-select';
  }

  private init() {
    const props = {
      allowHTML: true,
      items: this.items,
      choices: this.choices,
      renderChoiceLimit: this.renderChoiceLimit,
      maxItemCount: this.maxItemCount,
      addItems: this.addItems,
      removeItems: this.removeItems,
      removeItemButton: this.removeItemButton,
      editItems: this.editItems,
      duplicateItemsAllowed: this.duplicateItemsAllowed,
      delimiter: this.delimiter,
      paste: this.paste,
      searchEnabled: this.showSearch,
      searchChoices: this.searchChoices,
      searchFields: this.searchFields,
      searchFloor: this.searchFloor,
      searchResultLimit: this.searchResultLimit,
      position: this.position,
      resetScrollPosition: this.resetScrollPosition,
      shouldSort: false, // choices/groups will appear in the order they were given.
      shouldSortItems: this.shouldSortItems,
      sorter: this.sorter,
      placeholder: this.placeholder,
      searchPlaceholderValue: this.searchPlaceholderValue,
      prependValue: this.prependValue,
      appendValue: this.appendValue,
      renderSelectedChoices: this.renderSelectedChoices,
      loadingText: this.loadingText,
      noResultsText: this.noResultsText,
      noChoicesText: this.noChoicesText,
      itemSelectText: this.itemSelectText,
      addItemText: this.addItemText,
      maxItemText: this.maxItemText,
      uniqueItemText: this.uniqueItemText,
      classNames: this.classNames,
      fuseOptions: this.fuseOptions,
      callbackOnInit: this.callbackOnInit,
      callbackOnCreateTemplates: this.callbackOnCreateTemplates,
      valueComparer: this.valueComparer,
      addItemFilter: this.addItemFilter,
      customAddItemText: this.customAddItemText,
    };

    const settings = filterObject(props, isDefined);

    //type check
    const element = this.root.querySelector('[data-selector="root"]');
    if (element instanceof HTMLInputElement || element instanceof HTMLSelectElement) {
      // this.choice = new ChoicesJs(element, settings); //standard, without using custom templates
      const self = this; // save the context of this in a variable outside of the function to access it in the following

      this.choice = new ChoicesJs(
        element,
        Object.assign({}, settings, {
          callbackOnCreateTemplates: function (template) {
            return {
              //modifying the selected item template
              item: ({ classNames }, data) => {
                let removeButtonHTML = '';

                if (data.placeholder && !self.selectedOption?.value) {
                  // For placeholders, use data-id="placeholder"
                  return template(`
                  <div class="choices__placeholder" data-item data-id="${data.id}" data-value="${data.value}" ${data.disabled ? 'aria-disabled="true"' : ''}>
                    ${data.label === undefined ? this.placeholderValue : data.label}
                    ${removeButtonHTML}
                  </div>
                `);
                } else {
                  // For non-placeholder items, use the actual data ID
                  return template(`
                <div class="${classNames.item} ${data.highlighted ? classNames.highlightedState : classNames.itemSelectable}" 
                      data-item 
                      data-id="${self.selectedOption?.id !== undefined ? self.selectedOption?.id : self.choice.getValue().id}" 
                      data-value="${self.selectedOption?.value !== undefined ? self.selectedOption?.value : self.choice.getValue().value}" 
                      ${data.disabled ? 'aria-disabled="true"' : ''}>
                  <span>${self.selectedOption?.label !== undefined ? self.selectedOption?.label : self.choice.getValue().label}</span>
                  <!-- Add your remove button here if needed -->
                </div>
              `);
                }
              },
              input: ({ classNames }) => {
                return template(`
              <input type="search"
              class="${classNames.input} ${classNames.inputCloned} ${self.getSizeClass()}"
              autocomplete="off"
              autocapitalize="off"
              spellcheck="false"
              role="textbox"
              aria-autocomplete="list"
              aria-label="${this.showSearch ? this.searchPlaceholderValue : ''}"   >     
              `);
              },

              //modifying the template of each item in the options list
              choice: ({ classNames }, data) => {
                return template(`
              <div class="${classNames.item} ${classNames.itemChoice} ${self.getSizeClass()} 
              ${data.selected || self.selectedOption?.value === data.value || self.getPreSelected(self)?.value === data.value ? 'selected' : ''} 
              ${data.placeholder ? classNames.placeholder : ''} 
              ${data.disabled ? classNames.itemDisabled : classNames.itemSelectable} 
                    role="${data.groupId && data.groupId > 0 ? 'treeitem' : 'option'}"
                    data-choice ${data.disabled ? 'data-choice-disabled aria-disabled="true"' : 'data-choice-selectable'}                     data-id="${data.id}"
                    data-value="${data.value}"
                    data-select-text="${this.config.itemSelectText}">
                <span>${data.label}</span>
                ${data.selected || self.selectedOption?.value === data.value || self.getPreSelected(self)?.value === data.value ? '<ifx-icon icon="check16"></ifx-icon>' : ''}
              </div>
            `);
              },
            };
          },
        }),
      );

      //set select options
      this.setChoices(this.options, 'value', 'label', true);
      //set custom event listener to listen for search input
      self.addSearchEventListener(self, this.choice);
    } else {
      // handle the case when the element is neither an HTMLInputElement nor an HTMLSelectElement
    }
  }

  private addEventListenersToHandleCustomFocusAndActiveState() {
    const div = this.root.querySelector('.ifx-choices__wrapper') as HTMLDivElement;

    if (!div) {
      console.error('.ifx-choices__wrapper not found');
      return;
    }

    div.tabIndex = 0;

    div.addEventListener('focus', function () {
      if (!this.classList.contains('disabled')) {
        this.classList.add('focus');
      }
    });

    div.addEventListener('blur', function () {
      this.classList.remove('focus');
    });
  }

  private addSearchEventListener(self, choiceElement: ChoicesJs) {
    choiceElement.passedElement.element.addEventListener(
      'search',
      function (event: CustomEvent) {
        self.ifxInput.emit(event.detail.value);
      },
      false,
    );
    return choiceElement;
  }

  private destroy() {
    if (this.element) {
      this.element = null;
    }

    if (this.choice) {
      this.choice.destroy();
      this.choice = null;
    }
  }

  //get selected values from input array
  private getPreSelected(self) {
    const optionsArray: any[] = Array.isArray(self.options) ? self.options : JSON.parse(self.options);
    return optionsArray.find(option => option.selected === true) || null;
  }

  //set previously marked as selected items in the input array to unselected and select new ones
  private setPreSelected(newValue) {
    const optionsArray: any[] = Array.isArray(this.options) ? this.options : JSON.parse(this.options);

    this.options = optionsArray.map(obj => {
      return {
        ...obj,
        selected: obj.value === newValue
      };
    });
  }

  //setting the value that gets displayed in the select at component start (either the value prop or a placeholder)
  private createSelectOptions(ifxOptions): Array<HTMLStencilElement> {
    if (this.value !== 'undefined' || this.selectedOption?.value !== '') {
      let options;
      if (isJSONParseable(ifxOptions)) {
        options = [...JSON.parse(ifxOptions)];
      } else if (Array.isArray(ifxOptions) || typeof ifxOptions === 'object') {
        options = [...ifxOptions];
      }
      const optionValueBasedOnAvailableOptions = options?.find(option => option.value === this.value || this.selectedOption?.value);

      if (optionValueBasedOnAvailableOptions) {
        return [<option value={optionValueBasedOnAvailableOptions.value}>{optionValueBasedOnAvailableOptions.label}</option>];
      }
    }

    // Assign a unique id for the placeholder
    return this.placeholder !== 'false' ? [<option value="">{this.placeholderValue}</option>] : [<option value=""></option>];
  }
}
