import { h, Component, Element, Method, Prop, Event, EventEmitter } from '@stencil/core';
import { HTMLStencilElement, Listen, State } from '@stencil/core/internal';
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
  CustomAddItemText
} from './interfaces';
import { getValues, filterObject, isDefined } from './utils';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// type TemplateOptions = Record<'classNames' | 'allowHTML', any>;

@Component({
  tag: 'ifx-choices',
  styleUrl: 'select.scss',
  // shadow: true, //with shadow dom enabled, styles to the external choicesJs library cant be applied.

})
export class Choices implements IChoicesProps, IChoicesMethods {
  @Prop() public type?: 'single' | 'multiple' | 'text';
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
  @Prop() public searchEnabled: boolean;
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
  @Prop() public placeholderValue: string;
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
  @Prop() ifxError: boolean = false;
  @Prop() ifxErrorMessage: string = "Error";
  @Prop() ifxLabel: string = "";
  @Prop() ifxDisabled: boolean = false;
  @Prop() ifxPlaceholderValue: string = "Placeholder";
  @State() ifxChoicesIsOpen: boolean = false;
  @Event() ifxSelect: EventEmitter<CustomEvent>;
  @Element() private readonly root: HTMLElement;
  @Prop() ifxChoices: Array<any> | string;
  @Prop() ifxSize: string = 'medium (40px)';


  private choice;
  private element;


  @Method()
  async handleChange() {
    console.log("ifxSelect event: ", this.choice.getValue())
    if (this.choice.getValue()) {
      this.ifxSelect.emit(this.choice.getValue());
    }
    else {
      this.ifxSelect.emit(this.choice.getValue());
    }
    this.closeDropdownMenu();
  }

