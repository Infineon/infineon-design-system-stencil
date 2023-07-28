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
// import { Choice } from '../../../../../node_modules/choices.js/public/types/src/scripts/interfaces/choice';
// import { Group } from '../../../../../node_modules/choices.js/public/types/src/scripts/interfaces/group';
// import { Item } from '../../../../../node_modules/choices.js/public/types/src/scripts/interfaces/item';
// import { PassedElementType } from '../../../../../node_modules/choices.js/public/types/src/scripts/interfaces/passed-element-type';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// type TemplateOptions = Record<'classNames' | 'allowHTML', any>;
@Component({
  tag: 'ifx-choices',
  styleUrl: 'choices.scss',
  // shadow: true,

})
export class Choices implements IChoicesProps, IChoicesMethods {
  @Prop() public type?: 'single' | 'multiple' | 'text';
  @Prop() public value: string;
  @Prop() public name: string;

  @Prop() public silent: boolean;
  @Prop() public items: Array<any>;
  @Prop() public choices: Array<any>;
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

  @Element() private readonly root: HTMLElement;
  @State() ifxChoicesIconIsRotated: boolean = false;

  @Event() ifxChange: EventEmitter<CustomEvent>;

  private choice;
  private element;


  // @Watch('type') //not needed anymore cause multi and single select will be separate components
  // onTypeChange(newValue: string) {
  //   this.removeItemButton = newValue !== 'single';
  // }

  @Method()
  async handleChange() {
    console.log("onchange: ", this.choice.getValue())
    if (this.choice.getValue()) {
      this.ifxChange.emit(this.choice.getValue());
    }
    else {
      this.choice.setValue(this.createSelectOptions(this.value));
    }
    this.closeDropdownMenu();

  }


  @Listen('removeItem')
  handleRemoveItem() {
    if (this.value === null) {
      console.log("handle remove")
      this.choice.setChoices([{ value: '', label: 'Your placeholder text', placeholder: true }], 'value', 'label', true);
    }
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
  public async setChoices(choices: Array<any>, value: string, label: string, replaceChoices?: boolean) {
    // const predefinedChoices = [
    //   { value: 'Choice 1', label: 'Choice 1' },
    //   { value: 'Choice 2', label: 'Choice 2' },
    //   { value: 'Choice 3', label: 'Choice 3' },
    // ];
    // console.log("setting choices: ", choices, predefinedChoices);
    this.choice.setChoices(choices, value, label, replaceChoices);

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
    const containerClass = `ifx-choices__container ifx-choices__selected-item`;
    // destroy choices element to restore previous dom structure
    // so vdom can replace the element correctly
    this.destroy();

    switch (this.type) {
      case 'single':
        this.element =
          <div class={containerClass} >
            <select {...attributesSingle} onChange={() => this.handleChange()}>
              {this.value ? this.createSelectOptions(this.value) : null}
            </select>

            <div class="ifx-choices__icon-wrapper">
              <ifx-icon
                icon='chevron-down-16' onClick={() => this.toggleIfxChoicesIcon()}

              ></ifx-icon>
            </div>
          </div>;
        break;
      case 'multiple':
        this.element =
          <div class={containerClass} >
            <select {...attributesDefault} multiple onChange={() => this.closeDropdownMenu()}>
              {this.value ? this.createSelectOptions(this.value) : null}
            </select>
            <div class="ifx-choices__icon-wrapper">
              <ifx-icon
                icon='chevron-down-16' onClick={() => this.toggleIfxChoicesIcon()}
              ></ifx-icon>
            </div>
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


  toggleIfxChoicesIcon() {
    this.showDropdown(!this.ifxChoicesIconIsRotated);
  }

  setIfxChoicesIcon(state) {
    this.ifxChoicesIconIsRotated = state;
  }


  getIfxChoicesContainer() {
    let ifxChoicesContainer = this.root.querySelector('.ifx-choices__container');
    return ifxChoicesContainer
  }



  handleClassList(el, type, className) {
    el?.classList[type](className)
  }


  toggleDropdownMenu(e) {
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
    if (!path.includes(this.root)) {
      this.closeDropdownMenu();
    }
  }

  private init() {
    this.root.addEventListener('click', this.toggleDropdownMenu.bind(this))
    const props = {
      type: this.type,
      allowHTML: true, // Set allowHTML to true
      silent: this.silent,
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
      shouldSort: this.shouldSort,
      shouldSortItems: this.shouldSortItems,
      sorter: this.sorter,
      placeholder: true,
      placeholderValue: this.placeholderValue || (typeof this.placeholder === 'string' && this.placeholder) || ' ',
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
      this.choice = new ChoicesJs(element, Object.assign({}, settings, {
        callbackOnCreateTemplates: function (template) {
          return {
            //modifying the selected item template
            item: ({ classNames }, data) => {
              let removeButtonHTML = '';
              if (props.removeItemButton) {
                const REMOVE_ITEM_TEXT = 'Remove item';
                let buttonClass = '';
                if (props.type === 'single') {
                  buttonClass = 'single-select'; // replace with your actual class
                } else if (this.type === 'multiple') {
                  buttonClass = ''; // replace with your actual class
                }

                //replace this with the actual ifx icon / icon-button
                removeButtonHTML = `
                  <button type="button" class="${classNames.button} ${buttonClass}" aria-label="${REMOVE_ITEM_TEXT}: '${data.value}'" data-button>
                    ${REMOVE_ITEM_TEXT}
                  </button>
                `;
              }

              return template(`
                <div class="${classNames.item} ${data.highlighted
                  ? classNames.highlightedState
                  : classNames.itemSelectable
                } ${data.placeholder ? classNames.placeholder : ''
                }" data-item data-id="${data.id}" data-value="${data.value}" ${data.active ? 'aria-selected="true"' : ''
                } ${data.disabled ? 'aria-disabled="true"' : ''}>
                ${data.label}
                ${removeButtonHTML}

                </div>
              `);
            },
            //modifying the template of each item in the options list
            choice: ({ classNames }, data) => {
              // console.log(data);
              return template(`
              <div class="${classNames.item} ${classNames.itemChoice} ${data.disabled ? classNames.itemDisabled : classNames.itemSelectable
                } choice-container" data-select-text="${this.config.itemSelectText}" data-choice ${data.disabled
                  ? 'data-choice-disabled aria-disabled="true"'
                  : 'data-choice-selectable'
                } data-id="${data.id}" data-value="${data.value}" ${data.groupId > 0 ? 'role="treeitem"' : 'role="option"'
                }">
                  <span class="choice-label">${data.label}</span>
                  ${data.selected ? '<ifx-icon class="choice-icon" icon="check16"></ifx-icon>' : ''} 
              </div>
              `);
            },
          };
        },
      })); //.disable()

      console.log("this.choice ", this.choice);


    } else {
      // handle the case when the element is neither an HTMLInputElement nor an HTMLSelectElement
    }
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

  private createSelectOptions(values: string | Array<string>): Array<HTMLStencilElement> {
    console.log("values", values)
    return getValues(values).map((value) => <option value={value}>{value}</option>);
  }
}
