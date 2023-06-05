import { Component, h, Element, Listen } from "@stencil/core";

@Component({
  tag: 'ifx-select-input',
  styleUrl: '../../index.scss',
  shadow: true
})

export class SelectInput {

  @Element() el;

  @Listen('mousedown', { target: 'document' })
  handleOutsideClick(event: MouseEvent) {
    const path = event.composedPath();
    if (!path.includes(this.el)) {
      this.closeDropdownMenu();
    }
  }

  getDropdownMenu() {
    let dropdownMenuComponent = this.el.querySelector('ifx-dropdown-menu');
    if(dropdownMenuComponent) { 
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
    const textField = this.getTextField()
    const textFieldElement = textField.shadowRoot.querySelector('.textInput__bottom-wrapper')
    const dropdownMenu = this.getDropdownMenu();
    const dropdownWrapper = this.getDropdownWrapper()
    this.handleClassList(dropdownMenu, 'toggle', 'show')
    this.handleClassList(dropdownWrapper, 'toggle', 'show')
    this.handleClassList(textFieldElement, 'toggle', 'show')

  }

  closeDropdownMenu() {
    const dropdownMenu = this.getDropdownMenu()
    const dropdownWrapper = this.getDropdownWrapper()
    const textField = this.getTextField()
    const textFieldElement = textField.shadowRoot.querySelector('.textInput__bottom-wrapper')
    this.handleClassList(dropdownMenu, 'remove', 'show')
    this.handleClassList(dropdownWrapper, 'remove', 'show')
    this.handleClassList(textFieldElement, 'remove', 'show')
  }

  removeActiveMenuItem() {
    const dropdownMenuItems = this.getDropdownItems()
    for (let i = 0; i < dropdownMenuItems.length; i++) {
      this.handleClassList(dropdownMenuItems[i].shadowRoot.querySelector('a'), 'remove', 'active')
    }
  }

  toggleCheckbox(target) {
    target.querySelector('ifx-checkbox').checked = !target.querySelector('ifx-checkbox').checked
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
    this.toggleDropdownMenu()
  }

  getTextField() { 
    let textField = this.el.querySelector('ifx-text-input');
    return textField
  }

  addItemValueToTextField(value) { 
    const textField = this.getTextField()
    textField.value = value.value
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
    let textInput = this.el.querySelector('ifx-text-input');
    if (textInput) {
      const textInputElement = textInput.shadowRoot.querySelector('input');
      if (!textInputElement.classList.contains('disabled')) {
        textInputElement.addEventListener('click', this.toggleDropdownMenu.bind(this))
        this.addEventListeners()
      }
    }
  }


  render() {
    return (
      <div class='dropdown selectInput'>
        <slot name="text-input" />
        <slot name="menu" />
      </div>
    )
  }
}