  // @Listen('removeItem')
  // handleRemoveItem() {
  //   if (this.choice.getValue() === undefined) {
  //     console.log("handle remove")
  //     this.choice.setChoices([{ value: '', label: 'Your placeholder text', placeholder: true }], 'value', 'label', true);
  //   }
  // }

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
  public async setChoices(choices: Array<any> | string, value: string, label: string, replaceChoices?: boolean) {
    // Required format
    // const predefinedChoices = [
    //   { value: '', label: 'This is a predefined Placeholder' },
    //   { value: 'Choice 1', label: 'Choice 1' },
    //   { value: 'Choice 2', label: 'Choice 2' },
    //   { value: 'Choice 3', label: 'Choice 3' },
    // ];
    if (typeof choices === 'string') {
      const listOfChoices = choices.split(',').map((choice) => ({
        value: choice.trim(),
        label: choice.trim(),
      }));

      console.log("transformed choices string to array: ", listOfChoices);
      this.choice.setChoices(listOfChoices, value, label, replaceChoices);
    }
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
  public async enable() {
    this.choice.enable();

    return this;
  }

  @Method()
  public async disable() {
    this.choice.disable();

    return this;
  }

  @Method()
  public async ajax(fn: AjaxFn) {
    this.choice.ajax(fn);

    return this;
  }

  protected componentDidLoad() {
    this.init();
    this.addEventListenersToHandleCustomFocusAndActiveState();

  }


  protected componentDidUpdate() {
    this.init();

  }

  protected disconnectedCallback() {
    this.destroy();
  }

  protected render(): any {

    const attributesSingle = {
      'data-selector': 'root',
      'name': this.name || null,
      // 'remove-item-button': false,
    };
    const attributesDefault = {
      'data-selector': 'root',
      'name': this.name || null,

    };
    const choicesWrapperClass = `ifx-choices__wrapper ${this.getSizeClass()}`;

    // destroy choices element to restore previous dom structure
    // so vdom can replace the element correctly
    this.destroy();

    switch (this.type) {
      case 'single':
        this.element =
          <div class={`ifx-select-container ${this.getSizeClass()}`}>
            {
              this.ifxLabel ?
                <div class="ifx-label-wrapper">
                  <span>{this.ifxLabel}</span>
                </div> : null
            }
            <div class={`${choicesWrapperClass} ${this.ifxDisabled ? 'disabled' : ""} ${this.ifxError ? 'error' : ""}`} onClick={this.ifxDisabled ? undefined : () => this.toggleDropdown()} >
              <select {...attributesSingle} onChange={() => this.handleChange()}>
                {this.createSelectOptions(this.value)}
              </select>

              <div class="ifx-choices__icon-wrapper-up" onClick={this.ifxDisabled ? undefined : () => this.toggleDropdown()}>
                <ifx-icon
                  key='icon-up'
                  icon='chevronup-16'></ifx-icon>
              </div>
              <div class="ifx-choices__icon-wrapper-down" onClick={this.ifxDisabled ? undefined : () => this.toggleDropdown()}>

                <ifx-icon
                  key='icon-down'
                  icon='chevron-down-16'></ifx-icon>
              </div>
            </div>
            {
              this.ifxError ?
                <div class="ifx-error-message-wrapper">
                  <span>{this.ifxErrorMessage}</span>
                </div> : null
            }
          </div>;
        break;
      case 'multiple':
        this.element =
          <div class={`ifx-select-container`}>
            <div class={`${choicesWrapperClass} ${this.ifxDisabled ? 'disabled' : ""}`} onClick={this.ifxDisabled ? undefined : () => this.toggleDropdown()} >
              <select {...attributesDefault} multiple onChange={() => this.handleChange()}>
                {this.createSelectOptions(this.value)}
              </select>
              <div class="ifx-choices__icon-wrapper-up" onClick={this.ifxDisabled ? undefined : () => this.toggleDropdown()}>
                <ifx-icon
                  icon='chevronup-16'></ifx-icon>
              </div>
              <div class="ifx-choices__icon-wrapper-down" onClick={this.ifxDisabled ? undefined : () => this.toggleDropdown()}>

                <ifx-icon
                  icon='chevron-down-16'></ifx-icon>
              </div>
            </div>
            {
              this.ifxError ?
                <div class="ifx-error-message-wrapper">
                  <span>{this.ifxErrorMessage}</span>
                </div> : null
            }
          </div>;
        break;
      case 'text':
      default:
        this.element =
          <input type="text" value={this.value} {...attributesDefault} />;
        break;
    }


    return this.element;
  }


  toggleDropdown() {
    console.log("disabled ", this.ifxDisabled);
    this.showDropdown(!this.ifxChoicesIsOpen);
  }



  getIfxChoicesContainer() {
    let ifxChoicesContainer = this.root.querySelector('.ifx-choices_wrapper ');
    return ifxChoicesContainer
  }



  handleClassList(el, type, className) {
    el?.classList[type](className)
  }


  toggleDropdownMenu(e) {
    console.log("toggle dropdown menu")
    const target = e.composedPath()[0].closest('span')

    if (target) {
      return
    }

    const ifxChoicesContainer = this.getIfxChoicesContainer()
    this.handleClassList(ifxChoicesContainer, 'toggle', 'show')


  }

  closeDropdownMenu() {
    const ifxChoicesContainer = this.getIfxChoicesContainer()
    this.handleClassList(ifxChoicesContainer, 'remove', 'show')
  }



  @Listen('mousedown', { target: 'document' })
  handleOutsideClick(event: MouseEvent) {
    const path = event.composedPath();
    const ifxChoicesContainer = document.querySelector('.ifx-choices__wrapper') as HTMLDivElement;

    if (!path.includes(this.root)) {
      this.closeDropdownMenu();
      this.handleClassList(ifxChoicesContainer, 'remove', 'active');
    }
  }


  getSizeClass() {
    return `${this.ifxSize}` === "small (36px)"
      ? "small-select"
      : "medium-select";
  }


  private init() {
    const props = {
      type: this.type,
      allowHTML: true, // Set allowHTML to true
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
      searchEnabled: this.searchEnabled,
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
      // placeholderValue: this.placeholderValue,  //|| (typeof this.placeholder === 'string' && this.placeholder) || ' ',
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
      customAddItemText: this.customAddItemText
    };

    const settings = filterObject(props, isDefined);

    //type check
    const element = this.root.querySelector('[data-selector="root"]');
    if (element instanceof HTMLInputElement || element instanceof HTMLSelectElement) {
      // this.choice = new ChoicesJs(element, settings); //standard, without using custom templates
      const self = this; // save the context of this in a variable outside of the function to access it in the following

      if (this.type === 'single') {
        this.choice = new ChoicesJs(element, Object.assign({}, settings, {
          callbackOnCreateTemplates: function (template) {
            return {
              //modifying the selected item template
              item: ({ classNames }, data) => {
                let removeButtonHTML = ''; //remove button needed in single select?
                // if (props.removeItemButton) {
                //   const REMOVE_ITEM_TEXT = 'Remove item';
                //   let buttonClass = '';
                //   if (props.type === 'single') {
                //     // buttonClass = 'single-select'; //no removeItemButton for single select needed
                //   } else if (this.type === 'multiple') {
                //     buttonClass = '';
                //     removeButtonHTML = `
                //     <button type="button" class="${classNames.button} ${buttonClass}" aria-label="${REMOVE_ITEM_TEXT}: '${data.value}'" data-button>
                //     </button>`;
                //   }
                // }
                return template(`
                <div class="${classNames.item} ${data.highlighted
                    ? classNames.highlightedState
                    : classNames.itemSelectable
                  } ${data.placeholder ? classNames.placeholder : ''
                  }" data-item data-id="${data.id}" data-value="${data.value}" ${data.disabled ? 'aria-disabled="true"' : ''}>
                   ${data.label === 'undefined' ? 'Placeholder' : data.label}
                   ${removeButtonHTML}
                  </div>
                `);
              },
              input: ({ classNames }) => {
                return template(`
                <input type="search" name="search_terms" 
                class="${classNames.input} ${classNames.inputCloned} ${self.getSizeClass()}"
                autocomplete="off"
                autocapitalize="off"
                spellcheck="false"
                role="textbox"
                aria-autocomplete="list"
                aria-label="${this.placeholderValue}"   >     
                `)
              },

              //modifying the template of each item in the options list
              choice: ({ classNames }, data) => {
                return template(`
                <div class="${classNames.item} 
                ${classNames.itemChoice} 
                ${self.getSizeClass()}
                ${data.selected ? 'selected' : ''} 
                ${data.disabled ? classNames.itemDisabled : classNames.itemSelectable} 
                choice-container" 
                data-select-text="${this.config.itemSelectText}"
                data-choice ${data.disabled ? 'data-choice-disabled aria-disabled="true"' : 'data-choice-selectable'} 
                data-id="${data.id}" 
                data-value="${data.value}" 
                ${data.groupId > 0 ? 'role="treeitem"' : 'role="option"'}">
                <span class="choice-label">${data.label}</span>
                ${data.selected ? '<ifx-icon class="choice-icon" icon="check16"></ifx-icon>' : ''} 
                </div>
                `);
              },
            };
          },
        }));

        // console.log("choices", this.ifxChoices)
        this.setChoices(this.ifxChoices, "value", "label", true)


      } else { //multiselect
        // this.choice = new ChoicesJs(element, settings); //standard, without using custom templates
        this.choice = new ChoicesJs(element, Object.assign({}, settings, {
          removeItemButton: true,
          callbackOnCreateTemplates: function (template) {
            return {
              //modifying the template of each item in the options list
              choice: ({ classNames }, data) => {
                return template(`
                <div class="${classNames.item} ${classNames.itemChoice}
                 ${data.disabled ? classNames.itemDisabled : classNames.itemSelectable} 
                } choice-container" data-select-text="${this.config.itemSelectText}" data-choice ${data.disabled
                    ? 'data-choice-disabled aria-disabled="true"'
                    : 'data-choice-selectable'
                  } data-id="${data.id}" data-value="${data.value}" ${data.groupId > 0 ? 'role="treeitem"' : 'role="option"'
                  }">
                 <ifx-checkbox error="false" disabled="false" value="${data.selected ? true : false}">${data.label}</ifx-checkbox>
              </div>
                `);
              },
            };
          },
        }));

        this.setChoices(this.ifxChoices, "value", "label", true)
      }

      if (this.ifxDisabled) {
        this.choice.disable();
      } else {
        this.choice.enable();
      }

    } else {
      // handle the case when the element is neither an HTMLInputElement nor an HTMLSelectElement
    }
  }

  private addEventListenersToHandleCustomFocusAndActiveState() {
    const div = document.querySelector('.ifx-choices__wrapper') as HTMLDivElement;

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

    div.addEventListener('click', function () {
      if (!this.classList.contains('disabled')) {
        this.classList.add('active');
      }
    });

    // let initialChoices;
    // if (typeof this.ifxChoices === 'string') {
    //   initialChoices = this.ifxChoices.split(',').map((choice) => ({
    //     value: choice.trim(),
    //     label: choice.trim(),
    //   }));
    // }
    // this.choice.passedElement.element.addEventListener('choice', (event) => {
    //   console.log("event", event)
    // });

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

  //setting the value that gets displayed in the select at component start (either the value prop or a placeholder)
  private createSelectOptions(values: string | Array<string>): Array<HTMLStencilElement> {
    // console.log("select - initial value", values, this.ifxPlaceholderValue);
    if (this.value !== 'undefined') {
      return getValues(values).map((value) => <option value={value}>{value}</option>)
    }
    else {

      return this.placeholder !== "false" ? <option value="">{this.ifxPlaceholderValue}</option> : <option></option>;
    }
  }
}
