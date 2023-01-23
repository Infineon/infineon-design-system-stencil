import { Component, Prop, h, Element } from "@stencil/core";
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

  getDropdownMenu() {
    const dropdownMenuComponent = document.querySelector('ifx-dropdown-menu').shadowRoot;
    const dropdownMenuElement = dropdownMenuComponent.querySelector('.dropdown-menu');
    //const dropdownMenu = this.el.shadowRoot.querySelector('.dropdown-menu');
    //console.log('inside dropdown', dropdownMenuElement)
    return dropdownMenuElement
  }

  getDropdownWrapper() {
    //const dropdownComponent = document.querySelector('ifx-dropdown').shadowRoot;
    //const dropdownElement = dropdownComponent.querySelector('.dropdown');
    const dropdownWrapper = this.el.shadowRoot.querySelector('.dropdown');
    //console.log('dropdownWrapper', dropdownWrapper)
    return dropdownWrapper
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
    const dropdownMenuItems = this.el.shadowRoot.querySelectorAll('.dropdown-item');
    for (let i = 0; i < dropdownMenuItems.length; i++) {
      this.handleClassList(dropdownMenuItems[i], 'remove', 'active')
    }
  }

  addActiveMenuItem = (e) => {
   
    if (typeof e.target.className !== 'string') return;
    if (e.target.className.includes('dropdown-menu')) return;

    if (e.target.className.toLowerCase() === 'inf__dropdown-search'
      || e.target.className.toLowerCase() === 'inf__dropdown-select') {
      return;
    }

    if (this.filter) {
      const input = e.target.shadowRoot.querySelector('input')
      console.log('e', input)
      if (input) {
        input.checked = !input.checked
      }
      return;
    }

    this.removeActiveMenuItem()
    if (e.target.className === 'form-check-label') {
      this.handleClassList(e.target.parentElement, 'add', 'active')
    } else this.handleClassList(e.target, 'add', 'active')

    this.toggleDropdownMenu()
  }

  handleOutsideClick(e) {
    if (e.target.tagName.toLowerCase() === 'html') {
      this.closeDropdownMenu()
    } else return;
  }

  addEventListeners() {
    const dropdownMenu = this.getDropdownMenu();
    document.addEventListener('click', this.handleOutsideClick.bind(this))
    dropdownMenu.addEventListener('click', this.addActiveMenuItem)
  }

  componentDidRender() {
    //const slottedButton = this.el.shadowRoot.querySelector('slot[name=button]')
    const buttonComponent = document.querySelector('ifx-button').shadowRoot;
    const buttonElement = buttonComponent.querySelector('button');
    buttonElement.addEventListener('click', this.toggleDropdownMenu.bind(this))
   
    this.addEventListeners()
  }

  render() {

    // const sizeClass =
    //   `${this.size}` === "s"
    //     ? "btn-s"
    //     : "";

    

    return (
      <div class='dropdown'>
        <slot name="button" />
        <slot />
      </div>
    )
  }
}