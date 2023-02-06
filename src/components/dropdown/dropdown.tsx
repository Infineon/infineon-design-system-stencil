import { Component, Prop, h, Element, Listen } from "@stencil/core";
// import { calendar16 } from '@infineon/infineon-icons';

@Component({
  tag: 'ifx-dropdown',
  styleUrl: '../../index.scss',
  shadow: true
})

export class Dropdown {

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
    const dropdownMenuComponent = this.el.querySelector('ifx-dropdown-menu').shadowRoot;
    const dropdownMenuElement = dropdownMenuComponent.querySelector('.dropdown-menu');
    return dropdownMenuElement
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
    el.classList[type](className)
  }

  toggleDropdownMenu() {
    const dropdownMenu = this.getDropdownMenu();
    const dropdownWrapper = this.getDropdownWrapper()
    this.handleClassList(dropdownMenu, 'toggle', 'show')
    this.handleClassList(dropdownWrapper, 'toggle', 'show')
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


  addActiveMenuItem = (e) => {
    let target = e.target;
    const composedPath = e.composedPath()
    const isCheckable = target.checkable;

    if(target && target.className.includes('dropdown-menu')) return;
    if(e.target.shadowRoot.querySelector('style')) {
      target = e.target.shadowRoot.querySelector('style').nextElementSibling
    } else  target = e.target.shadowRoot.querySelector('a');
   
    if(composedPath[0].className === 'dropdown-item') { 
      target.querySelector('input').checked = !target.querySelector('input').checked
    }

    if (target.className.toLowerCase() === 'inf__search-input'
      || target.className.toLowerCase() === 'inf__filter-input') {
      return;
    }
    
    if (isCheckable) { 
      return;
    }

    this.removeActiveMenuItem()
    if (target.firstChild.className === 'form-check-label') {
      this.handleClassList(target.firstChild.parentElement, 'add', 'active')
    } else this.handleClassList(target.firstChild, 'add', 'active')

    this.toggleDropdownMenu()
  }



  addEventListeners() {
    const dropdownMenu = this.getDropdownMenu();
    document.addEventListener('click', this.handleOutsideClick.bind(this))
    dropdownMenu.addEventListener('click', this.addActiveMenuItem)
  }

  componentDidRender() {
    let buttonComponent = this.el.querySelector('ifx-button'); 
    if(buttonComponent) { 
      buttonComponent = buttonComponent.shadowRoot;
      const buttonElement = buttonComponent.querySelector('button');
      buttonElement.addEventListener('click', this.toggleDropdownMenu.bind(this))
      this.addEventListeners()
    }
  }

  render() {
    return (
      <div class='dropdown'>
        <slot name="button" />
        <slot />
      </div>
    )
  }
}