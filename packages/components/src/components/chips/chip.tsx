import { Component, h, Element, Prop, Listen, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ifx-chip',
  styleUrl: 'chip.scss',
  shadow: true
})

export class Chip {
  @Element() el;
  @Prop() placeholder: string;
  @State() isEmpty: boolean = true;
  @Event() ifxDropdownMenu: EventEmitter<CustomEvent>;

  @Listen('mousedown', { target: 'document' })
  handleOutsideClick(event: MouseEvent) {
    const path = event.composedPath();
    if (!path.includes(this.el)) {
      this.closeDropdownMenu();
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

  toggleDropdownMenu() {
    console.log("dropdown menu")

    const textField = this.getTextField()
    const textFieldElement = textField.querySelector('.wrapper-close-button')
    const chipWrapper = textField.closest('.wrapper');
    const dropdownMenu = this.getDropdownMenu();
    const dropdownWrapper = this.getDropdownWrapper()
    this.handleClassList(dropdownMenu, 'toggle', 'show')
    this.handleClassList(dropdownWrapper, 'toggle', 'show')
    this.handleClassList(textFieldElement, 'toggle', 'show')
    this.handleClassList(chipWrapper, 'toggle', 'open')
  }

  closeDropdownMenu() {
    const dropdownMenu = this.getDropdownMenu()
    const dropdownWrapper = this.getDropdownWrapper()
    const textField = this.getTextField()
    const chipWrapper = textField.closest('.wrapper');
    const textFieldElement = textField.querySelector('.wrapper-close-button')
    this.handleClassList(dropdownMenu, 'remove', 'show')
    this.handleClassList(dropdownWrapper, 'remove', 'show')
    this.handleClassList(textFieldElement, 'remove', 'show')
    this.handleClassList(chipWrapper, 'remove', 'open')
  }

  removeActiveMenuItem() {
    const dropdownMenuItems = this.getDropdownItems()
    for (let i = 0; i < dropdownMenuItems.length; i++) {
      this.handleClassList(dropdownMenuItems[i].shadowRoot.querySelector('a'), 'remove', 'active')
    }
  }

  uncheckCheckboxes(target) {
    const dropdownMenuItems = this.getDropdownItems()
    for (let i = 0; i < dropdownMenuItems.length; i++) {
      if (dropdownMenuItems[i].shadowRoot.querySelector('a') !== target) {
        dropdownMenuItems[i].shadowRoot.querySelector('a').querySelector('ifx-checkbox').checked = false;
      }
    }
  }

  returnToDefaultLabel() {
    console.log("default labe")
    const textField = this.getTextField()
    const labelWrapper = textField.querySelector('.wrapper-label');
    labelWrapper.innerHTML = this.placeholder;
  }

  // toggleCheckbox(target) {
  //   console.log("toggle checkbox")
  //   this.uncheckCheckboxes(target)
  //   target.querySelector('ifx-checkbox').checked = !target.querySelector('ifx-checkbox').checked
  //   if (target.querySelector('ifx-checkbox').checked === false) {
  //     this.returnToDefaultLabel()
  //   }
  // }

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

  @Listen('ifxDropdownItem')
  handleDropdownItemValueEmission(event: CustomEvent) {
    console.log("event", event)
    this.ifxDropdownMenu.emit(event.detail)
  }


  addActiveMenuItem = (e) => {
    const target = this.getClickedElement(e.composedPath()[0])
    const selectedAnchor = e.target.shadowRoot.querySelector('a');
    console.log("anchor", selectedAnchor)
    // const isCheckable = e.target.checkable;
    // this.uncheckCheckboxes(selectedAnchor)

    // if (!target) {
    //   if (selectedAnchor.querySelector('ifx-checkbox').checked === false) {
    //     this.returnToDefaultLabel()
    //   }
    //   return;
    // }

    // if (isCheckable) {
    //   this.toggleCheckbox(target)
    //   return;
    // }

    this.removeActiveMenuItem()
    this.handleClassList(target, 'add', 'active')
    this.toggleDropdownMenu()
  }

  getTextField() {
    let textField = this.el.shadowRoot.querySelector('.wrapper');
    return textField
  }

  addItemValueToTextField(value) {
    const textField = this.getTextField()
    const labelWrapper = textField.querySelector('.wrapper-label')
    value.target.setAttribute('target', value.target?.index)
    labelWrapper.innerHTML = value.value
  }

  addEventListeners() {
    const dropdownMenu = this.getDropdownMenu();
    document.addEventListener('click', this.handleOutsideClick.bind(this))
    dropdownMenu.addEventListener('click', this.addActiveMenuItem)
    let dropdownMenuComponent = this.el.querySelector('ifx-dropdown-menu');
    dropdownMenuComponent.addEventListener('selectValues', (event) => {
      this.addItemValueToTextField(event.detail)
    })
  }

  componentDidRender() {
    let textInput = this.getTextField()
    if (textInput) {
      textInput.addEventListener('click', this.toggleDropdownMenu.bind(this))
      this.addEventListeners()
    }
  }

  render() {
    return (
      <div class="dropdown container">
        <div class="wrapper">
          <div class="wrapper-label">
            {this.placeholder}
          </div>
          <div class="wrapper-close-button">
            <ifx-icon icon="chevrondown12"></ifx-icon>
          </div>
        </div>

        <slot name="menu" />

      </div>
    );
  }
}