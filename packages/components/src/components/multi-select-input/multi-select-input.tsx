import { Component, h, Element, Listen, Prop, State } from "@stencil/core";

@Component({
  tag: 'ifx-multi-select-input',
  styleUrl: '../../index.scss',
  shadow: true
})

export class MultiSelectInput {

  @Element() el;
  @Prop() Placeholder: string = ""
  @State() isEmpty: boolean = true;
  @State() isOverflowing: boolean = false;

  @Listen('mousedown', { target: 'document' })
  handleOutsideClick(event: MouseEvent) {
    const path = event.composedPath();
    if (!path.includes(this.el)) {
      this.closeDropdownMenu();
    }
  }

  @Listen('closed')
  handleButtonClose(el) {
    const target = el.detail?.getAttribute('target');
    const dropdownMenu = this.el.querySelectorAll('ifx-dropdown-item')
    const selectedItems = this.el.shadowRoot.querySelector('.dropdown').querySelectorAll('ifx-multi-select-input-item')
    for (let i = 0; i < dropdownMenu.length; i++) {
      if (dropdownMenu[i].index === Number(target)) {
        dropdownMenu[i].shadowRoot.querySelector('ifx-checkbox').checked = false;
      }
    }
    el.detail?.remove()

    if (el) {
      if (el.check) {
        for (let i = 0; i < selectedItems.length; i++) {
          let selectedItemIndex = selectedItems[i].getAttribute('target');
          if (Number(el.target.index) === Number(selectedItemIndex)) {
            selectedItems[i].remove()
          }
        }
      }
    }

    this.togglePlaceHolder()
    this.toggleSlideButtons()
  }

  togglePlaceHolder() {
    const wrapper = this.getMultiSelectFieldWrapper()
    const wrapperItems = wrapper.querySelector('ifx-multi-select-input-item')
    if (wrapperItems && this.isEmpty) {
      this.isEmpty = false;
    } else if (!wrapperItems && !this.isEmpty) {
      this.isEmpty = true;
    }
  }

  toggleSlideButtons() {
    const multiSelectElement = this.getMultiSelectFieldWrapper()
    const isOverFlowing = this.isOverflown(multiSelectElement)
    if (isOverFlowing) {
      this.isOverflowing = true;
    } else if (this.isOverflowing) {
      this.isOverflowing = false;
    }
  }

  getDropdownMenu() {
    let dropdownMenuComponent = this.el.querySelector('ifx-dropdown-menu');
    if (dropdownMenuComponent) {
      dropdownMenuComponent = this.el.querySelector('ifx-dropdown-menu').shadowRoot;
      const dropdownMenuElement = dropdownMenuComponent.querySelector('.dropdown-menu');
      return dropdownMenuElement
    }
  }

  getDropdownWrapper() {
    const dropdownWrapper = this.el.shadowRoot.querySelector('.dropdown');
    return dropdownWrapper
  }

  getDropdownItems() {
    const dropdownMenuItems = this.el.querySelectorAll('ifx-dropdown-item')
    return dropdownMenuItems
  }

  handleClassList(el, type, className) {
    el?.classList[type](className)
  }

  toggleDropdownMenu(e) {
    const target = e.composedPath()[0].closest('span')

    if (target) {
      return
    }

    const multiSelectContainer = this.getMultiSelectFieldContainer()
    const dropdownMenu = this.getDropdownMenu();
    const dropdownWrapper = this.getDropdownWrapper()
    this.handleClassList(dropdownMenu, 'toggle', 'show')
    this.handleClassList(dropdownWrapper, 'toggle', 'show')
    this.handleClassList(multiSelectContainer, 'toggle', 'show')
  }

  closeDropdownMenu() {
    const dropdownMenu = this.getDropdownMenu()
    const dropdownWrapper = this.getDropdownWrapper()
    const multiSelectContainer = this.getMultiSelectFieldContainer()
    this.handleClassList(dropdownMenu, 'remove', 'show')
    this.handleClassList(dropdownWrapper, 'remove', 'show')
    this.handleClassList(multiSelectContainer, 'remove', 'show')
  }

  removeActiveMenuItem() {
    const dropdownMenuItems = this.getDropdownItems()
    for (let i = 0; i < dropdownMenuItems.length; i++) {
      this.handleClassList(dropdownMenuItems[i].shadowRoot.querySelector('a'), 'remove', 'active')
    }
  }

