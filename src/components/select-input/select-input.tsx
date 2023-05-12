import { Component, Prop, h, Element, Listen } from "@stencil/core";
// import { calendar16 } from '@infineon/infineon-icons';

@Component({
  tag: 'ifx-select-input',
  styleUrl: '../../index.scss',
  shadow: true
})

export class SelectInput {

  @Prop() label: string;
  @Prop() size: 's' | 'm';
  @Prop() disabled: boolean;
  @Prop() icon: boolean = false;
  @Prop() search: boolean = false;
  @Prop() filter: boolean = false;
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
    //add toggle for the ifx-icon
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
    this.handleClassList(dropdownMenu, 'remove', 'show')
    this.handleClassList(dropdownWrapper, 'remove', 'show')
  }

  removeActiveMenuItem() {
    const dropdownMenuItems = this.getDropdownItems()
    for (let i = 0; i < dropdownMenuItems.length; i++) {
      this.handleClassList(dropdownMenuItems[i].shadowRoot.querySelector('a'), 'remove', 'active')
    }
  }

  toggleCheckbox(target) {
    target.querySelector('input').checked = !target.querySelector('input').checked
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
    console.log('value', value)
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
    let buttonComponent = this.el.querySelector('ifx-text-input');
    if (buttonComponent) {
      const buttonElement = buttonComponent.shadowRoot.querySelector('input');
      if (!buttonElement.classList.contains('disabled')) {
        buttonElement.addEventListener('click', this.toggleDropdownMenu.bind(this))
        this.addEventListeners()
      }
    }
  }


  render() {
    return (
      <div class='dropdown'>
        <slot name="text-input" />
        <slot />
      </div>
    )
  }
}