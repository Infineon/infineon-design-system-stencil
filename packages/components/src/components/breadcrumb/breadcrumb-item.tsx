import { Component, h, Element, State, Listen } from '@stencil/core';

@Component({
  tag: 'ifx-breadcrumb-item',
  styleUrl: 'breadcrumb-item.scss',
  shadow: true,
})
export class BreadcrumbItem {

  @State() isLastItem: boolean = false;
  @Element() el;
  private emittedElement: HTMLElement;
  @State() uniqueId: string;

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

  @Listen('breadcrumbMenuIconWrapper')
  menuWrapperEventReEmitter(event: CustomEvent<HTMLElement>) { 
    this.emittedElement = event.detail;
  }

  getMenuIconWrapper(): HTMLElement | undefined {
    return this.emittedElement;
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

  isDropdownMenuOpen(): boolean {
    const dropdownMenu = this.getDropdownMenu()
    return dropdownMenu && dropdownMenu.classList.contains('open')
  }

  handleLastItem() { 
    const breadcrumbItems = this.el.closest('ifx-breadcrumb').querySelectorAll('ifx-breadcrumb-item')
    if(this.el === breadcrumbItems[breadcrumbItems.length-1]) { 
      this.isLastItem = true;
    } else this.isLastItem = false;
  }

  generateUniqueId(prefix = 'id') {
    return `${prefix}-${Math.random().toString(36).substring(2, 9)}`;
  }

  componentWillLoad() { 
    if (!this.uniqueId) {
      this.uniqueId = this.generateUniqueId('breadcrumb-dropdown');
    }
    this.handleLastItem()
  }

  componentDidUpdate() {
    this.handleLastItem()
  }

  componentDidLoad() { 
    const dropdownMenu = this.el.querySelector('ifx-dropdown-menu')
  
    if(!dropdownMenu) { 
      const iconMenuWrapper = this.getMenuIconWrapper();
      this.handleClassList(iconMenuWrapper, 'toggle', 'hide')
    } else { 
      dropdownMenu.isOpen = true;
    }
  }

  render() {
    return (
      <li class='breadcrumb-parent' aria-current={`${this.isLastItem ? 'page' : ""}`}>
       <li role="button" class="breadcrumb-wrapper" onClick={() => this.toggleDropdownMenu()} aria-controls={this.uniqueId} aria-haspopup="menu">
          <slot name='label' />
          <div id={this.uniqueId} class="dropdown-menu" aria-expanded={this.isDropdownMenuOpen()}>
            <slot />
          </div>
        </li>
        {!this.isLastItem && <span class="breadcrumb-divider">/</span>}
      </li>
    );
  }
}