  toggleCheckbox(target) {
    target.querySelector('ifx-checkbox').checked = !target.querySelector('ifx-checkbox').checked;
  }


  getClickedElement(target) {
    if (target instanceof SVGElement) {
      return target.closest('.dropdown-item')
    } else if (target.className.includes('dropdown-menu')
      || target.className.includes('form-check-input')) {
      return false
    } else {
      return target.closest('.dropdown-item');

    }
  }

  addActiveMenuItem = (e) => {
    const target = this.getClickedElement(e.composedPath()[0])
    const isCheckable = e.target.checkable;
    if (!target) return;
    if (isCheckable) {
      this.toggleCheckbox(target)
      return;
    }

    this.removeActiveMenuItem()
    this.handleClassList(target, 'add', 'active')
    this.toggleDropdownMenu(e)
  }

  getMultiSelectFieldWrapper() {
    let selectWrapper = this.el.shadowRoot.querySelector('.multiSelectInput__content');
    return selectWrapper
  }

  getMultiSelectFieldContainer() {
    let selectContainer = this.el.shadowRoot.querySelector('.multiSelectInput__container');
    return selectContainer
  }

  getMultiSelectFieldIconWrapper() {
    let selectContainer = this.el.shadowRoot.querySelector('.multiSelectInput__container').querySelector('.multiSelectInput__icon-wrapper');
    return selectContainer
  }

  addSelectItemsToArray() {
    var wrapper = this.getMultiSelectFieldWrapper()
    var menuItems = wrapper.querySelectorAll('ifx-multi-select-input-item') as HTMLElement[];
    var totalWidth = Array.from(menuItems).reduce(function (acc, item) {
      return acc + item.offsetWidth;
    }, 0);
    return totalWidth
  }

  isOverflown(element) {
    return element.scrollWidth > element.clientWidth;
  }

  addSelectSlider(direction) {
    var wrapper = this.getMultiSelectFieldWrapper()
    var menuItems = wrapper.querySelectorAll('ifx-multi-select-input-item') as HTMLElement[];
    var totalWidth = Array.from(menuItems).reduce(function (acc, item) {
      return acc + item.offsetWidth;
    }, 0);
    if (direction === 'left') {
      wrapper.scrollLeft -= totalWidth;
    } else if (direction === 'right') {
      wrapper.scrollLeft += totalWidth;
    }
  }


  async addItemValueToTextField(value) {
    const multiSelectElement = this.getMultiSelectFieldWrapper()
    const newItem = document.createElement('ifx-multi-select-input-item')
    newItem.setAttribute('target', value.target?.index)
    newItem.setAttribute('content', value.value)

    multiSelectElement.append(newItem)

    setTimeout(() => {
      this.toggleSlideButtons();
    }, 20);

  }

  addEventListeners() {
    const dropdownMenu = this.getDropdownMenu();
    let dropdownMenuComponent = this.el.querySelector('ifx-dropdown-menu');
    document.addEventListener('click', this.handleOutsideClick.bind(this))
    dropdownMenu.addEventListener('click', this.addActiveMenuItem)
    dropdownMenuComponent.addEventListener('selectValues', (event) => {
      this.addItemValueToTextField(event.detail)
      this.handleButtonClose(event.detail)
    })
  }

  componentDidLoad() {
    let selectContainer = this.getMultiSelectFieldContainer()
    selectContainer.addEventListener('click', this.toggleDropdownMenu.bind(this))
    this.addEventListeners()
  }


  render() {
    return (
      <div class='multiSelect dropdown'>
        <div class="multiSelectInput__container" tabindex={1}>
          {this.isOverflowing &&
            <span class="prev" onClick={() => this.addSelectSlider('left')}>
              <ifx-icon icon='chevron-left-16'></ifx-icon>
            </span>}
          {this.isOverflowing &&
            <span class="next" onClick={() => this.addSelectSlider('right')}>
              <ifx-icon icon='chevron-right-16'></ifx-icon>
            </span>}
          <div class='multiSelectInput__wrapper'>
            <div class="multiSelectInput__content">
              {this.isEmpty && <span>{this.Placeholder}</span>}
            </div>
          </div>
          <div class="multiSelectInput__icon-wrapper">
            <ifx-icon icon='chevron-down-16'></ifx-icon>
          </div>
        </div>
        <slot name="menu" />
      </div>
    )
  }
}