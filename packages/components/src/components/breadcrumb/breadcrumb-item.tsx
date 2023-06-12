import { Component, h, Element, State, Listen } from '@stencil/core';

@Component({
  tag: 'ifx-breadcrumb-item',
  styleUrl: 'breadcrumb-item.scss',
  shadow: true,
})
export class BreadcrumbItem {

  @State() isLastItem: boolean = false;
  @Element() el;

  @Listen('mousedown', { target: 'document' })
  handleOutsideClick(event: MouseEvent) {
    const path = event.composedPath();
    if (!path.includes(this.el)) {
      this.closeDropdownMenu();
    }
  }

  getDropdownMenu() {
    const dropdownMenu = this.el.shadowRoot.querySelector('.dropdown-menu');
    return dropdownMenu
  }

  getMenuIconWrapper() { 
    const menuIconWrapper = this.el.querySelector('ifx-breadcrumb-item-label')
    const container = menuIconWrapper.shadowRoot.querySelector('.breadcrumb-item-label-container')
    const menuWrapper = container.querySelector('.menu-icon-wrapper')
    return menuWrapper
  }

  handleClassList(el, type, className) {
    el.classList[type](className)
  }

  closeDropdownMenu() {
    const dropdownMenu = this.getDropdownMenu()
    const menuWrapper = this.getMenuIconWrapper()
    this.handleClassList(dropdownMenu, 'remove', 'open')
    this.handleClassList(menuWrapper, 'remove', 'show')
  }

  toggleDropdownMenu() { 
    const dropdownMenu = this.getDropdownMenu()
    const menuWrapper = this.getMenuIconWrapper()
    this.handleClassList(dropdownMenu, 'toggle', 'open')
    this.handleClassList(menuWrapper, 'toggle', 'show')
  }

  componentWillLoad() { 
    const breadcrumbItems = this.el.closest('ifx-breadcrumb').querySelectorAll('ifx-breadcrumb-item')
    if(this.el === breadcrumbItems[breadcrumbItems.length-1]) { 
      this.isLastItem = true;
    } else this.isLastItem = false;
  }

  componentDidLoad() { 
    const dropdownMenu = this.el.querySelector('ifx-dropdown-menu')
    if(!dropdownMenu) { 
      const iconMenuWrapper = this.getMenuIconWrapper();
      this.handleClassList(iconMenuWrapper, 'toggle', 'hide')
    }
  }

  render() {
    return (
      <li class='breadcrumb-parent' aria-current={`${this.isLastItem ? 'page' : ""}`} onClick={this.toggleDropdownMenu.bind(this)}>
       <li class="breadcrumb-wrapper">
          <slot name='label' />
          <div class="dropdown-menu">
            <slot />
          </div>
        </li>
        {!this.isLastItem && <span class="breadcrumb-divider">/</span>}
      </li>
    );
  }
}
